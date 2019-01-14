import React from 'react';
import ReactDOM from 'react-dom';
import Internationalization from './Internationalization';
import i18n from './i18n';
import TestRenderer from 'react-test-renderer';

const config = {
    'en' : { 
        'Hello, I am ${0} ${1}.': 'Good day. You can call me ${1}. ${0} ${1}.', 
        'What is your name?': 'What be your name?'
    },
    'en-ZA': {'Hello, I am ${0} ${1}.': 'Hey boot, I am ${0}...'}
};

it('should translate', () => {
    const comp = TestRenderer.create(<Internationalization config={config}>{i18n`123`}</Internationalization>);
    console.log(comp.toJSON());
    // expect(div.innerHTML).toBe('123');
    // ReactDOM.unmountComponentAtNode(div);
});