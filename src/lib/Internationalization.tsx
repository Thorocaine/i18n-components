import Locale from './Locale';
import React, { ReactNode, createContext, StatelessComponent } from 'react';

export interface IConfiguration<T = { [key: string]: string }> {
  [lang: string]: Partial<T>;
}
interface IProps {
  children: ReactNode;
  config: IConfiguration;
  locale?: string;
}

const configurationContext = createContext<IConfiguration>({});

const Internationalization: StatelessComponent<IProps> = ({
  children,
  config,
  locale
}: IProps) => (
  <configurationContext.Provider value={config}>
    <Locale value={locale || ''}>{children}</Locale>
  </configurationContext.Provider>
);

Internationalization.defaultProps = {
  locale: navigator ? navigator.language : ''
};

export default Internationalization;
export { configurationContext };
