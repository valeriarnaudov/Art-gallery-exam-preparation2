const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    paintnigTechnique: {
        type: String,
        required: [true, 'Paintnig technique is required'],
    },
    artPicture: {
        type: String,
        required: [true, 'Art picture is required'],
    },
    certificate: {
        type: String,
        enum: ['Yes', 'No'],
        required: [true, 'Certificate is required'],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    usersShared: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;