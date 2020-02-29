import { createContext } from 'react';

export type TranslationTemplates = 
{
	[template: string]: { [lang: string]: string }
};

type TranslationContext = 
{
	templates: TranslationTemplates,
	culture: string,
} 

const context = createContext<TranslationContext>({templates: {}, culture: ''});

export default context;
