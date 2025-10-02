import jwt, { JwtPayload, SignOptions } from "jsonwebtoken"

export const generateToken = (payload:JwtPayload ,secret:string,expireIn:string)=>{
    const token = jwt.sign(payload,secret,{expiresIn:expireIn} as SignOptions)
    return token;
}


export const verifyToken = (token:string, secret:string, )=>{
  const verify = jwt.verify(token,secret)

  return verify
}