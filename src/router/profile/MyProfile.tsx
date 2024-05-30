import styled from 'styled-components';

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
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const MyProfileImage = styled.section`
  width: 107px;
  height: 107px;
  background-color: #d9d9d9;
  border-radius: 50%;
  position: relative;
`;

const UpdateProfileImage = styled.button`
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default function MyProfile() {
  return (
    <>
      <ProfileHeader>
        <Title>프로필 설정</Title>
        <Descriprion>
          프로필을 변경 할 수 있습니다. 변경된 프로필은 다른 사람들에게 보이는
          정보입니다.
        </Descriprion>
        <MyProfileWrapper>
          <MyProfileImage>
            <UpdateProfileImage>변경</UpdateProfileImage>
          </MyProfileImage>
        </MyProfileWrapper>
      </ProfileHeader>
    </>
  );
}
