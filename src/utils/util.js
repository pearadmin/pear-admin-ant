/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
/**
 * 是否为生产环境
 * @returns {boolean}
 */
export const isNotProduction = () => {
  return process.env.NODE_ENV !== 'production'
}
