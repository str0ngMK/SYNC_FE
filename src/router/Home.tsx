import axios, { AxiosError } from 'axios';

export default function Home() {
  const axiosTest = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/signup',
        {
          username: 'iamso',
          nickname: 'iamso',
          city: 'seoul',
          district: 'chungdong',
          roadAddress: '15237',
          sex: 'MAN',
          userId: 'fronttest3',
          password: '>iSz}]0q+pP|',
          email: 'bbb@bbb.com',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav role="sidebar">
        <h1>Hinc</h1>
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Setting</li>
          <li>Dark Mode</li>
          <li>Excel Mode</li>
        </ul>
      </nav>
      <div>
        <header>
          <nav role="navigation">
            <ul>
              <li>홈</li>
              <li>인기</li>
              <li>친구</li>
              <li>피드</li>
            </ul>
          </nav>
        </header>
        <main role="home">
          <section>
            <ul>
              <li>피드 컨테이너</li>
              <li>피드 컨테이너</li>
              <li>피드 컨테이너</li>
            </ul>
            <button onClick={axiosTest}>Axios Test</button>
          </section>
        </main>
      </div>
    </>
  );
}
