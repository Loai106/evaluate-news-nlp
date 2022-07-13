var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const bodyParser = require('body-parser');

const fetch = require("node-fetch");
const { default: axios } = require('axios')



const corsOptions = {
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
}


//api credential 
const {
    BASE_API, API_KEY, 
  } = process.env;
  

const app = express()

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


//fetching the data from meaing cloud api
app.post('/evaluate',async(req,res)=>{

        
    
   const { body: { url } } = req;
   const apiUrl = `${BASE_API}?key=${API_KEY}&url=${url}&lang=en`    
   const response = await axios.post(apiUrl);
   console.log('got data')
   console.log(response.data)
   
   res.send(response.data);
    
    
    

})
