import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { checkId, checkNickname, sendEmail } from "../../API/SignUpAPI";
import Nav from "../../components/Nav";
import styled from "styled-components";

const SignUpContainer = styled.fieldset`
  position: absolute;
  top: 30%;
  left: 30%;
  border: none;
`;

const Label = styled.label`
  display: inline-block;
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

const CheckButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: 40px;
  color: #5c8aff;
  border: solid 1px #5c8aff;
  border-radius: 10px;
  background: #ffff;
  margin-left: 10px;
  &:hover {
    opacity: 70%;
    font-weight: 600;
    color: white;
  }
`;

const EmailCheck = styled.p`
  font-size: 12px;
  display: inline;
  margin-left: 10px;
`;

const GenderCheck = styled.input`
  cursor: pointer;

  :checked {
    accent-color: blue;
  }
`;

const GenerLabel = styled.label`
  font-weight: 550;
  font-size: 16px;
  line-height: 19px;
  margin: 0 100px 0 10px;
`;

const Agree = styled.input`
  cursor: pointer;
  height: 20px;
  :checked {
    accent-color: blue;
  }
`;
const AgreeGuide = styled.p`
  margin-top: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;
const AgreeGuide2 = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-top: 10px;
`;

const NextButton = styled.button`
  margin-top: 114px;
  width: 340px;
  height: 47px;
  background: #b9b9b9;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 70%;
    transition: 0.7s;
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
    // 이전 화면으로 돌아올 경우 입력 정보 유지
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
      const result = sendEmail();
    } else {
      setCheckEmail(false);
    }
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
              <CheckButton onClick={isAllowNickname}>
                닉네임 중복 확인
              </CheckButton>
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
              <CheckButton style={{ cursor: "pointer" }} onClick={isAllowId}>
                아이디 중복 확인
              </CheckButton>
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
                placeholder="010-xxxx-xxxx 대쉬 (-) 로 구분하여 입력"
              />
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
              <CheckButton onClick={isAllowEmail}>이메일 인증</CheckButton>
              {checkEmail === "" ? (
                ""
              ) : checkEmail ? (
                <EmailCheck style={{ color: "blue" }}>
                  사용할 수 있는 이메일 입니다.
                </EmailCheck>
              ) : (
                <EmailCheck
                  style={{
                    color: "red",
                  }}
                >
                  사용할 수 없는 이메일입니다.
                </EmailCheck>
              )}
              {checkEmail && (
                <div style={{ margin: "10px 0 0 140px" }}>
                  <SignUpInput placeholder="인증번호를 입력해주세요" />{" "}
                  <CheckButton onClick={isVaildEmail}>인증하기</CheckButton>
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
              <div
                style={{
                  width: "22%",
                  float: "left",
                }}
              >
                <Label>
                  이용약관 동의<EssentialMark>*</EssentialMark>
                </Label>
                <Agree
                  style={{ width: "15px", verticalAlign: "middle" }}
                  type="checkbox"
                  onChange={(e) => setAgreeeService(e.currentTarget.value)}
                />
              </div>
              <div
                style={{
                  float: "left",
                  width: "70%",
                }}
              >
                <AgreeGuide>가입약관에 모두 동의합니다.</AgreeGuide>
                <AgreeGuide2>
                  이용약관(필수), 개인정보취급방침(필수), 마케팅정보
                  수집동의(선택)
                </AgreeGuide2>
              </div>
            </InputContainer>
            <InputContainer>
              <Link
                to={{
                  pathname: "/Information",
                }}
                style={{ cursor: "pointer" }}
                onClick={isAllowNext}
              >
                <NextButton>다음</NextButton>
              </Link>
            </InputContainer>
          </ul>
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
