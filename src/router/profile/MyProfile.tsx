import { useState } from 'react';
import styled from 'styled-components';
import ProfileUpdateModel from '../../components/modal/ProfileUpdateModal';

const ProfileHeader = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const Title = styled.h1`
  color: var(--main-black, #000);
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Descriprion = styled.p`
  color: var(--main-black, #000);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const MyProfileWrapper = styled.section`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const ProfileMiddle = styled.section`
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  h5 {
    color: var(--main-black, #000);
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */
    letter-spacing: -0.304px;
  }
`;

const UpdateButton = styled.button`
  width: 156px;
  height: 31px;
  background: #6e6e6e;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #4e4e4e;
    cursor: pointer;
  }
`;

const MyProfileImage = styled.section`
  width: 107px;
  height: 107px;
  margin-bottom: 20px;
  background-color: #d9d9d9;
  border-radius: 50%;
  position: relative;
`;

const UpdateProfileImage = styled.button`
  width: 40px;
  height: 40px;
  background: var(--main-black, #000);
  border-radius: 100px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const PrivacyList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PrivacyItem = styled.li`
  width: 100%;
  margin-bottom: 20px;
  padding: 16px;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  p,
  h6 {
    color: var(--main-black, #000);
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 18px */
    letter-spacing: -0.228px;
  }
`;

const StatusMessageWrapper = styled(PrivacyItem)`
  h6 {
    margin-right: 16px;
  }
  p {
    padding: 12px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    display: flex;
  }
`;

export default function MyProfile() {
  const [showsProfileUpdateModal, setShowsProfileUpdateModal] = useState(false);
  console.log(showsProfileUpdateModal);
  return (
    <>
      <ProfileHeader>
        <Title>프로필 설정</Title>
        <Descriprion>
          프로필을 변경 할 수 있습니다. 변경된 프로필은 다른 사람들에게 보이는
          정보입니다.
        </Descriprion>
        <MyProfileWrapper>
          <ProfileMiddle>
            <h5>프로필 사진</h5>
            <UpdateButton onClick={() => setShowsProfileUpdateModal(true)}>
              수정하기
            </UpdateButton>
          </ProfileMiddle>
          <MyProfileImage>
            <UpdateProfileImage>변경</UpdateProfileImage>
          </MyProfileImage>
          <PrivacyList>
            <PrivacyItem>
              <p>{`이름[닉네임]: OOO`}</p>
            </PrivacyItem>
            <PrivacyItem>
              <p>{`직무 : 디자이너`}</p>
            </PrivacyItem>
            <StatusMessageWrapper>
              <h6>상태 메세지</h6>
              <p>하고 싶은말을 다 쓸 수 있으니까 어쩌면 상태메세지...?</p>
            </StatusMessageWrapper>
            <PrivacyItem>
              <p>{`개인 연락처 메일(계정 X) : Kimjiyong@gmail.com`}</p>
            </PrivacyItem>
            <PrivacyItem>
              <p>{`전화번호 : 010-6524-9926`}</p>
            </PrivacyItem>
          </PrivacyList>
        </MyProfileWrapper>
      </ProfileHeader>
      <ProfileUpdateModel
        isActive={showsProfileUpdateModal}
        closeModal={() => setShowsProfileUpdateModal(false)}
      />
    </>
  );
}
