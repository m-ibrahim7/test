const FormData = require('../models/FormData.js');

// Handle form submission
const submitForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newEntry = new FormData({ name, email, message });
        await newEntry.save();
        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

// Fetch all form data
const getFormData = async (req, res) => {
    try {
        const data = await FormData.find(); // Retrieve all form data
        res.status(200).json(data); // Send the data as JSON response
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = { submitForm, getFormData };
