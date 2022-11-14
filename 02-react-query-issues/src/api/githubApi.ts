import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: `Bearer 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`,
  },
});
