/* eslint-disable */
import axios from 'axios';

/**
 * @author soohyun-dev
 * @see 로그인체크 , 보낼 데이터 : {Id, Password}
 * @todo 백엔드통신
 * @returns {JWT Token}
 */

export async function checkLogin(formData) {
  //   try {
  //     const res = await axios.get(`주소`).then((response) => {
  //       console.log("응답 확인", response);
  //       const token = response.headers.authorization;
  //       window.localStorage.setItem("token", token);
  //     });
  //     console.log(res);
  //   } catch (e) {
  //     console.error(e);
  //   }

  const response = await fetch(``, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: formData,
  });
  if (!response.ok) {
    throw new Error('로그인 조회에 실패하였습니다.');
  }
  const token = response.headers.authorization;
  window.localStorage.setItem('token', token);
  const body = await response.json();
  return body;
}
