import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import renderer from 'react-test-renderer';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

test('App renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});
