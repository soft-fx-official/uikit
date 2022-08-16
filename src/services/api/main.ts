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

export interface PortalPsAccentpayModelsApiCardWithdrawModel {
  merchantCode?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiFinanceOperationModelBase {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsAccentpayModelsApiAddModel {
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsAccentpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsAccentpayModelsApiNoticeModel {
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsAccentpayModelsApiWithdrawModel {
  merchantCode?: string
  paymentOptionCode?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  accentpayAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface OauthCoreModelsUserInfoUserInfoViewModel {
  /** User Identifier */
  id?: string

  /** eWallet number */
  mainAccountNumber?: string

  /** User full name */
  userName?: string

  /** User first name */
  firstName?: string

  /** User last name */
  lastName?: string

  /** Nickname */
  nickname?: string

  /** Login email */
  email?: string

  /** Primary phone number */
  phone?: string

  /** Country */
  country?: string

  /** Primary language */
  language?: string

  /** Domain account */
  domain?: string

  /** Domain account */
  userTypeName?: string

  /** profiles */
  profiles?: OauthCoreModelsUserInfoProfileInfoViewModel[]

  /** List of the user's accounts */
  accounts?: OauthCoreModelsAccountInfoViewModel[]
}

export interface OauthCoreModelsUserInfoProfileInfoViewModel {
  name?: string
  comment?: string
  ssn?: string

  /** @format int32 */
  title?: number

  /** @format int32 */
  amlStatus?: number
  amlInfo?: string
  firstName?: string
  lastName?: string
  nickname?: string
  preferredLanguageCode?: string
  firstNameOriginal?: string
  lastNameOriginal?: string
  translationStatusName?: string

  /** @format date-time */
  dateOfBirth?: string
  nationalityCode?: string
  nameOriginal?: string
  occupation?: string
  position?: string
  isDirector?: boolean
  webSiteUrl?: string
  employmentStatusCode?: string
  employeeName?: string
  passportIdNumber?: string
  referenceType?: string
  profileType?: string
  address?: OauthCoreModelsUserInfoAddressInfoViewModel
  contacts?: OauthCoreModelsUserInfoContactInfoViewModel[]
  country?: string
  documentSetTypeName?: string
}

export interface OauthCoreModelsAccountInfoViewModel {
  /**
   * Account login
   * @format int64
   */
  login?: number

  /** User name */
  name?: string

  /** Account type */
  type?: string

  /** Platform type */
  platformType?: string

  /**
   * Creation date
   * @format date-time
   */
  registrationDate?: string

  /** Server name */
  serverName?: string

  /** Account number */
  accountNumber?: string
}

export interface OauthCoreModelsUserInfoAddressInfoViewModel {
  addressTypeName?: string
  cityName?: string
  cityNameOriginal?: string
  zipCode?: string
  zipCodeSuffix?: string
  addressValueOriginal?: string
  addressValue?: string
}

export interface OauthCoreModelsUserInfoContactInfoViewModel {
  contactMethodName?: string
  value?: string
  isAchieved?: boolean
  isPrimary?: boolean
  isAllowed?: boolean
  isValid?: boolean
  isVerified?: boolean
}

export interface OauthCoreModelsAccountDetailsResponseModel {
  /** Account number */
  accountNumber?: string

  /**
   * The ratio of the trader's funds to the size of the broker's credit
   * @format int32
   */
  leverage?: number

  /**
   * The value of an account if all positions were closed
   * @format double
   */
  equity?: number

  /**
   * The amount of money in a trader's account that is required as a deposit in order to open and maintain a leveraged trading position
   * @format double
   */
  margin?: number
}

export interface PortalModuleAuthApiModelsAccountsResponseModel {
  internalTransferEnabled?: boolean
  types?: PortalModuleAuthApiModelsAccountsResponseElementModel[]
}

export interface PortalModuleAuthApiModelsAccountsResponseElementModel {
  type?: string
  typeLocalized?: string

  /**
   * Type display order
   * @format int32
   */
  order?: number
  groups?: PortalModuleAuthApiModelsAccountGroupModel[]
}

export interface PortalModuleAuthApiModelsAccountGroupModel {
  group?: string
  groupLocalized?: string

  /**
   * Group display order
   * @format int32
   */
  order?: number
  accounts?: PortalModuleAuthApiModelsAccountModel[]
}

export interface PortalModuleAuthApiModelsAccountModel {
  accountNumber?: string
  pockets?: PortalModuleAuthApiModelsPocketModel[]
  operationSummaryUrl?: string
}

export interface PortalModuleAuthApiModelsPocketModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  currency?: string
  amount?: string
  blockedAmount?: string
  operationSummaryUrl?: string
}

export interface PortalPsAdvcashModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsAdvcashModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsAdvcashModelsApiDepositParametersModel
}

export interface PortalPsAdvcashModelsApiDepositParametersModel {
  ac_account_email?: string
  ac_sci_name?: string
  ac_amount?: string
  ac_currency?: string
  ac_order_id?: string
  ac_sign?: string
  ac_comments?: string
}

export interface PortalPsAdvcashModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  advcashAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
}

export interface PortalPsAdvcashModelsApiWithdrawModel {
  domainName?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
  withdrawalType?: 'EmailWalletId' | 'AdvcashCard' | 'BankCard'
  advcashAccount?: string
  emailAddress?: string
  advcashCardType?: 'Virtual' | 'Plastic'
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
}

export interface PortalPsAirtmModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsAirtmModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsAirtmModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  airtmEmail?: string

  /** @format date-time */
  paymentDate?: string
}

export interface PortalPsAirtmModelsApiWithdrawModel {
  domainName?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  airtmEmail?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsAlfabankModelsApiAddModel {
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsAlfabankModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsAlfabankModelsApiWithdrawModel {
  domainName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsAlfabankModelsApiAvailableWithdrawBalanceRequestModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsAlfabankModelsApiAvailableWithdrawBalanceModel {
  balance?: string
  currency?: string
}

export interface PortalPsAllpay88ModelsApiProvincesRequestModel {
  provinceCode?: string
}

export interface PortalPsAllpay88ModelsApiProvinceModel {
  code?: string
  originalName?: string
  cities?: PortalPsAllpay88ModelsApiCityModel[]
}

export interface PortalPsAllpay88ModelsApiCityModel {
  code?: string
  originalName?: string
}

export interface PortalPsAllpay88ModelsApiBankModel {
  code?: string
  originalName?: string
}

export interface PortalPsAllpay88ModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsAllpay88ModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsAllpay88ModelsApiWithdrawModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  cardNumber?: string
  cardholderName?: string
  provinceCode?: string
  cityCode?: string
  bankCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsAstropayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsAstropayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsAstropayModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  oneTouchPhoneNumber?: string

  /** @format date-time */
  paymentDate?: string
}

export interface PortalPsAstropayModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  oneTouchPhoneNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalModuleAuthExternalModelsTokenIssueRequestModel {
  /** Factor */
  Factor?: string

  /** Value */
  Value?: string

  /** Hash */
  Hash?: string
}

export interface PortalModuleAuthExternalModelsTokenIssueResponseModel {
  /** Factor */
  Factor?: string

  /** Hash */
  Hash?: string
}

export interface PortalModuleAuthExternalModelsRegisteredDeviceModel {
  Token?: OauthCoreModelsTokenModel
  ClientId?: string
  DeviceSecret?: string
}

export interface OauthCoreModelsTokenModel {
  /** Access token */
  access_token?: string

  /** Refresh token */
  refresh_token?: string

  /** Token type */
  token_type?: string

  /**
   * The lifetime in seconds of the access token
   * @format int32
   */
  expires_in?: number

  /** User name */
  userName?: string

  /**
   * Indicates date-time when the token was issued
   * @format date-time
   */
  '.issued'?: string

  /**
   * Indicates date-time when the token will be expired
   * @format date-time
   */
  '.expires'?: string
}

export interface PortalModuleAuthExternalModelsTokenReissueSendCodeModel {
  /** Factor */
  Factor?: string
}

export interface PortalModuleAuthExternalModelsRegistrationModel {
  /** Email, Phone */
  ContactData?: PortalModuleAuthExternalModelsExternalDeviceContactModel[]

  /** Marker Key-Value pairs */
  Markers?: PortalModuleAuthExternalModelsExternalDeviceMarkerModel[]

  /** Device Id */
  DeviceId?: string

  /** Device IMEI */
  DeviceImei?: string

  /** Device Model */
  DeviceModel?: string

  /** Device NMS Token */
  DeviceNmsToken?: string
}

export interface PortalModuleAuthExternalModelsExternalDeviceContactModel {
  /** Possible Types are: Email, Phone */
  Type?: string

  /** Contact value in the appropriate format */
  Value?: string
}

export interface PortalModuleAuthExternalModelsExternalDeviceMarkerModel {
  Key?: string
  Value?: string
}

export interface PortalModuleAuthExternalModelsBindingRequestModel {
  /** Client unique identifier */
  ClientId?: string

  /** Time-Based One-Time Password */
  Code?: string

  /** Request Id */
  RequestId?: string

  /** Client phone number */
  PhoneNumber?: string

  /** Device Id */
  DeviceId?: string

  /** Device IMEI */
  DeviceImei?: string

  /** Device Model */
  DeviceModel?: string

  /** Device NMS Token */
  DeviceNmsToken?: string

  /** Is Public */
  IsPublic?: string

  /** Factor */
  Factor?: string

  /** Value */
  Value?: string

  /** Hash */
  Hash?: string

  /** Binding Value */
  BindingId?: string
}

export interface PortalModuleAuthExternalModelsBindingSendCodeModel {
  /** Client Id */
  ClientId?: string

  /** One Time Password Code */
  Code?: string

  /** Factor */
  Factor?: string

  /** Contact Value */
  ContactValue?: string
}

export interface PortalModuleAuthExternalModelsUpdateDeviceSettingModel {
  /** Device Id */
  DeviceId?: string

  /** Parameter code */
  Code?: string

  /** New parameter value */
  NewValue?: string
}

export interface PortalModuleAuthExternalModelsDeviceSettingRequestModel {
  /** Device identifier */
  DeviceId?: string
}

export interface PortalModuleAuthExternalModelsDeviceSettingModel {
  /** Parameter code */
  Code?: string

  /** Parameter value */
  Value?: string

  /** Is Setting Editable */
  IsEditable?: boolean
}

export interface PortalModuleAuthExternalModelsSignInModel {
  ClientId?: string
  Key?: string
}

export interface PortalPsAwepayModelsApiBanksRequestModel {
  currencyCode?: string
}

export interface PortalPsAwepayModelsApiBankModel {
  code?: string
  name?: string
}

export interface PortalPsAwepayModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsAwepayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsAwepayModelsDepositParametersModel
}

export interface PortalPsAwepayModelsDepositParametersModel {
  card_type?: string

  /** @format int32 */
  sid?: number
  tid?: string
  ref1?: string
  firstname?: string
  lastname?: string
  address?: string
  postcode?: string
  suburb_city?: string
  state?: string
  country?: string
  email?: string
  phone?: string
  'item_name[]'?: string
  'item_desc[]'?: string
  'item_no[]'?: string

  /** @format int32 */
  'item_quantity[]'?: number

  /** @format double */
  'item_amount_unit[]'?: number
  successurl?: string
  failureurl?: string
  postback_url?: string
}

export interface PortalPsAwepayModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  beneficiaryAccountNumber?: string
  bankCode?: string
  bankBranchName?: string
  bankProvinceName?: string
  bankCityName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsBankModelsApiBankProductModel {
  /** Product code */
  code?: string

  /** Product name */
  name?: string

  /** Currencies */
  currencies?: AtCoreModelsCurrencyModel[]
}

export interface AtCoreModelsCurrencyModel {
  /** Currency code (ISO 4217) */
  code?: string

  /** Official currency name */
  name?: string

  /**
   * Specifies how many digits to the right of the decimal points should be reported
   * @format int32
   */
  precision?: number

  /** Currency group (Crypto/Fiat/etc.) */
  group?: string
}

export interface AtBankModelsCreateAccountRequestModel {
  /** Bank product code */
  bankProductCode?: string

  /** ISO currency code */
  currencyCode?: string
}

export interface AtBankModelsAccountResponseModel {
  /** Type of the created account */
  accountType?: string

  /** Account name */
  accountName?: string

  /** Bank product */
  bankProductCode?: string

  /** ISO currency code of the created account */
  currencyCode?: AtCoreModelsCurrencyModel

  /** Account number */
  accountNumber?: string

  /** National account number */
  nationalAccountNumber?: string

  /** National bank code */
  nationalBankCode?: string

  /** Swift code */
  swiftCode?: string
}

export interface PortalPsBepaidModelsApiAddModel {
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsBepaidModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  isFrameMode?: boolean
  gatewayScriptUrl?: string
}

export interface PortalPsBepaidModelsApiWithdrawModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsBfopayModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsBfopayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsBfopayModelsDepositParametersModel
}

export interface PortalPsBfopayModelsDepositParametersModel {
  MemberID?: string
  TerminalID?: string
  InterfaceVersion?: string
  KeyType?: string
  PayID?: string
  TradeDate?: string
  TransID?: string
  OrderMoney?: string
  ProductName?: string
  ReturnUrl?: string
  PageUrl?: string
  NoticeType?: string
  Signature?: string
}

export interface PortalPsBfopayModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsBfopayModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  beneficiaryName?: string
  bankName?: string
  bankBranchName?: string
  bankProvinceName?: string
  bankCityName?: string
  bankAccountNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardIssueLimitRequestModel {
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  cardFormTypeCode?: string
  currencyCode?: string
  countryCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardIssueLimitModel {
  isExceeded?: boolean

  /** @format int32 */
  limit?: number

  /** @format int32 */
  amountIssued?: number
}

export interface PortalPsCreditdebitcardsModelsApiCardTemplateSaveModel {
  countryCode?: string
  paymentTypeCode?: string
  paymentRouteCode?: string
  currencyCode?: string
  cardNumber?: string
  expirationMonth?: string
  expirationYear?: string
  cardholderName?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Masked card number */
  cardNumber?: string
  expirationDate?: PortalPsCreditdebitcardsModelsApiCardExpirationModel
  cardholderName?: string

  /** Plastic/Virtual */
  cardFormTypeName?: string

  /** Card currency code (ISO 4217) */
  currencyCode?: string
  cardProductCode?: string
  paymentTypeCode?: string

  /** American Express/Discover/Mastercard/Visa/etc. */
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string

  /** Active/Blocked/Deactivated/Expired/Pending/Requested */
  cardStatusName?: string

  /** Card account */
  accountNumber?: string

  /** Card country code (ISO 3166-1 alpha-2) */
  countryCode?: string

  /**
   * Card creation date
   * @format date-time
   */
  created?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardExpirationModel {
  month?: string
  year?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardTemplateDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardsRequestModel {
  merchantCode?: string
  paymentTypeCode?: string

  /** American Express/Discover/Mastercard/Visa/etc. */
  paymentOptionCode?: string
  paymentRouteCode?: string

  /** Active/Blocked/Deactivated/Expired/Pending/Requested */
  cardStatusName?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardFullDetailsModel {
  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** Card account number */
  accountNumber?: string

  /** Card number */
  pan?: string

  /** Card currency */
  currency?: PortalPsCreditdebitcardsModelsApiCardCurrencyModel

  /** Card status */
  status?: PortalPsCreditdebitcardsModelsApiCardStatusModel

  /** Card form type */
  formType?: PortalPsCreditdebitcardsModelsApiCardFormTypeModel

  /** Card payment option (MasterCard/Visa/Visa Electron/etc.) */
  type?: string

  /**
   * Time when card was issued
   * @format date-time
   */
  created?: string

  /** Card balance */
  balance?: PortalPsCreditdebitcardsModelsApiCardBalanceModel

  /** Card expiration date */
  expiration?: PortalPsCreditdebitcardsModelsApiCardExpirationModel

  /** Cardholder name */
  cardholder?: string
  deliveryInfo?: PortalPsCreditdebitcardsModelsApiDeliveryInfoModel
}

export interface PortalPsCreditdebitcardsModelsApiCardCurrencyModel {
  /** Currency code (ISO 4217) */
  iso_code?: string
  name?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardStatusModel {
  /**
   * 0 - Active/1 - Requested/2 - Pending/3 - Expired/4 - Deactivated/5 - Blocked
   * @format int32
   */
  code?: number

  /** Active/Blocked/Deactivated/Expired/Pending/Requested */
  name?: string
  nameLocalized?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardFormTypeModel {
  /** Plastic/Virtual */
  name?: string
  nameLocalized?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardBalanceModel {
  /** Card currency code (ISO 4217) */
  currency?: string

  /** Account currency available amount */
  availableAmount?: string

  /** Account currency locked amount */
  lockedAmount?: string
}

export interface PortalPsCreditdebitcardsModelsApiDeliveryInfoModel {
  /** Country code (ISO 3166-1 alpha-2) */
  countryCode?: string

  /** City name */
  cityName?: string

  /** Address */
  address?: string

  /** Zip code */
  zipCode?: string

  /** Delivery type name */
  deliveryTypeName?: string

  /** Local mobile phone number */
  mobilePhoneNumber?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardBalanceRequestModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardCurrencyBalanceModel {
  /** @format double */
  availableAmount?: number

  /** @format double */
  lockedAmount?: number
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalPsCreditdebitcardsModelsApiDeliveryInfoRequestModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardProductsRequestModel {
  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardProductsModel {
  /** Available card form types */
  formTypes?: PortalPsCreditdebitcardsModelsApiFormTypeGroupModel[]
}

export interface PortalPsCreditdebitcardsModelsApiFormTypeGroupModel {
  /** Card form type (Plastic/Virtual) */
  formType?: string

  /** Currencies available for specified card form type */
  currencies?: PortalPsCreditdebitcardsModelsApiCurrencyGroupModel[]
}

export interface PortalPsCreditdebitcardsModelsApiCurrencyGroupModel {
  /** Card currency code (ISO 4217) */
  currencyCode?: string

  /** Payment option types available for specified card currency and card form type */
  paymentOptionTypes?: PortalPsCreditdebitcardsModelsApiPaymentOptionTypeGroupModel[]
}

export interface PortalPsCreditdebitcardsModelsApiPaymentOptionTypeGroupModel {
  /** Payment type code */
  paymentType?: string

  /** Payment option code (MasterCard/Visa/Visa Electron/etc.) */
  paymentOption?: string

  /** Payment route code */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Available card products */
  productTypes?: PortalPsCreditdebitcardsModelsApiCardProductModel[]
}

export interface PortalPsCreditdebitcardsModelsApiCardProductModel {
  /** Card product code */
  code?: string

  /** Card product name */
  name?: string

  /** Issue fee paid to the card-issuing bank for specified card product */
  price?: FinanceEshopModelsApiPriceModel
  isDeliveryRequired?: boolean
}

export interface FinanceEshopModelsApiPriceModel {
  /** @format double */
  amount?: number
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalPsCreditdebitcardsModelsApiIssueCardModel {
  /** Payment type code */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route code */
  paymentRoute?: string

  /** Card product type code */
  productType?: string

  /** Pass phraze */
  passPhraze?: string

  /** User email */
  email?: string

  /** User mobile phone number */
  mobilePhoneNumber?: string

  /** Card delivery info (required for plastic cards) */
  deliveryInfo?: PortalPsCreditdebitcardsModelsApiDeliveryInfoCreateModel

  /** Account to withdraw card issue fee from */
  account?: string

  /** Account currency code (ISO 3166-1 alpha-2) */
  accountCurrency?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiDeliveryInfoCreateModel {
  /** Country code (ISO 3166-1 alpha-2) */
  country?: string

  /** City name */
  city?: string

  /** Address */
  address?: string

  /** Zip code */
  zipCode?: string

  /** Delivery type name */
  deliveryType?: string

  /** Local mobile phone number */
  mobilePhoneNumber?: string
}

export interface PortalPsCreditdebitcardsModelsApiActivateCardModel {
  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Card activation code provided by user */
  activationCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiFreezeCardModel {
  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiDefrostCardModel {
  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiSendSecurityCodeModel {
  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardDetailsResponseModel {
  /** CVV code */
  cvv?: string

  /** PIN code */
  pin?: string

  /** Masked card number */
  ppan?: string

  /** Is security code retrieved successfully */
  isRetrieveSuccessful?: boolean
}

export interface PortalPsCreditdebitcardsModelsApiCardTransactionsRequestModel {
  /** Card account number */
  account?: string

  /**
   * Start date of statement period (account creation date by default)
   * @format date-time
   */
  dateFrom?: string

  /**
   * End date of statement period
   * @format date-time
   */
  dateTo?: string

  /** @format int32 */
  pageNumber?: number

  /** @format int32 */
  pageSize?: number
}

export interface PortalPsCreditdebitcardsModelsApiCardTransactionsResponseModel {
  transactions?: PortalPsCreditdebitcardsModelsApiCardTransactionModel[]

  /**
   * Current page number
   * @format int32
   */
  pageNumber?: number

  /** @format int32 */
  pageSize?: number

  /**
   * Total number of records
   * @format int32
   */
  count?: number
}

export interface PortalPsCreditdebitcardsModelsApiCardTransactionModel {
  /** @format date-time */
  created?: string

  /** Credit/Debit */
  balanceOperationTypeName?: string
  description?: string

  /** @format double */
  accountAmount?: number
  accountCurrency?: AtCoreModelsCurrencyModel

  /** @format double */
  amount?: number
  currency?: AtCoreModelsCurrencyModel

  /** @format double */
  exchangeRate?: number
  fees?: PortalPsCreditdebitcardsModelsApiCardTransactionFeeModel[]
  status?: PortalPsCreditdebitcardsModelsApiCardTransactionStatusModel

  /** MCC obsolete */
  merchantCategoryCode?: string

  /** Merchant info */
  merchant?: PortalPsCreditdebitcardsModelsApiMerchantInfoModel
}

export interface PortalPsCreditdebitcardsModelsApiCardTransactionFeeModel {
  /** @format double */
  amount?: number
  currency?: AtCoreModelsCurrencyModel
  description?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardTransactionStatusModel {
  name?: string
  description?: string
}

export interface PortalPsCreditdebitcardsModelsApiMerchantInfoModel {
  categoryCode?: string
  name?: string
  country?: string
  city?: string
}

export interface PortalPsCreditdebitcardsModelsApiReplaceCardModel {
  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Update delivery info if needed */
  deliveryInfo?: PortalPsCreditdebitcardsModelsApiDeliveryInfoUpdateModel

  /** Number of the ewallet from which the replace fee should be withdrawn */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiDeliveryInfoUpdateModel {
  /** City name */
  city?: string

  /** Address */
  address?: string

  /** Zip code */
  zipCode?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardNoticeModel {
  /**
   * Deposit finance operation ID
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  financeOperationId?: string

  /** Email used in the payment system */
  email?: string

  /** First 6 digits of the card number */
  cardNumberFirstSixDigits?: string

  /** Last 4 digits of the card number */
  cardNumberLastFourDigits?: string

  /** Transaction ID in the payment system */
  transactionId?: string
}

export interface PortalPsCashuModelsApiCashExCitiesRequestModel {
  countryCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashExCityModel {
  id?: string
  name?: string
}

export interface PortalPsCashuModelsApiCashExServicesRequestModel {
  countryCode?: string
  cityId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashExServiceModel {
  description?: string
  deliverySpeed?: string

  /** @format double */
  fee?: number
}

export interface PortalPsCashuModelsApiCashExAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  cityId?: string
  cityName?: string
  serviceDeliverySpeed?: string
  address?: string
  fullName?: string
  email?: string
  phone?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashExDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsCashuModelsCashExDepositParametersModel
}

export interface PortalPsCashuModelsCashExDepositParametersModel {
  orderReference?: string
  checkSum?: string
  language?: string
}

export interface PortalPsCashuModelsApiCashExNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
  countryCode?: string
  cityName?: string
  address?: string
  fullName?: string
  email?: string
  phone?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashuAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashuDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsCashuModelsCashuDepositParametersModel
}

export interface PortalPsCashuModelsCashuDepositParametersModel {
  Transaction_Code?: string
}

export interface PortalPsCashuModelsApiCashuNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  cashuAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashuCashuWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  cashuAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashuDirectCountryModel {
  code?: string
  name?: string
}

export interface PortalPsCashuModelsApiCashuDirectAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  fullName?: string
  email?: string
  phone?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashuDirectDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  requestId?: string
  voucherNumber?: string
  voucherUrl?: string
}

export interface PortalPsCashuModelsApiCashuDirectNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  fullName?: string
  email?: string
  phone?: string
  orderId?: string

  /** @format date-time */
  transactionDate?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCoinpaymentsModelsApiCreateDepositAddressModel {
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string
  reuse?: boolean

  /** Domain name */
  domainName?: string
}

export interface PortalPsCoinpaymentsModelsApiDepositAddressModel {
  address?: string
  alternativeAddress?: string
  destinationTag?: string
  publicKey?: string
}

export interface PortalPsCoinpaymentsModelsApiSaveTemplateModel {
  currencyCode?: string
  address?: string
  destinationTag?: string
  pbnTag?: string
  name?: string
  isDefault?: boolean

  /** Domain name */
  domainName?: string
}

export interface PortalPsCoinpaymentsModelsApiTemplateModel {
  currencyCode?: string
  name?: string
  address?: string
  destinationTag?: string
  pbnTag?: string
  isDefault?: boolean
}

export interface PortalPsCoinpaymentsModelsApiGetTemplatesModel {
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCoinpaymentsModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCoinpaymentsModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  checkoutUrl?: string
}

export interface PortalPsCoinpaymentsModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  txnId?: string
  verificationCode?: string
  sendTx?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCoinpaymentsModelsApiWithdrawModel {
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  address?: string
  destinationTag?: string
  pbnTag?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalModuleCommentModelsApiCommentTemplateTypeModel {
  name?: string
}

export interface PortalModuleCommentModelsApiRequestCommentModel {
  commentTemplateTypeName?: string

  /** Domain name */
  domainName?: string
}

export interface PortalModuleCommentModelsApiCommentModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  description?: string
}

export interface PortalExtensionsForexcupModelsApiRequestModelsCompetitionsListRequestModel {
  status?: string[]
  currencyCode?: string
}

export interface PortalExtensionsForexcupModelsJsonCompetitionModel {
  /**
   * Competition Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** Competition name */
  name?: string

  /** Competition code */
  code?: string

  /** Path to competition logo image */
  logoUrl?: string

  /**
   * Competition start time
   * @format date-time
   */
  from?: string

  /**
   * Competition end time
   * @format date-time
   */
  to?: string

  /**
   * Total prize
   * @format double
   */
  prize?: number

  /** Currency in which prize is calculated, optional */
  currency?: AtCoreModelsCurrencyModel

  /**
   * Number of users who took part in competition
   * @format int32
   */
  rating?: number

  /** Competition status */
  status?: string

  /** Is it possible to join competition */
  isJoinCompetitionAvailable?: boolean
}

export interface PortalExtensionsForexcupModelsApiRequestModelsCompetitionCodeModel {
  /** Competition code */
  code?: string
}

export interface PortalExtensionsForexcupModelsJsonCompetitionScheduleModel {
  /**
   * Registration open time
   * @format date-time
   */
  registrationOpen?: string

  /**
   * Registration close time
   * @format date-time
   */
  registrationClose?: string

  /**
   * Competition start time
   * @format date-time
   */
  competitionStart?: string

  /**
   * Competition end time
   * @format date-time
   */
  competitionEnd?: string
}

export interface PortalExtensionsForexcupModelsApiRequestModelsTopCompetitionRequestModel {
  /**
   * From Date
   * @format date-time
   */
  fromDate?: string

  /**
   * To Date
   * @format date-time
   */
  toDate?: string

  /**
   * Count
   * @format int32
   */
  count?: number

  /** Currency Code */
  currencyCode?: string
}

export interface PortalExtensionsForexcupModelsJsonTopCompetitionCollectionModel {
  /**
   * Search date from
   * @format date-time
   */
  from?: string

  /**
   * Search date to
   * @format date-time
   */
  to?: string

  /** Top competitions list */
  competitions?: PortalExtensionsForexcupModelsJsonTopCompetitionModel[]
}

export interface PortalExtensionsForexcupModelsJsonTopCompetitionModel {
  /**
   * Competition Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** Competition Name */
  name?: string

  /**
   * Number of users who took part in competition
   * @format int32
   */
  rating?: number

  /**
   * Total prize
   * @format double
   */
  totalPrize?: number

  /**
   * Guaranteed prize
   * @format double
   */
  guaranteedPrize?: number

  /**
   * Bonus for profit
   * @format double
   */
  profitBonus?: number

  /** Currency in which prize and bonus is calculated */
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalExtensionsForexcupModelsApiRequestModelsUserInfoRequestModel {
  /**
   * User Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /** Currency Code */
  currencyCode?: string
}

export interface PortalExtensionsForexcupModelsJsonUserInfoModel {
  /**
   * User Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /** User nickname */
  name?: string

  /**
   * Registration date
   * @format date-time
   */
  registrationDate?: string

  /**
   * Number of user victories
   * @format int32
   */
  wins?: number

  /**
   * Number of user defeats
   * @format int32
   */
  losses?: number

  /**
   * User total profit in all competitions
   * @format double
   */
  totalProfit?: number

  /**
   * User total prize in all competitions
   * @format double
   */
  totalPrize?: number

  /** Currency in which total prize is calculated, optional */
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalExtensionsForexcupModelsApiRequestModelsTopTradesRequestModel {
  /**
   * UserId
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /**
   * From Date
   * @format date-time
   */
  fromDate?: string

  /**
   * To Date
   * @format date-time
   */
  toDate?: string

  /**
   * Count
   * @format int32
   */
  count?: number
}

export interface PortalExtensionsForexcupModelsJsonUserCompetitionModel {
  /**
   * Competition Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** Competition info */
  competition?: PortalExtensionsForexcupModelsJsonCompetitionInfoModel

  /** Competition status */
  status?: string

  /**
   * Prize won by user
   * @format double
   */
  prize?: number

  /** Currency in which prize is calculated */
  prizeCurrency?: AtCoreModelsCurrencyModel

  /**
   * Number of users who took part in competition
   * @format int32
   */
  rating?: number

  /**
   * Place taken by user
   * @format int32
   */
  place?: number

  /**
   * Game account
   * @format int64
   */
  account?: number

  /**
   * Game account balance
   * @format double
   */
  balance?: number

  /** Game account currency */
  accountCurrency?: AtCoreModelsCurrencyModel
}

export interface PortalExtensionsForexcupModelsJsonCompetitionInfoModel {
  /** Competition name */
  name?: string

  /** Competition code */
  code?: string
}

export interface PortalExtensionsForexcupModelsJsonTradeModel {
  /** @format int64 */
  account?: number
  symbol?: string

  /** @format double */
  volume?: number
  type?: string

  /** @format double */
  profit?: number
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalExtensionsForexcupModelsApiRequestModelsCompetitionMemberRequestModel {
  /**
   * Page Number
   * @format int32
   */
  pageNumber?: number

  /**
   * Page Size
   * @format int32
   */
  pageSize?: number

  /** Search Input */
  searchInput?: string

  /** Competition code */
  code?: string
}

export interface PortalExtensionsForexcupModelsJsonCompetitorModel {
  /**
   * User Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /**
   * Join date
   * @format date-time
   */
  joinDate?: string

  /** User nickname */
  name?: string

  /** User country code */
  country?: string

  /**
   * Game account number
   * @format int64
   */
  account?: number

  /**
   * Profit percent
   * @format double
   */
  profitPercent?: number

  /**
   * Profit for today
   * @format double
   */
  todayProfit?: number

  /**
   * Trades count
   * @format int32
   */
  trades?: number

  /**
   * Game account balance
   * @format double
   */
  balance?: number

  /**
   * Bonus
   * @format double
   */
  bonus?: number

  /** Currency in which balance calculated, optional */
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalExtensionsForexcupModelsApiRequestModelsAnnualPrizeRequestModel {
  /**
   * UserId
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /**
   * Year
   * @format int32
   */
  year?: number

  /** Currency Code */
  currencyCode?: string
}

export interface PortalExtensionsForexcupModelsJsonUserMonthlyPrizeModel {
  /** Month */
  month?: string

  /**
   * Total prize won by user in the month
   * @format double
   */
  totalPrize?: number

  /** Currency in which total prize is calculated */
  totalPrizeCurrency?: AtCoreModelsCurrencyModel

  /** List of won prizes by currency */
  prizesByCurrency?: SystemCollectionsGenericKeyValuePair2SystemDecimalMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089AtCoreModelsCurrencyModelAtCoreVersion1000CultureNeutralPublicKeyTokenNull[]

  /** Competition in which prize was won */
  competition?: string
}

export interface PortalExtensionsForexcupModelsApiRequestModelsGameAccountKeyModel {
  /**
   * Account Key
   * @format int64
   */
  accountKey?: number
}

export interface PortalExtensionsForexcupModelsJsonGameAccountModel {
  /**
   * User Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /** Game account type */
  type?: string

  /**
   * Game account key
   * @format int64
   */
  account?: number

  /** Competition info */
  competition?: PortalExtensionsForexcupModelsJsonCompetitionInfoModel

  /** User nickname */
  name?: string

  /** Leverage */
  leverage?: string

  /**
   * Initial balance
   * @format double
   */
  initialBalance?: number

  /**
   * Active balance
   * @format double
   */
  activeBalance?: number

  /**
   * Equity
   * @format double
   */
  equity?: number

  /**
   * Free margin
   * @format double
   */
  freeMargin?: number

  /**
   * Profit percent
   * @format double
   */
  profitPercent?: number

  /**
   * Profit
   * @format double
   */
  profit?: number

  /** Game account currency */
  currency?: AtCoreModelsCurrencyModel

  /**
   * Time when account characteristics were last updated
   * @format date-time
   */
  updated?: string
}

export interface PortalExtensionsForexcupModelsJsonUserTradingDetailsModel {
  /** Symbol */
  symbol?: string

  /**
   * Volume
   * @format double
   */
  volume?: number

  /**
   * Number of profit trades
   * @format int32
   */
  profitTrades?: number

  /**
   * Number of loss trades
   * @format int32
   */
  lossTrades?: number

  /**
   * Total trades number
   * @format int32
   */
  totalTrades?: number

  /**
   * Profit
   * @format double
   */
  profit?: number

  /** Game account currency */
  currency?: AtCoreModelsCurrencyModel

  /**
   * Profit percent
   * @format double
   */
  profitPercent?: number
}

export interface PortalExtensionsForexcupModelsJsonAccountFeaturesModel {
  leverage?: string

  /** @format int32 */
  maxOrders?: number

  /** @format double */
  initialBalance?: number
  currency?: AtCoreModelsCurrencyModel
  securitylLotParameters?: PortalExtensionsForexcupModelsJsonSecuritylLotParametersModel[]
}

export interface PortalExtensionsForexcupModelsJsonSecuritylLotParametersModel {
  /** @format double */
  minLotSize?: number

  /** @format double */
  maxLotSize?: number

  /** @format double */
  lotStep?: number
  symbols?: string[]
}

export interface PortalExtensionsForexcupModelsApiRequestModelsCompetitionPrizeRequestModel {
  /** Currency Code */
  currencyCode?: string

  /** Competition code */
  code?: string
}

export interface PortalExtensionsForexcupModelsJsonPrizeModel {
  /**
   * Total prize
   * @format double
   */
  totalPrize?: number

  /** Currency in which total prize is calculated, optional */
  currency?: AtCoreModelsCurrencyModel

  /** Places */
  places?: PortalExtensionsForexcupModelsJsonPrizePlaceModel[]
}

export interface PortalExtensionsForexcupModelsJsonPrizePlaceModel {
  /**
   * Place
   * @format int32
   */
  place?: number

  /**
   * Prize
   * @format double
   */
  prize?: number

  /** Prize currency */
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalExtensionsForexcupModelsApiRequestModelsJoinCompetitionModel {
  /** Competition code */
  code?: string
}

export interface PortalExtensionsForexcupModelsJsonJoinModel {
  /** @format int64 */
  account?: number
  competitionName?: string
  traderPassword?: string
  platform?: string

  /** @format int32 */
  leverage?: number
  room?: string

  /** @format date-time */
  startDate?: string

  /** @format date-time */
  endDate?: string
}

export interface FinanceConfigurationModelsApiCountryModel {
  code?: string
  name?: string
}

export interface PortalPsCryptoModelsApiCryptoAddressCreateModel {
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string

  /** Number of the ewallet where the money will be deposited to */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** Payment currency code (ISO 4217) */
  currencyCode?: string

  /**
   * True (by default) - allows to reuse the crypto addresses which were previously used for this type of payments;
   * False - enforces the creation of a new crypto address
   */
  reuse?: boolean

  /** Domain name */
  domainName?: string
}

export interface PortalPsCryptoModelsApiCryptoAddressModel {
  /** Crypto address value */
  value?: string

  /** Destination tag */
  paymentTag?: string
}

export interface PortalPsCryptoModelsApiCryptoAddressResponseModel {
  /** Generated crypto address */
  address?: string

  /** Extra identifier */
  destinationTag?: string
}

export interface PortalPsCryptoModelsApiAddModel {
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string

  /** Number of the ewallet where the money will be deposited to */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** Payment currency code (ISO 4217) */
  currencyCode?: string

  /**
   * True (by default) - allows to reuse the crypto addresses which were previously used for this type of payments;
   * False - enforces the creation of a new crypto address
   */
  reuse?: boolean

  /** Domain name */
  domainName?: string
}

export interface PortalPsCryptoModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  cryptoAddress?: PortalPsCryptoModelsApiCryptoAddressModel
}

export interface PortalPsCryptoModelsApiNoticeModel {
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string
  transactionId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsCryptoModelsApiWithdrawModel {
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  cryptoAddress?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDcpayModelsApiProvincesRequestModel {
  paymentOptionCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDcpayModelsApiProvinceModel {
  code?: string
  name?: string
}

export interface PortalPsDcpayModelsApiCitiesRequestModel {
  paymentOptionCode?: string
  bankProvinceCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDcpayModelsApiCityModel {
  code?: string
  name?: string
}

export interface PortalPsDcpayModelsApiBankModel {
  code?: string
  name?: string
  nameOriginal?: string
}

export interface PortalPsDcpayModelsApiAddModel {
  paymentOptionCode?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDcpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsDcpayModelsDepositParametersModel
}

export interface PortalPsDcpayModelsDepositParametersModel {
  apiversion?: string
  version?: string
  merchant_account?: string
  merchant_order?: string
  merchant_product_desc?: string
  first_name?: string
  last_name?: string
  address1?: string
  city?: string
  zip_code?: string
  country?: string
  phone?: string
  email?: string
  amount?: string
  currency?: string
  ipaddress?: string
  return_url?: string
  server_return_url?: string
  control?: string
}

export interface PortalPsDcpayModelsApiWithdrawModel {
  paymentOptionCode?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  bankProvinceCode?: string
  bankCityCode?: string
  bankCode?: string
  bankBranchAddress?: string
  bankAccountNumber?: string
  firstName?: string
  lastName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDectaModelsApiAddModel {
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDectaModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  invoiceUrl?: string
}

export interface PortalPsDectaModelsApiCardLoadModel {
  /** Number of the ewallet which the money will be withdrawn from */
  accountNumber?: string

  /**
   * Amount in account currency
   * @format double
   */
  amount?: number

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /**
   * Identifier of the Decta card which the money will be deposited to
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Currency code (ISO 4217) */
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDectaModelsApiCardUnloadModel {
  /**
   * Identifier of the Decta card which the money will be withdrawn from
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /**
   * Amount in currency
   * @format double
   */
  amount?: number

  /** Currency code (ISO 4217) */
  currencyCode?: string

  /** Number of the ewallet which the money will be deposited to */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDeltapayModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  firstName?: string
  lastName?: string
  countryCode?: string
  state?: string
  cityName?: string
  address?: string
  zipCode?: string
  email?: string
  phone?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDeltapayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsDeltapayModelsDepositParametersModel
}

export interface PortalPsDeltapayModelsDepositParametersModel {
  affiliate?: string
  paymethod?: string
  post_method?: string
  processing_mode?: string
  redirect?: string
  notification_url?: string
  order_id?: string
  terminal_name?: string
  first_name?: string
  last_name?: string
  country?: string
  state?: string
  city?: string
  address1?: string
  zip?: string
  telephone?: string
  amount?: string
  currency?: string
  email?: string
  card_type?: string
  card_number?: string
  expiry_mo?: string
  expiry_yr?: string
  product_description?: string
  customer_ip?: string
}

export interface PortalPsDengionlineModelsApiDengiOnlineAddModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDengionlineModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  parameters?: PortalPsDengionlineModelsApiDepositParametersModel
}

export interface PortalPsDengionlineModelsApiDepositParametersModel {
  project?: string
  source?: string
  order_id?: string
  nickname?: string
  amount?: string
  paymentCurrency?: string
  action?: string
}

export interface PortalPsDengionlineModelsApiDengiOnlineNoticeModel {
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDinpayModelsApiBankModel {
  code?: string
  name?: string
  originalName?: string
}

export interface PortalPsDinpayModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDinpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsDinpayModelsDepositParametersModel
}

export interface PortalPsDinpayModelsDepositParametersModel {
  merchant_code?: string
  service_type?: string
  notify_url?: string
  interface_version?: string
  input_charset?: string
  sign_type?: string
  order_no?: string
  order_time?: string
  order_amount?: string
  product_name?: string
  sign?: string
}

export interface PortalPsDinpayModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  dinpayAccount?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDinpayModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  bankCode?: string
  bankAccountNumber?: string
  firstName?: string
  lastName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDixipayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsDixipayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsDixipayModelsDepositParametersModel
}

export interface PortalPsDixipayModelsDepositParametersModel {
  recipient_account?: string
  order?: string
  product?: string
  url_return?: string
  url_cancel?: string
  url_status?: string
  url_logo?: string
  lang?: string
  amount?: string
  currency?: string
  api_key?: string
}

export interface PortalPsDixipayModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  dixiPayAccount?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string
}

export interface PortalPsDixipayModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  dixiPayAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export type PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel = object

export interface PortalModuleConfigurationModelsApiDomainDomainModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  domainName?: string
  themeName?: string
  isBlocked?: boolean
  isPrimary?: boolean
  apiUrl?: string
  displayAccountNumber?: string
  accountNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  SwiftBicPlusIbanLocalId?: string
  swiftBicPlusIbanRecordKey?: string
}

export interface PortalModuleConfigurationModelsApiDomainDomainConfigurationCreateModel {
  domainName?: string
  themeName?: string
  isPrimary?: boolean
  apiUrl?: string
  accountNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  swiftBicPlusIbanLocalId?: string
}

export interface PortalModuleConfigurationModelsApiDomainDomainConfigurationUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  domainName?: string
  themeName?: string
  isPrimary?: boolean
  apiUrl?: string
  accountNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  swiftBicPlusIbanLocalId?: string
}

export interface PortalModuleConfigurationModelsApiDomainDomainConfigurationDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
}

export interface PortalModuleConfigurationModelsApiDomainDomainIsBlockedModel {
  isBlocked?: boolean

  /** Domain name */
  domainName?: string
}

export interface PortalModuleUtilsModelsApiDownloadRequestFileModel {
  name?: string

  /** Domain name */
  domainName?: string
}

export interface PortalModuleUtilsModelsApiDownloadFileModel {
  name?: string

  /** @format byte */
  binaryData?: string
}

export interface PortalModuleUtilsModelsApiDownloadRequestDownloadsModel {
  /** Domain name */
  domainName?: string
}

export interface PortalModuleUtilsModelsApiDownloadDownloadModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  url?: string

  /** @format date-time */
  modified?: string
  name?: string
  comment?: string
  roles?: PortalModuleUtilsModelsApiDownloadRoleModel[]

  /** Domain name */
  domainName?: string
}

export interface PortalModuleUtilsModelsApiDownloadRoleModel {
  name?: string
  code?: string
}

export interface PortalModuleUtilsModelsApiDownloadCreateDownloadModel {
  name?: string
  comment?: string
  roles?: PortalModuleUtilsModelsApiDownloadRoleModel[]

  /** Domain name */
  domainName?: string
}

export interface PortalModuleUtilsModelsApiDownloadUpdateDownloadModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  name?: string
  comment?: string
  roles?: PortalModuleUtilsModelsApiDownloadRoleModel[]

  /** Domain name */
  domainName?: string
}

export interface PortalModuleUtilsModelsApiDownloadDeleteDownloadModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsDukascopyModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOption?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsDukascopyModelsApiRedirectModel {
  redirectUrl?: string
}

export interface PortalPsDukascopyModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOption?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsDukascopyModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  transactionId?: string
}

export interface PortalPsEcommpayModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  isCreditDebitCardsPayment?: boolean
}

export interface PortalPsEcommpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsEcommpayModelsApiNoticeModel {
  domainName?: string
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string
}

export interface PortalPsEcommpayModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  cardNumber?: string
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsEpayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOptionCode?: string
}

export interface PortalPsEpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  paymentUrl?: string
}

export interface PortalPsEpayModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  epayAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
}

export interface PortalPsEpayModelsApiWithdrawModel {
  state?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  accountNumber?: string
  accountCurrencyCode?: string
  domainName?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOptionCode?: string
  epayAccount?: string
}

export interface PortalPsEpaymentsModelsApiCardWithdrawModel {
  merchantCode?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsEpaymentsModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsEpaymentsModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsEpaymentsModelsDepositParametersModel
}

export interface PortalPsEpaymentsModelsDepositParametersModel {
  partnerid?: string
  sign?: string
  orderid?: string
  amount?: string
  currency?: string
  successurl?: string
  declineurl?: string
  details?: string
}

export interface PortalPsEpaymentsModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  ePaymentsAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsEpaymentsModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  ePaymentsAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsEpaymentsModelsApiLinkUserModel {
  /** Domain name */
  domainName?: string
}

export interface PortalPsEpaymentsModelsApiLinkUserResultModel {
  url?: string
}

export interface PortalPsEpaymentsModelsApiLinkCardModel {
  /** Domain name */
  domainName?: string
}

export interface PortalPsEpaymentsModelsApiLinkCardResultModel {
  url?: string
}

export interface PortalPsEripModelsApiPaymentInfoRequestModel {
  /** Domain name */
  domainName?: string
}

export interface PortalPsEripModelsApiPaymentInfoModel {
  paymentInstruction?: string
  accountNumber?: string
}

export interface PortalPsEripModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentId?: string
}

export interface FinanceEshopModelsApiDeliveryConfigurationRequestModel {
  /** Country code (ISO 3166-1 alpha-2) */
  country?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceEshopModelsApiDeliveryConfigurationModel {
  country?: FinanceEshopModelsApiCountryModel

  /** List of delivery types available for country */
  deliveryTypes?: FinanceEshopModelsApiDeliveryTypeModel[]
}

export interface FinanceEshopModelsApiCountryModel {
  /** Country code (ISO 3166-1 alpha-2) */
  code?: string
  name?: string
}

export interface FinanceEshopModelsApiDeliveryTypeModel {
  deliveryTypeName?: string
  price?: FinanceEshopModelsApiPriceModel

  /** Indicates whether user should provide local phone number to be able to use this delivery type */
  isLocalPhoneRequired?: boolean
}

export interface FinanceConversionModelsApiCurrencyRateRequestModel {
  /** Base currency */
  currencyCodeFrom?: string

  /** Quote currency */
  currencyCodeTo?: string

  /** Is need to forward */
  isForward?: boolean

  /** Domain name */
  domainName?: string
}

export interface FinanceConversionModelsCurrencyRateInfoModel {
  CurrencyCodeFrom?: string
  CurrencyCodeTo?: string
  RateValue?: string
  IsRateMissing?: boolean
}

export interface FinanceConversionModelsCurrencyRateCollectionResponseModel {
  result?: FinanceConversionModelsCurrencyRateElementModel[]
}

export interface FinanceConversionModelsCurrencyRateElementModel {
  /**
   * Currency rate date-time
   * @format date-time
   */
  date?: string

  /** Symbol name */
  symbol?: string

  /** ISO code of base currency */
  currencyFrom?: AtCoreModelsCurrencyModel

  /** ISO code of target currency */
  currencyTo?: AtCoreModelsCurrencyModel

  /**
   * Currency rate value
   * @format double
   */
  value?: number
}

export interface FinanceConversionModelsCurrencyRateRequestModel {
  /**
   * Conversion date
   * @format date-time
   */
  date?: string

  /**
   * Currency rate value
   * @format double
   */
  value?: number

  /** Base currency */
  currencyFrom?: string

  /** Quote currency */
  currencyTo?: string

  /** Domain name */
  domainName?: string
}

export interface PortalModuleUtilsModelsApiCurrencyRateHistoryResponseModel {
  /** Date */
  date?: string
  result?: PortalModuleUtilsModelsApiCurrencyRateHistoryResponseElementModel[]
}

export interface PortalModuleUtilsModelsApiCurrencyRateHistoryResponseElementModel {
  base?: AtCoreModelsCurrencyModel
  rates?: PortalModuleUtilsModelsApiCurrencyRateResponseModel[]
}

export interface PortalModuleUtilsModelsApiCurrencyRateResponseModel {
  /** ISO currency code */
  code?: string

  /**
   * currency rate value
   * @format double
   */
  value?: number
}

export interface PortalModuleUtilsModelsApiExchangeRequestModel {
  /** ISO code of base currency */
  from?: string

  /** ISO code of target currency */
  to?: string

  /**
   * Amount to convert
   * @format double
   */
  amount?: number

  /** User's PinCode */
  pinCode?: string
}

export interface PortalModuleUtilsModelsApiCurrencyExchangeCreateModel {
  /**
   * Sale amount
   * @format double
   */
  amount?: number

  /** Base currency code (ISO 4217) */
  currencyFrom?: string

  /** Target currency code (ISO 4217) */
  currencyTo?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsFasapayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  fasaPayAccount?: string
}

export interface PortalPsFasapayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsFasapayModelsDepositParametersModel
}

export interface PortalPsFasapayModelsDepositParametersModel {
  fp_acc?: string
  fp_item?: string
  fp_amnt?: string
  fp_currency?: string
  fp_comments?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  fp_merchant_ref?: string
  fp_acc_from?: string
  fp_store?: string
  fp_success_url?: string
  fp_succes_method?: string
  fp_fail_url?: string
  fp_fail_method?: string
  fp_status_url?: string
  fp_status_method?: string
}

export interface PortalPsFasapayModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  fasaPayAccount?: string

  /** @format date-time */
  transactionDate?: string
  batchCode?: string
}

export interface PortalPsFasapayModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  fasaPayAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsFocalpaymentsModelsApiAddModel {
  paymentRouteCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsFocalpaymentsModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsFocalpaymentsModelsDepositParametersModel
}

export interface PortalPsFocalpaymentsModelsDepositParametersModel {
  Merchant?: string
  Site?: string
  Amount?: string
  Currency?: string
  TransRef?: string
  Product?: string
  PaymentType?: string
  lang?: string
  TestTrans?: string
  ReturnUrlSuccess?: string
  ReturnUrlFailure?: string
}

export interface PortalPsFocalpaymentsModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  focalPaymentsAccountName?: string
  focalPaymentsAccountNumber?: string
  nationalIdCardNumber?: string
  bankName?: string
  bankBranchName?: string
  bankProvinceName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalGatewayApiModelsPaymentRequestModel {
  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchantCode?: string

  /** Type of finance operation (Add/Notify/Withdraw) */
  financeOperationType?: string

  /** Payment currency code (ISO 4217) */
  currencyCode?: string
  inPaymentType?: string
  inPaymentOption?: string
  inPaymentRoute?: string
  inCurrency?: string
  outPaymentType?: string
  outPaymentOption?: string
  outPaymentRoute?: string
  outCurrency?: string
  paymentTypeAccount?: string

  /** @format double */
  amount?: number
}

export interface PortalGatewayApiModelsAddTradingAccountRequestModel {
  /** Trading product code */
  tradingProduct?: string

  /** Account currency code (ISO 4217) */
  currencyCode?: string

  /** @format int32 */
  leverage?: number

  /** @format double */
  amount?: number
  agent?: string
  promotion?: string
  competitionCode?: string
}

export interface PortalGatewayApiModelsStatementRequestModel {
  /** Account for which statement is generated (current user's main account by default) */
  accountNumber?: string

  /**
   * Start date of statement period
   * @format date-time
   */
  dateFrom?: string

  /**
   * End date of statement period (current date by default)
   * @format date-time
   */
  dateTo?: string

  /** Currency for which statement is generated (all currencies are included by default) */
  currencyCode?: string
}

export interface PortalUserIdentityGaModelsSettingsModel {
  /** Uri to generate QR code from */
  uri?: string

  /** Time based key (can be used for manual entry) */
  key?: string
}

export interface PortalUserIdentityModelsApiActivateIdentityModel {
  identityTypeName?: string

  /** Email, phone, time based key, etc. */
  value?: string

  /** Activation code */
  code?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiUpdateIdentityModel {
  identityTypeName?: string

  /** New password/PIN code/etc. value */
  password?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiDeactivateIdentityModel {
  identityTypeName?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiSendCodeModel {
  /** MFA state (required for login operation) */
  state?: string

  /** Identity type that user wants to authenticate with */
  identityTypeName?: string

  /** Email or phone (required for identity activation) */
  contactValue?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiCodeInfoModel {
  /**
   * OTP code length
   * @format int32
   */
  length?: number

  /**
   * The remaining lifetime (in milliseconds) of the current OTP code
   * @format int32
   */
  expiresIn?: number

  /**
   * The remaining time (in milliseconds) until method will generate and send a new OTP code
   * @format int32
   */
  resendIn?: number
}

export interface PortalUserIdentityModelsApiTurnOnClientFactorModel {
  identityTypeName?: string

  /** ['LOGIN', 'WITHDRAW'] */
  operationCode?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiTurnOffClientFactorModel {
  identityTypeName?: string

  /** ['LOGIN', 'WITHDRAW'] */
  operationCode?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentitySmsModelsApiOperatorCallModel {
  grade?: string
  phone?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentitySmsModelsApiVerifyModel {
  grade?: string
  phone?: string
  otp?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiGetBackupCodesModel {
  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiBackupCodesModel {
  codes?: string[]
}

export interface PortalUserIdentityModelsApiRegenerateBackupCodesModel {
  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityEmailModelsApiEmailVerificationModel {
  gradeName?: string
  email?: string
  emailCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalCoreModelsBaseApiModel {
  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityConfigurationModelsApiIdentityTypeConfigurationModel {
  identityTypeName?: string
  isExternal?: boolean
  isEnabled?: boolean
  clientFactors?: PortalUserIdentityConfigurationModelsApiClientFactorConfigurationModel[]
  identityKeys?: PortalUserIdentityConfigurationModelsApiIdentityKeyConfigurationModel[]
}

export interface PortalUserIdentityConfigurationModelsApiClientFactorConfigurationModel {
  operationCode?: string
  isEnabled?: boolean
}

export interface PortalUserIdentityConfigurationModelsApiIdentityKeyConfigurationModel {
  identityKeyName?: string
  isEnabled?: boolean
}

export interface PortalUserIdentityModelsApiCreateGenericIdentityModel {
  /** Identity key that user wants to authenticate with */
  identityKeyName?: 'FACE_ID' | 'FINGERPRINT' | 'APP_PINCODE'

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiGenericIdentityCertificateModel {
  /** Certificate public key in base64 format */
  publicKey?: string

  /** Encryption type */
  encryptionType?: string

  /**
   * Encryption key size in bits
   * @format int32
   */
  encryptionKeySize?: number
}

export interface PortalUserIdentityModelsApiDeactivateGenericIdentityModel {
  /**
   * Verification code.
   * Encrypted with public key of generic identity that user wants to deactivate.
   * Message format - {creation_datetime_in_ticks}:{identityKeyName}
   */
  code?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsInpayModelsApiBanksRequestModel {
  countryCode?: string
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsInpayModelsApiBankModel {
  name?: string
}

export interface PortalPsInpayModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  bankName?: string
  fullName?: string
  email?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsInpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  orderDetails?: PortalPsInpayModelsApiOrderDetailsModel
  onlineBankUrl?: string
  parameters?: Record<string, string>
}

export interface PortalPsInpayModelsApiOrderDetailsModel {
  transferAmountWithCurrency?: string
  orderNumber?: string
  name?: string
  email?: string
  orderText?: string
  paymentReference?: string
  paymentInstructions?: Record<string, string>
  bankAccountIban?: string
  bankAccountSwift?: string
  bankLogoUrl?: string
  bankAddress?: string
  accountOwner?: string
}

export interface PortalPsInpayModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  beneficiaryName?: string
  beneficiaryEmail?: string
  ownerAddress?: string
  bankCountryCode?: string
  iban?: string
  swiftCode?: string
  bankAccountNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsIntellectmoneyModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  intellectMoneyAccount?: string
}

export interface PortalPsIntellectmoneyModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsIntellectmoneyModelsDepositParametersModel
}

export interface PortalPsIntellectmoneyModelsDepositParametersModel {
  eshopId?: string
  orderId?: string
  serviceName?: string
  recipientAmount?: string
  recipientCurrency?: string
  user_email?: string
  successUrl?: string
  failUrl?: string
  ResultUrl?: string
  preference?: string
  transactionId?: string
  amount?: string
  hash?: string
}

export interface PortalPsIntellectmoneyModelsApiNoticeModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** @format date-time */
  paymentDate?: string
  paymentCode?: string
}

export interface PortalPsIntercashModelsApiCardListRequestModel {
  statuses?: string[]
  isExternal?: boolean
  isActivated?: boolean

  /** Domain name */
  domainName?: string
}

export interface PortalPsIntercashModelsApiCardModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string
  cardNumber?: string
  currency?: string
  balance?: string
  cardholderName?: string
  cardStatus?: string
  expirationDate?: string
  isActivated?: boolean
  isPlastic?: boolean
  isBlocked?: boolean
  isExternal?: boolean
}

export interface PortalPsIntercashModelsApiCardDetailsRequestModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsIntercashModelsApiCardDetailsResponseModel {
  pan?: string
  currencyCode?: string
  cardholderName?: string
  expirationDate?: string
}

export interface PortalPsIntercashModelsApiCardIssueRequestModel {
  cardholderName?: string
  paymentMethod?: string
  cardType?: string
  idType?: string
  idNumber?: string
  deliveryInfo?: PortalPsIntercashModelsApiDeliveryInfoModel
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
}

export interface PortalPsIntercashModelsApiDeliveryInfoModel {
  country?: string
  city?: string
  address?: string
  zipCode?: string
}

export interface PortalPsIntercashModelsApiCardIssueResponseModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsIntercashModelsApiCardActivationRequestModel {
  cvv?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsIntercashModelsApiCardActivationResponseModel {
  pinCode?: string
  currencyCode?: string
  isActivated?: boolean
}

export interface PortalPsIntercashModelsApiCardConvertToPlasticModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsIntercashModelsApiCardSuspendModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsIntercashModelsApiCardDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsIntercashModelsApiAddModel {
  paymentOptionCode?: string
  paymentRouteName?: string
  merchantCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string
  cardholderName?: string
  cardNumber?: string
  accessCode?: string
  expirationMonth?: string
  expirationYear?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
}

export interface PortalPsIntercashModelsApiWithdrawModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  paymentOptionCode?: string
  paymentRouteName?: string
  merchantCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string
  cardholderName?: string
  cardNumber?: string
  expirationMonth?: string
  expirationYear?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
}

export interface PortalModuleConfigurationModelsApiLanguageModel {
  url?: string
  title?: string
  isSelected?: boolean
  code?: string
}

export interface PortalModuleConfigurationModelsApiPrefferedLanguageUpdateModel {
  languageCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsLavapayModelsApiAddModel {
  accountNumber?: string
  currencyCode?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  lavapayAccount?: string
  email?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsLavapayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  ChainId?: string
  GatewayUrl?: string
}

export interface PortalPsLavapayModelsApiNoticeModel {
  accountNumber?: string
  currencyCode?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  lavapayAccount?: string
  email?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsLavapayModelsApiWithdrawModel {
  accountNumber?: string
  currencyCode?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  lavapayAccount?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserLeadModelsJsonLeadDataRequest {
  /** Client unique identifier */
  clientId?: string

  /** Any lead data as key-value structure */
  data?: object
}

export interface PortalUserLeadModelsJsonLeadDataResponse {
  lead?: PortalUserLeadModelsJsonLeadResponse
  returnUrl?: string
}

export interface PortalUserLeadModelsJsonLeadResponse {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
}

export interface PortalPsLocaldepositModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  senderName?: string
  fullBankName?: string

  /** @format date-time */
  transactionDate?: string
}

export interface PortalPsLocaldepositModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  bankName?: string
  receiverName?: string
  payzaAccount?: string
  address?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsLocalwithdrawalModelsApiLocalWithdrawalBanksModel {
  banks?: PortalPsLocalwithdrawalModelsApiBankModel[]
}

export interface PortalPsLocalwithdrawalModelsApiBankModel {
  name?: string
}

export interface PortalPsLocalwithdrawalModelsApiWithdrawModel {
  domainName?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  receiverName?: string
  email?: string
  bankAccountNumber?: string
  bank?: string
  comment?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalUserLoginModelsApiLoginConfigurationModel {
  identityTypeName?: string
  isExternal?: boolean
  isOAuth?: boolean

  /** @format int32 */
  order?: number
}

export interface PortalUserLoginModelsApiAuthorizeModel {
  identityTypeName?: string
  username?: string
  password?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserLoginModelsApiLoginResultModel {
  token?: OauthCoreModelsTokenModel
}

export interface PortalModuleAuthApiModelsOAuthLoginInitiateModel {
  /** Selected login option */
  identityTypeName?: string

  /**
   * Client app redirection endpoint where API server directs the user-agent
   * after completing its interaction with the external system
   */
  returnUrl?: string

  /**
   * An opaque value used by the client to maintain
   * state between the request and callback.The authorization
   * server includes this value when redirecting the user-agent back
   * to the client.The parameter SHOULD be used for preventing
   * cross-site request forgery as described in https://datatracker.ietf.org/doc/html/rfc6749#section-10.12
   */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalModuleAuthApiModelsOAuthLoginCompleteModel {
  /** Required for new external account binding */
  email?: string

  /** Required when external identity is created for existing user */
  password?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsMerchantModelsTransferRequestModel {
  /** Request timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** Merchant account number */
  AccountFrom?: string
  Recipient?: PortalPsMerchantModelsUserDetailsSearchModel

  /** Any string that uniquely identifies the payment on the requester's side */
  PaymentId?: string

  /**
   * Payment amount
   * @format double
   */
  Amount?: number

  /** Payment currency code (ISO 4217) */
  CurrencyCode?: string

  /** Comment */
  Comment?: string
}

export interface PortalPsMerchantModelsUserDetailsSearchModel {
  SearchType?: 'Id' | 'CryptoAddress' | 'Key' | 'AccountNumber' | 'Email' | 'Phone' | 'ExternalId'
  Value?: string
}

export interface PortalPsMerchantModelsMerchantApiResponseModel {
  /** Response timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** Payment Id */
  PaymentId?: string
}

export interface PortalPsMerchantModelsWithdrawRequestModel {
  /** Request timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** Payment unique identifier */
  PaymentId?: string

  /** Payment type name */
  PaymentTypeCode?: string

  /** Payment option code according to payment type */
  PaymentOptionCode?: string

  /** Payment direction */
  PaymentRouteCode?: string
}

export interface PortalPsMerchantModelsUserDetailsRequestModel {
  /** Request timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string
  User?: PortalPsMerchantModelsUserDetailsSearchModel
}

export interface PortalPsMerchantModelsUserDetailsModel {
  /** Response timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** User unique identifier */
  UserId?: string

  /** User type name (Demo/Undefined/Corporate/Personal/Joint) */
  UserTypeName?: string

  /**
   * If user's profile type is "Personal" - user's firstname and lastname
   * If user's profile type is "Joint" - primary and secondary applicants' first name and last name
   * If user's profile type is "Corporate" - company name and user's first name and last name
   */
  ProfileName?: string

  /** User first name */
  FirstName?: string

  /** User first name in original */
  FirstNameOriginal?: string

  /** User last name */
  LastName?: string

  /** User last name in original */
  LastNameOriginal?: string

  /** User nickname */
  Nickname?: string

  /** Nationality */
  Nationality?: string

  /** Preferred language */
  PreferedLanguage?: string

  /** Primary phone number */
  PhoneNumber?: string

  /** Login email */
  Email?: string

  /** User country code (ISO 3166-1 alpha-2) */
  CountryIsoCharCode?: string

  /** Reference to the existing city name in Database */
  ReferenceCityName?: string

  /** User city name */
  CityName?: string

  /** User city name in original */
  CityNameOriginal?: string

  /** User address */
  AddressValue?: string

  /** User address value in original */
  AddressValueOriginal?: string

  /** ZipCode number */
  ZipCode?: string

  /** Verification comment */
  DocumentSetCommentDescription?: string

  /**
   * Personal details translation status:
   * Default: user filled personal data in latin,
   * Translated: user's data was translated in latin according to provided by him information in another language,
   * NeedTranslation: user's data needs to be translated
   */
  TranslationStatus?: string

  /**
   * Verification level
   * @format int32
   */
  Grade?: number

  /** User's eWallet number */
  UserTitle?: string

  /** List of user accounts */
  Accounts?: PortalPsMerchantModelsAccountModel[]
}

export interface PortalPsMerchantModelsAccountModel {
  Id?: string
  Title?: string
  CurrencyCode?: string

  /** @format int32 */
  Order?: number
}

export interface PortalPsMerchantModelsPaymentDetailsRequestModel {
  /** Request timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** Payment unique identifier that merchant provided in withdrawal request */
  PaymentId?: string
}

export interface PortalPsMerchantModelsPaymentDetailsModel {
  /** Response timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** Payment unique identifier */
  PaymentId?: string

  /** Account unique identifier */
  AccountId?: string

  /** Number of main or trading account with its currency */
  AccountTitle?: string

  /** Payment type name */
  PaymentTypeCode?: string

  /** Payment option code according to payment type */
  PaymentOptionCode?: string

  /** Payment direction */
  PaymentRouteCode?: string

  /**
   * Payment amount
   * @format double
   */
  Amount?: number

  /** Payment currency code (ISO 4217) */
  CurrencyCode?: string

  /** Payment account */
  PaymentAccount?: string

  /** Payment details */
  PaymentDetails?: string

  /** User unique identifier */
  UserId?: string

  /** User first name */
  FirstName?: string

  /** User first name in original */
  FirstNameOriginal?: string

  /** User last name */
  LastName?: string

  /** User last name in original */
  LastNameOriginal?: string

  /** User nickname */
  Nickname?: string

  /** Nationality */
  Nationality?: string

  /** Preferred language */
  PreferedLanguage?: string

  /** Primary phone number */
  PhoneNumber?: string

  /** Mobile phone number */
  MobilePhoneNumber?: string

  /** Login email */
  Email?: string

  /** User country code (ISO 3166-1 alpha-2) */
  CountryIsoCharCode?: string

  /** Reference to the existing city name in Database */
  ReferenceCityName?: string

  /** User city name */
  CityName?: string

  /** User city name in original */
  CityNameOriginal?: string

  /** User address */
  AddressValue?: string

  /** User address value in original */
  AddressValueOriginal?: string

  /** ZipCode number */
  ZipCode?: string

  /** User's eWallet number */
  UserTitle?: string

  /** User type name (Demo/Undefined/Corporate/Personal/Joint) */
  UserTypeName?: string

  /** Type of the profile (Corporate/Joint/Personal) */
  ProfileType?: string

  /**
   * If user's profile type is "Personal" - user's firstname and lastname
   * If user's profile type is "Joint" - primary and secondary applicants' first name and last name
   * If user's profile type is "Corporate" - company name and user's first name and last name
   */
  ProfileName?: string

  /**
   * Verification level
   * @format int32
   */
  Grade?: number

  /** Verification comment */
  DocumentSetCommentDescription?: string

  /** User is blocked */
  IsUserLockedOut?: boolean

  /**
   * Last date-time of user block
   * @format date-time
   */
  UserLastLockoutDate?: string

  /**
   * Number of unsuccessful login attempts
   * @format int32
   */
  LoginAttemptCount?: number

  /**
   * Personal details translation status:
   * Default: user filled personal data in latin,
   * Translated: user's data was translated in latin according to provided by him information in another language,
   * NeedTranslation: user's data needs to be translated
   */
  TranslationStatus?: string
}

export interface PortalPsMerchantModelsNotificationModel {
  /** Request timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** Payment unique identifier that payment platform generated for deposit or merchant provided in withdrawal request */
  PaymentId?: string

  /** Account unique identifier */
  AccountId?: string

  /** Payment type name */
  PaymentTypeCode?: string

  /** Payment option code */
  PaymentOptionCode?: string

  /** Payment direction */
  PaymentRouteCode?: string

  /** Type of balance operation (Credit/Debit) */
  BalanceOperationTypeCode?: string

  /**
   * Payment amount
   * @format double
   */
  Amount?: number

  /** Payment currency code (ISO 4217) */
  CurrencyCode?: string

  /** Current payment status (Succeed/Pending/Rejected/Failed/Recreated) */
  Status?: string

  /** Payment details */
  PaymentDetails?: string
}

export interface PortalPsMinervaModelsApiLocalWireTransferModel {
  accountNumber?: string
  email?: string
  identificationNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string
  countryCode?: string

  /** @format double */
  amount?: number
  addressDetails?: PortalPsMinervaModelsApiAddressDetailsModel

  /** Domain name */
  domainName?: string
}

export interface PortalPsMinervaModelsApiAddressDetailsModel {
  address?: string
  district?: string
  cityName?: string
  zipCode?: string
  zipCodeSuffix?: string
  state?: string
}

export interface PortalPsMinervaModelsApiDepositModel {
  gatewayUrl?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsMinervaModelsApiWithdrawModel {
  accountNumber?: string
  email?: string
  identificationNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string
  countryCode?: string

  /** @format double */
  amount?: number

  /** Domain name */
  domainName?: string
}

export interface PortalPsMistertangoModelsApiAddModel {
  paymentOptionCode?: string
  misterTangoEmail?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMistertangoModelsApiDepositModel {
  recipient?: string
  languageCode?: string
  payer?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  orderId?: string
  paymentTypeForced?: string
  scriptUrl?: string
}

export interface PortalPsMistertangoModelsApiCreditDebitCardsAddModel {
  paymentOptionCode?: string
  paymentRouteName?: string
  merchantCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMistertangoModelsApiNoticeModel {
  misterTangoEmail?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMistertangoModelsApiWithdrawModel {
  misterTangoAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMoneybookersModelsApiRequestAddByPaymentOptionModel {
  paymentOptionCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMoneybookersModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  paymentUrl?: string
}

export interface PortalPsMoneybookersModelsApiCreditDebitCardsAddModel {
  paymentOptionCode?: string
  paymentRouteName?: string
  merchantCode?: string
  countryCode?: string
  email?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMoneybookersModelsApiLocalWireTransferAddModel {
  paymentOptionCode?: string
  paymentTypeCode?: string
  paymentRouteCode?: string
  countryCode?: string
  merchantCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMoneybookersModelsApiAddModel {
  email?: string
  merchantCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMoneybookersModelsApiRequestWithdrawModel {
  merchantCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
  moneybookersAccount?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMoneybookersModelsApiNoticeModel {
  moneybookersAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMtbankModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
}

export interface PortalPsMtbankModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  isAuthRequestSuccessful?: boolean
}

export interface PortalPsMtbankModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  transferType?: 'CORP_CARD_TO_CLIENT_CARD' | 'CORP_CARD_TO_EXT_SYSTEM_CARD'

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  isRefund?: boolean
  state?: string
}

export interface PortalUserIdentityModelsApiMultiFactorConfigurationRequestModel {
  operationCode?:
    | 'BACKUPCODE_ACTIVATION'
    | 'BACKUPCODE_CHANGE'
    | 'BACKUPCODE_DEACTIVATION'
    | 'CLIENT_FACTOR_MANAGEMENT'
    | 'GENERIC_ACTIVATION'
    | 'GENERIC_DEACTIVATION'
    | 'EMAIL_ACTIVATION'
    | 'EMAIL_DEACTIVATION'
    | 'GOOGLEAUTHENTICATOR_ACTIVATION'
    | 'GOOGLEAUTHENTICATOR_DEACTIVATION'
    | 'LOGIN'
    | 'PASSWORD_CHANGE'
    | 'PINCODE_CHANGE'
    | 'SMS_ACTIVATION'
    | 'SMS_DEACTIVATION'
    | 'WITHDRAW'
  financeOperationTypeName?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string

  /** Identity factor (if specified, method returns only configurations for higher factors) */
  identityFactorCode?: string

  /** Pass URL-encoded (!!!) MFA state to get factors left */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiMultiFactorConfigurationResponseModel {
  identityFactors?: PortalUserIdentityModelsApiIdentityFactorModel[]
}

export interface PortalUserIdentityModelsApiIdentityFactorModel {
  /** Identity factor code */
  code?: string

  /**
   * Identity factor value
   * @format int32
   */
  value?: number

  /** Identity types the user can choose from to complete the factor */
  identityTypes?: PortalUserIdentityModelsApiIdentityTypeModel[]
}

export interface PortalUserIdentityModelsApiIdentityTypeModel {
  /** Identity type name */
  name?: string

  /** Indicates whether current user enabled this identity type */
  isEnabled?: boolean
}

export interface PortalUserIdentityModelsApiVerifyFactorModel {
  /** Current MFA state */
  state?: string

  /** Identity factor the user is verified for */
  identityFactorCode?: string

  /** Identity type that the user wants to continue the authentication with */
  identityTypeName?: string

  /** Verification code */
  code?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiMultiFactorInfoModel {
  /** Updated MFA state */
  state?: string
}

export interface PortalPsNabModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOption?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsNabModelsInvoiceModel {
  currencyCode?: string
  amount?: string
  accountNumber?: string
  bsbCode?: string
  accountTitle?: string
  lodgementReference?: string
}

export interface PortalPsNabModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOption?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  nabAccountNumber?: string
  bsbCode?: string
  accountTitle?: string
  lodgementReference?: string
  state?: string
}

export interface PortalPsNabModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  lodgementReference?: string
}

export interface PortalPsNcwalletModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  address?: string
  merchantCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsNetbanxModelsApiCreditDebitCardsAddModel {
  paymentOptionCode?: string
  paymentRouteName?: string
  merchantCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
}

export interface PortalPsNetbanxModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsNetbanxModelsApiLocalWireTransferAddModel {
  countryCode?: string
  paymentOptionCode?: string
  paymentRouteName?: string
  merchantCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
}

export interface PortalPsNetbanxModelsApiCreditDebitCardsWithdrawModel {
  countryCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  isRefund?: boolean
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
}

export interface PortalPsNetellerModelsApiAddModel {
  netellerAccountId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsNetellerModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsNetellerModelsApiNoticeModel {
  /** @format date-time */
  transactionDate?: string
  transactionId?: string
  netellerAccountId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsNetellerModelsApiWithdrawModel {
  netellerAccountId?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalUserSettingsModelsApiNotificationNotificationTypeModel {
  name?: string
}

export interface PortalUserSettingsModelsApiNotificationContactMethodsRequestModel {
  notificationTypeName?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserSettingsModelsApiNotificationContactMethodModel {
  name?: string
}

export interface PortalUserSettingsModelsApiNotificationNotificationSettingModel {
  notificationTypeName?: string
  contactMethodName?: string
  isActive?: boolean

  /** @format double */
  price?: number
}

export interface PortalUserSettingsModelsApiNotificationCreateNotificationModel {
  notificationTypeName?: string
  contactMethodName?: string
  isActive?: boolean
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserSettingsModelsApiNotificationUpdateNotificationModel {
  notificationTypeName?: string
  contactMethodName?: string
  isActive?: boolean
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsOkpayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsOkpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsOkpayModelsDepositParametersModel
}

export interface PortalPsOkpayModelsDepositParametersModel {
  ok_receiver?: string
  ok_item_1_name?: string
  ok_item_1_price?: string
  ok_currency?: string
  ok_invoice?: string
}

export interface PortalPsOkpayModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  okpayAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
}

export interface PortalPsOkpayModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  okpayAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsOplatiModelsApiPaymentInfoRequestModel {
  /** Domain name */
  domainName?: string
}

export interface PortalPsOplatiModelsApiPaymentInfoModel {
  paymentInstruction?: string
  accountNumber?: string
}

export interface PortalPsOplatiModelsApiNoticeModel {
  serverTransactionId?: string

  /** @format date-time */
  serverTransactionDate?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  purseNumber?: string
}

export interface PortalPsOplatiModelsApiWithdrawModel {
  merchantCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  purseNumber?: string
}

export interface PortalExtensionsPammModelsApiCreatePammAccountModel {
  /** @format int32 */
  clientTradingAccountLogin?: number
  pammAccountTypeName?: string

  /** @format int32 */
  pammAccountLogin?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalExtensionsPammModelsApiJoinPammAccountModel {
  /** @format int32 */
  clientTradingAccountLogin?: number

  /** @format int32 */
  pammAccountLogin?: number
}

export interface PortalExtensionsPammModelsApiRolloverExecutedModel {
  /** @format int32 */
  pammAccountLogin?: number
  pammAccountUsers?: PortalExtensionsPammModelsApiPammAccountUser[]
}

export interface PortalExtensionsPammModelsApiPammAccountUser {
  /** @format int32 */
  clientTradingAccountLogin?: number

  /** @format int32 */
  userType?: number

  /** @format double */
  kus?: number
}

export interface PortalModulePartnershipModelsVisitorStatisticsApiVisitorModel {
  IsOpenedAccountsRequired?: boolean

  /** @format date-time */
  dateFrom?: string

  /** @format date-time */
  dateTo?: string

  /**
   * Requested page number (default value: 1)
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page (default value: 30)
   * @format int32
   */
  pageSize?: number

  /** Domain name */
  domainName?: string
}

export interface PortalModulePartnershipModelsVisitorStatisticsApiVisitorsStatisticsModel {
  visits?: PortalModulePartnershipModelsVisitorStatisticsApiVisitorListingModel[]

  /** @format int32 */
  totalVisits?: number

  /** @format int32 */
  totalAccountsOpened?: number
}

export interface PortalModulePartnershipModelsVisitorStatisticsApiVisitorListingModel {
  visitingDate?: string
  ipAddress?: string
  visitedPage?: string
  visitedPageLink?: string
  referralPage?: string
  referralPageLink?: string
  isAccountOpened?: boolean
}

export interface PortalModulePartnershipModelsReferralsApiReferralModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  ownerId?: string
  accountNumber?: string

  /** @format date-time */
  dateFrom?: string

  /** @format date-time */
  dateTo?: string

  /**
   * Requested page number (default value: 1)
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page (default value: 30)
   * @format int32
   */
  pageSize?: number

  /** Domain name */
  domainName?: string
}

export interface PortalModulePartnershipModelsReferralsApiReferralListingModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string
  accountNumber?: string
  tradingAccountNumber?: string
  userName?: string
  countryName?: string
  email?: string
  gradeName?: string
  isFunded?: boolean

  /** @format date-time */
  created?: string
}

export interface PortalPsPastabankModelsApiDepositConfigurationModel {
  street?: string
  city?: string
  nameOnCard?: string
  email?: string
  phone?: string
  zipCode?: string
}

export interface PortalPsPastabankModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  street?: string
  city?: string
  nameOnCard?: string
  email?: string
  phone?: string
  zipCode?: string
}

export interface PortalPsPastabankModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsPastabankModelsDepositParametersModel
}

export interface PortalPsPastabankModelsDepositParametersModel {
  INTERFACE?: string
  KEY_INDEX?: string
  KEY?: string
  DATA?: string
  SIGNATURE?: string
  CALLBACK?: string
  ERROR_CALLBACK?: string
}

export interface PortalPsPaybal51ModelsApiBankModel {
  code?: string
  name?: string
  originalName?: string
}

export interface PortalPsPaybal51ModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  bankCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPaybal51ModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsPaybal51ModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  beneficiaryAccountName?: string
  beneficiaryAccountNumber?: string
  bankName?: string
  bankBranchName?: string
  bankProvinceName?: string
  bankCityName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPayclubModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  cvv?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiFeeRequestModel {
  /** Balance operation type */
  balanceOperationTypeName?: string

  /** Currency code */
  currencyCode?: string

  /**
   * Amount
   * @format double
   */
  amount?: number

  /** Country code */
  countryCode?: string

  /** Merchant gateway public key */
  gatewayPublicKey?: string

  /** Merchant external user id */
  userId?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiFeeModel {
  /** Fee value */
  fee?: string

  /** Amount after applying the fee */
  finalAmount?: string

  /** Fee currency code */
  currencyCode?: string

  /** Indicates if fee is expressed in requested currency */
  isFeeInAmountCurrency?: boolean
}

export interface FinanceTransferModelsApiPaymentConfigurationPaymentConfigurationRequestModel {
  /** Country abbreviation */
  countryCode?: string

  /** Domain name */
  domain?: string

  /** Is aggregator */
  IsAggregator?: boolean

  /** Is external */
  isExternal?: boolean

  /** Type of balance operation (Credit/Debit) */
  balanceOperationType?: string

  /** Group of payment types(=systems) */
  paymentCategory?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option (method) provided by the payment system */
  paymentOption?: string

  /** Gateway which is used for payments processing */
  paymentRoute?: string

  /** Merchant code */
  merchantCode?: string

  /** ISO currency code */
  currencyCode?: string
}

export interface FinanceTransferModelsApiPaymentConfigurationPaymentConfigurationResponseModel {
  result?: FinanceTransferModelsApiPaymentConfigurationPaymentCategoryModel[]
}

export interface FinanceTransferModelsApiPaymentConfigurationPaymentCategoryModel {
  /** Group of payment systems */
  paymentCategory?: string
  paymentSystems?: FinanceTransferModelsApiPaymentConfigurationPaymentSystemModel[]
}

export interface FinanceTransferModelsApiPaymentConfigurationPaymentSystemModel {
  /** Payment type name */
  paymentType?: string
  paymentTypeLocalized?: string

  /** Is external */
  isExternal?: boolean

  /** A payment option (method) provided by the payment system */
  paymentOption?: string
  paymentOptionLocalized?: string

  /** Is aggregator */
  isAggregator?: boolean

  /** A gateway which is used for payments processing */
  paymentRoute?: string

  /** Merchant code */
  merchantCode?: string
  configuration?: FinanceTransferModelsApiPaymentConfigurationPaymentConfigurationModel[]
  aggregatedPaymentSystems?: FinanceTransferModelsApiPaymentConfigurationPaymentSystemModel[]
}

export interface FinanceTransferModelsApiPaymentConfigurationPaymentConfigurationModel {
  /** Type of balance operation (Credit/Debit) */
  balanceOperationType?: string

  /** Type of finance operation (Add/Notice/Withdraw) */
  financeOperationType?: string
  isOpened?: boolean

  /** Is visible */
  isVisible?: boolean

  /** Payment url */
  url?: string
  currencies?: FinanceTransferModelsApiPaymentConfigurationCurrencyConfigurationModel[]
}

export interface FinanceTransferModelsApiPaymentConfigurationCurrencyConfigurationModel {
  country?: string
  currency?: AtCoreModelsCurrencyModel
  amountRange?: FinanceTransferModelsApiPaymentConfigurationAmountRangeModel
  feeConfigurations?: FinanceTransferModelsApiPaymentConfigurationFeeConfigurationModel[]

  /**
   * For crypto systems only
   * @format int32
   */
  minConfirmationsCount?: number
}

export interface FinanceTransferModelsApiPaymentConfigurationAmountRangeModel {
  /**
   * Lower amount boundary of the payment
   * @format double
   */
  min?: number

  /**
   * Upper amount boundary of the payment
   * @format double
   */
  max?: number
}

export interface FinanceTransferModelsApiPaymentConfigurationFeeConfigurationModel {
  /**
   * Fee percent
   * @format double
   */
  percent?: number

  /**
   * Fee min value
   * @format double
   */
  minValue?: number

  /**
   * Fee max value
   * @format double
   */
  maxValue?: number

  /**
   * Fee constant for target currency
   * @format double
   */
  constant?: number

  /** Target currency */
  targetCurrency?: AtCoreModelsCurrencyModel

  /** Constant requires conversion from target currency to base currency */
  convert?: boolean

  /** Display fee */
  formula?: string
}

export interface FinanceTransferModelsApiPaymentConfigurationRequestModel {
  /** Domain name */
  domain?: string

  /** Country code (ISO 3166-1 alpha-2) */
  country?: string

  /** Type of balance operation (Credit/Debit) */
  balanceOperationType?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Currency code (ISO 4217) */
  currency?: string
}

export interface FinanceTransferModelsApiFeeCollectionModel {
  configurations?: FinanceTransferModelsApiFeeConfigurationModel[]
}

export interface FinanceTransferModelsApiFeeConfigurationModel {
  /** Domain name */
  domain?: string

  /** Country which fee applies in */
  country?: FinanceTransferModelsApiCountryModel

  /** Type of balance operation (Credit/Debit) */
  balanceOperationType?: string

  /** Base currency (same as payment currency) */
  baseCurrency?: AtCoreModelsCurrencyModel

  /**
   * Percentage fee
   * @format double
   */
  percent?: number

  /**
   * Minimum fee (in base currency)
   * @format double
   */
  minValue?: number

  /**
   * Maximum fee (in base currency)
   * @format double
   */
  maxValue?: number

  /** Target currency */
  targetCurrency?: AtCoreModelsCurrencyModel

  /**
   * Constant fee
   * @format double
   */
  constant?: number

  /** Specifies whether constant amount requires conversion from target currency to base currency */
  convert?: boolean

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string
}

export interface FinanceTransferModelsApiCountryModel {
  /** Country code (ISO 3166-1 alpha-2) */
  code?: string

  /** Official country name */
  name?: string
}

export interface FinanceTransferModelsApiFeeFormulaRequestModel {
  /** Balance operation type */
  balanceOperationTypeName?: string

  /**
   * Amount
   * @format double
   */
  amount?: number

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceTransferModelsFeeFormulaModel {
  Formulas?: string[]
}

export interface FinanceEwalletModelsApiFinanceOperationStatusModel {
  name?: string

  /** @format int32 */
  value?: number
}

export interface FinanceEwalletModelsApiBackgroundStatusModel {
  name?: string
  code?: string
  isFinal?: boolean
}

export interface FinanceEwalletModelsApiOperationSummaryRequestModel {
  /** eWallet or trading account number */
  account?: string

  /** ISO currency code */
  currencyCode?: string

  /** CreditDebitCards/CUP/InstantBankTransfers/etc. */
  paymentGroupCode?: string

  /** Payment type name */
  paymentType?: string

  /** Way of payment according to paymentType */
  paymentOption?: string

  /** Payment direction */
  paymentRoute?: string

  /** Type of balance operation (Credit/Debit) */
  balanceOperationType?: string

  /** Add/Notice/Withdraw */
  financeOperationTypeName?: string

  /** Current operation state (Failed/Pending/Recreated/Rejected/Succeed) */
  statuses?: string[]

  /**
   * Chain identifier
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** @format date-time */
  dateFrom?: string

  /** @format date-time */
  dateTo?: string

  /**
   * Requested page number (default value: 1)
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page (default value: 30)
   * @format int32
   */
  pageSize?: number

  /** Domain name */
  domainName?: string
}

export interface FinanceEwalletModelsApiOperationSummaryResponseModel {
  /** eWallet or trading account number */
  account?: string

  /** List of the operations */
  operations?: FinanceEwalletModelsApiFinanceOperationModel[]

  /**
   * Total number of records
   * @format int32
   */
  total?: number

  /**
   * Page number
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page
   * @format int32
   */
  pageSize?: number
}

export interface FinanceEwalletModelsApiFinanceOperationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  financeOperationId?: string

  /**
   * Operation creation date
   * @format date-time
   */
  created?: string

  /**
   * Operation processing date
   * @format date-time
   */
  approved?: string

  /**
   * Operation processing date
   * @format date-time
   */
  processed?: string

  /**
   * Spent amount
   * @format double
   */
  amount?: number

  /** Is amount blocked */
  isAmountBlocked?: boolean

  /**
   * Fee
   * @format double
   */
  fee?: number

  /** ISO currency code */
  currency?: AtCoreModelsCurrencyModel

  /** Balance operation type (Debit/Credit) */
  balanceType?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option name */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Payment type name */
  payment?: string

  /** Is external */
  isExternal?: boolean

  /** Current state of the operation */
  status?: string

  /** Operation background status */
  backgroundStatus?: string

  /** Reject reason */
  rejectReason?: string

  /** Operation comment */
  comment?: string

  /** Exchange rate info */
  note?: string

  /**
   * Chain id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** Payment details */
  paymentInfo?: FinanceEwalletModelsApiPaymentInfoModel[]
}

export interface FinanceEwalletModelsApiPaymentInfoModel {
  /** Payment requisite */
  key?: string

  /** Value */
  value?: string
}

export interface FinanceEwalletModelsApiStartBalanceRequestModel {
  /** eWallet or trading account number */
  account?: string

  /** Payment type name */
  paymentType?: string

  /** Way of payment according to paymentType */
  paymentOption?: string

  /** Requested currencies */
  currencies?: string[]

  /**
   * end of period date
   * @format date-time
   */
  dateTo?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceEwalletModelsApiStartBalanceResponseModel {
  /** eWallet or trading account number */
  account?: string

  /** List of the currency balances */
  startBalances?: FinanceEwalletModelsApiCurrencyBalanceModel[]

  /**
   * Total number of records
   * @format int32
   */
  total?: number
}

export interface FinanceEwalletModelsApiCurrencyBalanceModel {
  /**
   * Start amount
   * @format double
   */
  amount?: number

  /** ISO currency code */
  currency?: AtCoreModelsCurrencyModel
}

export interface FinanceTransferModelsApiBalanceRequestModel {
  /** Account number - if not specified, method returns main account balance */
  account?: string

  /** Currency code (ISO 4217) - if not specified, method returns balances for all existing pockets */
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceTransferModelsBalanceResponseModel {
  /**
   * Amount available for trading or transfer to main account
   * @format double
   */
  available?: number

  /**
   * Amount reserved for active orders or incomplete transfers to main account
   * @format double
   */
  reserved?: number

  /** ISO currency code */
  currency?: AtCoreModelsCurrencyModel

  /**
   * Account Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  account_id?: string
}

export interface FinanceTransferModelsAmountRangeResponseModel {
  /**
   * Lower amount boundary of the payment
   * @format double
   */
  min?: number

  /**
   * Upper amount boundary of the payment
   * @format double
   */
  max?: number
}

export interface FinanceTransferModelsApiPaymentSystemRequestModel {
  /** Type of balance operation (Credit/Debit) */
  balanceOperationType?: string

  /** Group of payment types(=systems) */
  paymentCategory?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option (method) provided by the payment system */
  paymentOption?: string

  /** Gateway which is used for payments processing */
  paymentRoute?: string

  /** Merchant code */
  merchantCode?: string

  /** ISO currency code */
  currencyCode?: string
}

export interface FinanceTransferModelsApiPaymentSystemPaymentSystemResponseModel {
  result?: FinanceTransferModelsApiPaymentSystemPaymentCategoryModel[]
}

export interface FinanceTransferModelsApiPaymentSystemPaymentCategoryModel {
  paymentCategory?: string
  paymentSystems?: FinanceTransferModelsApiPaymentSystemPaymentSystemModel[]
}

export interface FinanceTransferModelsApiPaymentSystemPaymentSystemModel {
  paymentType?: string
  paymentOption?: string
  paymentRoute?: string
  merchantCode?: string
  isAggregator?: boolean
  configuration?: FinanceTransferModelsApiPaymentSystemPaymentConfigurationModel[]
}

export interface FinanceTransferModelsApiPaymentSystemPaymentConfigurationModel {
  balanceOperationType?: string

  /** Payment url */
  url?: string
  countries?: FinanceTransferModelsApiCountryModel[]
  currencies?: AtCoreModelsCurrencyModel[]
}

export interface FinanceTransferModelsApiPaymentAuthorizationModel {
  /**
   * Finance Operation that requires authorization
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  financeOperationId?: string
}

export interface FinanceTransferModelsApiPaymentCancellationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  financeOperationId?: string
}

export interface FinanceTransferModelsApiTransferModel {
  /** Account number */
  accountNumber?: string

  /** Currency code */
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiPaymentMethodSelectModel {
  financeOperationTypeName?: string
  paymentGroupCode?: string
  paymentOptionCode?: string
  merchantCode?: string
  countryCode?: string
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiPaymentConfigurationModel {
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  isAggregator?: boolean
  isExternal?: boolean
  isOpened?: boolean
  isVisible?: boolean
  paymentGroupCodes?: string[]
}

export interface FinanceTransferModelsApiLimitsRequestModel {
  /** Credit/Debit */
  balanceOperationTypeName?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiLimitsResponseModel {
  daily?: FinanceTransferModelsApiLimitModel
  monthly?: FinanceTransferModelsApiLimitModel
}

export interface FinanceTransferModelsApiLimitModel {
  /** @format double */
  limit?: number

  /** @format double */
  volume?: number

  /** @format double */
  availableAmount?: number
  currency?: AtCoreModelsCurrencyModel
}

export interface FinanceTransferModelsApiPaymentTypeAccountCreateRequestModel {
  value?: string
  isDefault?: boolean
  isSavedForFutureUse?: boolean

  /** Template name */
  name?: string
  balanceOperationType?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiPaymentTypeAccountModel {
  /** Template name */
  name?: string

  /** Payment account identifier */
  value?: string

  /** Should this payment account be used by default */
  isDefault?: boolean
}

export interface FinanceConfigurationModelsApiPaymentTypeAccountsRequestModel {
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiPaymentTypeAccountDeleteModel {
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string

  /** Template name */
  name?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiPaymentCountriesRequestModel {
  financeOperationTypeName?: string
  merchantCode?: string
  paymentGroupCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiPaymentCurrenciesRequestModel {
  financeOperationTypeName?: string
  merchantCode?: string
  paymentGroupCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  countryCode?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiPaymentConfigurationsRequestModel {
  financeOperationTypeName?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  paymentGroupCode?: string
  isAggregator?: boolean
  isExternal?: boolean
  isVisible?: boolean
  countryCode?: string
  currencyCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPaymentasiaModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  name?: string
  email?: string
  phone?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPaymentasiaModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsPaymentasiaModelsPaymentParametersModel
}

export interface PortalPsPaymentasiaModelsPaymentParametersModel {
  merchantId?: string
  successUrl?: string
  failUrl?: string
  orderRef?: string

  /** @format double */
  amount?: number
  currCode?: string
  lang?: string

  /** @format int32 */
  gatewayId?: number
  customerEmail?: string
  customerTel?: string
  customerName?: string
  customerProduct?: string
  remark?: string
}

export interface PortalPsPaymentasiaModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPaymentasiaModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  beneficiaryName?: string
  beneficiaryAccountNumber?: string
  bankName?: string
  bankBranchName?: string
  bankProvinceName?: string
  bankCityName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPayomaModelsApiWithdrawParametersRequestModel {
  currencyCode?: string
  countryCode?: string
  balanceOperationTypeName?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPayomaModelsApiWithdrawParametersResponseModel {
  customFields?: string[]
}

export interface PortalPsPayomaModelsApiWithdrawConfigurationModel {
  hasAnyCards?: boolean
  passportCountryCode?: string
  financeOperationType?: string
  balanceOperationType?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPayomaModelsApiWithdrawModel {
  domainName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  firstName?: string
  lastName?: string
  middleName?: string
  passportCountryCode?: string
  passport?: string
  passportSeries?: string
  passportIssuer?: string

  /** @format date-time */
  passportIssued?: string

  /** @format date-time */
  passportExpires?: string
  secondDocumentType?: 'Inn' | 'Poms' | 'Snils'
  secondDocumentNumber?: string
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsPayomaModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsPayomaModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsPaypalModelsApiAddModel {
  payPalEmail?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsPaypalModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsPaypalModelsApiNoticeModel {
  payPalEmail?: string
  transactionId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsPaypalModelsApiWithdrawModel {
  payPalEmail?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  merchantCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsPaysafecardModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
}

export interface PortalPsPaysafecardModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsPaysafecardModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string
}

export interface PortalPsPaysafecardModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  paySafeCardAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsPaysafecardModelsApiWithdrawResultModel {
  messageCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsPaytodayModelsApiBankModel {
  code?: string
  name?: string
}

export interface PortalPsPaytodayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  bankCode?: string
}

export interface PortalPsPaytodayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  onlineParameters?: PortalPsPaytodayModelsApiDepositParametersModel
  offlineParameters?: PortalPsPaytodayModelsApiOfflineDepositParametersModel
}

export interface PortalPsPaytodayModelsApiDepositParametersModel {
  action?: string
  token?: string
  apiname?: string
  mobile?: string
  email?: string
  name?: string
  deposit?: string
  transec_no?: string

  /** @format double */
  amount?: number
  detail?: string
  bank_code?: string
  return_url?: string
}

export interface PortalPsPaytodayModelsApiOfflineDepositParametersModel {
  image?: string

  /** @format date-time */
  expire?: string
}

export interface PortalPsPaytodayModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string
  bankCode?: string
}

export interface PortalPsPaytodayModelsApiWithdrawModel {
  bankAccountNumber?: string
  bankCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsPayzaModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsPayzaModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsPayzaModelsDepositParametersModel
}

export interface PortalPsPayzaModelsDepositParametersModel {
  ap_purchasetype?: string
  ap_merchant?: string
  ap_itemname?: string
  ap_description?: string
  ap_quantity?: string
  ap_amount?: string
  ap_currency?: string
  ap_item?: string
  apc_1?: string
  apc_2?: string
  ap_returnurl?: string
  ap_cancelurl?: string
}

export interface PortalPsPayzaModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  payzaAccount?: string
  referenceNumber?: string
}

export interface PortalPsPayzaModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  PayzaAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsPayzenModelsApiGetInfoModel {
  countryCode?: string
  currencyCode?: string
  balanceOperationTypeName?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPayzenModelsApiAddModel {
  countryId?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  paymentOptionCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPayzenModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsPayzenModelsApiNoticeModel {
  account?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  paymentOptionCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPayzenModelsApiWithdrawModel {
  countryCode?: string
  accountName?: string
  cardNumber?: string
  bankId?: string
  bankBranch?: string

  /** @format int32 */
  provinceCode?: number

  /** @format int32 */
  areaCode?: number
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  paymentOptionCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPayzenModelsApiWithdrawBankTransferModel {
  countryId?: string
  accountName?: string
  bankId?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  paymentOptionCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPerfectmoneyModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsPerfectmoneyModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsPerfectmoneyModelsDepositParametersModel
}

export interface PortalPsPerfectmoneyModelsDepositParametersModel {
  PAYMENT_AMOUNT?: string
  PAYEE_ACCOUNT?: string
  PAYEE_NAME?: string
  SUGGESTED_MEMO?: string
  PAYMENT_UNITS?: string
  STATUS_URL?: string
  PAYMENT_URL?: string
  PAYMENT_URL_METHOD?: string
  NOPAYMENT_URL?: string
  NO_PAYMENT_URL_METHOD?: string
  PAYMENT_ID?: string
  STEP0?: string
}

export interface PortalPsPerfectmoneyModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  perfectMoneyAccount?: string

  /** @format date-time */
  transactionDate?: string
  batchCode?: string
}

export interface PortalPsPerfectmoneyModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  perfectMoneyAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsPoliModelsApiBanksRequestModel {
  balanceOperationTypeName?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPoliModelsApiBankModel {
  name?: string
  code?: string
}

export interface PortalPsPoliModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  bankCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPoliModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsPoliModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  bankCode?: string
  payerAccountNumber?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPoliModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  countryCode?: string
  bankCode?: string
  payerAccountNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsPrepaidcardModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  code?: string
}

export interface PortalPsPrepaidcardModelsApiWithdrawModel {
  state?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  accountNumber?: string
  accountCurrencyCode?: string
  domainName?: string

  /** @format double */
  amount?: number
  cardCurrencyCode?: string
  comment?: string

  /** @format int32 */
  size?: number
}

export interface PortalUserSettingsModelsApiCountryModel {
  /** Country code (ISO 3166-1 alpha-2) */
  code?: string
  name?: string
}

export interface PortalUserSettingsModelsApiCityModel {
  name?: string
}

export interface PortalUserSettingsModelsApiNationalityModel {
  name?: string
}

/**
 * Supply the values only for relevant fields that should be updated
 */
export interface PortalUserSettingsModelsApiCorporateProfileUpdateModel {
  /** Company name */
  company?: string

  /** Company website url */
  companyWebsite?: string

  /** Company LEI number */
  legalEntityIdentifier?: string

  /** Function user serves at company */
  jobPosition?: string
  isDirector?: boolean
}

/**
 * Supply the values only for relevant fields that should be updated
 */
export interface PortalUserSettingsModelsApiJointProfileUpdateModel {
  title?: 'Empty' | 'Mr' | 'Mrs' | 'Ms' | 'Miss' | 'Dr'
  firstName?: string
  lastName?: string

  /** @format date-time */
  dateOfBirth?: string

  /** Nationality name */
  nationality?: string

  /** Country of residence (ISO 3166-1 alpha-2) */
  country?: string

  /** City of residence */
  city?: string

  /** Street address and any apartment number */
  street?: string

  /** ZIP code of residence */
  zipCode?: string
  passportNumber?: string

  /** Domain name */
  domainName?: string
}

/**
 * Supply the values only for relevant fields that should be updated
 */
export interface PortalUserSettingsModelsApiPersonalProfileUpdateModel {
  title?: 'Empty' | 'Mr' | 'Mrs' | 'Ms' | 'Miss' | 'Dr'
  firstName?: string
  lastName?: string

  /** @format date-time */
  dateOfBirth?: string

  /** Nationality name */
  nationality?: string

  /** Country of residence (ISO 3166-1 alpha-2) */
  country?: string

  /** City of residence */
  city?: string

  /** Street address and any apartment number */
  street?: string

  /** ZIP code of residence */
  zipCode?: string
  passportNumber?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsQiwiModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  qiwiAccountNumber?: string
}

export interface PortalPsQiwiModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsQiwiModelsDepositParametersModel
}

export interface PortalPsQiwiModelsDepositParametersModel {
  shop?: string
  transaction?: string
  successUrl?: string
  failUrl?: string
}

export interface PortalPsQiwiModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  billId?: string
  qiwiAccountNumber?: string

  /** @format date-time */
  paymentDate?: string
}

export interface PortalPsQiwiModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  qiwiAccountNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireAnswerModel {
  questions?: PortalUserQuestionnaireModelsApiQuestionValueModel[]
  questionnaireCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionValueModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  answers?: PortalUserQuestionnaireModelsApiAnswerValueModel[]
}

export interface PortalUserQuestionnaireModelsApiAnswerValueModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  userValue?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireTemplateRequestModel {
  questionnaireCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireTemplateModel {
  questionnaireCode?: string
  questions?: PortalUserQuestionnaireModelsApiQuestionTemplateModel[]
}

export interface PortalUserQuestionnaireModelsApiQuestionTemplateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  value?: string
  reference?: string
  answers?: PortalUserQuestionnaireModelsApiAnswerTemplateModel[]
}

export interface PortalUserQuestionnaireModelsApiAnswerTemplateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  value?: string
  reference?: string
  questionAnswerTypeCode?: string
}

export interface PortalPsRbkmoneyModelsApiAddCardsModel {
  accountNumber?: string
  currencyCode?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  buttonText?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsRbkmoneyModelsApiAddModel {
  accountNumber?: string
  currencyCode?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  rbkAccount?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsRbkmoneyModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsRbkmoneyModelsDepositParametersModel
  method?: string
}

export interface PortalPsRbkmoneyModelsDepositParametersModel {
  eshopId?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  orderId?: string
  serviceName?: string
  recipientAmount?: string
  recipientCurrency?: string
  userEmail?: string
  preference?: string
  successUrl?: string
  failUrl?: string
  hash?: string
}

export interface PortalPsRbkmoneyModelsApiNoticeModel {
  accountNumber?: string
  currencyCode?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  rbkTransactionNumber?: string
  rbkUserEmail?: string

  /** @format date-time */
  paymentDate?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityPasswordModelsApiRecoverPasswordModel {
  email?: string
  comment?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserIdentityPasswordModelsApiResetPasswordModel {
  /** Password reset key */
  key?: string

  /** New password */
  password?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserRecoveryModelsApiRecoveryAccountsRequestModel {
  /** Filter by recovery type ['PinCode', 'TraderPassword', 'InvestorPassword', 'ThreeDSecurePass'] */
  recoveryTypes?: string[]

  /** Domain name */
  domainName?: string
}

export interface PortalUserRecoveryModelsApiAccountModel {
  accountIdentifier?: string
  accountName?: string
  recoveryTypes?: PortalUserRecoveryModelsApiRecoveryTypeModel[]
}

export interface PortalUserRecoveryModelsApiRecoveryTypeModel {
  name?: string
}

export interface PortalUserRecoveryModelsApiRecoveryActionsRequestModel {
  recoveryTypeName?: string
  recoveryStatusName?: string

  /** Number of the account or ID of the user card which recovery action is associated with */
  accountIdentifier?: string

  /** @format date-time */
  dateFrom?: string

  /** @format date-time */
  dateTo?: string

  /**
   * Requested page number (default value: 1)
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page (default value: 30)
   * @format int32
   */
  pageSize?: number

  /** Domain name */
  domainName?: string
}

export interface PortalUserRecoveryModelsApiRecoveryActionsResponseModel {
  data?: PortalUserRecoveryModelsApiRecoveryActionModel[]

  /**
   * Current page number
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page
   * @format int32
   */
  pageSize?: number

  /**
   * Total number of records
   * @format int32
   */
  count?: number
}

export interface PortalUserRecoveryModelsApiRecoveryActionModel {
  /**
   * Recovery action ID
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /**
   * Recovery action creation date
   * @format date-time
   */
  created?: string
  recoveryTypeName?: string
  recoveryStatusName?: string

  /** Number of the account or ID of the user card which recovery action is associated with */
  accountIdentifier?: string

  /** Account display name */
  accountName?: string

  /**
   * ID of the attached document set to upload required documents
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  documentSetId?: string
}

export interface PortalUserRecoveryModelsApiRecoveryActionCreateModel {
  recoveryTypeName?: string
  accountIdentifier?: string
  comment?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserRecoveryModelsApiRecoveryActionUpdateModel {
  /**
   * Recovery action ID
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  recoveryStatusName?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserRecoveryModelsApiResetModel {
  recoveryTypeName?: string

  /** Password reset key */
  key?: string

  /** New password/PIN code/etc. value */
  password?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsRedeemModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  redeemCode?: string
}

export interface PortalPsRedeemModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsRedeemModelsApiRedeemCodesRequestModel {
  /** @format date-time */
  dateFrom?: string

  /** @format date-time */
  dateTo?: string

  /**
   * Requested page number (default value: 1)
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page (default value: 30)
   * @format int32
   */
  pageSize?: number

  /** Domain name */
  domainName?: string
}

export interface PortalPsRedeemModelsApiRedeemCodesCollectionModel {
  codes?: PortalPsRedeemModelsRedeemCodeRequestedModel[]
}

export interface PortalPsRedeemModelsRedeemCodeRequestedModel {
  code?: string
  amount?: string
  currencyCode?: string
  date?: string
  status?: string
}

export interface PortalModuleConfigurationModelsApiRegionRegionNameModel {
  regionName?: string

  /** Domain name */
  domainName?: string
}

export interface PortalModuleConfigurationModelsApiRegionCountryModel {
  name?: string
}

export interface PortalModuleConfigurationModelsApiRegionRequestRegionsModel {
  /** Domain name */
  domainName?: string
}

export interface PortalModuleConfigurationModelsApiRegionRegionModel {
  name?: string
  countries?: PortalModuleConfigurationModelsApiRegionCountryModel[]
}

export interface PortalModuleConfigurationModelsApiRegionCreateRegionModel {
  regionName?: string
  countries?: PortalModuleConfigurationModelsApiRegionCountryModel[]

  /** Domain name */
  domainName?: string
}

export interface PortalModuleConfigurationModelsApiRegionUpdateRegionModel {
  currentRegionName?: string
  regionName?: string
  countries?: PortalModuleConfigurationModelsApiRegionCountryModel[]

  /** Domain name */
  domainName?: string
}

export interface PortalModuleConfigurationModelsApiRegionDeleteRegionModel {
  regionName?: string

  /** Domain name */
  domainName?: string
}

export interface PortalModuleRegistrationUserModelsApiRegistrationRequestModel {
  email?: string
  password?: string

  /** Domain name */
  domainName?: string
}

export interface PortalModuleRegistrationUserModelsApiRegistrationResponseModel {
  token?: OauthCoreModelsTokenModel
}

export interface SalvServiceModelsWebhookWebhook {
  action?: string

  /** @format date-time */
  createdTime?: string
  metadata?: SalvServiceModelsWebhookWebhookMetadata
}

export interface SalvServiceModelsWebhookWebhookMetadata {
  alertId?: string
  personId?: string
  transactionId?: string
  entityType?: string
  entityId?: string
  scenarioType?: string
  oldStatus?: string
  newStatus?: string
  status?: string
  sanctionType?: string
  note?: string
  updatedBy?: string
  previousLevel?: string
  currentLevel?: string
}

export interface PortalPsSkrillModelsApiCardIssueParametersResponseModel {
  merchantId?: string
  channelId?: string
  enviroment?: string
  isTestMode?: boolean
  scriptDomainName?: string
}

export interface PortalPsSkrillModelsApiCreditDebitCardsAddModel {
  country?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  skrillCardId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  email?: string
}

export interface PortalPsSkrillModelsApiCreditDebitCardsWithdrawModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  skrillCardId?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  phone?: string
  mobile?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  email?: string
}

export interface PortalPsSkrillModelsApiCardListRequestModel {
  payemntOptionCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsSkrillModelsApiCardModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  skrillCardId?: string
  masked?: string
  brand?: string
  expirationMonth?: string
  expirationYear?: string
}

export interface PortalPsSkrillModelsApiCardIssueRequestModel {
  token?: string
  last?: string
  masked?: string
  bin?: string
  expirationMonth?: string
  expirationYaer?: string
  paymentOptionCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsSkrillModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  email?: string
}

export interface PortalPsSkrillModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsSkrillModelsApiWithdrawModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  email?: string
}

export interface PortalPsSkrillModelsApiNoticeModel {
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  email?: string
}

export interface PortalPsSkrillModelsApiCardDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  skrillCardId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserSettingsModelsApiSmsNotificationSendProfileVerificationStatusNotificationModel {
  accountNumber?: string
  status?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserSettingsModelsApiSmsNotificationSendRecoveryNotificationModel {
  accountNumber?: string
  notificationTypeName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  recoveryActionId?: string
  recoveryActionValue?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserSettingsModelsApiSmsNotificationSendFinanceOperationStatusChangeNotificationModel {
  accountNumber?: string
  notificationTypeName?: string
  currencyCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  financeOperationTypeCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsSorexpayModelsApiWithdrawParametersRequestModel {
  /** Currency code */
  currencyCode?: string

  /** Country code */
  countryCode?: string

  /** Balance operation type */
  balanceOperationTypeName?: string

  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsSorexpayModelsApiWithdrawParametersResponseModel {
  customFields?: string[]
  bankDetailsFields?: string[]
}

export interface PortalPsSorexpayModelsApiWithdrawConfigurationModel {
  /** If user has any cards for SorexPay */
  hasAnyCards?: boolean

  /** Country of passport */
  passportCountryCode?: string

  /** Finance operation type */
  financeOperationType?: string

  /** Balance operation type */
  balanceOperationType?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsSorexpayModelsApiWithdrawModel {
  domainName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  firstName?: string
  lastName?: string
  middleName?: string
  passportCountryCode?: string
  passport?: string
  secondDocumentType?: 'Inn' | 'Poms' | 'Snils'
  secondDocumentNumber?: string
  iban?: string
  swift?: string
  bankName?: string
  bankAddress?: string
  bankCountryCode?: string
  bankAccountCurrencyCode?: string
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsSorexpayModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsSorexpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface VerificationServicesSumsubModelsJsonWebhook {
  type?: string
  applicantId?: string
  applicantType?: string
  externalUserId?: string
  inspectionId?: string
  correlationId?: string

  /**
   * init,
   * pending,
   * queued,
   * completed,
   * onHold
   */
  reviewStatus?: string

  /** @format date-time */
  createdAt?: string
  reviewResult?: VerificationServicesSumsubModelsJsonReviewResult
}

export interface VerificationServicesSumsubModelsJsonReviewResult {
  moderationComment?: string
  clientComment?: string

  /** final answer that should be highly trusted (only 'RED' and 'GREEN' are currently supported) */
  reviewAnswer?: string
  label?: string
  rejectLabels?: string[]
  reviewRejectType?: string
}

export interface PortalModuleVerificationModelsApiDocumentsVerificationVerificationFormRequestModel {
  /** Grade name */
  gradeName?: string

  /** Domain name */
  domainName?: string
}

export interface VerificationServicesSumsubModelsApiSumSubVerificationFormModel {
  /** Name of verfication form */
  verificationFormName?: string

  /** If user has any expired documents */
  hasAnyDocumentsForReload?: boolean

  /** SumSub SDK Widget Configuration */
  widgetConfiguration?: VerificationServicesSumsubModelsSumSubVerificationSumSubWidgetConfigurationModel
}

export interface VerificationServicesSumsubModelsSumSubVerificationSumSubWidgetConfigurationModel {
  /**
   * Verification request Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  verificationRequestId?: string

  /** Api url */
  apiUrl?: string

  /** Access token */
  accessToken?: string

  /** Language code */
  languageCode?: string
}

export interface PortalPsTetherModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsTetherModelsApiCryptoAddressModel {
  value?: string
}

export interface PortalPsTetherModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsTetherModelsApiWithdrawModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  cryptoAddress?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Domain name */
  domainName?: string
}

export interface TpCoreModelsApiTradingProductConfigurationRequestModel {
  /** Trading group name */
  tradingGroup?: string

  /** Trading platform type name */
  tradingPlatformType?: string

  /** Trading product type name */
  tradingProductType?: string

  /** Domain name */
  domainName?: string
}

export interface TpCoreModelsApiTradingProductModel {
  /** Trading product code */
  code?: string

  /** Trading platfrom type name */
  tradingPlatformType?: string

  /** Trading product type name */
  tradingProductType?: string
  currencies?: AtCoreModelsCurrencyModel[]
  leverages?: TpCoreModelsApiLeverageModel[]
  allowAgent?: boolean
  allowPromotion?: boolean
  isAgreementRequired?: boolean
  isCompetitionRequired?: boolean
  isDemo?: boolean
  isMultiCurrency?: boolean
  isVisible?: boolean
}

export interface TpCoreModelsApiLeverageModel {
  name?: string

  /** @format int32 */
  value?: number
}

export interface AtTradingModelsTradingAccountCreateModel {
  domainName?: string
  tradingProductCode?: string
  competitionCode?: string
  currencyCode?: string

  /** @format int32 */
  leverageValue?: number

  /** @format double */
  initialAmount?: number
  promotionCode?: string
  agent?: string
}

export interface AtTradingModelsTradingAccountModel {
  accountNumber?: string
  tradingPlatformName?: string
  tradingProductCode?: string
  currency?: AtCoreModelsCurrencyModel
  leverage?: TpCoreModelsApiLeverageModel

  /** @format int64 */
  tradingAccountKey?: number
  password?: string
  webApiToken?: AtTradingModelsWebApiTokenModel
  investorLogin?: string
  investorPassword?: string
}

export interface AtTradingModelsWebApiTokenModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  key?: string
  secret?: string
  rights?: 'Full' | 'Blocked' | 'Readonly'
  authenticationType?: 'HMAC' | 'Basic'
}

export interface PortalPsTransactproModelsApiDepositConfigurationModel {
  nameOnCard?: string
  street?: string
  city?: string
  state?: string
  zipCode?: string
  phone?: string
  email?: string
}

export interface PortalPsTransactproModelsApiAddModel {
  paymentOptionCode?: string
  paymentRouteCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  nameOnCard?: string
  street?: string
  city?: string
  state?: string
  zipCode?: string
  phone?: string
  email?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsTransactproModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsTransferModelsApiRequestTransferAddModel {
  accountFrom?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  accountTo?: string
  comment?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsTransferModelsApiRequestTransferNoticeModel {
  targetAccount?: string
  isOutgoing?: boolean
  statuses?: string[]

  /** @format date-time */
  dateFrom?: string

  /** @format date-time */
  dateTo?: string

  /**
   * Requested page number (default value: 1)
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page (default value: 30)
   * @format int32
   */
  pageSize?: number

  /** Domain name */
  domainName?: string
}

export interface PortalPsTransferModelsApiRequestTransferResponseModel {
  transfers?: PortalPsTransferModelsApiRequestTransferModel[]

  /** @format int32 */
  total?: number

  /** @format int32 */
  pageNumber?: number

  /** @format int32 */
  pageSize?: number
}

export interface PortalPsTransferModelsApiRequestTransferModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  requestTransferId?: string

  /** @format date-time */
  created?: string
  accountFrom?: string
  accountTo?: string

  /** @format date-time */
  modified?: string
  amount?: string
  currency?: AtCoreModelsCurrencyModel
  status?: string
  comment?: string
  modifierAccount?: string
  isOutgoing?: boolean
  isChangable?: boolean
}

export interface PortalPsTransferModelsApiRequestTransferActionModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  requestTransferId?: string
  status?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiTransferCreateModel {
  /** Sender account number */
  accountFrom?: string

  /**
   * Transfer amount
   * @format double
   */
  amount?: number

  /** Currency code (ISO 4217) */
  currencyFrom?: string

  /** Recipient account number */
  accountTo?: string

  /** Currency code (ISO 4217) */
  currencyTo?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiTransferRequestModel {
  /** Sender's eWallet or trading account number */
  accountFrom?: string

  /** Receiver's eWallet or trading account number */
  accountTo?: string

  /** ISO code of base currency */
  currencyFrom?: string

  /** ISO code of target currency */
  currencyTo?: string

  /**
   * Amount to send
   * @format double
   */
  amount?: number

  /** User's PinCode */
  pinCode?: string
}

export interface FinanceTransferModelsApiTransferResponseModel {
  /** Current operation state */
  status?: string

  /** Chain identifier. Is used for giving all available info about financial operations in chain. */
  chainId?: string
}

export interface FinanceTransferModelsApiAccountModel {
  /** Account number */
  accountNumber?: string

  /** Account title */
  name?: string
}

export interface FinanceTransferModelsApiPocketModel {
  currencyCode?: string
  currencyName?: string
}

export interface PortalPsTrustlyModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsTrustlyModelsApiTrustlyFinanceOperationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsTrustlyModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  orderId?: string
}

export interface PortalPsTrustlyModelsApiWithdrawModel {
  domainName?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsUpholdModelsApiConfigurationModel {
  authorizationLink?: string
}

export interface PortalPsUpholdModelsApiUpholdCardsRequestModel {
  isMerchantCardsRequired?: boolean
  merchantDomainName?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsUpholdModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  upholdCardId?: string
}

export interface PortalPsUpholdModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  upholdCardId?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string
}

export interface PortalPsUpholdModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  upholdCardId?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalModuleAuthApiModelsRegisterApplicantRequestModel {
  applicantId?: string
  verificationServiceName?: string
}

export interface PortalModuleAuthApiModelsRegisterApplicantResponseModel {
  /** Applicant Id */
  applicantId?: string
  clientCredentials?: PortalModuleAuthApiModelsClientCredentialsModel
}

export interface PortalModuleAuthApiModelsClientCredentialsModel {
  /** Client Id */
  clientId?: string

  /** Client Secret */
  clientSecret?: string
}

export interface PortalUserSettingsModelsUserInformationUserActivityRequestModel {
  /**
   * Lower datestamp bound of the user activity period
   * @format date-time
   */
  dateFrom?: string

  /**
   * Upper datestamp bound of the user activity period
   * @format date-time
   */
  dateTo?: string

  /**
   * Page number
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page
   * @format int32
   */
  pageSize?: number
}

export interface PortalUserSettingsModelsUserInformationUserActivityResponseModel {
  /**
   * Total number of records
   * @format int32
   */
  total?: number

  /**
   * Page number
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page
   * @format int32
   */
  pageSize?: number

  /** User activities list */
  activities?: PortalUserSettingsModelsUserInformationUserActivityElementModel[]
}

export interface PortalUserSettingsModelsUserInformationUserActivityElementModel {
  /**
   * Date-time of user login
   * @format date-time
   */
  loginDate?: string

  /** Domain name */
  domain?: string

  /** IP address from which the client accessed the system */
  ip?: string

  /** The type of user device */
  userDevice?: string

  /** Identify which browser and version were being used */
  userAgent?: string

  /** Identify which operating system and version were being used */
  operatingSystem?: string

  /** IP address blacklisted */
  ipBlacklisted?: boolean

  /** IP address whitelisted */
  ipWhitelisted?: boolean

  /** Unsuccessful login attempt */
  failed?: boolean
}

export interface PortalUserSettingsModelsUserInformationIpListModel {
  /** The type of Ip access list */
  type?: 'Blacklist' | 'Whitelist'

  /** A list of Ip addresses */
  ipAddresses?: string[]
}

export interface PortalUserSettingsModelsUserInformationIpAddressAddModel {
  ipListType?: 'Blacklist' | 'Whitelist'

  /** Ip address value */
  value?: string
}

export interface PortalUserSettingsModelsUserInformationIpAddressDeleteModel {
  ipListType?: 'Blacklist' | 'Whitelist'

  /** Ip address value */
  value?: string
}

export interface PortalUserSettingsModelsUserInformationUserSummaryResponseModel {
  /** eWallet number */
  eWallet?: string

  /** eWallet Iban BIC number */
  ibanBic?: string

  /** User account type */
  userType?: string

  /**
   * eWallet registration date
   * @format date-time
   */
  registrationDate?: string

  /**
   * Last successful user login date
   * @format date-time
   */
  lastLoginDate?: string

  /** Domain where user was successfully authorized last time */
  lastLoginDomain?: string

  /** Primary language */
  preferredLanguage?: string

  /** List of user profiles */
  profiles?: PortalUserSettingsModelsUserInformationProfileModel[]

  /** Verification details */
  verification?: PortalUserSettingsModelsUserInformationVerificationModel

  /** A list of user account security settings */
  accountSecuritySettings?: PortalUserSettingsModelsUserInformationAccountSecuritySettingsModel
}

export interface PortalUserSettingsModelsUserInformationProfileModel {
  /** Account type name */
  type?: string

  /** Name of the system to which a profile information belongs */
  referenceType?: string

  /** Current profile */
  active?: boolean

  /** User nickname in the system */
  nickname?: string

  /** User title */
  title?: string

  /** User first name */
  firstName?: string

  /** User first name in original */
  firstNameOriginal?: string

  /** User last name */
  lastName?: string

  /** User last name in original */
  lastNameOriginal?: string

  /** Date of birth */
  dateOfBirth?: string

  /** Nationality */
  nationality?: string

  /** Passport Id number */
  passportIdNumber?: string

  /** User address */
  address?: PortalUserSettingsModelsUserInformationAddressModel

  /** List of user contacts */
  contacts?: PortalUserSettingsModelsUserInformationContactModel[]

  /** Company name */
  companyName?: string

  /** Company name in original */
  companyNameOriginal?: string

  /** Company web site URL */
  webSiteUrl?: string

  /** Appointment in the company */
  position?: string

  /** The user holds a position of director in the company */
  director?: boolean

  /** A unique code(identifier) ​​assigned to legal entities in accordance with the RSM ISO 17442 standard and used in conducting transactions and reporting in financial markets */
  legalEntityIdentifier?: string

  /** Current employment state */
  employmentStatus?: string

  /** The name of the employer company */
  employeeName?: string

  /** Company activity type */
  natureOfBusiness?: string
}

export interface PortalUserSettingsModelsUserInformationVerificationModel {
  /** Current user grade */
  grade?: string

  /** A list of uploaded documents */
  documentSets?: PortalUserSettingsModelsUserInformationDocumentSetModel[]
}

export interface PortalUserSettingsModelsUserInformationAccountSecuritySettingsModel {
  /** A list of enabled Identity factors */
  multiFactorVerification?: PortalUserSettingsModelsUserInformationMultiFactorVerificationModel[]
}

export interface PortalUserSettingsModelsUserInformationAddressModel {
  /** Country name */
  country?: string

  /** Country code */
  countryCode?: string

  /** District name */
  district?: string

  /** State name */
  state?: string

  /** State name in original */
  stateOriginal?: string

  /** City name */
  cityName?: string

  /** City name in original */
  cityNameOriginal?: string

  /** Address value */
  value?: string

  /** Address value in original */
  valueOriginal?: string

  /** Zip code number */
  zipCode?: string

  /** Last 4 digits of a zip code that represent a specific delivery route within that overall delivery area */
  zipCodeSuffix?: string
}

export interface PortalUserSettingsModelsUserInformationContactModel {
  /** Contact method name */
  contactMethod?: string

  /** Contact value */
  value?: string

  /** Prefferable contact for communication */
  primary?: boolean

  /** The user doesn't mind that this contact is used for communication with him */
  allowed?: boolean

  /** User was contacted */
  achieved?: boolean

  /** The contact is verified by user */
  verified?: boolean

  /** Contact is used for sending  notification messages */
  sendNotifications?: boolean
}

export interface PortalUserSettingsModelsUserInformationDocumentSetModel {
  /** Name of the system to which a profile information belongs */
  type?: string

  /** Uploaded documents */
  documents?: PortalUserSettingsModelsUserInformationDocumentModel[]

  /** Comment left by user who verified provided documents */
  comment?: string
}

export interface PortalUserSettingsModelsUserInformationMultiFactorVerificationModel {
  /** Name of the Identity action */
  action?: string

  /** Action is switched on */
  enabled?: boolean
}

export interface PortalUserSettingsModelsUserInformationDocumentModel {
  /** A type of the document */
  type?: string

  /** Current status of the document */
  status?: string

  /** Comment left by user who verified client document */
  comment?: string
}

export interface PortalUserSettingsModelsUserInformationSearchUserRequestModel {
  /** User login data */
  users?: string[]

  /** Domain name */
  domainName?: string
}

export interface PortalUserSettingsModelsUserInformationUserModel {
  /** User login data */
  user?: string

  /** User account number */
  accountNumber?: string

  /** User first name */
  firstName?: string

  /** User last name */
  lastName?: string
}

export interface PortalUserBlockModelsApiUserStatusModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalUserBlockModelsApiAccountBlockModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  accountId?: string
  accountNumber?: string
  accountDisplayNumber?: string
  accountCurrencyCode?: string
  changedBy?: string
  changedByIban?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  commentId?: string
  commentDescription?: string
  customComment?: string
  isActive?: boolean
  isArchived?: boolean
  isChangedByUserNameClickable?: boolean

  /** @format date-time */
  statusChangedDate?: string
}

export interface PortalUserBlockModelsApiUserBlockModel {
  accountIds?: string[]
  isEnabled?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  commentId?: string
  customComment?: string

  /** Domain name */
  domainName?: string
}

export interface PortalModuleVerificationModelsApiDocumentsVerificationVerificationFormModel {
  /** Name of verfication form */
  verificationFormName?: string

  /**
   * Document set ID
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  documentSetId?: string

  /** Comment for document set */
  documentSetComment?: string

  /** Types of document set elements */
  documentSetElements?: string[]

  /** If user has any documents in document set */
  hasAnyDocuments?: boolean

  /** If document set is already verified */
  isAlreadyVerified?: boolean

  /** Max file size (Mb) */
  fileSizeMax?: string
}

export interface PortalModuleVerificationModelsApiDocumentsVerificationDocumentsVerificationModel {
  /** Domain name */
  domainName?: string
}

export interface PortalModuleVerificationModelsApiUploadDocumentModel {
  /**
   * Document set ID
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  documentSetId?: string

  /** Document type name */
  documentType?: string

  /** Domain name */
  domainName?: string
}

export interface PortalModuleVerificationModelsApiDocumentsVerificationDocumentModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  name?: string
  status?: string
  comment?: string

  /** @format date-time */
  expirationDate?: string
  isCanBeDeleted?: boolean
  number?: string

  /** @format date-time */
  issuingDate?: string
}

export interface PortalModuleVerificationModelsApiDocumentsVerificationDocumentDeleteModel {
  /**
   * Id of requested document
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
}

export interface PortalModuleVerificationModelsApiDocumentTypesRequestModel {
  /** Grade */
  gradeName?: string

  /** Document set element */
  documentSetElementName?: string

  /** Document set type */
  documentSetTypeName?: string

  /** Domain name */
  domainName?: string
}

export interface PortalModuleVerificationModelsApiUserGradesModel {
  name?: string
  nameLocalized?: string
  grades?: PortalModuleVerificationModelsApiGradeGroupModel[]
}

export interface PortalModuleVerificationModelsApiGradeGroupModel {
  name?: string
  nameLocalized?: string
  verificationStatuses?: PortalModuleVerificationModelsApiVerificationStatusModel[]
}

export interface PortalModuleVerificationModelsApiVerificationStatusModel {
  form?: string
  formLocalized?: string
  status?: string
  statusLocalized?: string
}

export interface PortalModuleVerificationModelsApiVerificationConfigurationRequestModel {
  /** Country code (ISO 3166-1 alpha-2) - if not set, method will return configurations for user's local personal profile country */
  countryCode?: string

  /** Domain name */
  domainName?: string
}

export interface PortalModuleVerificationModelsApiVerificationConfigurationModel {
  grades?: PortalModuleVerificationModelsApiGradeModel[]
}

export interface PortalModuleVerificationModelsApiGradeModel {
  /** Grade name */
  name?: string

  /**
   * Grade value
   * @format int32
   */
  value?: number

  /** Indicates current user's grade */
  isCurrent?: boolean

  /** Steps of the grade verification procedure */
  steps?: PortalModuleVerificationModelsApiVerificationStepModel[]
}

export interface PortalModuleVerificationModelsApiVerificationStepModel {
  /**
   * Verification step number
   * @format int32
   */
  value?: number

  /** Verification forms the user can choose from to complete the verification step */
  forms?: PortalModuleVerificationModelsApiVerificationFormModel[]
}

export interface PortalModuleVerificationModelsApiVerificationFormModel {
  /** Verification form name */
  name?: string

  /** Verification status of the form (can be null if the user hasn't started verification yet) */
  status?: 'Requested' | 'Approved' | 'Rejected' | 'Filling'

  /**
   * Verification form priority
   * @format int32
   */
  value?: number
}

export interface PortalModuleVerificationModelsApiUserTypesRequestModel {
  isEditable?: boolean

  /** Domain name */
  domainName?: string
}

export interface PortalModuleVerificationModelsApiUserTypeModel {
  name?: string
  isEditable?: boolean
}

export interface PortalModuleVerificationModelsApiUserTypeUpdateModel {
  /** New user type name */
  userType?: string

  /** MFA state */
  state?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsWalletoneModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsWalletoneModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsWalletoneModelsDepositParametersModel
}

export interface PortalPsWalletoneModelsDepositParametersModel {
  WMI_MERCHANT_ID?: string
  WMI_PAYMENT_AMOUNT?: string
  WMI_CURRENCY_ID?: string
  WMI_PAYMENT_NO?: string
  WMI_DESCRIPTION?: string
  WMI_SUCCESS_URL?: string
  WMI_FAIL_URL?: string
  WMI_AUTO_ACCEPT?: string
  WMI_PTENABLED?: string
  WMI_SIGNATURE?: string
}

export interface PortalPsWalletoneModelsApiNoticeModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  walletOneAccount?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string
}

export interface PortalPsWebmoneyModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsWebmoneyModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsWebmoneyModelsDepositParametersModel
}

export interface PortalPsWebmoneyModelsDepositParametersModel {
  /** Payee purse */
  LMI_PAYEE_PURSE?: string

  /**
   * Payment amount
   * @format double
   */
  LMI_PAYMENT_AMOUNT?: number

  /** Payment number */
  LMI_PAYMENT_NO?: string

  /** Result url */
  LMI_RESULT_URL?: string

  /** Success url */
  LMI_SUCCESS_URL?: string

  /** Fail url */
  LMI_FAIL_URL?: string

  /** Payment description */
  LMI_PAYMENT_DESC?: string

  /** User ip */
  user_ip?: string

  /** User server */
  user_server?: string

  /**
   * Transaction id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  transaction?: string
}

export interface PortalPsWebmoneyModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  purseNumber?: string
  securityCode?: string
}

export interface PortalPsWebmoneyModelsApiWithdrawModel {
  domainName?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  purseNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsWebpayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
}

export interface PortalPsWebpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsWebpayModelsDepositParametersModel
}

export interface PortalPsWebpayModelsDepositParametersModel {
  '*scart'?: string
  wsb_version?: string
  wsb_storeid?: string
  wsb_order_tag?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  wsb_order_num?: string
  wsb_currency_id?: string
  wsb_return_url?: string
  wsb_cancel_return_url?: string
  wsb_notify_url?: string
  wsb_customer_id?: string

  /** @format int32 */
  wsb_test?: number
  'wsb_invoice_item_name[0]'?: string

  /** @format int32 */
  'wsb_invoice_item_quantity[0]'?: number
  'wsb_invoice_item_price[0]'?: string
  wsb_total?: string
  wsb_phone?: string
  wsb_email?: string

  /** @format int64 */
  wsb_seed?: number
  wsb_signature?: string
}

export interface PortalPsWebpayModelsApiWithdrawModel {
  domainName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
}

export interface PortalPsWireModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  bankCountryCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Payer name */
  russianName?: string

  /** Payer address */
  address?: string
}

export interface PortalPsWireModelsApiDepositModel {
  invoice?: object

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsWireModelsApiBankDetailsRequestModel {
  domainName?: string
  paymentOptionCode?: string
  bankCountryCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  currencyCode?: string

  /** Payer name */
  russianName?: string

  /** Payer address */
  address?: string
}

export interface PortalPsWireModelsApiBankDetailsModel {
  bankDetails?: object
}

export interface PortalPsWireModelsApiBankRequestModel {
  bankCountryCode?: string
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  paymentTypeAccountId?: string
  beneficiaryAccountNumber?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsWireModelsApiBankModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  nfsType?: string
}

export interface PortalPsWireModelsApiTransferDetailsRequestModel {
  bankCode?: string
  beneficiaryAccountNumber?: string
  nfsType?: string
}

export interface PortalPsWireModelsApiTransferDetailsModel {
  bankName?: string
  bankCountry?: string
  bankCity?: string
  swiftCode?: string
}

export interface PortalPsWireModelsApiAdditionalDetailsRequestModel {
  bankCountryCode?: string
  currencyCode?: string
  accountNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  paymentTypeAccountId?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsWireModelsApiAdditionalDetailsModel {
  details?: PortalPsWireModelsApiAdditionalDetailModel[]
}

export interface PortalPsWireModelsApiAdditionalDetailModel {
  systemKey?: string
  key?: string
  value?: string
  isEditable?: boolean
  isRequired?: boolean
  reference?: string
}

export interface PortalPsWireModelsApiWithdrawModel {
  domainName?: string
  paymentOptionCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  bankCountryCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  nfsType?: 'Swift' | 'Aba' | 'Iban' | 'Bik' | 'Bsb'

  /** Bik/Aba/Swift value */
  bankCode?: string

  /** Bank/institution name */
  bankName?: string

  /** Iban */
  beneficiaryAccountNumber?: string

  /** Individual taxpayer number (for bik only) */
  individualTaxpayerNumber?: string

  /** Bank account number (for bik only) */
  bankAccountNumber?: string

  /** Payment edited details */
  editedDetails?: PortalPsWireModelsApiEditedDetailModel[]

  /**
   * Payment type account
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  paymentTypeAccountId?: string

  /** If need to save template */
  saveAsTemplate?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** MFA state */
  state?: string
}

export interface PortalPsWireModelsApiEditedDetailModel {
  systemKey?: string
  value?: string
}

export interface PortalPsWireModelsApiBankCurrenciesRequestModel {
  balanceOperationTypeName?: string
  countryCode?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsWireModelsApiBankCountriesRequestModel {
  balanceOperationTypeName?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsWireModelsApiNfsOptionsRequestModel {
  countryCode?: string
  currencyCode?: string
}

export interface PortalPsWireModelsApiNfsOptionModel {
  name?: string
}

export interface PortalPsWireModelsApiBanksRequestModel {
  balanceOperationTypeName?: string
  countryCode?: string
  currencyCode?: string
  gatewayPublicKey?: string
  userId?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsWireModelsApiBanksResponseModel {
  banks?: SystemCollectionsGenericKeyValuePair2SystemGuidMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[]
  russianTransferFields?: string[]
}

export interface PortalPsWireModelsApiCountryByAccountNumberRequestModel {
  balanceOperationTypeName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  paymentTypeAccountId?: string
  value?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsWireModelsApiCountryModel {
  countryCode?: string
}

export interface PortalPsWireModelsApiInvoiceHeaderModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  wireId?: string
  paymentOption?: string
  accountNumber?: string
  amount?: string
  currencyCode?: string
}

export interface PortalPsWireModelsApiInvoiceRequestModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  wireId?: string

  /** Domain name */
  domainName?: string
}

export interface PortalPsYandexmoneyModelApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsYandexmoneyModelApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsYandexmoneyModelDepositParametersModel
}

export interface PortalPsYandexmoneyModelDepositParametersModel {
  shopId?: string
  scid?: string
  sum?: string
  customerNumber?: string
  orderNumber?: string
  shopSuccessURL?: string
  shopFailURL?: string
  paymentType?: string
  user_ip?: string
  BankId?: string
}

export interface PortalPsYandexmoneyModelApiNoticeModel {
  domainName?: string
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  yandexMoneyAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
}

export interface PortalPsYandexmoneyModelApiWithdrawModel {
  domainName?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  yandexMoneyAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsZotapayModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string
  PaymentOptionCode?: string

  /** @format double */
  amount?: number

  /** Domain name */
  domainName?: string
}

export interface PortalPsZotapayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsZotapayModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  beneficiaryAccountNumber?: string
  currencyCode?: string
  PaymentOptionCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  bankProvince?: string
  bankCity?: string
  bankBranch?: string
  routingNumber?: string

  /** Domain name */
  domainName?: string
}

export interface SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089 {
  key?: string
  value?: string
}

export interface SystemCollectionsGenericKeyValuePair2SystemDecimalMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089AtCoreModelsCurrencyModelAtCoreVersion1000CultureNeutralPublicKeyTokenNull {
  /** @format double */
  key?: number
  value?: AtCoreModelsCurrencyModel
}

export interface FinanceConversionModelsSymbolResponseModel1AtCoreModelsCurrencyModelAtCoreVersion1000CultureNeutralPublicKeyTokenNull {
  /** Symbol code */
  name?: string

  /** Symbol description */
  description?: string

  /** Asset 1 */
  asset1?: AtCoreModelsCurrencyModel

  /** Asset 2 */
  asset2?: AtCoreModelsCurrencyModel
}

export interface FinanceConversionModelsSymbolResponseModel1SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089 {
  /** Symbol code */
  name?: string

  /** Symbol description */
  description?: string

  /** Asset 1 */
  asset1?: string

  /** Asset 2 */
  asset2?: string
}

export interface SystemCollectionsGenericKeyValuePair2SystemByteMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089 {
  /** @format int32 */
  key?: number
  value?: string
}

export interface SystemCollectionsGenericKeyValuePair2SystemInt32MscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089 {
  /** @format int32 */
  key?: number
  value?: string
}

export interface SystemCollectionsGenericKeyValuePair2SystemGuidMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089 {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  key?: string
  value?: string
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
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void
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
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://api.fxopen.com'
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

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter(key => 'undefined' !== typeof query[key])
    return keys
      .map(key =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
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

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
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

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
          ...(requestParams.headers || {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async response => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch(e => {
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
 * @title portal.webapi
 * @version v1
 * @baseUrl https://api.fxopen.com
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Accentpay
     * @name AccentpayApiCardWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/AccentpayApi/Card/Withdraw
     */
    accentpayApiCardWithdraw: (
      model: PortalPsAccentpayModelsApiCardWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/AccentpayApi/Card/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accentpay
     * @name AccentpayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/AccentpayApi/Add
     */
    accentpayApiAdd: (model: PortalPsAccentpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAccentpayModelsApiDepositModel, any>({
        path: `/api/AccentpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accentpay
     * @name AccentpayApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/AccentpayApi/Notice
     */
    accentpayApiNotice: (
      model: PortalPsAccentpayModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/AccentpayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accentpay
     * @name AccentpayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/AccentpayApi/Withdraw
     */
    accentpayApiWithdraw: (
      model: PortalPsAccentpayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/AccentpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Provide detailed information about trading account.
     *
     * @tags Account
     * @name AccountApiAccountDetails
     * @summary Account details info (only for authorized users)
     * @request GET:/api/AccountApi/AccountDetails
     */
    accountApiAccountDetails: (query: { accountNumber: string }, params: RequestParams = {}) =>
      this.request<OauthCoreModelsAccountDetailsResponseModel, void>({
        path: `/api/AccountApi/AccountDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountApiCollection
     * @summary  (only for authorized users)
     * @request GET:/api/AccountApi/Collection
     */
    accountApiCollection: (query?: { accountType?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleAuthApiModelsAccountsResponseModel, any>({
        path: `/api/AccountApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advcash
     * @name AdvcashApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/AdvcashApi/Add
     */
    advcashApiAdd: (model: PortalPsAdvcashModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAdvcashModelsApiDepositModel, any>({
        path: `/api/AdvcashApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advcash
     * @name AdvcashApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/AdvcashApi/Notice
     */
    advcashApiNotice: (model: PortalPsAdvcashModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/AdvcashApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advcash
     * @name AdvcashApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/AdvcashApi/Withdraw
     */
    advcashApiWithdraw: (
      model: PortalPsAdvcashModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/AdvcashApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airtm
     * @name AirtmApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/AirtmApi/Add
     */
    airtmApiAdd: (model: PortalPsAirtmModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAirtmModelsApiDepositModel, any>({
        path: `/api/AirtmApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airtm
     * @name AirtmApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/AirtmApi/Notice
     */
    airtmApiNotice: (model: PortalPsAirtmModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/AirtmApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airtm
     * @name AirtmApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/AirtmApi/Withdraw
     */
    airtmApiWithdraw: (model: PortalPsAirtmModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/AirtmApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AlfaBank
     * @name AlfaBankApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/AlfaBankApi/Add
     */
    alfaBankApiAdd: (model: PortalPsAlfabankModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAlfabankModelsApiDepositModel, any>({
        path: `/api/AlfaBankApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AlfaBank
     * @name AlfaBankApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/AlfaBankApi/Withdraw
     */
    alfaBankApiWithdraw: (
      model: PortalPsAlfabankModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/AlfaBankApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AlfaBank
     * @name AlfaBankApiAvailableWithdrawBalance
     * @summary  (only for authorized users)
     * @request GET:/api/AlfaBankApi/AvailableWithdrawBalance
     */
    alfaBankApiAvailableWithdrawBalance: (
      query?: { userCardId?: string; currencyCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsAlfabankModelsApiAvailableWithdrawBalanceModel, any>({
        path: `/api/AlfaBankApi/AvailableWithdrawBalance`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Allpay88
     * @name Allpay88ApiProvinces
     * @summary  (only for authorized users)
     * @request GET:/api/Allpay88Api/Provinces
     */
    allpay88ApiProvinces: (query?: { provinceCode?: string }, params: RequestParams = {}) =>
      this.request<PortalPsAllpay88ModelsApiProvinceModel[], any>({
        path: `/api/Allpay88Api/Provinces`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Allpay88
     * @name Allpay88ApiBanks
     * @summary  (only for authorized users)
     * @request GET:/api/Allpay88Api/Banks
     */
    allpay88ApiBanks: (params: RequestParams = {}) =>
      this.request<PortalPsAllpay88ModelsApiBankModel[], any>({
        path: `/api/Allpay88Api/Banks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Allpay88
     * @name Allpay88ApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/Allpay88Api/Add
     */
    allpay88ApiAdd: (model: PortalPsAllpay88ModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAllpay88ModelsApiDepositModel, any>({
        path: `/api/Allpay88Api/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Allpay88
     * @name Allpay88ApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/Allpay88Api/Withdraw
     */
    allpay88ApiWithdraw: (
      model: PortalPsAllpay88ModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/Allpay88Api/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Astropay
     * @name AstropayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/AstropayApi/Add
     */
    astropayApiAdd: (model: PortalPsAstropayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAstropayModelsApiDepositModel, any>({
        path: `/api/AstropayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Astropay
     * @name AstropayApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/AstropayApi/Notice
     */
    astropayApiNotice: (model: PortalPsAstropayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/AstropayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Astropay
     * @name AstropayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/AstropayApi/Withdraw
     */
    astropayApiWithdraw: (
      model: PortalPsAstropayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/AstropayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
 * @description The method is used for token reissue procedure while access + refresh tokens are expired. For authorization client uses DeviceId and DeviceSecret (Base64 encrypted) which he got in response of ConfirmBinding method. The user step by step passes the verification factors and in a result receives new authorization data.
 * 
 * @tags Auth
 * @name TokenReissueApiTokenReissue
 * @summary Request Token Reissue
ToDo: verify if required factor is not configured for user
 * @request POST:/api/TokenReissueApi/TokenReissue
 */
    tokenReissueApiTokenReissue: (
      model: PortalModuleAuthExternalModelsTokenIssueRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleAuthExternalModelsTokenIssueResponseModel, void>({
        path: `/api/TokenReissueApi/TokenReissue`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns boolean value indicating whether security code is sent
     *
     * @tags Auth
     * @name TokenReissueApiSendCode
     * @summary Send security code
     * @request POST:/api/TokenReissueApi/SendCode
     */
    tokenReissueApiSendCode: (
      model: PortalModuleAuthExternalModelsTokenReissueSendCodeModel,
      params: RequestParams = {},
    ) =>
      this.request<boolean, void>({
        path: `/api/TokenReissueApi/SendCode`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Initiates request for the registration procedure
     *
     * @tags Auth
     * @name ExternalDeviceApiRegistration
     * @summary Registration
     * @request POST:/api/ExternalDeviceApi/Registration
     */
    externalDeviceApiRegistration: (
      model: PortalModuleAuthExternalModelsRegistrationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleAuthExternalModelsRegisteredDeviceModel, void>({
        path: `/api/ExternalDeviceApi/Registration`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Initiates request for establishing communication between two systems. The method is also used for reactivation ExternalDeviceIdentity where the client get a new QR-code (in Cabinet on Settings/AccountSecurity page ) after  clicking "Reactivate" button.
     *
     * @tags Auth
     * @name ExternalDeviceApiBinding
     * @summary Request Binding
     * @request POST:/api/ExternalDeviceApi/Binding
     */
    externalDeviceApiBinding: (
      model: PortalModuleAuthExternalModelsBindingRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleAuthExternalModelsTokenIssueResponseModel, void>({
        path: `/api/ExternalDeviceApi/Binding`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns boolean value indicating whether security code is sent
     *
     * @tags Auth
     * @name ExternalDeviceApiSendCode
     * @summary Send security code
     * @request POST:/api/ExternalDeviceApi/SendCode
     */
    externalDeviceApiSendCode: (
      model: PortalModuleAuthExternalModelsBindingSendCodeModel,
      params: RequestParams = {},
    ) =>
      this.request<boolean, void>({
        path: `/api/ExternalDeviceApi/SendCode`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name ExternalDeviceApiUpdate
     * @summary Update user's custom parameter (only for authorized users)
     * @request POST:/api/ExternalDeviceApi/Update
     */
    externalDeviceApiUpdate: (
      model: PortalModuleAuthExternalModelsUpdateDeviceSettingModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/ExternalDeviceApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name ExternalDeviceApiSettings
     * @summary Get full external device settings collection (only for authorized users)
     * @request GET:/api/ExternalDeviceApi/Settings
     */
    externalDeviceApiSettings: (query?: { deviceId?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleAuthExternalModelsDeviceSettingModel[], void>({
        path: `/api/ExternalDeviceApi/Settings`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description The introspection endpoint is an OAuth 2.0 endpoint that takes a parameter representing an OAuth 2.0 token and returns a JSON document representing the meta information surrounding the token, including whether this token is currently active.
     *
     * @tags Auth
     * @name OAuthApiIntrospect
     * @summary Introspection endpoint
     * @request POST:/api/OAuthApi/Introspect
     */
    oAuthApiIntrospect: (data: { token: string }, params: RequestParams = {}) =>
      this.request<
        { active: boolean; user_id?: string; token_type?: string; exp?: number; iat?: number },
        void
      >({
        path: `/api/OAuthApi/Introspect`,
        method: 'POST',
        body: data,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name OAuthApiRevoke
     * @summary  (only for authorized users)
     * @request POST:/api/OAuthApi/Revoke
     */
    oAuthApiRevoke: (params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/OAuthApi/Revoke`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name QrCodeApiSignIn
     * @summary  (only for authorized users)
     * @request POST:/api/QrCodeApi/SignIn
     */
    qrCodeApiSignIn: (
      model: PortalModuleAuthExternalModelsSignInModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/QrCodeApi/SignIn`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Awepay
     * @name AwepayApiBanks
     * @summary  (only for authorized users)
     * @request GET:/api/AwepayApi/Banks
     */
    awepayApiBanks: (query?: { currencyCode?: string }, params: RequestParams = {}) =>
      this.request<PortalPsAwepayModelsApiBankModel[], any>({
        path: `/api/AwepayApi/Banks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Awepay
     * @name AwepayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/AwepayApi/Add
     */
    awepayApiAdd: (model: PortalPsAwepayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAwepayModelsApiDepositModel, any>({
        path: `/api/AwepayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Awepay
     * @name AwepayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/AwepayApi/Withdraw
     */
    awepayApiWithdraw: (model: PortalPsAwepayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/AwepayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the bank products collection.
     *
     * @tags Bank
     * @name BankProductApiCollection
     * @summary Bank products (only for authorized users)
     * @request GET:/api/BankProductApi/Collection
     */
    bankProductApiCollection: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/BankProductApi/Collection`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank
     * @name BankAccountApiCreate
     * @summary Create bank account (only for authorized users)
     * @request POST:/api/BankAccountApi/Create
     */
    bankAccountApiCreate: (
      model: AtBankModelsCreateAccountRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<AtBankModelsAccountResponseModel, void>({
        path: `/api/BankAccountApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags bePaid
     * @name BePaidApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/BePaidApi/Add
     */
    bePaidApiAdd: (request: PortalPsBepaidModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsBepaidModelsApiDepositModel, any>({
        path: `/api/BePaidApi/Add`,
        method: 'POST',
        body: request,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags bePaid
     * @name BePaidApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/BePaidApi/Withdraw
     */
    bePaidApiWithdraw: (model: PortalPsBepaidModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/BePaidApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bfopay
     * @name BfopayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/BfopayApi/Add
     */
    bfopayApiAdd: (model: PortalPsBfopayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsBfopayModelsApiDepositModel, any>({
        path: `/api/BfopayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bfopay
     * @name BfopayApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/BfopayApi/Notice
     */
    bfopayApiNotice: (model: PortalPsBfopayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/BfopayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bfopay
     * @name BfopayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/BfopayApi/Withdraw
     */
    bfopayApiWithdraw: (model: PortalPsBfopayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/BfopayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardConfigurationApiIssueLimit
     * @summary  (only for authorized users)
     * @request GET:/api/CardConfigurationApi/IssueLimit
     */
    cardConfigurationApiIssueLimit: (
      query?: {
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        cardFormTypeCode?: string
        currencyCode?: string
        countryCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardIssueLimitModel, any>({
        path: `/api/CardConfigurationApi/IssueLimit`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardTemplateApiSave
     * @summary Save card for future payments (only for authorized users)
     * @request POST:/api/CardTemplateApi/Save
     */
    cardTemplateApiSave: (
      model: PortalPsCreditdebitcardsModelsApiCardTemplateSaveModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardModel, any>({
        path: `/api/CardTemplateApi/Save`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardTemplateApiDelete
     * @summary Delete saved card (only for authorized users)
     * @request DELETE:/api/CardTemplateApi/Delete
     */
    cardTemplateApiDelete: (
      query?: { userCardId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/CardTemplateApi/Delete`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name UserCardApiExpirationDateMonth
     * @summary Gets month collection
     * @request GET:/api/UserCardApi/ExpirationDateMonth
     */
    userCardApiExpirationDateMonth: (params: RequestParams = {}) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/UserCardApi/ExpirationDateMonth`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name UserCardApiExpirationDateYear
     * @summary Gets year collection
     * @request GET:/api/UserCardApi/ExpirationDateYear
     */
    userCardApiExpirationDateYear: (params: RequestParams = {}) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/UserCardApi/ExpirationDateYear`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiCreate
     * @summary Save card for future payments (only for authorized users)
     * @request POST:/api/CardApi/Create
     * @deprecated
     */
    cardApiCreate: (
      model: PortalPsCreditdebitcardsModelsApiCardTemplateSaveModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardModel, any>({
        path: `/api/CardApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiGet
     * @summary Get user's cards (only for authorized users)
     * @request GET:/api/CardApi/Get
     */
    cardApiGet: (
      query?: {
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        cardStatusName?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardModel[], void>({
        path: `/api/CardApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiGetInfo
     * @summary OBSOLETE!!! Instead collect data from GET api/CardApi/Get, GET api/CardApi/Balance and GET api/CardApi/DeliveryInfo (only for authorized users)
     * @request GET:/api/CardApi/GetInfo/{id}
     * @deprecated
     */
    cardApiGetInfo: (id: string, params: RequestParams = {}) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardFullDetailsModel, any>({
        path: `/api/CardApi/GetInfo/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiGetBalance
     * @summary OBSOLETE!!! Use GET api/CardApi/Balance instead (only for authorized users)
     * @request GET:/api/CardApi/GetBalance/{id}
     * @deprecated
     */
    cardApiGetBalance: (id: string, params: RequestParams = {}) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardBalanceModel, any>({
        path: `/api/CardApi/GetBalance/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiBalance
     * @summary Get card balance (only for authorized users)
     * @request GET:/api/CardApi/Balance
     */
    cardApiBalance: (
      query?: { userCardId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardCurrencyBalanceModel[], any>({
        path: `/api/CardApi/Balance`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiDeliveryInfo
     * @summary Get delivery info for plastic card (only for authorized users)
     * @request GET:/api/CardApi/DeliveryInfo
     */
    cardApiDeliveryInfo: (
      query?: { userCardId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiDeliveryInfoModel, any>({
        path: `/api/CardApi/DeliveryInfo`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiConfiguration
     * @summary Get available card issue options (only for authorized users)
     * @request GET:/api/CardApi/Configuration
     */
    cardApiConfiguration: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardProductsModel, any>({
        path: `/api/CardApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Method returns true if card was issued successfully
     *
     * @tags Card
     * @name CardApiIssue
     * @summary Issue a new card (only for authorized users)
     * @request POST:/api/CardApi/Issue
     */
    cardApiIssue: (
      model: PortalPsCreditdebitcardsModelsApiIssueCardModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/CardApi/Issue`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description If provided activation code is valid, method changes card status from Pending to Active.
     *
     * @tags Card
     * @name CardApiActivate
     * @summary Activate plastic card (only for authorized users)
     * @request POST:/api/CardApi/Activate
     */
    cardApiActivate: (
      model: PortalPsCreditdebitcardsModelsApiActivateCardModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/CardApi/Activate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Method is designed for both plastic and virtual cards. The selected card's status must be 'Active'.
     *
     * @tags Card
     * @name CardApiFreeze
     * @summary Block card (only for authorized users)
     * @request POST:/api/CardApi/Freeze
     */
    cardApiFreeze: (
      model: PortalPsCreditdebitcardsModelsApiFreezeCardModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/CardApi/Freeze`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Method is designed for both plastic and virtual cards. The selected card's status must be 'Blocked'.
     *
     * @tags Card
     * @name CardApiDefrost
     * @summary Unblock card (only for authorized users)
     * @request POST:/api/CardApi/Defrost
     */
    cardApiDefrost: (
      model: PortalPsCreditdebitcardsModelsApiDefrostCardModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/CardApi/Defrost`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Functionality is available only for active cards. Method returns true if security code was sent successfully.
     *
     * @tags Card
     * @name CardApiSendSecurityCode
     * @summary Retrieve virtual card CVV or plastic card PIN code (only for authorized users)
     * @request POST:/api/CardApi/SendSecurityCode
     * @deprecated
     */
    cardApiSendSecurityCode: (
      model: PortalPsCreditdebitcardsModelsApiSendSecurityCodeModel,
      params: RequestParams = {},
    ) =>
      this.request<boolean, any>({
        path: `/api/CardApi/SendSecurityCode`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Functionality is available only for active cards. If isRetrieveSuccessful - true and other parameters - null, security code sent by sms
     *
     * @tags Card
     * @name CardApiRetrieveCardDetails
     * @summary Retrieve virtual or plastic card details(PIN\CVV and Ppan) depending on configuration (only for authorized users)
     * @request POST:/api/CardApi/RetrieveCardDetails
     */
    cardApiRetrieveCardDetails: (
      model: PortalPsCreditdebitcardsModelsApiSendSecurityCodeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardDetailsResponseModel, any>({
        path: `/api/CardApi/RetrieveCardDetails`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiDelete
     * @summary Delete saved card (only for authorized users)
     * @request DELETE:/api/CardApi/Delete
     * @deprecated
     */
    cardApiDelete: (
      query?: { userCardId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/CardApi/Delete`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiTransactions
     * @summary Card transactions (only for authorized users)
     * @request GET:/api/CardApi/Transactions
     */
    cardApiTransactions: (
      query?: {
        account?: string
        dateFrom?: string
        dateTo?: string
        pageNumber?: number
        pageSize?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardTransactionsResponseModel, any>({
        path: `/api/CardApi/Transactions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Method blocks current card forever and issues a new card instead. By default the new card will be delivered to the same address that was specified on card issue.
     *
     * @tags Card
     * @name CardApiReplace
     * @summary Replace plastic card (only for authorized users)
     * @request POST:/api/CardApi/Replace
     */
    cardApiReplace: (
      model: PortalPsCreditdebitcardsModelsApiReplaceCardModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/CardApi/Replace`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description If you made a deposit via credit/debit card, but the funds were not credited to your account, use the payment notification form.
     *
     * @tags Card
     * @name CardApiNotice
     * @summary Notice about adding funds via credit/debit card (only for authorized users)
     * @request POST:/api/CardApi/Notice
     */
    cardApiNotice: (
      model: PortalPsCreditdebitcardsModelsApiCardNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/CardApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashEX
     * @name CashExApiCities
     * @summary  (only for authorized users)
     * @request GET:/api/CashExApi/Cities
     */
    cashExApiCities: (
      query?: { countryCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCashuModelsApiCashExCityModel[], any>({
        path: `/api/CashExApi/Cities`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashEX
     * @name CashExApiServices
     * @summary  (only for authorized users)
     * @request GET:/api/CashExApi/Services
     */
    cashExApiServices: (
      query?: { countryCode?: string; cityId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCashuModelsApiCashExServiceModel[], any>({
        path: `/api/CashExApi/Services`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashEX
     * @name CashExApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/CashExApi/Add
     */
    cashExApiAdd: (model: PortalPsCashuModelsApiCashExAddModel, params: RequestParams = {}) =>
      this.request<PortalPsCashuModelsApiCashExDepositModel, any>({
        path: `/api/CashExApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashEX
     * @name CashExApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/CashExApi/Notice
     */
    cashExApiNotice: (model: PortalPsCashuModelsApiCashExNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/CashExApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashU
     * @name CashuApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/CashuApi/Add
     */
    cashuApiAdd: (model: PortalPsCashuModelsApiCashuAddModel, params: RequestParams = {}) =>
      this.request<PortalPsCashuModelsApiCashuDepositModel, any>({
        path: `/api/CashuApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashU
     * @name CashuApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/CashuApi/Notice
     */
    cashuApiNotice: (model: PortalPsCashuModelsApiCashuNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/CashuApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashU
     * @name CashuApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/CashuApi/Withdraw
     */
    cashuApiWithdraw: (
      model: PortalPsCashuModelsApiCashuCashuWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/CashuApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashUDirect
     * @name CashuDirectApiCountries
     * @summary  (only for authorized users)
     * @request GET:/api/CashuDirectApi/Countries
     */
    cashuDirectApiCountries: (params: RequestParams = {}) =>
      this.request<PortalPsCashuModelsApiCashuDirectCountryModel[], any>({
        path: `/api/CashuDirectApi/Countries`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashUDirect
     * @name CashuDirectApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/CashuDirectApi/Add
     */
    cashuDirectApiAdd: (
      model: PortalPsCashuModelsApiCashuDirectAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCashuModelsApiCashuDirectDepositModel, any>({
        path: `/api/CashuDirectApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashUDirect
     * @name CashuDirectApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/CashuDirectApi/Notice
     */
    cashuDirectApiNotice: (
      model: PortalPsCashuModelsApiCashuDirectNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/CashuDirectApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CoinPayments
     * @name CoinPaymentsAddressApiCreate
     * @summary  (only for authorized users)
     * @request POST:/api/CoinPaymentsAddressApi/Create
     */
    coinPaymentsAddressApiCreate: (
      model: PortalPsCoinpaymentsModelsApiCreateDepositAddressModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCoinpaymentsModelsApiDepositAddressModel, any>({
        path: `/api/CoinPaymentsAddressApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CoinPayments
     * @name CoinPaymentsAddressApiSave
     * @summary  (only for authorized users)
     * @request POST:/api/CoinPaymentsAddressApi/Save
     */
    coinPaymentsAddressApiSave: (
      model: PortalPsCoinpaymentsModelsApiSaveTemplateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCoinpaymentsModelsApiTemplateModel, any>({
        path: `/api/CoinPaymentsAddressApi/Save`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CoinPayments
     * @name CoinPaymentsAddressApiTemplates
     * @summary  (only for authorized users)
     * @request GET:/api/CoinPaymentsAddressApi/Templates
     */
    coinPaymentsAddressApiTemplates: (
      query?: { currencyCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCoinpaymentsModelsApiTemplateModel[], any>({
        path: `/api/CoinPaymentsAddressApi/Templates`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CoinPayments
     * @name CoinPaymentsApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/CoinPaymentsApi/Add
     */
    coinPaymentsApiAdd: (
      model: PortalPsCoinpaymentsModelsApiAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCoinpaymentsModelsApiDepositModel, any>({
        path: `/api/CoinPaymentsApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CoinPayments
     * @name CoinPaymentsApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/CoinPaymentsApi/Notice
     */
    coinPaymentsApiNotice: (
      model: PortalPsCoinpaymentsModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/CoinPaymentsApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CoinPayments
     * @name CoinPaymentsApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/CoinPaymentsApi/Withdraw
     */
    coinPaymentsApiWithdraw: (
      model: PortalPsCoinpaymentsModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/CoinPaymentsApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comment
     * @name CommentApiCommentTemplateTypes
     * @summary  (only for authorized users)
     * @request GET:/api/CommentApi/CommentTemplateTypes
     */
    commentApiCommentTemplateTypes: (params: RequestParams = {}) =>
      this.request<PortalModuleCommentModelsApiCommentTemplateTypeModel[], any>({
        path: `/api/CommentApi/CommentTemplateTypes`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comment
     * @name CommentApiComments
     * @summary  (only for authorized users)
     * @request GET:/api/CommentApi/Comments
     */
    commentApiComments: (
      query?: { commentTemplateTypeName?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleCommentModelsApiCommentModel[], any>({
        path: `/api/CommentApi/Comments`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiStatuses
     * @summary Existing competition statuses
     * @request GET:/api/CompetitionApi/Statuses
     */
    competitionApiStatuses: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/CompetitionApi/Statuses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiCompetitions
     * @summary List of competitions by status and currency code
     * @request GET:/api/CompetitionApi/Competitions
     */
    competitionApiCompetitions: (
      query?: { status?: string[]; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonCompetitionModel[], void>({
        path: `/api/CompetitionApi/Competitions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiMainInfo
     * @summary Main info about competition
     * @request GET:/api/CompetitionApi/MainInfo
     */
    competitionApiMainInfo: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<PortalExtensionsForexcupModelsJsonCompetitionModel, void>({
        path: `/api/CompetitionApi/MainInfo`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiGetSchedule
     * @summary Competition schedule
     * @request GET:/api/CompetitionApi/GetSchedule
     */
    competitionApiGetSchedule: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<PortalExtensionsForexcupModelsJsonCompetitionScheduleModel, void>({
        path: `/api/CompetitionApi/GetSchedule`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiTop
     * @summary Top most popular competitions for given period
     * @request GET:/api/CompetitionApi/Top
     */
    competitionApiTop: (
      query?: { fromDate?: string; toDate?: string; count?: number; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonTopCompetitionCollectionModel, void>({
        path: `/api/CompetitionApi/Top`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiUserInfo
     * @summary User main info
     * @request GET:/api/CompetitionApi/UserInfo
     */
    competitionApiUserInfo: (
      query?: { userId?: string; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonUserInfoModel, void>({
        path: `/api/CompetitionApi/UserInfo`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiTopUserCompetitions
     * @summary Top best competitions in which user has taken part
     * @request GET:/api/CompetitionApi/TopUserCompetitions
     */
    competitionApiTopUserCompetitions: (
      query?: { userId?: string; fromDate?: string; toDate?: string; count?: number },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonUserCompetitionModel[], void>({
        path: `/api/CompetitionApi/TopUserCompetitions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiTopTrades
     * @summary Top best user trades in competitions
     * @request GET:/api/CompetitionApi/TopTrades
     */
    competitionApiTopTrades: (
      query?: { userId?: string; fromDate?: string; toDate?: string; count?: number },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonTradeModel[], void>({
        path: `/api/CompetitionApi/TopTrades`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiMembers
     * @summary Competition members
     * @request GET:/api/CompetitionApi/Members
     */
    competitionApiMembers: (
      query?: { pageNumber?: number; pageSize?: number; searchInput?: string; code?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonCompetitorModel[], void>({
        path: `/api/CompetitionApi/Members`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiAnnualPrize
     * @summary Prize won by the user for a given year by month
     * @request GET:/api/CompetitionApi/AnnualPrize
     */
    competitionApiAnnualPrize: (
      query?: { userId?: string; year?: number; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonUserMonthlyPrizeModel[], void>({
        path: `/api/CompetitionApi/AnnualPrize`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiGameAccount
     * @summary Game account summary
     * @request GET:/api/CompetitionApi/GameAccount
     */
    competitionApiGameAccount: (query?: { accountKey?: number }, params: RequestParams = {}) =>
      this.request<PortalExtensionsForexcupModelsJsonGameAccountModel, void>({
        path: `/api/CompetitionApi/GameAccount`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiTradingDetails
     * @summary Trading details
     * @request GET:/api/CompetitionApi/TradingDetails
     */
    competitionApiTradingDetails: (query?: { accountKey?: number }, params: RequestParams = {}) =>
      this.request<PortalExtensionsForexcupModelsJsonUserTradingDetailsModel[], void>({
        path: `/api/CompetitionApi/TradingDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiTopTraders
     * @summary Top best traders for given period
     * @request GET:/api/CompetitionApi/TopTraders
     */
    competitionApiTopTraders: (
      query?: { fromDate?: string; toDate?: string; count?: number; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonUserInfoModel[], void>({
        path: `/api/CompetitionApi/TopTraders`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiPrizeConditions
     * @summary Conditions required to receive prize
     * @request GET:/api/CompetitionApi/PrizeConditions
     */
    competitionApiPrizeConditions: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        void
      >({
        path: `/api/CompetitionApi/PrizeConditions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiAccountFeatures
     * @summary Features of game accounts
     * @request GET:/api/CompetitionApi/AccountFeatures
     */
    competitionApiAccountFeatures: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<PortalExtensionsForexcupModelsJsonAccountFeaturesModel, void>({
        path: `/api/CompetitionApi/AccountFeatures`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiSymbols
     * @summary Available symbols
     * @request GET:/api/CompetitionApi/Symbols
     */
    competitionApiSymbols: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<string[], void>({
        path: `/api/CompetitionApi/Symbols`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiPrize
     * @summary Competition prize
     * @request GET:/api/CompetitionApi/Prize
     */
    competitionApiPrize: (
      query?: { currencyCode?: string; code?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonPrizeModel, void>({
        path: `/api/CompetitionApi/Prize`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiJoinCompetition
     * @summary Join competition (only for authorized users)
     * @request POST:/api/CompetitionApi/JoinCompetition
     */
    competitionApiJoinCompetition: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/CompetitionApi/JoinCompetition`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiUserCompetitions
     * @summary All competitions of authorized user (only for authorized users)
     * @request GET:/api/CompetitionApi/UserCompetitions
     */
    competitionApiUserCompetitions: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<PortalExtensionsForexcupModelsJsonUserCompetitionModel[], void>({
        path: `/api/CompetitionApi/UserCompetitions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiSetPrizeAccount
     * @summary Sets selected account as account for competition prize (only for authorized users)
     * @request POST:/api/CompetitionApi/SetPrizeAccount
     */
    competitionApiSetPrizeAccount: (query: { accountNumber: string }, params: RequestParams = {}) =>
      this.request<boolean, void>({
        path: `/api/CompetitionApi/SetPrizeAccount`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name CountryApiGet
     * @request GET:/api/CountryApi/Get
     */
    countryApiGet: (params: RequestParams = {}) =>
      this.request<FinanceConfigurationModelsApiCountryModel[], any>({
        path: `/api/CountryApi/Get`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Delayed finance operation and chain creation
     *
     * @tags Crypto
     * @name CryptoAddressApiCreate
     * @summary Request a crypto address for deposit (only for authorized users)
     * @request POST:/api/CryptoAddressApi/Create
     */
    cryptoAddressApiCreate: (
      model: PortalPsCryptoModelsApiCryptoAddressCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCryptoModelsApiCryptoAddressModel, void>({
        path: `/api/CryptoAddressApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Crypto
     * @name CryptoApiCreateAddress
     * @summary  (only for authorized users)
     * @request GET:/api/CryptoApi/CreateAddress
     * @deprecated
     */
    cryptoApiCreateAddress: (
      query: {
        paymentType: string
        paymentOption?: string
        paymentRoute?: string
        recreate?: boolean
        currencyCode?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCryptoModelsApiCryptoAddressResponseModel, any>({
        path: `/api/CryptoApi/CreateAddress`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates the finance operation and chain immediately (the chain ID will be attached to the response)
     *
     * @tags Crypto
     * @name CryptoApiAdd
     * @summary Crypto deposit (only for authorized users)
     * @request POST:/api/CryptoApi/Add
     */
    cryptoApiAdd: (model: PortalPsCryptoModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsCryptoModelsApiDepositModel, void>({
        path: `/api/CryptoApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Crypto
     * @name CryptoApiNotice
     * @summary Notice about adding funds via cryptocurrency (only for authorized users)
     * @request POST:/api/CryptoApi/Notice
     */
    cryptoApiNotice: (model: PortalPsCryptoModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/CryptoApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Crypto
     * @name CryptoApiWithdraw
     * @summary Crypto withdrawal (only for authorized users)
     * @request POST:/api/CryptoApi/Withdraw
     */
    cryptoApiWithdraw: (model: PortalPsCryptoModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/CryptoApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DCPay
     * @name DcPayApiProvinces
     * @summary  (only for authorized users)
     * @request GET:/api/DCPayApi/Provinces
     */
    dcPayApiProvinces: (
      query?: { 'request.paymentOptionCode'?: string; 'request.domainName'?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsDcpayModelsApiProvinceModel[], any>({
        path: `/api/DCPayApi/Provinces`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DCPay
     * @name DcPayApiCities
     * @summary  (only for authorized users)
     * @request GET:/api/DCPayApi/Cities
     */
    dcPayApiCities: (
      query?: {
        'request.paymentOptionCode'?: string
        'request.bankProvinceCode'?: string
        'request.domainName'?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsDcpayModelsApiCityModel[], any>({
        path: `/api/DCPayApi/Cities`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DCPay
     * @name DcPayApiBanks
     * @summary  (only for authorized users)
     * @request GET:/api/DCPayApi/Banks
     */
    dcPayApiBanks: (params: RequestParams = {}) =>
      this.request<PortalPsDcpayModelsApiBankModel[], any>({
        path: `/api/DCPayApi/Banks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DCPay
     * @name DcPayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/DCPayApi/Add
     */
    dcPayApiAdd: (model: PortalPsDcpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsDcpayModelsApiDepositModel, any>({
        path: `/api/DCPayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DCPay
     * @name DcPayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/DCPayApi/Withdraw
     */
    dcPayApiWithdraw: (model: PortalPsDcpayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/DCPayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Decta
     * @name DectaApiAdd
     * @summary DECTA Gate (only for authorized users)
     * @request POST:/api/DectaApi/Add
     */
    dectaApiAdd: (model: PortalPsDectaModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsDectaModelsApiDepositModel, void>({
        path: `/api/DectaApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Decta
     * @name DectaCardApiLoad
     * @summary Transfer funds from ewallet to Decta card (only for authorized users)
     * @request POST:/api/DectaCardApi/Load
     */
    dectaCardApiLoad: (model: PortalPsDectaModelsApiCardLoadModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/DectaCardApi/Load`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Decta
     * @name DectaCardApiUnload
     * @summary Transfer funds from Decta card to ewallet (only for authorized users)
     * @request POST:/api/DectaCardApi/Unload
     */
    dectaCardApiUnload: (
      model: PortalPsDectaModelsApiCardUnloadModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/DectaCardApi/Unload`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DeltaPay
     * @name DeltaPayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/DeltaPayApi/Add
     */
    deltaPayApiAdd: (model: PortalPsDeltapayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsDeltapayModelsApiDepositModel, any>({
        path: `/api/DeltaPayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DengiOnline
     * @name DengiOnlineAdd
     * @summary  (only for authorized users)
     * @request POST:/api/DengiOnline/Add
     */
    dengiOnlineAdd: (
      model: PortalPsDengionlineModelsApiDengiOnlineAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsDengionlineModelsApiDepositModel, any>({
        path: `/api/DengiOnline/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DengiOnline
     * @name DengiOnlineNotice
     * @summary  (only for authorized users)
     * @request POST:/api/DengiOnline/Notice
     */
    dengiOnlineNotice: (
      model: PortalPsDengionlineModelsApiDengiOnlineNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/DengiOnline/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dinpay
     * @name DinpayApiBanks
     * @summary  (only for authorized users)
     * @request GET:/api/DinpayApi/Banks
     */
    dinpayApiBanks: (params: RequestParams = {}) =>
      this.request<PortalPsDinpayModelsApiBankModel[], any>({
        path: `/api/DinpayApi/Banks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dinpay
     * @name DinpayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/DinpayApi/Add
     */
    dinpayApiAdd: (model: PortalPsDinpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsDinpayModelsApiDepositModel, any>({
        path: `/api/DinpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dinpay
     * @name DinpayApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/DinpayApi/Notice
     */
    dinpayApiNotice: (model: PortalPsDinpayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/DinpayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dinpay
     * @name DinpayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/DinpayApi/Withdraw
     */
    dinpayApiWithdraw: (model: PortalPsDinpayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/DinpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DixiPay
     * @name DixiPayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/DixiPayApi/Add
     */
    dixiPayApiAdd: (model: PortalPsDixipayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsDixipayModelsApiDepositModel, any>({
        path: `/api/DixiPayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DixiPay
     * @name DixiPayApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/DixiPayApi/Notice
     */
    dixiPayApiNotice: (model: PortalPsDixipayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/DixiPayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DixiPay
     * @name DixiPayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/DixiPayApi/Withdraw
     */
    dixiPayApiWithdraw: (
      model: PortalPsDixipayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/DixiPayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domain
     * @name DomainConfigurationApiRead
     * @summary  (only for authorized users)
     * @request GET:/api/DomainConfigurationApi/Read
     */
    domainConfigurationApiRead: (params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainModel[], any>({
        path: `/api/DomainConfigurationApi/Read`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domain
     * @name DomainConfigurationApiCreate
     * @summary  (only for authorized users)
     * @request POST:/api/DomainConfigurationApi/Create
     */
    domainConfigurationApiCreate: (
      model: PortalModuleConfigurationModelsApiDomainDomainConfigurationCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainModel, any>({
        path: `/api/DomainConfigurationApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domain
     * @name DomainConfigurationApiUpdate
     * @summary  (only for authorized users)
     * @request POST:/api/DomainConfigurationApi/Update
     */
    domainConfigurationApiUpdate: (
      model: PortalModuleConfigurationModelsApiDomainDomainConfigurationUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainModel, any>({
        path: `/api/DomainConfigurationApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domain
     * @name DomainConfigurationApiDelete
     * @summary  (only for authorized users)
     * @request DELETE:/api/DomainConfigurationApi/Delete
     */
    domainConfigurationApiDelete: (
      model: PortalModuleConfigurationModelsApiDomainDomainConfigurationDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/DomainConfigurationApi/Delete`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domain
     * @name DomainConfigurationApiUpdateIsBlocked
     * @summary  (only for authorized users)
     * @request POST:/api/DomainConfigurationApi/UpdateIsBlocked
     */
    domainConfigurationApiUpdateIsBlocked: (
      model: PortalModuleConfigurationModelsApiDomainDomainIsBlockedModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/DomainConfigurationApi/UpdateIsBlocked`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Download
     * @name DownloadApiGetObject
     * @summary Get file by name
     * @request GET:/api/DownloadApi/GetObject
     */
    downloadApiGetObject: (
      query?: { name?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleUtilsModelsApiDownloadFileModel, void>({
        path: `/api/DownloadApi/GetObject`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and CONTENT_WRITER roles
     *
     * @tags Download
     * @name DownloadApiCollection
     * @summary Collection (only for authorized users)
     * @request GET:/api/DownloadApi/Collection
     */
    downloadApiCollection: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleUtilsModelsApiDownloadDownloadModel[], void>({
        path: `/api/DownloadApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and CONTENT_WRITER roles<br /> Content-Type: multipart/form-data
     *
     * @tags Download
     * @name DownloadApiCreate
     * @summary Create download (only for authorized users)
     * @request POST:/api/DownloadApi/Create
     */
    downloadApiCreate: (
      query?: { name?: string; comment?: string; roles?: any[]; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleUtilsModelsApiDownloadDownloadModel, void>({
        path: `/api/DownloadApi/Create`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and CONTENT_WRITER roles<br /> Content-Type: multipart/form-data
     *
     * @tags Download
     * @name DownloadApiUpdate
     * @summary Update download (only for authorized users)
     * @request POST:/api/DownloadApi/Update
     */
    downloadApiUpdate: (
      query?: { id?: string; name?: string; comment?: string; roles?: any[]; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/DownloadApi/Update`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and CONTENT_WRITER roles
     *
     * @tags Download
     * @name DownloadApiDelete
     * @summary Delete download (only for authorized users)
     * @request POST:/api/DownloadApi/Delete
     */
    downloadApiDelete: (
      model: PortalModuleUtilsModelsApiDownloadDeleteDownloadModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/DownloadApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dukascopy
     * @name DukascopyApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/DukascopyApi/Add
     */
    dukascopyApiAdd: (model: PortalPsDukascopyModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsDukascopyModelsApiRedirectModel, any>({
        path: `/api/DukascopyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dukascopy
     * @name DukascopyApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/DukascopyApi/Withdraw
     */
    dukascopyApiWithdraw: (
      model: PortalPsDukascopyModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/DukascopyApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dukascopy
     * @name DukascopyApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/DukascopyApi/Notice
     */
    dukascopyApiNotice: (
      model: PortalPsDukascopyModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/DukascopyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommpay
     * @name EcommpayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/EcommpayApi/Add
     */
    ecommpayApiAdd: (model: PortalPsEcommpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsEcommpayModelsApiDepositModel, any>({
        path: `/api/EcommpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommpay
     * @name EcommpayApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/EcommpayApi/Notice
     */
    ecommpayApiNotice: (model: PortalPsEcommpayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/EcommpayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommpay
     * @name EcommpayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/EcommpayApi/Withdraw
     */
    ecommpayApiWithdraw: (
      model: PortalPsEcommpayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/EcommpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Epay
     * @name EpayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/EpayApi/Add
     */
    epayApiAdd: (model: PortalPsEpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsEpayModelsApiDepositModel, any>({
        path: `/api/EpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Epay
     * @name EpayApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/EpayApi/Notice
     */
    epayApiNotice: (model: PortalPsEpayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/EpayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Epay
     * @name EpayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/EpayApi/Withdraw
     */
    epayApiWithdraw: (model: PortalPsEpayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/EpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ePayments
     * @name EpaymentsApiCardWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/ePaymentsApi/Card/Withdraw
     */
    epaymentsApiCardWithdraw: (
      model: PortalPsEpaymentsModelsApiCardWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/ePaymentsApi/Card/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ePayments
     * @name EpaymentsApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/EpaymentsApi/Add
     */
    epaymentsApiAdd: (model: PortalPsEpaymentsModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsEpaymentsModelsApiDepositModel, any>({
        path: `/api/EpaymentsApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ePayments
     * @name EpaymentsApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/EpaymentsApi/Notice
     */
    epaymentsApiNotice: (
      model: PortalPsEpaymentsModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/EpaymentsApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ePayments
     * @name EpaymentsApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/EpaymentsApi/Withdraw
     */
    epaymentsApiWithdraw: (
      model: PortalPsEpaymentsModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/EpaymentsApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ePayments
     * @name EpaymentsApiLinkUser
     * @summary  (only for authorized users)
     * @request POST:/api/EpaymentsApi/LinkUser
     */
    epaymentsApiLinkUser: (
      model: PortalPsEpaymentsModelsApiLinkUserModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsEpaymentsModelsApiLinkUserResultModel, any>({
        path: `/api/EpaymentsApi/LinkUser`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ePayments
     * @name EpaymentsApiLinkCard
     * @summary  (only for authorized users)
     * @request POST:/api/EpaymentsApi/LinkCard
     */
    epaymentsApiLinkCard: (
      model: PortalPsEpaymentsModelsApiLinkCardModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsEpaymentsModelsApiLinkCardResultModel, any>({
        path: `/api/EpaymentsApi/LinkCard`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Erip
     * @name EripApiPaymentInfo
     * @summary  (only for authorized users)
     * @request POST:/api/EripApi/PaymentInfo
     */
    eripApiPaymentInfo: (
      model: PortalPsEripModelsApiPaymentInfoRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsEripModelsApiPaymentInfoModel, any>({
        path: `/api/EripApi/PaymentInfo`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Erip
     * @name EripApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/EripApi/Notice
     */
    eripApiNotice: (model: PortalPsEripModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/EripApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags eShop
     * @name DeliveryApiConfiguration
     * @summary  (only for authorized users)
     * @request GET:/api/DeliveryApi/Configuration
     */
    deliveryApiConfiguration: (
      query?: {
        country?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceEshopModelsApiDeliveryConfigurationModel[], any>({
        path: `/api/DeliveryApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Exchange
     * @name CurrencyRateApiCurrencyRate
     * @summary Gets specific currency rate (only for authorized users)
     * @request GET:/api/CurrencyRateApi/CurrencyRate
     */
    currencyRateApiCurrencyRate: (
      query?: {
        currencyCodeFrom?: string
        currencyCodeTo?: string
        isForward?: boolean
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceConversionModelsCurrencyRateInfoModel, any>({
        path: `/api/CurrencyRateApi/CurrencyRate`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Shows the list of currency rates for the selected symbol.
     *
     * @tags Exchange
     * @name CurrencyRateApiCollection
     * @summary Currency rates (only for authorized users)
     * @request GET:/api/CurrencyRateApi/Collection
     */
    currencyRateApiCollection: (
      query: { symbol: string; dateFrom: string; dateTo: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceConversionModelsCurrencyRateCollectionResponseModel, void>({
        path: `/api/CurrencyRateApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create currency rate manually
     *
     * @tags Exchange
     * @name CurrencyRateApiCreate
     * @summary Manual create currency rate (only for authorized users)
     * @request POST:/api/CurrencyRateApi/Create
     */
    currencyRateApiCreate: (
      model: FinanceConversionModelsCurrencyRateRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/CurrencyRateApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Extended info
     *
     * @tags Exchange
     * @name SymbolApiGetCollection
     * @summary Symbols (only for authorized users)
     * @request GET:/api/SymbolApi/GetCollection
     */
    symbolApiGetCollection: (params: RequestParams = {}) =>
      this.request<
        FinanceConversionModelsSymbolResponseModel1AtCoreModelsCurrencyModelAtCoreVersion1000CultureNeutralPublicKeyTokenNull[],
        void
      >({
        path: `/api/SymbolApi/GetCollection`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Exchange
     * @name SymbolApiCollection
     * @summary Symbols (only for authorized users)
     * @request GET:/api/SymbolApi/Collection
     */
    symbolApiCollection: (params: RequestParams = {}) =>
      this.request<
        FinanceConversionModelsSymbolResponseModel1SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        void
      >({
        path: `/api/SymbolApi/Collection`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the latest foreign exchange rates.
     *
     * @tags Exchange
     * @name UtilsApiCurrencyRates
     * @summary Latest Currency rate info (only for authorized users)
     * @request POST:/api/UtilsApi/CurrencyRates
     */
    utilsApiCurrencyRates: (
      query?: { date?: string; currencyFrom?: string; currencyTo?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleUtilsModelsApiCurrencyRateHistoryResponseModel, void>({
        path: `/api/UtilsApi/CurrencyRates`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Conversion operation of different currency types.
     *
     * @tags Exchange
     * @name UtilsApiExchange
     * @summary OBSOLETE!!! Use POST api/UtilsApi/Exchange instead (only for authorized users)
     * @request GET:/api/UtilsApi/Exchange
     * @deprecated
     */
    utilsApiExchange: (
      query?: { from?: string; to?: string; amount?: number; pinCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/UtilsApi/Exchange`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Exchange
     * @name UtilsApiExchange2
     * @summary Currency exchange (only for authorized users)
     * @request POST:/api/UtilsApi/Exchange
     * @originalName utilsApiExchange
     * @duplicate
     */
    utilsApiExchange2: (
      model: PortalModuleUtilsModelsApiCurrencyExchangeCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/UtilsApi/Exchange`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FasaPay
     * @name FasaPayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/FasaPayApi/Add
     */
    fasaPayApiAdd: (model: PortalPsFasapayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsFasapayModelsApiDepositModel, any>({
        path: `/api/FasaPayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FasaPay
     * @name FasaPayApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/FasaPayApi/Notice
     */
    fasaPayApiNotice: (model: PortalPsFasapayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/FasaPayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FasaPay
     * @name FasaPayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/FasaPayApi/Withdraw
     */
    fasaPayApiWithdraw: (
      model: PortalPsFasapayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/FasaPayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FocalPayments
     * @name FocalPaymentsApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/FocalPaymentsApi/Add
     */
    focalPaymentsApiAdd: (
      model: PortalPsFocalpaymentsModelsApiAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsFocalpaymentsModelsApiDepositModel, any>({
        path: `/api/FocalPaymentsApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FocalPayments
     * @name FocalPaymentsApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/FocalPaymentsApi/Withdraw
     */
    focalPaymentsApiWithdraw: (
      model: PortalPsFocalpaymentsModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/FocalPaymentsApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description This method redirects client to the requested payment form. When called with valid Authorization header, appends gateway authorization cookie to the response.
     *
     * @tags Gateway
     * @name GatewayApiPayment
     * @summary Payment gateway
     * @request GET:/api/GatewayApi/Payment
     */
    gatewayApiPayment: (
      query?: {
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchantCode?: string
        financeOperationType?: string
        currencyCode?: string
        inPaymentType?: string
        inPaymentOption?: string
        inPaymentRoute?: string
        inCurrency?: string
        outPaymentType?: string
        outPaymentOption?: string
        outPaymentRoute?: string
        outCurrency?: string
        paymentTypeAccount?: string
        amount?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/api/GatewayApi/Payment`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description This method redirects client to the requested trading account opening form. When called with valid Authorization header, appends gateway authorization cookie to the response.
     *
     * @tags Gateway
     * @name GatewayApiAddTradingAccount
     * @summary Add trading account
     * @request GET:/api/GatewayApi/AddTradingAccount
     */
    gatewayApiAddTradingAccount: (
      query?: {
        tradingProduct?: string
        currencyCode?: string
        leverage?: number
        amount?: number
        agent?: string
        promotion?: string
        competitionCode?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/api/GatewayApi/AddTradingAccount`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description This method redirects client to the verification form. When called with valid Authorization header, appends gateway authorization cookie to the response.
     *
     * @tags Gateway
     * @name GatewayApiVerification
     * @summary Verification gateway
     * @request GET:/api/GatewayApi/Verification
     */
    gatewayApiVerification: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/GatewayApi/Verification`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description This method redirects client to the statement download page. When called with valid Authorization header, appends gateway authorization cookie to the response.
     *
     * @tags Gateway
     * @name GatewayApiStatement
     * @summary Account statement
     * @request GET:/api/GatewayApi/Statement
     */
    gatewayApiStatement: (
      query?: { accountNumber?: string; dateFrom?: string; dateTo?: string; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/api/GatewayApi/Statement`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Goal
     * @name GoalTypeApiGoalTypes
     * @request GET:/api/GoalTypeApi/GoalTypes
     */
    goalTypeApiGoalTypes: (query: { groupName: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/GoalTypeApi/GoalTypes`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name GoogleAuthenticatorApiActivate
     * @summary Google Authenticator activation settings (only for authorized users)
     * @request GET:/api/GoogleAuthenticatorApi/Activate
     */
    googleAuthenticatorApiActivate: (params: RequestParams = {}) =>
      this.request<PortalUserIdentityGaModelsSettingsModel, void>({
        path: `/api/GoogleAuthenticatorApi/Activate`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name IdentityApiActivate
     * @summary Enable identity of the specified type (only for authorized users)
     * @request POST:/api/IdentityApi/Activate
     */
    identityApiActivate: (
      model: PortalUserIdentityModelsApiActivateIdentityModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/IdentityApi/Activate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name IdentityApiUpdate
     * @summary Change password/PIN code/etc. for security reasons (only for authorized users)
     * @request POST:/api/IdentityApi/Update
     */
    identityApiUpdate: (
      model: PortalUserIdentityModelsApiUpdateIdentityModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/IdentityApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name IdentityApiDeactivate
     * @summary Disable identity of the specified type (only for authorized users)
     * @request POST:/api/IdentityApi/Deactivate
     */
    identityApiDeactivate: (
      model: PortalUserIdentityModelsApiDeactivateIdentityModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/IdentityApi/Deactivate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name IdentityApiSendCode
     * @request POST:/api/IdentityApi/SendCode
     */
    identityApiSendCode: (
      model: PortalUserIdentityModelsApiSendCodeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserIdentityModelsApiCodeInfoModel, any>({
        path: `/api/IdentityApi/SendCode`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name MultiFactorApiOn
     * @summary Turn on client factor (only for authorized users)
     * @request POST:/api/MultiFactorApi/On
     */
    multiFactorApiOn: (
      model: PortalUserIdentityModelsApiTurnOnClientFactorModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/MultiFactorApi/On`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name MultiFactorApiOff
     * @summary Turn off client factor (only for authorized users)
     * @request POST:/api/MultiFactorApi/Off
     */
    multiFactorApiOff: (
      model: PortalUserIdentityModelsApiTurnOffClientFactorModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/MultiFactorApi/Off`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name PhoneApiOperatorCall
     * @summary  (only for authorized users)
     * @request POST:/api/PhoneApi/OperatorCall
     */
    phoneApiOperatorCall: (
      model: PortalUserIdentitySmsModelsApiOperatorCallModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PhoneApi/OperatorCall`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name PhoneApiVerify
     * @summary  (only for authorized users)
     * @request POST:/api/PhoneApi/Verify
     */
    phoneApiVerify: (
      model: PortalUserIdentitySmsModelsApiVerifyModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PhoneApi/Verify`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name BackupCodeApiGet
     * @summary View active backup codes (only for authorized users)
     * @request GET:/api/BackupCodeApi/Get
     */
    backupCodeApiGet: (
      query?: { state?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserIdentityModelsApiBackupCodesModel, void>({
        path: `/api/BackupCodeApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name BackupCodeApiRegenerate
     * @summary Regenerate current backup codes (only for authorized users)
     * @request POST:/api/BackupCodeApi/Regenerate
     */
    backupCodeApiRegenerate: (
      model: PortalUserIdentityModelsApiRegenerateBackupCodesModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserIdentityModelsApiBackupCodesModel, void>({
        path: `/api/BackupCodeApi/Regenerate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name EmailApiVerify
     * @summary Email verification (only for authorized users)
     * @request POST:/api/EmailApi/Verify
     */
    emailApiVerify: (
      model: PortalUserIdentityEmailModelsApiEmailVerificationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/EmailApi/Verify`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name IdentityTypeApiConfiguration
     * @summary  (only for authorized users)
     * @request GET:/api/IdentityTypeApi/Configuration
     */
    identityTypeApiConfiguration: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalUserIdentityConfigurationModelsApiIdentityTypeConfigurationModel[], any>({
        path: `/api/IdentityTypeApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Verification code for /api/MultiFactorApi/Verify is encrypted with public key returned by current method. Message format - {creation_datetime_in_ticks}:{identityKeyName}. See also: https://www.datetimetoticks-converter.com.
     *
     * @tags Identity
     * @name GenericIdentityApiCreate
     * @summary Create generic identity with specified identity key (only for authorized users)
     * @request POST:/api/GenericIdentityApi/Create
     */
    genericIdentityApiCreate: (
      model: PortalUserIdentityModelsApiCreateGenericIdentityModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserIdentityModelsApiGenericIdentityCertificateModel, void>({
        path: `/api/GenericIdentityApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name GenericIdentityApiDeactivate
     * @summary Disable generic identity of the specified identity key (only for authorized users)
     * @request POST:/api/GenericIdentityApi/Deactivate
     */
    genericIdentityApiDeactivate: (
      model: PortalUserIdentityModelsApiDeactivateGenericIdentityModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/GenericIdentityApi/Deactivate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inpay
     * @name InpayApiBanks
     * @summary  (only for authorized users)
     * @request GET:/api/InpayApi/Banks
     */
    inpayApiBanks: (
      query?: { countryCode?: string; currencyCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsInpayModelsApiBankModel[], any>({
        path: `/api/InpayApi/Banks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inpay
     * @name InpayApiCurrencies
     * @summary  (only for authorized users)
     * @request GET:/api/InpayApi/Currencies
     */
    inpayApiCurrencies: (params: RequestParams = {}) =>
      this.request<AtCoreModelsCurrencyModel[], any>({
        path: `/api/InpayApi/Currencies`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inpay
     * @name InpayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/InpayApi/Add
     */
    inpayApiAdd: (model: PortalPsInpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsInpayModelsApiDepositModel, any>({
        path: `/api/InpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inpay
     * @name InpayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/InpayApi/Withdraw
     */
    inpayApiWithdraw: (model: PortalPsInpayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/InpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags IntellectMoney
     * @name IntellectMoneyApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/IntellectMoneyApi/Add
     */
    intellectMoneyApiAdd: (
      model: PortalPsIntellectmoneyModelsApiAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsIntellectmoneyModelsApiDepositModel, any>({
        path: `/api/IntellectMoneyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags IntellectMoney
     * @name IntellectMoneyApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/IntellectMoneyApi/Notice
     */
    intellectMoneyApiNotice: (
      model: PortalPsIntellectmoneyModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/IntellectMoneyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiIdTypes
     * @request GET:/api/IntercashApi/IdTypes
     */
    intercashApiIdTypes: (params: RequestParams = {}) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemByteMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/IntercashApi/IdTypes`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiCardTypes
     * @request GET:/api/IntercashApi/CardTypes
     */
    intercashApiCardTypes: (params: RequestParams = {}) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemByteMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/IntercashApi/CardTypes`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiPaymentMethods
     * @request GET:/api/IntercashApi/PaymentMethods
     */
    intercashApiPaymentMethods: (params: RequestParams = {}) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemByteMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/IntercashApi/PaymentMethods`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiGet
     * @summary  (only for authorized users)
     * @request GET:/api/IntercashApi/Get
     */
    intercashApiGet: (
      query?: {
        statuses?: string[]
        isExternal?: boolean
        isActivated?: boolean
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsIntercashModelsApiCardModel[], any>({
        path: `/api/IntercashApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiDetails
     * @summary  (only for authorized users)
     * @request GET:/api/IntercashApi/Details
     */
    intercashApiDetails: (
      query?: { intercashCardId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsIntercashModelsApiCardDetailsResponseModel, any>({
        path: `/api/IntercashApi/Details`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiIssue
     * @summary  (only for authorized users)
     * @request POST:/api/IntercashApi/Issue
     */
    intercashApiIssue: (
      model: PortalPsIntercashModelsApiCardIssueRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsIntercashModelsApiCardIssueResponseModel, any>({
        path: `/api/IntercashApi/Issue`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiActivate
     * @summary  (only for authorized users)
     * @request POST:/api/IntercashApi/Activate
     */
    intercashApiActivate: (
      model: PortalPsIntercashModelsApiCardActivationRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsIntercashModelsApiCardActivationResponseModel, any>({
        path: `/api/IntercashApi/Activate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiConvertToPlastic
     * @summary  (only for authorized users)
     * @request POST:/api/IntercashApi/ConvertToPlastic
     */
    intercashApiConvertToPlastic: (
      model: PortalPsIntercashModelsApiCardConvertToPlasticModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/IntercashApi/ConvertToPlastic`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiSuspend
     * @summary  (only for authorized users)
     * @request POST:/api/IntercashApi/Suspend
     */
    intercashApiSuspend: (
      model: PortalPsIntercashModelsApiCardSuspendModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/IntercashApi/Suspend`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiDelete
     * @summary  (only for authorized users)
     * @request POST:/api/IntercashApi/Delete
     */
    intercashApiDelete: (
      model: PortalPsIntercashModelsApiCardDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/IntercashApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/IntercashApi/Add
     */
    intercashApiAdd: (model: PortalPsIntercashModelsApiAddModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/IntercashApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/IntercashApi/Withdraw
     */
    intercashApiWithdraw: (
      model: PortalPsIntercashModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/IntercashApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Language
     * @name LanguageApiLanguages
     * @request GET:/api/LanguageApi/Languages
     */
    languageApiLanguages: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiLanguageModel[], any>({
        path: `/api/LanguageApi/Languages`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Language
     * @name LanguageApiUpdatePrefferedLanguage
     * @summary  (only for authorized users)
     * @request POST:/api/LanguageApi/UpdatePrefferedLanguage
     */
    languageApiUpdatePrefferedLanguage: (
      model: PortalModuleConfigurationModelsApiPrefferedLanguageUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/LanguageApi/UpdatePrefferedLanguage`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lavapay
     * @name LavapayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/LavapayApi/Add
     */
    lavapayApiAdd: (model: PortalPsLavapayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsLavapayModelsApiDepositModel, any>({
        path: `/api/LavapayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lavapay
     * @name LavapayApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/LavapayApi/Notice
     */
    lavapayApiNotice: (model: PortalPsLavapayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/LavapayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lavapay
     * @name LavapayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/LavapayApi/Withdraw
     */
    lavapayApiWithdraw: (
      model: PortalPsLavapayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/LavapayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Save lead data.
     *
     * @tags Lead
     * @name LeadApiSave
     * @summary Save lead data
     * @request POST:/api/LeadApi/Save
     */
    leadApiSave: (model: PortalUserLeadModelsJsonLeadDataRequest, params: RequestParams = {}) =>
      this.request<PortalUserLeadModelsJsonLeadDataResponse, void>({
        path: `/api/LeadApi/Save`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lead
     * @name LeadApiSubmit
     * @request POST:/api/LeadApi/Submit
     */
    leadApiSubmit: (
      form: SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/LeadApi/Submit`,
        method: 'POST',
        body: form,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lead
     * @name LeadApiGetDetails
     * @summary  (only for authorized users)
     * @request GET:/api/LeadApi/GetDetails
     * @deprecated
     */
    leadApiGetDetails: (query: { dateFrom: string; dateTo: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/LeadApi/GetDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lead
     * @name LeadApiDetails
     * @summary  (only for authorized users)
     * @request GET:/api/LeadApi/Details
     */
    leadApiDetails: (query: { dateFrom: string; dateTo: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/LeadApi/Details`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LocalDeposit
     * @name LocalDepositApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/LocalDepositApi/Notice
     */
    localDepositApiNotice: (
      model: PortalPsLocaldepositModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/LocalDepositApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LocalDeposit
     * @name LocalDepositApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/LocalDepositApi/Withdraw
     */
    localDepositApiWithdraw: (
      model: PortalPsLocaldepositModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/LocalDepositApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LocalWithdrawal
     * @name LocalWithdrawalApiBanks
     * @summary  (only for authorized users)
     * @request GET:/api/LocalWithdrawalApi/Banks
     */
    localWithdrawalApiBanks: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalPsLocalwithdrawalModelsApiLocalWithdrawalBanksModel, any>({
        path: `/api/LocalWithdrawalApi/Banks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LocalWithdrawal
     * @name LocalWithdrawalApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/LocalWithdrawalApi/Withdraw
     */
    localWithdrawalApiWithdraw: (
      model: PortalPsLocalwithdrawalModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/LocalWithdrawalApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name LoginApiConfiguration
     * @summary Login options
     * @request GET:/api/LoginApi/Configuration
     */
    loginApiConfiguration: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalUserLoginModelsApiLoginConfigurationModel[], void>({
        path: `/api/LoginApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name LoginApiAuthorize
     * @request POST:/api/LoginApi/Authorize
     */
    loginApiAuthorize: (
      model: PortalUserLoginModelsApiAuthorizeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserLoginModelsApiLoginResultModel, any>({
        path: `/api/LoginApi/Authorize`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description By calling this API method client initiates OAuth login procedure which, if successful, will result in a callback to the specified return url with a limited scope access token attached as url parameter. To complete the procedure, client calls POST api/OAuthApi/Login method with the received access token in Authorization header.
     *
     * @tags Login
     * @name OAuthApiLogin
     * @summary Initiate login/registration via OAuth
     * @request GET:/api/OAuthApi/Login
     */
    oAuthApiLogin: (
      query?: {
        identityTypeName?: string
        returnUrl?: string
        state?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/OAuthApi/Login`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Log in or register via external system (social network, instance, etc.) or add external login option to an existing account.
     *
     * @tags Login
     * @name OAuthApiLogin2
     * @summary Complete login/registration via OAuth (only for authorized users)
     * @request POST:/api/OAuthApi/Login
     * @originalName oAuthApiLogin
     * @duplicate
     */
    oAuthApiLogin2: (
      model: PortalModuleAuthApiModelsOAuthLoginCompleteModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserLoginModelsApiLoginResultModel, void>({
        path: `/api/OAuthApi/Login`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MerchantApiTransfer
     * @summary Transfer funds
     * @request POST:/api/MerchantApi/Transfer
     */
    merchantApiTransfer: (
      model: PortalPsMerchantModelsTransferRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMerchantModelsMerchantApiResponseModel, void>({
        path: `/api/MerchantApi/Transfer`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MerchantApiWithdraw
     * @summary Create withdrawal
     * @request POST:/api/MerchantApi/Withdraw
     */
    merchantApiWithdraw: (
      model: PortalPsMerchantModelsWithdrawRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMerchantModelsMerchantApiResponseModel, void>({
        path: `/api/MerchantApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MerchantApiUserDetails
     * @summary Provide user details
     * @request POST:/api/MerchantApi/UserDetails
     */
    merchantApiUserDetails: (
      model: PortalPsMerchantModelsUserDetailsRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMerchantModelsUserDetailsModel, void>({
        path: `/api/MerchantApi/UserDetails`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MerchantApiPaymentDetails
     * @summary Provide payment details
     * @request POST:/api/MerchantApi/PaymentDetails
     */
    merchantApiPaymentDetails: (
      model: PortalPsMerchantModelsPaymentDetailsRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMerchantModelsPaymentDetailsModel, void>({
        path: `/api/MerchantApi/PaymentDetails`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MerchantApiNotification
     * @summary Receive payment notification
     * @request POST:/api/MerchantApi/Notification
     */
    merchantApiNotification: (
      model: PortalPsMerchantModelsNotificationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/MerchantApi/Notification`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Minerva
     * @name MinervaApiLocalWireTransfer
     * @summary  (only for authorized users)
     * @request POST:/api/MinervaApi/LocalWireTransfer
     */
    minervaApiLocalWireTransfer: (
      model: PortalPsMinervaModelsApiLocalWireTransferModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMinervaModelsApiDepositModel, any>({
        path: `/api/MinervaApi/LocalWireTransfer`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Minerva
     * @name MinervaApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/MinervaApi/Withdraw
     */
    minervaApiWithdraw: (
      model: PortalPsMinervaModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/MinervaApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags MisterTango
     * @name MisterTangoApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/MisterTangoApi/Add
     */
    misterTangoApiAdd: (model: PortalPsMistertangoModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsMistertangoModelsApiDepositModel, any>({
        path: `/api/MisterTangoApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags MisterTango
     * @name MisterTangoApiCreditDebitCardsAdd
     * @summary  (only for authorized users)
     * @request POST:/api/MisterTangoApi/CreditDebitCardsAdd
     */
    misterTangoApiCreditDebitCardsAdd: (
      model: PortalPsMistertangoModelsApiCreditDebitCardsAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMistertangoModelsApiDepositModel, any>({
        path: `/api/MisterTangoApi/CreditDebitCardsAdd`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags MisterTango
     * @name MisterTangoApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/MisterTangoApi/Notice
     */
    misterTangoApiNotice: (
      model: PortalPsMistertangoModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/MisterTangoApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags MisterTango
     * @name MisterTangoApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/MisterTangoApi/Withdraw
     */
    misterTangoApiWithdraw: (
      model: PortalPsMistertangoModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/MisterTangoApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moneybookers
     * @name MoneybookersApiAddBy
     * @summary  (only for authorized users)
     * @request POST:/api/MoneybookersApi/ElectronicPayments/Add
     */
    moneybookersApiAddBy: (
      model: PortalPsMoneybookersModelsApiRequestAddByPaymentOptionModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMoneybookersModelsApiDepositModel, any>({
        path: `/api/MoneybookersApi/ElectronicPayments/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moneybookers
     * @name MoneybookersApiCreditDebitCardsAdd
     * @summary  (only for authorized users)
     * @request POST:/api/MoneybookersApi/CreditDebitCards/Add
     */
    moneybookersApiCreditDebitCardsAdd: (
      model: PortalPsMoneybookersModelsApiCreditDebitCardsAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMoneybookersModelsApiDepositModel, any>({
        path: `/api/MoneybookersApi/CreditDebitCards/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moneybookers
     * @name MoneybookersApiLocalWireTransferAdd
     * @summary  (only for authorized users)
     * @request POST:/api/MoneybookersApi/LocalWireTransfer/Add
     */
    moneybookersApiLocalWireTransferAdd: (
      model: PortalPsMoneybookersModelsApiLocalWireTransferAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMoneybookersModelsApiDepositModel, any>({
        path: `/api/MoneybookersApi/LocalWireTransfer/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moneybookers
     * @name MoneybookersApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/MoneybookersApi/Add
     */
    moneybookersApiAdd: (
      model: PortalPsMoneybookersModelsApiAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMoneybookersModelsApiDepositModel, any>({
        path: `/api/MoneybookersApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moneybookers
     * @name MoneybookersApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/MoneybookersApi/Withdraw
     */
    moneybookersApiWithdraw: (
      model: PortalPsMoneybookersModelsApiRequestWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/MoneybookersApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moneybookers
     * @name MoneybookersApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/MoneybookersApi/Notice
     */
    moneybookersApiNotice: (
      model: PortalPsMoneybookersModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/MoneybookersApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags MtBank
     * @name MtBankApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/MtBankApi/Add
     */
    mtBankApiAdd: (model: PortalPsMtbankModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsMtbankModelsApiDepositModel, any>({
        path: `/api/MtBankApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags MtBank
     * @name MtBankApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/MtBankApi/Withdraw
     */
    mtBankApiWithdraw: (model: PortalPsMtbankModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/MtBankApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Multi-factor authentication
     * @name MultiFactorApiConfiguration
     * @summary MFA configuration
     * @request GET:/api/MultiFactorApi/Configuration
     */
    multiFactorApiConfiguration: (
      query?: {
        operationCode?:
          | 'BACKUPCODE_ACTIVATION'
          | 'BACKUPCODE_CHANGE'
          | 'BACKUPCODE_DEACTIVATION'
          | 'CLIENT_FACTOR_MANAGEMENT'
          | 'GENERIC_ACTIVATION'
          | 'GENERIC_DEACTIVATION'
          | 'EMAIL_ACTIVATION'
          | 'EMAIL_DEACTIVATION'
          | 'GOOGLEAUTHENTICATOR_ACTIVATION'
          | 'GOOGLEAUTHENTICATOR_DEACTIVATION'
          | 'LOGIN'
          | 'PASSWORD_CHANGE'
          | 'PINCODE_CHANGE'
          | 'SMS_ACTIVATION'
          | 'SMS_DEACTIVATION'
          | 'WITHDRAW'
        financeOperationTypeName?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        merchantCode?: string
        identityFactorCode?: string
        state?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserIdentityModelsApiMultiFactorConfigurationResponseModel, void>({
        path: `/api/MultiFactorApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Multi-factor authentication
     * @name MultiFactorApiVerify
     * @summary Verify authentication factor
     * @request POST:/api/MultiFactorApi/Verify
     */
    multiFactorApiVerify: (
      model: PortalUserIdentityModelsApiVerifyFactorModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserIdentityModelsApiMultiFactorInfoModel, void>({
        path: `/api/MultiFactorApi/Verify`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Nab
     * @name NabApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/NabApi/Add
     */
    nabApiAdd: (model: PortalPsNabModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsNabModelsInvoiceModel, any>({
        path: `/api/NabApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Nab
     * @name NabApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/NabApi/Withdraw
     */
    nabApiWithdraw: (model: PortalPsNabModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/NabApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Nab
     * @name NabApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/NabApi/Notice
     */
    nabApiNotice: (model: PortalPsNabModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/NabApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags NCwallet
     * @name NcwalletApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/NcwalletApi/Withdraw
     */
    ncwalletApiWithdraw: (
      model: PortalPsNcwalletModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/NcwalletApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Netbanx
     * @name NetbanxApiCreditDebitCardsAdd
     * @summary  (only for authorized users)
     * @request POST:/api/NetbanxApi/CreditDebitCards/Add
     */
    netbanxApiCreditDebitCardsAdd: (
      model: PortalPsNetbanxModelsApiCreditDebitCardsAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsNetbanxModelsApiDepositModel, any>({
        path: `/api/NetbanxApi/CreditDebitCards/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Netbanx
     * @name NetbanxApiLocalWireTransferAdd
     * @summary  (only for authorized users)
     * @request POST:/api/NetbanxApi/LocalWireTransfer/Add
     */
    netbanxApiLocalWireTransferAdd: (
      model: PortalPsNetbanxModelsApiLocalWireTransferAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsNetbanxModelsApiDepositModel, any>({
        path: `/api/NetbanxApi/LocalWireTransfer/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Netbanx
     * @name NetbanxApiCreditDebitCardsWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/NetbanxApi/CreditDebitCards/Withdraw
     */
    netbanxApiCreditDebitCardsWithdraw: (
      model: PortalPsNetbanxModelsApiCreditDebitCardsWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/NetbanxApi/CreditDebitCards/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Neteller
     * @name NetellerApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/NetellerApi/Add
     */
    netellerApiAdd: (model: PortalPsNetellerModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsNetellerModelsApiDepositModel, any>({
        path: `/api/NetellerApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Neteller
     * @name NetellerApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/NetellerApi/Notice
     */
    netellerApiNotice: (model: PortalPsNetellerModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/NetellerApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Neteller
     * @name NetellerApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/NetellerApi/Withdraw
     */
    netellerApiWithdraw: (
      model: PortalPsNetellerModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/NetellerApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationApiNotificationTypes
     * @summary Set of notification types (only for authorized users)
     * @request GET:/api/NotificationApi/NotificationTypes
     */
    notificationApiNotificationTypes: (params: RequestParams = {}) =>
      this.request<PortalUserSettingsModelsApiNotificationNotificationTypeModel[], void>({
        path: `/api/NotificationApi/NotificationTypes`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationApiContactMethods
     * @summary Set of contact methods (only for authorized users)
     * @request GET:/api/NotificationApi/ContactMethods
     */
    notificationApiContactMethods: (
      query?: { notificationTypeName?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsApiNotificationContactMethodModel[], void>({
        path: `/api/NotificationApi/ContactMethods`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationApiNotificationUserSettings
     * @summary Set of user notification settings (only for authorized users)
     * @request GET:/api/NotificationApi/NotificationUserSettings
     */
    notificationApiNotificationUserSettings: (params: RequestParams = {}) =>
      this.request<PortalUserSettingsModelsApiNotificationNotificationSettingModel[], void>({
        path: `/api/NotificationApi/NotificationUserSettings`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationApiCreate
     * @summary Create notification setting (only for authorized users)
     * @request POST:/api/NotificationApi/Create
     */
    notificationApiCreate: (
      model: PortalUserSettingsModelsApiNotificationCreateNotificationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsApiNotificationNotificationSettingModel, void>({
        path: `/api/NotificationApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationApiUpdate
     * @summary Update notification setting (only for authorized users)
     * @request POST:/api/NotificationApi/Update
     */
    notificationApiUpdate: (
      model: PortalUserSettingsModelsApiNotificationUpdateNotificationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsApiNotificationNotificationSettingModel, void>({
        path: `/api/NotificationApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Okpay
     * @name OkpayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/OkpayApi/Add
     */
    okpayApiAdd: (model: PortalPsOkpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsOkpayModelsApiDepositModel, any>({
        path: `/api/OkpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Okpay
     * @name OkpayApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/OkpayApi/Notice
     */
    okpayApiNotice: (model: PortalPsOkpayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/OkpayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Okpay
     * @name OkpayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/OkpayApi/Withdraw
     */
    okpayApiWithdraw: (model: PortalPsOkpayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/OkpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Oplati
     * @name OplatiApiPaymentInfo
     * @summary  (only for authorized users)
     * @request POST:/api/OplatiApi/PaymentInfo
     */
    oplatiApiPaymentInfo: (
      model: PortalPsOplatiModelsApiPaymentInfoRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsOplatiModelsApiPaymentInfoModel, any>({
        path: `/api/OplatiApi/PaymentInfo`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Oplati
     * @name OplatiApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/OplatiApi/Notice
     */
    oplatiApiNotice: (model: PortalPsOplatiModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/OplatiApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Oplati
     * @name OplatiApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/OplatiApi/Withdraw
     */
    oplatiApiWithdraw: (model: PortalPsOplatiModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/OplatiApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pamm
     * @name PammApiCreatePammAccount
     * @request POST:/api/PammApi/CreatePammAccount
     * @deprecated
     */
    pammApiCreatePammAccount: (
      query: {
        clientLogin: number
        domainAddress: string
        pammLogin: number
        pammAccountTypeName: string
        currencyCode: string
      },
      params: RequestParams = {},
    ) =>
      this.request<boolean, any>({
        path: `/api/PammApi/CreatePammAccount`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pamm
     * @name PammApiCreateAccount
     * @request POST:/api/PammApi/CreateAccount
     */
    pammApiCreateAccount: (
      model: PortalExtensionsPammModelsApiCreatePammAccountModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PammApi/CreateAccount`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pamm
     * @name PammApiJoinPammAccount
     * @request POST:/api/PammApi/JoinPammAccount
     * @deprecated
     */
    pammApiJoinPammAccount: (
      query: { pammLogin: number; clientLogin: number },
      params: RequestParams = {},
    ) =>
      this.request<boolean, any>({
        path: `/api/PammApi/JoinPammAccount`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pamm
     * @name PammApiJoinAccount
     * @request POST:/api/PammApi/JoinAccount
     */
    pammApiJoinAccount: (
      model: PortalExtensionsPammModelsApiJoinPammAccountModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PammApi/JoinAccount`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pamm
     * @name PammApiRolloverExecuted
     * @request POST:/api/PammApi/RolloverExecuted
     */
    pammApiRolloverExecuted: (
      model: PortalExtensionsPammModelsApiRolloverExecutedModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PammApi/RolloverExecuted`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pamm
     * @name PammApiTransfer
     * @request POST:/api/PammApi/Transfer
     */
    pammApiTransfer: (
      query: {
        accountFrom: string
        accountTo: string
        currency: string
        amount: number
        comment: string
        merchantCode: string
      },
      params: RequestParams = {},
    ) =>
      this.request<boolean, any>({
        path: `/api/PammApi/Transfer`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Partnership
     * @name VisitorsStatisticsApiGet
     * @summary  (only for authorized users)
     * @request GET:/api/VisitorsStatisticsApi/Get
     */
    visitorsStatisticsApiGet: (
      query?: {
        isOpenedAccountsRequired?: boolean
        dateFrom?: string
        dateTo?: string
        pageNumber?: number
        pageSize?: number
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalModulePartnershipModelsVisitorStatisticsApiVisitorsStatisticsModel, any>({
        path: `/api/VisitorsStatisticsApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Partnership
     * @name ReferralsApiGet
     * @summary  (only for authorized users)
     * @request GET:/api/ReferralsApi/Get
     */
    referralsApiGet: (
      query?: {
        ownerId?: string
        accountNumber?: string
        dateFrom?: string
        dateTo?: string
        pageNumber?: number
        pageSize?: number
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalModulePartnershipModelsReferralsApiReferralListingModel[], any>({
        path: `/api/ReferralsApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PastaBank
     * @name PastabankApiDepositConfiguration
     * @summary  (only for authorized users)
     * @request GET:/api/PastabankApi/Configuration/Add
     */
    pastabankApiDepositConfiguration: (params: RequestParams = {}) =>
      this.request<PortalPsPastabankModelsApiDepositConfigurationModel, any>({
        path: `/api/PastabankApi/Configuration/Add`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PastaBank
     * @name PastabankApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/PastabankApi/Add
     */
    pastabankApiAdd: (model: PortalPsPastabankModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPastabankModelsApiDepositModel, any>({
        path: `/api/PastabankApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Paybal51
     * @name Paybal51ApiBanks
     * @summary  (only for authorized users)
     * @request GET:/api/Paybal51Api/Banks
     */
    paybal51ApiBanks: (params: RequestParams = {}) =>
      this.request<PortalPsPaybal51ModelsApiBankModel[], any>({
        path: `/api/Paybal51Api/Banks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Paybal51
     * @name Paybal51ApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/Paybal51Api/Add
     */
    paybal51ApiAdd: (model: PortalPsPaybal51ModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPaybal51ModelsApiDepositModel, any>({
        path: `/api/Paybal51Api/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Paybal51
     * @name Paybal51ApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/Paybal51Api/Withdraw
     */
    paybal51ApiWithdraw: (
      model: PortalPsPaybal51ModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/Paybal51Api/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payclub
     * @name PayClubApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/PayClubApi/Add
     */
    payClubApiAdd: (model: PortalPsPayclubModelsApiAddModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/PayClubApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name FeeApiFee
     * @summary List of fees
     * @request GET:/api/FeeApi/Fee
     */
    feeApiFee: (
      query?: {
        balanceOperationTypeName?: string
        currencyCode?: string
        amount?: number
        countryCode?: string
        gatewayPublicKey?: string
        userId?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFeeModel[], any>({
        path: `/api/FeeApi/Fee`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description The method provides full fee settings list including confirmation count for Crypto payments
     *
     * @tags Payment
     * @name FeeApiConfiguration
     * @summary Payment systems
     * @request GET:/api/FeeApi/Configuration
     */
    feeApiConfiguration: (
      query?: {
        countryCode?: string
        domain?: string
        isAggregator?: boolean
        isExternal?: boolean
        balanceOperationType?: string
        paymentCategory?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchantCode?: string
        currencyCode?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        FinanceTransferModelsApiPaymentConfigurationPaymentConfigurationResponseModel,
        void
      >({
        path: `/api/FeeApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name FeeApiCollection
     * @request GET:/api/FeeApi/Collection
     */
    feeApiCollection: (
      query?: {
        domain?: string
        country?: string
        balanceOperationType?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        currency?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFeeCollectionModel, any>({
        path: `/api/FeeApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name FeeApiFormula
     * @summary Fee formulas info (only for authorized users)
     * @request GET:/api/FeeApi/Formula
     */
    feeApiFormula: (
      query?: {
        balanceOperationTypeName?: string
        amount?: number
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsFeeFormulaModel, void>({
        path: `/api/FeeApi/Formula`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Contains finance operation statuses.
     *
     * @tags Payment
     * @name OperationApiGetFinanceOperationStatuses
     * @summary Finance operation statuses list (only for authorized users)
     * @request GET:/api/OperationApi/GetFinanceOperationStatuses
     * @deprecated
     */
    operationApiGetFinanceOperationStatuses: (params: RequestParams = {}) =>
      this.request<FinanceEwalletModelsApiFinanceOperationStatusModel[], void>({
        path: `/api/OperationApi/GetFinanceOperationStatuses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Contains finance operation statuses.
     *
     * @tags Payment
     * @name OperationApiFinanceOperationStatuses
     * @summary Finance operation statuses list (only for authorized users)
     * @request GET:/api/OperationApi/FinanceOperationStatuses
     */
    operationApiFinanceOperationStatuses: (params: RequestParams = {}) =>
      this.request<FinanceEwalletModelsApiFinanceOperationStatusModel[], void>({
        path: `/api/OperationApi/FinanceOperationStatuses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Contains background statuses.
     *
     * @tags Payment
     * @name OperationApiGetBackgroundStatuses
     * @summary Background statuses list (only for authorized users)
     * @request GET:/api/OperationApi/GetBackgroundStatuses
     * @deprecated
     */
    operationApiGetBackgroundStatuses: (params: RequestParams = {}) =>
      this.request<FinanceEwalletModelsApiBackgroundStatusModel[], void>({
        path: `/api/OperationApi/GetBackgroundStatuses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Contains background statuses.
     *
     * @tags Payment
     * @name OperationApiBackgroundStatuses
     * @summary Background statuses list (only for authorized users)
     * @request GET:/api/OperationApi/BackgroundStatuses
     */
    operationApiBackgroundStatuses: (params: RequestParams = {}) =>
      this.request<FinanceEwalletModelsApiBackgroundStatusModel[], void>({
        path: `/api/OperationApi/BackgroundStatuses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Displays summary information of account operations.
     *
     * @tags Payment
     * @name OperationApiSummary
     * @summary Account operations info (only for authorized users)
     * @request GET:/api/OperationApi/Summary
     */
    operationApiSummary: (
      query?: {
        account?: string
        currencyCode?: string
        paymentGroupCode?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        balanceOperationType?: string
        financeOperationTypeName?: string
        statuses?: string[]
        chainId?: string
        dateFrom?: string
        dateTo?: string
        pageNumber?: number
        pageSize?: number
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceEwalletModelsApiOperationSummaryResponseModel, void>({
        path: `/api/OperationApi/Summary`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Displays start balances for currencies on acccount.
     *
     * @tags Payment
     * @name OperationApiStartBalances
     * @summary Account operations info (only for authorized users)
     * @request GET:/api/OperationApi/StartBalances
     */
    operationApiStartBalances: (
      query?: {
        account?: string
        paymentType?: string
        paymentOption?: string
        currencies?: string[]
        dateTo?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceEwalletModelsApiStartBalanceResponseModel, void>({
        path: `/api/OperationApi/StartBalances`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name FinanceApiBalance
     * @summary Account balance info (only for authorized users)
     * @request GET:/api/FinanceApi/Balance
     */
    financeApiBalance: (
      query?: { account?: string; currencyCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsBalanceResponseModel[], void>({
        path: `/api/FinanceApi/Balance`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gives actual information about amount ranges.
     *
     * @tags Payment
     * @name FinanceApiAmountRange
     * @summary Payment amount range info
     * @request GET:/api/FinanceApi/AmountRange
     */
    financeApiAmountRange: (
      query?: {
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        balanceOperationType?: string
        currencyCode?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsAmountRangeResponseModel, void>({
        path: `/api/FinanceApi/AmountRange`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description The method provides information about currently available payment systems
     *
     * @tags Payment
     * @name FinanceApiPaymentSystems
     * @summary Payment systems (only for authorized users)
     * @request GET:/api/FinanceApi/PaymentSystems
     */
    financeApiPaymentSystems: (
      query?: {
        balanceOperationType?: string
        paymentCategory?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchantCode?: string
        currencyCode?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiPaymentSystemPaymentSystemResponseModel, void>({
        path: `/api/FinanceApi/PaymentSystems`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name CurrencyApiCollection
     * @summary Get all currencies (only for authorized users)
     * @request GET:/api/CurrencyApi/Collection
     */
    currencyApiCollection: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<AtCoreModelsCurrencyModel[], void>({
        path: `/api/CurrencyApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name FinanceOperationApiAuthorize
     * @summary  (only for authorized users)
     * @request POST:/api/FinanceOperationApi/Authorize
     */
    financeOperationApiAuthorize: (
      model: FinanceTransferModelsApiPaymentAuthorizationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/FinanceOperationApi/Authorize`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name FinanceOperationApiCancel
     * @summary Cancel payment (only for authorized users)
     * @request POST:/api/FinanceOperationApi/Cancel
     */
    financeOperationApiCancel: (
      model: FinanceTransferModelsApiPaymentCancellationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/FinanceOperationApi/Cancel`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PocketApiDepositPocket
     * @summary Creates pocket
     * @request POST:/api/PocketApi/DepositPocket
     */
    pocketApiDepositPocket: (
      query?: {
        'model.accountNumber'?: string
        'model.currencyCode'?: string
        'model.domainName'?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/api/PocketApi/DepositPocket`,
        method: 'POST',
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentWizardApiPaymentMethod
     * @summary  (only for authorized users)
     * @request GET:/api/PaymentWizardApi/PaymentMethod
     */
    paymentWizardApiPaymentMethod: (
      query?: {
        financeOperationTypeName?: string
        paymentGroupCode?: string
        paymentOptionCode?: string
        merchantCode?: string
        countryCode?: string
        currencyCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceConfigurationModelsApiPaymentConfigurationModel, any>({
        path: `/api/PaymentWizardApi/PaymentMethod`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name LimitApiLimit
     * @summary Get account limits (only for authorized users)
     * @request GET:/api/LimitApi/Limit
     */
    limitApiLimit: (
      query?: {
        balanceOperationTypeName?: string
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        accountNumber?: string
        amount?: number
        currencyCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiLimitsResponseModel, void>({
        path: `/api/LimitApi/Limit`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentTypeAccountApiCreate
     * @summary Create user's saved payment account (only for authorized users)
     * @request POST:/api/PaymentTypeAccountApi/Create
     */
    paymentTypeAccountApiCreate: (
      model: FinanceTransferModelsApiPaymentTypeAccountCreateRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/PaymentTypeAccountApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentTypeAccountApiGet
     * @summary Get user's saved payment accounts (only for authorized users)
     * @request GET:/api/PaymentTypeAccountApi/Get
     * @deprecated
     */
    paymentTypeAccountApiGet: (
      query?: {
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiPaymentTypeAccountModel[], void>({
        path: `/api/PaymentTypeAccountApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentTypeAccountApiCollection
     * @summary Get user's saved payment accounts (only for authorized users)
     * @request GET:/api/PaymentTypeAccountApi/Collection
     */
    paymentTypeAccountApiCollection: (
      query?: {
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiPaymentTypeAccountModel[], void>({
        path: `/api/PaymentTypeAccountApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentTypeAccountApiDelete
     * @summary Delete user's saved payment account by name (only for authorized users)
     * @request POST:/api/PaymentTypeAccountApi/Delete
     */
    paymentTypeAccountApiDelete: (
      model: FinanceTransferModelsApiPaymentTypeAccountDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/PaymentTypeAccountApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentConfigurationApiCountries
     * @summary  (only for authorized users)
     * @request GET:/api/PaymentConfigurationApi/Countries
     */
    paymentConfigurationApiCountries: (
      query?: {
        financeOperationTypeName?: string
        merchantCode?: string
        paymentGroupCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceConfigurationModelsApiCountryModel[], any>({
        path: `/api/PaymentConfigurationApi/Countries`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentConfigurationApiCurrencies
     * @summary  (only for authorized users)
     * @request GET:/api/PaymentConfigurationApi/Currencies
     */
    paymentConfigurationApiCurrencies: (
      query?: {
        financeOperationTypeName?: string
        merchantCode?: string
        paymentGroupCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        countryCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<AtCoreModelsCurrencyModel[], any>({
        path: `/api/PaymentConfigurationApi/Currencies`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentConfigurationApiCollection
     * @summary  (only for authorized users)
     * @request GET:/api/PaymentConfigurationApi/Collection
     */
    paymentConfigurationApiCollection: (
      query?: {
        financeOperationTypeName?: string
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        paymentGroupCode?: string
        isAggregator?: boolean
        isExternal?: boolean
        isVisible?: boolean
        countryCode?: string
        currencyCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceConfigurationModelsApiPaymentConfigurationModel[], any>({
        path: `/api/PaymentConfigurationApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentAsia
     * @name PaymentAsiaApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/PaymentAsiaApi/Add
     */
    paymentAsiaApiAdd: (model: PortalPsPaymentasiaModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPaymentasiaModelsApiDepositModel, any>({
        path: `/api/PaymentAsiaApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentAsia
     * @name PaymentAsiaApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/PaymentAsiaApi/Notice
     */
    paymentAsiaApiNotice: (
      model: PortalPsPaymentasiaModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PaymentAsiaApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentAsia
     * @name PaymentAsiaApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/PaymentAsiaApi/Withdraw
     */
    paymentAsiaApiWithdraw: (
      model: PortalPsPaymentasiaModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/PaymentAsiaApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payoma
     * @name PayomaApiWithdrawParameters
     * @summary  (only for authorized users)
     * @request GET:/api/PayomaApi/Parameters/Withdraw
     */
    payomaApiWithdrawParameters: (
      query?: {
        currencyCode?: string
        countryCode?: string
        balanceOperationTypeName?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsPayomaModelsApiWithdrawParametersResponseModel, any>({
        path: `/api/PayomaApi/Parameters/Withdraw`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payoma
     * @name PayomaApiWithdrawConfiguration
     * @summary  (only for authorized users)
     * @request GET:/api/PayomaApi/Configuration/Withdraw
     */
    payomaApiWithdrawConfiguration: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalPsPayomaModelsApiWithdrawConfigurationModel, any>({
        path: `/api/PayomaApi/Configuration/Withdraw`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payoma
     * @name PayomaApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/PayomaApi/Withdraw
     */
    payomaApiWithdraw: (model: PortalPsPayomaModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/PayomaApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payoma
     * @name PayomaApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/PayomaApi/Add
     */
    payomaApiAdd: (model: PortalPsPayomaModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPayomaModelsApiDepositModel, any>({
        path: `/api/PayomaApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayPal
     * @name PayPalApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/PayPalApi/Add
     */
    payPalApiAdd: (model: PortalPsPaypalModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPaypalModelsApiDepositModel, any>({
        path: `/api/PayPalApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayPal
     * @name PayPalApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/PayPalApi/Notice
     */
    payPalApiNotice: (model: PortalPsPaypalModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PayPalApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayPal
     * @name PayPalApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/PayPalApi/Withdraw
     */
    payPalApiWithdraw: (model: PortalPsPaypalModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/PayPalApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaySafeCard
     * @name PaySafeCardApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/PaySafeCardApi/Add
     */
    paySafeCardApiAdd: (model: PortalPsPaysafecardModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPaysafecardModelsApiDepositModel, any>({
        path: `/api/PaySafeCardApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaySafeCard
     * @name PaySafeCardApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/PaySafeCardApi/Notice
     */
    paySafeCardApiNotice: (
      model: PortalPsPaysafecardModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PaySafeCardApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaySafeCard
     * @name PaySafeCardApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/PaySafeCardApi/Withdraw
     */
    paySafeCardApiWithdraw: (
      model: PortalPsPaysafecardModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsPaysafecardModelsApiWithdrawResultModel, any>({
        path: `/api/PaySafeCardApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayToday
     * @name PayTodayApiGetCreditBanks
     * @request GET:/api/PayTodayApi/GetCreditBanks
     * @deprecated
     */
    payTodayApiGetCreditBanks: (params: RequestParams = {}) =>
      this.request<PortalPsPaytodayModelsApiBankModel[], any>({
        path: `/api/PayTodayApi/GetCreditBanks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayToday
     * @name PayTodayApiCreditBanks
     * @request GET:/api/PayTodayApi/CreditBanks
     */
    payTodayApiCreditBanks: (params: RequestParams = {}) =>
      this.request<PortalPsPaytodayModelsApiBankModel[], any>({
        path: `/api/PayTodayApi/CreditBanks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayToday
     * @name PayTodayApiGetDebitBanks
     * @request GET:/api/PayTodayApi/GetDebitBanks
     * @deprecated
     */
    payTodayApiGetDebitBanks: (params: RequestParams = {}) =>
      this.request<PortalPsPaytodayModelsApiBankModel[], any>({
        path: `/api/PayTodayApi/GetDebitBanks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayToday
     * @name PayTodayApiDebitBanks
     * @request GET:/api/PayTodayApi/DebitBanks
     */
    payTodayApiDebitBanks: (params: RequestParams = {}) =>
      this.request<PortalPsPaytodayModelsApiBankModel[], any>({
        path: `/api/PayTodayApi/DebitBanks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayToday
     * @name PayTodayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/PayTodayApi/Add
     */
    payTodayApiAdd: (model: PortalPsPaytodayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPaytodayModelsApiDepositModel, any>({
        path: `/api/PayTodayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayToday
     * @name PayTodayApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/PayTodayApi/Notice
     */
    payTodayApiNotice: (model: PortalPsPaytodayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PayTodayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayToday
     * @name PayTodayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/PayTodayApi/Withdraw
     */
    payTodayApiWithdraw: (
      model: PortalPsPaytodayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/PayTodayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payza
     * @name PayzaApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/PayzaApi/Add
     */
    payzaApiAdd: (model: PortalPsPayzaModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPayzaModelsApiDepositModel, any>({
        path: `/api/PayzaApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payza
     * @name PayzaApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/PayzaApi/Notice
     */
    payzaApiNotice: (model: PortalPsPayzaModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PayzaApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payza
     * @name PayzaApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/PayzaApi/Withdraw
     */
    payzaApiWithdraw: (model: PortalPsPayzaModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/PayzaApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiBanks
     * @summary  (only for authorized users)
     * @request GET:/api/PayzenApi/Banks
     */
    payzenApiBanks: (
      query?: {
        countryCode?: string
        currencyCode?: string
        balanceOperationTypeName?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/PayzenApi/Banks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiProvinces
     * @summary  (only for authorized users)
     * @request GET:/api/PayzenApi/Provinces
     */
    payzenApiProvinces: (
      query?: {
        countryCode?: string
        currencyCode?: string
        balanceOperationTypeName?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemInt32MscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/PayzenApi/Provinces`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiAreas
     * @summary  (only for authorized users)
     * @request GET:/api/PayzenApi/Areas
     */
    payzenApiAreas: (
      query?: {
        countryCode?: string
        currencyCode?: string
        balanceOperationTypeName?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemInt32MscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/PayzenApi/Areas`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/PayzenApi/Add
     */
    payzenApiAdd: (model: PortalPsPayzenModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPayzenModelsApiDepositModel, any>({
        path: `/api/PayzenApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/PayzenApi/Notice
     */
    payzenApiNotice: (model: PortalPsPayzenModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PayzenApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/PayzenApi/Withdraw
     */
    payzenApiWithdraw: (model: PortalPsPayzenModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/PayzenApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiBankTransferWithdrawal
     * @summary  (only for authorized users)
     * @request POST:/api/PayzenApi/BankTransferWithdrawal
     */
    payzenApiBankTransferWithdrawal: (
      model: PortalPsPayzenModelsApiWithdrawBankTransferModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/PayzenApi/BankTransferWithdrawal`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PerfectMoney
     * @name PerfectMoneyApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/PerfectMoneyApi/Add
     */
    perfectMoneyApiAdd: (
      model: PortalPsPerfectmoneyModelsApiAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsPerfectmoneyModelsApiDepositModel, any>({
        path: `/api/PerfectMoneyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PerfectMoney
     * @name PerfectMoneyApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/PerfectMoneyApi/Notice
     */
    perfectMoneyApiNotice: (
      model: PortalPsPerfectmoneyModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PerfectMoneyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PerfectMoney
     * @name PerfectMoneyApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/PerfectMoneyApi/Withdraw
     */
    perfectMoneyApiWithdraw: (
      model: PortalPsPerfectmoneyModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/PerfectMoneyApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Poli
     * @name PoliApiBanks
     * @summary  (only for authorized users)
     * @request GET:/api/PoliApi/Banks
     */
    poliApiBanks: (
      query?: { balanceOperationTypeName?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsPoliModelsApiBankModel[], any>({
        path: `/api/PoliApi/Banks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Poli
     * @name PoliApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/PoliApi/Add
     */
    poliApiAdd: (model: PortalPsPoliModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPoliModelsApiDepositModel, any>({
        path: `/api/PoliApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Poli
     * @name PoliApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/PoliApi/Notice
     */
    poliApiNotice: (model: PortalPsPoliModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PoliApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Poli
     * @name PoliApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/PoliApi/Withdraw
     */
    poliApiWithdraw: (model: PortalPsPoliModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/PoliApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PrepaidCard
     * @name PrepaidCardApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/PrepaidCardApi/Add
     */
    prepaidCardApiAdd: (model: PortalPsPrepaidcardModelsApiAddModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/PrepaidCardApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PrepaidCard
     * @name PrepaidCardApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/PrepaidCardApi/Withdraw
     */
    prepaidCardApiWithdraw: (
      model: PortalPsPrepaidcardModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/PrepaidCardApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name ProfileApiCountries
     * @request GET:/api/ProfileApi/Countries
     */
    profileApiCountries: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalUserSettingsModelsApiCountryModel[], any>({
        path: `/api/ProfileApi/Countries`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name ProfileApiCities
     * @request GET:/api/ProfileApi/Cities
     */
    profileApiCities: (
      query: { countryCode: string; cityNamePart?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsApiCityModel[], any>({
        path: `/api/ProfileApi/Cities`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name ProfileApiNationalities
     * @request GET:/api/ProfileApi/Nationalities
     */
    profileApiNationalities: (params: RequestParams = {}) =>
      this.request<PortalUserSettingsModelsApiNationalityModel[], any>({
        path: `/api/ProfileApi/Nationalities`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name ProfileApiCorporate
     * @summary  (only for authorized users)
     * @request POST:/api/ProfileApi/Corporate
     */
    profileApiCorporate: (
      model: PortalUserSettingsModelsApiCorporateProfileUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/ProfileApi/Corporate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name ProfileApiJoint
     * @summary  (only for authorized users)
     * @request POST:/api/ProfileApi/Joint
     */
    profileApiJoint: (
      model: PortalUserSettingsModelsApiJointProfileUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/ProfileApi/Joint`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name ProfileApiPersonal
     * @summary  (only for authorized users)
     * @request POST:/api/ProfileApi/Personal
     */
    profileApiPersonal: (
      model: PortalUserSettingsModelsApiPersonalProfileUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/ProfileApi/Personal`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Qiwi
     * @name QiwiApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/QiwiApi/Add
     */
    qiwiApiAdd: (model: PortalPsQiwiModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsQiwiModelsApiDepositModel, any>({
        path: `/api/QiwiApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Qiwi
     * @name QiwiApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/QiwiApi/Notice
     */
    qiwiApiNotice: (model: PortalPsQiwiModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/QiwiApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Qiwi
     * @name QiwiApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/QiwiApi/Withdraw
     */
    qiwiApiWithdraw: (model: PortalPsQiwiModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/QiwiApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire
     * @name QuestionnaireApiCheckAnswers
     * @summary  (only for authorized users)
     * @request POST:/api/QuestionnaireApi/CheckAnswers
     */
    questionnaireApiCheckAnswers: (
      model: PortalUserQuestionnaireModelsApiQuestionnaireAnswerModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/QuestionnaireApi/CheckAnswers`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire
     * @name QuestionnaireApiTemplate
     * @summary  (only for authorized users)
     * @request GET:/api/QuestionnaireApi/Template
     */
    questionnaireApiTemplate: (
      query?: { 'model.questionnaireCode'?: string; 'model.domainName'?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserQuestionnaireModelsApiQuestionnaireTemplateModel, any>({
        path: `/api/QuestionnaireApi/Template`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RbkMoney
     * @name RbkMoneyApiCreditDebitCardsAdd
     * @summary  (only for authorized users)
     * @request POST:/api/RbkMoneyApi/CreditDebitCardsAdd
     */
    rbkMoneyApiCreditDebitCardsAdd: (
      model: PortalPsRbkmoneyModelsApiAddCardsModel,
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/api/RbkMoneyApi/CreditDebitCardsAdd`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RbkMoney
     * @name RbkMoneyApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/RbkMoneyApi/Add
     */
    rbkMoneyApiAdd: (model: PortalPsRbkmoneyModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsRbkmoneyModelsApiDepositModel, any>({
        path: `/api/RbkMoneyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RbkMoney
     * @name RbkMoneyApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/RbkMoneyApi/Notice
     */
    rbkMoneyApiNotice: (model: PortalPsRbkmoneyModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/RbkMoneyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name PasswordApiRecover
     * @request POST:/api/PasswordApi/Recover
     */
    passwordApiRecover: (
      model: PortalUserIdentityPasswordModelsApiRecoverPasswordModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PasswordApi/Recover`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name PasswordApiReset
     * @request POST:/api/PasswordApi/Reset
     */
    passwordApiReset: (
      model: PortalUserIdentityPasswordModelsApiResetPasswordModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/PasswordApi/Reset`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name RecoveryApiAccounts
     * @summary  (only for authorized users)
     * @request GET:/api/RecoveryApi/Accounts
     */
    recoveryApiAccounts: (
      query?: { recoveryTypes?: string[]; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserRecoveryModelsApiAccountModel[], any>({
        path: `/api/RecoveryApi/Accounts`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name RecoveryApiActions
     * @summary Recovery action history (only for authorized users)
     * @request GET:/api/RecoveryApi/Actions
     */
    recoveryApiActions: (
      query?: {
        recoveryTypeName?: string
        recoveryStatusName?: string
        accountIdentifier?: string
        dateFrom?: string
        dateTo?: string
        pageNumber?: number
        pageSize?: number
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserRecoveryModelsApiRecoveryActionsResponseModel, void>({
        path: `/api/RecoveryApi/Actions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name RecoveryApiCreate
     * @summary Request recovery (only for authorized users)
     * @request POST:/api/RecoveryApi/Create
     */
    recoveryApiCreate: (
      model: PortalUserRecoveryModelsApiRecoveryActionCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserRecoveryModelsApiRecoveryActionModel, void>({
        path: `/api/RecoveryApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name RecoveryApiUpdate
     * @summary Update recovery action (only for authorized users)
     * @request POST:/api/RecoveryApi/Update
     */
    recoveryApiUpdate: (
      model: PortalUserRecoveryModelsApiRecoveryActionUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/RecoveryApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name RecoveryApiReset
     * @summary Reset forgotten password/PIN code/etc. (only for authorized users)
     * @request POST:/api/RecoveryApi/Reset
     */
    recoveryApiReset: (model: PortalUserRecoveryModelsApiResetModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/RecoveryApi/Reset`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redeem
     * @name RedeemApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/RedeemApi/Add
     */
    redeemApiAdd: (model: PortalPsRedeemModelsApiAddModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/RedeemApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redeem
     * @name RedeemApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/RedeemApi/Withdraw
     */
    redeemApiWithdraw: (model: PortalPsRedeemModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/RedeemApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redeem
     * @name RedeemApiCodes
     * @summary  (only for authorized users)
     * @request GET:/api/RedeemApi/Codes
     */
    redeemApiCodes: (
      query?: {
        dateFrom?: string
        dateTo?: string
        pageNumber?: number
        pageSize?: number
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsRedeemModelsApiRedeemCodesCollectionModel, any>({
        path: `/api/RedeemApi/Codes`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Region
     * @name RegionApiCountries
     * @summary  (only for authorized users)
     * @request GET:/api/RegionApi/Countries
     */
    regionApiCountries: (
      query?: { regionName?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiRegionCountryModel[], any>({
        path: `/api/RegionApi/Countries`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Region
     * @name RegionApiRegions
     * @summary  (only for authorized users)
     * @request GET:/api/RegionApi/Regions
     */
    regionApiRegions: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiRegionRegionModel[], any>({
        path: `/api/RegionApi/Regions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Region
     * @name RegionApiCreate
     * @summary  (only for authorized users)
     * @request POST:/api/RegionApi/Create
     */
    regionApiCreate: (
      model: PortalModuleConfigurationModelsApiRegionCreateRegionModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/RegionApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Region
     * @name RegionApiUpdate
     * @summary  (only for authorized users)
     * @request POST:/api/RegionApi/Update
     */
    regionApiUpdate: (
      model: PortalModuleConfigurationModelsApiRegionUpdateRegionModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/RegionApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Region
     * @name RegionApiDelete
     * @summary  (only for authorized users)
     * @request POST:/api/RegionApi/Delete
     */
    regionApiDelete: (
      model: PortalModuleConfigurationModelsApiRegionDeleteRegionModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/RegionApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Registration
     * @name RegistrationApiComplete
     * @summary New user registration
     * @request POST:/api/RegistrationApi/Complete
     */
    registrationApiComplete: (
      request: PortalModuleRegistrationUserModelsApiRegistrationRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleRegistrationUserModelsApiRegistrationResponseModel, void>({
        path: `/api/RegistrationApi/Complete`,
        method: 'POST',
        body: request,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salv
     * @name SalvApiResult
     * @request POST:/api/SalvApi/Result
     */
    salvApiResult: (model: SalvServiceModelsWebhookWebhook, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/SalvApi/Result`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiIssueParameters
     * @summary  (only for authorized users)
     * @request GET:/api/SkrillApi/Parameters/Issue
     */
    skrillApiIssueParameters: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalPsSkrillModelsApiCardIssueParametersResponseModel, any>({
        path: `/api/SkrillApi/Parameters/Issue`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiCreditDebitCardsAdd
     * @summary  (only for authorized users)
     * @request POST:/api/SkrillApi/CreditDebitCards/Add
     */
    skrillApiCreditDebitCardsAdd: (
      model: PortalPsSkrillModelsApiCreditDebitCardsAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/SkrillApi/CreditDebitCards/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiCreditDebitCardsWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/SkrillApi/CreditDebitCards/Withdraw
     */
    skrillApiCreditDebitCardsWithdraw: (
      model: PortalPsSkrillModelsApiCreditDebitCardsWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/SkrillApi/CreditDebitCards/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiGet
     * @summary  (only for authorized users)
     * @request GET:/api/SkrillApi/Get
     */
    skrillApiGet: (
      query?: { payemntOptionCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsSkrillModelsApiCardModel[], any>({
        path: `/api/SkrillApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiIssue
     * @summary  (only for authorized users)
     * @request POST:/api/SkrillApi/Issue
     */
    skrillApiIssue: (
      model: PortalPsSkrillModelsApiCardIssueRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsSkrillModelsApiCardModel, any>({
        path: `/api/SkrillApi/Issue`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/SkrillApi/Add
     */
    skrillApiAdd: (model: PortalPsSkrillModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsSkrillModelsApiDepositModel, any>({
        path: `/api/SkrillApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/SkrillApi/Withdraw
     */
    skrillApiWithdraw: (model: PortalPsSkrillModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/SkrillApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/SkrillApi/Notice
     */
    skrillApiNotice: (model: PortalPsSkrillModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/SkrillApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiDelete
     * @summary  (only for authorized users)
     * @request POST:/api/SkrillApi/Delete
     */
    skrillApiDelete: (model: PortalPsSkrillModelsApiCardDeleteModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/SkrillApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SmsNotification
     * @name SmsNotificationApiSendProfileVerificationStatusNotification
     * @summary Send profile verification status notification (only for authorized users)
     * @request POST:/api/SmsNotificationApi/SendProfileVerificationStatusNotification
     */
    smsNotificationApiSendProfileVerificationStatusNotification: (
      model: PortalUserSettingsModelsApiSmsNotificationSendProfileVerificationStatusNotificationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/SmsNotificationApi/SendProfileVerificationStatusNotification`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SmsNotification
     * @name SmsNotificationApiSendRecoveryStatusChangeNotification
     * @summary Send notification of recovery (only for authorized users)
     * @request POST:/api/SmsNotificationApi/SendRecoveryStatusChangeNotification
     */
    smsNotificationApiSendRecoveryStatusChangeNotification: (
      model: PortalUserSettingsModelsApiSmsNotificationSendRecoveryNotificationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/SmsNotificationApi/SendRecoveryStatusChangeNotification`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SmsNotification
     * @name SmsNotificationApiSendFinanceOperationStatusChangeNotification
     * @summary Send notification of finance operation status change (only for authorized users)
     * @request POST:/api/SmsNotificationApi/SendFinanceOperationStatusChangeNotification
     */
    smsNotificationApiSendFinanceOperationStatusChangeNotification: (
      model: PortalUserSettingsModelsApiSmsNotificationSendFinanceOperationStatusChangeNotificationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/SmsNotificationApi/SendFinanceOperationStatusChangeNotification`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns names of custom fields and bank details fields are required to be filled by user.
     *
     * @tags SorexPay
     * @name SorexPayApiWithdrawParameters
     * @summary SorexPay withdrawal parameters (only for authorized users)
     * @request GET:/api/SorexPayApi/Parameters/Withdraw
     */
    sorexPayApiWithdrawParameters: (
      query?: {
        currencyCode?: string
        countryCode?: string
        balanceOperationTypeName?: string
        userCardId?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsSorexpayModelsApiWithdrawParametersResponseModel, void>({
        path: `/api/SorexPayApi/Parameters/Withdraw`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 'hasAnyCards' value indicates if there is a need to create new user card.
     *
     * @tags SorexPay
     * @name SorexPayApiWithdrawConfiguration
     * @summary SorexPay withdrawal configuration (only for authorized users)
     * @request GET:/api/SorexPayApi/Configuration/Withdraw
     */
    sorexPayApiWithdrawConfiguration: (
      query?: { domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsSorexpayModelsApiWithdrawConfigurationModel, void>({
        path: `/api/SorexPayApi/Configuration/Withdraw`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SorexPay
     * @name SorexPayApiWithdraw
     * @summary Withdraw funds via SorexPay (only for authorized users)
     * @request POST:/api/SorexPayApi/Withdraw
     */
    sorexPayApiWithdraw: (
      model: PortalPsSorexpayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/SorexPayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SorexPay
     * @name SorexPayApiAdd
     * @summary Add funds via SorexPay (only for authorized users)
     * @request POST:/api/SorexPayApi/Add
     */
    sorexPayApiAdd: (model: PortalPsSorexpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsSorexpayModelsApiDepositModel, void>({
        path: `/api/SorexPayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SumSub
     * @name SumSubApiResult
     * @summary SumSub webhook endpoint
     * @request POST:/api/SumSubApi/Result
     */
    sumSubApiResult: (
      model: VerificationServicesSumsubModelsJsonWebhook,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/SumSubApi/Result`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SumSub
     * @name SumSubApiVerificationForm
     * @summary Get SumSub verification form (only for authorized users)
     * @request GET:/api/SumSubApi/VerificationForm
     */
    sumSubApiVerificationForm: (
      query?: { 'model.gradeName'?: string; 'model.domainName'?: string },
      params: RequestParams = {},
    ) =>
      this.request<VerificationServicesSumsubModelsApiSumSubVerificationFormModel, void>({
        path: `/api/SumSubApi/VerificationForm`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tether
     * @name TetherApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/TetherApi/Add
     */
    tetherApiAdd: (model: PortalPsTetherModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsTetherModelsApiCryptoAddressModel, any>({
        path: `/api/TetherApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tether
     * @name TetherApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/TetherApi/Notice
     */
    tetherApiNotice: (model: PortalPsTetherModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/TetherApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tether
     * @name TetherApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/TetherApi/Withdraw
     */
    tetherApiWithdraw: (model: PortalPsTetherModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/TetherApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns trading products, currencies, leverages and other parameters required for trading account opening.
     *
     * @tags Trading
     * @name TradingProductApiConfiguration
     * @summary Trading product configuration (only for authorized users)
     * @request GET:/api/TradingProductApi/Configuration
     */
    tradingProductApiConfiguration: (
      query?: {
        tradingGroup?: string
        tradingPlatformType?: string
        tradingProductType?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<TpCoreModelsApiTradingProductModel[], void>({
        path: `/api/TradingProductApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Trading
     * @name TradingAccountApiCreate
     * @summary Create trading account (only for authorized users)
     * @request POST:/api/TradingAccountApi/Create
     */
    tradingAccountApiCreate: (
      model: AtTradingModelsTradingAccountCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/TradingAccountApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TransactPro
     * @name TransactProApiDepositConfiguration
     * @summary  (only for authorized users)
     * @request GET:/api/TransactProApi/Configuration/Deposit
     */
    transactProApiDepositConfiguration: (params: RequestParams = {}) =>
      this.request<PortalPsTransactproModelsApiDepositConfigurationModel, any>({
        path: `/api/TransactProApi/Configuration/Deposit`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TransactPro
     * @name TransactProApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/TransactProApi/Add
     */
    transactProApiAdd: (model: PortalPsTransactproModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsTransactproModelsApiDepositModel, any>({
        path: `/api/TransactProApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name RequestTransferApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/RequestTransferApi/Add
     */
    requestTransferApiAdd: (
      model: PortalPsTransferModelsApiRequestTransferAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/RequestTransferApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name RequestTransferApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/RequestTransferApi/Notice
     */
    requestTransferApiNotice: (
      model: PortalPsTransferModelsApiRequestTransferNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsTransferModelsApiRequestTransferResponseModel, any>({
        path: `/api/RequestTransferApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name RequestTransferApiChangeStatus
     * @summary  (only for authorized users)
     * @request POST:/api/RequestTransferApi/ChangeStatus
     */
    requestTransferApiChangeStatus: (
      model: PortalPsTransferModelsApiRequestTransferActionModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/RequestTransferApi/ChangeStatus`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Moves money from one financial account to another.
     *
     * @tags Transfer
     * @name TransferApiCreate
     * @summary OBSOLETE!!! Use POST api/TransferApi/Create instead (only for authorized users)
     * @request GET:/api/TransferApi/Create
     * @deprecated
     */
    transferApiCreate: (
      query?: {
        'model.accountFrom'?: string
        'model.accountTo'?: string
        'model.currencyFrom'?: string
        'model.currencyTo'?: string
        'model.amount'?: number
        'model.pinCode'?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiTransferResponseModel, void>({
        path: `/api/TransferApi/Create`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name TransferApiCreate2
     * @summary Transfer funds (only for authorized users)
     * @request POST:/api/TransferApi/Create
     * @originalName transferApiCreate
     * @duplicate
     */
    transferApiCreate2: (
      model: FinanceTransferModelsApiTransferCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/TransferApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name TransferApiAccounts
     * @summary Gets accounts for current user
     * @request GET:/api/TransferApi/Accounts
     */
    transferApiAccounts: (
      query?: { gatewayPublicKey?: string; userId?: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiAccountModel[], any>({
        path: `/api/TransferApi/Accounts`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name TransferApiPockets
     * @summary Gets pockets of account (only for authorized users)
     * @request GET:/api/TransferApi/Pockets
     */
    transferApiPockets: (
      query?: { accountNumber?: string; currencyCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiPocketModel[], any>({
        path: `/api/TransferApi/Pockets`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name TransferApiPocketsTo
     * @summary Gets pockets of trading account (only for authorized users)
     * @request GET:/api/TransferApi/PocketsTo
     */
    transferApiPocketsTo: (
      query?: { accountNumber?: string; currencyCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiPocketModel[], any>({
        path: `/api/TransferApi/PocketsTo`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Trustly
     * @name TrustlyApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/TrustlyApi/Add
     */
    trustlyApiAdd: (model: PortalPsTrustlyModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsTrustlyModelsApiTrustlyFinanceOperationModel, any>({
        path: `/api/TrustlyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Trustly
     * @name TrustlyApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/TrustlyApi/Notice
     */
    trustlyApiNotice: (model: PortalPsTrustlyModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/TrustlyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Trustly
     * @name TrustlyApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/TrustlyApi/Withdraw
     */
    trustlyApiWithdraw: (
      model: PortalPsTrustlyModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsTrustlyModelsApiTrustlyFinanceOperationModel, any>({
        path: `/api/TrustlyApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uphold
     * @name UpholdApiPaymentConfiguration
     * @summary  (only for authorized users)
     * @request GET:/api/UpholdApi/Configuration
     */
    upholdApiPaymentConfiguration: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalPsUpholdModelsApiConfigurationModel, any>({
        path: `/api/UpholdApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uphold
     * @name UpholdApiUpholdCards
     * @summary  (only for authorized users)
     * @request GET:/api/UpholdApi/UpholdCards
     */
    upholdApiUpholdCards: (
      query?: {
        isMerchantCardsRequired?: boolean
        merchantDomainName?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemGuidMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/UpholdApi/UpholdCards`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uphold
     * @name UpholdApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/UpholdApi/Add
     */
    upholdApiAdd: (model: PortalPsUpholdModelsApiAddModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/UpholdApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uphold
     * @name UpholdApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/UpholdApi/Notice
     */
    upholdApiNotice: (model: PortalPsUpholdModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/UpholdApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uphold
     * @name UpholdApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/UpholdApi/Withdraw
     */
    upholdApiWithdraw: (model: PortalPsUpholdModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/UpholdApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserApiRegisterApplicant
     * @summary Applicant registration (only for authorized users)
     * @request POST:/api/UserApi/RegisterApplicant
     */
    userApiRegisterApplicant: (
      model: PortalModuleAuthApiModelsRegisterApplicantRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleAuthApiModelsRegisterApplicantResponseModel, void>({
        path: `/api/UserApi/RegisterApplicant`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Shows the list of user activity information.
     *
     * @tags User
     * @name UserInformationApiActivity
     * @summary User activity information (only for authorized users)
     * @request GET:/api/UserInformationApi/Activity
     */
    userInformationApiActivity: (
      query?: { dateFrom?: string; dateTo?: string; pageNumber?: number; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsUserInformationUserActivityResponseModel, void>({
        path: `/api/UserInformationApi/Activity`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gives information about Ip addresses that are saved in Black or White lists.
     *
     * @tags User
     * @name UserInformationApiIpLists
     * @summary Ip access lists information (only for authorized users)
     * @request GET:/api/UserInformationApi/IpLists
     */
    userInformationApiIpLists: (
      query?: { type?: 'Blacklist' | 'Whitelist' },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsUserInformationIpListModel[], void>({
        path: `/api/UserInformationApi/IpLists`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserInformationApiIpList
     * @summary Add an IP address to the Black/White list (only for authorized users)
     * @request PUT:/api/UserInformationApi/IpList
     */
    userInformationApiIpList: (
      model: PortalUserSettingsModelsUserInformationIpAddressAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsUserInformationIpListModel, void>({
        path: `/api/UserInformationApi/IpList`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserInformationApiIpList2
     * @summary Delete Ip adress from Black/White list (only for authorized users)
     * @request DELETE:/api/UserInformationApi/IpList
     * @originalName userInformationApiIpList
     * @duplicate
     */
    userInformationApiIpList2: (
      model: PortalUserSettingsModelsUserInformationIpAddressDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsUserInformationIpListModel, void>({
        path: `/api/UserInformationApi/IpList`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gives full user summary information.
     *
     * @tags User
     * @name UserInformationApiSummary
     * @summary User summary information (only for authorized users)
     * @request GET:/api/UserInformationApi/Summary
     */
    userInformationApiSummary: (params: RequestParams = {}) =>
      this.request<PortalUserSettingsModelsUserInformationUserSummaryResponseModel, void>({
        path: `/api/UserInformationApi/Summary`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Gives user's account
     *
     * @tags User
     * @name UserInformationApiSearchUser
     * @summary Search user (only for authorized users)
     * @request POST:/api/UserInformationApi/SearchUser
     */
    userInformationApiSearchUser: (
      model: PortalUserSettingsModelsUserInformationSearchUserRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsUserInformationUserModel[], void>({
        path: `/api/UserInformationApi/SearchUser`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserBlock
     * @name UserBlockApiUserStatus
     * @summary  (only for authorized users)
     * @request GET:/api/UserBlockApi/UserStatus
     */
    userBlockApiUserStatus: (
      query?: { userId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserBlockModelsApiAccountBlockModel[], any>({
        path: `/api/UserBlockApi/UserStatus`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserBlock
     * @name UserBlockApiBlock
     * @summary  (only for authorized users)
     * @request POST:/api/UserBlockApi/Block
     */
    userBlockApiBlock: (
      model: PortalUserBlockModelsApiUserBlockModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/UserBlockApi/Block`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name DocumentApiVerificationForm
     * @summary Gets documents verification form info (only for authorized users)
     * @request GET:/api/DocumentApi/VerificationForm
     */
    documentApiVerificationForm: (
      query?: { gradeName?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        PortalModuleVerificationModelsApiDocumentsVerificationVerificationFormModel,
        void
      >({
        path: `/api/DocumentApi/VerificationForm`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description All required documents must be uploaded before
     *
     * @tags Verification
     * @name DocumentApiVerify
     * @summary Request documents verification (only for authorized users)
     * @request POST:/api/DocumentApi/Verify
     */
    documentApiVerify: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/DocumentApi/Verify`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Content-Type: multipart/form-data
     *
     * @tags Verification
     * @name DocumentApiUpload
     * @summary Upload document (only for authorized users)
     * @request POST:/api/DocumentApi/Upload
     */
    documentApiUpload: (
      query?: { documentSetId?: string; documentType?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/DocumentApi/Upload`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name DocumentApiGet
     * @summary Gets documents for current user (only for authorized users)
     * @request GET:/api/DocumentApi/Get
     */
    documentApiGet: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleVerificationModelsApiDocumentsVerificationDocumentModel[], void>({
        path: `/api/DocumentApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Document must belong to current user. Document must have pending status.
     *
     * @tags Verification
     * @name DocumentApiDelete
     * @summary Deletes document (only for authorized users)
     * @request DELETE:/api/DocumentApi/Delete/{Id}
     */
    documentApiDelete: (id: string, query?: { id?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/DocumentApi/Delete/${id}`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name VerificationApiDocumentTypesCollection
     * @summary Gets documents type (only for authorized users)
     * @request GET:/api/VerificationApi/DocumentTypesCollection
     */
    verificationApiDocumentTypesCollection: (
      query?: {
        'model.gradeName'?: string
        'model.documentSetElementName'?: string
        'model.documentSetTypeName'?: string
        'model.domainName'?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<string[], void>({
        path: `/api/VerificationApi/DocumentTypesCollection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name VerificationApiUserGrades
     * @summary  (only for authorized users)
     * @request GET:/api/VerificationApi/UserGrades
     * @deprecated
     */
    verificationApiUserGrades: (params: RequestParams = {}) =>
      this.request<PortalModuleVerificationModelsApiUserGradesModel, any>({
        path: `/api/VerificationApi/UserGrades`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description The method returns all grades that currently exist in the system and the chain of verifications steps that the user must pass in order to acquire each grade. To pass a verification step, the user must pass one of the verification forms associated with this step. The response also includes user's current grade and each form's status, by which the caller can define user's current verification state.
     *
     * @tags Verification
     * @name VerificationApiConfiguration
     * @summary Verification chain configuration (only for authorized users)
     * @request GET:/api/VerificationApi/Configuration
     */
    verificationApiConfiguration: (
      query?: { countryCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleVerificationModelsApiVerificationConfigurationModel, void>({
        path: `/api/VerificationApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name VerificationApiUserTypes
     * @request GET:/api/VerificationApi/UserTypes
     */
    verificationApiUserTypes: (
      query?: { isEditable?: boolean; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleVerificationModelsApiUserTypeModel[], any>({
        path: `/api/VerificationApi/UserTypes`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name VerificationApiUserType
     * @summary  (only for authorized users)
     * @request POST:/api/VerificationApi/UserType
     */
    verificationApiUserType: (
      model: PortalModuleVerificationModelsApiUserTypeUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<boolean, any>({
        path: `/api/VerificationApi/UserType`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags W1
     * @name W1ApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/W1Api/Add
     */
    w1ApiAdd: (model: PortalPsWalletoneModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsWalletoneModelsApiDepositModel, any>({
        path: `/api/W1Api/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags W1
     * @name W1ApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/W1Api/Notice
     */
    w1ApiNotice: (model: PortalPsWalletoneModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/W1Api/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webmoney
     * @name WebmoneyApiAdd
     * @summary Add funds via Webmoney (only for authorized users)
     * @request POST:/api/WebmoneyApi/Add
     */
    webmoneyApiAdd: (model: PortalPsWebmoneyModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsWebmoneyModelsApiDepositModel, void>({
        path: `/api/WebmoneyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webmoney
     * @name WebmoneyApiNotice
     * @summary Notice about adding funds via Webmoney (only for authorized users)
     * @request POST:/api/WebmoneyApi/Notice
     */
    webmoneyApiNotice: (model: PortalPsWebmoneyModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, void>({
        path: `/api/WebmoneyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webmoney
     * @name WebmoneyApiWithdraw
     * @summary Withdraw funds via Webmoney (only for authorized users)
     * @request POST:/api/WebmoneyApi/Withdraw
     */
    webmoneyApiWithdraw: (
      model: PortalPsWebmoneyModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/WebmoneyApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webpay
     * @name WebpayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/WebpayApi/Add
     */
    webpayApiAdd: (model: PortalPsWebpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsWebpayModelsApiDepositModel, any>({
        path: `/api/WebpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webpay
     * @name WebpayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/WebpayApi/Withdraw
     */
    webpayApiWithdraw: (model: PortalPsWebpayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/WebpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/WireTransferApi/Add
     */
    wireTransferApiAdd: (model: PortalPsWireModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsWireModelsApiDepositModel, any>({
        path: `/api/WireTransferApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiBankDetails
     * @summary  (only for authorized users)
     * @request GET:/api/WireTransferApi/BankDetails
     */
    wireTransferApiBankDetails: (
      query?: {
        domainName?: string
        paymentOptionCode?: string
        bankCountryCode?: string
        bankId?: string
        currencyCode?: string
        russianName?: string
        address?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiBankDetailsModel, any>({
        path: `/api/WireTransferApi/BankDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiSelectBank
     * @summary  (only for authorized users)
     * @request GET:/api/WireTransferApi/SelectBank
     */
    wireTransferApiSelectBank: (
      query?: {
        bankCountryCode?: string
        currencyCode?: string
        paymentTypeAccountId?: string
        beneficiaryAccountNumber?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiBankModel, any>({
        path: `/api/WireTransferApi/SelectBank`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiTransferDetails
     * @summary  (only for authorized users)
     * @request GET:/api/WireTransferApi/TransferDetails
     */
    wireTransferApiTransferDetails: (
      query?: { bankCode?: string; beneficiaryAccountNumber?: string; nfsType?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiTransferDetailsModel, any>({
        path: `/api/WireTransferApi/TransferDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiAdditionalDetails
     * @summary  (only for authorized users)
     * @request GET:/api/WireTransferApi/AdditionalDetails
     */
    wireTransferApiAdditionalDetails: (
      query?: {
        bankCountryCode?: string
        currencyCode?: string
        accountNumber?: string
        paymentTypeAccountId?: string
        bankId?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiAdditionalDetailsModel, any>({
        path: `/api/WireTransferApi/AdditionalDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/WireTransferApi/Withdraw
     */
    wireTransferApiWithdraw: (
      model: PortalPsWireModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/WireTransferApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiBankCurrencies
     * @request GET:/api/WireTransferApi/BankCurrencies
     */
    wireTransferApiBankCurrencies: (
      query?: {
        balanceOperationTypeName?: string
        countryCode?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/WireTransferApi/BankCurrencies`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiBankCountries
     * @request GET:/api/WireTransferApi/BankCountries
     */
    wireTransferApiBankCountries: (
      query?: {
        balanceOperationTypeName?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/WireTransferApi/BankCountries`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiNfsOptions
     * @summary  (only for authorized users)
     * @request GET:/api/WireTransferApi/NfsOptions
     */
    wireTransferApiNfsOptions: (
      query?: { countryCode?: string; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiNfsOptionModel[], any>({
        path: `/api/WireTransferApi/NfsOptions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiBanks
     * @request GET:/api/WireTransferApi/Banks
     */
    wireTransferApiBanks: (
      query?: {
        balanceOperationTypeName?: string
        countryCode?: string
        currencyCode?: string
        gatewayPublicKey?: string
        userId?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiBanksResponseModel, any>({
        path: `/api/WireTransferApi/Banks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiCountryByAccountNumber
     * @summary  (only for authorized users)
     * @request GET:/api/WireTransferApi/CountryByAccountNumber
     */
    wireTransferApiCountryByAccountNumber: (
      query?: {
        balanceOperationTypeName?: string
        paymentTypeAccountId?: string
        value?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiCountryModel, any>({
        path: `/api/WireTransferApi/CountryByAccountNumber`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiInvoices
     * @summary  (only for authorized users)
     * @request GET:/api/WireTransferApi/Invoices
     */
    wireTransferApiInvoices: (params: RequestParams = {}) =>
      this.request<PortalPsWireModelsApiInvoiceHeaderModel[], any>({
        path: `/api/WireTransferApi/Invoices`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiDeleteInvoice
     * @summary  (only for authorized users)
     * @request DELETE:/api/WireTransferApi/DeleteInvoice
     */
    wireTransferApiDeleteInvoice: (query: { wireId: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/WireTransferApi/DeleteInvoice`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiInvoice
     * @summary  (only for authorized users)
     * @request GET:/api/WireTransferApi/Invoice
     */
    wireTransferApiInvoice: (
      query?: { wireId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/WireTransferApi/Invoice`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags YandexMoney
     * @name YandexMoneyApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/YandexMoneyApi/Add
     */
    yandexMoneyApiAdd: (model: PortalPsYandexmoneyModelApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsYandexmoneyModelApiDepositModel, any>({
        path: `/api/YandexMoneyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags YandexMoney
     * @name YandexMoneyApiNotice
     * @summary  (only for authorized users)
     * @request POST:/api/YandexMoneyApi/Notice
     */
    yandexMoneyApiNotice: (
      model: PortalPsYandexmoneyModelApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainConfigurationRequestModel, any>({
        path: `/api/YandexMoneyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags YandexMoney
     * @name YandexMoneyApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/YandexMoneyApi/Withdraw
     */
    yandexMoneyApiWithdraw: (
      model: PortalPsYandexmoneyModelApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/YandexMoneyApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ZotaPay
     * @name ZotaPayApiAdd
     * @summary  (only for authorized users)
     * @request POST:/api/ZotaPayApi/Add
     */
    zotaPayApiAdd: (model: PortalPsZotapayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsZotapayModelsApiDepositModel, any>({
        path: `/api/ZotaPayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ZotaPay
     * @name ZotaPayApiWithdraw
     * @summary  (only for authorized users)
     * @request POST:/api/ZotaPayApi/Withdraw
     */
    zotaPayApiWithdraw: (
      model: PortalPsZotapayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/ZotaPayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description The method allows user to receive authorization tokens using appropriate grant_type <br/> https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.3 <br/> https://datatracker.ietf.org/doc/html/rfc6749#section-6
     *
     * @tags Auth
     * @name OauthApiTokenCreate
     * @summary Get authorization token
     * @request POST:/api/OauthApi/Token
     */
    oauthApiTokenCreate: (data: { grant_type: string }, params: RequestParams = {}) =>
      this.request<
        {
          access_token: string
          token_type: string
          expires_in?: number
          '.issued'?: string
          '.expires'?: string
          refresh_token?: string
          refresh_token_issued?: string
          refresh_token_expires?: string
          refresh_token_expires_in?: number
        },
        void
      >({
        path: `/api/OauthApi/Token`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),
  }
  account = {
    /**
     * No description
     *
     * @tags Account
     * @name AccountApiGetUserInfo
     * @summary Get user information (only for authorized users)
     * @request GET:/Account/UserInfo
     */
    accountApiGetUserInfo: (params: RequestParams = {}) =>
      this.request<OauthCoreModelsUserInfoUserInfoViewModel, void>({
        path: `/Account/UserInfo`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  }
}
