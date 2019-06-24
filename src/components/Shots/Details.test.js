import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Details from './Details';

Enzyme.configure({ adapter: new Adapter() });

const shot = {
    "title": "Sasquatch",
    "description": "<p>Quick, messy, five minute sketch of something that might become a fictional something.</p>",
    "images": {
        "hidpi": "https://cdn.dribbble.com/users/3727659/screenshots/6649911/cashback-johnyvino_2x.png",
        "normal": "https://cdn.dribbble.com/users/276611/screenshots/6647396/netga_2x.png",
        "teaser": "https://cdn.dribbble.com/users/276611/screenshots/6647396/netga_2x.png"
    },
    "tags": [
        "design", "mockup", "ui"
    ],
    "published_at": "2012-03-15T01:52:33Z",
}

describe('components', () => {
    it('should have all props', () => {
        const wrapper = shallow(<Details shot={shot} />);

        expect(wrapper.find('div').length).toBe(6);
        expect(wrapper.find('Link').length).toBe(1);
    })
});