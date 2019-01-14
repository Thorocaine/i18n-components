import React, { useContext, useState, useEffect, memo } from 'react';
import { localeContext } from './Locale';
import { configurationContext } from './Internationalization';


function indexNotFound(index: string) {
    console.error(`I18n translation key not found: "${index}"`);
    return index;
}

function useTranslation(args: any[], index: string) {
    const config = useContext(configurationContext);
    const locale = useContext(localeContext);
    const [translation, setTranslation] = useState('');
    useEffect(() => {
        const template = config[locale] && config[locale][index]
                      || config[locale.split('-')[0]] && config[locale.split('-')[0]][index]
                      || indexNotFound(index);
        const text = args.reduce((all, val, i) => all.split(`\$\{${i}\}`).join(val), template);
        setTranslation(text);
    }, [args, index]);
    return translation;
}

const TranslationComp = memo(({args, index}: {args: any[], index: string}) => <>{useTranslation(args, index)}</>);

function i18n(strings: TemplateStringsArray, ...args: any[]) {
    const index = strings.reduce( (all, val, i) => `${all}${val}${args.length > i ? `\$\{${i}\}` : ''}`, '');
    return (<TranslationComp {...{args,index}} />);
}

export default i18n;