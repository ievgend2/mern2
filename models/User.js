const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // add name  and other required user info below
    links: [{ type: Types.ObjectId, ref: "Link" }],
    // address: { type: String },


})

module.exports = model('User', schema)