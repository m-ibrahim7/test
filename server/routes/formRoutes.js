const express = require('express');
const { submitForm, getFormData } = require('../controllers/formController.js');

const router = express.Router();

// POST route to submit form data
router.post('/', submitForm);

// GET route to fetch form data
router.get('/', getFormData);

module.exports = router;
