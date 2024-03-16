const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

app.use(cors());

// Dummy user data (replace this with your actual user authentication logic)
const users = [
    { id: 1, username: 'user1', password: 'password1', role: 'admin' },
    { id: 2, username: 'user2', password: 'password2', role: 'user' }
  ];
// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      // Modify the response to include additional user data
      const { id, username , role } = user; // Extracting necessary data
      const userData = { id, username, role , url: 'https://risolutor.blob.core.windows.net/gshapp/99851e83-1caf-4e7d-aef3-51a724f5159f.png?sv=2022-11-02&spr=https&st=2024-02-16T05%3A40%3A09Z&se=2027-08-01T13%3A40%3A09Z&sr=c&sp=racwdl&sig=WLVoWZIPpL6fH1a0nfArkd9tIYqpMLRNqHHmFkVePgU%3D' }; // Additional user data
      res.status(200).json({ message: 'Login successful!', userData });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });
  app.get('/api/userdata', (req, res) => {
    const userData = { firstName: 'John', lastName: 'Doe', userId: '4', email: 'john@example.com', mobileNumber: '1234567890' };
    res.status(200).json(userData);
  });
  

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
