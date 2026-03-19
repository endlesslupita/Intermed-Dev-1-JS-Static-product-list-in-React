import products from './data/products.js'
import './ProductList.css'


function ProductList(props) {
return (
        <div className="product-cards">
{products.map(function(product){
        return (
                <div key={product.id} className="product-card">
                <div className="product-heading"><b>{product.name}</b><p>US${product.price}</p></div>
                        <p>Specs: {product.description}</p>
                </div>
        )
})}
        </div>
)}
export default ProductList


