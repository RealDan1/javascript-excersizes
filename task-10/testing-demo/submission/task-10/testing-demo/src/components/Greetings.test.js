import Greetings from './Greetings';
import React from 'react';
import renderer from 'react-test-renderer';

test('Greetings says Hello World', () => {
    const tree = renderer.create(<Greetings />).toJSON();
    expect(tree).toMatchSnapshot();
});
