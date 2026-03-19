import { render, screen } from '@testing-library/react'
import ProductList from './ProductList'
import products from './data/products'

describe('ProductList', () => {

  // Normal test cases
  test('renders the correct number of product cards', () => {
    render(<ProductList products={products} />)
    const cards = document.querySelectorAll('.product-card')
    expect(cards.length).toBe(20)
  })

  test('displays the name of the first product', () => {
    render(<ProductList products={products} />)
    expect(screen.getByText('Crankset')).toBeInTheDocument()
  })

  test('displays the price of a product', () => {
    render(<ProductList products={products} />)
    expect(screen.getByText('US$85')).toBeInTheDocument()
  })

  // Edge test cases
  test('renders no cards when products array is empty', () => {
    render(<ProductList products={[]} />)
    const cards = document.querySelectorAll('.product-card')
    expect(cards.length).toBe(0)
  })

  test('handles a product with a very long description without crashing', () => {
    render(<ProductList products={products} />)
    const longDesc = screen.getByText(/14g stainless steel J-bend spokes/)
    expect(longDesc).toBeInTheDocument()
  })

  test('displays the last product in the list', () => {
    render(<ProductList products={products} />)
    expect(screen.getByText('Headset')).toBeInTheDocument()
  })

})
