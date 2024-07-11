import { create } from 'zustand';

interface LoggedInUserState {
  loggedInUser: string;
  setLoggedInUser: (username: string) => void;
}

const useLoggedInUserStore = create<LoggedInUserState>((set) => ({
  loggedInUser: localStorage.getItem('loggedInUser') || '',
  setLoggedInUser: (username) => set(() => ({ loggedInUser: username })),
}));

export default useLoggedInUserStore;
