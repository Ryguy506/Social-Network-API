const { thought , user } = require('../models');


module.exports = {
    async getAllThoughts(req, res) {
        try {
            const getAllThoughts = await thought.find({});
            res.status(200).json(getAllThoughts);
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async getOneThought(req, res) {
        try {
            const getOneThought = await thought.findOne({ _id: req.params.id })
            res.status(200).json(getOneThought)
        }
        catch (err) {
            console.log(err)
            res.status(200).json(err)
        }
    },
    async createThought(req, res){
        try{
           const createThought = await thought.create(
        {thoughtText : req.body.thoughtText , username : req.body.username})
        
            
await user.findOneAndUpdate({ _id: req.body.userId }, { $push: { thoughts: createThought._id } }, { new: true})

            res.status(200).json(createThought)
        


        }
        catch (err){
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteThought(req, res) {
        try {
            await thought.findOneAndDelete({ _id: req.params.id } );
            
            res.status(200).json({ message: 'Thought deleted' });
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {

        try{
            await thought.findOneAndUpdate({ _id: req.params.id } , {
                thoughtText: req.body.thoughtText , username : req.body.username
                }, { new: true ,runValidators: true})
            res.status(200).json({message: 'Thought updated'})
        }
        catch (err){
            console.log(err)
            res.status(500).json(err)
        }
    
}, 
async addReaction(req, res){
    try{
        await thought.findOneAndUpdate({ _id: req.params.id } , {
            $push: { reactions: {reactionId : req.body.reactionId , reactionBody : req.body.reactionBody , username : req.body.username , createdAt : req.body.createdAt}}
        })
        res.status(200).json({message: 'Reaction added'})
    }
    catch (err){
        console.log(err)
        res.status(500).json(err)
    }
}
,
async deleteReaction(req, res){
    try{
        await thought.findOneAndUpdate({ _id: req.params.id } , {
            $pull: { reactions: {reactionId : req.body.reactionId}}
        })
        res.status(200).json({message: 'Reaction deleted'})
    }
    catch (err){
        console.log(err)
        res.status(500).json(err)
    }
}
}