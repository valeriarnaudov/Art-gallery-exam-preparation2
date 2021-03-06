const Publication = require("../models/Publication");

exports.create = async (publicationData) => await Publication.create(publicationData);

exports.getAll = () => Publication.find();

exports.getOne = (publicationId) => Publication.findById(publicationId);

exports.getOneDetailed = (publicationId) =>
    Publication.findById(publicationId).populate("author");

exports.update = (publicationId, publicationData) =>
    Publication.updateOne(
        { _id: publicationId },
        { $set: publicationData },
        { runValidators: true }
    );

exports.delete = (publicationId) =>
    Publication.deleteOne({ _id: publicationId });

