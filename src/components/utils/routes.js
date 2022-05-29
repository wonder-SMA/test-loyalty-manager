import { PERSONAL_ACCOUNT_ROUTE, CARD_LIST_ROUTE, CARD_ROUTE, RECEIPT_LIST_ROUTE } from './consts';
import CardPage from '../routes/CardPage';
import CardListPage from '../routes/CardListPage';
import ReceiptListPage from '../routes/ReceiptListPage';
import MainPage from '../routes/MainPage';

const authRoutes = [
  {
    path: PERSONAL_ACCOUNT_ROUTE,
    Component: MainPage
  },
  {
    path: CARD_LIST_ROUTE,
    Component: CardListPage
  },
  {
    path: CARD_ROUTE + '/:id',
    Component: CardPage
  },
  {
    path: RECEIPT_LIST_ROUTE,
    Component: ReceiptListPage
  }
];

export { authRoutes };