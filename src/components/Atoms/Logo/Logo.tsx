/* eslint-disable import/no-unresolved */
import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/logo.svg';

export type LogoProps = {
  size?: string;
};

export function Logo({ size = 'small' }: LogoProps) {
  return (
    <Link to="/">
      <div className={`logo-${size}`}>
        <img src={logo} alt="Logotipo da empresa marvel" />
      </div>
    </Link>
  );
}
