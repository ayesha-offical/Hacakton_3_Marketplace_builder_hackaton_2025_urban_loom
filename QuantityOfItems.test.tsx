import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import QuantityOfItems from './components/QuantityOfItems'

describe('QuantityOfItems', () => {
  const mockProduct = {
    _id: '123',
    name: 'Test Product',
    price: 100,
    stock: 10,
    slug: { current: 'test-product' }
  }

  it('renders quantity controls', () => {
    render(<QuantityOfItems product={mockProduct} />)
    
    const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i })
    const increaseButton = screen.getByRole('button', { name: /increase quantity/i })
    const quantityDisplay = screen.getByText('0')

    expect(decreaseButton).toBeInTheDocument()
    expect(increaseButton).toBeInTheDocument()
    expect(quantityDisplay).toBeInTheDocument()
  })

  it('renders correct button icons', () => {
    render(<QuantityOfItems product={mockProduct} />)
    
    const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i })
    const increaseButton = screen.getByRole('button', { name: /increase quantity/i })

    expect(decreaseButton.querySelector('svg')).toBeInTheDocument()
    expect(increaseButton.querySelector('svg')).toBeInTheDocument()
  })

  it('has proper accessibility labels', () => {
    render(<QuantityOfItems product={mockProduct} />)
    
    expect(screen.getByLabelText(/decrease quantity/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/increase quantity/i)).toBeInTheDocument()
  })
})