export interface User {
    id?: number,
    name: string,
    password?: string,
    roleId?: number,
    createdAt?: string,
    updatedAt?: string,
    trainings?: {training: Training}[],
    lessonAuthored?: Lesson[]
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
    id:number,
    authorId:number,
    name:string,
    content:string,
    createdAt:string,
    updatedAt:string
}