import { AxiosRequestConfig, AxiosResponse } from './../types/index'

export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse

  constructor(
    message: string,
    config: AxiosRequestConfig,
    code: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)
    this.code = code
    this.config = config
    this.request = request
    this.response = response
    this.isAxiosError = true

    // 如果父类是内置类，ts会出现无法调用父类方法的问题，因此要加上下面这行来解决此问题
    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: AxiosRequestConfig,
  code: string | null,
  request?: any,
  response?: any
) {
  return new AxiosError(message, config, code, request, response)
}
