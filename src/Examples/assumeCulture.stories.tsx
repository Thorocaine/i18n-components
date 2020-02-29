import React from 'react';

import i18n from '../i18n';
import Translations from '../Translations';

export default { title: 'Assume the culture' };

const temp =
{
	'Hello, World!': { 'en-ZA': 'Howzit!', 'en-US': 'Yo, Yo, Yo!' }
};

export const VeryBasic = () => 
{
	return (
		<Translations templates={temp}>
			<p>{i18n`Hello, World!`}</p>
		</Translations>
	);
}