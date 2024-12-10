import { createSlice } from "@reduxjs/toolkit"




const initialState = {
  mainColor: "",
}

const propertiesSlice = createSlice({
  name: "props",
  initialState,
  reducers: {
    setColor(state,data) {
      state.mainColor = data.payload
    }
  }
})

export const propsActions = propertiesSlice.actions;
export default propertiesSlice.reducer;