const User = require('../model/user');
const Blog = require('../model/blog');
const Serviceintro = require('../model/serviceintro');
const Service = require('../model/service');
const Customer = require('../model/customer');
const Team = require('../model/team');
const Testimonial = require('../model/testimonial');
const Portfolio = require('../model/portfolio');
const Certificate = require('../model/certificate');



// Service

exports.insertService = (req, res, next) => {
    const serviceid = req.body.serviceid;
    const heading = req.body.heading;
    const imageurl = req.body.imageurl;
    const content = req.body.content;

    const list = new Serviceintro({
        serviceid : serviceid,
        heading: heading,
        content: content,
        imageur: imageurl
    })

    list.save()
    .then(result => {
        res.status(200).json({
            data : result
        })
    })
}


exports.insertServiceDetails = (req, res, next) => {
    const serviceid = req.body.serviceid;
    const heading = req.body.heading;
    const imageurl = req.body.imageurl;
    const description = req.body.description;

    const list = new Service({
        serviceid : serviceid,
        heading: heading,
        description: description,
        imageurl: imageurl
    })

    list.save()
    .then(result => {
        res.status(200).json({
            data : result
        })
    })
}

exports.getService = (req, res, next) => {
    Serviceintro.find()
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


// testimonial

exports.insertTestimonial = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const position = req.body.position;
    const company = req.body.company;
    const logo = req.body.logo;
    const description = req.body.description;

    const list = new Testimonial({
        name:name,
        email:email,
        position:position,
        company:company,
        logo:logo,
        description:description
    })

    list.save()
    .then(result => {
        res.status(200).json({
            data : result
        })
    })
}

exports.getTestimonial = (req, res, next) => {
    Testimonial.find()
    .then(result => {
        res.jstatus(200).json({
            data:result
        })
    })
}


// Portfolio
exports.insertPortfolio = (req, res, next) => {
    const projectid = req.body.projectid;
    const title = req.body.title;
    const category = req.body.category;
    const description = req.body.description;
    const company = req.body.company;
    const thumbnail = req.body.thumbnail;

    const list = new Portfolio({
        projectid:projectid,
        title:title,
        category:category,
        description:description,
        company:company,
        thumbnail:thumbnail
    })

    list.save()
    .then(result => {
        res.status(200).json({
            data : result
        })
    })
}

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

exports.insertTeam = (req, res, next) => {
    const name = req.bady.name;
    const email = req.body.email;
    const phonenum = req.body.phonenum;
    const position = req.body.position;
    const linkedin = req.body.linkedin;
    const imagelink = req.body.imagelink;

    const list = new Team({
        name:name,
        email:email,
        phonenum:phonenum,
        position:position,
        linkedin:linkedin,
        imagelink:imagelink
    })

}

exports.getTeam = (req, res, next) => {
    Team.find()
    .then(result => {
        res.status(200).json({
            data:result
        })
    })
}
//Customer

exports.getAllCustomer = (req, res, next) => {
    Customer.find()
    .then(result => {
        res.status(200).json({
            data:result
        })
    })
}

// Create Certificate

exports.insertCertificate = (req, res, next) => {
    const certificateid = req.body.certificateid;
    const name = req.body.name;
    const email =  req.body.email;
    const imageurl =  req.body.imageurl;

    const list = new Certificate({
        certificateid: certificateid,
        name:name,
        email:email,
        imageurl:imageurl
    })

    list.save()
    .then(result => {
        res.status(200).json({
            data:result
        })
    })
}

exports.getAllCertificate = (req, res, next) => {
    Certificate.find()
    .then(result => {
        res.status(200).json({
            data:result
        })
    })
}

