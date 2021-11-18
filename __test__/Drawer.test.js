import { render, screen, fireEvent } from '@testing-library/react';
import Drawer from '../components/Drawer'
import { renderHook, act } from '@testing-library/react-hooks'
import { useState } from 'react';
import userEvent from '@testing-library/user-event'

function useOpen(initialvalue) {
    const [isOpen, setIsOpen] = useState(initialvalue)
    const toggleCart = () => setIsOpen(!isOpen)
    
    return { isOpen, setIsOpen, toggleCart }
}

describe('Drawer', () => {
    it('should render a drawer with heading "cart" in it.', () => {
        render(<Drawer isOpen={true}/>) 
        const heading = screen.getByRole('heading', {name: /Cart/i})
        expect(heading).toBeInTheDocument()
    })

    it('should render a div for closing the drawer.', () => {
        const { result } = renderHook(() => useOpen(true))
        render(<Drawer isOpen={result.current.isOpen}/>) 
        const element = screen.getByLabelText('closing-button')
        expect(element).toBeInTheDocument()
    })

    it('should have a clickable div element to close the drawer', () => {
        const { result } = renderHook(() => useOpen(true))
        const toggleCart = jest.fn()
        const {getByLabelText} = render(<Drawer isOpen={result.current.isOpen} toggleCart={toggleCart}/>);
        const buttonElement = getByLabelText('closing-button')
        userEvent.click(buttonElement)
        expect(toggleCart).toHaveBeenCalledTimes(1)
    })

})
