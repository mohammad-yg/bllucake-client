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

export interface PasswordResetConfirm {
  /**
   * New password
   * @minLength 1
   */
  new_password: string;
  /**
   * Confirm new password
   * @minLength 1
   */
  confirm_new_password: string;
}

export interface Login {
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 150
   */
  email: string;
  /**
   * Password
   * @minLength 1
   * @maxLength 128
   */
  password: string;
}

export interface TokenRefresh {
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
  /**
   * Access
   * @minLength 1
   */
  access?: string;
}

export interface Register {
  /**
   * First name
   * @minLength 1
   * @maxLength 50
   */
  first_name: string;
  /**
   * Last name
   * @minLength 1
   * @maxLength 50
   */
  last_name: string;
  /**
   * Phone number
   * @minLength 1
   * @maxLength 11
   * @pattern ^09\d{9}$
   */
  phone_number: string;
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 150
   */
  email: string;
  /**
   * Password
   * @minLength 1
   * @maxLength 128
   */
  password: string;
  /**
   * Confirm password
   * @minLength 1
   */
  confirm_password: string;
}

export interface PasswordReset {
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
}

export interface VerifyEmail {
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 150
   */
  email: string;
}

export interface Category {
  /** ID */
  id?: number;
  /**
   * Title
   * @minLength 1
   * @maxLength 50
   */
  title: string;
  /**
   * Image
   * @format uri
   */
  image?: string | null;
  /** Parent */
  parent?: number | null;
}

export interface Price {
  /** Unit measure id */
  unit_measure_id?: string;
  /** Unit measure */
  unit_measure?: string;
  /** Price per unit */
  price_per_unit?: string;
  /** Price with discount */
  price_with_discount?: string;
  /** Choice */
  choice?: boolean;
}

export interface Cake {
  /** ID */
  id?: number;
  /**
   * Image
   * @format uri
   */
  image?: string;
  /**
   * Title
   * @minLength 1
   * @maxLength 100
   */
  title: string;
  /** Category */
  category?: number | null;
  pricemodel_set: Price[];
  /**
   * Limitation
   * @min -2147483648
   * @max 2147483647
   */
  limitation?: number | null;
}

export interface Promotion {
  /** ID */
  id?: number;
  /**
   * Description
   * @minLength 1
   * @maxLength 150
   */
  description: string;
  /** Discount */
  discount: number;
  /**
   * Image
   * @format uri
   */
  image?: string | null;
}

export interface Address {
  /** ID */
  id?: number;
  /**
   * نام
   * @minLength 1
   * @maxLength 50
   */
  first_name: string;
  /**
   * نام خانوادگی
   * @minLength 1
   * @maxLength 50
   */
  last_name: string;
  /**
   * شماره تلفن
   * @minLength 1
   * @maxLength 11
   * @pattern ^09\d{9}$
   */
  phone_number: string;
  /**
   * کد پستی
   * @minLength 1
   * @maxLength 10
   * @pattern ^\d{10}$
   */
  post_code: string;
  /**
   * آدرس
   * @minLength 1
   * @maxLength 150
   */
  address: string;
}

export interface CakeCart {
  /** ID */
  id?: number;
  /**
   * Image
   * @format uri
   */
  image?: string;
  /**
   * Title
   * @minLength 1
   * @maxLength 100
   */
  title: string;
  /** Category */
  category?: number | null;
  /** Pricemodel set */
  pricemodel_set?: string;
  /**
   * Limitation
   * @min -2147483648
   * @max 2147483647
   */
  limitation?: number | null;
}

export interface CartItem {
  /** ID */
  id?: number;
  cake: CakeCart;
  /**
   * تعداد
   * @min 1
   * @max 32767
   */
  quantity: number;
  /** Total price */
  total_price?: string;
}

export interface CustomizeCake {
  /** ID */
  id?: number;
  /** وزن */
  weight: number;
  /** @uniqueItems true */
  filling?: (number | null)[];
  /** روکش */
  cover: number;
  /** مزه */
  taste: number;
  /**
   * عکس
   * @format uri
   */
  image?: string | null;
  /**
   * توضیحات
   * @minLength 1
   */
  explanation: string;
}

export interface CartCustomizeItem {
  /** ID */
  id?: number;
  cake: CustomizeCake;
  /** Total price */
  total_price?: string;
}

export interface Delivery {
  /** ID */
  id?: number;
  /**
   * نوع تحویل
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /** Cost */
  cost?: string;
}

export interface Cart {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  items?: CartItem[];
  customize?: CartCustomizeItem[];
  /** Total price */
  total_price?: string;
  /** Total payment */
  total_payment?: string;
  delivery_method?: Delivery;
  /** Total discount */
  total_discount?: string;
  address?: Address;
  /** Delivery date time */
  delivery_date_time?: string;
}

export interface DeliveryMethod {
  /** نحوه ی تحویل */
  delivery_method?: number | null;
}

export interface AddressMethod {
  /** آدرس */
  address?: number | null;
}

export interface DeliveryDateTimeMethod {
  /**
   * ساعت و تاریخ تحویل
   * @format date-time
   */
  delivery_date_time?: string | null;
}

export interface AddCartItem {
  /** ID */
  id?: number;
  /** Cake id */
  cake_id: number;
  /**
   * تعداد
   * @min 1
   * @max 32767
   */
  quantity: number;
  /** مقیاس */
  unit_measure: number;
}

export interface UpdateCartItem {
  /**
   * تعداد
   * @min 1
   * @max 32767
   */
  quantity: number;
  /** مقیاس */
  unit_measure: number;
}

export interface CakeTrueChoise {
  /** ID */
  id?: number;
  /**
   * Image
   * @format uri
   */
  image?: string;
  /**
   * Title
   * @minLength 1
   * @maxLength 100
   */
  title: string;
  /** Category */
  category?: number | null;
  /** Unit measure */
  unit_measure?: string;
}

export interface OrderItemTrueChoise {
  /** ID */
  id?: number;
  cake: CakeTrueChoise;
  customize_cake: CustomizeCake;
  /**
   * تعداد
   * @min 0
   * @max 32767
   */
  quantity: number;
  /**
   * قیمت
   * @min 0
   * @max 2147483647
   */
  price: number;
}

export interface Order {
  /** ID */
  id?: number;
  /** Code */
  code?: string;
  /** مشتری */
  customer: number;
  /** Created at */
  created_at?: string;
  /** وضعیت */
  payment_status?: "O" | "A" | "P" | "C" | "R";
  items: OrderItemTrueChoise[];
  /** Total paid */
  total_paid?: string;
  /** Rest pay */
  rest_pay?: string;
  /** Delivery date time */
  delivery_date_time?: string;
}

export interface CreateOrder {
  /**
   * Cart id
   * @format uuid
   */
  cart_id: string;
}

export interface RetrieveOrder {
  /** وضعیت */
  payment_status?: "O" | "A" | "P" | "C" | "R";
  /** Payment status display */
  payment_status_display?: string;
}

export interface UpdateOrder {
  /** وضعیت */
  payment_status?: "O" | "A" | "P" | "C" | "R";
}

export interface CakeCover {
  /** ID */
  id?: number;
  /**
   * روکش
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /**
   * قیمت
   * @min -2147483648
   * @max 2147483647
   */
  price: number;
  /** Choice */
  choice?: boolean | null;
}

export interface CakeFilling {
  /** ID */
  id?: number;
  /**
   * فیلینگ
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /**
   * قیمت
   * @min -2147483648
   * @max 2147483647
   */
  price: number;
  /** Choice */
  choice?: boolean | null;
}

export interface CakeTaste {
  /** ID */
  id?: number;
  /**
   * مزه
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /**
   * قیمت
   * @min -2147483648
   * @max 2147483647
   */
  price: number;
  /** Choice */
  choice?: boolean | null;
}

export interface CakeWeight {
  /** ID */
  id?: number;
  /**
   * وزن
   * @minLength 1
   * @maxLength 50
   */
  int: string;
  /**
   * قیمت
   * @min -2147483648
   * @max 2147483647
   */
  price: number;
  /** Choice */
  choice?: boolean | null;
}

export interface Me {
  /**
   * Avatar
   * @format uri
   */
  avatar?: string;
  /**
   * Address
   * @minLength 1
   */
  address: string;
  /** Post code */
  post_code: number;
  /**
   * First name
   * @minLength 1
   */
  first_name: string;
  /**
   * Last name
   * @minLength 1
   */
  last_name: string;
}

export interface PhoneNumber {
  /**
   * Phone number
   * @minLength 1
   * @maxLength 11
   * @pattern ^09\d{9}$
   */
  phone_number: string;
}

export interface Settings {
  /** ID */
  id?: number;
  /**
   * نام سایت
   * @minLength 1
   * @maxLength 50
   */
  website: string;
  /**
   * شماره کارت
   * @minLength 1
   * @maxLength 25
   */
  card_number: string;
  /**
   * مالک شماره کارت
   * @minLength 1
   * @maxLength 50
   */
  owner_name: string;
  /**
   * موضوع بنر
   * @minLength 1
   * @maxLength 50
   */
  title: string;
  /**
   * توضیحات بنر
   * @minLength 1
   * @maxLength 100
   */
  explanation: string;
  /**
   * شماره تلفن
   * @minLength 1
   * @maxLength 11
   * @pattern ^09\d{9}$
   */
  phone_number: string;
  /**
   * ایمیل
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * لوگو
   * @format uri
   */
  logo?: string;
  /**
   * ایدی اینستاگرام
   * @minLength 1
   * @maxLength 200
   */
  instagram_id: string;
  /**
   * لینک اینستاگرام
   * @minLength 1
   * @maxLength 200
   */
  instagram: string;
  /**
   * لینک واتس اپ
   * @minLength 1
   * @maxLength 200
   */
  whatsapp: string;
  /**
   * لینک تلگرام
   * @minLength 1
   * @maxLength 200
   */
  telegram: string;
  /**
   * آدرس
   * @minLength 1
   * @maxLength 100
   */
  address: string;
}

export interface ContactUsModel {
  /** ID */
  id?: number;
  /**
   * نام و نام خانوادگی
   * @minLength 1
   * @maxLength 50
   */
  full_name: string;
  /**
   * ایمیل
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * پیام
   * @minLength 1
   */
  message: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://backend.bllucake.ir" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Snippets API
 * @version v1
 * @license BSD License
 * @termsOfService https://www.google.com/policies/terms/
 * @baseUrl https://backend.bllucake.ir
 * @contact <contact@snippets.local>
 *
 * Test description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name AuthActivateCreate
     * @request POST:/auth/activate/{otp_code}/
     * @secure
     */
    authActivateCreate: (otpCode: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/activate/${otpCode}/`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthConfirmResetPasswordCreate
     * @request POST:/auth/confirm_reset_password/{otp_code}/
     * @secure
     */
    authConfirmResetPasswordCreate: (otpCode: string, data: PasswordResetConfirm, params: RequestParams = {}) =>
      this.request<PasswordResetConfirm, any>({
        path: `/auth/confirm_reset_password/${otpCode}/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthLoginCreate
     * @request POST:/auth/login/
     * @secure
     */
    authLoginCreate: (data: Login, params: RequestParams = {}) =>
      this.request<Login, any>({
        path: `/auth/login/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
     *
     * @tags auth
     * @name AuthRefreshCreate
     * @request POST:/auth/refresh/
     * @secure
     */
    authRefreshCreate: (data: TokenRefresh, params: RequestParams = {}) =>
      this.request<TokenRefresh, any>({
        path: `/auth/refresh/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthRegisterCreate
     * @request POST:/auth/register/
     * @secure
     */
    authRegisterCreate: (data: Register, params: RequestParams = {}) =>
      this.request<Register, any>({
        path: `/auth/register/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthResetPasswordCreate
     * @request POST:/auth/reset_password/
     * @secure
     */
    authResetPasswordCreate: (data: PasswordReset, params: RequestParams = {}) =>
      this.request<PasswordReset, any>({
        path: `/auth/reset_password/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthVerifyEmailCreate
     * @request POST:/auth/verify_email/
     * @secure
     */
    authVerifyEmailCreate: (data: VerifyEmail, params: RequestParams = {}) =>
      this.request<VerifyEmail, any>({
        path: `/auth/verify_email/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  bakery = {
    /**
     * No description
     *
     * @tags bakery
     * @name BakeryCategoryList
     * @request GET:/bakery/category/
     * @secure
     */
    bakeryCategoryList: (params: RequestParams = {}) =>
      this.request<Category[], any>({
        path: `/bakery/category/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bakery
     * @name BakeryCategoryRead
     * @request GET:/bakery/category/{id}/
     * @secure
     */
    bakeryCategoryRead: (id: string, params: RequestParams = {}) =>
      this.request<Cake[], any>({
        path: `/bakery/category/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description برای بخش تخفیفات در بنر
     *
     * @tags bakery
     * @name BakeryPromotionList
     * @request GET:/bakery/promotion/
     * @secure
     */
    bakeryPromotionList: (params: RequestParams = {}) =>
      this.request<Promotion[], any>({
        path: `/bakery/promotion/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bakery
     * @name BakeryPromotionRead
     * @request GET:/bakery/promotion/{id}/
     * @secure
     */
    bakeryPromotionRead: (id: string, params: RequestParams = {}) =>
      this.request<Cake[], any>({
        path: `/bakery/promotion/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bakery
     * @name BakeryRecentCakeList
     * @request GET:/bakery/recent_cake/
     * @secure
     */
    bakeryRecentCakeList: (params: RequestParams = {}) =>
      this.request<Cake[], any>({
        path: `/bakery/recent_cake/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description برای بخش تخفیف ها در صفحه خانه
     *
     * @tags bakery
     * @name BakeryRecentPromotionList
     * @request GET:/bakery/recent_promotion/
     * @secure
     */
    bakeryRecentPromotionList: (params: RequestParams = {}) =>
      this.request<Cake[], any>({
        path: `/bakery/recent_promotion/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bakery
     * @name BakerySearchCakeList
     * @request GET:/bakery/search_cake/
     * @secure
     */
    bakerySearchCakeList: (
      query?: {
        /** A search term. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Cake[], any>({
        path: `/bakery/search_cake/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  order = {
    /**
     * No description
     *
     * @tags order
     * @name OrderAddressList
     * @request GET:/order/address/
     * @secure
     */
    orderAddressList: (params: RequestParams = {}) =>
      this.request<Address[], any>({
        path: `/order/address/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderAddressCreate
     * @request POST:/order/address/
     * @secure
     */
    orderAddressCreate: (data: Address, params: RequestParams = {}) =>
      this.request<Address, any>({
        path: `/order/address/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderAddressUpdate
     * @request PUT:/order/address/{id}/
     * @secure
     */
    orderAddressUpdate: (id: number, data: Address, params: RequestParams = {}) =>
      this.request<Address, any>({
        path: `/order/address/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderCartList
     * @request GET:/order/cart/
     * @secure
     */
    orderCartList: (params: RequestParams = {}) =>
      this.request<Cart[], any>({
        path: `/order/cart/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderCartPartialUpdate
     * @request PATCH:/order/cart/{id}/
     * @secure
     */
    orderCartPartialUpdate: (id: string, data: DeliveryMethod, params: RequestParams = {}) =>
      this.request<DeliveryMethod, any>({
        path: `/order/cart/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderCartAddressPartialUpdate
     * @request PATCH:/order/cart/{id}/address/
     * @secure
     */
    orderCartAddressPartialUpdate: (id: string, data: AddressMethod, params: RequestParams = {}) =>
      this.request<AddressMethod, any>({
        path: `/order/cart/${id}/address/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderCartDateTimeList
     * @request GET:/order/cart/{id}/date_time/
     * @secure
     */
    orderCartDateTimeList: (id: string, params: RequestParams = {}) =>
      this.request<DeliveryDateTimeMethod[], any>({
        path: `/order/cart/${id}/date_time/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderCartDateTimePartialUpdate
     * @request PATCH:/order/cart/{id}/date_time/
     * @secure
     */
    orderCartDateTimePartialUpdate: (id: string, data: DeliveryDateTimeMethod, params: RequestParams = {}) =>
      this.request<DeliveryDateTimeMethod, any>({
        path: `/order/cart/${id}/date_time/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderDeliveryList
     * @request GET:/order/delivery/
     * @secure
     */
    orderDeliveryList: (params: RequestParams = {}) =>
      this.request<Delivery[], any>({
        path: `/order/delivery/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderItemsList
     * @request GET:/order/items/
     * @secure
     */
    orderItemsList: (params: RequestParams = {}) =>
      this.request<CartItem[], any>({
        path: `/order/items/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderItemsCreate
     * @request POST:/order/items/
     * @secure
     */
    orderItemsCreate: (data: AddCartItem, params: RequestParams = {}) =>
      this.request<AddCartItem, any>({
        path: `/order/items/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderItemsRead
     * @request GET:/order/items/{id}/
     * @secure
     */
    orderItemsRead: (id: string, params: RequestParams = {}) =>
      this.request<CartItem, any>({
        path: `/order/items/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderItemsPartialUpdate
     * @request PATCH:/order/items/{id}/
     * @secure
     */
    orderItemsPartialUpdate: (id: string, data: UpdateCartItem, params: RequestParams = {}) =>
      this.request<UpdateCartItem, any>({
        path: `/order/items/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderItemsDelete
     * @request DELETE:/order/items/{id}/
     * @secure
     */
    orderItemsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/order/items/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderOrderList
     * @request GET:/order/order/
     * @secure
     */
    orderOrderList: (params: RequestParams = {}) =>
      this.request<Order[], any>({
        path: `/order/order/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderOrderCreate
     * @request POST:/order/order/
     * @secure
     */
    orderOrderCreate: (data: CreateOrder, params: RequestParams = {}) =>
      this.request<CreateOrder, any>({
        path: `/order/order/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderOrderRead
     * @request GET:/order/order/{id}/
     * @secure
     */
    orderOrderRead: (id: string, params: RequestParams = {}) =>
      this.request<RetrieveOrder, any>({
        path: `/order/order/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderOrderPartialUpdate
     * @request PATCH:/order/order/{id}/
     * @secure
     */
    orderOrderPartialUpdate: (id: string, data: UpdateOrder, params: RequestParams = {}) =>
      this.request<UpdateOrder, any>({
        path: `/order/order/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderOrderDelete
     * @request DELETE:/order/order/{id}/
     * @secure
     */
    orderOrderDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/order/order/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  profile = {
    /**
     * No description
     *
     * @tags profile
     * @name ProfileCakeCoverList
     * @request GET:/profile/cake_cover/
     * @secure
     */
    profileCakeCoverList: (params: RequestParams = {}) =>
      this.request<CakeCover[], any>({
        path: `/profile/cake_cover/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile
     * @name ProfileCakeFillingList
     * @request GET:/profile/cake_filling/
     * @secure
     */
    profileCakeFillingList: (params: RequestParams = {}) =>
      this.request<CakeFilling[], any>({
        path: `/profile/cake_filling/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile
     * @name ProfileCakeTasteList
     * @request GET:/profile/cake_taste/
     * @secure
     */
    profileCakeTasteList: (params: RequestParams = {}) =>
      this.request<CakeTaste[], any>({
        path: `/profile/cake_taste/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile
     * @name ProfileCakeWeightList
     * @request GET:/profile/cake_weight/
     * @secure
     */
    profileCakeWeightList: (params: RequestParams = {}) =>
      this.request<CakeWeight[], any>({
        path: `/profile/cake_weight/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile
     * @name ProfileCustomizeCakeList
     * @request GET:/profile/customize_cake/
     * @secure
     */
    profileCustomizeCakeList: (params: RequestParams = {}) =>
      this.request<CustomizeCake[], any>({
        path: `/profile/customize_cake/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile
     * @name ProfileCustomizeCakeCreate
     * @request POST:/profile/customize_cake/
     * @secure
     */
    profileCustomizeCakeCreate: (data: CustomizeCake, params: RequestParams = {}) =>
      this.request<CustomizeCake, any>({
        path: `/profile/customize_cake/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile
     * @name ProfileCustomizeCakeRead
     * @request GET:/profile/customize_cake/{id}/
     * @secure
     */
    profileCustomizeCakeRead: (id: string, params: RequestParams = {}) =>
      this.request<CustomizeCake, any>({
        path: `/profile/customize_cake/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile
     * @name ProfileCustomizeCakeDelete
     * @request DELETE:/profile/customize_cake/{id}/
     * @secure
     */
    profileCustomizeCakeDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/profile/customize_cake/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile
     * @name ProfileMeRead
     * @request GET:/profile/me/
     * @secure
     */
    profileMeRead: (params: RequestParams = {}) =>
      this.request<Me, any>({
        path: `/profile/me/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile
     * @name ProfileMeUpdate
     * @request PUT:/profile/me/
     * @secure
     */
    profileMeUpdate: (data: Me, params: RequestParams = {}) =>
      this.request<Me, any>({
        path: `/profile/me/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile
     * @name ProfileMePartialUpdate
     * @request PATCH:/profile/me/
     * @secure
     */
    profileMePartialUpdate: (data: Me, params: RequestParams = {}) =>
      this.request<Me, any>({
        path: `/profile/me/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile
     * @name ProfilePhoneNumberRead
     * @request GET:/profile/phone_number/
     * @secure
     */
    profilePhoneNumberRead: (params: RequestParams = {}) =>
      this.request<PhoneNumber, any>({
        path: `/profile/phone_number/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile
     * @name ProfilePhoneNumberPartialUpdate
     * @request PATCH:/profile/phone_number/
     * @secure
     */
    profilePhoneNumberPartialUpdate: (data: PhoneNumber, params: RequestParams = {}) =>
      this.request<PhoneNumber, any>({
        path: `/profile/phone_number/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  settings = {
    /**
     * No description
     *
     * @tags settings
     * @name SettingsList
     * @request GET:/settings/
     * @secure
     */
    settingsList: (params: RequestParams = {}) =>
      this.request<Settings[], any>({
        path: `/settings/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags settings
     * @name SettingsAboutList
     * @request GET:/settings/about/
     * @secure
     */
    settingsAboutList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/settings/about/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags settings
     * @name SettingsContactUsCreate
     * @request POST:/settings/contact_us/
     * @secure
     */
    settingsContactUsCreate: (data: ContactUsModel, params: RequestParams = {}) =>
      this.request<ContactUsModel, any>({
        path: `/settings/contact_us/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags settings
     * @name SettingsPaymentList
     * @request GET:/settings/payment/
     * @secure
     */
    settingsPaymentList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/settings/payment/`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
