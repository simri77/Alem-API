const asyncHandler = require("express-async-handler");
const Constant = require("../models/contactModels");
//@desc Get all contacts
//@router GET /ALEM-API
//@access public

const getContacts = asyncHandler(async (req, res) => {
    const constants = await Constant.find();
    res.status(200).json (constants);
});

//@desc create contacts
//@router POST /ALEM-API
//@access public

const createContact = asyncHandler(async (req, res) => {
    console.log("The reuest body is :", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory !");
    }

    res.status(200).json ({message: "Create contacts"});
});

//@desc create contacts
//@router GET /ALEM-API
//@access public

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json ({message: `Get contacts for ${req.params.id}`});
});

//@desc Update contacts
//@router PUT /ALEM-API
//@access public

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json ({message: `Update contacts for ${req.params.id}`});
});

//@desc Delete contacts
//@router DELETE /ALEM-API
//@access public

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json ({message: `Delete contacts for ${req.params.id}`});
});


module.exports = { getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact 
};