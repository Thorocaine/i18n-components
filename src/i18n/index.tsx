import React from 'react';

import Component from './Component';

function i18n(strings : TemplateStringsArray, ...args: unknown[])
{
	return <Component strings={strings} args={args} />;
}

export default i18n;