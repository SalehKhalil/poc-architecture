function validateEnvsMiddleware (): void {
  const envsRequired = ['PORT', 'ENV']

  envsRequired.forEach(env => {
    if (!process.env[env]) throw new Error(`Environment "${env}" is required`)
  })
}

export { validateEnvsMiddleware }
