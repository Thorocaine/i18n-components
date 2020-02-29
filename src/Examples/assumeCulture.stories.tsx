import React, { useContext } from 'react';

import context from '../context';
import i18n from '../i18n';
import Translations from '../Translations';

export default { title: 'useI18n' };

const temp =
{
	'Hello, World!': { 'en-ZA': 'Howzit!' }
};

export const VeryBasic = () => 
{
	const {culture} = useContext(context);
	return (
		<Translations templates={temp}>
			<h3>The culture is <em>{culture}</em></h3>
			<p>{i18n`Hello, World!`}</p>
		</Translations>
	);
}