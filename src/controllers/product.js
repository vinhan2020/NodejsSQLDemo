const Product = require('../models/product')
const ResponseModel = require('../models/response')

class Productcontroller {

    async getAllProduct(req, res, next){
        await Product.findAll()
            .then(products =>{
                const respModel =  new ResponseModel({
                    message: "List Product",
                    success: true,
                    error_code: 200,
                    data: products,
                })
                res.status(200).json(respModel)
            })
            .catch(err => {
                res.status(400).send(`Error: ${err}`)
                next()
            })
    }

    async createProduct(req, res, next){
        const {product_id, name, price } = req.body
        if (!(product_id)){
            res.status(400).send('Product ID is required')
        }
        if (!(price)){
            res.status(400).send('Product Price is required')
        }
        if (!(name)){
            res.status(400).send('Product Name is required')
        }

        const exitsProduct = await Product.findOne({product_id})
        if (exitsProduct) {
            res.status(309).send('Product already exist')
        }

        const product = await Product({
            product_id,
            name,
            price,
        })

        product.save()
            .then(()=>{
                const respModel = new ResponseModel({
                    success: true,
                    message: "Create Product Successfullt",
                    error_code: 400,
                    data: product,
                })
                res.status(200).json(respModel);
            })
            .catch(err => {
                res.status(400).send("Create Product Failed", err);
                next();
            })

       
    }
}

module.exports = new Productcontroller