import React from 'react';
import Intro from './Intro';
import renderer from 'react-test-renderer';

it('renders Intro correctly', () => {
  const tree = renderer
    .create(<Intro weather={[]} loading={false} error={false}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
