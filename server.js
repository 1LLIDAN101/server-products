const express = require("express");

const mongoose = require("mongoose");
const Product = require("./Product")

const PORT = 5000;

const app = express("");
app.use(express.json())

mongoose
  .connect("mongodb://localhost:27017/products")
  .then(() => {
    console.log("успешно подкл к БД");
  })
  .catch((error) => {
    console.log("ошибка" + error);
  });

  app.post("/addproduct" , async (req , res)=>{
    const{ title , description , price} = req.body
    const newProduct = await Product.create({
        title , description , price
    })
    await newProduct.save()

    
  })

app.listen(PORT, () => {
  console.log("Сервер успешно запущен на порту: " + PORT);
});
