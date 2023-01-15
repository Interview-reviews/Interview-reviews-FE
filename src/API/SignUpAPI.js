/**
 * @author 윤수현
 * @see 닉네임체크 , 보낼 데이터 : Nickname
 * @todo 백엔드통신
 * @returns {boolean}
 */

export async function checkNickname(formData) {
  const NickNameInfo = { NickName: formData };
  const response = await fetch(``, {
    method: "GET",
    body: NickNameInfo,
  });
  if (!response.ok) {
    throw new Error("닉네임 중복확인에 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}

/**
 * @author 윤수현
 * @see 아이디체크 , 보낼 데이터 : Id
 * @todo 백엔드통신
 * @returns {boolean}
 */

export async function checkId(formData) {
  const IdInfo = { Id: formData };
  const response = await fetch(``, {
    method: "GET",
    body: IdInfo,
  });
  if (!response.ok) {
    throw new Error("아이디 중복확인에 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}

/**
 * @author 윤수현
 * @see 이메일본인인증 , 보낼 데이터 : Email
 * @todo 백엔드통신
 * @returns {boolean}
 */

export async function sendEmail(formData) {
  const EmailInfo = { Email: formData };
  const response = await fetch("보낼 주소", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(EmailInfo),
  });

  const body = await response.json();
  return body;
}
