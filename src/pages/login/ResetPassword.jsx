/* eslint-disable */
import Nav from '../../components/Nav';

export default function ResetPassword() {
  return (
    <>
      <Nav />
      <div>
        <h3>비밀번호 설정</h3>
        <input placeholder="비밀번호를 8자리 이상 20자리 이내로 설정해주세요." />
      </div>
      <div>
        <h3>비밀번호 확인</h3>
        <input placeholder="입력하신 비밀번호와 동일하게 입력해주세요. " />
      </div>
      <button>비밀번호 재설정</button>
    </>
  );
}
