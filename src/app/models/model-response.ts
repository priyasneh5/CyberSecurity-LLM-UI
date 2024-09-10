export interface ChatWithBot{
    person: string;
    response: string;
    scssClass:string;
}

export interface ResponseModel{
    id:string;
    object:string;
    created:number;
    model:string;
}


export interface metricsResponse{
    name:string;
    val:number;
}