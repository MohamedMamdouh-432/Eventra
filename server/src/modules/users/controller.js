const User = require('./model')
const ApiOptions = require('../../core/utils/api_options')

exports.getAllUsers = async (req, res, next) => {
    const apioptions = new ApiOptions(User.find(), req.query)
        .filter()
        .sort()
        .select()
        .paginate()

    const users = await apioptions.operation

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

exports.getUserProfile = async (req, res, next) => {
    const user = await User.findById(req.params.id)
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

exports.updateUserProfile = async (req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
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
        data: {
            user: updatedUser,
        },
    })
}

exports.blockUser = async (req, res, next) => {
    await User.findByIdAndUpdate(req.params.id, { active: false })
    res.status(200).send({
        status: 'success',
        message: 'User successfully blocked!',
    })
}

exports.deleteUser = async (req, res, next) => {
    const deleteResult = await User.findByIdAndDelete(req.params.id)
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
