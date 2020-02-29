import React, { useState } from 'react';

import useI18n from '.';
import Translations from '../Translations';

export default { title: 'useI18n' };

const temp =
{
	'Hello, World!': { 'en-ZA': 'Howzit!' },
	'Hello, {0}. The number is {1}.': { 'en-ZA': 'The number is {1}, hey {0}.' }
};

export const veryBasic = () => 
{
	return (
		<Translations templates={temp} culture="en-ZA">
			<input value={useI18n`Hello, World!`} readOnly />
		</Translations>
	);
}

export const WithVariables = () => 
{
	const name = 'Jack';
	const [number, setNumber] = useState(0);
	const temp = {};
	return (
		<Translations templates={temp} culture="en-ZA">
			<div>
				<input value={useI18n`Hello, ${name}. The number is ${number}.`} readOnly style={{width: '50%'}} />
				<button type="button" onClick={() => setNumber(number + 1)}>+</button>
			</div>
		</Translations>
	);
}
