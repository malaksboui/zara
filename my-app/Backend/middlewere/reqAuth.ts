import { Request, Response,NextFunction } from 'express';
import jwt, {  Secret }from  "jsonwebtoken"




function authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.body.authorization;
      console.log(authHeader);

      if (!authHeader) {
        return res.sendStatus(401);
      }

      const token = authHeader.split(' ')[1];
      console.log(token, 'token');

      if (!token) {
        return res.sendStatus(401);
      }

      jwt.verify(token, "zaraToken" as Secret);
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Authentication failed: Invalid token' });
    }
  }





export default authenticate
