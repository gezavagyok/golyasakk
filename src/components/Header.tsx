import React from 'react';
import * as styles from '../style/components/Header.module.scss';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className={ styles.Wrapper }>
      <div className={ styles.Inner }>
        <Logo />
        <Navigation />
        <a href="https://www.facebook.com/golyasakk">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.9677 0H2.03226C0.870968 0 0 0.929032 0 2.03226V33.9677C0 35.129 0.929032 36 2.03226 36H19.2194V22.0065H14.5742V16.6065H19.2194V12.6C19.2194 7.95484 22.0065 5.4 26.1871 5.4C27.5806 5.4 28.9742 5.45806 30.3677 5.63226V10.4516H27.5806C25.3742 10.4516 24.9097 11.4968 24.9097 13.0645V16.4903H30.1935L29.4387 21.9484H24.7935V35.7677H33.9677C35.129 35.7677 36 34.8968 36 33.7355V2.03226C35.9419 0.870968 35.0129 0 33.9677 0Z" fill="#B26D81"/>
          </svg>
        </a>
      </div>
    </header>
  )
};

export default Header;