import { createSlice } from "@reduxjs/toolkit";

const initialState={
posts:[
    {
        title: ' Using React Select component',
        author: 'jai krishna verma',
        userid: 0,
        category: 'Travel',
        tags: [
          'blog'
        ],
        pic: 'tech.jpg',
        typography: 'You can use an attribute defaultValue to set the default value in the Select menu If none option is integrated with this attribute first option is selected by default. You can create an Array of the object where you will store all options to be displayed and any single object is passed in the defaultValue attribute.\n\nSyntax:\n\n<Select\n    option={optionArray}\n    defaultValue={optionArray[index]}\n/>\nNote: Make sure you have installed the react-select module using the following command.\n\nnpm install react-select\n',
        date: '13-01-2023'
      }],
users:[{
    name : 'jai krishna verma',
    email:'jai@gmail.com',
    number:8787878787,
    pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_jBNGDAl_gCziVLX5q8vuci3Z8VmfK8Rrdtct54&s',
    password:'2222'
}],
sessionIndex:-1,
editIndex:-1
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
            tags:['blog'],
            pic:action.payload.pic,
            typography: action.payload.typography,
            date:new Date().toJSON().slice(0, 10).split('-').reverse().join('-')
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
            title: action.payload.title,
            typography: action.payload.typography,
            date:new Date().toJSON().slice(0, 10).split('-').reverse().join('-')
        }
        state.editIndex=-1
    },
    deleteBlog:(state,action)=>{
        state.posts.splice(action.payload,1)
    },
    setSeesionIndex:(state,action)=>{
        state.sessionIndex=action.payload
    },
    setEditIndex:(state,action)=>{
        state.editIndex=action.payload
    },
    persistDatbase:(state,action)=>{
       console.log('py',action.payload)
       state.posts=JSON.parse(action.payload).posts
       state.sessionIndex=JSON.parse(action.payload).sessionIndex
       state.users=JSON.parse(action.payload).users
       
    }


    }
})

export default DataSlice.reducer;
export const { addBlog,addUser,updatePost,deleteBlog,setSeesionIndex,persistDatbase,setEditIndex} = DataSlice.actions