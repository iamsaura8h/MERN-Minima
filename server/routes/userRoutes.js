const express = require('express');
const router = express.Router();
const {createUser} = require('../controllers/userController');

// POST /api/users
router.post('/',createUser); //When a POST request hits /api/Createuser, the createUser function handles it.

module.exports = router;
