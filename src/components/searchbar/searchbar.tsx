/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import useDebounce from '../../Hooks/useDebounce';
import './style.css';

export type SearchBarProps = {
  value?: string;
  placeholder?: string;
  onChange: (item: string) => void;
};

export function SearchBar({
  value,
  onChange,
  placeholder = 'Digite um nome',
}: SearchBarProps) {
  const debounce = useDebounce(onChange, 1000);
  const [displayValue, setDisplayValye] = useState(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValye(event.target.value);
    debounce(event.target.value);
  };

  return (
    <div className="wrapper-search-bar">
      <div className="search-bar">
        <div className="search-bar__icon">
          <svg
            width="12px"
            height="12px"
            viewBox="0 0 29 29"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Guide"
                transform="translate(-100.000000, -534.000000)"
                fill="#FF0000"
                fillRule="nonzero"
              >
                <path
                  d="M128.518121,560.255144 L121.405974,553.134431 C124.981914,548.48011 124.62432,541.757202 120.333192,537.500686 C117.988965,535.153635 114.969282,534 111.909867,534 C108.850451,534 105.830769,535.153635 103.486541,537.500686 C98.8378195,542.155007 98.8378195,549.713306 103.486541,554.367627 C105.830769,556.714678 108.850451,557.868313 111.909867,557.868313 C114.452757,557.868313 116.995648,557.072702 119.101479,555.441701 L126.253359,562.522634 C126.571221,562.840878 126.968547,563 127.405607,563 C127.802933,563 128.239993,562.840878 128.557854,562.522634 C129.153844,561.925926 129.153844,560.891632 128.518121,560.255144 Z M111.675725,554.138889 C109.395695,554.138889 107.308887,553.250571 105.685814,551.667047 C102.401025,548.384132 102.401025,543.015601 105.685814,539.694064 C107.270242,538.11054 109.395695,537.222222 111.675725,537.222222 C113.955755,537.222222 116.042563,538.11054 117.665636,539.694064 C119.288708,541.277588 120.138889,543.401826 120.138889,545.680556 C120.138889,547.959285 119.250063,550.044901 117.665636,551.667047 C116.081208,553.289193 113.917111,554.138889 111.675725,554.138889 Z"
                  id="ic_busca"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="search-bar__text">
          <input
            type="text"
            value={displayValue}
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
}
