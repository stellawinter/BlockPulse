// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockPulse/i);
    expect(titleElement).toBeInTheDocument();
});
