import { TOKEN } from '../constants/storage';

export const getFromStorage = async key => {
    let data = await localStorage.getItem(key);

    data = JSON.parse(data);

    return data;
};

export const putInStorage = async (key, data) => {
    await localStorage.setItem(key, JSON.stringify(data));
};

export const updateStorage = async (key, data) => {
    await deleteFromStorage(key);
    await putInStorage(key, data);
};

export const deleteFromStorage = async key => {
    await localStorage.setItem(key, {});
};

export const getToken = async () => {
    return getFromStorage(TOKEN) || null;
};
