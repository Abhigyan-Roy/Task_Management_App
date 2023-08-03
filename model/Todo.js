import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    data: {
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        priority: {
            type: String,
            required: true,
            default:"Low"
        },
        deadline: {
            type: Date,
            required: true
        }
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const todo = mongoose.model('todo', TodoSchema);

export default todo;