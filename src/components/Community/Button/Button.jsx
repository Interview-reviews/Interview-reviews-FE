/** @jsxImportSource @emotion/react */

import { buttonContainer, cancelButton, confirmButton } from './Button.style';

export default function Button() {
  return (
    <div css={buttonContainer}>
      <button css={cancelButton} type="reset">
        취소
      </button>
      <button css={confirmButton} type="submit">
        완료
      </button>
    </div>
  );
}
