const User = require('./model')
const { ApiOptions } = require('../utils/utils')

exports.getAllUsers = async (req, res, next) => {
    const apioptions = new ApiOptions(User.find(), req.query)
        .filter()
        .sort()
        .select()
        .paginate()
    const users = await apioptions.query

    if (!users) {
        return res.status(404).send({
            status: 'success',
            message: 'There is no users!',
        })
    }
    res.status(200).send({
        status: 'success',
        results: users.length,
        data: {
            users: users,
        },
    })
}

exports.getUser = async (req, res, next) => {
    const user = await User.findOne({ name: req.params.name })
    if (!user) {
        return res.status(404).send({
            status: 'fail',
            message: 'User not found!',
        })
    }
    res.status(200).send({
        status: 'success',
        data: {
            user: user,
        },
    })
}

exports.createUser = async (req, res, next) => {
    const newUser = await User.create(req.body)
    res.status(201).send({
        status: 'success',
        message: 'Created new user!',
        data: {
            user: newUser,
        },
    })
}

exports.updateUser = async (req, res, next) => {
    const updatedUser = await User.findOneAndUpdate(
        { name: req.params.name },
        req.body
    )
    if (!updatedUser) {
        return res.status(404).send({
            status: 'fail',
            message: 'User not found!',
        })
    }
    res.status(201).send({
        status: 'success',
        message: 'User successfully updated!',
    })
}

exports.deleteUser = async (req, res, next) => {
    const deleteResult = await User.findOneAndDelete({
        name: req.params.name,
    })
    if (!deleteResult.deletedCount) {
        return res.status(404).send({
            status: 'fail',
            message: 'User not found!',
        })
    }
    res.status(200).send({
        status: 'success',
        message: 'User successfully Deleted!',
    })
}
