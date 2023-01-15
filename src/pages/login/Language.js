import { useState } from "react";

const Language = (props) => {
  const [languageTest, setLanguageTest] = useState("");
  const [score, setScore] = useState(0);

  const submitText = (e) => {
    e.preventDefault();
    props.propFunction([languageTest, score]);
  };

  return (
    <>
      <div>
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
        <button onClick={submitText}>입력 저장</button>
      </div>
    </>
  );
};

export default Language;
