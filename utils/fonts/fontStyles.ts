import { createGlobalStyle } from "styled-components"

export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/mulish-v10-latin/mulish-v10-latin-regular.eot');
}
`
export const FontRoboto = createGlobalStyle`
@font-face {
    font-family: 'Roboto';
    src: local('Roboto')
         url('/fonts/roboto/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Italic'), local('Roboto-Italic'), 
         url('/fonts/roboto/Roboto-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Medium'), local('Roboto-Medium'), 
         url('/fonts/roboto/Robotomedium.woff2') format('woff2'), 
         url('/fonts/roboto/Robotomedium.woff') format('woff'), 
         url('/fonts/roboto/Robotomedium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), 
         url('/fonts/roboto/Robotomediumitalic.woff2') format('woff2'), 
         url('/fonts/roboto/Robotomediumitalic.woff') format('woff'), 
         url('/fonts/roboto/Robotomediumitalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
}
`

export const FontPoppins = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: local('Poppins Medium'), local('Poppins-Medium'), 
         url('/fonts/poppins/Poppins-Medium.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Poppins';
    src: local('Poppins Medium Italic'), local('Poppins-MediumItalic'), 
         url('/fonts/poppins/Poppins-MediumItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
}
`

export const FontOpenSans = createGlobalStyle`
@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), local('Open-Sans'), 
         url('/fonts/open_sans/OpenSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Italic'), local('Open-SansItalic'), 
         url('/fonts/open_sans/OpenSans-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
}
`


export const FontArimaMadurai = createGlobalStyle`
@font-face {
    font-family: 'Arima Madurai';
    src: local('Arima Madurai'), local('Arima-Madurai'), 
         url('/fonts/arima_madurai/ArimaMadurai-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: Extrabold;
}
`
