import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('Request...');
    // console.log(`Method: ${req.method}`);
    // console.log(`URL: ${req.url}`);
    // console.log(`Body: ${JSON.stringify(req.body)}`);
    next();
  }
}
