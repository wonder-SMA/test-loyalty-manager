import { makeAutoObservable, runInAction } from 'mobx';

import { getCards, getOneCard, getReceipts, getTransactions } from '../http/PersonalAccountApi';

class PersonalAccountStore {
  _card = {};
  _cards = [];
  _searchValue = '';
  _receiptCount = 0;
  _receiptsForPeriod = [];
  _receiptsForPeriodForCard = [];
  _transactionCount = 0;
  _transactionsForPeriodForCard = [];
  _allReceipts = [];
  _allReceiptsForCard = [];
  _allTransactionsForCard = [];
  _isShowingButtonUp = false;

  constructor() {
    makeAutoObservable(this);
    getCards().then(cards =>
      runInAction(() => this._cards = cards));
  }

  get card() {
    return this._card;
  }

  setCard(id) {
    this._card = getOneCard('number', id)
      .then(card => {
        runInAction(() => this._card = card);
      })
      .then(() => {
        runInAction(() => this.setAllReceiptsForCard(this._card.uuid));
      })
      .then(() => {
        runInAction(() => this.setAllTransactionsForCard(this._card.uuid));
      });
  }

  clearForCard() {
    this._card = {};
    this._allReceiptsForCard = [];
    this._allTransactionsForCard = [];
  }

  setFilterForCards(value) {
    this._searchValue = value;
  }

  get filteredCards() {
    if (this._searchValue.length > 0) {
      return this._cards.filter((card) =>
        card.number.includes(this._searchValue),
      );
    }
    return this._cards;
  }

  setReceiptCount(count) {
    this._receiptCount = count;
  }

  get shortReceiptsForCard() {
    return this.allReceiptsForCard.slice(0, this._receiptCount);
  }

  get allReceiptsForCard() {
    return this._allReceiptsForCard;
  }

  setAllReceiptsForCard(uuid) {
    getReceipts(1, new Date().getTime(), uuid)
      .then(receipts => {
        runInAction(() => this._allReceiptsForCard = [...receipts]);
      });
  }

  get receiptsForPeriodForCard() {
    return this._receiptsForPeriodForCard;
  }

  setReceiptsForPeriodForCard(from, to, uuid) {
    getReceipts(from, to, uuid)
      .then(receipts => {
        runInAction(() => this._receiptsForPeriodForCard = [...receipts]);
      });
  }

  setTransactionCount(count) {
    this._transactionCount = count;
  }

  get shortTransactionsForCard() {
    return this.allTransactionsForCard.slice(0, this._transactionCount);
  }

  get allTransactionsForCard() {
    return this._allTransactionsForCard;
  }

  setAllTransactionsForCard(uuid) {
    getTransactions(1, new Date().getTime(), uuid)
      .then(transaction => {
        runInAction(() => this._allTransactionsForCard = [...transaction]);
      });
  }

  get transactionsForPeriodForCard() {
    return this._transactionsForPeriodForCard;
  }

  setTransactionsForPeriodForCard(from, to, uuid) {
    getTransactions(from, to, uuid)
      .then(receipts => {
        runInAction(() => this._transactionsForPeriodForCard = [...receipts]);
      });
  }

  get cards() {
    return this._cards;
  }

  get allReceipts() {
    return this._allReceipts;
  }

  setAllReceipts() {
    this._cards.forEach(card => {
      getReceipts(1, new Date().getTime(), card.uuid)
        .then(receipts => {
          runInAction(() => this._allReceipts = [...this._allReceipts, ...receipts]);
        });
    });
  }

  get receiptsForPeriod() {
    return this._receiptsForPeriod;
  }

  setReceiptsForPeriod(from, to) {
    if (this._receiptsForPeriod.length !== 0) {
      this._receiptsForPeriod = [];
    }
    this._cards.forEach(card => {
      getReceipts(from, to, card.uuid)
        .then(receipts => {
          runInAction(() => this._receiptsForPeriod = [...this._receiptsForPeriod, ...receipts]);
        });
    });
  }

  get isShowingButtonUp() {
    return this._isShowingButtonUp;
  }

  setIsShowingButtonUp() {
    this._isShowingButtonUp = window.scrollY > document.documentElement.clientHeight;
  }
}

export default PersonalAccountStore;