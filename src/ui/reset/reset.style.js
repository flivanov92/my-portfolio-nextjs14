import { createGlobalStyle } from 'styled-components';

export const GlobalCss = createGlobalStyle`

  html,
  body {
    height: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px ;
}
  body {
    margin:0;

}

/* @font-face {
  font-family: 'icomoon';
  src:  url('font/icomoon.eot?c1tvhi');
  src:  url('font/icomoon.eot?c1tvhi#iefix') format('embedded-opentype'),
    url('font/icomoon.ttf?c1tvhi') format('truetype'),
    url('font/icomoon.woff?c1tvhi') format('woff'),
    url('font/icomoon.svg?c1tvhi#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
} */


`;
