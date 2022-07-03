/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import LoveFill from '../Icons/loveFill';
import LoveOutline from '../Icons/loveOutline';

import './style.css';

export type LikeButtonProps = {
  isFavarite: boolean;
  onClick: () => void;
};

export function LikeButton({ isFavarite, onClick }: LikeButtonProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="buttonWrapper" onClick={handleClick}>
      <div className="like-icon">
        {!isFavarite ? <LoveOutline size={24} /> : <LoveFill size={24} />}
      </div>
    </div>
  );
}
