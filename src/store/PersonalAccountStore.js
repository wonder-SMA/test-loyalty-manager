import { makeAutoObservable, runInAction } from 'mobx';

import { getCards, getOneCard, getReceipts, getTransactions } from '../http/PersonalAccountApi';

class PersonalAccountStore {
  _card = {};
  _cards = [];
  _searchValue = '';
  _receipts = [];
  _transactions = [];
  _isShowingButtonUp = false;

  constructor() {
    makeAutoObservable(this);
  }

  get card() {
    return this._card;
  }

  setCard(id) {
    getOneCard('number', id)
      .then(card => {
        runInAction(() => this._card = card);
      });
  }

  get cards() {
    return this._cards;
  }

  setCards() {
    getCards().then(cards =>
      runInAction(() => this._cards = cards));
  }

  setFilterForCards(value) {
    this._searchValue = value;
  }

  get filteredCards() {
    if (this._searchValue.length) {
      return this._cards.filter((card) =>
        card.number.includes(this._searchValue),
      );
    }
    return this._cards;
  }

  get receipts() {
    return this._receipts;
  }

  setReceipts(params) {
    const { from = 0, to = +new Date(), uuid = '' } = params;
    getReceipts(from, to, uuid)
      .then(receipts => {
        runInAction(() => this._receipts = receipts);
      });
  }

  clearReceipts() {
    this._receipts = [];
  }

  get transactions() {
    return this._transactions;
  }

  setTransactions(params) {
    const { from = 0, to = +new Date(), uuid } = params;
    getTransactions(from, to, uuid)
      .then(transactions => {
        runInAction(() => this._transactions = transactions);
      });
  }

  clearTransactions() {
    this._transactions = [];
  }

  clearLists() {
    this.clearReceipts();
    this.clearTransactions();
  }

  get isShowingButtonUp() {
    return this._isShowingButtonUp;
  }

  setIsShowingButtonUp() {
    this._isShowingButtonUp = window.scrollY > document.documentElement.clientHeight;
  }
}

export default PersonalAccountStore;