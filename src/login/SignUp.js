import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { checkId, checkNickname } from "../API/SignUpAPI";
import Nav from "../components/Nav";
import styled from "styled-components";

const SignUpContainer = styled.fieldset`
  position: absolute;
  top: 30%;
  left: 30%;
  border: none;
`;

const Label = styled.label`
  float: left;
  font-weight: 550;
  font-size: 16px;
  line-height: 19px;
  margin: 10px 0;
  width: 140px;
`;

const EssentialMark = styled.i`
  color: red;
`;

const InputContainer = styled.li`
  list-style: none;
  margin: 20px 0px;
`;

const SingUpFont = styled.div`
  font-weight: 600;
  font-size: 26px;
  margin: 0 0 60px 220px;
`;

const SignUpInput = styled.input`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 335px;
  height: 40px;
  padding-left: 10px;
`;

const GenderCheck = styled.input`
  float: left;
  cursor: pointer;
  height: 28px;
  zoom: 1.5;
  :checked {
    accent-color: blue;
  }
`;

const GenerLabel = styled.label`
  font-weight: 550;
  font-size: 16px;
  line-height: 19px;
  margin: 10px 50px;
  float: left;
`;

const Agree = styled.input`
  cursor: pointer;
  height: 40px;
  :checked {
    accent-color: blue;
  }
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

  //   useEffect(() => {
  //     buildSignUp();
  //   }, []);

  return (
    <>
      <Nav />

      <SignUpContainer>
        <SingUpFont>회원가입</SingUpFont>
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
          <ul>
            <InputContainer>
              <Label>
                닉네임<EssentialMark>*</EssentialMark>
              </Label>
              <SignUpInput
                value={nickname}
                onChange={(e) => setNickname(e.currentTarget.value)}
                placeholder="2자리 ~ 8자리"
              />
              <button style={{ cursor: "pointer" }} onClick={isAllowNickname}>
                닉네임 중복 확인
              </button>
            </InputContainer>
            <InputContainer>
              <Label>
                아이디<EssentialMark>*</EssentialMark>
              </Label>
              <SignUpInput
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
                placeholder="영문 6자리 ~ 12자리"
              />
              <button style={{ cursor: "pointer" }} onClick={isAllowId}>
                아이디 중복 확인
              </button>
            </InputContainer>
            <InputContainer>
              <Label>
                비밀번호<EssentialMark>*</EssentialMark>
              </Label>
              <SignUpInput
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder="비밀번호를 8자리 이상 20자리 이내로 설정해주세요."
              />
            </InputContainer>
            <InputContainer>
              <Label>
                비밀번호 확인<EssentialMark>*</EssentialMark>
              </Label>
              <SignUpInput
                value={checkPwd}
                onChange={onCheckPwdHandler}
                placeholder="입력하신 비밀번호와 동일하게 입력해주세요."
              />
              {isMatch === "" || isMatch ? (
                ""
              ) : (
                <p
                  style={{ fontSize: "12px", color: "red", display: "inline" }}
                >
                  비밀번호가 서로 일치하지 않습니다.
                </p>
              )}
            </InputContainer>
            <InputContainer>
              <Label>
                휴대번호<EssentialMark>*</EssentialMark>
              </Label>
              <SignUpInput
                value={phoneNumber}
                onChange={onPhoneNumberHandler}
                maxLength={13}
                placeholder="대쉬 (-) 로 구분하여 입력"
              />
              {/* <button style={{ cursor: "pointer" }} onClick={isAllowNickname}>
              본인 확인
            </button> */}
              <i style={{ color: "gray", fontSize: "12px" }}>
                ex.010-xxxx-xxxx
              </i>
            </InputContainer>
            <InputContainer>
              <Label>
                이메일<EssentialMark>*</EssentialMark>
              </Label>
              <SignUpInput
                value={email}
                placeholder="@을 포함한 올바른 이메일을 입력해주세요"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <button onClick={isAllowEmail}>이메일 확인</button>
              {checkEmail === "" ? (
                ""
              ) : checkEmail ? (
                <p
                  style={{ fontSize: "12px", color: "blue", display: "inline" }}
                >
                  사용할 수 있는 이메일 입니다.
                </p>
              ) : (
                <p
                  style={{ fontSize: "12px", color: "red", display: "inline" }}
                >
                  사용할 수 없는 이메일입니다.
                </p>
              )}
              {checkEmail && (
                <div style={{ margin: "10px 0 0 140px" }}>
                  <SignUpInput placeholder="인증번호를 입력해주세요" />{" "}
                  <button onClick={isVaildEmail}>인증하기</button>
                </div>
              )}
            </InputContainer>
            <InputContainer>
              <Label>
                생년월일<EssentialMark>*</EssentialMark>
              </Label>
              <SignUpInput
                type="birthday"
                placeholder="YYYYMMDD 띄어쓰기 없이 입력"
                maxLength={8}
                onChange={onBirthHandler}
              />
            </InputContainer>
            <InputContainer>
              <Label>
                성별<EssentialMark>*</EssentialMark>
              </Label>

              <GenderCheck
                type="radio"
                name="gender"
                value="남자"
                onChange={(e) => {
                  checkOnlyOne(e.target);
                  onSexHandler(e);
                }}
              />
              <GenerLabel>남자</GenerLabel>

              <GenderCheck
                type="radio"
                name="gender"
                value="여자"
                onChange={(e) => {
                  checkOnlyOne(e.target);
                  onSexHandler(e);
                }}
              />

              <GenerLabel>여자</GenerLabel>
            </InputContainer>

            <InputContainer>
              <Label>
                이용약관 동의<EssentialMark>*</EssentialMark>
              </Label>
              <Agree
                type="checkbox"
                onChange={(e) => setAgreeeService(e.currentTarget.value)}
              />
            </InputContainer>
          </ul>
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
