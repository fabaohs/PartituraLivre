module.exports = class ApiError {
   message: string;
   status: number;
   error: string;

   constructor(message: string, status: number, error: string = '') {
      this.message = message;
      this.status = status;
      this.error = error;
   }

   static NotFound(message: string = "Resource not found") {
      return new ApiError(message, 404);
   }

   static BadRequest(message: string) {
      return new ApiError(message, 400);
   }

   static Internal(error: string) {
      return new ApiError("Internal server error", 500, error);
   }

   static Unauthorized() {
      return new ApiError("Unauthorized!", 401);
   }

   static CustomError(message: string, status: number, error: string) {
      return new ApiError(message, status, error);
   }
};
