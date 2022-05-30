import React from 'react';

import Receipt from '../Receipt';

const ReceiptList = ({ receipts }) => {
  return (
    <ul>
      {
        receipts.map(receipt =>
          <Receipt key={receipt.uuid} {...receipt} />
        )
      }
    </ul>
  );
};

export default ReceiptList;
