const { Schema, model } = require('mongoose');


const Users = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^\S+@\S+\.\S+$/
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            
        },
        id: false
    }

);

Users.virtual('friendCount').get( function() {
    return this.friends.length;
});    



const User = model('Users', Users);

module.exports = User;

