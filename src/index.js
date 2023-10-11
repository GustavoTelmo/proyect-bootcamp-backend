const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/routes')
const app = express();
const port = process.env.PORT || 8000;
require('dotenv').config();


app.use(cors({origin:'*'}));
app.use(express.json());
app.use('/api',userRoutes);

app.get("/",(req,res)=> {
  res.send('welcome to my API')
});


mongoose.connect(process.env.MONGODB_CONNECT)
        .then(()=>console.log('connected mongodb atlas'))
        .catch((error)=>error.log(error));

app.listen(port,()=>console.log('server listening on port',port));
