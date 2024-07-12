import React, { useState } from 'react';

import CancelButton from '@assets/cancel-x.svg';
import ProjectProfile from '@assets/project-profile.png';
import { setIsModalOpen } from '@hooks/useModal';
import { requiredJwtTokeninstance } from '@libs/axios/axios';
import styled from 'styled-components';

const CreateProjectModalHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  h1 {
    color: var(--main-black, #000);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  button {
    background-color: transparent;
    border: none;
  }
`;

const Form = styled.form`
  width: 472px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-shrink: 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  label {
    color: var(--Black-White-Black-35, #8f8f8f);
    /* Small Text_B */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px; /* 116.667% */
  }
  input {
    padding: 12px 8px;
    border: 1px solid var(--Black-White-Black-20, #bfbfbf);
    border-radius: 4px;
    color: var(--Black-White-Black-70, #636363);
    /* Paragraph */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const InputWithCover = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  gap: 8px;
  input {
    flex-grow: 1;
  }
`;

const LabelWithToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  div {
    font-size: 12px;
  }
`;

const InputWithProjectPeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  align-self: stretch;
  div {
    width: 16px;
    height: 2px;
    background-color: #bfbfbf;
  }
  input {
    flex-grow: 1;
  }
`;

const Submit = styled.div`
  padding: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  * {
    height: 42px;
    padding: 8px 24px;
    background: var(--Black-White-White, #fff);

    color: var(--Black-White-Black-70, #636363);
    /* Heading 5 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 121.429% */

    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  input[type='submit'] {
    background: var(--Primary-Orange-Yellow-Orange, #ffd880);
  }
`;

function CreateProjectModal({ closeModal }: { closeModal?: setIsModalOpen }) {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleCreateProject = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      await requiredJwtTokeninstance.post('/api/user/project/create', {
        title,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      });
      window.confirm('프로젝트가 추가되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CreateProjectModalHeader>
        <h1>프로젝트 추가</h1>
        <button>
          <img src={CancelButton} alt="닫기" />
        </button>
      </CreateProjectModalHeader>

      <Form>
        <InputContainer>
          <label>커버 & 프로젝트 명</label>
          <InputWithCover>
            <img src={ProjectProfile} alt="프로젝트 프로필" />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목"
            />
          </InputWithCover>
        </InputContainer>

        <InputContainer>
          <label>부제목</label>
          <input
            type="text"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            placeholder="부제목"
          />
        </InputContainer>

        <InputContainer>
          <label>프로젝트 설명</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="프로젝트 설명"
          />
        </InputContainer>

        <InputContainer>
          <LabelWithToggle>
            <label>일정</label>
            <div>
              <span></span>
              <div>토글</div>
            </div>
          </LabelWithToggle>

          <InputWithProjectPeriod>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="프로젝트 시작일"
            />
            <div></div>
            <input
              type="text"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="프로젝트 종료일"
            />
          </InputWithProjectPeriod>
        </InputContainer>

        <Submit>
          <button onClick={closeModal}>취소</button>
          <input type="submit" value="추가하기" onClick={handleCreateProject} />
        </Submit>
      </Form>
    </>
  );
}

export default CreateProjectModal;
