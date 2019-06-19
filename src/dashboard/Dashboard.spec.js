// Test away
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    it('Dashboard renders without crashing', () => {
        render(<Dashboard />)
    })
    it('dashboard matches snapshot', ()=> {
        const { container } = render(<Dashboard />)
        expect(container).toMatchSnapshot()
    })
    it('renders controls and display', () => {
        const { getByText } = render(<Dashboard />)
        getByText(/^unlocked$/i)
        getByText(/^open$/i)
        getByText(/^lock gate$/i)
        getByText(/^close gate$/i)
    })
})