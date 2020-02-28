import React, { useState } from 'react';

import i18n from './i18n';
import Translations from './Translations';

export default { title: 'Translations' };

export const VeryBasic = () => {
	const temp = { 'Hello, World!': { 'af-ZA': 'G, W!' } };
	return (
		<Translations templates={temp} culture="af-ZA">
			<p>{i18n`Hello, World!`}</p>
		</Translations>
	);
}

// export const WithVariables = () => {
// 	const name = 'Jack';
//   const [number, setNumber] = useState(0);
//   return (
//     <div>
//       <p>{i18n`Hello, ${name}. The number is ${number}.`}</p>
//       <button type="button" onClick={() => setNumber(number + 1)}>+</button>
//     </div>
//   );
// }