import { useState } from "react";
import { Link } from "react-router-dom";
import { checkId, checkNickname } from "../API/LoginAPI";

const SignUp = (info) => {
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [ismatch, setIsmatch] = useState(true);
  const [checkPwd, setCheckPwd] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [sex, setSex] = useState("");
  const [agreeService, setAgreeeService] = useState(false);
  const [allowNickname, setAllowNickname] = useState("");
  const [allowId, setAllowId] = useState("");
  const [checkEmail, setCheckEmail] = useState("");

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
    if (e.currentTarget.value.length === 0 || e.currentTarget.value === pwd) {
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
    setAgreeeService(!agreeService);
  };

  const isAllowNickname = async (e) => {
    e.preventDefault();
    const isAllow = await checkNickname(nickname);
    if (isAllow) {
      setAllowNickname(true);
    } else {
      setAllowNickname(false);
    }
  };

  const isAllowId = async (e) => {
    e.preventDefault();
    const isAllow = await checkId(nickname);
    if (isAllow) {
      setAllowId(true);
    } else {
      setAllowId(false);
    }
  };

  const isAllowEmail = (e) => {
    const regex = /@/ && /.com/;
    e.preventDefault();
    if (regex.test(email)) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };

  const checkOnlyOne = (nowCheck) => {
    const checkboxes = document.getElementsByName("sex");
    checkboxes.forEach((v, i) => {
      if (v["defaultValue"] !== nowCheck.value) {
        checkboxes[i].checked = false;
      }
    });
  };

  const isAllowNext = (e) => {
    if (!onSubmitHandler()) e.preventDefault();
  };

  const onSubmitHandler = (e) => {
    if (
      nickname === "" ||
      id === "" ||
      pwd === "" ||
      email === "" ||
      birthday === "" ||
      sex === ""
    ) {
      alert("회원가입 정보를 정확히 입력해주세요.");
      return false;
    }

    if (nickname.length < 2 || nickname.length > 8) {
      alert("닉네임은 2자리 이상 8자리 이내로 입력해 주세요.");
      return false;
    }

    if (id.length < 6 || id.length > 12) {
      alert("아이디는 영문 6자리 이상 12자리 이내로 입력해주세요.");
      return false;
    }

    if (pwd !== checkPwd) {
      alert("입력하신 비밀번호와 비밀번호 확인이 서로 일치하지 않습니다.");
      return false;
    }

    if (pwd.length < 8 || pwd.length > 20) {
      alert("비밀번호를 8자리 이상 20자리 이내로 입력해주세요.");
      return false;
    }

    if (allowNickname !== true) {
      alert("닉네임을 확인 해주세요.");
      return false;
    }

    if (allowId !== true) {
      alert("아이디를 확인 해주세요.");
      return false;
    }

    if (checkEmail !== true) {
      alert("이메일 확인 해주세요.");
      return false;
    }

    if (!agreeService) {
      alert("이용 약관에 동의해주셔야 회원가입이 가능합니다.");
      return false;
    }

    return true;
  };

  const infoHandler = (e) => {
    e.preventDefault();
    const body = {
      Nickname: nickname,
      Id: id,
      Pwd: pwd,
      Email: email,
      Birthday: birthday,
      Sex: sex,
    };
    console.log(body);
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
        <form style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <label>닉네임</label>
            <input
              value={nickname}
              onChange={onNicknameHandler}
              placeholder="2자리 ~ 8자리"
            />
            <button style={{ cursor: "pointer" }} onClick={isAllowNickname}>
              닉네임 중복 확인
            </button>
          </div>
          <div>
            <label>아이디</label>
            <input
              value={id}
              onChange={onIdHandler}
              placeholder="영문 6자리 ~ 12자리"
            />
            <button style={{ cursor: "pointer" }} onClick={isAllowId}>
              아이디 중복 확인
            </button>
          </div>
          <div>
            <label>비밀번호</label>
            <input
              value={pwd}
              onChange={onPwdHandler}
              placeholder="비밀번호를 8자리 이상 20자리 이내로 설정해주세요."
            />
          </div>
          <div>
            <label>비밀번호 확인</label>
            <input value={checkPwd} onChange={onCheckPwdHandler} />
            {!ismatch ? (
              <p style={{ fontSize: "12px", color: "red", display: "inline" }}>
                비밀번호가 서로 일치하지 않습니다.
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>이메일</label>
            <input value={email} onChange={onEmailHandler} />
            <button onClick={isAllowEmail}>이메일 확인</button>
            {checkEmail === "" ? (
              ""
            ) : checkEmail ? (
              <p style={{ fontSize: "12px", color: "blue", display: "inline" }}>
                사용할 수 있는 이메일 입니다.
              </p>
            ) : (
              <p style={{ fontSize: "12px", color: "red", display: "inline" }}>
                사용할 수 없는 이메일입니다.
              </p>
            )}
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
            <Link
              to={{
                pathname: "/Information",
                state: {
                  Nickname: nickname,
                  Id: id,
                  Pwd: pwd,
                  Email: email,
                  Birthday: birthday,
                  Sex: sex,
                },
              }}
              style={{ cursor: "pointer" }}
              onClick={isAllowNext}
            >
              다음
            </Link>
          </div>
          <Link to="/Information">그냥넘기기</Link>
          <button onClick={infoHandler}>테스트 버튼</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
