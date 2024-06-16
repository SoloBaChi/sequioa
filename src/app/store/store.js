import create from "zustand";

export const useAuthStore = create((set) => ({
  auth: {
    token: "",
  },
  setToken: (tokenId) =>
    set((state) => ({ auth: { ...state.auth, token: tokenId } })),
}));
