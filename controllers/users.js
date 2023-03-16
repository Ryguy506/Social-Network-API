const { user ,thought } = require('../models');


module.exports = {
    // GET all users
    async getAllUsers(req, res) {
       try {
           const allUsers = await user.find({});
           res.status(200).json(allUsers);
       }
         catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
        

    },

 async createUser(req, res) {

        try {
            const newUser = await user.create({
                username: req.body.username,
                email: req.body.email
            });
            res.status(200).json(newUser);
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }

},


async getOneUser(req, res) {
    try {
        const oneUser = await user.findOne({ _id: req.params.id });
        res.status(200).json(oneUser);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
},

async updateUser(req, res) {
try {
   const updateUser = await user.findOneAndUpdate({ _id: req.params.id } , {
        username: req.body.username,
        email: req.body.email
     } , { new: true ,runValidators: true})
    res.status(200).json(updateUser);
}
catch (err) {
    console.log(err);
    res.status(500).json(err);

}
},
}
