require('dotenv').config() //- dotenv file is configured here
const express = require('express') //- express is configured here
const app = express() //- app gets all the powers of express
// const port = 5000

const jsonData = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
    "key4": "value4",
    "key5": "value5",
    "key6": "value6",
    "key7": "value7",
    "key8": "value8",
    "key9": "value9",
    "key10": "value10"
}
app.get('/', (req, res) => {    //- a callback function is passed with request and response
    res.send('Hello World!')  //- can be viewed at localhost:port number. In this case it's localhost:3000 
})
app.get("/about", (req, res) => {
    res.send("<h1>This is main heading of about page</h1>")    //- this gets displayed on page
})
app.get("/api", (req, res) => {
    res.json(jsonData)  //- sends json data
})

app.listen(process.env.PORT, () => { //- port is taken from .env file
    console.log(`Example app listening on port ${process.env.PORT}`)
})