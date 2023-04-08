/**
 * @author soohyun-dev
 * @see 닉네임체크 , 보낼 데이터 : Nickname
 * @todo 백엔드통신
 * @returns {boolean}
 */

export async function checkNickname(formData) {
  const response = await fetch(`http://3.39.36.242:8080/api/v1/member/check-nickname/${formData}`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('닉네임 중복확인에 실패하였습니다.');
  }
  console.log('닉네임 중복확인 응답 확인', response);
  const body = await response.json();
  return body;
}

/**
 * @author soohyun-dev
 * @see 아이디체크 , 보낼 데이터 : Id
 * @todo 백엔드통신
 * @returns {boolean}
 */

export async function checkId(formData) {
  const IdInfo = { Id: formData };
  const response = await fetch(`http://3.39.36.242:8080/api/v1/member/check-nickname`, {
    method: 'GET',
    body: IdInfo,
  });
  if (!response.ok) {
    throw new Error('아이디 중복확인에 실패하였습니다.');
  }
  const body = await response.json();
  return body;
}

/**
 * @author soohyun-dev
 * @see 이메일본인인증 , 보낼 데이터 : Email
 * @todo 백엔드통신
 * @returns {boolean}
 */

export async function sendEmail(formData) {
  const EmailInfo = { Email: formData };
  const response = await fetch('보낼 주소', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(EmailInfo),
  });

  const body = await response.json();
  return body;
}

export async function signUp() {
  const data = {
    Nickname: 'nickName',
    UserName: 'userName',
    Password: 'a12345678',
    PhoneNumber: '010-1234-5678',
    Email: 'asds@naver.com',
    BirthDate: '19951223',
    Gender: '남자',
  };

  const response = await fetch(`http://3.39.36.242:8080/api/v1/member/join`, {
    method: 'POST',
    body: data,
  });
  if (!response.ok) {
    throw new Error('회원가입에 실패하였습니다.');
  }
  const body = await response.json();
  console.log(body);
  return body;
}

export async function checkEmailAPI(email) {
  const response = await fetch(`http://3.39.36.242:8080/api/v1/member/emailConfirm/${email}`, {
    method: 'POST',
  });
  if (!response.ok) {
    throw new Error('이메일 인증에 실패하였습니다.');
  }
  const body = await response.text();

  console.log(body);
  return body;
}

export async function joinAPI() {
  const data = {
    Nickname: '수현',
    UserName: 'soohyun',
    Password: 'a123456789',
    PhoneNumber: '010-1234-5678',
    Email: 'abcd@naver.com',
    BirthDate: '19950101',
    Gender: '남자',
  };

  const response = await fetch('http://3.39.36.242:8080/api/v1/member/join', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('회원가입에 실패하였습니다.');
  }
  const body = await response.json();

  console.log(body);
  return body;
}

export async function checkTest() {
  const response = await fetch(`http://3.39.36.242:8080/api/v1/member/test`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('테스트에 실패하였습니다.');
  }
  console.log('테스트응답 확인', response);
  const body = await response.json();
  console.log(body);
  return body;
}
