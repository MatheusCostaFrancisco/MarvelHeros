/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ToggleIcon from '../Icons/order';

import './style.css';

export type LikeButtonProps = {
  isFavarite: boolean;
  onClick: () => void;
};

export function ToggleButton({ isFavarite, onClick }: LikeButtonProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="buttonWrapper" onClick={handleClick}>
      <div className="like-icon">
        <ToggleIcon active={isFavarite} size={45} />
      </div>
    </div>
  );
}
