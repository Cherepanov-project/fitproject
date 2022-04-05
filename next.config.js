module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['https://api.realworld.io/images/']
  },
  env: {
    LOCAL_URL: 'http://localhost:3000',
    API_REGISTER_USER: 'http://localhost:8082/api/register',
    API_LOGIN_USER: 'http://localhost:8082/api/user',
    API_GET_STATISTICS: 'http://localhost:8082/api/user/statistics',
    GOOGLE_APP_ID: 'dddd',
    MAIL_APP_ID: 'ssss',
    YANDEX_APP_ID: 'fffff',
    VK_APP_ID: 'oooo' 
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
