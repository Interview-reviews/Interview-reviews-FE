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
