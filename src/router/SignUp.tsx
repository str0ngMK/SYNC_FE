import axios from 'axios';

export default function SignUp() {
  return (
    <>
      <header>
        <h1>Hinc</h1>
      </header>
      <main role="signup">
        <section>
          <article>
            <form>
              <input type="text" placeholder="이름" />
              <div>
                <input type="text" placeholder="아이디" />
                <button>중복 검사</button>
              </div>
              <div>
                <input type="password" placeholder="비밀번호" />
                <p>눈 아이콘</p>
              </div>
              <div>
                <label htmlFor="birth">
                  <span>생년월일</span>
                  <input id="birth" type="text" readOnly />
                </label>
              </div>
              <div>
                <label htmlFor="gender">성별</label>
                <ul>
                  <li>
                    <input type="radio" name="gender" value="WOMAN" />
                    여성
                  </li>
                  <li>
                    <input type="radio" name="gender" value="MAN" />
                    남성
                  </li>
                  <li>
                    <input type="radio" name="gender" value="기타" />
                    기타
                  </li>
                </ul>
              </div>
              <div>
                <label htmlFor="email">이메일</label>
                <div>
                  <input type="text" placeholder="이메일" />
                  <button role="email-auth">전송</button>
                </div>
              </div>
              <p>
                가입하기 버튼을 클릭하면 takebook의 약관, 개인정보처리방침 및
                쿠키 정책에 동의하게 됩니다. takebook으로부터 SNS 알림을 받을 수
                있으며 알림은 언제든지 수신 거부할 수 있습니다.
              </p>
              <input type="submit" value="가입하기" />
            </form>
          </article>
        </section>
      </main>
    </>
  );
}
