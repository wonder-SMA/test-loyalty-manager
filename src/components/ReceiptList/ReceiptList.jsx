import React from 'react';

import Receipt from '../Receipt';

const ReceiptList = ({ isFiltered, allReceipts, receiptsForPeriod }) => {
  return (
    <ul>
      {isFiltered
        ? receiptsForPeriod.map(receipt =>
          <Receipt key={receipt.uuid} {...receipt} />
        )
        : allReceipts.map(receipt =>
          <Receipt key={receipt.uuid} {...receipt} />
        )
      }
    </ul>
  );
};

export default ReceiptList;
