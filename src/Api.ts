/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** DailyChange V2 */
export interface DailyChangeResponse {
  /**
   * symbol id
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
  /**
   * previous session close price
   * @example "120.0"
   */
  basePrice?: string
  /**
   * absolute daily change of the price at the moment of request
   * @example "0.005"
   */
  dailyChange?: string
}

/** Trade */
export interface TradeResponse {
  /**
   * trade timestamp
   * @example 1550833075530
   */
  timestamp: number
  /**
   * financial instrument id
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
  /**
   * trade price
   * @example "101.02"
   */
  price?: string
  /**
   * trade size
   * @example "42"
   */
  size?: string
}

/** open positions */
export interface InstrumentPositionResponse {
  /**
   * financial instrument identifier
   * @example "AAPL.NASDAQ"
   */
  id: string
  /**
   * financial instrument type
   * @example "STOCK"
   */
  symbolType: string
  /**
   * quantity on position
   * @example "1"
   */
  quantity: string
  /**
   * currency code of the financial instrument
   * @example "USD"
   */
  currency: string
  /**
   * current financial instrument price
   * @example "120.0"
   */
  price?: string
  /**
   * average position opening price
   * @example "110.0"
   */
  averagePrice?: string
  /**
   * current position PnL
   * @example "10.0"
   */
  pnl?: string
  /**
   * current position PnL in the currency of the report
   * @example "12.1"
   */
  convertedPnl?: string
  /**
   * position value
   * @example "110.0"
   */
  value?: string
  /**
   * position value in the currency of the report
   * @example "133.1"
   */
  convertedValue?: string
  /**
   * accrued interest in the currency of the report (bonds only)
   * @example "133.1"
   */
  accruedInterest?: string
}

export interface Crossrate {
  /**
   * crossrate pair
   * @example "EUR/USD"
   */
  pair: string
  /**
   * optional symbol id, which can be used to request history or subscribe to feed
   * @example "EUR/USD.E.FX"
   */
  symbolId?: string
  /**
   * current crossrate
   * @example "1.2"
   */
  rate: string
}

/** currencies on position */
export interface CurrencyPositionResponse {
  /**
   * currency code
   * @example "EUR"
   */
  code: string
  /**
   * value of position
   * @example "123456.01"
   */
  value: string
  /**
   * converted value of position if crossrates are available
   * @example "123456.01"
   */
  convertedValue?: string
}

/** array of ask levels according to requested feed level */
export interface QuoteSideResponseV3 {
  /**
   * quote value of this level
   * @example "101.02"
   */
  price: string
  /**
   * quantity value of this level
   * @example "100"
   */
  size: string
}

/** account status response */
export interface AccountStatus {
  /**
   * account status
   * @example "Full"
   */
  status: 'ReadOnly' | 'CloseOnly' | 'Full'
  /**
   * account ID
   * @example "ABC1234.001"
   */
  accountId: string
}

/** Subscription status V3 */
export interface StatusResponseV3 {
  /**
   * event timestamp
   * @example 1550833075530
   */
  timestamp: number
  /**
   * financial instrument id
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
  /**
   * stopping reason
   * @example "The requested resource could not be found"
   */
  reason?: string
  /**
   * event type
   * @example "subscription_start"
   */
  event: 'subscription_start' | 'subscription_stop'
}

/** array of ask levels according to requested feed level */
export interface QuoteSideResponse {
  /**
   * quote value of this level
   * @example "101.02"
   */
  value: string
  /**
   * quantity value of this level
   * @example "100"
   */
  size: string
}

/** Transaction V2 */
export interface TransactionResponse {
  /**
   * transaction id
   * @example 42
   */
  id: number
  /**
   * transaction uuid
   * @example "c6e9abcc-e9e8-11e9-81b4-2a2ae2dbcce4"
   */
  uuid: string
  /**
   * transaction type
   * @example "TRADE"
   */
  operationType: string
  /**
   * timestamp of the transaction
   * @example 1503619200000
   */
  when: number
  /**
   * transaction amount
   * @example "101.02"
   */
  sum: string
  /**
   * transaction asset
   * @example "AAPL.NASDAQ"
   */
  asset: string
  /**
   * transaction account id
   * @example "ABC1234.001"
   */
  accountId: string
  /**
   * transaction financial instrument
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
  /**
   * transaction order id
   * @example "d767f127-481f-466c-99b1-4d3069d68b66"
   */
  orderId: string
  /**
   * transaction position in the order
   * @format int64
   * @example 2020
   */
  orderPos: number
  /**
   * value date
   * @example "2020-05-19"
   */
  valueDate: string
  /**
   * parent transaction uuid
   * @example "c6e9abcc-e9e8-11e9-81b4-2a2ae2dbcce4"
   */
  parentUuid?: string
}

/** open positions */
export interface InstrumentPositionResponseV3 {
  /**
   * financial instrument identifier
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
  /**
   * financial instrument type
   * @example "STOCK"
   */
  symbolType: string
  /**
   * quantity on position
   * @example "1"
   */
  quantity: string
  /**
   * currency code of the financial instrument
   * @example "USD"
   */
  currency: string
  /**
   * current financial instrument price
   * @example "120.0"
   */
  price?: string
  /**
   * average position opening price
   * @example "110.0"
   */
  averagePrice?: string
  /**
   * current position PnL
   * @example "10.0"
   */
  pnl?: string
  /**
   * current position PnL in the currency of the report
   * @example "12.1"
   */
  convertedPnl?: string
  /**
   * position value
   * @example "110.0"
   */
  value?: string
  /**
   * position value in the currency of the report
   * @example "133.1"
   */
  convertedValue?: string
  /**
   * accrued interest in the currency of the report (bonds only)
   * @example "133.1"
   */
  accruedInterest?: string
}

/** Transaction V3 */
export interface TransactionResponseV3 {
  /**
   * transaction id
   * @example 42
   */
  id: number
  /**
   * transaction uuid
   * @example "c6e9abcc-e9e8-11e9-81b4-2a2ae2dbcce4"
   */
  uuid: string
  /**
   * transaction type
   * @example "TRADE"
   */
  operationType: string
  /**
   * timestamp of the transaction
   * @example 1503619200000
   */
  timestamp: number
  /**
   * transaction amount
   * @example "101.02"
   */
  sum: string
  /**
   * transaction asset
   * @example "AAPL.NASDAQ"
   */
  asset: string
  /**
   * transaction account id
   * @example "ABC1234.001"
   */
  accountId: string
  /**
   * transaction financial instrument
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
  /**
   * transaction order id
   * @example "d767f127-481f-466c-99b1-4d3069d68b66"
   */
  orderId: string
  /**
   * transaction position in the order
   * @format int64
   * @example 2020
   */
  orderPos: number
  /**
   * value date
   * @example "2020-05-19"
   */
  valueDate: string
  /**
   * parent transaction uuid
   * @example "c6e9abcc-e9e8-11e9-81b4-2a2ae2dbcce4"
   */
  parentUuid?: string
}

/** Quote V2 */
export interface QuoteResponse {
  /**
   * quote timestamp
   * @example 1550833075530
   */
  timestamp: number
  /**
   * financial instrument id
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
  /** array of bid levels according to requested feed level */
  bid: QuoteSideResponse[]
  /** array of ask levels according to requested feed level */
  ask: QuoteSideResponse[]
}

/** AccountSummary V3 */
export interface AccountSummaryResponseV3 {
  /**
   * user account id
   * @example "ABC1234.001"
   */
  accountId: string
  /**
   * currency of the report
   * @example "EUR"
   */
  currency: string
  /**
   * session date of the report
   * @format date
   * @example "2013-02-16"
   */
  sessionDate?: string
  /**
   * timestamp of the report
   * @example 1503619200000
   */
  timestamp: number
  /**
   * total NAV of user in the currency of the report
   * @example "123456.01"
   */
  netAssetValue?: string
  /**
   * free money in the currency of the report
   * @example "123406.01"
   */
  freeMoney?: string
  /**
   * money used for margin in the currency of the report
   * @example "50.0"
   */
  moneyUsedForMargin?: string
  /**
   * margin utilization in fraction of NAV
   * @example "0.0"
   */
  marginUtilization?: string
  /** currencies on position */
  currencies: CurrencyPositionResponse[]
  /** open positions */
  positions: InstrumentPositionResponseV3[]
}

/** Quote V3 */
export interface QuoteResponseV3 {
  /**
   * quote timestamp
   * @example 1550833075530
   */
  timestamp: number
  /**
   * financial instrument id
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
  /** array of bid levels according to requested feed level */
  bid: QuoteSideResponseV3[]
  /** array of ask levels according to requested feed level */
  ask: QuoteSideResponseV3[]
}

/** AccountSummary V2 */
export interface AccountSummaryResponse {
  /**
   * user account id
   * @example "ABC1234.001"
   */
  account: string
  /**
   * currency of the report
   * @example "EUR"
   */
  currency: string
  /**
   * session date of the report
   * @format date
   * @example "2013-02-16"
   */
  sessionDate?: string
  /**
   * timestamp of the report
   * @example 1503619200000
   */
  timestamp: number
  /**
   * total NAV of user in the currency of the report
   * @example "123456.01"
   */
  netAssetValue?: string
  /**
   * free money in the currency of the report
   * @example "123406.01"
   */
  freeMoney?: string
  /**
   * money used for margin in the currency of the report
   * @example "50.0"
   */
  moneyUsedForMargin?: string
  /**
   * margin utilization in fraction of NAV
   * @example "0.0"
   */
  marginUtilization?: string
  /** currencies on position */
  currencies: CurrencyPositionResponse[]
  /** open positions */
  positions: InstrumentPositionResponse[]
}

/** DailyChange V3 */
export interface DailyChangeResponseV3 {
  /**
   * symbol id
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
  /**
   * previous session close price
   * @example "120.0"
   */
  lastSessionClosePrice?: string
  /**
   * absolute daily change of the price at the moment of request
   * @example "0.005"
   */
  dailyChange?: string
}

export interface CrossrateCurrencies {
  /** list of available currencies */
  currencies: string[]
}

export interface Trade {
  /**
   * event type
   * @default "Trade"
   * @example "trade"
   */
  event: 'trade'
  /**
   * respected order ID
   * @format uuid
   * @example "2abe909b-ec53-4091-a0d4-ea4f82aa047c"
   */
  orderId: string
  /**
   * trade timestamp, required api 2.0 only
   * @example "2017-08-14T02:40:00.000Z"
   */
  time: string
  /**
   * trade timestamp, required api 3.0 only
   * @example "2017-08-14T02:40:00.000Z"
   */
  timestamp: string
  /**
   * trade quantity
   * @example "1"
   */
  quantity: string
  /**
   * trade price
   * @example "101.1"
   */
  price: string
  /**
   * order fill serial number for the trade
   * @example "1"
   */
  position: string
}

export interface OrderUpdate {
  /**
   * event type
   * @default "Order"
   * @example "order"
   */
  event: 'order'
  /** order response */
  order: ApiOrder
}

/** order response */
export interface ApiOrder {
  /**
   * unique order ID, required api 2.0 only
   * @example "d642d2ca-fcb5-4910-9de4-7c91f275ca23"
   */
  id: string
  /**
   * unique order ID, required api 3.0 only
   * @example "d642d2ca-fcb5-4910-9de4-7c91f275ca23"
   */
  orderId: string
  /**
   * order place time
   * @format date-time
   * @example "2017-08-14T02:40:00Z"
   */
  placeTime: string
  /**
   * current order modification unique ID
   * @example "2d2b75f2-c4ed-4f7f-b38b-8d8219d4216f"
   */
  currentModificationId: string
  /**
   * associated account ID
   * @example "ABC1234.001"
   */
  accountId: string
  /**
   * associated name
   * @example "root@example.com"
   */
  username?: string
  /**
   * optional client tag to identify or group orders
   * @example "some client tag"
   */
  clientTag?: string
  /** order state response */
  orderState: OrderState
  /** order response parameters */
  orderParameters: OrderParameters
}

/** fill description */
export interface OrderFill {
  /**
   * fill time, required api 2.0 only
   * @format date-time
   * @example "2017-08-14T02:40:00Z"
   */
  time: string
  /**
   * fill time, required api 3.0 only
   * @format date-time
   * @example "2017-08-14T02:40:00Z"
   */
  timestamp: string
  /**
   * fill quantity
   * @example "1"
   */
  quantity: string
  /**
   * fill price
   * @example "120.1"
   */
  price: string
  /**
   * fill serial number
   * @example "1"
   */
  position: string
}

export interface Heartbeat {
  /**
   * event type
   * @default "Heartbeat"
   * @example "heartbeat"
   */
  event: 'heartbeat'
}

/** order response parameters */
export interface OrderParameters {
  /**
   * order side
   * @example "sell"
   */
  side: 'buy' | 'sell'
  /**
   * order quantity
   * @example "10"
   */
  quantity: string
  /**
   * One-Cancels-the-Other group ID if set
   * @format uuid
   * @example "d440b5b6-a40f-44e5-8c3b-a9a419fea7b3"
   */
  ocoGroup?: string
  /**
   * ID of an order on which this order depends
   * @format uuid
   * @example "3a5bf47e-ec54-4782-b4e3-0091164c7c71"
   */
  ifDoneParentId?: string
  /**
   * order duration
   * @example "day"
   */
  duration:
    | 'day'
    | 'fill_or_kill'
    | 'immediate_or_cancel'
    | 'good_till_cancel'
    | 'good_till_time'
    | 'at_the_opening'
    | 'at_the_close'
  /**
   * order type
   * @example "market"
   */
  orderType: 'market' | 'limit' | 'stop' | 'stop_limit' | 'twap' | 'trailing_stop' | 'iceberg'
  /**
   * order stop price, Stop orders only
   * @example "120.0"
   */
  stopPrice?: string
  /**
   * order limit price, Limit orders only
   * @example "130.0"
   */
  limitPrice?: string
  /**
   * order partial quantity, Twap and Iceberg orders only
   * @example "1"
   */
  partQuantity?: string
  /**
   * order place interval, Twap orders only
   * @format int64
   * @example 1
   */
  placeInterval?: number
  /**
   * order price distance, TrailingStop orders only
   * @example "1"
   */
  priceDistance?: string
  /**
   * order expiration if applicable
   * @format date-time
   * @example "2017-08-14T02:40:00Z"
   */
  gttExpiration?: string
  /**
   * associated instrument, required api 2.0 only
   * @example "AAPL.NASDAQ"
   */
  instrument: string
  /**
   * associated instrument, required api 3.0 only
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
}

export interface ModifyParameters {
  /**
   * order modification action
   * @example "replace"
   */
  action: 'replace' | 'cancel'
  /** modification parameters if applicable */
  parameters?: ReplaceParameters
}

/** API error response */
export interface Error {
  /**
   * error group
   * @example "client"
   */
  group: 'server' | 'client'
  /**
   * error text description
   * @example "an error description"
   */
  message: string
}

/** order state response */
export interface OrderState {
  /**
   * current order status
   * @example "working"
   */
  status: 'placing' | 'working' | 'cancelled' | 'pending' | 'filled' | 'rejected'
  /**
   * order last update time
   * @format date-time
   * @example "2017-08-14T02:40:00Z"
   */
  lastUpdate: string
  /** array of order fills */
  fills: OrderFill[]
  /** order rejected reason if applicable */
  reason?: string
}

export interface PlaceParameters {
  /**
   * user account to place order
   * @example "ABC1234.001"
   */
  accountId?: string
  /**
   * order instrument, required api 2.0 only
   * @example "AAPL.NASDAQ"
   */
  instrument?: string
  /**
   * order instrument, required api 3.0 only
   * @example "AAPL.NASDAQ"
   */
  symbolId?: string
  /** order side */
  side: 'buy' | 'sell'
  /**
   * order quantity
   * @example "6"
   */
  quantity: string
  /**
   * order type
   * @example "market"
   */
  orderType: 'market' | 'limit' | 'stop' | 'stop_limit' | 'twap' | 'trailing_stop' | 'iceberg'
  /**
   * order stop price if applicable
   * @example "100.0"
   */
  stopPrice?: string
  /**
   * order limit price if applicable
   * @example "120.0"
   */
  limitPrice?: string
  /**
   * order partial quantity, Twap and Iceberg orders only
   * @example "1.0"
   */
  partQuantity?: string
  /**
   * order place interval, Twap orders only
   * @example "1"
   */
  placeInterval?: string
  /**
   * order price distance, TrailingStop orders only
   * @example "1"
   */
  priceDistance?: string
  /**
   * order duration
   * @example "day"
   */
  duration:
    | 'day'
    | 'fill_or_kill'
    | 'immediate_or_cancel'
    | 'good_till_cancel'
    | 'good_till_time'
    | 'at_the_opening'
    | 'at_the_close'
  /**
   * order expiration if applicable
   * @example "2017-08-14T02:40:00.000Z"
   */
  gttExpiration?: string
  /**
   * optional client tag to identify or group orders
   * @example "some client tag"
   */
  clientTag?: string
  /**
   * optional price of take profit order
   * @example "130.0"
   */
  takeProfit?: string
  /**
   * optional price of stop loss order
   * @example "90.0"
   */
  stopLoss?: string
  /**
   * One-Cancels-the-Other group ID if set
   * @format uuid
   * @example "d440b5b6-a40f-44e5-8c3b-a9a419fea7b3"
   */
  ocoGroup?: string
  /**
   * ID of an order on which this order depends
   * @format uuid
   * @example "3a5bf47e-ec54-4782-b4e3-0091164c7c71"
   */
  ifDoneParentId?: string
}

/** modification parameters if applicable */
export interface ReplaceParameters {
  /**
   * new order quantity to replace
   * @example "7"
   */
  quantity: string
  /**
   * new order limit price if applicable
   * @example "101.0"
   */
  limitPrice?: string
  /**
   * new order stop price if applicable
   * @example "102.0"
   */
  stopPrice?: string
  /**
   * new order price distance if applicable
   * @example "1.0"
   */
  priceDistance?: string
}

/** tick ask. Appears and required only for quote request */
export interface QuoteSideV2 {
  /**
   * value
   * quote value of this level, required api 2.0 only
   * @example "101.02"
   */
  value: string
  /**
   * quantity value of this level
   * @example "100"
   */
  size: string
}

export interface TickResponseV2 {
  /**
   * tick timestamp
   * @example 1550833075530
   */
  timestamp: number
  /**
   * financial instrument id
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
  /** tick bid. Appears and required only for quote request */
  bid?: QuoteSideV2[]
  /** tick ask. Appears and required only for quote request */
  ask?: QuoteSideV2[]
  /**
   * value
   * trade price value. Appears and required only for trade request, required api 2.0 only
   * @example "101.02"
   */
  value?: string
  /**
   * trade size. Appears and required only for trade request
   * @example "42"
   */
  size?: string
}

export interface TickResponseV3 {
  /**
   * tick timestamp
   * @example 1550833075530
   */
  timestamp: number
  /**
   * financial instrument id
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
  /** tick bid. Appears and required only for quote request */
  bid?: QuoteSideV3[]
  /** tick ask. Appears and required only for quote request */
  ask?: QuoteSideV3[]
  /**
   * trade price. Appears and required only for trade request
   * @example "101.02"
   */
  price?: string
  /**
   * trade size. Appears and required only for trade request
   * @example "42"
   */
  size?: string
}

export interface OHLCResponse {
  /**
   * candle timestamp
   * @example 1550833075530
   */
  timestamp: number
  /**
   * candle open price
   * @example "112.975"
   */
  open: string
  /**
   * candle high price
   * @example "113.105"
   */
  high: string
  /**
   * candle low price
   * @example "112.935"
   */
  low: string
  /**
   * candle close price
   * @example "112.965"
   */
  close: string
  /**
   * total volume for specified period. Appears and required only for trade candle request
   * @example "3475756"
   */
  volume: string
}

/** tick ask. Appears and required only for quote request */
export interface QuoteSideV3 {
  /**
   * quote value of this level, required api 3.0 only
   * @example "101.02"
   */
  price: string
  /**
   * quantity value of this level
   * @example "100"
   */
  size: string
}

/** instrument schedule intervals */
export interface ScheduleIntervalResponse {
  /**
   * trading session name
   * @example "Online"
   */
  name: 'PreMarket' | 'MainSession' | 'AfterMarket' | 'Offline' | 'Online' | 'Expired'
  /** trading session period */
  period: IntervalResponse
  orderTypes?: AvailableOrderDurationTypes
}

/** option specific properties */
export interface OptionDataResponse {
  /**
   * option group name
   * @example "OZL.CBOT.U2017.P*"
   */
  optionGroupId: string
  /**
   * option right
   * @example "PUT"
   */
  right: string
  /**
   * option strike price
   * @example "30.5"
   */
  strikePrice: string
}

/** SymbolInfo V3 */
export interface SymbolInfoResponseV3 {
  /**
   * internal symbol id
   * @example "AAPL.NASDAQ"
   */
  symbolId: string
  /**
   * exchange ticker
   * @example "AAPL"
   */
  ticker: string
  /**
   * short symbol description
   * @example "Apple"
   */
  name?: string
  /**
   * long symbol description
   * @example "Apple"
   */
  description: string
  /**
   * group of symbol, applicable to futures and options
   * @example "AAPL"
   */
  group?: string
  /**
   * underlying id of symbol
   * @example "AAPL.TEST"
   */
  underlyingSymbolId?: string
  /**
   * exchange id where the symbol is traded
   * @example "NASDAQ"
   */
  exchange?: string
  /**
   * expiration timestamp in ms if applicable
   * @format int64
   */
  expiration?: string
  /**
   * country of symbol's exchange
   * @example "US"
   */
  country?: string
  /**
   * symbol type
   * @example "Stock"
   */
  symbolType:
    | 'FX_SPOT'
    | 'CURRENCY'
    | 'INDEX'
    | 'STOCK'
    | 'BOND'
    | 'FUND'
    | 'FUTURE'
    | 'OPTION'
    | 'CFD'
    | 'CALENDAR_SPREAD'
  /** option specific properties */
  optionData?: OptionDataResponseV3
  /**
   * minimum possible increment of symbol price
   * @example "0.01"
   */
  minPriceIncrement: string
  /**
   * currency of symbol price
   * @example "EUR"
   */
  currency: string
  /** security identifiers to identify a security */
  identifiers?: IdentifiersResponse
  /** ticker icon url */
  icon?: string
}

/** SymbolInfo V2 */
export interface SymbolInfoResponse {
  /**
   * internal symbol id
   * @example "AAPL.NASDAQ"
   */
  id: string
  /**
   * exchange ticker
   * @example "AAPL"
   */
  ticker: string
  /**
   * short symbol description
   * @example "Apple"
   */
  name?: string
  /**
   * long symbol description
   * @example "Apple"
   */
  description: string
  /**
   * group of symbol, applicable to futures and options
   * @example "AAPL"
   */
  group?: string
  /**
   * underlying id of symbol
   * @example "AAPL.TEST"
   */
  underlyingSymbolId?: string
  /**
   * exchange id where the symbol is traded
   * @example "NASDAQ"
   */
  exchange?: string
  /**
   * expiration timestamp in ms if applicable
   * @format int64
   */
  expiration?: string
  /**
   * country of symbol's exchange
   * @example "US"
   */
  country?: string
  /**
   * symbol type
   * @example "Stock"
   */
  type: 'FX_SPOT' | 'CURRENCY' | 'INDEX' | 'STOCK' | 'BOND' | 'FUND' | 'FUTURE' | 'OPTION' | 'CFD' | 'CALENDAR_SPREAD'
  /** option specific properties */
  optionData?: OptionDataResponse
  /**
   * minimum possible increment of symbol price
   * @example "0.01"
   */
  mpi: string
  /**
   * currency of symbol price
   * @example "EUR"
   */
  currency: string
  /** security identifiers to identify a security */
  identifiers?: IdentifiersResponse
}

export interface DetailedCurrency {
  /**
   * currency identifier
   * @example "EUR"
   */
  id: string
  /**
   * currency fraction digits
   * @format int32
   * @example 8
   */
  fractionDigits: number
  /**
   * currency icon url
   * @example "http://www.example.com/icon.jpg"
   */
  icon?: string
}

export interface RequirementsResponse {
  /**
   * instrument leverage rate value
   * @example "0.2"
   */
  leverage: string
  /**
   * instrument lot size value
   * @example "1.0"
   */
  lotSize: string
  /**
   * instrument contract multiplier
   * @example "1.0"
   */
  contractMultiplier: string
  /**
   * instrument price unit
   * @example "1.0"
   */
  priceUnit: string
  /**
   * instrument units name
   * @example "Shares, Contracts"
   */
  units?: string
}

export interface GroupResponse {
  /**
   * group id
   * @example "NG"
   */
  group: string
  /**
   * group title
   * @example "Henry Hub Natural Gas"
   */
  name?: string
  /** list of symbol types in the group */
  types: 'FX_SPOT' | 'CURRENCY' | 'INDEX' | 'STOCK' | 'BOND' | 'FUND' | 'FUTURE' | 'OPTION' | 'CFD' | 'CALENDAR_SPREAD'
  /**
   * exchange id where the group is traded
   * @example "NYMEX"
   */
  exchange?: string
}

/** option specific properties */
export interface OptionDataResponseV3 {
  /**
   * option group name
   * @example "OZL.CBOT.U2017.P*"
   */
  optionGroupId: string
  /**
   * option right
   * @example "PUT"
   */
  optionRight: string
  /**
   * option strike price
   * @example "30.5"
   */
  strikePrice: string
}

export interface ExchangeResponse {
  /**
   * exchange internal id
   * @example "NASDAQ"
   */
  id: string
  /**
   * full exchange name
   * @example "NASDAQ: National Association of Securities Dealers Automated Quotations"
   */
  name?: string
  /**
   * exchange country
   * @example "US"
   */
  country?: string
}

/** order duration type */
export enum Value {
  Day = 'day',
  AtTheClose = 'at_the_close',
  AtTheOpening = 'at_the_opening',
  FillOrKill = 'fill_or_kill',
  ImmediateOrCancel = 'immediate_or_cancel',
  GoodTillCancel = 'good_till_cancel',
  GoodTillTime = 'good_till_time',
}

export interface CrossrateDetailedCurrencies {
  /** list of available detailed currencies */
  currencies: DetailedCurrency[]
}

export interface AvailableOrderDurationTypes {
  limit?: Value[]
  market?: Value[]
  stop?: Value[]
  stop_limit?: Value[]
  twap?: Value[]
  trailing_stop?: Value[]
  iceberg?: Value[]
}

/** security identifiers to identify a security */
export interface IdentifiersResponse {
  /**
   * ISIN
   * @example "US0378331005"
   */
  ISIN?: string
  /**
   * FIGI
   * @example "BBG000B9XRY4"
   */
  FIGI?: string
  /**
   * CUSIP
   * @example "037833100"
   */
  CUSIP?: string
  /**
   * RIC
   * @example "AAPL.QQ"
   */
  RIC?: string
  /**
   * SEDOL
   * @example "2046251"
   */
  SEDOL?: string
  /**
   * CFI
   * @example "ESVUFR"
   */
  CFI?: string
  /**
   * assetClass
   * @example "EQ"
   */
  assetClass?: string
}

export interface TypeDescriptorResponse {
  /**
   * type id
   * @example "FUTURE"
   */
  id: string
}

/** trading session period */
export interface IntervalResponse {
  /**
   * session start timestamp in ms
   * @format int64
   * @example 1481533200000
   */
  start: number
  /**
   * session end timestamp in ms
   * @format int64
   * @example 1481553000000
   */
  end: number
}

export interface ScheduleResponse {
  /** instrument schedule intervals */
  intervals: ScheduleIntervalResponse[]
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://api-live.exante.eu'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key])
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title No title
 * @baseUrl https://api-live.exante.eu
 *
 *
 * # API versions
 *
 *  We supports several API versions simultaneously:
 *   - Current **stable** API version is 3.0.
 *
 * # Limitations
 *
 *  Current API has the following limitations:
 *   - URL should not be longer than 2000 symbols
 *   - Maximal order depth for both archive and active orders is limited
 *   by settings (1000 by default)
 *
 * # Authentication
 *
 * Bridge offers two form of authentication:
 *   - HTTP Basic auth
 *   - [JWT token](https://jwt.io) auth, which can be used as both authorization header and query parameter. Only HS256
 *   (HMAC-SHA256) signature algo is supported. `iss` claim is used to pass clientId, `sub` is for application id. For example,
 *   build JWT from following parts:
 *
 *   header:
 *
 *   ```
 *   { "alg": "HS256", "typ": "JWT" }
 *   ```
 *
 *   payload:
 *
 *   ```
 *   {
 *     "sub": "77b378e8-3a30-4f85-9017-e839501f7589",
 *     "iss": "469a8180-51fb-408f-a1f0-c3775eeb6ade",
 *     "iat": 1481850484,
 *     "aud": [
 *       "feed",
 *       "symbols",
 *       "ohlc",
 *       "crossrates"
 *     ]
 *   }
 *   ```
 *
 *   base64-encoded and concatenated with dot:
 *
 *   ```
 *   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3N2IzNzhlOC0zYTMwLTRmODUtOTAxNy1lODM5NTAxZjc1ODkiLCJpc3MiOiI0NjlhODE4MC01MWZiLTQwOGYtYTFmMC1jMzc3NWVlYjZhZGUiLCJpYXQiOjE0ODE4NTA0ODQsImF1ZCI6WyJmZWVkIiwic3ltYm9scyIsIm9obGMiLCJjcm9zc3JhdGVzIl19
 *   ```
 *
 *   and finally signed with shared secret:
 *
 *   ```
 *   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3N2IzNzhlOC0zYTMwLTRmODUtOTAxNy1lODM5NTAxZjc1ODkiLCJpc3MiOiI0NjlhODE4MC01MWZiLTQwOGYtYTFmMC1jMzc3NWVlYjZhZGUiLCJpYXQiOjE0ODE4NTA0ODQsImF1ZCI6WyJmZWVkIiwic3ltYm9scyIsIm9obGMiLCJjcm9zc3JhdGVzIl19.Byn6aPDoMnaQUSGMnnddj2rI-noP9cQwa8JLJswgNGk
 *   ```
 *
 * <security-definitions />
 *
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  md = {
    /**
     * @description Return the list of OHLC candles for the specified financial instrument and duration
     *
     * @tags Historical API
     * @name GetOhlc
     * @summary get OHLC (2.0)
     * @request GET:/md/2.0/ohlc/{symbolId}/{duration}
     * @secure
     */
    getOhlc: (
      symbolId: string,
      duration: 60 | 300 | 600 | 900 | 1800 | 3600 | 14400 | 21600 | 86400,
      query?: {
        /**
         * starting timestamp in ms
         * @example 1481565600000
         */
        from?: string
        /**
         * ending timestamp in ms
         * @example 1481572800000
         */
        to?: string
        /**
         * maximum amount of candles to retrieve
         * @default "60"
         * @example 1
         */
        size?: string
        /**
         * tick types - trades or quotes
         * @default "quotes"
         */
        type?: 'quotes' | 'trades'
      },
      params: RequestParams = {}
    ) =>
      this.request<OHLCResponse[], void>({
        path: `/md/2.0/ohlc/${symbolId}/${duration}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the list of ticks for the specified financial instrument
     *
     * @tags Historical API
     * @name GetTicks
     * @summary get ticks (2.0)
     * @request GET:/md/2.0/ticks/{symbolId}
     * @secure
     */
    getTicks: (
      symbolId: string,
      query?: {
        /**
         * starting timestamp in ms
         * @example 1481565600000
         */
        from?: string
        /**
         * ending timestamp in ms
         * @example 1481572800000
         */
        to?: string
        /**
         * maximum amount of ticks to retrieve
         * @default "1000"
         * @example 1
         */
        size?: string
        /**
         * tick types - trades or quotes
         * @default "quotes"
         */
        type?: 'quotes' | 'trades'
      },
      params: RequestParams = {}
    ) =>
      this.request<TickResponseV2[], void>({
        path: `/md/2.0/ticks/${symbolId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the list of OHLC candles for the specified financial instrument and duration
     *
     * @tags Historical API
     * @name GetOhlc1
     * @summary get OHLC (3.0)
     * @request GET:/md/3.0/ohlc/{symbolId}/{duration}
     * @secure
     */
    getOhlc1: (
      symbolId: string,
      duration: 60 | 300 | 600 | 900 | 1800 | 3600 | 14400 | 21600 | 86400,
      query?: {
        /**
         * starting timestamp in ms
         * @example 1481565600000
         */
        from?: string
        /**
         * ending timestamp in ms
         * @example 1481572800000
         */
        to?: string
        /**
         * maximum amount of candles to retrieve
         * @default "60"
         * @example 1
         */
        size?: string
        /**
         * tick types - trades or quotes
         * @default "quotes"
         */
        type?: 'quotes' | 'trades'
      },
      params: RequestParams = {}
    ) =>
      this.request<OHLCResponse[], void>({
        path: `/md/3.0/ohlc/${symbolId}/${duration}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the list of ticks for the specified financial instrument
     *
     * @tags Historical API
     * @name GetTicks1
     * @summary get ticks (3.0)
     * @request GET:/md/3.0/ticks/{symbolId}
     * @secure
     */
    getTicks1: (
      symbolId: string,
      query?: {
        /**
         * starting timestamp in ms
         * @example 1481565600000
         */
        from?: string
        /**
         * ending timestamp in ms
         * @example 1481572800000
         */
        to?: string
        /**
         * maximum amount of ticks to retrieve
         * @default "1000"
         * @example 1
         */
        size?: string
        /**
         * tick types - trades or quotes
         * @default "quotes"
         */
        type?: 'quotes' | 'trades'
      },
      params: RequestParams = {}
    ) =>
      this.request<TickResponseV3[], void>({
        path: `/md/3.0/ticks/${symbolId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the list of user accounts and their statuses
     *
     * @tags Accounts API
     * @name GetAccounts
     * @summary get user accounts
     * @request GET:/md/{version}/accounts
     * @secure
     */
    getAccounts: (version: '2.0' | '3.0', params: RequestParams = {}) =>
      this.request<AccountStatus[], any>({
        path: `/md/${version}/accounts`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the list of daily changes for requested instruments
     *
     * @tags Daily change API
     * @name GetDailyChange
     * @summary get daily changes
     * @request GET:/md/{version}/change/{symbolId}
     * @secure
     */
    getDailyChange: (version: '2.0' | '3.0', symbolId: string, params: RequestParams = {}) =>
      this.request<DailyChangeResponse | DailyChangeResponseV3, void>({
        path: `/md/${version}/change/${symbolId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the list of available currencies
     *
     * @tags Crossrates API
     * @name GetCurrencies
     * @summary get list of available currencies
     * @request GET:/md/{version}/crossrates
     * @secure
     */
    getCurrencies: (version: '2.0' | '3.0', params: RequestParams = {}) =>
      this.request<CrossrateCurrencies, any>({
        path: `/md/${version}/crossrates`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the crossrate from one currency to another
     *
     * @tags Crossrates API
     * @name GetCrossrate
     * @summary get crossrate
     * @request GET:/md/{version}/crossrates/{from}/{to}
     * @secure
     */
    getCrossrate: (version: '2.0' | '3.0', from: string, to: string, params: RequestParams = {}) =>
      this.request<Crossrate, void>({
        path: `/md/${version}/crossrates/${from}/${to}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return list of exchanges
     *
     * @tags Symbols API
     * @name GetExchanges
     * @summary get exchanges
     * @request GET:/md/{version}/exchanges
     * @secure
     */
    getExchanges: (version: '2.0' | '3.0', params: RequestParams = {}) =>
      this.request<ExchangeResponse[], any>({
        path: `/md/${version}/exchanges`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the requested exchange financial instruments
     *
     * @tags Symbols API
     * @name GetExchangeSymbols
     * @summary get instruments by exchange
     * @request GET:/md/{version}/exchanges/{exchangeId}
     * @secure
     */
    getExchangeSymbols: (version: '2.0' | '3.0', exchangeId: string, params: RequestParams = {}) =>
      this.request<SymbolInfoResponse | SymbolInfoResponseV3, void>({
        path: `/md/${version}/exchanges/${exchangeId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the trades stream for the specified financial instrument.
     *
     * @tags Live feed API
     * @name GetTradesStream
     * @summary get trades stream
     * @request GET:/md/{version}/feed/trades/{symbolIds}
     * @secure
     */
    getTradesStream: (version: '3.0', symbolIds: string, params: RequestParams = {}) =>
      this.request<TradeResponse | StatusResponseV3, void>({
        path: `/md/${version}/feed/trades/${symbolIds}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the life quote stream for the specified financial instrument.
     *
     * @tags Live feed API
     * @name GetQuoteStream
     * @summary get quote stream
     * @request GET:/md/{version}/feed/{symbolIds}
     * @secure
     */
    getQuoteStream: (
      version: '2.0' | '3.0',
      symbolIds: string,
      query?: {
        /**
         * quote level to request
         * @default "best_price"
         * @example "best_price"
         */
        level?: 'best_price' | 'market_depth'
      },
      params: RequestParams = {}
    ) =>
      this.request<QuoteResponse | QuoteResponseV3 | StatusResponseV3, void>({
        path: `/md/${version}/feed/${symbolIds}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the last quote for the specified financial instrument.
     *
     * @tags Live feed API
     * @name GetQuoteLast
     * @summary get last quote
     * @request GET:/md/{version}/feed/{symbolIds}/last
     * @secure
     */
    getQuoteLast: (version: '2.0' | '3.0', symbolIds: string, params: RequestParams = {}) =>
      this.request<QuoteResponse | QuoteResponseV3 | StatusResponseV3, void>({
        path: `/md/${version}/feed/${symbolIds}/last`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return list of available instrument groups
     *
     * @tags Symbols API
     * @name GetGroups
     * @summary get instrument groups
     * @request GET:/md/{version}/groups
     * @secure
     */
    getGroups: (version: '2.0' | '3.0', params: RequestParams = {}) =>
      this.request<GroupResponse[], any>({
        path: `/md/${version}/groups`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return financial instruments which belong to specified group
     *
     * @tags Symbols API
     * @name GetGroupSymbols
     * @summary get instruments by group
     * @request GET:/md/{version}/groups/{groupId}
     * @secure
     */
    getGroupSymbols: (version: '2.0' | '3.0', groupId: string, params: RequestParams = {}) =>
      this.request<SymbolInfoResponse | SymbolInfoResponseV3, void>({
        path: `/md/${version}/groups/${groupId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return financial instrument which has the nearest expiration in the group
     *
     * @tags Symbols API
     * @name GetGroupNearestSymbol
     * @summary get nearest expiration in group
     * @request GET:/md/{version}/groups/{groupId}/nearest
     * @deprecated
     * @secure
     */
    getGroupNearestSymbol: (version: '2.0', groupId: string, params: RequestParams = {}) =>
      this.request<SymbolInfoResponse, void>({
        path: `/md/${version}/groups/${groupId}/nearest`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the summary for the specified account
     *
     * @tags Account summary API
     * @name GetAccountSummaryWithoutDate
     * @summary get account summary
     * @request GET:/md/{version}/summary/{id}/{currency}
     * @secure
     */
    getAccountSummaryWithoutDate: (version: '2.0' | '3.0', id: string, currency: string, params: RequestParams = {}) =>
      this.request<AccountSummaryResponse | AccountSummaryResponseV3, void>({
        path: `/md/${version}/summary/${id}/${currency}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the summary for the specified account and session date
     *
     * @tags Account summary API
     * @name GetAccountSummary
     * @summary get account summary by date
     * @request GET:/md/{version}/summary/{id}/{date}/{currency}
     * @secure
     */
    getAccountSummary: (
      version: '2.0' | '3.0',
      id: string,
      date: string,
      currency: string,
      params: RequestParams = {}
    ) =>
      this.request<AccountSummaryResponse | AccountSummaryResponseV3, void>({
        path: `/md/${version}/summary/${id}/${date}/${currency}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return list of instruments available for authorized user
     *
     * @tags Symbols API
     * @name GetSymbols
     * @summary get instrument list
     * @request GET:/md/{version}/symbols
     * @secure
     */
    getSymbols: (version: '2.0' | '3.0', params: RequestParams = {}) =>
      this.request<SymbolInfoResponse | SymbolInfoResponseV3, any>({
        path: `/md/${version}/symbols`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the detailed list of available currencies
     *
     * @tags Symbols API
     * @name GetDetailedCurrencies
     * @summary get detailed list of available currencies
     * @request GET:/md/{version}/symbols/currencies
     * @secure
     */
    getDetailedCurrencies: (version: '2.0' | '3.0', params: RequestParams = {}) =>
      this.request<CrossrateDetailedCurrencies, any>({
        path: `/md/${version}/symbols/currencies`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return instrument available for authorized user
     *
     * @tags Symbols API
     * @name GetSymbol
     * @summary get instrument
     * @request GET:/md/{version}/symbols/{symbolId}
     * @secure
     */
    getSymbol: (version: '2.0' | '3.0', symbolId: string, params: RequestParams = {}) =>
      this.request<SymbolInfoResponse | SymbolInfoResponseV3, void>({
        path: `/md/${version}/symbols/${symbolId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return financial schedule for requested instrument
     *
     * @tags Symbols API
     * @name GetSymbolSchedule
     * @summary get instrument schedule
     * @request GET:/md/{version}/symbols/{symbolId}/schedule
     * @secure
     */
    getSymbolSchedule: (
      version: '2.0' | '3.0',
      symbolId: string,
      query?: {
        /**
         * show available order types
         * @example true
         */
        types?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<ScheduleResponse, void>({
        path: `/md/${version}/symbols/${symbolId}/schedule`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return additional parameters for requested instrument
     *
     * @tags Symbols API
     * @name GetSymbolSpecification
     * @summary get instrument specification
     * @request GET:/md/{version}/symbols/{symbolId}/specification
     * @secure
     */
    getSymbolSpecification: (version: '2.0' | '3.0', symbolId: string, params: RequestParams = {}) =>
      this.request<RequirementsResponse, void>({
        path: `/md/${version}/symbols/${symbolId}/specification`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the list of transactions with the specified filter
     *
     * @tags Transactions API
     * @name GetTransactions
     * @summary get transactions
     * @request GET:/md/{version}/transactions
     * @secure
     */
    getTransactions: (
      version: '2.0' | '3.0',
      query?: {
        /**
         * transaction UUID
         * @format uuid
         * @example "c6e9abcc-e9e8-11e9-81b4-2a2ae2dbcce4"
         */
        uuid?: string
        /**
         * transaction account ID
         * @example "ABC1234.001"
         */
        accountId?: string
        /**
         * filter transactions by the financial instrument
         * @example "AAPL.NASDAQ"
         */
        symbolId?: string
        /**
         * filter transactions by the asset
         * @example "USD"
         */
        asset?: string
        /**
         * transaction type or comma-separated list of transaction types to filter
         * @example "TRADE"
         */
        operationType?: string
        /**
         * offset to list transactions
         * @example 0
         */
        offset?: number
        /**
         * limit response to this amount of transactions
         * @example 1
         */
        limit?: number
        /**
         * order transactions by descending (DESC) or ascending (ASC)
         * @default "ASC"
         * @example "ASC"
         */
        order?: 'ASC' | 'DESC'
        /** starting timestamp of transactions in ISO format */
        fromDate?: string
        /** ending timestamp of transactions in ISO format */
        toDate?: string
        /**
         * filter transactions by the order id
         * @format uuid
         * @example "d767f127-481f-466c-99b1-4d3069d68b66"
         */
        orderId?: string
        /**
         * filter transactions by the position in the order
         * @example 0
         */
        orderPos?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<TransactionResponse | TransactionResponseV3, void>({
        path: `/md/${version}/transactions`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return list of known instrument types
     *
     * @tags Symbols API
     * @name GetTypes
     * @summary get instrument types
     * @request GET:/md/{version}/types
     * @secure
     */
    getTypes: (version: '2.0' | '3.0', params: RequestParams = {}) =>
      this.request<TypeDescriptorResponse[], any>({
        path: `/md/${version}/types`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return financial instruments of the requested type
     *
     * @tags Symbols API
     * @name GetTypeSymbols
     * @summary get instruments by type
     * @request GET:/md/{version}/types/{symbolType}
     * @secure
     */
    getTypeSymbols: (version: '2.0' | '3.0', symbolType: string, params: RequestParams = {}) =>
      this.request<SymbolInfoResponse | SymbolInfoResponseV3, void>({
        path: `/md/${version}/types/${symbolType}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  trade = {
    /**
     * @description Return the list of historical orders
     *
     * @tags Orders API
     * @name GetOrders
     * @summary get historical orders
     * @request GET:/trade/{version}/orders
     * @secure
     */
    getOrders: (
      version: '2.0' | '3.0',
      query?: {
        /**
         * the limit for max items of the order list
         * @example 10
         */
        limit?: string
        /**
         * the start date
         * @example "2017-05-18T10:00:00.000Z"
         */
        from?: string
        /**
         * the stop date
         * @example "2017-05-21T17:59:59.999Z"
         */
        to?: string
        /**
         * the user account list, required api 2.0 only
         * @example "ABC1234.001"
         */
        account?: string
        /**
         * the user account list, required api 3.0 only
         * @example "ABC1234.001"
         */
        accountId?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<ApiOrder[], Error>({
        path: `/trade/${version}/orders`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Place new trading order
     *
     * @tags Orders API
     * @name PlaceOrder
     * @summary place order
     * @request POST:/trade/{version}/orders
     * @secure
     */
    placeOrder: (version: '2.0' | '3.0', data: PlaceParameters, params: RequestParams = {}) =>
      this.request<ApiOrder[], Error>({
        path: `/trade/${version}/orders`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the list of active trading orders
     *
     * @tags Orders API
     * @name GetActiveOrders
     * @summary get active orders
     * @request GET:/trade/{version}/orders/active
     * @secure
     */
    getActiveOrders: (
      version: '2.0' | '3.0',
      query?: {
        /**
         * the limit for max items of the order list
         * @example 10
         */
        limit?: string
        /**
         * the user account list, required api 2.0 only
         * @example "ABC1234.001"
         */
        account?: string
        /**
         * the user account list, required api 3.0 only
         * @example "ABC1234.001"
         */
        accountId?: string
        /**
         * the instrument identifier, required api 2.0 only
         * @example "AAPL.NASDAQ"
         */
        instrument?: string
        /**
         * the instrument identifier, required api 3.0 only
         * @example "AAPL.NASDAQ"
         */
        symbolId?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<ApiOrder[], Error>({
        path: `/trade/${version}/orders/active`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Return the order with specified identifier
     *
     * @tags Orders API
     * @name GetOrder
     * @summary get order
     * @request GET:/trade/{version}/orders/{orderId}
     * @secure
     */
    getOrder: (version: '2.0' | '3.0', orderId: string, params: RequestParams = {}) =>
      this.request<ApiOrder, Error>({
        path: `/trade/${version}/orders/${orderId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Replace or cancel trading order
     *
     * @tags Orders API
     * @name ModifyOrder
     * @summary modify order
     * @request POST:/trade/{version}/orders/{orderId}
     * @secure
     */
    modifyOrder: (version: '2.0' | '3.0', orderId: string, data: ModifyParameters, params: RequestParams = {}) =>
      this.request<ApiOrder, Error>({
        path: `/trade/${version}/orders/${orderId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Order updates stream via HTTP
     *
     * @tags Orders stream API
     * @name OrderUpdatesHttp
     * @summary order updates stream
     * @request GET:/trade/{version}/stream/orders
     * @secure
     */
    orderUpdatesHttp: (version: '2.0' | '3.0', params: RequestParams = {}) =>
      this.request<OrderUpdate | Heartbeat, any>({
        path: `/trade/${version}/stream/orders`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Trades updates stream via HTTP
     *
     * @tags Trades stream API
     * @name TradesHttp
     * @summary trades stream
     * @request GET:/trade/{version}/stream/trades
     * @secure
     */
    tradesHttp: (version: '2.0' | '3.0', params: RequestParams = {}) =>
      this.request<Trade | Heartbeat, any>({
        path: `/trade/${version}/stream/trades`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  }
}
