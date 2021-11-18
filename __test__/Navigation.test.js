import Navigation from '../components/Navigation'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks'
import { useState } from 'react';
import userEvent from '@testing-library/user-event'

function useOpen(initialvalue) {
    const [isOpen, setIsOpen] = useState(initialvalue)
    const toggleCart = () => setIsOpen(!isOpen)
    
    return { isOpen, setIsOpen, toggleCart }
}

describe('Navigation', () => {
    it('should render the completed navigation', () => {
        render(<Navigation/>)
        const navigation = screen.getByTestId('navigation-bar')
        expect(navigation).toBeInTheDocument()
    })
    it('shoule have all five buttons', () => {
        render(<Navigation/>);
        const navigationButton = screen.getAllByTestId('nav-button');
        expect(navigationButton).toHaveLength(9);
    })
    it('should open a search input bar', () => {
        const {getByTestId, getByPlaceholderText, getByLabelText} = render(<Navigation/>);
        const searchButton = screen.getAllByLabelText("search-button")
        fireEvent.click(searchButton[0])
        const input = screen.getByTestId('search-bar')
        expect(input).toBeInTheDocument()
    })
    it('should have a cart button to open drawer', () => {
        const toggleCart = jest.fn()
        render(<Navigation toggleCart={toggleCart}/>);
        const cartButton = screen.getAllByLabelText("cart-button")
        userEvent.click(cartButton[0])
        expect(toggleCart).toHaveBeenCalledTimes(1)
    })
})