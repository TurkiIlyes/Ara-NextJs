import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addContactUs } from "./contactUsThunks";

interface ContactUsStateType {
  loading: boolean;
  error: string | null;
  addSuccess: boolean;
}

const initialState: ContactUsStateType = {
  loading: false,
  error: null,
  addSuccess: false,
};

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {
    resetAddSuccess: (state) => {
      state.addSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(addContactUs.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.addSuccess = false;
      })
      .addCase(addContactUs.fulfilled, (state) => {
        state.loading = false;
        state.addSuccess = true;
      })
      .addCase(addContactUs.rejected, (state) => {
        state.loading = false;
        state.error = "An error occurred while adding the contactUs";
        state.addSuccess = false;
      });
  },
});

export default contactUsSlice.reducer;

export const { resetAddSuccess } = contactUsSlice.actions;
