import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
`;

const Container = styled.section`
  padding: 50px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Title = styled.h2`
  color: var(--main-black, #000);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Form = styled.form`
  width: 100%;
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
`;

const Label = styled.label`
  height: 12px;
  color: #a6b3be;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 85.714% */
`;

const Input = styled.input`
  border: 1px solid var(--input-stroke, #d2dbe2);
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: center;
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Submit = styled.input`
  width: 229px;
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
  flex-direction: center;
  align-items: center;
`;

interface ProfileUpdateModalProps {
  isOpen: boolean;
  modalRef: React.RefObject<HTMLTableSectionElement>;
}

export default function ProfileUpdateModel({
  isOpen,
  modalRef,
}: ProfileUpdateModalProps) {
  return (
    <ModalWrapper $isOpen={isOpen}>
      <Container ref={modalRef}>
        <Title>프로필 수정</Title>
        <Form>
          <InputContainer>
            <Label>이름</Label>
            <Input type="text" placeholder="김지용" />
          </InputContainer>

          <InputContainer>
            <Label>직무</Label>
            <Input type="text" placeholder="UI Designer" />
          </InputContainer>

          <InputContainer>
            <Label>상태메세지</Label>
            <Input type="text" placeholder="집가고싶다." />
          </InputContainer>

          <InputContainer>
            <Label>개인 이메일</Label>
            <Input type="text" placeholder="kimjiyong2523@gmail.com" />
          </InputContainer>

          <InputContainer>
            <Label>전화번호</Label>
            <Input type="text" placeholder="010-1234-1234" />
          </InputContainer>

          <SubmitContainer>
            <Submit type="submit" value="저장하기" />
          </SubmitContainer>
        </Form>
      </Container>
    </ModalWrapper>
  );
}
