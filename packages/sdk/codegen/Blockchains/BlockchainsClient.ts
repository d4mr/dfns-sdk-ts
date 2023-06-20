import { DfnsApiClientOptions } from '../../dfnsApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class BlockchainsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async evmBlockchainFee(
    request: T.EvmBlockchainFeeRequest
  ): Promise<T.EvmBlockchainFeeResponse> {
    const path = buildPathAndQuery('/blockchains/:network/fee', {
      path: { network: request.network },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}