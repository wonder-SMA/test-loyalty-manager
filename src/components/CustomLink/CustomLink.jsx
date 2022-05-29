import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import cn from 'classnames';

import classes from './CustomLink.module.scss';

const CustomLink = ({ children, to, onClick }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const link = cn({
    [classes['link']]: match,
  });

  return (
    <li className={classes['custom-link']}>
      {match && <div className={classes['arrow-left']}>&#10097;</div>}
      <Link
        to={to}
        className={link}
        onClick={onClick}
      >
        {children}
      </Link>
      {match && <div className={classes['arrow-right']}>&#10096;</div>}
    </li>
  );
};

export default CustomLink;
