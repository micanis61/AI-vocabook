import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host:'localhost',
    port: 5432,
    username:'postgres',
    password:'postgres',
    database:'postgres',
    entities:[],
    migrations:[]
})

AppDataSource.initialize()
.then(()=>{
    console.log('Data Source has been ')
})
.catch((err)=>{
    console.log('aaaaaaaaaaaaaaaa')
})