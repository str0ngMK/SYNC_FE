export default function Home() {
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
          </section>
        </main>
      </div>
    </>
  );
}
