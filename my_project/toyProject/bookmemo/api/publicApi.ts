import axios from 'axios';

const clientId = process.env.EXPO_PUBLIC_CLIENT_ID;
const clientSecret = process.env.EXPO_PUBLIC_CLIENT_SECRET;

export const axiosBooks = async (query: string) => {
  const url = `https://openapi.naver.com/v1/search/book.json?query=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'X-Naver-Client-Id': clientId!,
        'X-Naver-Client-Secret': clientSecret!,
      },
    });
    return response.data;
  } catch (error) {
    console.error('책 검색 API 호출 오류:', error);
    throw error;
  }
};
