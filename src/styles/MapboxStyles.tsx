import 'mapbox-gl/dist/mapbox-gl.css';

import { css, Global } from '@emotion/react';

const customStyles = css`
  .mapboxgl-canvas {
    outline: none;
  }

  a.mapboxgl-ctrl-logo {
    display: none;
  }
`;

export const MapboxStyles = () => <Global styles={customStyles} />;
