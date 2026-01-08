import { NextFunction, Request, Response } from "express";

export const postRange = (req: Request, res: Response, next: NextFunction) => {
    // This static value works for a basic setup
    // For a real API, these values should be dynamic
    res.header('Content-Range', 'posts 0-20/100');
    // Also required for CORS if the API is on a different domain
    res.header('Access-Control-Expose-Headers', 'Content-Range');
    next();
}