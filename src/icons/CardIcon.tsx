import React, { FC } from 'react';

import { SvgIcon, SvgIconProps } from '@material-ui/core';

const CardIcon: FC<SvgIconProps> = () => (
  <SvgIcon viewBox="0 0 20 15">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 0.999999H2C1.44772 0.999999 1 1.44771 1 2V13C1 13.5523 1.44772 14 2 14H18C18.5523 14 19 13.5523 19 13V2C19 1.44771 18.5523 0.999999 18 0.999999ZM2 0C0.895431 0 0 0.895431 0 2V13C0 14.1046 0.895431 15 2 15H18C19.1046 15 20 14.1046 20 13V2C20 0.89543 19.1046 0 18 0H2Z"
      fill="#157C67"
    />
    <path d="M0 3.49661H20V7.49997H0V3.49661Z" fill="#157C67" />
  </SvgIcon>
);

export default CardIcon;
