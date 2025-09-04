const Community = require('./model')
const ApiOptions = require('../../core/utils/api_options')

exports.createCommunity = async (req, res, next) => {
    const newCommunity = await Community.create(req.body)
    res.status(201).send({
        status: 'success',
        message: 'Community successfully created!',
        data: {
            community: newCommunity,
        },
    })
}

exports.getAllCommunities = async (req, res, next) => {
    const apioptions = new ApiOptions(Community.find(), req.query)
        .filter()
        .sort()
        .select()
        .paginate()

    const communities = await apioptions.operation

    if (!communities) {
        return res.status(404).send({
            status: 'success',
            message: 'There is no communities!',
        })
    }
    res.status(200).send({
        status: 'success',
        results: communities.length,
        data: { communities },
    })
}

exports.getCommunityDetails = async (req, res, next) => {
    const community = await Community.findById(req.params.id)
    if (!community) {
        return res.status(404).send({
            status: 'fail',
            message: 'Community not found!',
        })
    }
    res.status(200).send({
        status: 'success',
        data: { community },
    })
}

exports.updateCommunity = async (req, res, next) => {
    const updatedCommunity = await Community.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    )
    if (!updatedCommunity) {
        return res.status(404).send({
            status: 'fail',
            message: 'Community not found!',
        })
    }
    res.status(201).send({
        status: 'success',
        message: 'Community successfully updated!',
        data: {
            community: updatedCommunity,
        },
    })
}

exports.blockCommunity = async (req, res, next) => {
    await Community.findByIdAndUpdate(req.params.id, { active: false })
    res.status(200).send({
        status: 'success',
        message: 'Community successfully blocked!',
    })
}

exports.deleteCommunity = async (req, res, next) => {
    const deleteResult = await Community.findByIdAndDelete(req.params.id)
    if (!deleteResult.deletedCount) {
        return res.status(404).send({
            status: 'fail',
            message: 'Community not found!',
        })
    }
    res.status(200).send({
        status: 'success',
        message: 'Community successfully Deleted!',
    })
}
