import React, { FC } from 'react';

import context, { TranslationTemplates } from '../context';

type Props = { culture?: string, templates: TranslationTemplates };

const Translations: FC<Props> = ({children, culture: setCulture, templates}) => 
{
	debugger;
	const culture = setCulture ?? navigator.language;
	const value = {culture, templates};
	return (
	<context.Provider value={value}>
		{children}
	</context.Provider>
)
	};

export default Translations;
