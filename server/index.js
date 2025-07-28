const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();
connectDB();


// Middleware & App Setup
const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON body


// Routes
app.use('/api/users', userRoutes);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
