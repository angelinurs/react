import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : 'users',
    initialState : {
        users:[]
    },
    reducers : {
        addUser: function( state, action ) {
            // console.log( action );
            state.users.push( action.payload );
        },
        delUser: function( state, action ) {
            state.users = state.users.filter( user => user.num != action.payload.num );
        },
        editUser: function( state, action ) {
            state.user = state.users.map( user => {
                if( user.num == action.payload.num ) {
                    user = action.payload;
                }
            });
        }
    }
});

export const{ addUser, delUser, editUser }  = userSlice.actions;

export default userSlice.reducer;