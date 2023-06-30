export interface User {
    id?: number,
    name?: string,
    password?: string,
    validationPassword?: string,
    roleId?: number,
    createdAt?: string,
    updatedAt?: string,
    trainings?: {
        trainingId: number,
        training: Training
    }[],
    lessonsAuthored?: Lesson[]
}

export interface Training {
    id?: number,
    name?: string,
    createdAt?: string,
    updatedAt?: string,
    coachId?: number,
    coach?: User,
    modules?: {
        moduleId: number,
        module: Module
    }[],
    users?: {
        userId: number,
        user: User
    }[]
}

export interface Module {
    id?:number,
    name?:string,
    lessons?:{
        lessonId: number,
        lesson: Lesson
    }[]
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
    name?:string,
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
    form?:{
        input:{
            type:string,
            value?:any,
            label:string,
            placeholder?:string
        }[],
        title:string,
        route:string,
        typeReq:string
    },
    buttons?:{
        type:string,
        content:string,
        function:string
    }[]
}