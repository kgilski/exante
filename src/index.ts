import { Api, ApiConfig } from './Api'

export class Exante<
  SecurityDataType extends unknown,
> extends Api<SecurityDataType> {
  constructor(
    apiKey: string,
    apiSecret: string,
    apiConfig: ApiConfig<SecurityDataType> = {}
  ) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#basic_authentication
    const auth = btoa(`${apiKey}:${apiSecret}`)

    super({
      ...apiConfig,
      baseApiParams: {
        ...apiConfig.baseApiParams,
        headers: {
          ...apiConfig.baseApiParams?.headers,
          Authorization: `Basic ${auth}`,
        },
      },
    })
  }
}
