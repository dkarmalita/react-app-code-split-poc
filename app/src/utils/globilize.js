/**
 * Make values globally avaliable
 * @param  {Object} cfg - config object
 * @return {Void}
 * @example
 *   globilize({ react: React, ... })
 */
export const globilize = (cfg) => {
  Object.keys(cfg).forEach( pkgName => {
    window[pkgName] = cfg[pkgName]
  } )
}