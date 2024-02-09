const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/registrationForm")
.then(()=>{
    console.log("Mongo Connected succesfully");
})
.catch(()=>{
    console.log("failed to connect");
})

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars middleware
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static('public'));

// Routes
const registrationRoutes = require('./routes/registrationRoutes');
app.use('/register', registrationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
