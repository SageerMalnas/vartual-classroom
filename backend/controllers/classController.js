const Class = require('../models/Class');

//For Creating a new class
exports.createClass = async (req,res) =>{
    const {title, instructor} = req.body;
    try{
        const newClass = new Class({title,instructor});
        await newClass.save();
        res.status(201).json(newClass);
    } catch(err){
        res.status(400).json({err: err.message});
    }
};

//Get all classes
exports.getClasses = async (req,res) =>{
    try {
        const classes = await Class.find().populate('instructor units');
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
