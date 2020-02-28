import React, { useContext, useMemo } from 'react';

import context from './context';

function useI18n(strings : TemplateStringsArray, ...args: unknown[]) {
	const { culture, templates } = useContext(context);
	const template = useMemo(() => {
		const currentValue = strings.join('{}');
		const currentTemplate = templates[currentValue] ?? currentValue;
		const currentLang = currentTemplate[culture] ?? currentValue;
		return currentLang;
	}, [strings, culture, templates])

	return template;
} 

const Comp = ({strings, args}: {strings : TemplateStringsArray, args: unknown[]}) => {  
	const text = useI18n(strings, args);
	return <>{text}</>;
}

function i18n(strings : TemplateStringsArray, ...args: unknown[]) {
	
	return <Comp strings={strings} args={args} />


	// // const result = values.map( (t, i) => t + (args[i] ?? '') ).join('');
	// return <>{culture}</>
}

export default i18n;