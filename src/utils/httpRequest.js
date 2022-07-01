import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// trước hàm có từ async thì hàm này sẽ trả về 1 cái promise
export const get = async (url, params = {}) => {
    const res = await httpRequest.get(url, params);
    return res.data;
};

export default httpRequest;
