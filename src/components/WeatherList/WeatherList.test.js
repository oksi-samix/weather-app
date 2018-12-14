import React from 'react';
import { WeatherList } from './WeatherList';
import renderer from 'react-test-renderer';

it('renders WeatherList correctly', () => {
  const tree = renderer
    .create(<WeatherList data={[]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
