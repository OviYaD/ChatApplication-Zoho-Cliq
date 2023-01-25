import { createSlice } from "@reduxjs/toolkit";

export const organizationSlice = createSlice({
    name:"organization",
    initialState: [],
    reducers : {
        setOrgList : (state , action) => {
            return [
                ...action.payload
            ]
        },
        changeDefault : (state,action) => {
            return [
                ...action.payload
            ]
            
        },
        addOrg: (state, action) => {
            const updOrg = [...state];
            updOrg.push(action.payload);
            return [
                ...updOrg
            ]
        }
    }
})

const { reducer, actions } = organizationSlice;
export const { setOrgList , changeDefault,addOrg } = actions;
export default reducer;
