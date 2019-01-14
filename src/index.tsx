import React from "react";
import ReactDOM from "react-dom";
import Translations from "./lib/Translations";
import I18n from "./lib/I18n";
import Translate from "./lib/Translate";

const  transplations = {
    'en' : { 'Hello, I am ${0} ${1}.': 'Good day. You can call me ${1}, ${0} ${1}.'},
    'en-ZA': {'Hello, I am ${0} ${1}.': 'Hey boot, I am ${0}...'}
};

ReactDOM.render(
    <Translations value={transplations}>
    <I18n value="en">
        {Translate`Hello, I am ${'Jonathan'} ${'Peel'}.`}<br />
        {Translate`What is your name?`}
        </I18n>
    </Translations>
, document.getElementById("root"));