const User = require('../model/user');
const Blog = require('../model/blog');
const Serviceintro = require('../model/serviceintro');
const Service = require('../model/service');
const Customer = require('../model/customer');
const Team = require('../model/team');
const Testimonial = require('../model/testimonial');
const Portfolio = require('../model/portfolio')

//Service Controller for Consumer

exports.getService = (req, res, next) => {
    Serviceintro.find()
    .then(result => {
        res.status(200).json({
            data : result
        })
    })
}


exports.getSingleService = (req, res, next) => {
    const serviceid = req.params.serviceid
    Serviceintro.find({"serviceid" : `${serviceid}`})
    .then(result => {
        res.status(200).json({
            data : result
        })
    })
}


exports.getServiceDetails = (req, res, next) => {
    const serviceid = req.params.serviceid
    Service.find({"serviceid" : `${serviceid}`})
    .then(result => {
        res.status(200).json({
            data : result
        })
    })
}

exports.getAllServiceDetails = (req, res, next) => {
    Service.find()
    .then(result => {
        res.status(200).json({
            data : result
        })
    })
}


//Testimonial

exports.getTestimonial = (req, res, next) => {
    Testimonial.find()
    .then(result => {
        res.jstatus(200).json({
            data:result
        })
    })
}

//Portfolio

exports.getAllPortfolio = (req, res, next) => {
    Testimonial.find()
    .then(result => {
        res.jstatus(200).json({
            data:result
        })
    })
}

exports.getByIdPortfolio = (req, res, next) => {
    const id = req.params.id;

    Testimonial.findById(id)
    .then(result => {
        res.jstatus(200).json({
            data:result
        })
    })
}

//Team 

exports.getTeam = (req, res, next) => {
    Team.find()
    .then(result => {
        res.status(200).json({
            data:result
        })
    })
}


// Customer 

exports.insertCustomer = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phonenum = req.body.phonenum;
    const occpation = req.body.occpation;

    const list = new Customer({
        name:name,
        email:email,
        phonenum:phonenum,
        occpation:occpation
    })

    list.save()
    .then(result => {
        console.log(result)
        res.status(200).json({
            data:result
        })
    })
    .catch(err => {
        console.log(err)
    })
}