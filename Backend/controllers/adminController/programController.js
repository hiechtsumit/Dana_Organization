const programModel = require('../../models/programModel');

// get all programs
module.exports.all_Programs = async(req,res)=>{
    try {
        // const prohrams = await programModel.find().limit().offset();
        return res.send({
            status: 200,
            message: "Programs fetched successfully",
        });
    } catch (error) {
        return res.status(500).json(err);
    }
}




// add new programs
module.exports.add_Program = async(req,res)=>{
    try {
        const newProgram = new programModel(req.body);
        await newProgram.save();
        res.status(200).json(newProgram);
    } catch (error) {
        res.status(500).json(err);
    }
}