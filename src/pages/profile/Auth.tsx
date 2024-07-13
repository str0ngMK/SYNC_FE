import {
  DeleteAccountModal,
  EmailUpdateModal,
  PasswordUpdateModal,
} from '@components/modal';
import { useModalBack } from '@hooks';
import styled from 'styled-components';

const AuthHeader = styled.article`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: var(--main-black, #000);
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Description = styled.p`
  margin-top: 15px;
  color: var(--main-black, #000);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const AuthWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PrivacyList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  section {
    width: 100%;
    margin-bottom: 30px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--Gray, #d2dbe2);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const PrivacyItem = styled.li`
  padding: 16px 15px;
  border-radius: 15px;
  border: 1px solid var(--Gray, #d2dbe2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: var(--main-black, #000);
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.266px;
  }
  button {
    padding: 8px 24px;
    background: var(--Gray, #d2dbe2);
    border: none;
    border-radius: 4px;
    color: var(--main-black, #000);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Auth() {
  const [
    isOpenEmailUpdateModal,
    openEmailUpdateModal,
    emailUpdateModalRef,
    EamilUpdateModalWrapper,
  ] = useModalBack();
  const [
    isOpenPasswordUpdateModal,
    openPasswordUpdateModal,
    passwordUpdateModalRef,
    PasswordUpdateModalWrapper,
  ] = useModalBack();
  const [
    isOpenAccountDeleteModal,
    openAccountDeleteModal,
    accountDeleteModalRef,
    AccountDeleteModalWrapper,
  ] = useModalBack();

  return (
    <>
      <AuthHeader>
        <Title>보안 설정</Title>
        <Description>
          보안 설정은 사용자의 정보를 보호하기 위해서 사용됩니다...?
        </Description>
      </AuthHeader>
      <AuthWrapper>
        <PrivacyList>
          <section>
            <PrivacyItem>
              <p>아이디 : kimjiyong2523@gmail.com</p>
              <button onClick={openEmailUpdateModal}>이메일 변경</button>
            </PrivacyItem>
            <PrivacyItem>
              <p>비밀번호 : 1234****</p>
              <button onClick={openPasswordUpdateModal}>비밀번호 변경</button>
            </PrivacyItem>
          </section>

          <PrivacyItem>
            <p>계정 삭제</p>
            <button onClick={openAccountDeleteModal}>계정 삭제하기</button>
          </PrivacyItem>
        </PrivacyList>
      </AuthWrapper>
      <EamilUpdateModalWrapper
        isOpen={isOpenEmailUpdateModal}
        modalRef={emailUpdateModalRef}
      >
        <EmailUpdateModal />
      </EamilUpdateModalWrapper>
      <PasswordUpdateModalWrapper
        isOpen={isOpenPasswordUpdateModal}
        modalRef={passwordUpdateModalRef}
      >
        <PasswordUpdateModal />
      </PasswordUpdateModalWrapper>
      <AccountDeleteModalWrapper
        isOpen={isOpenAccountDeleteModal}
        modalRef={accountDeleteModalRef}
      >
        <DeleteAccountModal />
      </AccountDeleteModalWrapper>
    </>
  );
}
