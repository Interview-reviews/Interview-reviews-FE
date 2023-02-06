/** @jsxImportSource @emotion/react */
import FieldsetCommunity from '../FieldsetCommunity/FiledsetCommunity';
import { parentContainer, childContainer } from './WriteContainer.style';

export default function WriteContainer() {
  return (
    <>
      <div css={parentContainer}>
        <div css={childContainer}>
          <FieldsetCommunity />
        </div>
      </div>
    </>
  );
}
