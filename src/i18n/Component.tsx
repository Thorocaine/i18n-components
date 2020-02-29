import useI18n from '../useI18n';

type Props = {strings : TemplateStringsArray, args: unknown[]};

const Component = ({strings, args}: Props) => 
{  
	const text = useI18n(strings, ...args);
	return text as JSX.Element;
}

export default Component;
