import React from 'react';
import * as styles from '../style/components/Layout.module.scss';
import Header from './Header';
import '../style/main.scss';

interface Props {
  children?: React.ReactNode;
};

const Layout = ({ children } : Props ) => {
  return (
    <div className={ styles.Wrapper }>
      <Header />
      { children }
    </div>
  )
};

export default Layout;