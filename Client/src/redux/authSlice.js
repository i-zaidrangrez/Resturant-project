import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk('/auth/login',async(data)=>{
    try {
        const res = await axios.post('http://localhost:3000/auth/v1/login',data)
        return res.data
    } catch (error) {
        console.log(error.response.data)
    }
})
export const register= createAsyncThunk('auth/register',async(data)=>{
    try {
        const res = await axios.post('http://localhost:3000/auth/v1/register',data)
        return res.data
    } catch (error) {
        console.log(error.response.data)
    }
})

const authSlice = createSlice({
    name  : "auth",
    initialState : {
        loading : false,
        error : null,
        name : null,
        email : null,
        accessToken : null
    },
    extraReducers : (builder)=>{
        builder.addCase(login.pending, (state , action)=>{
            state.loading = true
        }).addCase(login.fulfilled , (state , action) => {
            state.loading = false
        }).addCase(login.rejected , (state , action) => {
            state.loading = false
        })
    }
})

export default authSlice.reducer