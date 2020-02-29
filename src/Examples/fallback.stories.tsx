import React from 'react';

import i18n from '../i18n';
import Translations from '../Translations';

export default { title: 'Fall-backs' };

const temp = { 'Hello, World!': { 'pt': 'Olá Mundo!' } };

export const FallbackToLanguage = () => 
{
	return (
		<Translations templates={temp} culture="pt-BR">
			<p>{i18n`Hello, World!`}</p>
		</Translations>
	);
}

export const FallbackToTemplate = () => 
{
	return (
		<Translations templates={temp} culture="es-ES">
			<p>{i18n`Hello, World!`}</p>
		</Translations>
	);
}