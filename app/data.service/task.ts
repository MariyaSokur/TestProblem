export interface ITask{
     title:string;
    description:string;
    done:boolean;
}

export class Task implements ITask{
    title:string;
    description:string;
    done:boolean = false;

    constructor(title:string, description:string, done:boolean){
        if(description) this.description=description;
        this.done = done;
        if(title) this.title = title;
    }
}