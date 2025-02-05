import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AddtoCart from './components/AddtoCart'

describe('AddtoCart', () => {
  it('renders a button', () => {
    const mockProduct = {
      _id: '123',
      name: 'Test Product',
      price: 100,
      stock: 10,
      slug: { current: 'test-product' }
    }

    render(<AddtoCart product={mockProduct} />)
    
    const button = screen.getByRole('button', { name: /add to cart/i })
    expect(button).toBeInTheDocument()
  })
})