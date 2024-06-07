import { useState } from 'react';
import styled from 'styled-components';
import DeleteProjectModal from '../modal/delete-project-modal';
import WithdrawProjectModal from '../modal/withdraw-project-modal';
import ModifyProjectModal from '../modal/modify-project-modal';

const Wrapper = styled.ul<{ $isActive: boolean }>`
  width: 320px;
  background: #fff;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  left: -240px;
  bottom: -230px;
  z-index: 50;
`;

const SettingsItem = styled.li`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #b8b8b8;
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    &:first-child {
      color: var(--main-black, #000);
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    &:last-child {
      color: #ababab;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

interface SettingsProjectDropdownProps {
  isActive: boolean;
  closeDropdown: () => void;
}

export default function SettingsProject({
  isActive,
  closeDropdown,
}: SettingsProjectDropdownProps) {
  const [showsProjectDeleteModal, setShowsProjectDeleteModal] = useState(false);
  const [showsProjectWithdrawModal, setShowsProjectWithdrawModal] =
    useState(false);
  const [showsProjectModifyModal, setShowsProjectModifyModal] = useState(false);

  return (
    <>
      <Wrapper $isActive={isActive}>
        <SettingsItem
          onClick={() => {
            setShowsProjectDeleteModal(true);
            closeDropdown();
          }}
        >
          <p>프로젝트 삭제</p>
          <p>프로젝트 삭제를 하기 위해서는... 프로젝트 생성자이여야 합니다.</p>
        </SettingsItem>

        <SettingsItem
          onClick={() => {
            setShowsProjectWithdrawModal(true);
            closeDropdown();
          }}
        >
          <p>프로젝트 탈퇴</p>
          <p>프로젝트 탈퇴시 나의 담당자란이 모두 공백으로 남게 됩니다.</p>
        </SettingsItem>

        <SettingsItem
          onClick={() => {
            setShowsProjectModifyModal(true);
            closeDropdown();
          }}
        >
          <p>프로젝트 설정</p>
          <p>프로젝트 관리를 위한 창을 띄웁니다.</p>
        </SettingsItem>
      </Wrapper>
      <DeleteProjectModal
        isActive={showsProjectDeleteModal}
        closeModal={() => setShowsProjectDeleteModal(false)}
      />
      <WithdrawProjectModal
        isActive={showsProjectWithdrawModal}
        closeModal={() => setShowsProjectWithdrawModal(false)}
      />
      <ModifyProjectModal
        isActive={showsProjectModifyModal}
        closeModal={() => setShowsProjectModifyModal(false)}
      />
    </>
  );
}
