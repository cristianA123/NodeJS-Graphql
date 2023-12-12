const ProductsService = require('./../services/product.service');
const service = new ProductsService();

const product = async (_, { id }) => {
    return service.findOne(id);
}

const products = async () => {
    return service.find({});
}

const addProduct = async (_, {dto}) => {
    return service.create(dto)
}

const updateProduct = async (_, {id, dto}) => {
    return service.update(id, dto)
}

const deleteProduct = async (_, {id}) => {
    await service.delete(id)
    return id
}

const getProductByCategory = (parent) => {
    const id = parent.dataValues.id
    return service.getByCategory(id)

}


module.exports = {
    product,
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductByCategory
}
