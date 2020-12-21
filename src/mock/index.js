/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
import { isNotProduction } from "@/utils/util";

const useMock = isNotProduction()

if (useMock) {
  const Mock = require('mockjs2')
  require('./services/user')

  Mock.setup({
    timeout: 1000
  })
}

