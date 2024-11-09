import { render, fireEvent } from '@testing-library/react';
import App from './App';
test('Decrements the count', () => {
    const { getByText } = render(<App />);
    const decrementButton = getByText('Decrement');
    fireEvent.click(decrementButton);
    expect(getByText('Count: -1')).toBeInTheDocument();
});
