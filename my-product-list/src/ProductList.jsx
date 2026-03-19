import './ProductList.css'


function ProductList(props) {
        const list = props.products

return (
        <div className="product-cards">
{list.map(function(product){
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


