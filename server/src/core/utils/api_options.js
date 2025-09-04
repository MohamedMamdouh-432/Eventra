module.exports = class ApiOptions {
    constructor(operation, query) {
        this.operation = operation
        this.query = query
    }

    filter() {
        const queryObj = { ...this.query }
        const excludedFields = ['page', 'sort', 'limit', 'fields']
        excludedFields.forEach((el) => delete queryObj[el])

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(
            /\b(gte|gt|lte|lt)\b/g,
            (match) => `$${match}`
        )

        this.operation = this.operation.find(JSON.parse(queryStr))

        return this
    }

    sort() {
        if (this.query.sort) {
            const sortBy = this.query.sort.split(',').join(' ')
            this.operation = this.operation.sort(sortBy)
        } else {
            this.operation = this.operation.sort('-createdAt')
        }

        return this
    }

    select() {
        if (this.query.fields) {
            const fields = this.query.fields.split(',').join(' ')
            this.operation = this.operation.select(fields)
        } else {
            this.operation = this.operation.select('-__v')
        }

        return this
    }

    search(modelName) {
        if (this.query.keyword) {
            let query = {};
            if (modelName === 'Products') {
                query.$or = [
                    { title: { $regex: this.query.keyword, $options: 'i' } },
                    { description: { $regex: this.query.keyword, $options: 'i' } },
                ];
            } else {
                query = { name: { $regex: this.query.keyword, $options: 'i' } };
            }

            this.mongooseQuery = this.mongooseQuery.find(query);
        }
        return this;
    }

    paginate() {
        const page = this.query.page * 1 || 1
        const limit = this.query.limit * 1 || 100
        const skip = (page - 1) * limit

        this.operation = this.operation.skip(skip).limit(limit)

        return this
    }
}
