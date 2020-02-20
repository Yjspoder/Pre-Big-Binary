const Project = require('../models/project');

module.exports = {
    list: (req , res) => {
        Project.find({} , (err , projectList) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json({projectList});
        })
    },
    edit: (req , res) => {
        const {columnId} = req.body;
        const {id} = req.params;
        let columns = [];
        Project.findById(id , (err , project) => {
            if(err) return res.status(500).json(err);
            columns = [...project.columns , columnId];
        })
        Project.findByIdAndUpdate(id , {columns} , {new : true} , (err , updatedProject) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json({updatedProject});
        })
    }
}