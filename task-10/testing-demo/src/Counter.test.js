import { render, fireEvent } from '@testing-library/react';
import App from './App';
test('increments the count', () => {
    const { getByText } = render(<App />);
    const incrementButton = getByText('Increment');
    fireEvent.click(incrementButton);
    expect(getByText('Count: 1')).toBeInTheDocument();
});
