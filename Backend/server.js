const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
require("dotenv").config()
app.use(cors())
app.use(express.json())
const coursesSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    authorImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
const courses = mongoose.model("courses", coursesSchema)
app.get("/courses", async (req, res) => {
    const courseTarget = await courses.find()
    res.send(courseTarget)
})
app.get("/courses/:id", async (req, res) => {
    const { id } = req.params
    const target = await courses.findById(id)
    res.send(target)
})
app.post("/courses", async (req, res) => {
    const { image, title, desc, author, authorImage, price } = req.body
    const newCourses = new courses({ image: image, title: title, desc: desc, author: author, authorImage: authorImage, price: price })
    await newCourses.save()
    const coursetarget = await courses.find()
    res.send(coursetarget)
})
app.delete("/courses/:id", async (req, res) => {
    const { id } = req.params
    await courses.findByIdAndDelete(id)
    const courseTarget = await courses.find()
    res.send(courseTarget)
})
mongoose.connect(process.env.CS).then(res => {
    console.log("db connected");
})
app.listen(process.env.PORT, (req, res) => {
    console.log("bu server işləyir")
})