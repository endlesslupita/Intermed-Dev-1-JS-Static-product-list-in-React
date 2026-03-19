import ProductList from './ProductList.jsx'
import products from './data/products.js'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <h1>Bicycle Parts for Sale</h1>
        <ProductList products={products} />
      </section>
    </>
  )
}

export default App
