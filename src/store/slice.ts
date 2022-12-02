import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  url: string;
  author: string;
  createAt: string;
  time: string;
}

type Users = {
  users: User[]
};

const initialState: Users = {
  users: [],
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers:{
    set: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  }
});

export default userSlice.reducer;
export const { actions } = userSlice;
