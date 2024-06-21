import { create } from 'zustand';

interface LoggedInUserState {
  loggedInUser: string;
  setLoggedInUser: (username: string) => void;
}

const useLoggedInUserStore = create<LoggedInUserState>((set) => ({
  loggedInUser: '',
  setLoggedInUser: (username) => set((state) => ({ loggedInUser: username })),
}));

export default useLoggedInUserStore;
