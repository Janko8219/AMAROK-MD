const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
welcome:{ type: String, default: "@pp *Hi,* @user \n*Welcome in* @gname \n*Member count* : @count th" },
goodbye:{ type: String, default: "@pp *Just Another Sayain.*\nUser: @user" },
})
const amk =mongoose.model("Amk", GroupSchema)
module.exports = { amk }
