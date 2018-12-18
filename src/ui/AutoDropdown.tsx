import * as React from 'react';

import './AutoDropdown.scss';

interface AutoDropdown {
  list: Array<any>;
}

export const AutoDropdown = ({ list }) => {
  return (
    <ul className="auto-dropdown auto-dropdown__list">
      {
        list && list.map(
          (item, index) => (
            <li key={`auto-dropdown-${index}`} className="auto-dropdown__list--item">{ item }</li>
          ),
        )
      }
    </ul>
  );
};