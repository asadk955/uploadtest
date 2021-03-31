

var products=require('./data/products.json');
var customers=require('./data/custromers.json');

const express = require('express');
var app = express();


// HTTP request types are mapped with 
// HTTP handler which is callback function
// call back function takes two parameter
// request object and response object

app.get('/', (req, res) => {
    res.send('Hello World!')
});
  
app.get('/products',(req, res)=>{ 
      res.send(products);
});
  
app.get('/customers',(req,res)=>{
      res.send(customers);
});
  
app.post('/customer', function (req, res) {

    res.send('Got a POST request: adding new customer');
      // write a logic to insert customer data to database 

});
   
app.put('/customer/:id', function (req, res) {
  res.send('Got a PUT request at /user : Updating existing customer');

   // write a logic to update existing customer data into database
   // mysql or mongoDB

});

app.delete('/customer/:id', function (req, res) {
      res.send('Got a DELETE request at /customer : deleting customer');
});
 
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});