import { createContext } from "react";

interface ITranslationsContext<T = { [key: string]: string }> { [lang:string]: Partial<T> };

const translationsContext = createContext<ITranslationsContext>({});
const Translations = translationsContext.Provider;

export default Translations;
export { translationsContext };
