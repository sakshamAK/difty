import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	content: { from: "", to: "", content: "", info: "" },
    output: "",
    bg: "",
	heading: "",
};

export const generateTextSlice = createSlice({
	name: "gptContent",
	initialState,
	reducers: {
		addContent: (state, { payload }) => {
			state.content =  payload;
			if(payload === "poem") 
				state.heading = "A Poem to Remember Us";
			else if(payload === "story")
				state.heading = "A Story about the Moments"
			else 
				state.heading = "A Chronicle of Joyful Moment";
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
        },
	},
});

export const { addContent, addFrom, addInfo, addTo, generatedGift, addBgImage } = generateTextSlice.actions;

export default generateTextSlice.reducer;
