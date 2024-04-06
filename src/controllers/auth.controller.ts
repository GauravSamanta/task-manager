import { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
  res.send('Register route');
};

export const login = async (req: Request, res: Response) => {
  res.send('Login route');
};

export const logout = async (req: Request, res: Response) => {
  res.send('Logout route');
};
