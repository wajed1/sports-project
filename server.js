const express = require("express")
const collection = require("./mongo")
const Product = require("./pdata")
const cors = require("cors")
const bodyParser = require('body-parser');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{username,pass}=req.body

    try{
        const check=await collection.findOne({username:username})
        const check2=await collection.findOne({pass:pass})

        if(check && check2){
            const token = jwt.sign({ check: check.username }, 'amcywbhajgdamajacnrlbmhalpg', { expiresIn: '1h' });
            res.json({status: "exist", token: token})
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{username,pass}=req.body

    const data={
        username:username,
        pass:pass
    }

    try{
        const check=await collection.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post('/product', async (req, res) => {
    try {
      const cart = req.body.cart;
  
      // Save each product in the cart to the database
      await Promise.all(cart.map(async (product) => {
        await Product.create(product);
      }));
  
      res.status(201).json({ message: 'Checkout successful' });
    } catch (error) {
      console.error('Error during checkout:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.listen(8000,()=>{
    console.log("port connected");
})
