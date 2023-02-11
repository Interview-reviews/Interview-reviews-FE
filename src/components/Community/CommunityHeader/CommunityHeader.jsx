/** @jsxImportSource @emotion/react */
import Career from '../../Career/Career';
import CommunityDate from '../CommunityDate/CommunityDate';

export default function CommunityHeader({ img, username, career, likes, comments, date }) {
  return (
    <div
      css={{
        display: 'flex',
        width: '90%',
        height: '35%',

        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
      }}>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
        }}>
        {/* 추후 이미지로 변경될 예정 */}
        <div
          css={{
            display: 'flex',
            width: '32px',
            height: '32px',
            border: '1px solid green',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '25px',
          }}>
          img
        </div>
        <div css={{ padding: '0.8em 0.8em', /* border: '1px solid pink' */ alignItems: 'center' }}>
          {username}
          <CommunityDate date={date} />
        </div>
        <Career career={career} />;
      </div>

      {/* 좋아요와 댓글 수  */}
      {comments && date && (
        <div
          css={{
            width: '17%',
            display: 'flex',
            justifyContent: 'space-around',
          }}>
          <div css={{ justifyContent: 'space-around' }}>
            <svg width="20" height="20" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.99979 3.42848C9.57122 0.571338 13.9632 0.391909 15.8569 2.28562C17.6889 4.11762 17.5712 7.23877 15.8569 9.14277L8.99979 15.9999L2.14265 9.14277C1.23343 8.2334 0.722656 7.00013 0.722656 5.71419C0.722656 4.42826 1.23343 3.19499 2.14265 2.28562C3.91408 0.514195 8.42836 0.571338 8.99979 3.42848Z"
                stroke="#969696"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {likes}
          </div>

          <div css={{}}>
            <svg width="21" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5 3.5C17.0304 3.5 17.5391 3.71071 17.9142 4.08579C18.2893 4.46086 18.5 4.96957 18.5 5.5V15.5C18.5 16.0304 18.2893 16.5391 17.9142 16.9142C17.5391 17.2893 17.0304 17.5 16.5 17.5L13.501 17.499L11.207 19.793C11.0348 19.9652 10.8057 20.0686 10.5627 20.0839C10.3197 20.0992 10.0794 20.0253 9.887 19.876L9.793 19.793L7.499 17.499L4.5 17.5C3.96957 17.5 3.46086 17.2893 3.08579 16.9142C2.71071 16.5391 2.5 16.0304 2.5 15.5V5.5C2.5 4.96957 2.71071 4.46086 3.08579 4.08579C3.46086 3.71071 3.96957 3.5 4.5 3.5H16.5Z"
                stroke="#969696"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.499 11.5C10.999 11.5 11.499 11 11.499 10.5C11.499 10 10.999 9.5 10.499 9.5C9.999 9.5 9.5 10 9.5 10.5C9.5 11 9.999 11.5 10.499 11.5ZM6.499 11.5C6.999 11.5 7.499 11 7.499 10.5C7.499 10 6.999 9.5 6.499 9.5C5.999 9.5 5.5 10 5.5 10.5C5.5 11 5.999 11.5 6.499 11.5ZM14.499 11.5C14.999 11.5 15.499 11 15.499 10.5C15.499 10 14.999 9.5 14.499 9.5C13.999 9.5 13.5 10 13.5 10.5C13.5 11 13.999 11.5 14.499 11.5Z"
                fill="#969696"
              />
            </svg>
            {comments}
          </div>
        </div>
      )}
    </div>
  );
}
