import { defineStore } from 'pinia';

interface SettingsState {
  token?: string;
}

export const useUserStore = defineStore('settings', {
  state: (): SettingsState => ({
    // token
    token: undefined,
  }),
});
