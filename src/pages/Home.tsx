import { requiredJwtTokeninstance } from '@libs/axios/axios';
import axios from 'axios';
import config from 'config/config';

function Home() {
  const getUser = async () => {
    const response = await requiredJwtTokeninstance.get(`/user/api/info`);
    console.log(response);
  };

  return (
    <div>
      <button onClick={getUser}>회원 정보 얻기</button>
    </div>
  );
}

export default Home;
