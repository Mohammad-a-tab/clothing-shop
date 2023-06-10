import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class StringToArray implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if(req.body.colors){
            if(typeof req.body.colors == "string"){
                if(req.body.colors.indexOf("#") >=0){
                    req.body.colors = (req.body.colors.split("#")).map(item => item.trim())
                }else if(req.body.colors.indexOf(",") >=0){
                    req.body.colors = (req.body.colors.split(",")).map(item => item.trim())
                }else{ 
                    req.body.colors = [req.body.colors]
                }
            }
            if(Array.isArray(req.body.colors)){
                req.body.colors = req.body.colors.map(item => item.trim())
                req.body.colors = [... new Set(req.body.colors)]
            }
        }else{
            req.body.colors = []
        }    
        next();
    }
}