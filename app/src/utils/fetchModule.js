/**
 * THis helper allows to load some file from CDN into new script tag,
 * @param  {[type]} src       [description]
 * @param  {Array}  externals [description]
 * @return {[type]}           [description]
 */
export const fetchModule = (src, externals = []) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.setAttribute('src', src)
    script.addEventListener('load', () => {
      const result = externals.map(key => {
        const ext = window[key]
        typeof ext === 'undefined' && console.warn(`No external named '${key}' in window`)
        return ext
      })
      resolve(result)
    })
    script.addEventListener('error', reject)
    document.body.appendChild(script)
  })
}
