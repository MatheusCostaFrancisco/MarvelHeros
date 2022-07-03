import React from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import './style.css';

export type LoadingProps = {
  isVisible: boolean;
};

export function Loading({ isVisible }: LoadingProps) {
  return (
    <div
      className="loading-dark"
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <LoadingOverlay active={isVisible} spinner text="Loading" />
    </div>
  );
}
