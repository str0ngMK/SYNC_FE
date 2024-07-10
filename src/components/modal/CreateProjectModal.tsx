import React, { useState } from 'react';

import { setIsModalOpen } from '@hooks/useModal';
import { requiredJwtTokeninstance } from '@libs/axios/axios';

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
      <article>
        <h1>프로젝트 추가</h1>
      </article>

      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
        <input
          type="text"
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
          placeholder="부제목"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="프로젝트 설명"
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="프로젝트 시작일"
        />
        <input
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="프로젝트 종료일"
        />
        <input type="submit" onClick={handleCreateProject} />
        <button onClick={closeModal}>취소</button>
      </form>
    </>
  );
}

export default CreateProjectModal;
