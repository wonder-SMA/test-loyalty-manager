import React from 'react';

import Transaction from '../Transaction';

const TransactionList = ({ transactions }) => {
  return (
    <ul>
      {
        transactions.map(transaction =>
          <Transaction key={transaction.uuid} {...transaction} />
        )
      }
    </ul>
  );
};

export default TransactionList;
