const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const multer = require('multer');
const jwt = require('jsonwebtoken');
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const { fileURLToPath } = require('url');
const connectDB=require('./config/db');
const dotenv=require('dotenv');
const secret="Prince@123"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// dotenv.config();
connectDB;


app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})
app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


app.get('/api/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});



app.post("/login", (req, res) => {
    const { username, password } = req.body;

    UserModel.findOne({ username })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            if (user.password !== password) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            //  Generate JWT token
            const token = jwt.sign({ username: user.username }, secret, { expiresIn: '1h' });

            res.status(200).json({ message: "Login successful", token });
        })
        .catch(err => {
            console.error("Error during login:", err);
            res.status(500).json({ message: "Internal server error" });
        });
});




app.post("/ShowModal", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id)
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, {
        Roll: req.body.Roll1,
        Name: req.body.Name1,
        semester: req.body.semester1,
        Branch: req.body.Branch1
    })
        .then(users => { res.json(users); })
        .catch(err => { res.json(err); })
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})



app.post("/RegisterForm", async (req, res) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads');
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname);
        }
    });

    const upload = multer({ storage: storage }).single('file');

    try {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(500).json({ success: 'false', message: "file upload failed" });
            }

            const { username, password, confirmpassword, Branch, semester, Name, Roll } = req.body;
            const { filename, path, size } = req.file;
            const newUser = new UserModel({
                username,
                password,
                confirmpassword,
                Branch,
                semester,
                Roll,
                Name,
                profilePic: { filename, path, size, uuid: uuidv4() }
            })
            const user = await newUser.save();
            res.json(user)

        })
    } catch (error) {
        res.json({ success: 'false', message: 'Internal server error' })
    }
});



app.get('/api/image/:uuid', async (req, res) => {
    const img = await UserModel.findOne({ 'profilePic.uuid': req.params.uuid });
    if (!img) {
        return res.status(404).json({ success: false, message: 'Image Not Found' });
    }
    const fileName = img.profilePic.filename;
    const filePath = path.join(__dirname, 'uploads', fileName);

    res.sendFile(filePath);
    // res.send(filePath);
});



app.listen(5500, () => {
    console.log("server is running well")
})
