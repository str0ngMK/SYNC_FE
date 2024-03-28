import { Link } from 'react-router-dom';

export default function FindPassword() {
  return (
    <main role="find-password">
      <section>
        <h1>Hinc</h1>
      </section>
      <section>
        <p>비밀번호가 기억나지 않나요?</p>

        <p>
          이메일 주소를 입력하시면 이메일로 계정에 다시 엑세스 할 수 있는 임시
          비밀번호를 보내드립니다.
        </p>

        <form>
          <input type="text" placeholder="이메일" />
          <input type="submit" value="로그인 링크 보내기" />
        </form>
        <Link to="/user/find/userId">
          비밀번호를 알고 있나요? 아이디 찾으러 가기
        </Link>
        <p>또는</p>
        <div>
          <Link to="/signup">회원가입 하러 가기</Link>
        </div>
      </section>
      <article>
        <Link to="/login">로그인으로 돌아가기</Link>
      </article>
    </main>
  );
}
