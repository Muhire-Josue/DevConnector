const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/api/user.routes'));
app.use('/api/auth', require('./routes/api/auth.routes'));
app.use('/api/profile', require('./routes/api/profile.routes'));
// app.use('/api/posts', require('./routes/api/posts'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));