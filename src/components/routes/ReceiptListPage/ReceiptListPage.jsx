import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { StoreContext } from '../../../index';
import DatePicker from '../../DatePicker';
import ReceiptList from '../../ReceiptList';
import { getQueryParams } from '../../utils/functions';
import classes from './ReceiptListPage.module.scss';

const ReceiptListPage = observer(() => {
  const { store } = useContext(StoreContext);

  useEffect(() => {
    store.clearLists();
    const params = getQueryParams([]);
    store.setReceipts(params);
  }, []);

  const handleFilter = (date) => {
    const params = getQueryParams(date ? date : []);
    store.setReceipts(params);
  };

  return (
    <div className={classes['receipt-list-page']}>
      <h1>Чеки по карте: найдено {store.receipts.length} шт.</h1>
      <DatePicker
        handleFilter={handleFilter}
        handleClear={handleFilter}
      />
      <ReceiptList
        receipts={store.receipts}
      />
    </div>
  );
});

export default ReceiptListPage;
