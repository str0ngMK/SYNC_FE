import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main role="login">
      <section>
        <h1>Hinc</h1>
      </section>
      <section>
        <article>
          <img src="" alt="" />
        </article>
        <article>
          <ul>
            <li>계정 로그인</li>
            <li>간편 로그인</li>
          </ul>
          <div>
            <form>
              <input type="text" placeholder="아이디" />
              <input type="password" placeholder="비밀번호" />
              <input type="submit" value="로그인" />
            </form>
            <div>
              <div>
                <input type="checkbox" />
                <span>자동 로그인</span>
              </div>
              <div>
                <span>아이디 찾기</span>
                <span>|</span>
                <span>비밀번호 찾기</span>
              </div>
            </div>
            <div>
              <Link to="/signup" role="link">
                회원가입
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
