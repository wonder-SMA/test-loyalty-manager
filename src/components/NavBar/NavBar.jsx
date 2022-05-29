import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Icon from '@mdi/react';
import { mdiArrowUp } from '@mdi/js';

import ButtonUp from '../ui/ButtonUp';
import { useToggle } from '../../hooks/useToggle';
import CustomLink from '../CustomLink';
import classes from './NavBar.module.scss';

const NavBar = () => {
  const [isActive, setIsActive] = useToggle(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
    isActive && setIsActive();
  };

  const menuBtn = cn({
    [classes['nav__btn']]: !isActive,
    [classes['nav__btn_active']]: isActive
  });

  return (
    <div className={classes['navbar']}>
      <nav>
        <Link to="/" onClick={handleClick}>Кабинет</Link>
        <div className={menuBtn} onClick={setIsActive}>
          <span />
        </div>
        <ul>
          <CustomLink to="card-list" onClick={handleClick}>Общий список карт</CustomLink>
          <CustomLink to="receipt-list" onClick={handleClick}>Список чеков</CustomLink>
        </ul>
      </nav>
      <ButtonUp>
        <Icon path={mdiArrowUp} size={2} />
      </ButtonUp>
    </div>
  );
};

export default NavBar;
