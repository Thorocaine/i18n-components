import React, { useState } from 'react';

import Translations from '.';
import i18n from '../i18n';

export default { title: 'Translations' };

export const VeryBasic = () => 
{
	const temp = { 'Hello, World!': { 'en-ZA': 'Howzit!' } };
	return (
		<Translations templates={temp} culture="en-ZA">
			<p>{i18n`Hello, World!`}</p>
		</Translations>
	);
}

export const WithVariables = () => 
{
	const name = 'Jack';
	const [number, setNumber] = useState(0);
	const temp = { 'Hello, {0}. The number is {1}.': { 'en-ZA': 'The number is {1}, hey {0}.' } };
  return (
		<Translations templates={temp} culture="en-ZA">
    <div>
      <p>{i18n`Hello, ${name}. The number is ${number}.`}</p>
      <button type="button" onClick={() => setNumber(number + 1)}>+</button>
    </div>
		</Translations>
  );
}