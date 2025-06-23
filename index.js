import express from "express";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/user", (req, res) => {
    const user = []
    const body = req.body
    user.push(body)
    res.send(user)
})




app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});