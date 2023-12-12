const { login } = require("./auth.resolvers")
const { addCategory, getCategory } = require("./category.resolvers")
const { product, products, addProduct, updateProduct, deleteProduct, getProductByCategory } = require("./product.resolvers")

const { RegularExpression } = require('graphql-scalars')

// const CategoryNameType = new RegularExpression('CategoryNameType',/^[a-zA-Z0-9]{3,8}$/)
const CategoryNameType= new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/);

const resolvers = {
    Query: {
        hello: () => 'Hola mundo :)',
        getPerson: (_, args) => `Hello, my name is ${args.name}, I'm ${args.age} years old`,
        getInt: (_, args) => args.age,
        getFloat: (_, args) => args.price,
        getString: ()=> 'asd',
        getBoolean: () => true,
        getID: () => '123',
        getNumbers: (_, args) => args.numbers,
        product,
        products,
        category: getCategory,
    },
    Mutation: {
        login,

        addProduct,
        updateProduct,
        deleteProduct,

        addCategory,
        
    },
    CategoryNameType,
    Category: {
        products: getProductByCategory
    }
}

module.exports =  { resolvers }