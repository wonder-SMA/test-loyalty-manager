import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';

import Card from '../../Card';
import { StoreContext } from '../../../index';
import DatePicker from '../../DatePicker';
import ReceiptList from '../../ReceiptList';
import TransactionList from '../../TransactionList';
import Button from '../../ui/Button';
import { getQueryParams } from '../../utils/functions';
import classes from './CardPage.module.scss';

const CardPage = observer(() => {
  const { store } = useContext(StoreContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    store.clearLists();
    store.setCard(id);
  }, []);

  const handleReceiptsFilter = (date) => {
    const params = getQueryParams(date, store.card.uuid);
    store.setReceipts(params);
  };

  const handleReceiptsClear = () => {
    store.clearReceipts();
  };

  const handleTransactionsFilter = (date) => {
    const params = getQueryParams(date, store.card.uuid);
    store.setTransactions(params);
  };

  const handleTransactionsClear = () => {
    store.clearTransactions();
  };

  return (
    <div className={classes['card-page']}>
      <div>
        <Button
          className={classes['back-button']}
          onClick={() => navigate(-1)}>Назад</Button>
      </div>
      <h1>Карта №{id}</h1>
      <Card id={id} {...store.card} />

      <h1>Чеки по карте: найдено {store.receipts.length} шт.</h1>
      <DatePicker
        handleFilter={handleReceiptsFilter}
        handleClear={handleReceiptsClear}
      />
      <ReceiptList receipts={store.receipts} />

      <h1>Транзакции по карте: найдено {store.transactions.length} шт.</h1>
      <DatePicker
        handleFilter={handleTransactionsFilter}
        handleClear={handleTransactionsClear}
      />
      <TransactionList transactions={store.transactions} />
    </div>
  );
});

export default CardPage;
