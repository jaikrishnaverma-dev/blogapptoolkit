import { type } from "@testing-library/user-event/dist/type"


export type Mystate={
    posts:{
        title: string,
        author: string,
        userid: number,
        category: string,
        tags:string[],
        pic: string,
        typography: string,
        date: string
    }[]
    users:{
        name : string,
        email:string,
        number:number,
        pic:string,
        password:string
    }[]
    sessionIndex:number,
    editIndex:number
}
export type Mypost={
    title: string,
    author: string,
    userid: number,
    category: string,
    tags:string[],
    pic: string,
    typography: string,
    date: string
}
export type Myuser={
    name : string,
    email:string,
    number:number,
    pic:string,
    password:string
}