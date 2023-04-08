/* eslint-disable */
import axios from 'axios';

/**
 * @author soohyun-dev
 * @see 로그인체크 , 보낼 데이터 : {Id, Password}
 * @todo 백엔드통신
 * @returns {JWT Token}
 */

export async function checkLogin() {
  try {
    const res = await axios.get(`http://3.39.36.242:8080/api/v1/member/test`).then(response => {
      console.log('응답 확인', response, response.data);
    });
    console.log(res);
  } catch (e) {
    console.error(e);
  }
}

export async function getLogin() {
  const response = await fetch(`http://3.39.36.242:8080/api/v1/member/test`, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  });
  console.log(response);
  if (!response.ok) {
    throw new Error('에러');
  }
  const body = await response.json();
  console.log(body);
  return body;
}
