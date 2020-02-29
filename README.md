# i18n-components
*A very small library to help with translations in React*  
Please report any problems.

## Tutorial
### Installation
```shell
> npm i -s i18n-components
```

### Templates
A list of translations must be created, this uses the template as the key.
```js
const templates = {
	'Hello, World!': {
		'en-ZA': 'Howzit!',
	},
	'Hello, {0}. The number is {1}.': { 
		'en-ZA': 'The number is {1}, hey {0}.',
	},
}
```

### Creating a context
Your main component needs to be wrapped.
If culture is left off, it will try and get the culture from the browser.
```jsx
	import { Translations } from 'i18n-components';

	function App()
	{
		return (
			<Translations templates={templates} culture="en-ZA" >
				<MyOtherComponents />
			</Translations>
		);
	}
```

### Using a translation
```jsx
	import { i18n } from 'i18n-components';

	function SayHi()
	{
		return (<p>{i18n`Hello, World!`}</p>);
	}

	function WithVariables()
	{
		const name = 'Jack';
		const [number, setNumber] = useState(0);
		return (
			<div>
				<p>{i18n`Hello, ${name}. The number is ${number}.`}</p>
				<button type="button" onClick={() => setNumber(number + 1)}>+</button>
			</div>
		);
	}
```
Should render as
> 	<p>Howzit!</p>

>   <div>
> 	  <p>The number is 0, hey Jack.</p>
> 	  <button type="button">+</button>
> 	</div>

### Language fallback
```js
	const templates = {
	'Hello, World!': {
		'pt': 'Olá Mundo!',
		'pt-BR': 'e aí',		
	},
}
```

#### Language and culture
```xml
<Translations templates={templates} culture="pt-BR" >
	<p>{i18n`Hello, World!`}</p>
</Translations>
```
will return 
> <p>e aí</p>

#### Just language
```xml
<Translations templates={templates} culture="pt-PT" >
	<p>{i18n`Hello, World!`}</p>
</Translations>
``` 
will fall back to the language only translation
> <p>Olá Mundo!</p>

#### Fall back to template
```xml
<Translations templates={templates} culture="es-ES" >
	<p>{i18n`Hello, World!`}</p>
</Translations>
``` 
will fall back to the template because no language can be found.
> <p>Hello, World!</p>

### Using useI18n Hook
If you want to use a translation in a property you will need to use the hook.

```xml
<input value={useI18n`Hello, World!`} readOnly />
```
or
```jsx
function HelloBox()
{
	const hello = useI18n`Hello, World!`;
	return (<input value={hello} readOnly />);
}
```