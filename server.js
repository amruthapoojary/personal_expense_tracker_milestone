const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expenseRoutes = require('./routes/expenseRoutes');



const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/expenses', expenseRoutes);

// Start Server
const PORT = 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

