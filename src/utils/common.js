/**
 * 是否为生产环境
 * @returns {boolean}
 */
export const isNotProduction = () => {
  return process.env.NODE_ENV !== 'production'
}
