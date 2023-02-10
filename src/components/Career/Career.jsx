/** @jsxImportSource @emotion/react */

import careerStyle from './Career.style';

export default function Career({ career }) {
  return <div css={careerStyle(career)}>{career}</div>;
}
