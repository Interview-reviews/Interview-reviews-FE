import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Language from "./Language";

const Information = (props) => {
  const [graduate, setGraduate] = useState("");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [grades, setGrades] = useState("");
  const [job, setJob] = useState("");
  const [intern, setIntern] = useState("");
  let [language, setLanguage] = useState([["", 0]]);

  console.log(language);

  const onlyNumber = (e) => {
    const result = isAllowScore(e.currentTarget.value);
    if (result) {
      setGrades(e.currentTarget.value);
    } else {
      setGrades(grades);
    }
    if (e.currentTarget.value.length === 0) {
      setGrades("");
    }
  };

  const isAllowScore = (value) => {
    const pattern = /[0-9]|[.]/g;
    return pattern.test(value[value.length - 1]);
  };

  const transferInfo = (info) => {
    setLanguage([...language, info]);
  };

  const isAllowSubmit = (e) => {
    if (!onSubmitHandler()) {
      e.preventDefault();
    }
  };

  const onSubmitHandler = (e) => {
    if (graduate === "" || school === "") {
      alert("필수 입력사항을 확인해주세요.");
      return false;
    }

    language = language.filter((info) => {
      if (info[0] !== "" && info[1] !== 0) {
        console.log(info[1]);
        return info;
      }
    });

    console.log(language);

    const key = {
      Nickname: localStorage.getItem("Nickname"),
    };

    const education = {
      Graduate: graduate,
      School: school,
      Major: major,
      Grades: grades,
    };

    const jobInfo = {
      Job: job,
    };

    const languageInfo = {
      Language: language,
    };

    const internInfo = {
      Intern: intern,
    };

    console.log({ key, education, jobInfo, languageInfo, internInfo });

    return true;
  };

  return (
    <>
      <Nav />
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
            <label>학력*</label>
            <select onChange={(e) => setGraduate(e.currentTarget.value)}>
              <option selected value={""}>
                학교 구분
              </option>
              <option>고등학교 졸업</option>
              <option>대학 졸업 (2,3년)</option>
              <option>대학교 졸업 (4년)</option>
              <option>대학원 졸업</option>
            </select>
            <input
              value={school}
              onChange={(e) => setSchool(e.currentTarget.value)}
              placeholder="학교명"
            />
          </div>
          <div>
            <input
              value={major}
              onChange={(e) => setMajor(e.currentTarget.value)}
              placeholder="전공명"
            />
            <input
              value={grades}
              onChange={onlyNumber}
              maxLength={4}
              placeholder="소수점 둘째자리까지 학점입력"
            />
          </div>

          <div>
            <label>희망 직무*</label>
            <select onChange={(e) => setJob(e.currentTarget.value)}>
              <option selected value={""}>
                직무 구분
              </option>
              <option>프론트엔드</option>
              <option>백엔드</option>
              <option>빅데이터</option>
              <option>AI</option>
            </select>
            <p style={{ color: "gray", fontSize: "12px" }}>
              희망하는 직무 또는 현재 직무를 골라주세요.
            </p>
          </div>
          <label>어학</label>
          {language.map((info) => {
            console.log(info);
            return <Language propFunction={transferInfo} />;
          })}

          <div>
            <label>인턴 / 대외활동</label>
            <input
              onChange={(e) => setIntern(e.currentTarget.value)}
              placeholder={"횟수"}
            />
          </div>
          <div>
            <Link to="/SignUp" style={{ cursor: "pointer" }}>
              <button>이전</button>
            </Link>
            <Link
              to="/Welcome"
              style={{ cursor: "pointer" }}
              onClick={isAllowSubmit}
            >
              <button>회원가입 하기</button>
            </Link>
            <div>
              {" "}
              <button onClick={onSubmitHandler}>확인용</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Information;
