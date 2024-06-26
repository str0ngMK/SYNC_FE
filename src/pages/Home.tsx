import React, { useState } from 'react';
import instance from '../libs/axios/axios';

function Home() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const getProjects = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await instance.post('/api/user/project/get', {
      userId: 'abc123123',
    });
    console.log(response);
  };

  const handleCreateProject = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const response = await instance.post('/api/user/project/create', {
        title,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      });
      console.log(response);
      /*
      const response = await axios.post(
        'https://158.247.197.212:9090/api/user/project/create',
        {
          title,
          description,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
        },
        {
          withCredentials: true,
        },
      );
      console.log(response);
      */
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="설명"
        />
        <label>프로젝트 기간</label>
        <input
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="프로젝트 시작일(2024.xx.xx)"
        />
        <input
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="프로젝트 종료일(2024.xx.xx)"
        />
        <input
          type="submit"
          value="프로젝트 생성"
          onClick={handleCreateProject}
        />
      </form>
      <button onClick={getProjects}>프로젝트 얻기</button>
    </div>
  );
}

export default Home;
