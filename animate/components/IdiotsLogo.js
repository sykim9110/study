import React, { Component } from 'react';

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

const IDIOTS_COLOR = {
  cls_3: '#a4c1ff',
  cls_2: '#7d82ff',
  cls_1: '#723cff'
}

export default class IdiotsLogo extends Component {
    render() {
        return (
            <Svg
                height="49.1"
                width="220.63"
            >
              <Path fill={IDIOTS_COLOR.cls_1} d="M207.16,38.3l-5.34,10.8h6.68L213,40Q210.08,39.13,207.16,38.3Z"/>
              <Path fill={IDIOTS_COLOR.cls_2} d="M210.56,17.52l3.44,7L207.16,38.3q2.93.83,5.82,1.72l7.65-15.5-1.88-3.82A79.13,79.13,0,0,1,210.56,17.52Z"/>
              <Path fill={IDIOTS_COLOR.cls_3} d="M209,.87h-6.68l8.23,16.65a79.13,79.13,0,0,0,8.19,3.18Z"/>
              <Path fill={IDIOTS_COLOR.cls_3} d="M197.66,8.77,200.18,0h-6l-1.29,4.42A49,49,0,0,0,197.66,8.77Z"/>
              <Path fill={IDIOTS_COLOR.cls_2} d="M192.93,4.39l-8.14,27.8q2.91.53,5.81,1.14l7.07-24.58A49,49,0,0,1,192.93,4.39Z"/>
              <Path fill={IDIOTS_COLOR.cls_1} d="M184.79,33.09l-4.69,16h6.22l4.28-14.87Q187.7,33.62,184.79,33.09Z"/>
              <Path fill={IDIOTS_COLOR.cls_2} d="M175,28.56a12,12,0,0,0-2.51-1.77q-1.44-.77-3-1.49l-3.28-1.45a9.39,9.39,0,0,1-2.38-1.27,2.73,2.73,0,0,1-.9-2.29,2.71,2.71,0,0,1,.82-2.11,4,4,0,0,1,2.7-.74,10.38,10.38,0,0,1,4.46,1,23.48,23.48,0,0,1,4.51,2.91.49.49,0,0,0,.48.05.41.41,0,0,0,.23-.41V15.7a15.89,15.89,0,0,0-4.77-2.4,16.91,16.91,0,0,0-4.66-.66,14.31,14.31,0,0,0-4.27.59,9.42,9.42,0,0,0-3.18,1.66,7.53,7.53,0,0,0-2,2.48,6.81,6.81,0,0,0-.71,3.08,8.17,8.17,0,0,0,.51,3,7.39,7.39,0,0,0,1.47,2.3,10.45,10.45,0,0,0,2.38,1.87A28.85,28.85,0,0,0,163.51,29q6.5.56,13,1.51A7.46,7.46,0,0,0,175,28.56Z"/>
              <Path fill={IDIOTS_COLOR.cls_1} d="M176.66,31.74q-6.46-.95-13-1.51l.61.28,2.89,1.26A9.84,9.84,0,0,1,170,33.61a3,3,0,0,1,.86,2.11,3,3,0,0,1-1.15,2.55,6.1,6.1,0,0,1-3.65.87,12.58,12.58,0,0,1-4.82-1,20.06,20.06,0,0,1-4.77-2.83.47.47,0,0,0-.48-.06.44.44,0,0,0-.23.44v5.26a15.4,15.4,0,0,0,5.15,2.5,20.87,20.87,0,0,0,5.35.71,14.75,14.75,0,0,0,4.4-.64,11.34,11.34,0,0,0,3.56-1.78,8.49,8.49,0,0,0,2.38-2.81,7.83,7.83,0,0,0,.88-3.72,7.23,7.23,0,0,0-.61-3.1C176.78,32,176.72,31.85,176.66,31.74Z"/>
              <Path fill={IDIOTS_COLOR.cls_1} d="M153.54,37.16a.45.45,0,0,0-.49.1,6.91,6.91,0,0,1-1.83,1,6.67,6.67,0,0,1-2.3.36,2.22,2.22,0,0,1-1.78-.66,3.25,3.25,0,0,1-.56-2.12v-6.4q-3.09,0-6.17.08v7q0,3.7,1.72,5.51t5.52,1.85a12.64,12.64,0,0,0,3.34-.44,7.65,7.65,0,0,0,2.78-1.37V37.56A.4.4,0,0,0,153.54,37.16Z"/>
              <Path fill={IDIOTS_COLOR.cls_2} d="M146.58,18.29h7v-4.8h-7V6.63h-6.17v6.86h-4.54v4.8h4.54V28.4q3.08-.09,6.17-.08Z"/>
              <Path fill={IDIOTS_COLOR.cls_1} d="M108.5,34.62a13.68,13.68,0,0,0,2.43,4.76,11.81,11.81,0,0,0,4.18,3.28,13.63,13.63,0,0,0,6,1.22,13.46,13.46,0,0,0,6-1.22,11.89,11.89,0,0,0,4.15-3.28,14,14,0,0,0,2.46-4.76,19.46,19.46,0,0,0,.78-4.81,162.39,162.39,0,0,0-26.2,3.74C108.32,33.91,108.4,34.27,108.5,34.62Z"/>
              <Path fill={IDIOTS_COLOR.cls_2} d="M134,21.52a14.11,14.11,0,0,0-2.53-4.76,11.52,11.52,0,0,0-4.18-3.18,15.25,15.25,0,0,0-11.6,0,11.52,11.52,0,0,0-4.18,3.18,14.11,14.11,0,0,0-2.53,4.76,19.44,19.44,0,0,0-.86,5.88A20.68,20.68,0,0,0,108.6,32a162.39,162.39,0,0,1,26.2-3.74c0-.3,0-.59,0-.89A19.43,19.43,0,0,0,134,21.52Z"/>
              <Path fill={IDIOTS_COLOR.cls_3} d="M103.92,5.18A4.1,4.1,0,0,0,103,3.93a4.57,4.57,0,0,0-1.3-.86,4,4,0,0,0-4.41.84,3.83,3.83,0,0,0-1.12,2.74A3.52,3.52,0,0,0,96.5,8.1a4,4,0,0,0,.84,1.22,4.33,4.33,0,0,0,1.25.86,3.71,3.71,0,0,0,1.58.33,4,4,0,0,0,1.55-.31,4.2,4.2,0,0,0,1.3-.84,4.07,4.07,0,0,0,.89-1.24,3.43,3.43,0,0,0,0-2.95Z"/>
              <Path fill={IDIOTS_COLOR.cls_1} d="M97,43.43h6.4V34.76q-3.23.86-6.4,1.86Z"/>
              <Path fill={IDIOTS_COLOR.cls_2} d="M97,13.43v22q3.17-1,6.4-1.86V13.43Z"/>
              <Path fill={IDIOTS_COLOR.cls_3} d="M77.36,13.94a11.31,11.31,0,0,0-4.56.94A10.33,10.33,0,0,0,69,17.76a12.64,12.64,0,0,0-1.53,2.33A59.3,59.3,0,0,0,80,14.21,13.06,13.06,0,0,0,77.36,13.94Z"/>
              <Path fill={IDIOTS_COLOR.cls_3} d="M91.12,5V1.14H84.8v9.71A52.59,52.59,0,0,0,91.12,5Z"/>
              <Path fill={IDIOTS_COLOR.cls_1} d="M85.11,43.43h6V38.64Q88,39.8,84.94,41.12Z"/>
              <Path fill={IDIOTS_COLOR.cls_2} d="M84.78,10.85v6.1h-.05a8.06,8.06,0,0,0-3.29-2.35,10.27,10.27,0,0,0-1.44-.4,59.3,59.3,0,0,1-12.55,5.88,17.71,17.71,0,0,0-1.09,2.61,22.78,22.78,0,0,0-1,7.13,19.84,19.84,0,0,0,.89,6.31,11.91,11.91,0,0,0,2.47,4.35A10,10,0,0,0,72.44,43a12.73,12.73,0,0,0,4.69.84,10.38,10.38,0,0,0,2.3-.25Q81.19,42.77,83,42a6.7,6.7,0,0,0,1.74-2.05h.1l.09,1.21Q88,39.8,91.1,38.64V5A52.59,52.59,0,0,1,84.78,10.85Z"/>
              <Path fill={IDIOTS_COLOR.cls_3} d="M55,9.32a4.33,4.33,0,0,0,1.25.86,3.71,3.71,0,0,0,1.58.33,4,4,0,0,0,1.55-.31,4.2,4.2,0,0,0,1.3-.84,4.07,4.07,0,0,0,.89-1.24,3.43,3.43,0,0,0,0-2.95,4.1,4.1,0,0,0-.89-1.24,4.57,4.57,0,0,0-1.3-.86A4,4,0,0,0,55,3.91,3.83,3.83,0,0,0,53.9,6.65,3.52,3.52,0,0,0,54.2,8.1,4,4,0,0,0,55,9.32Z"/>
              <Path fill={IDIOTS_COLOR.cls_2} d="M61.08,21.89q-3.15.73-6.4,1.19V43.43h6.4Z"/>
              <Path fill={IDIOTS_COLOR.cls_3} d="M54.73,13.94V22.4q3.25-.47,6.4-1.19V13.94Z"/>
              <Path fill={IDIOTS_COLOR.cls_2} d="M34.92,19.35a17.55,17.55,0,0,1-3.11.35H30.38v5h1.28q4.89,0,6.93,1.7t2,5.3a6.42,6.42,0,0,1-.54,2.68,6.08,6.08,0,0,1-1.38,1.92c1.94.73,3.85,1.54,5.73,2.42a11,11,0,0,0,2.61-7.14,8.65,8.65,0,0,0-2.37-6.33,11.56,11.56,0,0,0-6.14-3.18V22a9.15,9.15,0,0,0,3-1.12,9.6,9.6,0,0,0,.82-.58q-2.93-.68-5.83-1.49A8,8,0,0,1,34.92,19.35Z"/>
              <Path fill={IDIOTS_COLOR.cls_3} d="M45.55,16.16a9,9,0,0,0,.59-3.25A9,9,0,0,0,42.8,5.43q-3.34-2.64-9.2-2.64A16.74,16.74,0,0,0,27.3,4,15.59,15.59,0,0,0,22.84,6.7v5a.45.45,0,0,0,.23.43.41.41,0,0,0,.48-.08,23.93,23.93,0,0,1,2.6-2,13.47,13.47,0,0,1,2.42-1.3A11.66,11.66,0,0,1,30.94,8a14.28,14.28,0,0,1,2.45-.2,7.29,7.29,0,0,1,4.49,1.33,4.91,4.91,0,0,1,1.78,4.21,7.18,7.18,0,0,1-.59,3.12,4.51,4.51,0,0,1-1.66,1.89,6.79,6.79,0,0,1-.88.44q2.9.81,5.83,1.49a9.36,9.36,0,0,0,1.57-1.43A9.28,9.28,0,0,0,45.55,16.16Z"/>
              <Path fill={IDIOTS_COLOR.cls_1} d="M38.72,36.33l-.1.11a6.73,6.73,0,0,1-2.19,1.31,7.65,7.65,0,0,1-2.68.46A14.51,14.51,0,0,1,28,37.1a19.91,19.91,0,0,1-5.51-3.72A.41.41,0,0,0,22,33.3a.45.45,0,0,0-.23.43V39a14.08,14.08,0,0,0,5.28,3.15,20.28,20.28,0,0,0,6.65,1.08,15.4,15.4,0,0,0,5.64-1,12.65,12.65,0,0,0,4.18-2.59,11.87,11.87,0,0,0,.88-.94C42.57,37.88,40.66,37.06,38.72,36.33Z"/>
              <Path fill={IDIOTS_COLOR.cls_1} d="M12.13,48.46h6.68L11.64,33.91a25.8,25.8,0,0,0-5.49,2.4Z"/>
              <Path fill={IDIOTS_COLOR.cls_3} d="M11.67.23l-3.45,7Q10.8,8.64,13.5,10L18.3.23Z"/>
              <Path fill={IDIOTS_COLOR.cls_2} d="M0,23.84,6.15,36.32a25.8,25.8,0,0,1,5.49-2.4l-5-10.08L13.5,10Q10.8,8.65,8.22,7.21Z"/>
            </Svg>
        );
    }
}
