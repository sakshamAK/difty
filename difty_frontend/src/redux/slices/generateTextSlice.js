import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	content: { from: "", to: "", content: "", info: "" },
    output: "",
    bg: "",
};

export const generateTextSlice = createSlice({
	name: "gptContent",
	initialState,
	reducers: {
		addContent: (state, { payload }) => {
			state.content =  payload
		},
		addFrom: (state, { payload }) => {
            state.from =  payload
		},
		addTo: (state, { payload }) => {
            state.to =  payload
		},
		addInfo: (state, { payload }) => {
            state.info =  payload
		},
        generatedGift: (state, { payload }) => {
            state.output = payload;
        },
        addBgImage: (state, { payload }) => {
            state.bg = payload;
        }
	},
});

export const { addContent, addFrom, addInfo, addTo, generatedGift, addBgImage } = generateTextSlice.actions;

export default generateTextSlice.reducer;
