const mongoose = require("mongoose");

    const NotesSchema = new mongoose.Schema(
{
        title: {
            type: String,
            required: true
    },content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Personal", "Work", "STUDY"],
        default: "Work"
    },
    isPinned: {type: Boolean, default: false}
},
    {timestamps: true}

)







const Notes = mongoose.model("Note", NotesSchema);

module.exports = Notes;