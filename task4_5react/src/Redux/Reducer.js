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
            body: JSON.stringify(data)
        };
        console.log("inside login reducer");
        const res = await fetch('http://localhost:3007/loginUser', requestOptions)
        console.log("after login reducer");
        return res.json();
    }
)

export const addweather = createAsyncThunk(
    'weather/addweather',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            
        };
        const res = await fetch('http://localhost:3007/addweather', requestOptions)
        return res.json();
    }
)

export const getFiveCities = createAsyncThunk(
    'weather/getFiveCities',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            
        };
        const res = await fetch('http://localhost:3007/getFiveCities', requestOptions)
        return res.json();
    }
)



const initialState = {
    userData: [],
    loginData: '',
    fiveCitiesweatherData:[],
    citiesAddedUser:[],
    redirectToDashboard: false
}


export const addUser = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [addSignupUser.rejected]: (state) => {
            console.log('Signup Rejected');
        },
        [addSignupUser.fulfilled]: (state, action) => {
            state.response = action.payload.message;
            alert(state.response);
        },
        [addSignupUser.pending]: state => {
            console.log('Signup Pending...');
        },
        [addLoginUser.pending]: state => {
            console.log('login Pending...');
        },
        [addLoginUser.fulfilled]: (state, action) => {
            // state.loginData = action.payload.userID;
            state.loginData=action.payload._id
            console.log(state.response);
            alert("Logedin Successfully")
            state.redirectToDashboard = true;
        },
        [addLoginUser.rejected]: (state) => {
            console.log('login Rejected');
        },
        [addweather.fulfilled]:(state,action)=>{
            state.response = action.payload.message;
            alert("DATA",state.response)
            console.log(state.response)
        },
        [addweather.rejected]: (state) => {
            console.log('add weather Rejected');
        },
        [getFiveCities.fulfilled]:(state,action)=>{
            state.fiveCitiesweatherData=action.payload
        }
    }

})


export default addUser.reducer 