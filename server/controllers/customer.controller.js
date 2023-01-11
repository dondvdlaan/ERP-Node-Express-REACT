/**
 * Controller for customer. All requests will be handled here
 */
// *** Imports ***
const express 	= require('express');

// *** Constants and variables ***
const router = express.Router();

// ** Middleware **
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

// *** Routes ***
router.get('/', (req, res, next) => {

    console.log("Route:  /customer ");

    let token = "Good day";
    res.status(200).send('Todo bien !')
})

router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router