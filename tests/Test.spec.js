const React = require('react');
const { shallow } = require('enzyme');

const Test = require("../src/components/Test");

test('suit test', () => {
    it('expect test', () => {
        ReactDOM.render(<Test />)
        //const wrapper = shallow(<Test />)
    });
});