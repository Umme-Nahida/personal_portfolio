import dotenv from "dotenv";
dotenv.config();

interface IEnvVariables {
    DATABASE_URL: string
    PORT: string
    node_env: string
    JWT_SECRET: string,
    JWT_EXPIRES_IN: string,
    JWT_REFRESH_SECRET: string,
    JWT_REFRESH_EXPIRES_IN: string,
}


const loadEnv = (): IEnvVariables =>{
    const requiredEnv = ["DATABASE_URL","PORT","node_env","JWT_SECRET","JWT_EXPIRES_IN","JWT_REFRESH_SECRET","JWT_REFRESH_EXPIRES_IN"];

    requiredEnv.forEach((key)=>{
        if(!process.env[key]){
            throw new Error(`Missing require environment variable ${key}`)
        }
    })

    return {
        PORT:process.env.PORT as string,
        DATABASE_URL:process.env.DATABASE_URL!,
        node_env:process.env.node_env as string,
        JWT_SECRET:process.env.JWT_SECRET as string,
        JWT_EXPIRES_IN:process.env.JWT_EXPIRES_IN as string,
        JWT_REFRESH_SECRET:process.env.JWT_REFRESH_SECRET as string,
        JWT_REFRESH_EXPIRES_IN:process.env.JWT_REFRESH_EXPIRES_IN as string,


    }
}


export const envVars = loadEnv();