const Column = require('../models/column');

module.exports = {
    list: (req , res) => {
        Column.find({} , (err , columnList) => {
            if(err) res.status(500).json(err)
            return res.status(200).json({columnList})
        })
    },
    create: (req , res) => {
        const title = req.body.title;
        Column.create({ title } , (err , createdColumn) => {
            if (err) return res.status(500).json(err);
            return res.json({createdColumn})
        })
    },
    delete: (req , res) => {
        const id = req.params.id;
        Column.findByIdAndDelete(id , (err , deletedColumn) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json({deletedColumn})
        })
    }
}
