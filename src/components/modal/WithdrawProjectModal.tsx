import styled from 'styled-components';

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
  width: 490px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

const InputContainer = styled.div`
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
  input[type='text'] {
    padding: 16px;
    border: 1px solid var(--input-stroke, #d2dbe2);
    border-radius: 4px;
    display: flex;
    align-items: center;
    &::placeholder {
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
  }
`;

const Submit = styled.input`
  padding: 24px 77px;
  background: var(--New-group-Gray, #d2dbe2);
  border: 1px solid var(--New-group-Gray, #d2dbe2);
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

// interface WithdrawProjectModalProps {
//   isOpen: boolean;
//   modalRef: React.RefObject<HTMLTableSectionElement>;
// }

export default function WithdrawProjectModal() {
  return (
    <>
      <ModalHeader>
        <h2>프로젝트 탈퇴</h2>
        <p>
          프로젝트 탈퇴 시 프로젝트 멤버가 다시 초대해주지 않으면 돌아올 수
          없습니다.
        </p>
      </ModalHeader>

      <Form>
        <InputContainer>
          <p>프로젝트 명</p>
          <input type="text" placeholder="프로젝트 1" />
        </InputContainer>

        <InputContainer>
          <p>삭제 확인</p>
          <input
            type="text"
            placeholder='"프로젝트 명"을 그대로 입력해주세요.'
          />
        </InputContainer>

        <Submit type="submit" value="프로젝트 삭제하기" />
      </Form>
    </>
  );
}
