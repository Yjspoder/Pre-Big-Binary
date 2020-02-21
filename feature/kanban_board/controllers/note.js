const Note = require('../models/note');

module.exports = {
    list: (req , res) => {
        Note.find({} , (err , noteList) => {
            if(err) res.status(500).json(err);
            return res.status(200).json({noteList});
        })
    },
    create: (req , res) => {
        const {title , columnId} = req.body;
        Note.create({title , columnId} , (err , createdNote) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json({createdNote});
        })
    },
    edit: (req , res) => {
        console.log(req.body , 'inside controller')
        const {columnId} = req.body;
        const {id} = req.params;
        Note.findByIdAndUpdate(id , {columnId} , {new : true} , (err , updatedNote) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json({updatedNote});
        })  
    }
}