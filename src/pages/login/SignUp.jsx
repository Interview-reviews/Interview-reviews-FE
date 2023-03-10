/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { checkId, checkNickname, sendEmail } from '../../API/SignUpAPI';
import Nav from '../../components/Nav';
import EssentialMark from '../../constant/essentialMark';

const signUpContainer = css`
  position: absolute;
  top: 30%;
  left: 30%;
  border: none;
`;

const signUpFont = css`
  font-weight: 600;
  font-size: 26px;
  margin: 0 0 60px 220px;
`;

const item = css`
  display: inline-block;
  font-weight: 550;
  font-size: 16px;
  line-height: 19px;
  margin: 10px 0;
  width: 140px;
`;

const inputContainer = css`
  list-style: none;
  margin: 20px 0px;
`;

const signUpInput = css`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 335px;
  height: 40px;
  padding-left: 10px;
`;

const checkButton = css`
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

const emailCheck = css`
  font-size: 12px;
  display: inline;
  margin-left: 10px;
`;

const genderCheck = css`
  cursor: pointer;
  :checked {
    accent-color: blue;
  }
`;

const generLabel = css`
  font-weight: 550;
  font-size: 16px;
  line-height: 19px;
  margin: 0 100px 0 10px;
`;

const agree = css`
  cursor: pointer;
  height: 20px;
  :checked {
    accent-color: blue;
  }
`;
const agreeGuide = css`
  margin-top: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;
const agreeGuide2 = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-top: 10px;
`;

const nextButton = css`
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

export default function SignUp(info) {
  const [userName, setUserName] = useState(''); // ?????????
  //   const [nameCheck, setNameCheck] = useState("");
  const [nickname, setNickname] = useState(''); // ?????????
  const [password, setPassword] = useState('');
  const [isMatch, setIsMatch] = useState(true);
  const [checkPwd, setCheckPwd] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [agreeService, setAgreeeService] = useState(false);
  const [allowNickname, setAllowNickname] = useState('');
  const [allowId, setAllowId] = useState('');
  const [checkEmail, setCheckEmail] = useState('');

  const buildSignUp = () => {
    // ?????? ???????????? ????????? ?????? ?????? ?????? ??????
    const info = JSON.parse(localStorage.getItem('userInfo'));
    console.log(info);
    setUserName(info.UserName);
    setNickname(info.Nickname);
    setPassword(info.Password);
    setCheckPwd(info.Password);
    setPhoneNumber(info.PhoneNumber);
    setEmail(info.Email);
    setBirthDate(info.BirthDate);
  };

  const onCheckPwdHandler = e => {
    setCheckPwd(e.currentTarget.value);
    if (e.currentTarget.value.length === 0 || e.currentTarget.value === password) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }
  };

  const onSexHandler = e => {
    setGender(e.currentTarget.value);
  };

  const isAllowNickname = async e => {
    e.preventDefault();
    const isAllow = await checkNickname(nickname);
    if (isAllow) {
      setAllowNickname(true);
    } else {
      setAllowNickname(false);
    }
  };

  const isAllowId = async e => {
    e.preventDefault();
    const isAllow = await checkId(nickname);
    if (isAllow) {
      setAllowId(true);
    } else {
      setAllowId(false);
    }
  };

  const onPhoneNumberHandler = e => {
    const result = onlyPhoneNumber(e.currentTarget.value);
    if (result) {
      setPhoneNumber(e.currentTarget.value);
    } else {
      setPhoneNumber(phoneNumber);
    }
    if (e.currentTarget.value.length === 0) {
      setPhoneNumber('');
    }
  };

  const onlyPhoneNumber = value => {
    const pattern = /[0-9]|[-]/g;
    return pattern.test(value[value.length - 1]);
  };

  const isAllowEmail = e => {
    const regex = /@/ && /.com/;
    e.preventDefault();
    if (regex.test(email)) {
      setCheckEmail(true);
      const result = sendEmail();
    } else {
      setCheckEmail(false);
    }
  };

  const isVaildEmail = e => {
    e.preventDefault();
    alert('?????????????????????.');
  };

  const onBirthHandler = e => {
    setBirthDate(e.currentTarget.value);
  };

  const checkOnlyOne = nowCheck => {
    const checkboxes = document.getElementsByName('gender');
    checkboxes.forEach((v, i) => {
      if (v.defaultValue !== nowCheck.value) {
        checkboxes[i].checked = false;
      }
    });
  };

  const isAllowNext = e => {
    if (!onSubmitHandler()) e.preventDefault();
  };

  const onSubmitHandler = e => {
    if (nickname === '' || userName === '' || password === '' || email === '' || birthDate === '' || gender === '') {
      alert('???????????? ????????? ?????? ??????????????????.');
      return false;
    }

    if (nickname.length < 2 || nickname.length > 8) {
      alert('???????????? 2?????? ?????? 8?????? ????????? ????????? ?????????.');
      return false;
    }

    if (userName.length < 6 || userName.length > 12) {
      alert('???????????? ?????? 6?????? ?????? 12?????? ????????? ??????????????????.');
      return false;
    }

    if (password !== checkPwd) {
      alert('???????????? ??????????????? ???????????? ????????? ?????? ???????????? ????????????.');
      return false;
    }

    if (password.length < 8 || password.length > 20) {
      alert('??????????????? 8?????? ?????? 20?????? ????????? ??????????????????.');
      return false;
    }

    if (allowNickname !== true) {
      alert('???????????? ?????? ????????????.');
      return false;
    }

    if (allowId !== true) {
      alert('???????????? ?????? ????????????.');
      return false;
    }

    if (checkEmail !== true) {
      alert('????????? ?????? ????????????.');
      return false;
    }

    if (!agreeService) {
      alert('?????? ????????? ?????????????????? ??????????????? ???????????????.');
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
    localStorage.setItem('userInfo', JSON.stringify(body));
  };

  const infoHandler = e => {
    e.preventDefault();
    const body = {
      Nickname: '',
      UserName: '',
      Password: '',
      CheckPwd: '',
      PhoneNumber: '',
      Email: '',
      BirthDate: '',
      Gender: '',
    };
    localStorage.setItem('userInfo', JSON.stringify(body));
  };

  //   useEffect(() => {
  //     buildSignUp();
  //   }, []);

  return (
    <>
      <Nav />

      <fieldset css={signUpContainer}>
        <div css={signUpFont}>????????????</div>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <ul>
            <li css={inputContainer}>
              <label css={item}>
                ?????????
                <EssentialMark />
              </label>
              <input
                css={signUpInput}
                value={nickname}
                onChange={e => setNickname(e.currentTarget.value)}
                placeholder="2?????? ~ 8??????"
              />
              <button css={checkButton} onClick={isAllowNickname}>
                ????????? ?????? ??????
              </button>
            </li>
            <li css={inputContainer}>
              <label css={item}>
                ?????????
                <EssentialMark />
              </label>
              <input
                css={signUpInput}
                value={userName}
                onChange={e => setUserName(e.currentTarget.value)}
                placeholder="?????? 6?????? ~ 12??????"
              />
              <button css={checkButton} style={{ cursor: 'pointer' }} onClick={isAllowId}>
                ????????? ?????? ??????
              </button>
            </li>
            <li css={inputContainer}>
              <label css={item}>
                ????????????
                <EssentialMark />
              </label>
              <input
                css={signUpInput}
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
                placeholder="??????????????? 8?????? ?????? 20?????? ????????? ??????????????????."
              />
            </li>
            <li css={inputContainer}>
              <label css={item}>
                ???????????? ??????
                <EssentialMark />
              </label>
              <input
                css={signUpInput}
                value={checkPwd}
                onChange={onCheckPwdHandler}
                placeholder="???????????? ??????????????? ???????????? ??????????????????."
              />
              {isMatch === '' || isMatch ? (
                ''
              ) : (
                <p style={{ fontSize: '12px', color: 'red', display: 'inline' }}>??????????????? ?????? ???????????? ????????????.</p>
              )}
            </li>
            <li css={inputContainer}>
              <label css={item}>
                ????????????
                <EssentialMark />
              </label>
              <input
                css={signUpInput}
                value={phoneNumber}
                onChange={onPhoneNumberHandler}
                maxLength={13}
                placeholder="010-xxxx-xxxx ?????? (-) ??? ???????????? ??????"
              />
            </li>
            <li css={inputContainer}>
              <label css={item}>
                ?????????
                <EssentialMark />
              </label>
              <input
                css={signUpInput}
                value={email}
                placeholder="@??? ????????? ????????? ???????????? ??????????????????"
                onChange={e => setEmail(e.currentTarget.value)}
              />
              <button css={checkButton} onClick={isAllowEmail}>
                ????????? ??????
              </button>
              {checkEmail === '' ? (
                ''
              ) : checkEmail ? (
                <p css={emailCheck} style={{ color: 'blue' }}>
                  ????????? ??? ?????? ????????? ?????????.
                </p>
              ) : (
                <p
                  css={emailCheck}
                  style={{
                    color: 'red',
                  }}>
                  ????????? ??? ?????? ??????????????????.
                </p>
              )}
              {checkEmail && (
                <div style={{ margin: '10px 0 0 140px' }}>
                  <input css={signUpInput} placeholder="??????????????? ??????????????????" />{' '}
                  <button css={checkButton} onClick={isVaildEmail}>
                    ????????????
                  </button>
                </div>
              )}
            </li>
            <li css={inputContainer}>
              <label css={item}>
                ????????????
                <EssentialMark />
              </label>
              <input
                css={signUpInput}
                type="birthday"
                placeholder="YYYYMMDD ???????????? ?????? ??????"
                maxLength={8}
                onChange={onBirthHandler}
              />
            </li>
            <li css={inputContainer}>
              <label css={item}>
                ??????
                <EssentialMark />
              </label>

              <input
                css={genderCheck}
                type="radio"
                name="gender"
                value="??????"
                onChange={e => {
                  checkOnlyOne(e.target);
                  onSexHandler(e);
                }}
              />
              <label css={generLabel}>??????</label>

              <input
                css={genderCheck}
                type="radio"
                name="gender"
                value="??????"
                onChange={e => {
                  checkOnlyOne(e.target);
                  onSexHandler(e);
                }}
              />

              <label css={generLabel}>??????</label>
            </li>

            <li css={inputContainer}>
              <div
                style={{
                  width: '22%',
                  float: 'left',
                }}>
                <label css={item}>
                  ???????????? ??????
                  <EssentialMark />
                </label>
                <input
                  css={agree}
                  style={{ width: '15px', verticalAlign: 'middle' }}
                  type="checkbox"
                  onChange={e => setAgreeeService(e.currentTarget.value)}
                />
              </div>
              <div
                style={{
                  float: 'left',
                  width: '70%',
                }}>
                <p css={agreeGuide}>??????????????? ?????? ???????????????.</p>
                <p css={agreeGuide2}>????????????(??????), ????????????????????????(??????), ??????????????? ????????????(??????)</p>
              </div>
            </li>
            <li css={inputContainer}>
              <Link
                to={{
                  pathname: '/Information',
                }}
                style={{ cursor: 'pointer' }}
                onClick={isAllowNext}>
                <button css={nextButton}>??????</button>
              </Link>
            </li>
          </ul>
          <Link
            to={{
              pathname: '/Information',
            }}
            onClick={storeInfo}>
            ???????????????
          </Link>
          <button onClick={infoHandler}>?????????????????? ??????</button>
          <Link to="/Login">????????????</Link>
        </form>
      </fieldset>
    </>
  );
}
