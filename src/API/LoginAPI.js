/**
 * @author 윤수현
 * @see 로그인체크 , 보낼 데이터 : {Id, Password}
 * @todo 백엔드통신
 * @returns {JWT Token}
 */

export async function checkLogin(formData) {
  console.log(formData);
  const response = await fetch(``, {
    method: "GET",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("로그인 조회에 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}
