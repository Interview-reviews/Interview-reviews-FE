import { useState } from "react";
import { Link } from "react-router-dom";
import { checkId, checkNickname } from "../API/SignUpAPI";

const SignUp = (info) => {
  const [name, setName] = useState("");
  const [nameCheck, setNameCheck] = useState("");
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [isMatch, setIsMatch] = useState(true);
  const [checkPwd, setCheckPwd] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [sex, setSex] = useState("");
  const [agreeService, setAgreeeService] = useState(false);
  const [allowNickname, setAllowNickname] = useState("");
  const [allowId, setAllowId] = useState("");
  const [checkEmail, setCheckEmail] = useState("");

  const onNameHandler = (e) => {
    setName(onlyKorean(e.currentTarget.value));
  };

  const onlyKorean = (value) => {
    const pattern = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    if (pattern.test(value)) {
      setNameCheck(false);
      return name;
    }
    setNameCheck(true);
    return value;
  };

  const onCheckPwdHandler = (e) => {
    setCheckPwd(e.currentTarget.value);
    if (e.currentTarget.value.length === 0 || e.currentTarget.value === pwd) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }
  };

  const onSexHandler = (e) => {
    setSex(e.currentTarget.value);
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

  const onPhoneNumberHandler = (e) => {
    const result = onlyPhoneNumber(e.currentTarget.value);
    if (result) {
      setPhoneNumber(e.currentTarget.value);
    } else {
      setPhoneNumber(phoneNumber);
    }
    if (e.currentTarget.value.length === 0) {
      setPhoneNumber("");
    }
  };

  const onlyPhoneNumber = (value) => {
    const pattern = /[0-9]|[-]/g;
    return pattern.test(value[value.length - 1]);
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
      alert("회원가입 정보를 모두 입력해주세요.");
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

  const storeInfo = () => {
    localStorage.setItem("Nickname", nickname);
  };

  const infoHandler = (e) => {
    e.preventDefault();
    const body = {
      Name: name,
      Nickname: nickname,
      Id: id,
      Pwd: pwd,
      PhoneNumber: phoneNumber,
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
            <label>이름</label>
            <input
              value={name}
              onChange={onNameHandler}
              placeholder="한글 이름만 입력"
            />
            {nameCheck === "" || nameCheck ? (
              ""
            ) : (
              <p style={{ fontSize: "12px", color: "red", display: "inline" }}>
                한글만 입력 가능 합니다.
              </p>
            )}
          </div>
          <div>
            <label>닉네임</label>
            <input
              value={nickname}
              onChange={(e) => setNickname(e.currentTarget.value)}
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
              onChange={(e) => setId(e.currentTarget.value)}
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
              onChange={(e) => setPwd(e.currentTarget.value)}
              placeholder="비밀번호를 8자리 이상 20자리 이내로 설정해주세요."
            />
          </div>
          <div>
            <label>비밀번호 확인</label>
            <input value={checkPwd} onChange={onCheckPwdHandler} />
            {isMatch === "" || isMatch ? (
              ""
            ) : (
              <p style={{ fontSize: "12px", color: "red", display: "inline" }}>
                비밀번호가 서로 일치하지 않습니다.
              </p>
            )}
          </div>
          <div>
            <label>휴대번호</label>
            <input
              value={phoneNumber}
              onChange={onPhoneNumberHandler}
              maxLength={13}
              placeholder="대쉬 (-) 로 구분하여 입력"
            />
            <button style={{ cursor: "pointer" }} onClick={isAllowNickname}>
              본인 확인
            </button>
          </div>
          <div>
            <label>이메일</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
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
              placeholder="YYYYMMDD 띄어쓰기 없이 입력"
              maxLength={8}
              onChange={(e) => setBirthday(e.currentTarget.value)}
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
              onChange={(e) => setAgreeeService(e.currentTarget.value)}
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
          <Link
            to={{
              pathname: "/Information",
            }}
            onClick={storeInfo}
          >
            그냥넘기기
          </Link>
          <button onClick={infoHandler}>테스트 버튼</button>
          <Link to="/Login">로그인창</Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
