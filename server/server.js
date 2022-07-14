const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors  = require("cors")
const addvechile = require("./routes/AddVechile")
const search_ride = require("./routes/SearchRides")
const signin = require("./routes/User")
const customerReview = require("./routes/CustomerReview")
const settings = require("./routes/Settings")

//connecting env file
dotenv.config();

//connecting to database
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }).then(
        console.log("Database connected"))
    ;



app.use(cors({
    origin: 'https://www.section.io',
origin: ['https://www.section.io', 'https://www.google.com/'],
origin: '*',
allowedHeaders: 'X-Requested-With, Content-Type, Authorization',
methods: 'GET, POST, PATCH, PUT, POST, DELETE, OPTIONS'
}))

app.use(express.json());


app.use("/settings", settings);
app.use("/", customerReview)
app.use("/addvechile", addvechile)
app.use("/search", search_ride)
app.use("/signin", signin)

app.listen(process.env.PORT, ()=>
{
    console.log(`Server running on port ${process.env.PORT}`)
});




