import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProductCartBar from './components/ProductCartBar'

describe('ProductCartBar', () => {
  const mockProduct = {
    _id: '123',
    name: 'Test Product',
    price: 100,
    stock: 10,
    slug: { current: 'test-product' }
  }

  it('renders heart icon', () => {
    render(<ProductCartBar product={mockProduct} />)
    
    const icon = screen.getByRole('button').querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
})