const express = require('express');
const { creatUser, handleLogin } = require('../controllers/userController');

const routerAPI = express.Router();

// const { getUsersAPI, postCreateUserAPI,
//     putUpdateUserAPI, deleteUserAPI

// } = require('../controllers/apiController')


// routerAPI.get('/users', getUsersAPI);
// routerAPI.post('/users', postCreateUserAPI);
// routerAPI.put('/users', putUpdateUserAPI);
// routerAPI.delete('/users', deleteUserAPI);

routerAPI.get('/test-api', (req, res) => {
    return res.status(200).json({
        message: 'Hello from API'
    })
});

routerAPI.post('/register', creatUser);
routerAPI.get('/login', handleLogin);

module.exports = routerAPI; //export default