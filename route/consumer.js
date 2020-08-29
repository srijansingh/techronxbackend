const express = require('express');

const {
    getService,getServiceDetails, getAllServiceDetails,getSingleService,
    getTestimonial,
    getAllPortfolio,getByIdPortfolio,
    getTeam,
    insertCustomer
} = require('../controller/consumer');

const router = express.Router();

//Service router

router.get('/serviceintro', getService);
router.get('/serviceintro/:serviceid', getSingleService);
router.get('/services', getAllServiceDetails);
router.get('/services/:serviceid', getServiceDetails); 

//Testimonial router


router.get('/testimonial', getTestimonial);


//Portfolio router


router.get('/portfolio', getAllPortfolio);
router.get('/portfolio/:id', getByIdPortfolio);


//Team router

router.get('/team', getTeam);

//Customer

router.post('/customer', insertCustomer);

module.exports = router;