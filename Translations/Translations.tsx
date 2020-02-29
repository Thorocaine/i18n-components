import React, { FC } from 'react';

import context, { TranslationContext } from './context';

const Translations: FC<TranslationContext> = ({children, culture, templates}) => 
{
	const value = {culture, templates};
	return (
		<context.Provider value={value}>
			{children}
		</context.Provider>
	)
	};

export default Translations;
