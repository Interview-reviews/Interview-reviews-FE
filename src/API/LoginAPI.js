export async function checkNickname(formData) {
  const response = await fetch(``, {
    method: "GET",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("닉네임 중복확인에 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}

export async function checkId(formData) {
  const response = await fetch(``, {
    method: "GET",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("아이디 중복확인에 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}
