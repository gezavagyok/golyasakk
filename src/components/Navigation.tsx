import React from 'react';
import * as styles from '../style/components/Navigation.module.scss';
import { Link } from 'gatsby';
import { NavigationItem } from '../types/NavigationItem';

const navigationItems: NavigationItem[] = [
  {
    id: 1,
    label: 'Főoldal',
    href: '/'
  },
  {
    id: 2,
    label: 'Feladvanyok',
    href: '/feladvanyok'
  },
  {
    id: 3,
    label: 'Elemzések',
    href: '/elemzesek'
  },
  {
    id: 4,
    label: 'Könyvtár',
    href: '/konyvtar'
  },
  {
    id: 5,
    label: 'Kapcsolat',
    href: '/kapcsolat'
  }
];

const renderItems = () => {
  return navigationItems.map((item: NavigationItem) => {
    return (
      <li className={ styles.Item }>
        <Link className={ styles.Link } to={ item.href }>{ item.label }</Link>
      </li> 
    );
  });
};

const Navigation = () => {
  return (
    <nav className={ styles.Wrapper }>
      <ul className={ styles.List }>
        { renderItems() }
      </ul>
    </nav>
  )
};

export default Navigation;