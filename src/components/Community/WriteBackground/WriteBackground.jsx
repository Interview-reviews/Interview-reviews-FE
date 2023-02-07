/** @jsxImportSource @emotion/react */
import WriteContainer from '../WriteContainer/WriteContainer';
import { backgroundStyle } from './WriteBackground.style';

export default function WriteBackground({ color }) {
  return (
    <div css={backgroundStyle(color)}>
      <WriteContainer />
    </div>
  );
}
