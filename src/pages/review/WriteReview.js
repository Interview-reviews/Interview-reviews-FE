import { useState } from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';

const WriteContainer = styled.fieldset`
  position: absolute;
  top: 15%;
  left: 25%;
  border: none;
`;

const WriteReviewFont = styled.div`
  font-weight: 600;
  font-size: 26px;
  margin: 100px 0 60px 50px;
`;

const InputContainer = styled.li`
  list-style: none;
`;

const CompanyWrite = styled.input`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 437px;
  height: 48px;
  padding-left: 10px;
  margin: 10px 0px 10px 20px;
`;

const SupportWrite = styled.input`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 306px;
  height: 48px;
  padding-left: 10px;
  margin: 10px 0px 10px 20px;
`;

const Label = styled.label`
  display: inline-block;
  padding: 30px 40px 30px 19px;
  width: 140px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  background: #f8fafb;
`;

const CheckButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: 48px;
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

const WriteReview = () => {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <>
      <Nav />
      <WriteContainer>
        <WriteReviewFont>면접 후기 등록</WriteReviewFont>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <ul>
            <InputContainer>
              <Label>지원한 회사</Label>
              <CompanyWrite placeholder="지원한 회사명을 입력해주세요." onChange={e => setCompany(e.target.value)} />
            </InputContainer>
            <hr />
            <InputContainer>
              <Label>지원한 직무</Label>
              <SupportWrite placeholder="지원한 직무를 선택해주세요." />
              <CheckButton>직무 선택</CheckButton>
            </InputContainer>
            <hr />
            <InputContainer>
              <Label>지원시기</Label>
              <SupportWrite placeholder="지원시기 선택" />
            </InputContainer>
            <hr />
            <InputContainer>
              <Label>면접유형</Label>
              <input type="checkbox" />
              일반 면접
              <input type="checkbox" />
              인성 면접
              <input type="checkbox" />
              PT 면접
              <input type="checkbox" />
              토론 면접
              <input type="checkbox" />
              임원 면접
              <input type="checkbox" />
              실무 과제 및 시험
            </InputContainer>
            <hr />
            <InputContainer>
              <Label>면접 당시 경력</Label>
              <input type="checkbox" />
              신입
              <input type="checkbox" />
              경력
            </InputContainer>
            <hr />
            <InputContainer>
              <Label>면접 난이도</Label>
              <button>쉬움</button>
              <button>보통</button>
              <button>어려움</button>
            </InputContainer>
            <hr />
            <InputContainer>
              <Label>합격 여부</Label>
              <button>합격</button>
              <button>대기중</button>
              <button>불합격</button>
            </InputContainer>
            <hr />
            <InputContainer>
              <Label>제목</Label>
              <input placeholder="글 제목을 적어주세요." onChange={e => setTitle(e.target.value)} />
            </InputContainer>
            <hr />
            <InputContainer>
              <Label>내용</Label>
              <input
                placeholder="전형 및 면접 진행 방식이나 면접에서 받은 질문에 대해 어떻게 답했는지 등 후기를 적어주세요. (200자 이상)"
                onChange={e => setContent(e.target.value)}
              />
            </InputContainer>
          </ul>
        </form>
      </WriteContainer>
    </>
  );
};

export default WriteReview;
