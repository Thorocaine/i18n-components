import { createContext, memo } from "react";

const localeContext = createContext<string>('');
const Locale = localeContext.Provider;

export default memo(Locale);
export { localeContext };
