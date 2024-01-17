import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST
}

// const baseUrl = 'https://crypto-news16.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),  //обязательно должен быть назван baseUrl
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: () => createRequest('/news/all')
        })
    })
});

export const {
    useGetCryptosNewsQuery,
} = cryptoNewsApi;