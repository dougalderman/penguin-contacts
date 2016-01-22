var Penguin = require('../models/Penguin');

module.exports = {
    create: function(req, res) {
        Penguin.create(req.body, function(createErr, newPenguin) {
           if (createErr) {
               res.status(500).json(createErr);
           } else {
               res.json(newPenguin);
           }
            
        });
    },
    
    read: function(req, res) {
        Penguin.find({})
        .exec(function(findErr, findResults) {
            if (findErr) {
               res.status(500).json(findErr);
           } else {
               res.json(findResults);
           }
        })
    
    }

}