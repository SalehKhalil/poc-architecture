import path from 'path'
import fs from 'fs'
import { Application } from 'express'

async function routesMiddleware (server: Application): Promise<void> {
  const domainsPath = path.resolve(__dirname, '../domains')
  const domains: string[] = await fs.readdirSync(domainsPath)
  const subpaths = await Promise.all(domains.flatMap((domain): string[] => {
    const mainPath = path.resolve(__dirname, '../domains/', domain)
    return fs.readdirSync(mainPath)
  }))
  const routePaths = subpaths.filter(subpath => subpath.includes('.route'))
  const routerFilePaths = domains.map(domain => {
    const subpath: string = routePaths.find(routePath => routePath.includes(routePath)) as string
    return {
      path: `${domain}/${subpath}`,
      name: domain
    }
  })

  for (const routerPath of routerFilePaths) {
    const pathResolved = path.resolve(__dirname, '../domains', routerPath.path)
    const { router } = await import(pathResolved)
    server.use(`/${routerPath.name}`, router)
  }
}

export { routesMiddleware }
