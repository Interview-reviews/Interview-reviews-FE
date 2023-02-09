/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

const backStyle = css`
  width: 100%;
  height: 20em;
  background-color: #5c8aff;
  border-radius: 0px 0px 174.5px 174.5px;
`;

const mainHeaderBox = css`
  text-align: center;
`;

const titleBox = css`
  width: 50%;
  display: inline-block;
  margin: 5em 0;
`;

const title = css`
  text-align: left;
  font-size: 32px;
  font-weight: 600;
  color: #ffffff; ;
`;

const inputDiv = css`
  text-align: center;
`;

const inputBox = css`
  width: 56em;
  height: 3em;
  padding-left: 2em;
  background: #ffffff;
  box-shadow: 0px 20px 42px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  border: none;
`;

export default function MainSearch() {
  return (
    <>
      <section css={backStyle}>
        <div css={mainHeaderBox}>
          <div css={titleBox}>
            <div css={title}>
              <p>궁금한 기업의 면접후기를</p>
              <p>검색해보세요!</p>
            </div>
          </div>
        </div>
        <div css={inputDiv}>
          <input css={inputBox} placeholder="예) 삼성전자 면접 후기" />
        </div>
      </section>
    </>
  );
}
