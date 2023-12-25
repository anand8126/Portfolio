const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

mongoose.connect('mongodb+srv://apchaudhary6695:anand8126@cluster0.m0uykuj.mongodb.net/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName:String,
  mobile:String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', async (req, res) => {
    try {
      const { firstName, lastName, mobile, email, message } = req.body;
  
      // Save the contact form data to the database
      const contact = new Contact({ firstName, lastName, mobile, email, message });
      await contact.save();
  
      res.send('Message received!'); // You can customize this response
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});