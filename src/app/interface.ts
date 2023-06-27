export interface User {
    id?: number,
    name: string,
    password?: string,
    roleId?: number,
    createdAt?: string,
    updatedAt?: string,
    trainings?: {training: Training}[],
    lessonsAuthored?: Lesson[]
}

export interface Training {
    id?: number,
    name: string,
    createdAt?: string,
    updatedAt?: string,
    coachId?: number
}

export interface Token {
    id:number,
    username:string,
    role:number,
    iat:number,
    exp:number
}

export interface Lesson {
    id?:number,
    authorId?:number,
    name:string,
    content?:string,
    createdAt?:string,
    updatedAt?:string
}

export interface Modal {
    error?:{
      title:string,
      message:string
    },
    warning?:{
      title:string,
      message:string
    },
    buttons?:{
        type:string,
        content:string,
        function:string
    }[]
}