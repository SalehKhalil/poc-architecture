import { Request, Response } from 'express';
import { Container } from 'typedi';

import CreateUserService from '../services/user/create.service';

export default class UserController {
  static async create(req: Request, res: Response) {
    try {
      const { name, age, cep } = req.body;
      const createUserService = Container.get(CreateUserService);
      const userCreated = await createUserService.execute({ name, age, cep });

      return res.status(200).json(userCreated);
    } catch (err) {
      return res.status(err.statusCode ?? 500).json(err);
    }
  }
}
