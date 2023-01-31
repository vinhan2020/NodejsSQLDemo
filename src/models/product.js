const {DataTypes} = require('sequelize')
const db = require('../config/config')

const Product = db.define("Product",{
    product_id: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DOUBLE,
    }
});

db.sync();


module.exports= Product;
