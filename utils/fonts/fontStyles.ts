import { createGlobalStyle } from "styled-components"

// Файлы шрифтов лежат в папке public сайта
// поэтому для реального сайта пути понадобится исправить

export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  src: url('/fitproject/fonts/mulish-v10-latin/mulish-v10-latin-regular.woff2') format('woff2'), 
       url('/fitproject/fonts/mulish-v10-latin/mulish-v10-latin-regular.woff') format('woff'),
       url('/fitproject/fonts/mulish-v10-latin/mulish-v10-latin-regular.ttf') format('truetype')
       url('/fitproject/fonts/mulish-v10-latin/mulish-v10-latin-regular.eot') format('eot');
}
`
export const FontRoboto = createGlobalStyle`
@font-face {
    font-family: 'Roboto';
    src: local('Roboto')
         url('/fitproject/fonts/roboto/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Italic'), local('Roboto-Italic'), 
         url('/fitproject/fonts/roboto/Roboto-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Medium'), local('Roboto-Medium'), 
         url('/fitproject/fonts/roboto/Robotomedium.woff2') format('woff2'), 
         url('/fitproject/fonts/roboto/Robotomedium.woff') format('woff'), 
         url('/fitproject/fonts/roboto/Robotomedium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), 
         url('/fitproject/fonts/roboto/Robotomediumitalic.woff2') format('woff2'), 
         url('/fitproject/fonts/roboto/Robotomediumitalic.woff') format('woff'), 
         url('/fitproject/fonts/roboto/Robotomediumitalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
}
`

export const FontPoppins = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: local('Poppins Medium'), local('Poppins-Medium'), 
         url('/fitproject/fonts/poppins/Poppins-Medium.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Poppins';
    src: local('Poppins Medium Italic'), local('Poppins-MediumItalic'), 
         url('/fitproject/fonts/poppins/Poppins-MediumItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
}
`

export const FontOpenSans = createGlobalStyle`
@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), local('Open-Sans'), 
         url('/fitproject/fonts/open_sans/OpenSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Italic'), local('Open-SansItalic'), 
         url('/fitproject/fonts/open_sans/OpenSans-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
}
`


export const FontArimaMadurai = createGlobalStyle`
@font-face {
    font-family: 'Arima Madurai';
    src: local('Arima Madurai'), local('Arima-Madurai'), 
         url('/fitproject/fonts/arima_madurai/ArimaMadurai-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: Extrabold;
}
`
