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

async deleteUser(req, res) {
    try {
    const deleteUser =  await user.findOneAndDelete({ _id: req.params.id } );
        
  await thought.deleteMany({ _id: { $in: deleteUser.thoughts } })

    res.status(200).json({ message: 'User and thoughts deleted' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
},

async addFriend(req, res) {
    try {
        const addFriend = await user.findOneAndUpdate({ _id: req.params.id }, 
           { $addToSet: { friends: req.params.friendId }},
            {new : true}
            );
        res.status(200).json(addFriend);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
},
async removeFriend(req, res) {
    try {
        const removeFriend = await user.findOneAndUpdate({ _id: req.params.id }, 
           { $pull: { friends: req.params.friendId }},
            {new : true}
            );
        res.status(200).json(removeFriend);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
}
