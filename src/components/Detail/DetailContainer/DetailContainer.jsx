/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DetailHeader from '../DetailHeader/DetailHeader';

const detailContainerStyle = css`
  width: 90%;
  height: 50rem;
  margin: 8vh auto;

  background: white;
  border: 1px solid #dfdfdf;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function DetailContainer() {
  return (
    <div css={detailContainerStyle}>
      <DetailHeader />
    </div>
  );
}
