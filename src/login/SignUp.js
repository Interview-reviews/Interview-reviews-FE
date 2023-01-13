import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { checkId, checkNickname } from "../API/SignUpAPI";
import Nav from "../components/Nav";
import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SignUp = (info) => {
  const [userName, setUserName] = useState(""); // 아이디
  //   const [nameCheck, setNameCheck] = useState("");
  const [nickname, setNickname] = useState(""); // 닉네임
  const [password, setPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true);
  const [checkPwd, setCheckPwd] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [agreeService, setAgreeeService] = useState(false);
  const [allowNickname, setAllowNickname] = useState("");
  const [allowId, setAllowId] = useState("");
  const [checkEmail, setCheckEmail] = useState("");

  const buildSignUp = () => {
    const info = JSON.parse(localStorage.getItem("userInfo"));
    console.log(info);
    setUserName(info.UserName);
    setNickname(info.Nickname);
    setPassword(info.Password);
    setCheckPwd(info.Password);
    setPhoneNumber(info.PhoneNumber);
    setEmail(info.Email);
    setBirthDate(info.BirthDate);
  };

  //   const onNameHandler = (e) => {
  //     setUserName(onlyKorean(e.currentTarget.value));
  //   };

  //   const onlyKorean = (value) => {
  //     const pattern = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
  //     if (pattern.test(value)) {
  //       setNameCheck(false);
  //       return userName;
  //     }
  //     setNameCheck(true);
  //     return value;
  //   };

  const onCheckPwdHandler = (e) => {
    setCheckPwd(e.currentTarget.value);
    if (
      e.currentTarget.value.length === 0 ||
      e.currentTarget.value === password
    ) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }
  };

  const onSexHandler = (e) => {
    setGender(e.currentTarget.value);
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
      sendEmail();
    } else {
      setCheckEmail(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    fetch("보낼 주소", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((json) => {});
  };

  const isVaildEmail = (e) => {
    e.preventDefault();
    alert("인증되었습니다.");
  };

  const onBirthHandler = (e) => {
    setBirthDate(e.currentTarget.value);
  };

  const checkOnlyOne = (nowCheck) => {
    const checkboxes = document.getElementsByName("gender");
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
      userName === "" ||
      password === "" ||
      email === "" ||
      birthDate === "" ||
      gender === ""
    ) {
      alert("회원가입 정보를 모두 입력해주세요.");
      return false;
    }

    if (nickname.length < 2 || nickname.length > 8) {
      alert("닉네임은 2자리 이상 8자리 이내로 입력해 주세요.");
      return false;
    }

    if (userName.length < 6 || userName.length > 12) {
      alert("아이디는 영문 6자리 이상 12자리 이내로 입력해주세요.");
      return false;
    }

    if (password !== checkPwd) {
      alert("입력하신 비밀번호와 비밀번호 확인이 서로 일치하지 않습니다.");
      return false;
    }

    if (password.length < 8 || password.length > 20) {
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
    const body = {
      Nickname: nickname,
      UserName: userName,
      Password: password,
      PhoneNumber: phoneNumber,
      Email: email,
      BirthDate: birthDate,
      Gender: gender,
    };
    localStorage.setItem("userInfo", JSON.stringify(body));
  };

  const infoHandler = (e) => {
    e.preventDefault();
    const body = {
      Nickname: "",
      UserName: "",
      Password: "",
      CheckPwd: "",
      PhoneNumber: "",
      Email: "",
      BirthDate: "",
      Gender: "",
    };
    localStorage.setItem("userInfo", JSON.stringify(body));
  };

  useEffect(() => {
    buildSignUp();
  }, []);

  return (
    <>
      <Nav />
      <SignUpContainer>
        <form style={{ display: "flex", flexDirection: "column" }}>
          {/* <div>
            <label>이름</label>
            <input
              value={userName}
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
          </div> */}
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
              value={userName}
              onChange={(e) => setUserName(e.currentTarget.value)}
              placeholder="영문 6자리 ~ 12자리"
            />
            <button style={{ cursor: "pointer" }} onClick={isAllowId}>
              아이디 중복 확인
            </button>
          </div>
          <div>
            <label>비밀번호</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="비밀번호를 8자리 이상 20자리 이내로 설정해주세요."
            />
          </div>
          <div>
            <label>비밀번호 확인</label>
            <input
              value={checkPwd}
              onChange={onCheckPwdHandler}
              placeholder="입력하신 비밀번호와 동일하게 입력해주세요."
            />
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
            {/* <button style={{ cursor: "pointer" }} onClick={isAllowNickname}>
              본인 확인
            </button> */}
            <i style={{ color: "gray", fontSize: "12px" }}>ex.010-xxxx-xxxx</i>
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
            {checkEmail && (
              <div>
                <input placeholder="인증번호를 입력해주세요" />{" "}
                <button onClick={isVaildEmail}>인증하기</button>
              </div>
            )}
          </div>
          <div>
            <label>생년월일</label>
            <input
              type="birthday"
              placeholder="YYYYMMDD 띄어쓰기 없이 입력"
              maxLength={8}
              onChange={onBirthHandler}
            />
          </div>
          <div>
            <label style={{ paddingRight: "10px" }}>성별</label>
            <label>남자</label>
            <input
              style={{ cursor: "pointer" }}
              type="checkbox"
              name="gender"
              value="남자"
              onChange={(e) => {
                checkOnlyOne(e.target);
                onSexHandler(e);
              }}
            />
            <label>여자</label>
            <input
              style={{ cursor: "pointer" }}
              type="checkbox"
              name="gender"
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
              }}
              style={{ cursor: "pointer" }}
              onClick={isAllowNext}
            >
              <button>다음</button>
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
          <button onClick={infoHandler}>로컬스토리지 리셋</button>
          <Link to="/Login">로그인창</Link>
        </form>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
