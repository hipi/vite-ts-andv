import { defineStore } from 'pinia';

interface UserInfo {
  userId: string | number;
  username: string;
  realName: string;
  avatar: string;
  desc?: string;
  homePath?: string;
}

interface UserState {
  token?: string;
  isAdmin: boolean;
  useinfo: Nullable<UserInfo>;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: undefined,
    isAdmin: false,
    useinfo: null,
  }),
});
