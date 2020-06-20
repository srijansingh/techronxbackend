const express = require('express');

const {
    insertService,insertServiceDetails,getService,getServiceDetails, getAllServiceDetails,
    insertTestimonial,getTestimonial,
    insertPortfolio,getAllPortfolio,getByIdPortfolio,
    insertTeam,getTeam,
    insertCertificate, getAllCertificate,
    getAllCustomer
} = require('../controller/admin');




const router = express.Router();

//Service router

router.post('/serviceintro', insertService);
router.post('/services', insertServiceDetails);
router.get('/serviceintro', getService);
router.get('/services', getAllServiceDetails);
router.get('/services/:serviceid', getServiceDetails); 

//Testimonial router

router.post('/testimonial', insertTestimonial);
router.get('/testimonial', getTestimonial);


//Portfolio router

router.post('/portfolio', insertPortfolio);
router.get('/portfolio', getAllPortfolio);
router.get('/portfolio/:id', getByIdPortfolio);


//Team router

router.post('/team', insertTeam);
router.get('/team', getTeam);



//Customer
router.get('/customer', getAllCustomer)

//Certificate

router.post('/certificate', insertCertificate);
router.get('/certificate', getAllCertificate);
module.exports = router;