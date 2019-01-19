import React from 'react';
import Internationalization from './Internationalization';
import i18n, { TranslationComp } from './i18n';
import renderer from 'react-test-renderer';

const config = {
  en: {
    'Hello, I am ${0} ${1}.': 'Good day. You can call me ${1}. ${0} ${1}.',
    'What is your name?': 'What be your name?'
  },
  'en-ZA': { 'Hello, I am ${0} ${1}.': 'Hey boot, I am ${0}...' }
};

const testI18n = (expected: string, component: JSX.Element) =>
  it(`expect ${expect}`, () => {
    const instance = renderer.create(component).root;
    const value = instance.findByType(TranslationComp.); //.index;
    expect(value).toEqual(expected);
  });

testI18n(
  '123',
  <Internationalization config={config}>{i18n`123`}</Internationalization>
);

testI18n(
  'Good day. You can call me Peel. Jonathan Peel.',
  <Internationalization
    config={config}
    locale="en-ZA"
  >{i18n`Hello, I am ${'Jonathan'} ${'Peel'}.`}</Internationalization>
);
