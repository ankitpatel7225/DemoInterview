import * as React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';

const PasswordVisiable = (props: SvgProps) => {
  return (
    <Svg width={19.3} height={13.159} viewBox="0 0 19.3 13.159" {...props}>
      <G data-name="visibility (1)">
        <G data-name="Group 62789">
          <G data-name="Group 62788" fill="#b1b1b1">
            <Path
              data-name="Path 46461"
              d="M9.651 3.948a2.632 2.632 0 102.632 2.632 2.634 2.634 0 00-2.632-2.632z"
            />
            <Path
              data-name="Path 46462"
              d="M9.65 0A10.375 10.375 0 000 6.579a10.366 10.366 0 0019.3 0A10.371 10.371 0 009.65 0zm0 10.966a4.386 4.386 0 114.386-4.386 4.388 4.388 0 01-4.386 4.386z"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default PasswordVisiable;
