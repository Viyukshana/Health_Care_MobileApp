import axios from 'axios';

const API_KEY = '0a7d76e1b28040128a692834a4026b56'; // Replace with your NewsAPI key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchHealthNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        category: 'health',
        apiKey: API_KEY,
        language: 'en',
      },
    });

    return response.data.articles.map((article) => ({
      id: article.url, // Use URL as unique id
      title: article.title,
      description: article.description || 'No description available',
      url: article.url,
      imageUrl: article.urlToImage || 'https://via.placeholder.com/150',
      publishedAt: new Date(article.publishedAt).toLocaleDateString(),
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    throw new Error('Failed to fetch news');
  }
};
