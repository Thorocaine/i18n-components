import React from "react";
import ReactDOM from "react-dom";
import i18n from "./lib/i18n";
import Internationalization from "./lib/Internationalization";
import Locale from "./lib/Locale";

const config = {
    'en' : { 
        'Hello, I am ${0} ${1}.': 'Good day. You can call me ${1}. ${0} ${1}.', 
        'What is your name?': 'What be your name?'
    },
    'en-ZA': {'Hello, I am ${0} ${1}.': 'Hey boot, I am ${0}...'}
};

ReactDOM.render(
    <Internationalization config={config}>
        <Locale value="en-ZA">
            {i18n`Hello, I am ${'Jonathan'} ${'Peel'}.`}<br />
        </Locale>
        {i18n`Hello, I am ${'Jonathan'} ${'Peel'}.`}<br />
        {i18n`What is your name?`}<br />
        {i18n`Does not translate`}<br />
    </Internationalization>
, document.getElementById("root"));