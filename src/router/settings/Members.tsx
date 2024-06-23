import styled from 'styled-components';
import SettingsMemberItem from '../../containers/settings-member.item';

const Header = styled.article`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  h1 {
    color: var(--main-black, #000);
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p {
    color: var(--main-black, #000);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const SelectProjects = styled.ul`
  width: 280px;
  padding: 8px;
  border: 1px solid var(--input-stroke, #d2dbe2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    color: #a6b3be;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 12px;
  }
`;

const InviteLinkContainer = styled.section`
  display: flex;
  flex-direction: column;
  h5 {
    margin-bottom: 8px;
    color: var(--main-black, #000);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.266px;
  }
`;

const InviteLinkHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  p {
    color: var(--main-black, #000);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.228px;
  }
`;

const ToogleInviteCode = styled.div`
  width: 56px;
  padding: 4px;
  border-radius: 100px;
  background-color: #4880ff;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  div {
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 100px;
    position: absolute;
    right: 4px;
  }
`;

const InviteLinkForm = styled.form`
  display: flex;
  justify-content: space-between;
  input[type='text'] {
    width: 60%;
    padding: 4px 8px;
    border: 1px solid var(--New-group-Gray, #d2dbe2);
    outline: none;
    color: var(--New-group-Gray, #d2dbe2);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.266px;
    display: flex;
    align-items: center;
  }
  button {
    width: 100px;
    padding: 4px 8px;
    background: #fff;
    border: 1px solid var(--main-black, #000);
    border-radius: 4px;
    color: var(--main-black, #000);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.266px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MembersContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MembersHeader = styled.div`
  height: 38px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const TabMenuList = styled.ul`
  width: 236px;
  display: flex;
  gap: 8px;
`;

const TabMenuItem = styled.li`
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const HeaderTail = styled.div`
  display: flex;
  align-items: center;
`;

const SearchForm = styled.form`
  margin-right: 16px;
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchBar = styled.input`
  width: 288px;
  height: 30px;
  padding: 4px 0 4px 45px;
  background: #fff;
  border: 1px solid var(--New-group-Gray, #d2dbe2);
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 15px;
`;

const InviteEmailButton = styled.button`
  padding: 4px 8px;
  background: #fff;
  border: 1px solid var(--main-black, #000);
  border-radius: 4px;
  color: var(--main-black, #000);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
  letter-spacing: -0.266px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemberList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const MemberItemHeader = styled.li`
  width: 900px;
  display: flex;
  border-bottom: 1px solid black;
  h5 {
    width: 430px;
    padding: 8px;
    display: flex;
    align-items: center;
  }
  p {
    width: 154px;
    padding: 8px;
    display: flex;
    align-items: center;
  }
  div {
    width: 100px;
    padding: 8px;
    display: flex;
    align-items: center;
  }
`;

const fakeMemberList = [
  {
    name: '김지용',
    email: 'Kimjiyong2523@gmail.com',
    job: '디자이너',
    role: '프로젝트 생성자',
  },
  {
    name: '최홍혁',
    email: 'Kimjiyong2523@gmail.com',
    job: '디자이너',
    role: '관리자',
  },
  {
    name: '이소정',
    email: 'Kimjiyong2523@gmail.com',
    job: '기획자',
    role: '팀원',
  },
  {
    name: '박승주',
    email: 'Kimjiyong2523@gmail.com',
    job: '개발자',
    role: '팀원',
  },
];

export default function MembersSettings() {
  return (
    <>
      <Header>
        <h1>주소록</h1>
        <p>해당 프로젝트의 멤버를 확인 및 역할을 수정할 수 있습니다.</p>
      </Header>
      <Content>
        <SelectProjects>
          <img src="/assets/rectangle-50.png" alt="프로젝트 이미지" />
          <span>프로젝트 1</span>
        </SelectProjects>

        <InviteLinkContainer>
          <h5>초대링크</h5>
          <InviteLinkHeader>
            <p>
              워크 스페이스 소유자와 멤버십 관리자가 새 멤버를 초대할 수 있도록
              비밀 링크를 활성화 하세요. <br /> 새로 링크를 생성할 수 있습니다.
            </p>
            <ToogleInviteCode>
              <div></div>
            </ToogleInviteCode>
          </InviteLinkHeader>
          <InviteLinkForm>
            <input
              type="text"
              value="https://dashlite.net/demo1/user-profile-regular.html"
            />
            <button>링크 복사</button>
          </InviteLinkForm>
        </InviteLinkContainer>

        <MembersContainer>
          <MembersHeader>
            <TabMenuList>
              <TabMenuItem>
                <span>멤버</span>
                <span>4</span>
              </TabMenuItem>
              <TabMenuItem>
                <span>게스트</span>
                <span>4</span>
              </TabMenuItem>
            </TabMenuList>

            <HeaderTail>
              <SearchForm>
                <SearchBar type="text" placeholder="Search" />
                <SearchIcon src="/assets/search.svg" />
                <input type="submit" hidden />
              </SearchForm>

              <InviteEmailButton>초대하기</InviteEmailButton>
            </HeaderTail>
          </MembersHeader>

          <MemberList>
            <MemberItemHeader>
              <h5>사용자</h5>
              <p>직무</p>
              <p>권한</p>
              <div>-</div>
            </MemberItemHeader>

            {fakeMemberList.map((member) => (
              <SettingsMemberItem key={member.name} {...member} />
            ))}
          </MemberList>
        </MembersContainer>
      </Content>
    </>
  );
}
