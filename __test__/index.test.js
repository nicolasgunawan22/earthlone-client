import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../pages/index'
import userEvent from '@testing-library/user-event'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)
        const heading = screen.getByRole("heading", {name: /Welcome to Earthlone/i})
        expect(heading).toBeInTheDocument()
    })
    it('renders a button to Tokopedia', () => {
        render(<Home />)
        const buttonElement = screen.getByTestId('tokopedia-button')
        expect(buttonElement).toBeInTheDocument()
    })
    it('renders a button to products page', () => {
        render(<Home />)
        const buttonElement = screen.getByRole("button", {name: /Products/i})
        expect(buttonElement).toBeInTheDocument()
    })
})