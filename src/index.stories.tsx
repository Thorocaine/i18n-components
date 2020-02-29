import React from 'react';

import { i18n, Translations } from './';

export default { title: 'Index' };

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