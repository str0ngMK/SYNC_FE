import { SettingsProject } from '@components/dropdown';
import useDropdown from '@hooks/useDropdown';
import styled from 'styled-components';

const ProjectItem = styled.li`
  height: 62px;
  border-bottom: 1px solid var(--main-black, #000);
  display: flex;
  h6,
  span {
    padding: 8px;
    color: var(--main-black, #000);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.266px;
    display: flex;
    align-items: center;
  }
  h6 {
    width: 208px;
  }
  span {
    width: 168px;
  }
`;

const More = styled.div`
  width: 87px;
  display: flex;
  align-items: center;
  position: relative;
  button {
    padding: 8px;
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--main-black, #000);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.266px;
    cursor: pointer;
  }
`;

interface Project {
  name: string;
  owner: string;
  role: string;
  createdAt: string;
}

export default function SettingsProjectItem({
  name,
  owner,
  role,
  createdAt,
}: Project) {
  const [isOpen, toggleDropdown, dropdownRef] = useDropdown();
  return (
    <ProjectItem>
      <h6>{name}</h6>
      <h6>{owner}</h6>
      <span>{role}</span>
      <span>{createdAt}</span>

      <More ref={dropdownRef}>
        <button onClick={toggleDropdown}>더보기</button>
        <SettingsProject isOpen={isOpen} />
      </More>
    </ProjectItem>
  );
}

/*
  const settingsProjectDropdownRef = useRef<HTMLDivElement>(null);
  const [showsDropdown, setShowsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleDetect = (e: React.BaseSyntheticEvent | MouseEvent) => {
      if (
        settingsProjectDropdownRef.current &&
        !settingsProjectDropdownRef.current.contains(e.target)
      )
        setShowsDropdown(false);
    };
    document.addEventListener('click', handleDetect);
    return () => {
      document.removeEventListener('click', handleDetect);
    };
  }, []);

  useEffect(() => {
    setShowsDropdown(false);
  }, [location.pathname]);

*/
