import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

export default function DropdownPortal({ children }: PropsWithChildren) {
  const dropdownRoot = document.getElementById('dropdown-root') as HTMLElement;
  return ReactDOM.createPortal(children, dropdownRoot);
}
