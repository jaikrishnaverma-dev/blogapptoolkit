import { createSlice } from "@reduxjs/toolkit";

const initialState={
posts:[
    {
        title:'about jai',
        author:'jai',
        category:'bio',
        userid:0,
        tags:['bio','resume'],
        typography:'i am a developer of my own world i am a developer of my own world i am a developer of my own world i am a developer of my own world',
        date:'2-07-2022'
    }],
users:[{
    name : 'jai krishna verma',
    email:'jai@gmail.com',
    number:8787878787,
    pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_jBNGDAl_gCziVLX5q8vuci3Z8VmfK8Rrdtct54&s',
    password:'2222'
}],
sessionIndex:0
}


const DataSlice:any=createSlice({
    name:'DataSlice',
    initialState,
    reducers:{
    addBlog:(state,action)=>{
        state.posts.push( {
            title: action.payload.title,
            author: action.payload.author,
            userid: action.payload.userid,
            category:action.payload.category,
            tags:[...action.payload.tags],
            typography: action.payload.typography,
            date:new Date().toJSON().slice(0, 10)
        })
    },
    addUser:(state,action)=>{
        state.users.push({
            name : action.payload.name,
            email:action.payload.email,
            number:action.payload.number,
            pic:action.payload.pic,
            password:action.payload.password
        })
    },
    updatePost:(state,action)=>{
        // {,index,title,author,userid,tags,typography,date}
        state.posts[action.payload.index]={
            ...state.posts[action.payload.index],
            title: action.payload.titl0e,
            tags:[...action.payload.tags],
            typography: action.payload.typography,
            date:new Date().toJSON().slice(0, 10)
        }
    },
    deleteBlog:(state,action)=>{
        state.posts.splice(action.payload.table,1)
    },
    setSeesionIndex:(state,action)=>{
        state.sessionIndex=action.payload
    }



    }
})

export default DataSlice.reducer;
export const { addBlog,addUser,updatePost,deleteBlog } = DataSlice.actions