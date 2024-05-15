import Header from './Header';
import SideBar from './SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideBar />
      <Header />
      <main>{children}</main>
    </>
  );
}
