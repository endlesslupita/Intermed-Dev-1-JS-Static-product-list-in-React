import { render, screen } from '@testing-library/react'
import ProductList from './ProductList'

describe('ProductList', () => {

  // Normal test cases
  test('renders the correct number of product cards', () => {
    render(<ProductList />)
    const cards = document.querySelectorAll('.product-card')
    expect(cards.length).toBe(20)
  })

  test('displays the name of the first product', () => {
    render(<ProductList />)
    expect(screen.getByText('Crankset')).toBeInTheDocument()
  })

  test('displays the price of a product', () => {
    render(<ProductList />)
    expect(screen.getByText('US$85')).toBeInTheDocument()
  })

  // Edge test cases
  test('renders no cards when products array is empty', () => {
    render(<ProductList products={[]} />)
    const cards = document.querySelectorAll('.product-card')
    expect(cards.length).toBe(0)
  })

  test('handles a product with a very long description without crashing', () => {
    render(<ProductList />)
    const longDesc = screen.getByText(/14g stainless steel J-bend spokes/)
    expect(longDesc).toBeInTheDocument()
  })

  test('displays the last product in the list', () => {
    render(<ProductList />)
    expect(screen.getByText('Headset')).toBeInTheDocument()
  })

})