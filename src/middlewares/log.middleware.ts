import { Request, Response, NextFunction } from 'express'

function log (req: Request, res: Response, next: NextFunction): void {
  const timestamp = new Date().getTime()

  console.log(`Init | ${timestamp}: ${req.path} - ${req.method}`)

  res.on('finish', () => {
    console.log(`Finish | ${timestamp}: ${req.path} - ${req.method} => Status: ${res.statusCode}`)
  })

  next()
}

export default log
