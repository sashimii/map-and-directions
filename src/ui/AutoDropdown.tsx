import * as React from 'react';

import './AutoDropdown.scss';

interface AutoDropdownProps {
  list: Array<any>;
  handleSelect: Function;
}

export const AutoDropdown: React.SFC<AutoDropdownProps> = ({ list, handleSelect }) => {
  return (
    <ul className="auto-dropdown auto-dropdown__list">
      {
        list && list.map(
          (item, index) => (
            <li
              key={`auto-dropdown-${index}`}
              className="auto-dropdown__list--item"
              onClick={() => {
                handleSelect(item);
              }}
            >
              { item }
            </li>
          ),
        )
      }
    </ul>
  );
};