import path from 'path'
import { Request, Response, NextFunction } from 'express'
import { IValidator } from '../interfaces/validator.interface'
import { HttpError } from '../helpers/errors/http.error'

function validatorMiddleware (req: Request, res: Response, next: NextFunction): void {
	try {
		const validatorsFolderPath = path.resolve(__dirname, `../helpers/validators/${req.path}.validator.ts`)
		const validator: IValidator = require(validatorsFolderPath)
		const hasBody = !!Object.keys(req.body).length
		const hasQuery = !!Object.keys(req.query).length
	
		if (hasBody) {
			const { error } = validator.bodyValidate.validate(req.body)
	
			if (error) throw new HttpError(error.message, 400)
		}
	
		if (hasQuery) {
			const { error } = validator.queryValidate.validate(req.query)
	
			if (error) throw new HttpError(error.message, 400)
		}

		next()
	} catch (err) {
		res.status(400).json(err)
	}
}

export { validatorMiddleware }
