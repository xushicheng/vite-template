import { css, Global } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro';

const customStyles = css`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: #000;
    font-family: -apple-system, 'Noto Sans', Helvetica, 'Nimbus Sans L', Arial, 'Liberation Sans', 'PingFang SC',
      'Hiragino Sans GB', 'Noto Sans CJK SC', 'Source Han Sans SC', 'Source Han Sans CN', 'Microsoft YaHei',
      'Wenquanyi Micro Hei', 'WenQuanYi Zen Hei', 'ST Heiti', SimHei, 'WenQuanYi Zen Hei Sharp', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: ${ theme`colors.purple.500` };
    ${ tw`antialiased` }
  }

  html,
  body,
  body > div:first-of-type,
  div#__next,
  div#__next > div {
    height: 100%;
  }

  // 隐藏滚动条
  *,
  *::before,
  *::after {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }

  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);
