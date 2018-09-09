const _debugNamespaces: string[] = []

/**
 * Create new debug instance.
 * @param namespace Debug namespace.
 */
export function Debug(namespace: string) {
  const colors = ['41m', '42m', '44m', '45m', '46m', '47m']

  let idx = _debugNamespaces.indexOf(namespace)
  if (idx < 0) {
    _debugNamespaces.push(namespace)
    idx = _debugNamespaces.length - 1
  }

  if (idx > colors.length - 1) {
    idx = 0
  }

  return (...messages: any[]) => {
    if (process.env.NODE_ENV !== 'development') {
      return
    }

    // tslint:disable-next-line:no-console
    console.log.apply(console.log, [
      `\x1b[${colors[idx]}<< ${namespace} >>\x1b[0m`,
      ...messages
    ])
  }
}
