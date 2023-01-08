import { useState } from "react";

const Language = (props) => {
  const [languageTest, setLanguageTest] = useState("");
  const [score, setScore] = useState("");

  const submitText = (e) => {
    e.preventDefault();
    console.log(languageTest, score);
    props.propFunction([languageTest, score]);
  };

  return (
    <>
      <div>
        <label>어학</label>
        <select onChange={(e) => setLanguageTest(e.currentTarget.value)}>
          <option selected value={""}>
            구분
          </option>
          <option>토익</option>
          <option>토플</option>
          <option>텝스</option>
        </select>

        <input
          value={score}
          onChange={(e) => setScore(e.currentTarget.value)}
          placeholder="급수/점수"
        />
        <button onClick={submitText}>어학점수 저장</button>
      </div>
    </>
  );
};

export default Language;
