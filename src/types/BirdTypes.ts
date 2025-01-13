export interface Bird{
    _id: any
    commonName: string,
    scientificName:string,
    description: string,
    habitat:string[],
    appearance:{
        size: string,
        color:string[]
    },
    photos:string[]
}