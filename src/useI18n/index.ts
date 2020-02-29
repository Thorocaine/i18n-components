import { useContext, useMemo } from 'react';

import context from '../context';

//todo: Allow a number of languages to be set with priority order.
// navigator.languages -> [“it-IT”, “it”, “en-US”, “en”]

function useI18n(strings : TemplateStringsArray, ...args: unknown[])
{
	const { culture, templates } = useContext(context);
	const template = useMemo(() => 
  {
		const language = culture.split('-')[0];
		const currentValue = strings.slice(1).reduce((p, c, i) => `${p}{${i}}${c}`, strings[0]);
		const currentTemplate = templates[currentValue] ?? currentValue;
		const currentLang: string = currentTemplate[culture] ?? currentTemplate[language] ?? currentValue;
		const translation = args.reduce((c, p, i) => c.split(`{${i}}`).join(p as string), currentLang);
		return translation;
	}, [strings, templates, culture, args])

	return template as string;
} 

export default useI18n;