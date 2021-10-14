const User = require("../models/User");
const bcrypt = require('bcrypt');

const save = async user => {
    const hash = await bcrypt.hash(user.password, 10);
    return await User.create({...user, password: hash});
}


module.exports = { save }