import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../style/components/Logo.module.scss';

const Logo = () => {
  return (
      <div className={ styles.Container }>
        <StaticImage
          className={ styles.Media }
          src="../images/icon.png"
          alt="A dinosaur"
        />
      </div>
    )
};

export default Logo;