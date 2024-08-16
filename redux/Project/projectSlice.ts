import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addProject, editProject, removeProject } from "./projectThunks";

interface ProjectStateType {
  loading: boolean;
  error: string | null;
  addSuccess: boolean;
  editSuccess: boolean;
  removeSuccess: boolean;
}

const initialState: ProjectStateType = {
  loading: false,
  error: null,
  addSuccess: false,
  editSuccess: false,
  removeSuccess: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    resetAddSuccess: (state) => {
      state.addSuccess = false;
    },
    resetEditSuccess: (state) => {
      // New reducer to reset edit success
      state.editSuccess = false;
    },
    resetRemoveSuccess: (state) => {
      state.removeSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(addProject.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.addSuccess = false;
      })
      .addCase(addProject.fulfilled, (state) => {
        state.loading = false;
        state.addSuccess = true;
      })
      .addCase(addProject.rejected, (state) => {
        state.loading = false;
        state.error = "An error occurred while adding the project";
        state.addSuccess = false;
      })
      .addCase(editProject.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.editSuccess = false;
      })
      .addCase(editProject.fulfilled, (state) => {
        state.loading = false;
        state.editSuccess = true;
      })
      .addCase(editProject.rejected, (state) => {
        state.loading = false;
        state.error = "An error occurred while editing the contactUs";
        state.editSuccess = false;
      })
      .addCase(removeProject.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.removeSuccess = false;
      })
      .addCase(removeProject.fulfilled, (state) => {
        state.loading = false;
        state.removeSuccess = true;
      })
      .addCase(removeProject.rejected, (state) => {
        state.loading = false;
        state.error = "An error occurred while removing the project";
        state.removeSuccess = false;
      });
  },
});

export default projectSlice.reducer;

export const { resetAddSuccess, resetRemoveSuccess } = projectSlice.actions;
