import Nav from "../../components/Nav";

const FindId = () => {
  return (
    <>
      <Nav />
      <h3>아이디 찾기 페이지</h3>
      <div>
        <h3>이름</h3>
        <input placeholder="이름" />
      </div>
      <div>
        <h3>전화번호</h3>
        <input placeholder="대쉬 (-) 없이 입력" />
      </div>
      <button>아이디 찾기</button>
    </>
  );
};

export default FindId;
