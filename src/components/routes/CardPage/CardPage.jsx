import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';

import Card from '../../Card';
import { StoreContext } from '../../../index';
import DatePicker from '../../DatePicker';
import ReceiptList from '../../ReceiptList';
import TransactionList from '../../TransactionList';
import Button from '../../ui/Button';
import classes from './CardPage.module.scss';

const CardPage = observer(() => {
  const { store } = useContext(StoreContext);
  const [isFilteredReceipts, setIsFilteredReceipts] = useState(false);
  const [isFilteredTransactions, setIsFilteredTransactions] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    store.clearForCard();
    store.setCard(id);
  }, []);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={classes['card-page']}>
      <div>
        <Button className={classes['back-button']} onClick={handleClick}>Назад</Button>
      </div>
      <h1>Карта №{id}</h1>
      <Card id={id} {...store.card} />
      <h1>Чеки по карте: найдено {
        isFilteredReceipts ? store.receiptsForPeriodForCard.length : store.allReceiptsForCard.length
      } шт.</h1>
      <div className={classes['date-picker-wrapper']}>
        <Button onClick={() => store.setReceiptCount(store.allReceiptsForCard.length)}>Показать</Button>
        <DatePicker
          uuid={store.card.uuid}
          setIsFiltered={setIsFilteredReceipts}
          setForPeriod={store.setReceiptsForPeriodForCard.bind(store)}
        />
        <Button onClick={() => store.setReceiptCount(0)}>Скрыть</Button>
      </div>
      <ReceiptList
        isFiltered={isFilteredReceipts}
        allReceipts={store.shortReceiptsForCard}
        receiptsForPeriod={store.receiptsForPeriodForCard}
      />
      <h1>Транзакции по карте: найдено {
        isFilteredTransactions ? store.transactionsForPeriodForCard.length : store.allTransactionsForCard.length
      } шт.</h1>
      <div className={classes['date-picker-wrapper']}>
        <Button onClick={() => store.setTransactionCount(store.allTransactionsForCard.length)}>Показать</Button>
        <DatePicker
          uuid={store.card.uuid}
          setIsFiltered={setIsFilteredTransactions}
          setForPeriod={store.setTransactionsForPeriodForCard.bind(store)}
        />
        <Button onClick={() => store.setTransactionCount(0)}>Скрыть</Button>
      </div>
      <TransactionList
        isFiltered={isFilteredTransactions}
        allTransactionsForCard={store.shortTransactionsForCard}
        transactionsForPeriodForCard={store.transactionsForPeriodForCard}
      />
    </div>
  );
});

export default CardPage;
