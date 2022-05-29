import React from 'react';

import Transaction from '../Transaction';

const TransactionList = ({ isFiltered, allTransactionsForCard, transactionsForPeriodForCard }) => {
  return (
    <ul>
      {isFiltered
        ? transactionsForPeriodForCard.map(transaction =>
          <Transaction key={transaction.uuid} {...transaction} />
        )
        : allTransactionsForCard.map(transaction =>
          <Transaction key={transaction.uuid} {...transaction} />
        )
      }
    </ul>
  );
};

export default TransactionList;
