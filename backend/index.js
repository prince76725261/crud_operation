const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())



mongoose.connect("mongodb+srv://princekumarsingh3625:tEyL9zRm3q0SAZqF@cluster0.yns896b.mongodb.net/crud_op-main?retryWrites=true&w=majority").then(()=>{
    console.log("mongodb connected successfully")
}).catch((err)=>{
    console.log(err);
})

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

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Assuming UserModel contains user information
    UserModel.findOne({ username })
        .then(user => {
            if (!user) {
                // If user is not found, return error response
                return res.status(404).json({ message: "User not found" });
            }

            // Check if password matches
            if (user.password !== password) {
                // If password doesn't match, return error response
                return res.status(401).json({ message: "Invalid credentials" });
            }

            // If username and password match, return success response
            res.status(200).json({ message: "Login successful" });
        })
        .catch(err => {
            // Handle any errors
            console.error("Error during login:", err);
            res.status(500).json({ message: "Internal server error" });
        });
});


app.post("/RegisterForm", (req, res) => {
    console.log("kya be register hua");
    UserModel.create(req.body)
        .then(users => res.json(users))
    .catch(err=> res.json(err))
})

app.post("/ShowModal", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
    .catch(err=> res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
   // console.log(id)
    UserModel.findById({_id: id })
        .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, {
        Roll: req.body.Roll1,
        Name: req.body.Name1,
        semester: req.body.semester1,
        Branch: req.body.Branch1
    })
        .then(users => { res.json(users);})
        .catch(err => { res.json(err);})
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
    .catch(err=>res.json(err))
})

app.listen(5500, () => {
    console.log("server is running well")
})