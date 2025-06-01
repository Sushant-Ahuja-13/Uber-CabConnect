const captainModel = require('../models/captain.model.js');

module.exports.createCaptain = async ({ fullname, email, password, vehicle }) => {
    if (
        !fullname?.firstname ||
        !email ||
        !password ||
        !vehicle?.color ||
        !vehicle?.plate ||
        !vehicle?.capacity ||
        !vehicle?.vehicleType
    ) {
        throw new Error('Please fill all the fields');
    }

    const captain = await captainModel.create({
        fullname,
        email,
        password,
        vehicle
    });

    return captain;
};
