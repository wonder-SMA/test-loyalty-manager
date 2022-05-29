import React, { useState, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { StoreContext } from '../../../index';
import DatePicker from '../../DatePicker';
import ReceiptList from '../../ReceiptList';
import classes from './ReceiptListPage.module.scss';

const ReceiptListPage = observer(() => {
  const { store } = useContext(StoreContext);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    store.cards.length !== 0 && store.allReceipts.length === 0 && store.setAllReceipts();
  }, [store.cards]);

  return (
    <div className={classes['receipt-list-page']}>
      <DatePicker
        setIsFiltered={setIsFiltered}
        setReceiptsForPeriod={store.setReceiptsForPeriod.bind(store)}
      />
      <ReceiptList
        isFiltered={isFiltered}
        allReceipts={store.allReceipts}
        receiptsForPeriod={store.receiptsForPeriod}
      />
    </div>
  );
});

export default ReceiptListPage;
