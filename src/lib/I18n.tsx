import { createContext } from "react";

const i18nContext = createContext<string>('');
const I18n = i18nContext.Provider;

export default I18n;
export { i18nContext };
