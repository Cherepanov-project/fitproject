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
    GOOGLE_APP_ID: '923185254811-builrr1af8oon69vsndv7v8ctd9tdviv.apps.googleusercontent.com',
    MAIL_APP_ID: '6695c1fb9ec5411fa03a1f14f3982208',
    MAIL_APP_SECRET: '7d4de43db8f34ef39f4eb8eefa5462d0',
    YANDEX_APP_ID: '824329c3c4d241bc987b77de6090da9c',
    VK_APP_ID: '8103808' 
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
