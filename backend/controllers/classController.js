const Class = require('../models/Class');

exports.createClass = async (req, res) => {
  try {
    const { title } = req.body;
    const instructor = req.user.id; // Assuming the instructor is the logged-in user

    if (!title) {
      return res.status(400).json({ message: 'Class title is required' });
    }

    const newClass = new Class({
      title,
      instructor
    });

    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
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
