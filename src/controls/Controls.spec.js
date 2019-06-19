// Test away!
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Controls from './Controls'
import 'jest-dom'

describe('<Controls />', () => {
    it('Controls render without crashing', () => {
        render(<Controls />)
    })
    it('displays closed and locked buttons', () => {
        const { getByText } = render(<Controls />)

        getByText(/^close gate$/i)
        getByText(/^lock gate$/i)
    })
    it('lock/unlock button toggles from Lock Gate to Unlock Gate when locked is true', () => {
        const { getByTestId } = render(<Controls locked={true}/>)
        const locked = getByTestId('locked')
        fireEvent.click(locked)
        expect(locked.textContent).toBe('Unlock Gate')

    })
    it('open/close button toggles from Close Gate to Open Gate when closed is true ', () => {
        const { getByTestId } = render(<Controls closed={true}/>)
        const closed = getByTestId('closed')
        fireEvent.click(closed)
        expect(closed.textContent).toBe('Open Gate')

    })
    it('closed toggle button is disabled if the gate is locked', () => {
        const { getByTestId } = render(<Controls locked={true} />)
        const closed = getByTestId('closed')
        expect(closed).toHaveProperty('disabled');
    })
    it('locked toggle button is disabled if the gate is open', () => {
        const { getByTestId } = render(<Controls closed={!true} />)
        const locked = getByTestId('locked')
        expect(locked).toHaveProperty('disabled')
    })
})