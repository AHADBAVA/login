const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

mongoose.connect('mongodb+srv://ahaddesgins:1cVtgxCpUyBtG8pN@cluster0.28zghao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Employee = mongoose.model('Employee', employeeSchema);

app.post('/api/employees', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const employee = new Employee({ name, email, password });
    await employee.save();
    res.status(201).json({ message: 'Employee registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



// name
// "John"
// email
// john@example.com