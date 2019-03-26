import React from 'react'
import { shallow } from 'enzyme';
import Chart from '../../lib/Chart';

it('Chart component renders correctly', () => {
  const wrapper = shallow(<Chart />);
  expect(wrapper).toMatchSnapshot();
});