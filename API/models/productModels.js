const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default:100
        },
        image: {
            type: String,
            required: false,
        }
    },
)


const obj = JSON.stringify(productSchema);
const Product = mongoose.model('Product', obj);
console.log(obj)
module.exports = Product;