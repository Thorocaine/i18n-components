import React, { useContext, useState, useCallback, useEffect } from 'react';
import { translationsContext } from './Translations';
import { i18nContext } from './I18n';

function indexNotFound(index: string) {
    console.error(`I18n translation key not found: "${index}"`);
    return index;
}

function useTranslation(args: any[], index: string) {
    const translations = useContext(translationsContext);
    const i18n = useContext(i18nContext);
    const [translation, setTranslation] = useState('');
    useEffect(() => {
        const template = translations[i18n][index] ||  indexNotFound(index);
        const text = args.reduce((all, val, i) => all.split(`\$\{${i}\}`).join(val), template);
        setTranslation(text);
    }, [args, index]);
    return translation;
}

function TranslationComp ({args, index}: {args: any[], index: string}) {
    return <>{useTranslation(args, index)}</>;
}

function Translate(strings: TemplateStringsArray, ...args: any[]) {
    const index = strings.reduce( (all, val, i) => `${all}${val}${args.length > i ? `\$\{${i}\}` : ''}`, '');
    return (<TranslationComp args={args} index={index} />);
}

export default Translate;