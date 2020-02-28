import React, { useState } from 'react';

import i18n from './i18n';

export default { title: 'i18n' };

export const VeryBasic = () => <p>{i18n`Hello, World!`}</p>;

export const WithVariables = () => {
	const name = 'Jack';
  const [number, setNumber] = useState(0);
  return (
    <div>
      <p>{i18n`Hello, ${name}. The number is ${number}.`}</p>
      <button type="button" onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
}