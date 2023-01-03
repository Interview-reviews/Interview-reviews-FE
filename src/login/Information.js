import { useState } from "react";
import { Link } from "react-router-dom";

const Information = () => {
  const [Education, setEducation] = useState("");
  const [Job, setJob] = useState("");
  const [Language, setLanguage] = useState("");
  const [Activity, setActivity] = useState("");
  const [Award, setAward] = useState("");

  const onEducationHandler = (e) => {
    setEducation(e.currentTarget.value);
  };

  const onJobHandler = (e) => {
    setJob(e.currentTarget.value);
  };

  const onLanguageHandler = (e) => {
    setLanguage(e.currentTarget.value);
  };

  const onActivityHandler = (e) => {
    setActivity(e.currentTarget.value);
  };

  const onAwardHandler = (e) => {
    setAward(e.currentTarget.value);
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
            <input
              value={Education}
              onChange={onEducationHandler}
              placeholder="2자리 ~ 8자리"
            />
          </div>
          <div>
            <label>직무</label>
            <input
              value={Job}
              onChange={onJobHandler}
              placeholder="영문 6자리 ~ 12자리"
            />
          </div>
          <div>
            <label>어학</label>
            <input
              value={Language}
              onChange={onLanguageHandler}
              placeholder="비밀번호를 8자리 이상 입력해주세요."
            />
          </div>
          <div>
            <label>인턴 / 대외활동</label>
            <input value={Activity} onChange={onActivityHandler} />
          </div>
          <div>
            <label>수상 경력</label>
            <input value={Award} onChange={onAwardHandler} />
          </div>
          <div>
            <Link to="/SignUp" style={{ cursor: "pointer" }}>
              이전
            </Link>
            <Link to="/Welcome" style={{ cursor: "pointer" }}>
              회원가입 하기
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Information;
