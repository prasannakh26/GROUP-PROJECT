const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Mock database for users
let users = [];

// Register a user
app.post('/register', (req, res) => {
    const { name, email, goals, fitnessLevel, dietaryPreferences } = req.body;
    const user = { id: users.length + 1, name, email, goals, fitnessLevel, dietaryPreferences };
    users.push(user);
    res.json({ msg: 'User registered', user });
});

// Generate personalized plans
app.post('/plans', (req, res) => {
    const { email, goals, fitnessLevel, dietaryPreferences } = req.body;
    const fitnessPlan = `Your fitness plan based on ${goals} and ${fitnessLevel}.`;
    const nutritionPlan = `Your nutrition plan tailored for ${dietaryPreferences}.`;
    res.json({ fitnessPlan, nutritionPlan });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

