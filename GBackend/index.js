import mongoose from "mongoose";
import express, { urlencoded } from "express";
import cors from "cors";

// import UserModel from "./models/User";

const app=express();
app.use(cors()); //cross origin resource sharing
app.use(urlencoded());
app.use(express.json());

//connecting with mongodb
mongoose.connect("mongodb://localhost:27017/gross").then(
    (ack)=>{
        if(ack)
        console.log("Database connected Successfully!!");
    }
).catch(
    (err)=>{console.log("Error"); }
    );


//creating collections in database rrce



app.post('/Login',(req,res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success!")
            } else {
                res.json("The password is incorrect")
            }
        } else {
            res.json("No record Existed")
        }
    
    })
})




const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UserModel = mongoose.model("users", UserSchema)

app.post('/register', (req, res) => {
    const { email } = req.body;

    // Check if the email exists in the database
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                // If a user with the given email exists, return an appropriate message
                res.json("Email-id is already registered");
            } else {
                // If no user exists with the given email, create a new user
                UserModel.create(req.body)
                    .then(newUser => {
                        console.log(newUser)
                    res.json("Registered")    
                    })
                    .catch(err => {
                        console.error(err);
                        res.json("Error registering user");
                    });
            }
        })
        .catch(err => {
            console.error("Error finding user:", err);
            res.status(500).json("Error checking email",err);
        });
});



// app.post('/register',(req,res) => {


//     const {email} = req.body;
//     UserModel.findOne({email: email})
//     .then(user => {
//         if(user.email === email) {
            
//                 res.json("Email-id is already registered")
//             } else {
//                 res.json("Registered")
//             }
//         })
    
//     // UserModel.create(req.body)
//     // .then(users => res.json(users))
//     // .catch(err => res.json(err))
// })



//schema creation for filtering of the data sent from front-end
const orderSchema= new mongoose.Schema({
    title:String,
    price:Number,
    catagory:String,
    description:String,
    image:String,
    rating:{rate:Number, count:Number },
    id:Number,
    email:String
})

const orders= new mongoose.model("orders",orderSchema)

//api to add orders
//req,res variables represents below info
//req is refering tp data sent frpm front-end
//res is used to send back the response back to front-end
app.post("/placeorder", (req,res)=>{
     console.log("data from FE",req.body);

     const { id, title, price, category, description, image, rating, email } = req.body;
     
     orders.findOne({ email, id }).then(
        (exist)=>{
            if(exist){
                res.send("Order is allready placed. Thank You")
            }
            else{
                const newOrder = new orders({
                    id,
                    title,
                    price,
                    category,
                    description,
                    image,
                    rating,
                    email,
                });
               // newOrder=orders(req.body) //req.body will contain the data sent from FE
                newOrder.save().then((isOrdered)=>{
                    if(isOrdered){
                        res.send("Order Placed. Thank You")
                    }
                    else{
                        res.send("Something went wrong. Please try again!!")
                    }
                }) 
            }
        }
     );


  } 
)




// port creation for our server
app.listen(4000,()=>{console.log("Server started at port 4000") });
