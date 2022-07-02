import React from 'react';

export type IconProps = () => {
  name: string;
};

export function Icon({ name }: IconProps) {
  return <div>icon</div>;
}
