import React from 'react';
import BillboardChart from 'react-billboardjs';
import 'billboard.js/dist/billboard.css';

const radar = {
  axis: {
    max: 100,
  },
  level: {
    depth: 4,
  },
  direction: {
    clockwise: false,
  },
};
const CHART_DATA = {
  x: 'x',
  columns: [
    ['x', 'HTML', 'CSS', 'JS', 'React', 'TS'],
    ['Front-End', 80, 80, 90, 85, 60],
  ],
  type: 'radar',
  labels: true,
  colors: {
    'Front-End': 'tomato',
  },
};

const RadarChart = (props) => (
  <BillboardChart data={CHART_DATA} radar={radar} />
);

export default RadarChart;
