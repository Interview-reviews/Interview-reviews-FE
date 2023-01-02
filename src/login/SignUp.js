import { useState } from "react";

const SignUp = () => {
  const [Nickname, setNickname] = useState("");
  const [Id, setId] = useState("");
  const [Pwd, setPwd] = useState("");
  const [Ismatch, setIsmatch] = useState(true);
  const [CheckPwd, setCheckPwd] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [Sex, setSex] = useState("");
  const [AgreeService, setAgreeeService] = useState(false);

  const onNicknameHandler = (e) => {
    setNickname(e.currentTarget.value);
  };
  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPwdHandler = (e) => {
    setPwd(e.currentTarget.value);
  };
  const onCheckPwdHandler = (e) => {
    setCheckPwd(e.currentTarget.value);
    if (e.currentTarget.value.length === 0 || e.currentTarget.value === Pwd) {
      setIsmatch(true);
    } else {
      setIsmatch(false);
    }
  };

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onBirthdayHandler = (e) => {
    setBirthday(e.currentTarget.value);
  };

  const onSexHandler = (e) => {
    setSex(e.currentTarget.value);
  };

  const onAgreeeServiceHandler = () => {
    setAgreeeService(!AgreeService);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Pwd !== CheckPwd)
      return alert(
        "입력하신 비밀번호와 비밀번호 확인이 서로 일치하지 않습니다."
      );

    if (!AgreeService)
      return alert("이용 약관에 동의해주셔야 회원가입이 가능합니다.");

    const body = {
      nickname: Nickname,
      id: Id,
      pwd: Pwd,
      email: Email,
      birthday: Birthday,
      sex: Sex,
    };
    console.log(body);
  };

  const checkOnlyOne = (nowCheck) => {
    const checkboxes = document.getElementsByName("sex");
    checkboxes.forEach((v, i) => {
      if (v["defaultValue"] !== nowCheck.value) {
        checkboxes[i].checked = false;
      }
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={onSubmitHandler}
        >
          <div>
            <label>닉네임</label>
            <input value={Nickname} onChange={onNicknameHandler} />
          </div>
          <div>
            <label>아이디</label>
            <input value={Id} onChange={onIdHandler} />
          </div>
          <div>
            <label>비밀번호</label>
            <input value={Pwd} onChange={onPwdHandler} />
          </div>
          <div>
            <label>비밀번호 확인</label>
            <input value={CheckPwd} onChange={onCheckPwdHandler} />
            {!Ismatch ? (
              <p style={{ fontSize: "12px", color: "red" }}>
                비밀번호가 서로 일치하지 않습니다.
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>이메일</label>
            <input value={Email} onChange={onEmailHandler} />
          </div>
          <div>
            <label>생년월일</label>
            <input
              type="birthday"
              placeholder="YYMMDD 주민등록번호 앞 6자리"
              maxLength={6}
              onChange={onBirthdayHandler}
            />
          </div>
          <div>
            <label style={{ paddingRight: "10px" }}>성별</label>
            <label>남자</label>
            <input
              style={{ cursor: "pointer" }}
              name="sex"
              type="checkbox"
              value="남자"
              onChange={(e) => {
                checkOnlyOne(e.target);
                onSexHandler(e);
              }}
            />
            <label>여자</label>
            <input
              style={{ cursor: "pointer" }}
              name="sex"
              type="checkbox"
              value="여자"
              onChange={(e) => {
                checkOnlyOne(e.target);
                onSexHandler(e);
              }}
            />
          </div>
          <div>
            <label>이용약관 동의</label>
            <input
              style={{ cursor: "pointer" }}
              type="checkbox"
              onChange={onAgreeeServiceHandler}
            />
          </div>
          <div>
            <button style={{ cursor: "pointer" }}>회원가입 하기</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
