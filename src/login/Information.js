import { useState } from "react";
import { Link } from "react-router-dom";
import Language from "./Language";

const Information = (props) => {
  const nickname = [...localStorage.getItem("Nickname")].join("");
  console.log(nickname);
  const [graduate, setGraduate] = useState("");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [score, setScore] = useState("");
  const [job, setJob] = useState("");
  const [activity, setActivity] = useState("");
  const [award, setAward] = useState("");

  const onGratudateHandler = (e) => {
    setGraduate(e.target.value);
  };

  const onSchoolHandler = (e) => {
    setSchool(e.currentTarget.value);
  };

  const onMajorHandler = (e) => {
    setMajor(e.currentTarget.value);
  };

  const onScoreHandler = (e) => {
    setScore(e.currentTarget.value);
  };

  const onJobHandler = (e) => {
    setJob(e.currentTarget.value);
  };

  const onActivityHandler = (e) => {
    setActivity(e.currentTarget.value);
  };

  const onAwardHandler = (e) => {
    setAward(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const education = {
      Graduate: graduate,
      School: school,
      Major: major,
      Score: score,
    };

    console.log(education, job);

    return true;
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
            <label>학력</label>
            <select onChange={onGratudateHandler}>
              <option selected value={""}>
                학교 구분
              </option>
              <option>
                <p value="EducationCaseA">고등학교 졸업</p>
              </option>
              <option value={"EducationCaseB"}>대학 졸업 (2,3년)</option>
              <option value={"EducationCaseC"}>대학교 졸업 (4년)</option>
              <option value={"EducationCaseD"}>대학원 졸업</option>
            </select>
            <input
              value={school}
              onChange={onSchoolHandler}
              placeholder="학교명"
            />
          </div>
          <div>
            <input
              value={major}
              onChange={onMajorHandler}
              placeholder="전공명"
            />
            <input
              value={score}
              onChange={onScoreHandler}
              maxLength={4}
              placeholder="학점"
            />
          </div>

          <div>
            <label>직무</label>
            <input value={job} onChange={onJobHandler} placeholder="직무명" />
          </div>
          <Language />
          <div>
            <label>인턴 / 대외활동</label>
            <input value={activity} onChange={onActivityHandler} />
          </div>
          <div>
            <label>수상 경력</label>
            <input value={award} onChange={onAwardHandler} />
          </div>
          <div>
            <Link to="/SignUp" style={{ cursor: "pointer" }}>
              이전
            </Link>
            <Link
              to="/Welcome"
              style={{ cursor: "pointer" }}
              onSubmit={onSubmitHandler}
            >
              회원가입 하기
            </Link>

            <button onClick={onSubmitHandler}>확인용</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Information;
