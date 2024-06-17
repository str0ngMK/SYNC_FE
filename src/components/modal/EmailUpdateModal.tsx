import styled from 'styled-components';

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

export default function EmailUpdateModal() {
  return (
    <>
      <Title>이메일 변경</Title>
      <Form>
        <InputContainer>
          <Label>현재 이메일</Label>
          <Input type="text" placeholder="kimjiyong2523@gmail.com" />
        </InputContainer>

        <Submit type="submit" value="이메일 코드 전송" />
      </Form>
    </>
  );
}
