import products from './data/products.js'

function ProductList() {
return (
{products.map(function(product)
        return (
                <div key={product.id} className="product-card">
                <b>Name: {product.name}</b>
                <ul>
                        <li>Description: {product.description}</li>
                        <li>Price: US${product.price}</li>
                </ul>
                </div>
        )
)})}
export default ProductList


