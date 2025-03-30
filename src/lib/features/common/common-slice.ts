// Need to use the React-specific entry point to import `createApi`
import { createSlice } from "@reduxjs/toolkit";

export interface CommonState {
  establishmentId: string;
}

const commonInititalState: CommonState = {
  establishmentId: "",
};

export const commonSlice = createSlice({
  name: "common",
  initialState: commonInititalState,
  reducers: {
    setestablishmentId(state, action) {
      return { ...state, establishmentId: action.payload };
    },
    clearestablishmentId(state) {
      return { ...state, establishmentId: "" };
    },
  },
  selectors: {
    getestablishmentId: (state) => state.establishmentId,
  },
});

export const { clearestablishmentId, setestablishmentId } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;

export const { getestablishmentId } = commonSlice.selectors;
