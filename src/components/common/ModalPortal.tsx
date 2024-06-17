import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

export default function ModalPortal({ children }: PropsWithChildren) {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  return ReactDOM.createPortal(children, modalRoot);
}
