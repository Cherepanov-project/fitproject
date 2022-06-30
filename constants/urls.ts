//ссылки для страниц
const MAIN_PAGE: string = "http://localhost:3000"
const LOGIN_PAGE: string = "http://localhost:3000/user"
const REGISTER_PAGE: string = "http://localhost:3000/user/register"
const USER_STATISTICS_PAGE: string = "http://localhost:3000/user/statistics"

//Ключи и ID для доступа к сервисам
const GOOGLE_APP_ID: string =
    "923185254811-builrr1af8oon69vsndv7v8ctd9tdviv.apps.googleusercontent.com"
const MAIL_APP_ID: string = "6695c1fb9ec5411fa03a1f14f3982208"
const YANDEX_APP_ID: string = "824329c3c4d241bc987b77de6090da9c"
const VK_APP_ID: string = "8103808"

//API ссылки
const API_REGISTER_USER: string =
    "https://spring-boot-fitness-backend.herokuapp.com/api/v1/registration"
const API_LOGIN_USER: string =
    "https://spring-boot-fitness-backend.herokuapp.com/api/v1/authenticate"
const API_SOCIAL: string = "http://localhost:8082/api/user/social"
const API_GET_STATISTICS: string = "http://localhost:8082/api/user/statistics"
const API_WORKOUTS: string =
    "https://spring-boot-fitness-backend.herokuapp.com/"
const API_AUTH: string = "https://api.realworld.io/api/"

//картинки
const GOOGLE_IMG: string =
    "https://play-lh.googleusercontent.com/4cXfm9YG59lys9woio9JM5qR_bOpCrv0dgJ1XmowbzgRpIzDRyNQQ8vB8yXsz3NQJ9Q"
const VK_IMG: string =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png"
const MAIL_IMG: string =
    "https://limg.imgsmail.ru/splash/v/i/share-fp-a2954bf3df.png"
const YANDEX_IMG: string =
    "https://yastatic.net/s3/home-static/_/37/37a02b5dc7a51abac55d8a5b6c865f0e.png"

//перенаправления для логина с помощью социалок
const REDIRECT_GOOGLE_BTN: string = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&response_type=code&state=google&redirect_uri=${LOGIN_PAGE}&client_id=${GOOGLE_APP_ID}`
const REDIRECT_MAIL_BTN: string = `https://oauth.mail.ru/login?client_id=${MAIL_APP_ID}&response_type=code&scope=userinfo&redirect_uri=${LOGIN_PAGE}&state=mail`
const REDIRECT_VK_BTN: string = `https://oauth.vk.com/authorize?client_id=${VK_APP_ID}&display=popup&redirect_uri=${LOGIN_PAGE}&scope=offline&response_type=code&v=5.131&state=vk`
const REDIRECT_YANDEX_BTN: string = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${YANDEX_APP_ID}&redirect_uri=${LOGIN_PAGE}&state=yandex`

export {
    MAIN_PAGE,
    LOGIN_PAGE,
    REGISTER_PAGE,
    USER_STATISTICS_PAGE,
    GOOGLE_APP_ID,
    MAIL_APP_ID,
    YANDEX_APP_ID,
    VK_APP_ID,
    API_REGISTER_USER,
    API_LOGIN_USER,
    API_GET_STATISTICS,
    API_WORKOUTS,
    API_AUTH,
    GOOGLE_IMG,
    REDIRECT_GOOGLE_BTN,
    REDIRECT_MAIL_BTN,
    MAIL_IMG,
    REDIRECT_VK_BTN,
    VK_IMG,
    REDIRECT_YANDEX_BTN,
    YANDEX_IMG,
    API_SOCIAL,
}
