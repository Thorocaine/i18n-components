import { createContext } from 'react';

const localeContext = createContext<string>('');
const Locale = localeContext.Provider;

export default Locale;
export { localeContext };
