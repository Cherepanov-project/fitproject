import { createGlobalStyle } from "styled-components"

export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/mulish-v10-latin/mulish-v10-latin-regular.eot');
}
`
export const FontCardExercise = createGlobalStyle`
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
         url('/Robotomediumitalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
}
`

