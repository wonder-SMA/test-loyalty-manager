import { $authHost } from './service';

export const getCards = async () => {
  const { data } = await $authHost.get('card');
  return data;
};

export const getOneCard = async (field, value) => {
  const { data } = await $authHost.get(`card/${value}?field=${field}`);
  return data;
};

export const getReceipts = async (from, to, cardUuid) => {
  const { data } = await $authHost.get(`receipt/?from=${from}&to=${to}&cardUuid=${cardUuid ? cardUuid : ''}`);
  return data;
};

export const getTransactions = async (from, to, card_uuid) => {
  const { data } = await $authHost.get(`transaction/?from=${from}&to=${to}&card_uuid=${card_uuid}`);
  return data;
};
