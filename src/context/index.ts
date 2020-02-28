import { createContext } from 'react';

type TranslationTemplates = {
	[template: string]: { [lang: string]: string }
};

export type TranslationContext = {
	templates: TranslationTemplates,
	culture: string,
} 

const context = createContext<TranslationContext>({templates: {}, culture: ''});

export default context;
