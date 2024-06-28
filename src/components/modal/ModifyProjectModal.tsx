import { useRef, useState } from 'react';
import styled from 'styled-components';
import ProjectOwnerDropdown from '../dropdown/ProjectOwnerDropdown';

const ModalHeader = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
  h2 {
    color: var(--main-black, #000);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p {
    color: #a6b3be;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const InputContainer = styled.div`
  width: 490px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  p {
    color: #a6b3be;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px; /* 85.714% */
  }
`;

const Input = styled.input`
  padding: 16px;
  border: 1px solid var(--input-stroke, #d2dbe2);
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const ProjectProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  div {
    width: 44px;
    height: 44px;
    background: #ffc3c8;
    border-radius: 4px;
  }
`;

const Select = styled.div`
  padding: 16px;
  border: 1px solid var(--input-stroke, #d2dbe2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 10px;
  position: relative;
  div {
    width: 44px;
    height: 44px;
    background: #ffc3c8;
    border-radius: 4px;
  }
  span {
    color: #a6b3be;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  }
`;

const Progress = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 8px;
  span {
    width: auto;
    color: #a6b3be;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px; /* 85.714% */
  }
`;

const Submit = styled.input`
  padding: 24px 77px;
  background: var(--New-group-Gray, #b5bec6);
  border: 1px solid var(--New-group-Gray, #b5bec6);
  border-radius: 12px;
  color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ModifyProjectModal() {
  const [showsDropdown, setShowsDropdown] = useState(false);
  const projectOwnerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ModalHeader>
        <h2>프로젝트 설정</h2>
        <p>프로젝트에 대한 간략한 정보를 나타냅니다.</p>
      </ModalHeader>

      <Form>
        <InputContainer>
          <p>프로필과 이름</p>
          <ProjectProfile>
            <div></div>
            <Input type="text" placeholder="프로젝트 1" />
          </ProjectProfile>
        </InputContainer>

        <InputContainer>
          <p>프로젝트 설명</p>
          <Input type="text" placeholder="프로젝트 명을 그대로 입력해주세요." />
        </InputContainer>

        <InputContainer>
          <p>프로젝트 소유자</p>
          <Select ref={projectOwnerRef} onClick={() => setShowsDropdown(true)}>
            <div></div>
            <span>김지용</span>
            <ProjectOwnerDropdown
              isActive={showsDropdown}
              closeDropdown={() => setShowsDropdown(false)}
            />
          </Select>
        </InputContainer>

        <InputContainer>
          <p>프로젝트 기간</p>
          <Progress>
            <Input type="text" placeholder="2024.05.24" />
            <span>~</span>
            <Input type="text" placeholder="2024.09.24" />
          </Progress>
        </InputContainer>

        <Submit type="submit" value="완료" />
      </Form>
    </>
  );
}
