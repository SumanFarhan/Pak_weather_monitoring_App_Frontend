import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const addSignupUser = createAsyncThunk(
    'user/add',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            
        };
        const res = await fetch('http://localhost:3007/signupUser', requestOptions)
        return res.json();
    }
)

export const addLoginUser = createAsyncThunk(
    'user/login',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( data)
        };

        const res = await fetch('http://localhost:3007/loginUser', requestOptions)
            // useDispatch(push('/dashboard'));
            return res.json();
    }
)

const initialState = {
    userData: [],
    loginData: [],
    EmployeeData: [],
    redirectToDashboard: false
}


export const addUser = createSlice({

    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        // [addSignupUser.rejected]: (state) => {
        //     console.log('Signup Rejected');
        // },
        // [addSignupUser.fulfilled]: (state, action) => {
        //     console.log(JSON.stringify(action.payload));
        //     console.log('Signup done...');
        //     state.userData = action.payload.data;
        // },
        // [addSignupUser.pending]: state => {
        //     console.log('Signup Pending...');
        // },
        // [addLoginUser.fulfilled]: (state, action) => {
        //     state.loginData = action.payload.data;
        //     console.log('login done...');
        //     state.redirectToDashboard = true;
        // },
        // [addEmployeeData.pending]: state => {
        //     console.log('Signup Pending...');
        // },
        // [addEmployeeData.fulfilled]: (state, action) => {
        //     state.userData = action.payload.data;
        //     console.log('todo fulfilled...');
        // }
    }

})

// Action creators are generated for each case reducer function
export const { SignupReducer, LoginReducer, AddEmployeeReducer } = addUser.actions

export default addUser.reducer 