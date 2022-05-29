import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import { StoreContext } from './../../../index';
import classes from './ButtonUp.module.scss';

const ButtonUp = observer(({ children }) => {
  const { store } = useContext(StoreContext);

  useEffect(() => {
    window.addEventListener('scroll', () => store.setIsShowingButtonUp());
    return function cleanup() {
      window.removeEventListener('scroll', () => store.setIsShowingButtonUp());
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonUpClass = cn({
    [classes['button-up']]: !store.isShowingButtonUp,
    [classes['button-up_active']]: store.isShowingButtonUp,
  });

  return (
    <button
      className={buttonUpClass}
      type="button"
      onClick={handleScrollTop}
    >
      {children}
    </button>
  );
});

export default ButtonUp;
