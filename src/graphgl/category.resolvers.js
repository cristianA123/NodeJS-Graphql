const { checkJwtGqls } = require('../utils/auth/checkJwtGql');
const { checkRoleGqls } = require('../utils/ckeckRolesGql');
const CategoryService = require('./../services/category.service');
const service = new CategoryService();



const addCategory = async (_, {dto}, context) => {

    const user  = await checkJwtGqls(context)
    checkRoleGqls(user, 'admin')
    return service.create({
        ...dto,
        image: dto.image.href
    })
}

const getCategory = (_, { id }) => {

    return service.findOne(id)

}

module.exports = {
    addCategory,
    getCategory
}
