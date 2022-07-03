/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './like.json';
import './style.css';

export type LikeButtonProps = {
  isFavarite: boolean;
  onClick: () => void;
};

export function LikeButton({ isFavarite, onClick }: LikeButtonProps) {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: isFavarite ? -1 : 1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleClick = () => {
    setAnimationState({
      ...animationState,
      isStopped: false,
      direction: isFavarite ? -1 : 1,
    });
    onClick();
  };

  return (
    <div className="buttonWrapper" onClick={handleClick}>
      <div className="animation">
        <Lottie
          options={defaultOptions}
          width={64}
          height={64}
          direction={animationState.direction}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </div>
    </div>
  );
}
