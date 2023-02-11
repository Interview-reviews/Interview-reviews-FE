/** @jsxImportSource @emotion/react */
import DetailHeader from '../DetailHeader/DetailHeader';
import Comments from '../../Comments/Comments';
import detailContainerStyle from './DetailContainer.style';

export default function DetailContainer() {
  return (
    <div css={detailContainerStyle}>
      <DetailHeader />
      <Comments />
    </div>
  );
}
