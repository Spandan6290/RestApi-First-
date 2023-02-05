require("dotenv").config();
const express = require("express")
const app = express();
const connectDB = require("./db/connect")

const port = process.env.port||3000;

const products_routes = require("./routes/products")

app.get("/",(req,res)=>{
    res.send("Hii This is my first rest api");
})

app.use("/api/products",products_routes);

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port,()=>{
            console.log(`${port} yes I am connected`);
        })
    } catch (error) {
        console.log(error);
    }
}

// yT.z89Pwu5rU9i5
// SpandanAPI6290
// mongodb+srv://Spandan:<password>@spandanapi6290.10y9czb.mongodb.net/?retryWrites=true&w=majority

start()