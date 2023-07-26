import { create } from "zustand";
import { UserState, userSlice } from "./slices/user-slices";
import { formSlice, FormState } from "./slices/form-slices";
import { ChatFormState, chatFormSlice } from "./slices/chat-slices";

type storeState = UserState & FormState & ChatFormState;

export const useAppStore = create<storeState>()((...a) => ({
  ...userSlice(...a),
  ...formSlice(...a),
  ...chatFormSlice(...a),
}));
