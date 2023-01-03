import { useState } from "react";

const Language = () => {
  const [select, setSelect] = useState("");
  const [language, setLanguage] = useState("");
  const [score, setScore] = useState("");
  const [year, setYear] = useState("");

  const onSelectHandler = (e) => {
    setSelect(e.currentTarget.value);
  };

  return (
    <>
      <div>
        <label>어학</label>
        <select onChange={onSelectHandler}>
          <option selected value={""}>
            구분
          </option>
          <option value="EducationCaseA">토익</option>
          <option value={"EducationCaseB"}>토스</option>
          <option value={"EducationCaseC"}>텝스</option>
        </select>
        <input value={language} onChange={setLanguage} placeholder="외국어명" />
      </div>
      <div>
        <input value={score} onChange={setScore} placeholder="급수/점수" />
        <input
          value={year}
          onChange={setYear}
          maxLength={4}
          placeholder="취득년월"
        />
      </div>
    </>
  );
};

export default Language;
