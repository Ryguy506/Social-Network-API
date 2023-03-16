const { Schema, model } = require('mongoose');
// moment for date formatting
const moment = require('moment');




const Thoughts = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now

    },
    username: {
        type: String,
        required: true
    },
    reactions: [
        {
            reactionId: {
                type: Schema.Types.ObjectId,
                default: () => new Types.ObjectId()
            },
            reactionBody: {
                type: String,
                required: true,
                maxlength: 280
            },
            username: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        
        }
    ]
},

    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    })


Thoughts.path('createdAt').get((date) => moment(date).format('MMMM Do YYYY, h:mm:ss a'));

Thoughts.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thoughts', Thoughts);

module.exports = Thought;