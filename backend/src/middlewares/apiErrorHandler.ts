import { NextFunction, Response } from 'express';
import { Request } from 'express';
const ApiError = require('../utils/error/ApiError')


module.exports = function apiErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
   if (err instanceof ApiError) {
      if (err.error === null) {
         return res.status(err.status).json({
            status: "error",
            success: false,
            message: err.message,
         });
      }

      return res.status(err.status).json({
         status: "error",
         success: false,
         message: err.message,
         error: err.error,
      });
   }
};
