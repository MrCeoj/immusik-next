
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Docente
 * 
 */
export type Docente = $Result.DefaultSelection<Prisma.$DocentePayload>
/**
 * Model Sucursal
 * 
 */
export type Sucursal = $Result.DefaultSelection<Prisma.$SucursalPayload>
/**
 * Model Clase
 * 
 */
export type Clase = $Result.DefaultSelection<Prisma.$ClasePayload>
/**
 * Model Alumno
 * 
 */
export type Alumno = $Result.DefaultSelection<Prisma.$AlumnoPayload>
/**
 * Model AlumnoClase
 * 
 */
export type AlumnoClase = $Result.DefaultSelection<Prisma.$AlumnoClasePayload>
/**
 * Model Pagos
 * 
 */
export type Pagos = $Result.DefaultSelection<Prisma.$PagosPayload>
/**
 * Model Gasto
 * 
 */
export type Gasto = $Result.DefaultSelection<Prisma.$GastoPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MasterKey
 * 
 */
export type MasterKey = $Result.DefaultSelection<Prisma.$MasterKeyPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Docentes
 * const docentes = await prisma.docente.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Docentes
   * const docentes = await prisma.docente.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.docente`: Exposes CRUD operations for the **Docente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Docentes
    * const docentes = await prisma.docente.findMany()
    * ```
    */
  get docente(): Prisma.DocenteDelegate<ExtArgs>;

  /**
   * `prisma.sucursal`: Exposes CRUD operations for the **Sucursal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sucursals
    * const sucursals = await prisma.sucursal.findMany()
    * ```
    */
  get sucursal(): Prisma.SucursalDelegate<ExtArgs>;

  /**
   * `prisma.clase`: Exposes CRUD operations for the **Clase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clases
    * const clases = await prisma.clase.findMany()
    * ```
    */
  get clase(): Prisma.ClaseDelegate<ExtArgs>;

  /**
   * `prisma.alumno`: Exposes CRUD operations for the **Alumno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alumnos
    * const alumnos = await prisma.alumno.findMany()
    * ```
    */
  get alumno(): Prisma.AlumnoDelegate<ExtArgs>;

  /**
   * `prisma.alumnoClase`: Exposes CRUD operations for the **AlumnoClase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlumnoClases
    * const alumnoClases = await prisma.alumnoClase.findMany()
    * ```
    */
  get alumnoClase(): Prisma.AlumnoClaseDelegate<ExtArgs>;

  /**
   * `prisma.pagos`: Exposes CRUD operations for the **Pagos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pagos.findMany()
    * ```
    */
  get pagos(): Prisma.PagosDelegate<ExtArgs>;

  /**
   * `prisma.gasto`: Exposes CRUD operations for the **Gasto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gastos
    * const gastos = await prisma.gasto.findMany()
    * ```
    */
  get gasto(): Prisma.GastoDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.masterKey`: Exposes CRUD operations for the **MasterKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterKeys
    * const masterKeys = await prisma.masterKey.findMany()
    * ```
    */
  get masterKey(): Prisma.MasterKeyDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Docente: 'Docente',
    Sucursal: 'Sucursal',
    Clase: 'Clase',
    Alumno: 'Alumno',
    AlumnoClase: 'AlumnoClase',
    Pagos: 'Pagos',
    Gasto: 'Gasto',
    User: 'User',
    MasterKey: 'MasterKey'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'docente' | 'sucursal' | 'clase' | 'alumno' | 'alumnoClase' | 'pagos' | 'gasto' | 'user' | 'masterKey'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Docente: {
        payload: Prisma.$DocentePayload<ExtArgs>
        fields: Prisma.DocenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocenteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocenteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          findFirst: {
            args: Prisma.DocenteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocenteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          findMany: {
            args: Prisma.DocenteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          create: {
            args: Prisma.DocenteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          delete: {
            args: Prisma.DocenteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          update: {
            args: Prisma.DocenteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          deleteMany: {
            args: Prisma.DocenteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DocenteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DocenteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          aggregate: {
            args: Prisma.DocenteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDocente>
          }
          groupBy: {
            args: Prisma.DocenteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DocenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocenteCountArgs<ExtArgs>,
            result: $Utils.Optional<DocenteCountAggregateOutputType> | number
          }
        }
      }
      Sucursal: {
        payload: Prisma.$SucursalPayload<ExtArgs>
        fields: Prisma.SucursalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SucursalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SucursalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          findFirst: {
            args: Prisma.SucursalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SucursalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          findMany: {
            args: Prisma.SucursalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>[]
          }
          create: {
            args: Prisma.SucursalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          delete: {
            args: Prisma.SucursalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          update: {
            args: Prisma.SucursalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          deleteMany: {
            args: Prisma.SucursalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SucursalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SucursalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          aggregate: {
            args: Prisma.SucursalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSucursal>
          }
          groupBy: {
            args: Prisma.SucursalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SucursalGroupByOutputType>[]
          }
          count: {
            args: Prisma.SucursalCountArgs<ExtArgs>,
            result: $Utils.Optional<SucursalCountAggregateOutputType> | number
          }
        }
      }
      Clase: {
        payload: Prisma.$ClasePayload<ExtArgs>
        fields: Prisma.ClaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          findFirst: {
            args: Prisma.ClaseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          findMany: {
            args: Prisma.ClaseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>[]
          }
          create: {
            args: Prisma.ClaseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          delete: {
            args: Prisma.ClaseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          update: {
            args: Prisma.ClaseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          deleteMany: {
            args: Prisma.ClaseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClaseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClaseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          aggregate: {
            args: Prisma.ClaseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClase>
          }
          groupBy: {
            args: Prisma.ClaseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaseCountArgs<ExtArgs>,
            result: $Utils.Optional<ClaseCountAggregateOutputType> | number
          }
        }
      }
      Alumno: {
        payload: Prisma.$AlumnoPayload<ExtArgs>
        fields: Prisma.AlumnoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlumnoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlumnoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          findFirst: {
            args: Prisma.AlumnoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlumnoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          findMany: {
            args: Prisma.AlumnoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>[]
          }
          create: {
            args: Prisma.AlumnoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          delete: {
            args: Prisma.AlumnoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          update: {
            args: Prisma.AlumnoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          deleteMany: {
            args: Prisma.AlumnoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlumnoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlumnoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          aggregate: {
            args: Prisma.AlumnoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlumno>
          }
          groupBy: {
            args: Prisma.AlumnoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlumnoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlumnoCountArgs<ExtArgs>,
            result: $Utils.Optional<AlumnoCountAggregateOutputType> | number
          }
        }
      }
      AlumnoClase: {
        payload: Prisma.$AlumnoClasePayload<ExtArgs>
        fields: Prisma.AlumnoClaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlumnoClaseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoClasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlumnoClaseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoClasePayload>
          }
          findFirst: {
            args: Prisma.AlumnoClaseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoClasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlumnoClaseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoClasePayload>
          }
          findMany: {
            args: Prisma.AlumnoClaseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoClasePayload>[]
          }
          create: {
            args: Prisma.AlumnoClaseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoClasePayload>
          }
          delete: {
            args: Prisma.AlumnoClaseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoClasePayload>
          }
          update: {
            args: Prisma.AlumnoClaseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoClasePayload>
          }
          deleteMany: {
            args: Prisma.AlumnoClaseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlumnoClaseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlumnoClaseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnoClasePayload>
          }
          aggregate: {
            args: Prisma.AlumnoClaseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlumnoClase>
          }
          groupBy: {
            args: Prisma.AlumnoClaseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlumnoClaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlumnoClaseCountArgs<ExtArgs>,
            result: $Utils.Optional<AlumnoClaseCountAggregateOutputType> | number
          }
        }
      }
      Pagos: {
        payload: Prisma.$PagosPayload<ExtArgs>
        fields: Prisma.PagosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>
          }
          findFirst: {
            args: Prisma.PagosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>
          }
          findMany: {
            args: Prisma.PagosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>[]
          }
          create: {
            args: Prisma.PagosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>
          }
          delete: {
            args: Prisma.PagosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>
          }
          update: {
            args: Prisma.PagosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>
          }
          deleteMany: {
            args: Prisma.PagosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PagosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PagosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>
          }
          aggregate: {
            args: Prisma.PagosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePagos>
          }
          groupBy: {
            args: Prisma.PagosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PagosGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagosCountArgs<ExtArgs>,
            result: $Utils.Optional<PagosCountAggregateOutputType> | number
          }
        }
      }
      Gasto: {
        payload: Prisma.$GastoPayload<ExtArgs>
        fields: Prisma.GastoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GastoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GastoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GastoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          findFirst: {
            args: Prisma.GastoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GastoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GastoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          findMany: {
            args: Prisma.GastoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          create: {
            args: Prisma.GastoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          delete: {
            args: Prisma.GastoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          update: {
            args: Prisma.GastoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          deleteMany: {
            args: Prisma.GastoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GastoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GastoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          aggregate: {
            args: Prisma.GastoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGasto>
          }
          groupBy: {
            args: Prisma.GastoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GastoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GastoCountArgs<ExtArgs>,
            result: $Utils.Optional<GastoCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MasterKey: {
        payload: Prisma.$MasterKeyPayload<ExtArgs>
        fields: Prisma.MasterKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterKeyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterKeyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterKeyPayload>
          }
          findFirst: {
            args: Prisma.MasterKeyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterKeyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterKeyPayload>
          }
          findMany: {
            args: Prisma.MasterKeyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterKeyPayload>[]
          }
          create: {
            args: Prisma.MasterKeyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterKeyPayload>
          }
          delete: {
            args: Prisma.MasterKeyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterKeyPayload>
          }
          update: {
            args: Prisma.MasterKeyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterKeyPayload>
          }
          deleteMany: {
            args: Prisma.MasterKeyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MasterKeyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MasterKeyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterKeyPayload>
          }
          aggregate: {
            args: Prisma.MasterKeyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMasterKey>
          }
          groupBy: {
            args: Prisma.MasterKeyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MasterKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterKeyCountArgs<ExtArgs>,
            result: $Utils.Optional<MasterKeyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DocenteCountOutputType
   */

  export type DocenteCountOutputType = {
    clases: number
  }

  export type DocenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clases?: boolean | DocenteCountOutputTypeCountClasesArgs
  }

  // Custom InputTypes

  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCountOutputType
     */
    select?: DocenteCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeCountClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaseWhereInput
  }



  /**
   * Count Type SucursalCountOutputType
   */

  export type SucursalCountOutputType = {
    clases: number
    gastos: number
  }

  export type SucursalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clases?: boolean | SucursalCountOutputTypeCountClasesArgs
    gastos?: boolean | SucursalCountOutputTypeCountGastosArgs
  }

  // Custom InputTypes

  /**
   * SucursalCountOutputType without action
   */
  export type SucursalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SucursalCountOutputType
     */
    select?: SucursalCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SucursalCountOutputType without action
   */
  export type SucursalCountOutputTypeCountClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaseWhereInput
  }


  /**
   * SucursalCountOutputType without action
   */
  export type SucursalCountOutputTypeCountGastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
  }



  /**
   * Count Type ClaseCountOutputType
   */

  export type ClaseCountOutputType = {
    alumnos: number
  }

  export type ClaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumnos?: boolean | ClaseCountOutputTypeCountAlumnosArgs
  }

  // Custom InputTypes

  /**
   * ClaseCountOutputType without action
   */
  export type ClaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseCountOutputType
     */
    select?: ClaseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClaseCountOutputType without action
   */
  export type ClaseCountOutputTypeCountAlumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoClaseWhereInput
  }



  /**
   * Count Type AlumnoCountOutputType
   */

  export type AlumnoCountOutputType = {
    clases: number
    pagos: number
  }

  export type AlumnoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clases?: boolean | AlumnoCountOutputTypeCountClasesArgs
    pagos?: boolean | AlumnoCountOutputTypeCountPagosArgs
  }

  // Custom InputTypes

  /**
   * AlumnoCountOutputType without action
   */
  export type AlumnoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoCountOutputType
     */
    select?: AlumnoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AlumnoCountOutputType without action
   */
  export type AlumnoCountOutputTypeCountClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoClaseWhereInput
  }


  /**
   * AlumnoCountOutputType without action
   */
  export type AlumnoCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagosWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Docente
   */

  export type AggregateDocente = {
    _count: DocenteCountAggregateOutputType | null
    _avg: DocenteAvgAggregateOutputType | null
    _sum: DocenteSumAggregateOutputType | null
    _min: DocenteMinAggregateOutputType | null
    _max: DocenteMaxAggregateOutputType | null
  }

  export type DocenteAvgAggregateOutputType = {
    id: number | null
  }

  export type DocenteSumAggregateOutputType = {
    id: number | null
  }

  export type DocenteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    aPaterno: string | null
    aMaterno: string | null
    estado: string | null
    telefono: string | null
    curp: string | null
  }

  export type DocenteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    aPaterno: string | null
    aMaterno: string | null
    estado: string | null
    telefono: string | null
    curp: string | null
  }

  export type DocenteCountAggregateOutputType = {
    id: number
    nombre: number
    aPaterno: number
    aMaterno: number
    estado: number
    telefono: number
    curp: number
    _all: number
  }


  export type DocenteAvgAggregateInputType = {
    id?: true
  }

  export type DocenteSumAggregateInputType = {
    id?: true
  }

  export type DocenteMinAggregateInputType = {
    id?: true
    nombre?: true
    aPaterno?: true
    aMaterno?: true
    estado?: true
    telefono?: true
    curp?: true
  }

  export type DocenteMaxAggregateInputType = {
    id?: true
    nombre?: true
    aPaterno?: true
    aMaterno?: true
    estado?: true
    telefono?: true
    curp?: true
  }

  export type DocenteCountAggregateInputType = {
    id?: true
    nombre?: true
    aPaterno?: true
    aMaterno?: true
    estado?: true
    telefono?: true
    curp?: true
    _all?: true
  }

  export type DocenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docente to aggregate.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Docentes
    **/
    _count?: true | DocenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocenteMaxAggregateInputType
  }

  export type GetDocenteAggregateType<T extends DocenteAggregateArgs> = {
        [P in keyof T & keyof AggregateDocente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocente[P]>
      : GetScalarType<T[P], AggregateDocente[P]>
  }




  export type DocenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocenteWhereInput
    orderBy?: DocenteOrderByWithAggregationInput | DocenteOrderByWithAggregationInput[]
    by: DocenteScalarFieldEnum[] | DocenteScalarFieldEnum
    having?: DocenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocenteCountAggregateInputType | true
    _avg?: DocenteAvgAggregateInputType
    _sum?: DocenteSumAggregateInputType
    _min?: DocenteMinAggregateInputType
    _max?: DocenteMaxAggregateInputType
  }

  export type DocenteGroupByOutputType = {
    id: number
    nombre: string
    aPaterno: string
    aMaterno: string
    estado: string
    telefono: string
    curp: string
    _count: DocenteCountAggregateOutputType | null
    _avg: DocenteAvgAggregateOutputType | null
    _sum: DocenteSumAggregateOutputType | null
    _min: DocenteMinAggregateOutputType | null
    _max: DocenteMaxAggregateOutputType | null
  }

  type GetDocenteGroupByPayload<T extends DocenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocenteGroupByOutputType[P]>
            : GetScalarType<T[P], DocenteGroupByOutputType[P]>
        }
      >
    >


  export type DocenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    aPaterno?: boolean
    aMaterno?: boolean
    estado?: boolean
    telefono?: boolean
    curp?: boolean
    clases?: boolean | Docente$clasesArgs<ExtArgs>
    _count?: boolean | DocenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectScalar = {
    id?: boolean
    nombre?: boolean
    aPaterno?: boolean
    aMaterno?: boolean
    estado?: boolean
    telefono?: boolean
    curp?: boolean
  }

  export type DocenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clases?: boolean | Docente$clasesArgs<ExtArgs>
    _count?: boolean | DocenteCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DocentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Docente"
    objects: {
      clases: Prisma.$ClasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      aPaterno: string
      aMaterno: string
      estado: string
      telefono: string
      curp: string
    }, ExtArgs["result"]["docente"]>
    composites: {}
  }


  type DocenteGetPayload<S extends boolean | null | undefined | DocenteDefaultArgs> = $Result.GetResult<Prisma.$DocentePayload, S>

  type DocenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DocenteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocenteCountAggregateInputType | true
    }

  export interface DocenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Docente'], meta: { name: 'Docente' } }
    /**
     * Find zero or one Docente that matches the filter.
     * @param {DocenteFindUniqueArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DocenteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DocenteFindUniqueArgs<ExtArgs>>
    ): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Docente that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DocenteFindUniqueOrThrowArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DocenteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DocenteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Docente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindFirstArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DocenteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DocenteFindFirstArgs<ExtArgs>>
    ): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Docente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindFirstOrThrowArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DocenteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DocenteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Docentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Docentes
     * const docentes = await prisma.docente.findMany()
     * 
     * // Get first 10 Docentes
     * const docentes = await prisma.docente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const docenteWithIdOnly = await prisma.docente.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DocenteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DocenteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Docente.
     * @param {DocenteCreateArgs} args - Arguments to create a Docente.
     * @example
     * // Create one Docente
     * const Docente = await prisma.docente.create({
     *   data: {
     *     // ... data to create a Docente
     *   }
     * })
     * 
    **/
    create<T extends DocenteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DocenteCreateArgs<ExtArgs>>
    ): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Docente.
     * @param {DocenteDeleteArgs} args - Arguments to delete one Docente.
     * @example
     * // Delete one Docente
     * const Docente = await prisma.docente.delete({
     *   where: {
     *     // ... filter to delete one Docente
     *   }
     * })
     * 
    **/
    delete<T extends DocenteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DocenteDeleteArgs<ExtArgs>>
    ): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Docente.
     * @param {DocenteUpdateArgs} args - Arguments to update one Docente.
     * @example
     * // Update one Docente
     * const docente = await prisma.docente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DocenteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DocenteUpdateArgs<ExtArgs>>
    ): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Docentes.
     * @param {DocenteDeleteManyArgs} args - Arguments to filter Docentes to delete.
     * @example
     * // Delete a few Docentes
     * const { count } = await prisma.docente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DocenteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DocenteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Docentes
     * const docente = await prisma.docente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DocenteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DocenteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Docente.
     * @param {DocenteUpsertArgs} args - Arguments to update or create a Docente.
     * @example
     * // Update or create a Docente
     * const docente = await prisma.docente.upsert({
     *   create: {
     *     // ... data to create a Docente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Docente we want to update
     *   }
     * })
    **/
    upsert<T extends DocenteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DocenteUpsertArgs<ExtArgs>>
    ): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Docentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCountArgs} args - Arguments to filter Docentes to count.
     * @example
     * // Count the number of Docentes
     * const count = await prisma.docente.count({
     *   where: {
     *     // ... the filter for the Docentes we want to count
     *   }
     * })
    **/
    count<T extends DocenteCountArgs>(
      args?: Subset<T, DocenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Docente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocenteAggregateArgs>(args: Subset<T, DocenteAggregateArgs>): Prisma.PrismaPromise<GetDocenteAggregateType<T>>

    /**
     * Group by Docente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocenteGroupByArgs['orderBy'] }
        : { orderBy?: DocenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Docente model
   */
  readonly fields: DocenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Docente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    clases<T extends Docente$clasesArgs<ExtArgs> = {}>(args?: Subset<T, Docente$clasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Docente model
   */ 
  interface DocenteFieldRefs {
    readonly id: FieldRef<"Docente", 'Int'>
    readonly nombre: FieldRef<"Docente", 'String'>
    readonly aPaterno: FieldRef<"Docente", 'String'>
    readonly aMaterno: FieldRef<"Docente", 'String'>
    readonly estado: FieldRef<"Docente", 'String'>
    readonly telefono: FieldRef<"Docente", 'String'>
    readonly curp: FieldRef<"Docente", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Docente findUnique
   */
  export type DocenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where: DocenteWhereUniqueInput
  }


  /**
   * Docente findUniqueOrThrow
   */
  export type DocenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where: DocenteWhereUniqueInput
  }


  /**
   * Docente findFirst
   */
  export type DocenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docentes.
     */
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }


  /**
   * Docente findFirstOrThrow
   */
  export type DocenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docentes.
     */
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }


  /**
   * Docente findMany
   */
  export type DocenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docentes to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }


  /**
   * Docente create
   */
  export type DocenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Docente.
     */
    data: XOR<DocenteCreateInput, DocenteUncheckedCreateInput>
  }


  /**
   * Docente update
   */
  export type DocenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Docente.
     */
    data: XOR<DocenteUpdateInput, DocenteUncheckedUpdateInput>
    /**
     * Choose, which Docente to update.
     */
    where: DocenteWhereUniqueInput
  }


  /**
   * Docente updateMany
   */
  export type DocenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Docentes.
     */
    data: XOR<DocenteUpdateManyMutationInput, DocenteUncheckedUpdateManyInput>
    /**
     * Filter which Docentes to update
     */
    where?: DocenteWhereInput
  }


  /**
   * Docente upsert
   */
  export type DocenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Docente to update in case it exists.
     */
    where: DocenteWhereUniqueInput
    /**
     * In case the Docente found by the `where` argument doesn't exist, create a new Docente with this data.
     */
    create: XOR<DocenteCreateInput, DocenteUncheckedCreateInput>
    /**
     * In case the Docente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocenteUpdateInput, DocenteUncheckedUpdateInput>
  }


  /**
   * Docente delete
   */
  export type DocenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter which Docente to delete.
     */
    where: DocenteWhereUniqueInput
  }


  /**
   * Docente deleteMany
   */
  export type DocenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docentes to delete
     */
    where?: DocenteWhereInput
  }


  /**
   * Docente.clases
   */
  export type Docente$clasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaseInclude<ExtArgs> | null
    where?: ClaseWhereInput
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    cursor?: ClaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }


  /**
   * Docente without action
   */
  export type DocenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocenteInclude<ExtArgs> | null
  }



  /**
   * Model Sucursal
   */

  export type AggregateSucursal = {
    _count: SucursalCountAggregateOutputType | null
    _avg: SucursalAvgAggregateOutputType | null
    _sum: SucursalSumAggregateOutputType | null
    _min: SucursalMinAggregateOutputType | null
    _max: SucursalMaxAggregateOutputType | null
  }

  export type SucursalAvgAggregateOutputType = {
    id: number | null
  }

  export type SucursalSumAggregateOutputType = {
    id: number | null
  }

  export type SucursalMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
  }

  export type SucursalMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
  }

  export type SucursalCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    _all: number
  }


  export type SucursalAvgAggregateInputType = {
    id?: true
  }

  export type SucursalSumAggregateInputType = {
    id?: true
  }

  export type SucursalMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
  }

  export type SucursalMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
  }

  export type SucursalCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    _all?: true
  }

  export type SucursalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sucursal to aggregate.
     */
    where?: SucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sucursals to fetch.
     */
    orderBy?: SucursalOrderByWithRelationInput | SucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sucursals
    **/
    _count?: true | SucursalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SucursalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SucursalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SucursalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SucursalMaxAggregateInputType
  }

  export type GetSucursalAggregateType<T extends SucursalAggregateArgs> = {
        [P in keyof T & keyof AggregateSucursal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSucursal[P]>
      : GetScalarType<T[P], AggregateSucursal[P]>
  }




  export type SucursalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SucursalWhereInput
    orderBy?: SucursalOrderByWithAggregationInput | SucursalOrderByWithAggregationInput[]
    by: SucursalScalarFieldEnum[] | SucursalScalarFieldEnum
    having?: SucursalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SucursalCountAggregateInputType | true
    _avg?: SucursalAvgAggregateInputType
    _sum?: SucursalSumAggregateInputType
    _min?: SucursalMinAggregateInputType
    _max?: SucursalMaxAggregateInputType
  }

  export type SucursalGroupByOutputType = {
    id: number
    nombre: string
    direccion: string
    _count: SucursalCountAggregateOutputType | null
    _avg: SucursalAvgAggregateOutputType | null
    _sum: SucursalSumAggregateOutputType | null
    _min: SucursalMinAggregateOutputType | null
    _max: SucursalMaxAggregateOutputType | null
  }

  type GetSucursalGroupByPayload<T extends SucursalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SucursalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SucursalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SucursalGroupByOutputType[P]>
            : GetScalarType<T[P], SucursalGroupByOutputType[P]>
        }
      >
    >


  export type SucursalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    clases?: boolean | Sucursal$clasesArgs<ExtArgs>
    gastos?: boolean | Sucursal$gastosArgs<ExtArgs>
    _count?: boolean | SucursalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sucursal"]>

  export type SucursalSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
  }

  export type SucursalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clases?: boolean | Sucursal$clasesArgs<ExtArgs>
    gastos?: boolean | Sucursal$gastosArgs<ExtArgs>
    _count?: boolean | SucursalCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SucursalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sucursal"
    objects: {
      clases: Prisma.$ClasePayload<ExtArgs>[]
      gastos: Prisma.$GastoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      direccion: string
    }, ExtArgs["result"]["sucursal"]>
    composites: {}
  }


  type SucursalGetPayload<S extends boolean | null | undefined | SucursalDefaultArgs> = $Result.GetResult<Prisma.$SucursalPayload, S>

  type SucursalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SucursalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SucursalCountAggregateInputType | true
    }

  export interface SucursalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sucursal'], meta: { name: 'Sucursal' } }
    /**
     * Find zero or one Sucursal that matches the filter.
     * @param {SucursalFindUniqueArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SucursalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SucursalFindUniqueArgs<ExtArgs>>
    ): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sucursal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SucursalFindUniqueOrThrowArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SucursalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SucursalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sucursal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalFindFirstArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SucursalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SucursalFindFirstArgs<ExtArgs>>
    ): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sucursal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalFindFirstOrThrowArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SucursalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SucursalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sucursals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sucursals
     * const sucursals = await prisma.sucursal.findMany()
     * 
     * // Get first 10 Sucursals
     * const sucursals = await prisma.sucursal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sucursalWithIdOnly = await prisma.sucursal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SucursalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SucursalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sucursal.
     * @param {SucursalCreateArgs} args - Arguments to create a Sucursal.
     * @example
     * // Create one Sucursal
     * const Sucursal = await prisma.sucursal.create({
     *   data: {
     *     // ... data to create a Sucursal
     *   }
     * })
     * 
    **/
    create<T extends SucursalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SucursalCreateArgs<ExtArgs>>
    ): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Sucursal.
     * @param {SucursalDeleteArgs} args - Arguments to delete one Sucursal.
     * @example
     * // Delete one Sucursal
     * const Sucursal = await prisma.sucursal.delete({
     *   where: {
     *     // ... filter to delete one Sucursal
     *   }
     * })
     * 
    **/
    delete<T extends SucursalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SucursalDeleteArgs<ExtArgs>>
    ): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sucursal.
     * @param {SucursalUpdateArgs} args - Arguments to update one Sucursal.
     * @example
     * // Update one Sucursal
     * const sucursal = await prisma.sucursal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SucursalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SucursalUpdateArgs<ExtArgs>>
    ): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sucursals.
     * @param {SucursalDeleteManyArgs} args - Arguments to filter Sucursals to delete.
     * @example
     * // Delete a few Sucursals
     * const { count } = await prisma.sucursal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SucursalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SucursalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sucursals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sucursals
     * const sucursal = await prisma.sucursal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SucursalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SucursalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sucursal.
     * @param {SucursalUpsertArgs} args - Arguments to update or create a Sucursal.
     * @example
     * // Update or create a Sucursal
     * const sucursal = await prisma.sucursal.upsert({
     *   create: {
     *     // ... data to create a Sucursal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sucursal we want to update
     *   }
     * })
    **/
    upsert<T extends SucursalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SucursalUpsertArgs<ExtArgs>>
    ): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sucursals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalCountArgs} args - Arguments to filter Sucursals to count.
     * @example
     * // Count the number of Sucursals
     * const count = await prisma.sucursal.count({
     *   where: {
     *     // ... the filter for the Sucursals we want to count
     *   }
     * })
    **/
    count<T extends SucursalCountArgs>(
      args?: Subset<T, SucursalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SucursalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sucursal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SucursalAggregateArgs>(args: Subset<T, SucursalAggregateArgs>): Prisma.PrismaPromise<GetSucursalAggregateType<T>>

    /**
     * Group by Sucursal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SucursalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SucursalGroupByArgs['orderBy'] }
        : { orderBy?: SucursalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SucursalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSucursalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sucursal model
   */
  readonly fields: SucursalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sucursal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SucursalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    clases<T extends Sucursal$clasesArgs<ExtArgs> = {}>(args?: Subset<T, Sucursal$clasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, 'findMany'> | Null>;

    gastos<T extends Sucursal$gastosArgs<ExtArgs> = {}>(args?: Subset<T, Sucursal$gastosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Sucursal model
   */ 
  interface SucursalFieldRefs {
    readonly id: FieldRef<"Sucursal", 'Int'>
    readonly nombre: FieldRef<"Sucursal", 'String'>
    readonly direccion: FieldRef<"Sucursal", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Sucursal findUnique
   */
  export type SucursalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursal to fetch.
     */
    where: SucursalWhereUniqueInput
  }


  /**
   * Sucursal findUniqueOrThrow
   */
  export type SucursalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursal to fetch.
     */
    where: SucursalWhereUniqueInput
  }


  /**
   * Sucursal findFirst
   */
  export type SucursalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursal to fetch.
     */
    where?: SucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sucursals to fetch.
     */
    orderBy?: SucursalOrderByWithRelationInput | SucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sucursals.
     */
    cursor?: SucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sucursals.
     */
    distinct?: SucursalScalarFieldEnum | SucursalScalarFieldEnum[]
  }


  /**
   * Sucursal findFirstOrThrow
   */
  export type SucursalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursal to fetch.
     */
    where?: SucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sucursals to fetch.
     */
    orderBy?: SucursalOrderByWithRelationInput | SucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sucursals.
     */
    cursor?: SucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sucursals.
     */
    distinct?: SucursalScalarFieldEnum | SucursalScalarFieldEnum[]
  }


  /**
   * Sucursal findMany
   */
  export type SucursalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursals to fetch.
     */
    where?: SucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sucursals to fetch.
     */
    orderBy?: SucursalOrderByWithRelationInput | SucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sucursals.
     */
    cursor?: SucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sucursals.
     */
    skip?: number
    distinct?: SucursalScalarFieldEnum | SucursalScalarFieldEnum[]
  }


  /**
   * Sucursal create
   */
  export type SucursalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * The data needed to create a Sucursal.
     */
    data: XOR<SucursalCreateInput, SucursalUncheckedCreateInput>
  }


  /**
   * Sucursal update
   */
  export type SucursalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * The data needed to update a Sucursal.
     */
    data: XOR<SucursalUpdateInput, SucursalUncheckedUpdateInput>
    /**
     * Choose, which Sucursal to update.
     */
    where: SucursalWhereUniqueInput
  }


  /**
   * Sucursal updateMany
   */
  export type SucursalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sucursals.
     */
    data: XOR<SucursalUpdateManyMutationInput, SucursalUncheckedUpdateManyInput>
    /**
     * Filter which Sucursals to update
     */
    where?: SucursalWhereInput
  }


  /**
   * Sucursal upsert
   */
  export type SucursalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * The filter to search for the Sucursal to update in case it exists.
     */
    where: SucursalWhereUniqueInput
    /**
     * In case the Sucursal found by the `where` argument doesn't exist, create a new Sucursal with this data.
     */
    create: XOR<SucursalCreateInput, SucursalUncheckedCreateInput>
    /**
     * In case the Sucursal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SucursalUpdateInput, SucursalUncheckedUpdateInput>
  }


  /**
   * Sucursal delete
   */
  export type SucursalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter which Sucursal to delete.
     */
    where: SucursalWhereUniqueInput
  }


  /**
   * Sucursal deleteMany
   */
  export type SucursalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sucursals to delete
     */
    where?: SucursalWhereInput
  }


  /**
   * Sucursal.clases
   */
  export type Sucursal$clasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaseInclude<ExtArgs> | null
    where?: ClaseWhereInput
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    cursor?: ClaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }


  /**
   * Sucursal.gastos
   */
  export type Sucursal$gastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GastoInclude<ExtArgs> | null
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    cursor?: GastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }


  /**
   * Sucursal without action
   */
  export type SucursalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SucursalInclude<ExtArgs> | null
  }



  /**
   * Model Clase
   */

  export type AggregateClase = {
    _count: ClaseCountAggregateOutputType | null
    _avg: ClaseAvgAggregateOutputType | null
    _sum: ClaseSumAggregateOutputType | null
    _min: ClaseMinAggregateOutputType | null
    _max: ClaseMaxAggregateOutputType | null
  }

  export type ClaseAvgAggregateOutputType = {
    id: number | null
    idSucursal: number | null
    idDocente: number | null
    cupoMax: number | null
  }

  export type ClaseSumAggregateOutputType = {
    id: number | null
    idSucursal: number | null
    idDocente: number | null
    cupoMax: number | null
  }

  export type ClaseMinAggregateOutputType = {
    id: number | null
    idSucursal: number | null
    idDocente: number | null
    nombre: string | null
    cupoMax: number | null
    dias: string | null
    hora: string | null
  }

  export type ClaseMaxAggregateOutputType = {
    id: number | null
    idSucursal: number | null
    idDocente: number | null
    nombre: string | null
    cupoMax: number | null
    dias: string | null
    hora: string | null
  }

  export type ClaseCountAggregateOutputType = {
    id: number
    idSucursal: number
    idDocente: number
    nombre: number
    cupoMax: number
    dias: number
    hora: number
    _all: number
  }


  export type ClaseAvgAggregateInputType = {
    id?: true
    idSucursal?: true
    idDocente?: true
    cupoMax?: true
  }

  export type ClaseSumAggregateInputType = {
    id?: true
    idSucursal?: true
    idDocente?: true
    cupoMax?: true
  }

  export type ClaseMinAggregateInputType = {
    id?: true
    idSucursal?: true
    idDocente?: true
    nombre?: true
    cupoMax?: true
    dias?: true
    hora?: true
  }

  export type ClaseMaxAggregateInputType = {
    id?: true
    idSucursal?: true
    idDocente?: true
    nombre?: true
    cupoMax?: true
    dias?: true
    hora?: true
  }

  export type ClaseCountAggregateInputType = {
    id?: true
    idSucursal?: true
    idDocente?: true
    nombre?: true
    cupoMax?: true
    dias?: true
    hora?: true
    _all?: true
  }

  export type ClaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clase to aggregate.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clases
    **/
    _count?: true | ClaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaseMaxAggregateInputType
  }

  export type GetClaseAggregateType<T extends ClaseAggregateArgs> = {
        [P in keyof T & keyof AggregateClase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClase[P]>
      : GetScalarType<T[P], AggregateClase[P]>
  }




  export type ClaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaseWhereInput
    orderBy?: ClaseOrderByWithAggregationInput | ClaseOrderByWithAggregationInput[]
    by: ClaseScalarFieldEnum[] | ClaseScalarFieldEnum
    having?: ClaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaseCountAggregateInputType | true
    _avg?: ClaseAvgAggregateInputType
    _sum?: ClaseSumAggregateInputType
    _min?: ClaseMinAggregateInputType
    _max?: ClaseMaxAggregateInputType
  }

  export type ClaseGroupByOutputType = {
    id: number
    idSucursal: number
    idDocente: number | null
    nombre: string
    cupoMax: number
    dias: string
    hora: string
    _count: ClaseCountAggregateOutputType | null
    _avg: ClaseAvgAggregateOutputType | null
    _sum: ClaseSumAggregateOutputType | null
    _min: ClaseMinAggregateOutputType | null
    _max: ClaseMaxAggregateOutputType | null
  }

  type GetClaseGroupByPayload<T extends ClaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaseGroupByOutputType[P]>
            : GetScalarType<T[P], ClaseGroupByOutputType[P]>
        }
      >
    >


  export type ClaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idSucursal?: boolean
    idDocente?: boolean
    nombre?: boolean
    cupoMax?: boolean
    dias?: boolean
    hora?: boolean
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    docente?: boolean | Clase$docenteArgs<ExtArgs>
    alumnos?: boolean | Clase$alumnosArgs<ExtArgs>
    _count?: boolean | ClaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clase"]>

  export type ClaseSelectScalar = {
    id?: boolean
    idSucursal?: boolean
    idDocente?: boolean
    nombre?: boolean
    cupoMax?: boolean
    dias?: boolean
    hora?: boolean
  }

  export type ClaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    docente?: boolean | Clase$docenteArgs<ExtArgs>
    alumnos?: boolean | Clase$alumnosArgs<ExtArgs>
    _count?: boolean | ClaseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clase"
    objects: {
      sucursal: Prisma.$SucursalPayload<ExtArgs>
      docente: Prisma.$DocentePayload<ExtArgs> | null
      alumnos: Prisma.$AlumnoClasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idSucursal: number
      idDocente: number | null
      nombre: string
      cupoMax: number
      dias: string
      hora: string
    }, ExtArgs["result"]["clase"]>
    composites: {}
  }


  type ClaseGetPayload<S extends boolean | null | undefined | ClaseDefaultArgs> = $Result.GetResult<Prisma.$ClasePayload, S>

  type ClaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClaseCountAggregateInputType | true
    }

  export interface ClaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clase'], meta: { name: 'Clase' } }
    /**
     * Find zero or one Clase that matches the filter.
     * @param {ClaseFindUniqueArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClaseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClaseFindUniqueArgs<ExtArgs>>
    ): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Clase that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClaseFindUniqueOrThrowArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClaseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Clase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseFindFirstArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClaseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaseFindFirstArgs<ExtArgs>>
    ): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Clase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseFindFirstOrThrowArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClaseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clases
     * const clases = await prisma.clase.findMany()
     * 
     * // Get first 10 Clases
     * const clases = await prisma.clase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claseWithIdOnly = await prisma.clase.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClaseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Clase.
     * @param {ClaseCreateArgs} args - Arguments to create a Clase.
     * @example
     * // Create one Clase
     * const Clase = await prisma.clase.create({
     *   data: {
     *     // ... data to create a Clase
     *   }
     * })
     * 
    **/
    create<T extends ClaseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClaseCreateArgs<ExtArgs>>
    ): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Clase.
     * @param {ClaseDeleteArgs} args - Arguments to delete one Clase.
     * @example
     * // Delete one Clase
     * const Clase = await prisma.clase.delete({
     *   where: {
     *     // ... filter to delete one Clase
     *   }
     * })
     * 
    **/
    delete<T extends ClaseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClaseDeleteArgs<ExtArgs>>
    ): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Clase.
     * @param {ClaseUpdateArgs} args - Arguments to update one Clase.
     * @example
     * // Update one Clase
     * const clase = await prisma.clase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClaseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClaseUpdateArgs<ExtArgs>>
    ): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clases.
     * @param {ClaseDeleteManyArgs} args - Arguments to filter Clases to delete.
     * @example
     * // Delete a few Clases
     * const { count } = await prisma.clase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClaseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clases
     * const clase = await prisma.clase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClaseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClaseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clase.
     * @param {ClaseUpsertArgs} args - Arguments to update or create a Clase.
     * @example
     * // Update or create a Clase
     * const clase = await prisma.clase.upsert({
     *   create: {
     *     // ... data to create a Clase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clase we want to update
     *   }
     * })
    **/
    upsert<T extends ClaseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClaseUpsertArgs<ExtArgs>>
    ): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseCountArgs} args - Arguments to filter Clases to count.
     * @example
     * // Count the number of Clases
     * const count = await prisma.clase.count({
     *   where: {
     *     // ... the filter for the Clases we want to count
     *   }
     * })
    **/
    count<T extends ClaseCountArgs>(
      args?: Subset<T, ClaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClaseAggregateArgs>(args: Subset<T, ClaseAggregateArgs>): Prisma.PrismaPromise<GetClaseAggregateType<T>>

    /**
     * Group by Clase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaseGroupByArgs['orderBy'] }
        : { orderBy?: ClaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clase model
   */
  readonly fields: ClaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sucursal<T extends SucursalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SucursalDefaultArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    docente<T extends Clase$docenteArgs<ExtArgs> = {}>(args?: Subset<T, Clase$docenteArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    alumnos<T extends Clase$alumnosArgs<ExtArgs> = {}>(args?: Subset<T, Clase$alumnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoClasePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Clase model
   */ 
  interface ClaseFieldRefs {
    readonly id: FieldRef<"Clase", 'Int'>
    readonly idSucursal: FieldRef<"Clase", 'Int'>
    readonly idDocente: FieldRef<"Clase", 'Int'>
    readonly nombre: FieldRef<"Clase", 'String'>
    readonly cupoMax: FieldRef<"Clase", 'Int'>
    readonly dias: FieldRef<"Clase", 'String'>
    readonly hora: FieldRef<"Clase", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Clase findUnique
   */
  export type ClaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where: ClaseWhereUniqueInput
  }


  /**
   * Clase findUniqueOrThrow
   */
  export type ClaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where: ClaseWhereUniqueInput
  }


  /**
   * Clase findFirst
   */
  export type ClaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clases.
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clases.
     */
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }


  /**
   * Clase findFirstOrThrow
   */
  export type ClaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clases.
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clases.
     */
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }


  /**
   * Clase findMany
   */
  export type ClaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clases.
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }


  /**
   * Clase create
   */
  export type ClaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Clase.
     */
    data: XOR<ClaseCreateInput, ClaseUncheckedCreateInput>
  }


  /**
   * Clase update
   */
  export type ClaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Clase.
     */
    data: XOR<ClaseUpdateInput, ClaseUncheckedUpdateInput>
    /**
     * Choose, which Clase to update.
     */
    where: ClaseWhereUniqueInput
  }


  /**
   * Clase updateMany
   */
  export type ClaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clases.
     */
    data: XOR<ClaseUpdateManyMutationInput, ClaseUncheckedUpdateManyInput>
    /**
     * Filter which Clases to update
     */
    where?: ClaseWhereInput
  }


  /**
   * Clase upsert
   */
  export type ClaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Clase to update in case it exists.
     */
    where: ClaseWhereUniqueInput
    /**
     * In case the Clase found by the `where` argument doesn't exist, create a new Clase with this data.
     */
    create: XOR<ClaseCreateInput, ClaseUncheckedCreateInput>
    /**
     * In case the Clase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaseUpdateInput, ClaseUncheckedUpdateInput>
  }


  /**
   * Clase delete
   */
  export type ClaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter which Clase to delete.
     */
    where: ClaseWhereUniqueInput
  }


  /**
   * Clase deleteMany
   */
  export type ClaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clases to delete
     */
    where?: ClaseWhereInput
  }


  /**
   * Clase.docente
   */
  export type Clase$docenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocenteInclude<ExtArgs> | null
    where?: DocenteWhereInput
  }


  /**
   * Clase.alumnos
   */
  export type Clase$alumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoClase
     */
    select?: AlumnoClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoClaseInclude<ExtArgs> | null
    where?: AlumnoClaseWhereInput
    orderBy?: AlumnoClaseOrderByWithRelationInput | AlumnoClaseOrderByWithRelationInput[]
    cursor?: AlumnoClaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlumnoClaseScalarFieldEnum | AlumnoClaseScalarFieldEnum[]
  }


  /**
   * Clase without action
   */
  export type ClaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaseInclude<ExtArgs> | null
  }



  /**
   * Model Alumno
   */

  export type AggregateAlumno = {
    _count: AlumnoCountAggregateOutputType | null
    _avg: AlumnoAvgAggregateOutputType | null
    _sum: AlumnoSumAggregateOutputType | null
    _min: AlumnoMinAggregateOutputType | null
    _max: AlumnoMaxAggregateOutputType | null
  }

  export type AlumnoAvgAggregateOutputType = {
    id: number | null
    edad: number | null
  }

  export type AlumnoSumAggregateOutputType = {
    id: number | null
    edad: number | null
  }

  export type AlumnoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    aPaterno: string | null
    aMaterno: string | null
    tutor: string | null
    contacto: string | null
    edad: number | null
    activo: boolean | null
  }

  export type AlumnoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    aPaterno: string | null
    aMaterno: string | null
    tutor: string | null
    contacto: string | null
    edad: number | null
    activo: boolean | null
  }

  export type AlumnoCountAggregateOutputType = {
    id: number
    nombre: number
    aPaterno: number
    aMaterno: number
    tutor: number
    contacto: number
    edad: number
    activo: number
    _all: number
  }


  export type AlumnoAvgAggregateInputType = {
    id?: true
    edad?: true
  }

  export type AlumnoSumAggregateInputType = {
    id?: true
    edad?: true
  }

  export type AlumnoMinAggregateInputType = {
    id?: true
    nombre?: true
    aPaterno?: true
    aMaterno?: true
    tutor?: true
    contacto?: true
    edad?: true
    activo?: true
  }

  export type AlumnoMaxAggregateInputType = {
    id?: true
    nombre?: true
    aPaterno?: true
    aMaterno?: true
    tutor?: true
    contacto?: true
    edad?: true
    activo?: true
  }

  export type AlumnoCountAggregateInputType = {
    id?: true
    nombre?: true
    aPaterno?: true
    aMaterno?: true
    tutor?: true
    contacto?: true
    edad?: true
    activo?: true
    _all?: true
  }

  export type AlumnoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alumno to aggregate.
     */
    where?: AlumnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlumnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alumnos
    **/
    _count?: true | AlumnoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlumnoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlumnoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlumnoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlumnoMaxAggregateInputType
  }

  export type GetAlumnoAggregateType<T extends AlumnoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumno[P]>
      : GetScalarType<T[P], AggregateAlumno[P]>
  }




  export type AlumnoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoWhereInput
    orderBy?: AlumnoOrderByWithAggregationInput | AlumnoOrderByWithAggregationInput[]
    by: AlumnoScalarFieldEnum[] | AlumnoScalarFieldEnum
    having?: AlumnoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlumnoCountAggregateInputType | true
    _avg?: AlumnoAvgAggregateInputType
    _sum?: AlumnoSumAggregateInputType
    _min?: AlumnoMinAggregateInputType
    _max?: AlumnoMaxAggregateInputType
  }

  export type AlumnoGroupByOutputType = {
    id: number
    nombre: string
    aPaterno: string
    aMaterno: string
    tutor: string
    contacto: string
    edad: number
    activo: boolean
    _count: AlumnoCountAggregateOutputType | null
    _avg: AlumnoAvgAggregateOutputType | null
    _sum: AlumnoSumAggregateOutputType | null
    _min: AlumnoMinAggregateOutputType | null
    _max: AlumnoMaxAggregateOutputType | null
  }

  type GetAlumnoGroupByPayload<T extends AlumnoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlumnoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlumnoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlumnoGroupByOutputType[P]>
            : GetScalarType<T[P], AlumnoGroupByOutputType[P]>
        }
      >
    >


  export type AlumnoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    aPaterno?: boolean
    aMaterno?: boolean
    tutor?: boolean
    contacto?: boolean
    edad?: boolean
    activo?: boolean
    clases?: boolean | Alumno$clasesArgs<ExtArgs>
    pagos?: boolean | Alumno$pagosArgs<ExtArgs>
    _count?: boolean | AlumnoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumno"]>

  export type AlumnoSelectScalar = {
    id?: boolean
    nombre?: boolean
    aPaterno?: boolean
    aMaterno?: boolean
    tutor?: boolean
    contacto?: boolean
    edad?: boolean
    activo?: boolean
  }

  export type AlumnoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clases?: boolean | Alumno$clasesArgs<ExtArgs>
    pagos?: boolean | Alumno$pagosArgs<ExtArgs>
    _count?: boolean | AlumnoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AlumnoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alumno"
    objects: {
      clases: Prisma.$AlumnoClasePayload<ExtArgs>[]
      pagos: Prisma.$PagosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      aPaterno: string
      aMaterno: string
      tutor: string
      contacto: string
      edad: number
      activo: boolean
    }, ExtArgs["result"]["alumno"]>
    composites: {}
  }


  type AlumnoGetPayload<S extends boolean | null | undefined | AlumnoDefaultArgs> = $Result.GetResult<Prisma.$AlumnoPayload, S>

  type AlumnoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlumnoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlumnoCountAggregateInputType | true
    }

  export interface AlumnoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alumno'], meta: { name: 'Alumno' } }
    /**
     * Find zero or one Alumno that matches the filter.
     * @param {AlumnoFindUniqueArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlumnoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnoFindUniqueArgs<ExtArgs>>
    ): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Alumno that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlumnoFindUniqueOrThrowArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlumnoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Alumno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoFindFirstArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlumnoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnoFindFirstArgs<ExtArgs>>
    ): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Alumno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoFindFirstOrThrowArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlumnoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Alumnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumnos
     * const alumnos = await prisma.alumno.findMany()
     * 
     * // Get first 10 Alumnos
     * const alumnos = await prisma.alumno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alumnoWithIdOnly = await prisma.alumno.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlumnoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Alumno.
     * @param {AlumnoCreateArgs} args - Arguments to create a Alumno.
     * @example
     * // Create one Alumno
     * const Alumno = await prisma.alumno.create({
     *   data: {
     *     // ... data to create a Alumno
     *   }
     * })
     * 
    **/
    create<T extends AlumnoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnoCreateArgs<ExtArgs>>
    ): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Alumno.
     * @param {AlumnoDeleteArgs} args - Arguments to delete one Alumno.
     * @example
     * // Delete one Alumno
     * const Alumno = await prisma.alumno.delete({
     *   where: {
     *     // ... filter to delete one Alumno
     *   }
     * })
     * 
    **/
    delete<T extends AlumnoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnoDeleteArgs<ExtArgs>>
    ): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Alumno.
     * @param {AlumnoUpdateArgs} args - Arguments to update one Alumno.
     * @example
     * // Update one Alumno
     * const alumno = await prisma.alumno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlumnoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnoUpdateArgs<ExtArgs>>
    ): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Alumnos.
     * @param {AlumnoDeleteManyArgs} args - Arguments to filter Alumnos to delete.
     * @example
     * // Delete a few Alumnos
     * const { count } = await prisma.alumno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlumnoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumnos
     * const alumno = await prisma.alumno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlumnoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alumno.
     * @param {AlumnoUpsertArgs} args - Arguments to update or create a Alumno.
     * @example
     * // Update or create a Alumno
     * const alumno = await prisma.alumno.upsert({
     *   create: {
     *     // ... data to create a Alumno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumno we want to update
     *   }
     * })
    **/
    upsert<T extends AlumnoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnoUpsertArgs<ExtArgs>>
    ): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoCountArgs} args - Arguments to filter Alumnos to count.
     * @example
     * // Count the number of Alumnos
     * const count = await prisma.alumno.count({
     *   where: {
     *     // ... the filter for the Alumnos we want to count
     *   }
     * })
    **/
    count<T extends AlumnoCountArgs>(
      args?: Subset<T, AlumnoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlumnoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alumno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlumnoAggregateArgs>(args: Subset<T, AlumnoAggregateArgs>): Prisma.PrismaPromise<GetAlumnoAggregateType<T>>

    /**
     * Group by Alumno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlumnoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlumnoGroupByArgs['orderBy'] }
        : { orderBy?: AlumnoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlumnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alumno model
   */
  readonly fields: AlumnoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alumno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlumnoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    clases<T extends Alumno$clasesArgs<ExtArgs> = {}>(args?: Subset<T, Alumno$clasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoClasePayload<ExtArgs>, T, 'findMany'> | Null>;

    pagos<T extends Alumno$pagosArgs<ExtArgs> = {}>(args?: Subset<T, Alumno$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Alumno model
   */ 
  interface AlumnoFieldRefs {
    readonly id: FieldRef<"Alumno", 'Int'>
    readonly nombre: FieldRef<"Alumno", 'String'>
    readonly aPaterno: FieldRef<"Alumno", 'String'>
    readonly aMaterno: FieldRef<"Alumno", 'String'>
    readonly tutor: FieldRef<"Alumno", 'String'>
    readonly contacto: FieldRef<"Alumno", 'String'>
    readonly edad: FieldRef<"Alumno", 'Int'>
    readonly activo: FieldRef<"Alumno", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Alumno findUnique
   */
  export type AlumnoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumno to fetch.
     */
    where: AlumnoWhereUniqueInput
  }


  /**
   * Alumno findUniqueOrThrow
   */
  export type AlumnoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumno to fetch.
     */
    where: AlumnoWhereUniqueInput
  }


  /**
   * Alumno findFirst
   */
  export type AlumnoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumno to fetch.
     */
    where?: AlumnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alumnos.
     */
    cursor?: AlumnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alumnos.
     */
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }


  /**
   * Alumno findFirstOrThrow
   */
  export type AlumnoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumno to fetch.
     */
    where?: AlumnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alumnos.
     */
    cursor?: AlumnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alumnos.
     */
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }


  /**
   * Alumno findMany
   */
  export type AlumnoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where?: AlumnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alumnos.
     */
    cursor?: AlumnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }


  /**
   * Alumno create
   */
  export type AlumnoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * The data needed to create a Alumno.
     */
    data: XOR<AlumnoCreateInput, AlumnoUncheckedCreateInput>
  }


  /**
   * Alumno update
   */
  export type AlumnoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * The data needed to update a Alumno.
     */
    data: XOR<AlumnoUpdateInput, AlumnoUncheckedUpdateInput>
    /**
     * Choose, which Alumno to update.
     */
    where: AlumnoWhereUniqueInput
  }


  /**
   * Alumno updateMany
   */
  export type AlumnoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alumnos.
     */
    data: XOR<AlumnoUpdateManyMutationInput, AlumnoUncheckedUpdateManyInput>
    /**
     * Filter which Alumnos to update
     */
    where?: AlumnoWhereInput
  }


  /**
   * Alumno upsert
   */
  export type AlumnoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * The filter to search for the Alumno to update in case it exists.
     */
    where: AlumnoWhereUniqueInput
    /**
     * In case the Alumno found by the `where` argument doesn't exist, create a new Alumno with this data.
     */
    create: XOR<AlumnoCreateInput, AlumnoUncheckedCreateInput>
    /**
     * In case the Alumno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlumnoUpdateInput, AlumnoUncheckedUpdateInput>
  }


  /**
   * Alumno delete
   */
  export type AlumnoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter which Alumno to delete.
     */
    where: AlumnoWhereUniqueInput
  }


  /**
   * Alumno deleteMany
   */
  export type AlumnoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alumnos to delete
     */
    where?: AlumnoWhereInput
  }


  /**
   * Alumno.clases
   */
  export type Alumno$clasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoClase
     */
    select?: AlumnoClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoClaseInclude<ExtArgs> | null
    where?: AlumnoClaseWhereInput
    orderBy?: AlumnoClaseOrderByWithRelationInput | AlumnoClaseOrderByWithRelationInput[]
    cursor?: AlumnoClaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlumnoClaseScalarFieldEnum | AlumnoClaseScalarFieldEnum[]
  }


  /**
   * Alumno.pagos
   */
  export type Alumno$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagosInclude<ExtArgs> | null
    where?: PagosWhereInput
    orderBy?: PagosOrderByWithRelationInput | PagosOrderByWithRelationInput[]
    cursor?: PagosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }


  /**
   * Alumno without action
   */
  export type AlumnoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoInclude<ExtArgs> | null
  }



  /**
   * Model AlumnoClase
   */

  export type AggregateAlumnoClase = {
    _count: AlumnoClaseCountAggregateOutputType | null
    _avg: AlumnoClaseAvgAggregateOutputType | null
    _sum: AlumnoClaseSumAggregateOutputType | null
    _min: AlumnoClaseMinAggregateOutputType | null
    _max: AlumnoClaseMaxAggregateOutputType | null
  }

  export type AlumnoClaseAvgAggregateOutputType = {
    id: number | null
    alumnoId: number | null
    claseId: number | null
  }

  export type AlumnoClaseSumAggregateOutputType = {
    id: number | null
    alumnoId: number | null
    claseId: number | null
  }

  export type AlumnoClaseMinAggregateOutputType = {
    id: number | null
    alumnoId: number | null
    claseId: number | null
  }

  export type AlumnoClaseMaxAggregateOutputType = {
    id: number | null
    alumnoId: number | null
    claseId: number | null
  }

  export type AlumnoClaseCountAggregateOutputType = {
    id: number
    alumnoId: number
    claseId: number
    _all: number
  }


  export type AlumnoClaseAvgAggregateInputType = {
    id?: true
    alumnoId?: true
    claseId?: true
  }

  export type AlumnoClaseSumAggregateInputType = {
    id?: true
    alumnoId?: true
    claseId?: true
  }

  export type AlumnoClaseMinAggregateInputType = {
    id?: true
    alumnoId?: true
    claseId?: true
  }

  export type AlumnoClaseMaxAggregateInputType = {
    id?: true
    alumnoId?: true
    claseId?: true
  }

  export type AlumnoClaseCountAggregateInputType = {
    id?: true
    alumnoId?: true
    claseId?: true
    _all?: true
  }

  export type AlumnoClaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlumnoClase to aggregate.
     */
    where?: AlumnoClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumnoClases to fetch.
     */
    orderBy?: AlumnoClaseOrderByWithRelationInput | AlumnoClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlumnoClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumnoClases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumnoClases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlumnoClases
    **/
    _count?: true | AlumnoClaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlumnoClaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlumnoClaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlumnoClaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlumnoClaseMaxAggregateInputType
  }

  export type GetAlumnoClaseAggregateType<T extends AlumnoClaseAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumnoClase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumnoClase[P]>
      : GetScalarType<T[P], AggregateAlumnoClase[P]>
  }




  export type AlumnoClaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoClaseWhereInput
    orderBy?: AlumnoClaseOrderByWithAggregationInput | AlumnoClaseOrderByWithAggregationInput[]
    by: AlumnoClaseScalarFieldEnum[] | AlumnoClaseScalarFieldEnum
    having?: AlumnoClaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlumnoClaseCountAggregateInputType | true
    _avg?: AlumnoClaseAvgAggregateInputType
    _sum?: AlumnoClaseSumAggregateInputType
    _min?: AlumnoClaseMinAggregateInputType
    _max?: AlumnoClaseMaxAggregateInputType
  }

  export type AlumnoClaseGroupByOutputType = {
    id: number
    alumnoId: number
    claseId: number
    _count: AlumnoClaseCountAggregateOutputType | null
    _avg: AlumnoClaseAvgAggregateOutputType | null
    _sum: AlumnoClaseSumAggregateOutputType | null
    _min: AlumnoClaseMinAggregateOutputType | null
    _max: AlumnoClaseMaxAggregateOutputType | null
  }

  type GetAlumnoClaseGroupByPayload<T extends AlumnoClaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlumnoClaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlumnoClaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlumnoClaseGroupByOutputType[P]>
            : GetScalarType<T[P], AlumnoClaseGroupByOutputType[P]>
        }
      >
    >


  export type AlumnoClaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alumnoId?: boolean
    claseId?: boolean
    alumno?: boolean | AlumnoDefaultArgs<ExtArgs>
    clase?: boolean | ClaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumnoClase"]>

  export type AlumnoClaseSelectScalar = {
    id?: boolean
    alumnoId?: boolean
    claseId?: boolean
  }

  export type AlumnoClaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | AlumnoDefaultArgs<ExtArgs>
    clase?: boolean | ClaseDefaultArgs<ExtArgs>
  }


  export type $AlumnoClasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlumnoClase"
    objects: {
      alumno: Prisma.$AlumnoPayload<ExtArgs>
      clase: Prisma.$ClasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alumnoId: number
      claseId: number
    }, ExtArgs["result"]["alumnoClase"]>
    composites: {}
  }


  type AlumnoClaseGetPayload<S extends boolean | null | undefined | AlumnoClaseDefaultArgs> = $Result.GetResult<Prisma.$AlumnoClasePayload, S>

  type AlumnoClaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlumnoClaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlumnoClaseCountAggregateInputType | true
    }

  export interface AlumnoClaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlumnoClase'], meta: { name: 'AlumnoClase' } }
    /**
     * Find zero or one AlumnoClase that matches the filter.
     * @param {AlumnoClaseFindUniqueArgs} args - Arguments to find a AlumnoClase
     * @example
     * // Get one AlumnoClase
     * const alumnoClase = await prisma.alumnoClase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlumnoClaseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnoClaseFindUniqueArgs<ExtArgs>>
    ): Prisma__AlumnoClaseClient<$Result.GetResult<Prisma.$AlumnoClasePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AlumnoClase that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlumnoClaseFindUniqueOrThrowArgs} args - Arguments to find a AlumnoClase
     * @example
     * // Get one AlumnoClase
     * const alumnoClase = await prisma.alumnoClase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlumnoClaseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnoClaseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlumnoClaseClient<$Result.GetResult<Prisma.$AlumnoClasePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AlumnoClase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoClaseFindFirstArgs} args - Arguments to find a AlumnoClase
     * @example
     * // Get one AlumnoClase
     * const alumnoClase = await prisma.alumnoClase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlumnoClaseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnoClaseFindFirstArgs<ExtArgs>>
    ): Prisma__AlumnoClaseClient<$Result.GetResult<Prisma.$AlumnoClasePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AlumnoClase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoClaseFindFirstOrThrowArgs} args - Arguments to find a AlumnoClase
     * @example
     * // Get one AlumnoClase
     * const alumnoClase = await prisma.alumnoClase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlumnoClaseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnoClaseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlumnoClaseClient<$Result.GetResult<Prisma.$AlumnoClasePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AlumnoClases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoClaseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlumnoClases
     * const alumnoClases = await prisma.alumnoClase.findMany()
     * 
     * // Get first 10 AlumnoClases
     * const alumnoClases = await prisma.alumnoClase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alumnoClaseWithIdOnly = await prisma.alumnoClase.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlumnoClaseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnoClaseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoClasePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AlumnoClase.
     * @param {AlumnoClaseCreateArgs} args - Arguments to create a AlumnoClase.
     * @example
     * // Create one AlumnoClase
     * const AlumnoClase = await prisma.alumnoClase.create({
     *   data: {
     *     // ... data to create a AlumnoClase
     *   }
     * })
     * 
    **/
    create<T extends AlumnoClaseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnoClaseCreateArgs<ExtArgs>>
    ): Prisma__AlumnoClaseClient<$Result.GetResult<Prisma.$AlumnoClasePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a AlumnoClase.
     * @param {AlumnoClaseDeleteArgs} args - Arguments to delete one AlumnoClase.
     * @example
     * // Delete one AlumnoClase
     * const AlumnoClase = await prisma.alumnoClase.delete({
     *   where: {
     *     // ... filter to delete one AlumnoClase
     *   }
     * })
     * 
    **/
    delete<T extends AlumnoClaseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnoClaseDeleteArgs<ExtArgs>>
    ): Prisma__AlumnoClaseClient<$Result.GetResult<Prisma.$AlumnoClasePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AlumnoClase.
     * @param {AlumnoClaseUpdateArgs} args - Arguments to update one AlumnoClase.
     * @example
     * // Update one AlumnoClase
     * const alumnoClase = await prisma.alumnoClase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlumnoClaseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnoClaseUpdateArgs<ExtArgs>>
    ): Prisma__AlumnoClaseClient<$Result.GetResult<Prisma.$AlumnoClasePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AlumnoClases.
     * @param {AlumnoClaseDeleteManyArgs} args - Arguments to filter AlumnoClases to delete.
     * @example
     * // Delete a few AlumnoClases
     * const { count } = await prisma.alumnoClase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlumnoClaseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnoClaseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlumnoClases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoClaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlumnoClases
     * const alumnoClase = await prisma.alumnoClase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlumnoClaseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnoClaseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlumnoClase.
     * @param {AlumnoClaseUpsertArgs} args - Arguments to update or create a AlumnoClase.
     * @example
     * // Update or create a AlumnoClase
     * const alumnoClase = await prisma.alumnoClase.upsert({
     *   create: {
     *     // ... data to create a AlumnoClase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlumnoClase we want to update
     *   }
     * })
    **/
    upsert<T extends AlumnoClaseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnoClaseUpsertArgs<ExtArgs>>
    ): Prisma__AlumnoClaseClient<$Result.GetResult<Prisma.$AlumnoClasePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AlumnoClases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoClaseCountArgs} args - Arguments to filter AlumnoClases to count.
     * @example
     * // Count the number of AlumnoClases
     * const count = await prisma.alumnoClase.count({
     *   where: {
     *     // ... the filter for the AlumnoClases we want to count
     *   }
     * })
    **/
    count<T extends AlumnoClaseCountArgs>(
      args?: Subset<T, AlumnoClaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlumnoClaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlumnoClase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoClaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlumnoClaseAggregateArgs>(args: Subset<T, AlumnoClaseAggregateArgs>): Prisma.PrismaPromise<GetAlumnoClaseAggregateType<T>>

    /**
     * Group by AlumnoClase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoClaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlumnoClaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlumnoClaseGroupByArgs['orderBy'] }
        : { orderBy?: AlumnoClaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlumnoClaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnoClaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlumnoClase model
   */
  readonly fields: AlumnoClaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlumnoClase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlumnoClaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    alumno<T extends AlumnoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlumnoDefaultArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    clase<T extends ClaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClaseDefaultArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AlumnoClase model
   */ 
  interface AlumnoClaseFieldRefs {
    readonly id: FieldRef<"AlumnoClase", 'Int'>
    readonly alumnoId: FieldRef<"AlumnoClase", 'Int'>
    readonly claseId: FieldRef<"AlumnoClase", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * AlumnoClase findUnique
   */
  export type AlumnoClaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoClase
     */
    select?: AlumnoClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoClaseInclude<ExtArgs> | null
    /**
     * Filter, which AlumnoClase to fetch.
     */
    where: AlumnoClaseWhereUniqueInput
  }


  /**
   * AlumnoClase findUniqueOrThrow
   */
  export type AlumnoClaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoClase
     */
    select?: AlumnoClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoClaseInclude<ExtArgs> | null
    /**
     * Filter, which AlumnoClase to fetch.
     */
    where: AlumnoClaseWhereUniqueInput
  }


  /**
   * AlumnoClase findFirst
   */
  export type AlumnoClaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoClase
     */
    select?: AlumnoClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoClaseInclude<ExtArgs> | null
    /**
     * Filter, which AlumnoClase to fetch.
     */
    where?: AlumnoClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumnoClases to fetch.
     */
    orderBy?: AlumnoClaseOrderByWithRelationInput | AlumnoClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlumnoClases.
     */
    cursor?: AlumnoClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumnoClases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumnoClases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlumnoClases.
     */
    distinct?: AlumnoClaseScalarFieldEnum | AlumnoClaseScalarFieldEnum[]
  }


  /**
   * AlumnoClase findFirstOrThrow
   */
  export type AlumnoClaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoClase
     */
    select?: AlumnoClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoClaseInclude<ExtArgs> | null
    /**
     * Filter, which AlumnoClase to fetch.
     */
    where?: AlumnoClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumnoClases to fetch.
     */
    orderBy?: AlumnoClaseOrderByWithRelationInput | AlumnoClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlumnoClases.
     */
    cursor?: AlumnoClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumnoClases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumnoClases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlumnoClases.
     */
    distinct?: AlumnoClaseScalarFieldEnum | AlumnoClaseScalarFieldEnum[]
  }


  /**
   * AlumnoClase findMany
   */
  export type AlumnoClaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoClase
     */
    select?: AlumnoClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoClaseInclude<ExtArgs> | null
    /**
     * Filter, which AlumnoClases to fetch.
     */
    where?: AlumnoClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumnoClases to fetch.
     */
    orderBy?: AlumnoClaseOrderByWithRelationInput | AlumnoClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlumnoClases.
     */
    cursor?: AlumnoClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumnoClases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumnoClases.
     */
    skip?: number
    distinct?: AlumnoClaseScalarFieldEnum | AlumnoClaseScalarFieldEnum[]
  }


  /**
   * AlumnoClase create
   */
  export type AlumnoClaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoClase
     */
    select?: AlumnoClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoClaseInclude<ExtArgs> | null
    /**
     * The data needed to create a AlumnoClase.
     */
    data: XOR<AlumnoClaseCreateInput, AlumnoClaseUncheckedCreateInput>
  }


  /**
   * AlumnoClase update
   */
  export type AlumnoClaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoClase
     */
    select?: AlumnoClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoClaseInclude<ExtArgs> | null
    /**
     * The data needed to update a AlumnoClase.
     */
    data: XOR<AlumnoClaseUpdateInput, AlumnoClaseUncheckedUpdateInput>
    /**
     * Choose, which AlumnoClase to update.
     */
    where: AlumnoClaseWhereUniqueInput
  }


  /**
   * AlumnoClase updateMany
   */
  export type AlumnoClaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlumnoClases.
     */
    data: XOR<AlumnoClaseUpdateManyMutationInput, AlumnoClaseUncheckedUpdateManyInput>
    /**
     * Filter which AlumnoClases to update
     */
    where?: AlumnoClaseWhereInput
  }


  /**
   * AlumnoClase upsert
   */
  export type AlumnoClaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoClase
     */
    select?: AlumnoClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoClaseInclude<ExtArgs> | null
    /**
     * The filter to search for the AlumnoClase to update in case it exists.
     */
    where: AlumnoClaseWhereUniqueInput
    /**
     * In case the AlumnoClase found by the `where` argument doesn't exist, create a new AlumnoClase with this data.
     */
    create: XOR<AlumnoClaseCreateInput, AlumnoClaseUncheckedCreateInput>
    /**
     * In case the AlumnoClase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlumnoClaseUpdateInput, AlumnoClaseUncheckedUpdateInput>
  }


  /**
   * AlumnoClase delete
   */
  export type AlumnoClaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoClase
     */
    select?: AlumnoClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoClaseInclude<ExtArgs> | null
    /**
     * Filter which AlumnoClase to delete.
     */
    where: AlumnoClaseWhereUniqueInput
  }


  /**
   * AlumnoClase deleteMany
   */
  export type AlumnoClaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlumnoClases to delete
     */
    where?: AlumnoClaseWhereInput
  }


  /**
   * AlumnoClase without action
   */
  export type AlumnoClaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoClase
     */
    select?: AlumnoClaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnoClaseInclude<ExtArgs> | null
  }



  /**
   * Model Pagos
   */

  export type AggregatePagos = {
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  export type PagosAvgAggregateOutputType = {
    id: number | null
    monto: number | null
    idAlumno: number | null
  }

  export type PagosSumAggregateOutputType = {
    id: number | null
    monto: number | null
    idAlumno: number | null
  }

  export type PagosMinAggregateOutputType = {
    id: number | null
    monto: number | null
    metodo: string | null
    idAlumno: number | null
    concepto: string | null
    fecha: string | null
  }

  export type PagosMaxAggregateOutputType = {
    id: number | null
    monto: number | null
    metodo: string | null
    idAlumno: number | null
    concepto: string | null
    fecha: string | null
  }

  export type PagosCountAggregateOutputType = {
    id: number
    monto: number
    metodo: number
    idAlumno: number
    concepto: number
    fecha: number
    _all: number
  }


  export type PagosAvgAggregateInputType = {
    id?: true
    monto?: true
    idAlumno?: true
  }

  export type PagosSumAggregateInputType = {
    id?: true
    monto?: true
    idAlumno?: true
  }

  export type PagosMinAggregateInputType = {
    id?: true
    monto?: true
    metodo?: true
    idAlumno?: true
    concepto?: true
    fecha?: true
  }

  export type PagosMaxAggregateInputType = {
    id?: true
    monto?: true
    metodo?: true
    idAlumno?: true
    concepto?: true
    fecha?: true
  }

  export type PagosCountAggregateInputType = {
    id?: true
    monto?: true
    metodo?: true
    idAlumno?: true
    concepto?: true
    fecha?: true
    _all?: true
  }

  export type PagosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagos to aggregate.
     */
    where?: PagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagosOrderByWithRelationInput | PagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagos
    **/
    _count?: true | PagosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagosMaxAggregateInputType
  }

  export type GetPagosAggregateType<T extends PagosAggregateArgs> = {
        [P in keyof T & keyof AggregatePagos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagos[P]>
      : GetScalarType<T[P], AggregatePagos[P]>
  }




  export type PagosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagosWhereInput
    orderBy?: PagosOrderByWithAggregationInput | PagosOrderByWithAggregationInput[]
    by: PagosScalarFieldEnum[] | PagosScalarFieldEnum
    having?: PagosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagosCountAggregateInputType | true
    _avg?: PagosAvgAggregateInputType
    _sum?: PagosSumAggregateInputType
    _min?: PagosMinAggregateInputType
    _max?: PagosMaxAggregateInputType
  }

  export type PagosGroupByOutputType = {
    id: number
    monto: number
    metodo: string
    idAlumno: number
    concepto: string
    fecha: string
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  type GetPagosGroupByPayload<T extends PagosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagosGroupByOutputType[P]>
            : GetScalarType<T[P], PagosGroupByOutputType[P]>
        }
      >
    >


  export type PagosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monto?: boolean
    metodo?: boolean
    idAlumno?: boolean
    concepto?: boolean
    fecha?: boolean
    alumno?: boolean | AlumnoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagos"]>

  export type PagosSelectScalar = {
    id?: boolean
    monto?: boolean
    metodo?: boolean
    idAlumno?: boolean
    concepto?: boolean
    fecha?: boolean
  }

  export type PagosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | AlumnoDefaultArgs<ExtArgs>
  }


  export type $PagosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagos"
    objects: {
      alumno: Prisma.$AlumnoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      monto: number
      metodo: string
      idAlumno: number
      concepto: string
      fecha: string
    }, ExtArgs["result"]["pagos"]>
    composites: {}
  }


  type PagosGetPayload<S extends boolean | null | undefined | PagosDefaultArgs> = $Result.GetResult<Prisma.$PagosPayload, S>

  type PagosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PagosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PagosCountAggregateInputType | true
    }

  export interface PagosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagos'], meta: { name: 'Pagos' } }
    /**
     * Find zero or one Pagos that matches the filter.
     * @param {PagosFindUniqueArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PagosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PagosFindUniqueArgs<ExtArgs>>
    ): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pagos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PagosFindUniqueOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PagosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PagosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosFindFirstArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PagosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PagosFindFirstArgs<ExtArgs>>
    ): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pagos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosFindFirstOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PagosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PagosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pagos.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pagos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagosWithIdOnly = await prisma.pagos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PagosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PagosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pagos.
     * @param {PagosCreateArgs} args - Arguments to create a Pagos.
     * @example
     * // Create one Pagos
     * const Pagos = await prisma.pagos.create({
     *   data: {
     *     // ... data to create a Pagos
     *   }
     * })
     * 
    **/
    create<T extends PagosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PagosCreateArgs<ExtArgs>>
    ): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Pagos.
     * @param {PagosDeleteArgs} args - Arguments to delete one Pagos.
     * @example
     * // Delete one Pagos
     * const Pagos = await prisma.pagos.delete({
     *   where: {
     *     // ... filter to delete one Pagos
     *   }
     * })
     * 
    **/
    delete<T extends PagosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PagosDeleteArgs<ExtArgs>>
    ): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pagos.
     * @param {PagosUpdateArgs} args - Arguments to update one Pagos.
     * @example
     * // Update one Pagos
     * const pagos = await prisma.pagos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PagosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PagosUpdateArgs<ExtArgs>>
    ): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pagos.
     * @param {PagosDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pagos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PagosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PagosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pagos = await prisma.pagos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PagosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PagosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pagos.
     * @param {PagosUpsertArgs} args - Arguments to update or create a Pagos.
     * @example
     * // Update or create a Pagos
     * const pagos = await prisma.pagos.upsert({
     *   create: {
     *     // ... data to create a Pagos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagos we want to update
     *   }
     * })
    **/
    upsert<T extends PagosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PagosUpsertArgs<ExtArgs>>
    ): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pagos.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends PagosCountArgs>(
      args?: Subset<T, PagosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagosAggregateArgs>(args: Subset<T, PagosAggregateArgs>): Prisma.PrismaPromise<GetPagosAggregateType<T>>

    /**
     * Group by Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagosGroupByArgs['orderBy'] }
        : { orderBy?: PagosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagos model
   */
  readonly fields: PagosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    alumno<T extends AlumnoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlumnoDefaultArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Pagos model
   */ 
  interface PagosFieldRefs {
    readonly id: FieldRef<"Pagos", 'Int'>
    readonly monto: FieldRef<"Pagos", 'Float'>
    readonly metodo: FieldRef<"Pagos", 'String'>
    readonly idAlumno: FieldRef<"Pagos", 'Int'>
    readonly concepto: FieldRef<"Pagos", 'String'>
    readonly fecha: FieldRef<"Pagos", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Pagos findUnique
   */
  export type PagosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where: PagosWhereUniqueInput
  }


  /**
   * Pagos findUniqueOrThrow
   */
  export type PagosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where: PagosWhereUniqueInput
  }


  /**
   * Pagos findFirst
   */
  export type PagosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagosOrderByWithRelationInput | PagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }


  /**
   * Pagos findFirstOrThrow
   */
  export type PagosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagosOrderByWithRelationInput | PagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }


  /**
   * Pagos findMany
   */
  export type PagosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagosOrderByWithRelationInput | PagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagos.
     */
    cursor?: PagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }


  /**
   * Pagos create
   */
  export type PagosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagos.
     */
    data: XOR<PagosCreateInput, PagosUncheckedCreateInput>
  }


  /**
   * Pagos update
   */
  export type PagosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagos.
     */
    data: XOR<PagosUpdateInput, PagosUncheckedUpdateInput>
    /**
     * Choose, which Pagos to update.
     */
    where: PagosWhereUniqueInput
  }


  /**
   * Pagos updateMany
   */
  export type PagosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagosUpdateManyMutationInput, PagosUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagosWhereInput
  }


  /**
   * Pagos upsert
   */
  export type PagosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagos to update in case it exists.
     */
    where: PagosWhereUniqueInput
    /**
     * In case the Pagos found by the `where` argument doesn't exist, create a new Pagos with this data.
     */
    create: XOR<PagosCreateInput, PagosUncheckedCreateInput>
    /**
     * In case the Pagos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagosUpdateInput, PagosUncheckedUpdateInput>
  }


  /**
   * Pagos delete
   */
  export type PagosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * Filter which Pagos to delete.
     */
    where: PagosWhereUniqueInput
  }


  /**
   * Pagos deleteMany
   */
  export type PagosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagos to delete
     */
    where?: PagosWhereInput
  }


  /**
   * Pagos without action
   */
  export type PagosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagosInclude<ExtArgs> | null
  }



  /**
   * Model Gasto
   */

  export type AggregateGasto = {
    _count: GastoCountAggregateOutputType | null
    _avg: GastoAvgAggregateOutputType | null
    _sum: GastoSumAggregateOutputType | null
    _min: GastoMinAggregateOutputType | null
    _max: GastoMaxAggregateOutputType | null
  }

  export type GastoAvgAggregateOutputType = {
    id: number | null
    idSucursal: number | null
    monto: number | null
  }

  export type GastoSumAggregateOutputType = {
    id: number | null
    idSucursal: number | null
    monto: number | null
  }

  export type GastoMinAggregateOutputType = {
    id: number | null
    idSucursal: number | null
    titulo: string | null
    decripcion: string | null
    monto: number | null
    concepto: string | null
    fecha: string | null
  }

  export type GastoMaxAggregateOutputType = {
    id: number | null
    idSucursal: number | null
    titulo: string | null
    decripcion: string | null
    monto: number | null
    concepto: string | null
    fecha: string | null
  }

  export type GastoCountAggregateOutputType = {
    id: number
    idSucursal: number
    titulo: number
    decripcion: number
    monto: number
    concepto: number
    fecha: number
    _all: number
  }


  export type GastoAvgAggregateInputType = {
    id?: true
    idSucursal?: true
    monto?: true
  }

  export type GastoSumAggregateInputType = {
    id?: true
    idSucursal?: true
    monto?: true
  }

  export type GastoMinAggregateInputType = {
    id?: true
    idSucursal?: true
    titulo?: true
    decripcion?: true
    monto?: true
    concepto?: true
    fecha?: true
  }

  export type GastoMaxAggregateInputType = {
    id?: true
    idSucursal?: true
    titulo?: true
    decripcion?: true
    monto?: true
    concepto?: true
    fecha?: true
  }

  export type GastoCountAggregateInputType = {
    id?: true
    idSucursal?: true
    titulo?: true
    decripcion?: true
    monto?: true
    concepto?: true
    fecha?: true
    _all?: true
  }

  export type GastoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gasto to aggregate.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gastos
    **/
    _count?: true | GastoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GastoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GastoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GastoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GastoMaxAggregateInputType
  }

  export type GetGastoAggregateType<T extends GastoAggregateArgs> = {
        [P in keyof T & keyof AggregateGasto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGasto[P]>
      : GetScalarType<T[P], AggregateGasto[P]>
  }




  export type GastoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithAggregationInput | GastoOrderByWithAggregationInput[]
    by: GastoScalarFieldEnum[] | GastoScalarFieldEnum
    having?: GastoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GastoCountAggregateInputType | true
    _avg?: GastoAvgAggregateInputType
    _sum?: GastoSumAggregateInputType
    _min?: GastoMinAggregateInputType
    _max?: GastoMaxAggregateInputType
  }

  export type GastoGroupByOutputType = {
    id: number
    idSucursal: number
    titulo: string
    decripcion: string | null
    monto: number
    concepto: string
    fecha: string
    _count: GastoCountAggregateOutputType | null
    _avg: GastoAvgAggregateOutputType | null
    _sum: GastoSumAggregateOutputType | null
    _min: GastoMinAggregateOutputType | null
    _max: GastoMaxAggregateOutputType | null
  }

  type GetGastoGroupByPayload<T extends GastoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GastoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GastoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GastoGroupByOutputType[P]>
            : GetScalarType<T[P], GastoGroupByOutputType[P]>
        }
      >
    >


  export type GastoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idSucursal?: boolean
    titulo?: boolean
    decripcion?: boolean
    monto?: boolean
    concepto?: boolean
    fecha?: boolean
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectScalar = {
    id?: boolean
    idSucursal?: boolean
    titulo?: boolean
    decripcion?: boolean
    monto?: boolean
    concepto?: boolean
    fecha?: boolean
  }

  export type GastoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
  }


  export type $GastoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gasto"
    objects: {
      sucursal: Prisma.$SucursalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idSucursal: number
      titulo: string
      decripcion: string | null
      monto: number
      concepto: string
      fecha: string
    }, ExtArgs["result"]["gasto"]>
    composites: {}
  }


  type GastoGetPayload<S extends boolean | null | undefined | GastoDefaultArgs> = $Result.GetResult<Prisma.$GastoPayload, S>

  type GastoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GastoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GastoCountAggregateInputType | true
    }

  export interface GastoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gasto'], meta: { name: 'Gasto' } }
    /**
     * Find zero or one Gasto that matches the filter.
     * @param {GastoFindUniqueArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GastoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GastoFindUniqueArgs<ExtArgs>>
    ): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Gasto that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GastoFindUniqueOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GastoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GastoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Gasto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindFirstArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GastoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GastoFindFirstArgs<ExtArgs>>
    ): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Gasto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindFirstOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GastoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GastoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Gastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gastos
     * const gastos = await prisma.gasto.findMany()
     * 
     * // Get first 10 Gastos
     * const gastos = await prisma.gasto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gastoWithIdOnly = await prisma.gasto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GastoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GastoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Gasto.
     * @param {GastoCreateArgs} args - Arguments to create a Gasto.
     * @example
     * // Create one Gasto
     * const Gasto = await prisma.gasto.create({
     *   data: {
     *     // ... data to create a Gasto
     *   }
     * })
     * 
    **/
    create<T extends GastoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GastoCreateArgs<ExtArgs>>
    ): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Gasto.
     * @param {GastoDeleteArgs} args - Arguments to delete one Gasto.
     * @example
     * // Delete one Gasto
     * const Gasto = await prisma.gasto.delete({
     *   where: {
     *     // ... filter to delete one Gasto
     *   }
     * })
     * 
    **/
    delete<T extends GastoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GastoDeleteArgs<ExtArgs>>
    ): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Gasto.
     * @param {GastoUpdateArgs} args - Arguments to update one Gasto.
     * @example
     * // Update one Gasto
     * const gasto = await prisma.gasto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GastoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GastoUpdateArgs<ExtArgs>>
    ): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Gastos.
     * @param {GastoDeleteManyArgs} args - Arguments to filter Gastos to delete.
     * @example
     * // Delete a few Gastos
     * const { count } = await prisma.gasto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GastoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GastoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gastos
     * const gasto = await prisma.gasto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GastoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GastoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gasto.
     * @param {GastoUpsertArgs} args - Arguments to update or create a Gasto.
     * @example
     * // Update or create a Gasto
     * const gasto = await prisma.gasto.upsert({
     *   create: {
     *     // ... data to create a Gasto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gasto we want to update
     *   }
     * })
    **/
    upsert<T extends GastoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GastoUpsertArgs<ExtArgs>>
    ): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoCountArgs} args - Arguments to filter Gastos to count.
     * @example
     * // Count the number of Gastos
     * const count = await prisma.gasto.count({
     *   where: {
     *     // ... the filter for the Gastos we want to count
     *   }
     * })
    **/
    count<T extends GastoCountArgs>(
      args?: Subset<T, GastoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GastoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GastoAggregateArgs>(args: Subset<T, GastoAggregateArgs>): Prisma.PrismaPromise<GetGastoAggregateType<T>>

    /**
     * Group by Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GastoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GastoGroupByArgs['orderBy'] }
        : { orderBy?: GastoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GastoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gasto model
   */
  readonly fields: GastoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gasto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GastoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sucursal<T extends SucursalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SucursalDefaultArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Gasto model
   */ 
  interface GastoFieldRefs {
    readonly id: FieldRef<"Gasto", 'Int'>
    readonly idSucursal: FieldRef<"Gasto", 'Int'>
    readonly titulo: FieldRef<"Gasto", 'String'>
    readonly decripcion: FieldRef<"Gasto", 'String'>
    readonly monto: FieldRef<"Gasto", 'Float'>
    readonly concepto: FieldRef<"Gasto", 'String'>
    readonly fecha: FieldRef<"Gasto", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Gasto findUnique
   */
  export type GastoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where: GastoWhereUniqueInput
  }


  /**
   * Gasto findUniqueOrThrow
   */
  export type GastoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where: GastoWhereUniqueInput
  }


  /**
   * Gasto findFirst
   */
  export type GastoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gastos.
     */
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }


  /**
   * Gasto findFirstOrThrow
   */
  export type GastoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gastos.
     */
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }


  /**
   * Gasto findMany
   */
  export type GastoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gastos to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }


  /**
   * Gasto create
   */
  export type GastoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The data needed to create a Gasto.
     */
    data: XOR<GastoCreateInput, GastoUncheckedCreateInput>
  }


  /**
   * Gasto update
   */
  export type GastoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The data needed to update a Gasto.
     */
    data: XOR<GastoUpdateInput, GastoUncheckedUpdateInput>
    /**
     * Choose, which Gasto to update.
     */
    where: GastoWhereUniqueInput
  }


  /**
   * Gasto updateMany
   */
  export type GastoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gastos.
     */
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyInput>
    /**
     * Filter which Gastos to update
     */
    where?: GastoWhereInput
  }


  /**
   * Gasto upsert
   */
  export type GastoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The filter to search for the Gasto to update in case it exists.
     */
    where: GastoWhereUniqueInput
    /**
     * In case the Gasto found by the `where` argument doesn't exist, create a new Gasto with this data.
     */
    create: XOR<GastoCreateInput, GastoUncheckedCreateInput>
    /**
     * In case the Gasto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GastoUpdateInput, GastoUncheckedUpdateInput>
  }


  /**
   * Gasto delete
   */
  export type GastoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter which Gasto to delete.
     */
    where: GastoWhereUniqueInput
  }


  /**
   * Gasto deleteMany
   */
  export type GastoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gastos to delete
     */
    where?: GastoWhereInput
  }


  /**
   * Gasto without action
   */
  export type GastoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GastoInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    contrasena: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    contrasena: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    contrasena: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    contrasena?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    contrasena?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    contrasena?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nombre: string
    correo: string
    contrasena: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    contrasena?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    contrasena?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      correo: string
      contrasena: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nombre: FieldRef<"User", 'String'>
    readonly correo: FieldRef<"User", 'String'>
    readonly contrasena: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model MasterKey
   */

  export type AggregateMasterKey = {
    _count: MasterKeyCountAggregateOutputType | null
    _min: MasterKeyMinAggregateOutputType | null
    _max: MasterKeyMaxAggregateOutputType | null
  }

  export type MasterKeyMinAggregateOutputType = {
    value: string | null
  }

  export type MasterKeyMaxAggregateOutputType = {
    value: string | null
  }

  export type MasterKeyCountAggregateOutputType = {
    value: number
    _all: number
  }


  export type MasterKeyMinAggregateInputType = {
    value?: true
  }

  export type MasterKeyMaxAggregateInputType = {
    value?: true
  }

  export type MasterKeyCountAggregateInputType = {
    value?: true
    _all?: true
  }

  export type MasterKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterKey to aggregate.
     */
    where?: MasterKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterKeys to fetch.
     */
    orderBy?: MasterKeyOrderByWithRelationInput | MasterKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterKeys
    **/
    _count?: true | MasterKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterKeyMaxAggregateInputType
  }

  export type GetMasterKeyAggregateType<T extends MasterKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterKey[P]>
      : GetScalarType<T[P], AggregateMasterKey[P]>
  }




  export type MasterKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterKeyWhereInput
    orderBy?: MasterKeyOrderByWithAggregationInput | MasterKeyOrderByWithAggregationInput[]
    by: MasterKeyScalarFieldEnum[] | MasterKeyScalarFieldEnum
    having?: MasterKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterKeyCountAggregateInputType | true
    _min?: MasterKeyMinAggregateInputType
    _max?: MasterKeyMaxAggregateInputType
  }

  export type MasterKeyGroupByOutputType = {
    value: string
    _count: MasterKeyCountAggregateOutputType | null
    _min: MasterKeyMinAggregateOutputType | null
    _max: MasterKeyMaxAggregateOutputType | null
  }

  type GetMasterKeyGroupByPayload<T extends MasterKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterKeyGroupByOutputType[P]>
            : GetScalarType<T[P], MasterKeyGroupByOutputType[P]>
        }
      >
    >


  export type MasterKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    value?: boolean
  }, ExtArgs["result"]["masterKey"]>

  export type MasterKeySelectScalar = {
    value?: boolean
  }


  export type $MasterKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      value: string
    }, ExtArgs["result"]["masterKey"]>
    composites: {}
  }


  type MasterKeyGetPayload<S extends boolean | null | undefined | MasterKeyDefaultArgs> = $Result.GetResult<Prisma.$MasterKeyPayload, S>

  type MasterKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MasterKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MasterKeyCountAggregateInputType | true
    }

  export interface MasterKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterKey'], meta: { name: 'MasterKey' } }
    /**
     * Find zero or one MasterKey that matches the filter.
     * @param {MasterKeyFindUniqueArgs} args - Arguments to find a MasterKey
     * @example
     * // Get one MasterKey
     * const masterKey = await prisma.masterKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MasterKeyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MasterKeyFindUniqueArgs<ExtArgs>>
    ): Prisma__MasterKeyClient<$Result.GetResult<Prisma.$MasterKeyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MasterKey that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MasterKeyFindUniqueOrThrowArgs} args - Arguments to find a MasterKey
     * @example
     * // Get one MasterKey
     * const masterKey = await prisma.masterKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MasterKeyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MasterKeyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MasterKeyClient<$Result.GetResult<Prisma.$MasterKeyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MasterKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterKeyFindFirstArgs} args - Arguments to find a MasterKey
     * @example
     * // Get one MasterKey
     * const masterKey = await prisma.masterKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MasterKeyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MasterKeyFindFirstArgs<ExtArgs>>
    ): Prisma__MasterKeyClient<$Result.GetResult<Prisma.$MasterKeyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MasterKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterKeyFindFirstOrThrowArgs} args - Arguments to find a MasterKey
     * @example
     * // Get one MasterKey
     * const masterKey = await prisma.masterKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MasterKeyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MasterKeyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MasterKeyClient<$Result.GetResult<Prisma.$MasterKeyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MasterKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterKeyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterKeys
     * const masterKeys = await prisma.masterKey.findMany()
     * 
     * // Get first 10 MasterKeys
     * const masterKeys = await prisma.masterKey.findMany({ take: 10 })
     * 
     * // Only select the `value`
     * const masterKeyWithValueOnly = await prisma.masterKey.findMany({ select: { value: true } })
     * 
    **/
    findMany<T extends MasterKeyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MasterKeyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterKeyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MasterKey.
     * @param {MasterKeyCreateArgs} args - Arguments to create a MasterKey.
     * @example
     * // Create one MasterKey
     * const MasterKey = await prisma.masterKey.create({
     *   data: {
     *     // ... data to create a MasterKey
     *   }
     * })
     * 
    **/
    create<T extends MasterKeyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MasterKeyCreateArgs<ExtArgs>>
    ): Prisma__MasterKeyClient<$Result.GetResult<Prisma.$MasterKeyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a MasterKey.
     * @param {MasterKeyDeleteArgs} args - Arguments to delete one MasterKey.
     * @example
     * // Delete one MasterKey
     * const MasterKey = await prisma.masterKey.delete({
     *   where: {
     *     // ... filter to delete one MasterKey
     *   }
     * })
     * 
    **/
    delete<T extends MasterKeyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MasterKeyDeleteArgs<ExtArgs>>
    ): Prisma__MasterKeyClient<$Result.GetResult<Prisma.$MasterKeyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MasterKey.
     * @param {MasterKeyUpdateArgs} args - Arguments to update one MasterKey.
     * @example
     * // Update one MasterKey
     * const masterKey = await prisma.masterKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MasterKeyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MasterKeyUpdateArgs<ExtArgs>>
    ): Prisma__MasterKeyClient<$Result.GetResult<Prisma.$MasterKeyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MasterKeys.
     * @param {MasterKeyDeleteManyArgs} args - Arguments to filter MasterKeys to delete.
     * @example
     * // Delete a few MasterKeys
     * const { count } = await prisma.masterKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MasterKeyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MasterKeyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterKeys
     * const masterKey = await prisma.masterKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MasterKeyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MasterKeyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MasterKey.
     * @param {MasterKeyUpsertArgs} args - Arguments to update or create a MasterKey.
     * @example
     * // Update or create a MasterKey
     * const masterKey = await prisma.masterKey.upsert({
     *   create: {
     *     // ... data to create a MasterKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterKey we want to update
     *   }
     * })
    **/
    upsert<T extends MasterKeyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MasterKeyUpsertArgs<ExtArgs>>
    ): Prisma__MasterKeyClient<$Result.GetResult<Prisma.$MasterKeyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MasterKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterKeyCountArgs} args - Arguments to filter MasterKeys to count.
     * @example
     * // Count the number of MasterKeys
     * const count = await prisma.masterKey.count({
     *   where: {
     *     // ... the filter for the MasterKeys we want to count
     *   }
     * })
    **/
    count<T extends MasterKeyCountArgs>(
      args?: Subset<T, MasterKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MasterKeyAggregateArgs>(args: Subset<T, MasterKeyAggregateArgs>): Prisma.PrismaPromise<GetMasterKeyAggregateType<T>>

    /**
     * Group by MasterKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MasterKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterKeyGroupByArgs['orderBy'] }
        : { orderBy?: MasterKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MasterKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterKey model
   */
  readonly fields: MasterKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MasterKey model
   */ 
  interface MasterKeyFieldRefs {
    readonly value: FieldRef<"MasterKey", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MasterKey findUnique
   */
  export type MasterKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterKey
     */
    select?: MasterKeySelect<ExtArgs> | null
    /**
     * Filter, which MasterKey to fetch.
     */
    where: MasterKeyWhereUniqueInput
  }


  /**
   * MasterKey findUniqueOrThrow
   */
  export type MasterKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterKey
     */
    select?: MasterKeySelect<ExtArgs> | null
    /**
     * Filter, which MasterKey to fetch.
     */
    where: MasterKeyWhereUniqueInput
  }


  /**
   * MasterKey findFirst
   */
  export type MasterKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterKey
     */
    select?: MasterKeySelect<ExtArgs> | null
    /**
     * Filter, which MasterKey to fetch.
     */
    where?: MasterKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterKeys to fetch.
     */
    orderBy?: MasterKeyOrderByWithRelationInput | MasterKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterKeys.
     */
    cursor?: MasterKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterKeys.
     */
    distinct?: MasterKeyScalarFieldEnum | MasterKeyScalarFieldEnum[]
  }


  /**
   * MasterKey findFirstOrThrow
   */
  export type MasterKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterKey
     */
    select?: MasterKeySelect<ExtArgs> | null
    /**
     * Filter, which MasterKey to fetch.
     */
    where?: MasterKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterKeys to fetch.
     */
    orderBy?: MasterKeyOrderByWithRelationInput | MasterKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterKeys.
     */
    cursor?: MasterKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterKeys.
     */
    distinct?: MasterKeyScalarFieldEnum | MasterKeyScalarFieldEnum[]
  }


  /**
   * MasterKey findMany
   */
  export type MasterKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterKey
     */
    select?: MasterKeySelect<ExtArgs> | null
    /**
     * Filter, which MasterKeys to fetch.
     */
    where?: MasterKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterKeys to fetch.
     */
    orderBy?: MasterKeyOrderByWithRelationInput | MasterKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterKeys.
     */
    cursor?: MasterKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterKeys.
     */
    skip?: number
    distinct?: MasterKeyScalarFieldEnum | MasterKeyScalarFieldEnum[]
  }


  /**
   * MasterKey create
   */
  export type MasterKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterKey
     */
    select?: MasterKeySelect<ExtArgs> | null
    /**
     * The data needed to create a MasterKey.
     */
    data: XOR<MasterKeyCreateInput, MasterKeyUncheckedCreateInput>
  }


  /**
   * MasterKey update
   */
  export type MasterKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterKey
     */
    select?: MasterKeySelect<ExtArgs> | null
    /**
     * The data needed to update a MasterKey.
     */
    data: XOR<MasterKeyUpdateInput, MasterKeyUncheckedUpdateInput>
    /**
     * Choose, which MasterKey to update.
     */
    where: MasterKeyWhereUniqueInput
  }


  /**
   * MasterKey updateMany
   */
  export type MasterKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterKeys.
     */
    data: XOR<MasterKeyUpdateManyMutationInput, MasterKeyUncheckedUpdateManyInput>
    /**
     * Filter which MasterKeys to update
     */
    where?: MasterKeyWhereInput
  }


  /**
   * MasterKey upsert
   */
  export type MasterKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterKey
     */
    select?: MasterKeySelect<ExtArgs> | null
    /**
     * The filter to search for the MasterKey to update in case it exists.
     */
    where: MasterKeyWhereUniqueInput
    /**
     * In case the MasterKey found by the `where` argument doesn't exist, create a new MasterKey with this data.
     */
    create: XOR<MasterKeyCreateInput, MasterKeyUncheckedCreateInput>
    /**
     * In case the MasterKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterKeyUpdateInput, MasterKeyUncheckedUpdateInput>
  }


  /**
   * MasterKey delete
   */
  export type MasterKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterKey
     */
    select?: MasterKeySelect<ExtArgs> | null
    /**
     * Filter which MasterKey to delete.
     */
    where: MasterKeyWhereUniqueInput
  }


  /**
   * MasterKey deleteMany
   */
  export type MasterKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterKeys to delete
     */
    where?: MasterKeyWhereInput
  }


  /**
   * MasterKey without action
   */
  export type MasterKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterKey
     */
    select?: MasterKeySelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DocenteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    aPaterno: 'aPaterno',
    aMaterno: 'aMaterno',
    estado: 'estado',
    telefono: 'telefono',
    curp: 'curp'
  };

  export type DocenteScalarFieldEnum = (typeof DocenteScalarFieldEnum)[keyof typeof DocenteScalarFieldEnum]


  export const SucursalScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion'
  };

  export type SucursalScalarFieldEnum = (typeof SucursalScalarFieldEnum)[keyof typeof SucursalScalarFieldEnum]


  export const ClaseScalarFieldEnum: {
    id: 'id',
    idSucursal: 'idSucursal',
    idDocente: 'idDocente',
    nombre: 'nombre',
    cupoMax: 'cupoMax',
    dias: 'dias',
    hora: 'hora'
  };

  export type ClaseScalarFieldEnum = (typeof ClaseScalarFieldEnum)[keyof typeof ClaseScalarFieldEnum]


  export const AlumnoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    aPaterno: 'aPaterno',
    aMaterno: 'aMaterno',
    tutor: 'tutor',
    contacto: 'contacto',
    edad: 'edad',
    activo: 'activo'
  };

  export type AlumnoScalarFieldEnum = (typeof AlumnoScalarFieldEnum)[keyof typeof AlumnoScalarFieldEnum]


  export const AlumnoClaseScalarFieldEnum: {
    id: 'id',
    alumnoId: 'alumnoId',
    claseId: 'claseId'
  };

  export type AlumnoClaseScalarFieldEnum = (typeof AlumnoClaseScalarFieldEnum)[keyof typeof AlumnoClaseScalarFieldEnum]


  export const PagosScalarFieldEnum: {
    id: 'id',
    monto: 'monto',
    metodo: 'metodo',
    idAlumno: 'idAlumno',
    concepto: 'concepto',
    fecha: 'fecha'
  };

  export type PagosScalarFieldEnum = (typeof PagosScalarFieldEnum)[keyof typeof PagosScalarFieldEnum]


  export const GastoScalarFieldEnum: {
    id: 'id',
    idSucursal: 'idSucursal',
    titulo: 'titulo',
    decripcion: 'decripcion',
    monto: 'monto',
    concepto: 'concepto',
    fecha: 'fecha'
  };

  export type GastoScalarFieldEnum = (typeof GastoScalarFieldEnum)[keyof typeof GastoScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    contrasena: 'contrasena'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MasterKeyScalarFieldEnum: {
    value: 'value'
  };

  export type MasterKeyScalarFieldEnum = (typeof MasterKeyScalarFieldEnum)[keyof typeof MasterKeyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DocenteWhereInput = {
    AND?: DocenteWhereInput | DocenteWhereInput[]
    OR?: DocenteWhereInput[]
    NOT?: DocenteWhereInput | DocenteWhereInput[]
    id?: IntFilter<"Docente"> | number
    nombre?: StringFilter<"Docente"> | string
    aPaterno?: StringFilter<"Docente"> | string
    aMaterno?: StringFilter<"Docente"> | string
    estado?: StringFilter<"Docente"> | string
    telefono?: StringFilter<"Docente"> | string
    curp?: StringFilter<"Docente"> | string
    clases?: ClaseListRelationFilter
  }

  export type DocenteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    aPaterno?: SortOrder
    aMaterno?: SortOrder
    estado?: SortOrder
    telefono?: SortOrder
    curp?: SortOrder
    clases?: ClaseOrderByRelationAggregateInput
  }

  export type DocenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    curp?: string
    AND?: DocenteWhereInput | DocenteWhereInput[]
    OR?: DocenteWhereInput[]
    NOT?: DocenteWhereInput | DocenteWhereInput[]
    nombre?: StringFilter<"Docente"> | string
    aPaterno?: StringFilter<"Docente"> | string
    aMaterno?: StringFilter<"Docente"> | string
    estado?: StringFilter<"Docente"> | string
    telefono?: StringFilter<"Docente"> | string
    clases?: ClaseListRelationFilter
  }, "id" | "curp">

  export type DocenteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    aPaterno?: SortOrder
    aMaterno?: SortOrder
    estado?: SortOrder
    telefono?: SortOrder
    curp?: SortOrder
    _count?: DocenteCountOrderByAggregateInput
    _avg?: DocenteAvgOrderByAggregateInput
    _max?: DocenteMaxOrderByAggregateInput
    _min?: DocenteMinOrderByAggregateInput
    _sum?: DocenteSumOrderByAggregateInput
  }

  export type DocenteScalarWhereWithAggregatesInput = {
    AND?: DocenteScalarWhereWithAggregatesInput | DocenteScalarWhereWithAggregatesInput[]
    OR?: DocenteScalarWhereWithAggregatesInput[]
    NOT?: DocenteScalarWhereWithAggregatesInput | DocenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Docente"> | number
    nombre?: StringWithAggregatesFilter<"Docente"> | string
    aPaterno?: StringWithAggregatesFilter<"Docente"> | string
    aMaterno?: StringWithAggregatesFilter<"Docente"> | string
    estado?: StringWithAggregatesFilter<"Docente"> | string
    telefono?: StringWithAggregatesFilter<"Docente"> | string
    curp?: StringWithAggregatesFilter<"Docente"> | string
  }

  export type SucursalWhereInput = {
    AND?: SucursalWhereInput | SucursalWhereInput[]
    OR?: SucursalWhereInput[]
    NOT?: SucursalWhereInput | SucursalWhereInput[]
    id?: IntFilter<"Sucursal"> | number
    nombre?: StringFilter<"Sucursal"> | string
    direccion?: StringFilter<"Sucursal"> | string
    clases?: ClaseListRelationFilter
    gastos?: GastoListRelationFilter
  }

  export type SucursalOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    clases?: ClaseOrderByRelationAggregateInput
    gastos?: GastoOrderByRelationAggregateInput
  }

  export type SucursalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SucursalWhereInput | SucursalWhereInput[]
    OR?: SucursalWhereInput[]
    NOT?: SucursalWhereInput | SucursalWhereInput[]
    nombre?: StringFilter<"Sucursal"> | string
    direccion?: StringFilter<"Sucursal"> | string
    clases?: ClaseListRelationFilter
    gastos?: GastoListRelationFilter
  }, "id">

  export type SucursalOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    _count?: SucursalCountOrderByAggregateInput
    _avg?: SucursalAvgOrderByAggregateInput
    _max?: SucursalMaxOrderByAggregateInput
    _min?: SucursalMinOrderByAggregateInput
    _sum?: SucursalSumOrderByAggregateInput
  }

  export type SucursalScalarWhereWithAggregatesInput = {
    AND?: SucursalScalarWhereWithAggregatesInput | SucursalScalarWhereWithAggregatesInput[]
    OR?: SucursalScalarWhereWithAggregatesInput[]
    NOT?: SucursalScalarWhereWithAggregatesInput | SucursalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sucursal"> | number
    nombre?: StringWithAggregatesFilter<"Sucursal"> | string
    direccion?: StringWithAggregatesFilter<"Sucursal"> | string
  }

  export type ClaseWhereInput = {
    AND?: ClaseWhereInput | ClaseWhereInput[]
    OR?: ClaseWhereInput[]
    NOT?: ClaseWhereInput | ClaseWhereInput[]
    id?: IntFilter<"Clase"> | number
    idSucursal?: IntFilter<"Clase"> | number
    idDocente?: IntNullableFilter<"Clase"> | number | null
    nombre?: StringFilter<"Clase"> | string
    cupoMax?: IntFilter<"Clase"> | number
    dias?: StringFilter<"Clase"> | string
    hora?: StringFilter<"Clase"> | string
    sucursal?: XOR<SucursalRelationFilter, SucursalWhereInput>
    docente?: XOR<DocenteNullableRelationFilter, DocenteWhereInput> | null
    alumnos?: AlumnoClaseListRelationFilter
  }

  export type ClaseOrderByWithRelationInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    idDocente?: SortOrderInput | SortOrder
    nombre?: SortOrder
    cupoMax?: SortOrder
    dias?: SortOrder
    hora?: SortOrder
    sucursal?: SucursalOrderByWithRelationInput
    docente?: DocenteOrderByWithRelationInput
    alumnos?: AlumnoClaseOrderByRelationAggregateInput
  }

  export type ClaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClaseWhereInput | ClaseWhereInput[]
    OR?: ClaseWhereInput[]
    NOT?: ClaseWhereInput | ClaseWhereInput[]
    idSucursal?: IntFilter<"Clase"> | number
    idDocente?: IntNullableFilter<"Clase"> | number | null
    nombre?: StringFilter<"Clase"> | string
    cupoMax?: IntFilter<"Clase"> | number
    dias?: StringFilter<"Clase"> | string
    hora?: StringFilter<"Clase"> | string
    sucursal?: XOR<SucursalRelationFilter, SucursalWhereInput>
    docente?: XOR<DocenteNullableRelationFilter, DocenteWhereInput> | null
    alumnos?: AlumnoClaseListRelationFilter
  }, "id">

  export type ClaseOrderByWithAggregationInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    idDocente?: SortOrderInput | SortOrder
    nombre?: SortOrder
    cupoMax?: SortOrder
    dias?: SortOrder
    hora?: SortOrder
    _count?: ClaseCountOrderByAggregateInput
    _avg?: ClaseAvgOrderByAggregateInput
    _max?: ClaseMaxOrderByAggregateInput
    _min?: ClaseMinOrderByAggregateInput
    _sum?: ClaseSumOrderByAggregateInput
  }

  export type ClaseScalarWhereWithAggregatesInput = {
    AND?: ClaseScalarWhereWithAggregatesInput | ClaseScalarWhereWithAggregatesInput[]
    OR?: ClaseScalarWhereWithAggregatesInput[]
    NOT?: ClaseScalarWhereWithAggregatesInput | ClaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clase"> | number
    idSucursal?: IntWithAggregatesFilter<"Clase"> | number
    idDocente?: IntNullableWithAggregatesFilter<"Clase"> | number | null
    nombre?: StringWithAggregatesFilter<"Clase"> | string
    cupoMax?: IntWithAggregatesFilter<"Clase"> | number
    dias?: StringWithAggregatesFilter<"Clase"> | string
    hora?: StringWithAggregatesFilter<"Clase"> | string
  }

  export type AlumnoWhereInput = {
    AND?: AlumnoWhereInput | AlumnoWhereInput[]
    OR?: AlumnoWhereInput[]
    NOT?: AlumnoWhereInput | AlumnoWhereInput[]
    id?: IntFilter<"Alumno"> | number
    nombre?: StringFilter<"Alumno"> | string
    aPaterno?: StringFilter<"Alumno"> | string
    aMaterno?: StringFilter<"Alumno"> | string
    tutor?: StringFilter<"Alumno"> | string
    contacto?: StringFilter<"Alumno"> | string
    edad?: IntFilter<"Alumno"> | number
    activo?: BoolFilter<"Alumno"> | boolean
    clases?: AlumnoClaseListRelationFilter
    pagos?: PagosListRelationFilter
  }

  export type AlumnoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    aPaterno?: SortOrder
    aMaterno?: SortOrder
    tutor?: SortOrder
    contacto?: SortOrder
    edad?: SortOrder
    activo?: SortOrder
    clases?: AlumnoClaseOrderByRelationAggregateInput
    pagos?: PagosOrderByRelationAggregateInput
  }

  export type AlumnoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlumnoWhereInput | AlumnoWhereInput[]
    OR?: AlumnoWhereInput[]
    NOT?: AlumnoWhereInput | AlumnoWhereInput[]
    nombre?: StringFilter<"Alumno"> | string
    aPaterno?: StringFilter<"Alumno"> | string
    aMaterno?: StringFilter<"Alumno"> | string
    tutor?: StringFilter<"Alumno"> | string
    contacto?: StringFilter<"Alumno"> | string
    edad?: IntFilter<"Alumno"> | number
    activo?: BoolFilter<"Alumno"> | boolean
    clases?: AlumnoClaseListRelationFilter
    pagos?: PagosListRelationFilter
  }, "id">

  export type AlumnoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    aPaterno?: SortOrder
    aMaterno?: SortOrder
    tutor?: SortOrder
    contacto?: SortOrder
    edad?: SortOrder
    activo?: SortOrder
    _count?: AlumnoCountOrderByAggregateInput
    _avg?: AlumnoAvgOrderByAggregateInput
    _max?: AlumnoMaxOrderByAggregateInput
    _min?: AlumnoMinOrderByAggregateInput
    _sum?: AlumnoSumOrderByAggregateInput
  }

  export type AlumnoScalarWhereWithAggregatesInput = {
    AND?: AlumnoScalarWhereWithAggregatesInput | AlumnoScalarWhereWithAggregatesInput[]
    OR?: AlumnoScalarWhereWithAggregatesInput[]
    NOT?: AlumnoScalarWhereWithAggregatesInput | AlumnoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alumno"> | number
    nombre?: StringWithAggregatesFilter<"Alumno"> | string
    aPaterno?: StringWithAggregatesFilter<"Alumno"> | string
    aMaterno?: StringWithAggregatesFilter<"Alumno"> | string
    tutor?: StringWithAggregatesFilter<"Alumno"> | string
    contacto?: StringWithAggregatesFilter<"Alumno"> | string
    edad?: IntWithAggregatesFilter<"Alumno"> | number
    activo?: BoolWithAggregatesFilter<"Alumno"> | boolean
  }

  export type AlumnoClaseWhereInput = {
    AND?: AlumnoClaseWhereInput | AlumnoClaseWhereInput[]
    OR?: AlumnoClaseWhereInput[]
    NOT?: AlumnoClaseWhereInput | AlumnoClaseWhereInput[]
    id?: IntFilter<"AlumnoClase"> | number
    alumnoId?: IntFilter<"AlumnoClase"> | number
    claseId?: IntFilter<"AlumnoClase"> | number
    alumno?: XOR<AlumnoRelationFilter, AlumnoWhereInput>
    clase?: XOR<ClaseRelationFilter, ClaseWhereInput>
  }

  export type AlumnoClaseOrderByWithRelationInput = {
    id?: SortOrder
    alumnoId?: SortOrder
    claseId?: SortOrder
    alumno?: AlumnoOrderByWithRelationInput
    clase?: ClaseOrderByWithRelationInput
  }

  export type AlumnoClaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlumnoClaseWhereInput | AlumnoClaseWhereInput[]
    OR?: AlumnoClaseWhereInput[]
    NOT?: AlumnoClaseWhereInput | AlumnoClaseWhereInput[]
    alumnoId?: IntFilter<"AlumnoClase"> | number
    claseId?: IntFilter<"AlumnoClase"> | number
    alumno?: XOR<AlumnoRelationFilter, AlumnoWhereInput>
    clase?: XOR<ClaseRelationFilter, ClaseWhereInput>
  }, "id">

  export type AlumnoClaseOrderByWithAggregationInput = {
    id?: SortOrder
    alumnoId?: SortOrder
    claseId?: SortOrder
    _count?: AlumnoClaseCountOrderByAggregateInput
    _avg?: AlumnoClaseAvgOrderByAggregateInput
    _max?: AlumnoClaseMaxOrderByAggregateInput
    _min?: AlumnoClaseMinOrderByAggregateInput
    _sum?: AlumnoClaseSumOrderByAggregateInput
  }

  export type AlumnoClaseScalarWhereWithAggregatesInput = {
    AND?: AlumnoClaseScalarWhereWithAggregatesInput | AlumnoClaseScalarWhereWithAggregatesInput[]
    OR?: AlumnoClaseScalarWhereWithAggregatesInput[]
    NOT?: AlumnoClaseScalarWhereWithAggregatesInput | AlumnoClaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlumnoClase"> | number
    alumnoId?: IntWithAggregatesFilter<"AlumnoClase"> | number
    claseId?: IntWithAggregatesFilter<"AlumnoClase"> | number
  }

  export type PagosWhereInput = {
    AND?: PagosWhereInput | PagosWhereInput[]
    OR?: PagosWhereInput[]
    NOT?: PagosWhereInput | PagosWhereInput[]
    id?: IntFilter<"Pagos"> | number
    monto?: FloatFilter<"Pagos"> | number
    metodo?: StringFilter<"Pagos"> | string
    idAlumno?: IntFilter<"Pagos"> | number
    concepto?: StringFilter<"Pagos"> | string
    fecha?: StringFilter<"Pagos"> | string
    alumno?: XOR<AlumnoRelationFilter, AlumnoWhereInput>
  }

  export type PagosOrderByWithRelationInput = {
    id?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    idAlumno?: SortOrder
    concepto?: SortOrder
    fecha?: SortOrder
    alumno?: AlumnoOrderByWithRelationInput
  }

  export type PagosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PagosWhereInput | PagosWhereInput[]
    OR?: PagosWhereInput[]
    NOT?: PagosWhereInput | PagosWhereInput[]
    monto?: FloatFilter<"Pagos"> | number
    metodo?: StringFilter<"Pagos"> | string
    idAlumno?: IntFilter<"Pagos"> | number
    concepto?: StringFilter<"Pagos"> | string
    fecha?: StringFilter<"Pagos"> | string
    alumno?: XOR<AlumnoRelationFilter, AlumnoWhereInput>
  }, "id">

  export type PagosOrderByWithAggregationInput = {
    id?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    idAlumno?: SortOrder
    concepto?: SortOrder
    fecha?: SortOrder
    _count?: PagosCountOrderByAggregateInput
    _avg?: PagosAvgOrderByAggregateInput
    _max?: PagosMaxOrderByAggregateInput
    _min?: PagosMinOrderByAggregateInput
    _sum?: PagosSumOrderByAggregateInput
  }

  export type PagosScalarWhereWithAggregatesInput = {
    AND?: PagosScalarWhereWithAggregatesInput | PagosScalarWhereWithAggregatesInput[]
    OR?: PagosScalarWhereWithAggregatesInput[]
    NOT?: PagosScalarWhereWithAggregatesInput | PagosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pagos"> | number
    monto?: FloatWithAggregatesFilter<"Pagos"> | number
    metodo?: StringWithAggregatesFilter<"Pagos"> | string
    idAlumno?: IntWithAggregatesFilter<"Pagos"> | number
    concepto?: StringWithAggregatesFilter<"Pagos"> | string
    fecha?: StringWithAggregatesFilter<"Pagos"> | string
  }

  export type GastoWhereInput = {
    AND?: GastoWhereInput | GastoWhereInput[]
    OR?: GastoWhereInput[]
    NOT?: GastoWhereInput | GastoWhereInput[]
    id?: IntFilter<"Gasto"> | number
    idSucursal?: IntFilter<"Gasto"> | number
    titulo?: StringFilter<"Gasto"> | string
    decripcion?: StringNullableFilter<"Gasto"> | string | null
    monto?: FloatFilter<"Gasto"> | number
    concepto?: StringFilter<"Gasto"> | string
    fecha?: StringFilter<"Gasto"> | string
    sucursal?: XOR<SucursalRelationFilter, SucursalWhereInput>
  }

  export type GastoOrderByWithRelationInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    titulo?: SortOrder
    decripcion?: SortOrderInput | SortOrder
    monto?: SortOrder
    concepto?: SortOrder
    fecha?: SortOrder
    sucursal?: SucursalOrderByWithRelationInput
  }

  export type GastoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GastoWhereInput | GastoWhereInput[]
    OR?: GastoWhereInput[]
    NOT?: GastoWhereInput | GastoWhereInput[]
    idSucursal?: IntFilter<"Gasto"> | number
    titulo?: StringFilter<"Gasto"> | string
    decripcion?: StringNullableFilter<"Gasto"> | string | null
    monto?: FloatFilter<"Gasto"> | number
    concepto?: StringFilter<"Gasto"> | string
    fecha?: StringFilter<"Gasto"> | string
    sucursal?: XOR<SucursalRelationFilter, SucursalWhereInput>
  }, "id">

  export type GastoOrderByWithAggregationInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    titulo?: SortOrder
    decripcion?: SortOrderInput | SortOrder
    monto?: SortOrder
    concepto?: SortOrder
    fecha?: SortOrder
    _count?: GastoCountOrderByAggregateInput
    _avg?: GastoAvgOrderByAggregateInput
    _max?: GastoMaxOrderByAggregateInput
    _min?: GastoMinOrderByAggregateInput
    _sum?: GastoSumOrderByAggregateInput
  }

  export type GastoScalarWhereWithAggregatesInput = {
    AND?: GastoScalarWhereWithAggregatesInput | GastoScalarWhereWithAggregatesInput[]
    OR?: GastoScalarWhereWithAggregatesInput[]
    NOT?: GastoScalarWhereWithAggregatesInput | GastoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gasto"> | number
    idSucursal?: IntWithAggregatesFilter<"Gasto"> | number
    titulo?: StringWithAggregatesFilter<"Gasto"> | string
    decripcion?: StringNullableWithAggregatesFilter<"Gasto"> | string | null
    monto?: FloatWithAggregatesFilter<"Gasto"> | number
    concepto?: StringWithAggregatesFilter<"Gasto"> | string
    fecha?: StringWithAggregatesFilter<"Gasto"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nombre?: StringFilter<"User"> | string
    correo?: StringFilter<"User"> | string
    contrasena?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    correo?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    contrasena?: StringFilter<"User"> | string
  }, "id" | "nombre" | "correo">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nombre?: StringWithAggregatesFilter<"User"> | string
    correo?: StringWithAggregatesFilter<"User"> | string
    contrasena?: StringWithAggregatesFilter<"User"> | string
  }

  export type MasterKeyWhereInput = {
    AND?: MasterKeyWhereInput | MasterKeyWhereInput[]
    OR?: MasterKeyWhereInput[]
    NOT?: MasterKeyWhereInput | MasterKeyWhereInput[]
    value?: StringFilter<"MasterKey"> | string
  }

  export type MasterKeyOrderByWithRelationInput = {
    value?: SortOrder
  }

  export type MasterKeyWhereUniqueInput = Prisma.AtLeast<{
    value?: string
    AND?: MasterKeyWhereInput | MasterKeyWhereInput[]
    OR?: MasterKeyWhereInput[]
    NOT?: MasterKeyWhereInput | MasterKeyWhereInput[]
  }, "value">

  export type MasterKeyOrderByWithAggregationInput = {
    value?: SortOrder
    _count?: MasterKeyCountOrderByAggregateInput
    _max?: MasterKeyMaxOrderByAggregateInput
    _min?: MasterKeyMinOrderByAggregateInput
  }

  export type MasterKeyScalarWhereWithAggregatesInput = {
    AND?: MasterKeyScalarWhereWithAggregatesInput | MasterKeyScalarWhereWithAggregatesInput[]
    OR?: MasterKeyScalarWhereWithAggregatesInput[]
    NOT?: MasterKeyScalarWhereWithAggregatesInput | MasterKeyScalarWhereWithAggregatesInput[]
    value?: StringWithAggregatesFilter<"MasterKey"> | string
  }

  export type DocenteCreateInput = {
    nombre: string
    aPaterno: string
    aMaterno: string
    estado: string
    telefono: string
    curp: string
    clases?: ClaseCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUncheckedCreateInput = {
    id?: number
    nombre: string
    aPaterno: string
    aMaterno: string
    estado: string
    telefono: string
    curp: string
    clases?: ClaseUncheckedCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    clases?: ClaseUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    clases?: ClaseUncheckedUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
  }

  export type DocenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
  }

  export type SucursalCreateInput = {
    nombre: string
    direccion: string
    clases?: ClaseCreateNestedManyWithoutSucursalInput
    gastos?: GastoCreateNestedManyWithoutSucursalInput
  }

  export type SucursalUncheckedCreateInput = {
    id?: number
    nombre: string
    direccion: string
    clases?: ClaseUncheckedCreateNestedManyWithoutSucursalInput
    gastos?: GastoUncheckedCreateNestedManyWithoutSucursalInput
  }

  export type SucursalUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    clases?: ClaseUpdateManyWithoutSucursalNestedInput
    gastos?: GastoUpdateManyWithoutSucursalNestedInput
  }

  export type SucursalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    clases?: ClaseUncheckedUpdateManyWithoutSucursalNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutSucursalNestedInput
  }

  export type SucursalUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
  }

  export type SucursalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
  }

  export type ClaseCreateInput = {
    nombre: string
    cupoMax: number
    dias: string
    hora: string
    sucursal: SucursalCreateNestedOneWithoutClasesInput
    docente?: DocenteCreateNestedOneWithoutClasesInput
    alumnos?: AlumnoClaseCreateNestedManyWithoutClaseInput
  }

  export type ClaseUncheckedCreateInput = {
    id?: number
    idSucursal: number
    idDocente?: number | null
    nombre: string
    cupoMax: number
    dias: string
    hora: string
    alumnos?: AlumnoClaseUncheckedCreateNestedManyWithoutClaseInput
  }

  export type ClaseUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cupoMax?: IntFieldUpdateOperationsInput | number
    dias?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
    sucursal?: SucursalUpdateOneRequiredWithoutClasesNestedInput
    docente?: DocenteUpdateOneWithoutClasesNestedInput
    alumnos?: AlumnoClaseUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idSucursal?: IntFieldUpdateOperationsInput | number
    idDocente?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    cupoMax?: IntFieldUpdateOperationsInput | number
    dias?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
    alumnos?: AlumnoClaseUncheckedUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cupoMax?: IntFieldUpdateOperationsInput | number
    dias?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
  }

  export type ClaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idSucursal?: IntFieldUpdateOperationsInput | number
    idDocente?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    cupoMax?: IntFieldUpdateOperationsInput | number
    dias?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
  }

  export type AlumnoCreateInput = {
    nombre: string
    aPaterno: string
    aMaterno: string
    tutor: string
    contacto: string
    edad: number
    activo: boolean
    clases?: AlumnoClaseCreateNestedManyWithoutAlumnoInput
    pagos?: PagosCreateNestedManyWithoutAlumnoInput
  }

  export type AlumnoUncheckedCreateInput = {
    id?: number
    nombre: string
    aPaterno: string
    aMaterno: string
    tutor: string
    contacto: string
    edad: number
    activo: boolean
    clases?: AlumnoClaseUncheckedCreateNestedManyWithoutAlumnoInput
    pagos?: PagosUncheckedCreateNestedManyWithoutAlumnoInput
  }

  export type AlumnoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    tutor?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    clases?: AlumnoClaseUpdateManyWithoutAlumnoNestedInput
    pagos?: PagosUpdateManyWithoutAlumnoNestedInput
  }

  export type AlumnoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    tutor?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    clases?: AlumnoClaseUncheckedUpdateManyWithoutAlumnoNestedInput
    pagos?: PagosUncheckedUpdateManyWithoutAlumnoNestedInput
  }

  export type AlumnoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    tutor?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlumnoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    tutor?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlumnoClaseCreateInput = {
    alumno: AlumnoCreateNestedOneWithoutClasesInput
    clase: ClaseCreateNestedOneWithoutAlumnosInput
  }

  export type AlumnoClaseUncheckedCreateInput = {
    id?: number
    alumnoId: number
    claseId: number
  }

  export type AlumnoClaseUpdateInput = {
    alumno?: AlumnoUpdateOneRequiredWithoutClasesNestedInput
    clase?: ClaseUpdateOneRequiredWithoutAlumnosNestedInput
  }

  export type AlumnoClaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alumnoId?: IntFieldUpdateOperationsInput | number
    claseId?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoClaseUpdateManyMutationInput = {

  }

  export type AlumnoClaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alumnoId?: IntFieldUpdateOperationsInput | number
    claseId?: IntFieldUpdateOperationsInput | number
  }

  export type PagosCreateInput = {
    monto: number
    metodo: string
    concepto: string
    fecha: string
    alumno: AlumnoCreateNestedOneWithoutPagosInput
  }

  export type PagosUncheckedCreateInput = {
    id?: number
    monto: number
    metodo: string
    idAlumno: number
    concepto: string
    fecha: string
  }

  export type PagosUpdateInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
    alumno?: AlumnoUpdateOneRequiredWithoutPagosNestedInput
  }

  export type PagosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    idAlumno?: IntFieldUpdateOperationsInput | number
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
  }

  export type PagosUpdateManyMutationInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
  }

  export type PagosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    idAlumno?: IntFieldUpdateOperationsInput | number
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
  }

  export type GastoCreateInput = {
    titulo: string
    decripcion?: string | null
    monto: number
    concepto: string
    fecha: string
    sucursal: SucursalCreateNestedOneWithoutGastosInput
  }

  export type GastoUncheckedCreateInput = {
    id?: number
    idSucursal: number
    titulo: string
    decripcion?: string | null
    monto: number
    concepto: string
    fecha: string
  }

  export type GastoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    decripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
    sucursal?: SucursalUpdateOneRequiredWithoutGastosNestedInput
  }

  export type GastoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idSucursal?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    decripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
  }

  export type GastoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    decripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
  }

  export type GastoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idSucursal?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    decripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    nombre: string
    correo: string
    contrasena: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nombre: string
    correo: string
    contrasena: string
  }

  export type UserUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type MasterKeyCreateInput = {
    value: string
  }

  export type MasterKeyUncheckedCreateInput = {
    value: string
  }

  export type MasterKeyUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MasterKeyUncheckedUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MasterKeyUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MasterKeyUncheckedUpdateManyInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ClaseListRelationFilter = {
    every?: ClaseWhereInput
    some?: ClaseWhereInput
    none?: ClaseWhereInput
  }

  export type ClaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocenteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    aPaterno?: SortOrder
    aMaterno?: SortOrder
    estado?: SortOrder
    telefono?: SortOrder
    curp?: SortOrder
  }

  export type DocenteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocenteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    aPaterno?: SortOrder
    aMaterno?: SortOrder
    estado?: SortOrder
    telefono?: SortOrder
    curp?: SortOrder
  }

  export type DocenteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    aPaterno?: SortOrder
    aMaterno?: SortOrder
    estado?: SortOrder
    telefono?: SortOrder
    curp?: SortOrder
  }

  export type DocenteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type GastoListRelationFilter = {
    every?: GastoWhereInput
    some?: GastoWhereInput
    none?: GastoWhereInput
  }

  export type GastoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SucursalCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type SucursalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SucursalMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type SucursalMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type SucursalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SucursalRelationFilter = {
    is?: SucursalWhereInput
    isNot?: SucursalWhereInput
  }

  export type DocenteNullableRelationFilter = {
    is?: DocenteWhereInput | null
    isNot?: DocenteWhereInput | null
  }

  export type AlumnoClaseListRelationFilter = {
    every?: AlumnoClaseWhereInput
    some?: AlumnoClaseWhereInput
    none?: AlumnoClaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AlumnoClaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClaseCountOrderByAggregateInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    idDocente?: SortOrder
    nombre?: SortOrder
    cupoMax?: SortOrder
    dias?: SortOrder
    hora?: SortOrder
  }

  export type ClaseAvgOrderByAggregateInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    idDocente?: SortOrder
    cupoMax?: SortOrder
  }

  export type ClaseMaxOrderByAggregateInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    idDocente?: SortOrder
    nombre?: SortOrder
    cupoMax?: SortOrder
    dias?: SortOrder
    hora?: SortOrder
  }

  export type ClaseMinOrderByAggregateInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    idDocente?: SortOrder
    nombre?: SortOrder
    cupoMax?: SortOrder
    dias?: SortOrder
    hora?: SortOrder
  }

  export type ClaseSumOrderByAggregateInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    idDocente?: SortOrder
    cupoMax?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PagosListRelationFilter = {
    every?: PagosWhereInput
    some?: PagosWhereInput
    none?: PagosWhereInput
  }

  export type PagosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlumnoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    aPaterno?: SortOrder
    aMaterno?: SortOrder
    tutor?: SortOrder
    contacto?: SortOrder
    edad?: SortOrder
    activo?: SortOrder
  }

  export type AlumnoAvgOrderByAggregateInput = {
    id?: SortOrder
    edad?: SortOrder
  }

  export type AlumnoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    aPaterno?: SortOrder
    aMaterno?: SortOrder
    tutor?: SortOrder
    contacto?: SortOrder
    edad?: SortOrder
    activo?: SortOrder
  }

  export type AlumnoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    aPaterno?: SortOrder
    aMaterno?: SortOrder
    tutor?: SortOrder
    contacto?: SortOrder
    edad?: SortOrder
    activo?: SortOrder
  }

  export type AlumnoSumOrderByAggregateInput = {
    id?: SortOrder
    edad?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AlumnoRelationFilter = {
    is?: AlumnoWhereInput
    isNot?: AlumnoWhereInput
  }

  export type ClaseRelationFilter = {
    is?: ClaseWhereInput
    isNot?: ClaseWhereInput
  }

  export type AlumnoClaseCountOrderByAggregateInput = {
    id?: SortOrder
    alumnoId?: SortOrder
    claseId?: SortOrder
  }

  export type AlumnoClaseAvgOrderByAggregateInput = {
    id?: SortOrder
    alumnoId?: SortOrder
    claseId?: SortOrder
  }

  export type AlumnoClaseMaxOrderByAggregateInput = {
    id?: SortOrder
    alumnoId?: SortOrder
    claseId?: SortOrder
  }

  export type AlumnoClaseMinOrderByAggregateInput = {
    id?: SortOrder
    alumnoId?: SortOrder
    claseId?: SortOrder
  }

  export type AlumnoClaseSumOrderByAggregateInput = {
    id?: SortOrder
    alumnoId?: SortOrder
    claseId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PagosCountOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    idAlumno?: SortOrder
    concepto?: SortOrder
    fecha?: SortOrder
  }

  export type PagosAvgOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    idAlumno?: SortOrder
  }

  export type PagosMaxOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    idAlumno?: SortOrder
    concepto?: SortOrder
    fecha?: SortOrder
  }

  export type PagosMinOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    idAlumno?: SortOrder
    concepto?: SortOrder
    fecha?: SortOrder
  }

  export type PagosSumOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    idAlumno?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GastoCountOrderByAggregateInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    titulo?: SortOrder
    decripcion?: SortOrder
    monto?: SortOrder
    concepto?: SortOrder
    fecha?: SortOrder
  }

  export type GastoAvgOrderByAggregateInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    monto?: SortOrder
  }

  export type GastoMaxOrderByAggregateInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    titulo?: SortOrder
    decripcion?: SortOrder
    monto?: SortOrder
    concepto?: SortOrder
    fecha?: SortOrder
  }

  export type GastoMinOrderByAggregateInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    titulo?: SortOrder
    decripcion?: SortOrder
    monto?: SortOrder
    concepto?: SortOrder
    fecha?: SortOrder
  }

  export type GastoSumOrderByAggregateInput = {
    id?: SortOrder
    idSucursal?: SortOrder
    monto?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MasterKeyCountOrderByAggregateInput = {
    value?: SortOrder
  }

  export type MasterKeyMaxOrderByAggregateInput = {
    value?: SortOrder
  }

  export type MasterKeyMinOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ClaseCreateNestedManyWithoutDocenteInput = {
    create?: XOR<ClaseCreateWithoutDocenteInput, ClaseUncheckedCreateWithoutDocenteInput> | ClaseCreateWithoutDocenteInput[] | ClaseUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutDocenteInput | ClaseCreateOrConnectWithoutDocenteInput[]
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
  }

  export type ClaseUncheckedCreateNestedManyWithoutDocenteInput = {
    create?: XOR<ClaseCreateWithoutDocenteInput, ClaseUncheckedCreateWithoutDocenteInput> | ClaseCreateWithoutDocenteInput[] | ClaseUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutDocenteInput | ClaseCreateOrConnectWithoutDocenteInput[]
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ClaseUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<ClaseCreateWithoutDocenteInput, ClaseUncheckedCreateWithoutDocenteInput> | ClaseCreateWithoutDocenteInput[] | ClaseUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutDocenteInput | ClaseCreateOrConnectWithoutDocenteInput[]
    upsert?: ClaseUpsertWithWhereUniqueWithoutDocenteInput | ClaseUpsertWithWhereUniqueWithoutDocenteInput[]
    set?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    disconnect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    delete?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    update?: ClaseUpdateWithWhereUniqueWithoutDocenteInput | ClaseUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: ClaseUpdateManyWithWhereWithoutDocenteInput | ClaseUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: ClaseScalarWhereInput | ClaseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClaseUncheckedUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<ClaseCreateWithoutDocenteInput, ClaseUncheckedCreateWithoutDocenteInput> | ClaseCreateWithoutDocenteInput[] | ClaseUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutDocenteInput | ClaseCreateOrConnectWithoutDocenteInput[]
    upsert?: ClaseUpsertWithWhereUniqueWithoutDocenteInput | ClaseUpsertWithWhereUniqueWithoutDocenteInput[]
    set?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    disconnect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    delete?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    update?: ClaseUpdateWithWhereUniqueWithoutDocenteInput | ClaseUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: ClaseUpdateManyWithWhereWithoutDocenteInput | ClaseUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: ClaseScalarWhereInput | ClaseScalarWhereInput[]
  }

  export type ClaseCreateNestedManyWithoutSucursalInput = {
    create?: XOR<ClaseCreateWithoutSucursalInput, ClaseUncheckedCreateWithoutSucursalInput> | ClaseCreateWithoutSucursalInput[] | ClaseUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutSucursalInput | ClaseCreateOrConnectWithoutSucursalInput[]
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
  }

  export type GastoCreateNestedManyWithoutSucursalInput = {
    create?: XOR<GastoCreateWithoutSucursalInput, GastoUncheckedCreateWithoutSucursalInput> | GastoCreateWithoutSucursalInput[] | GastoUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutSucursalInput | GastoCreateOrConnectWithoutSucursalInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type ClaseUncheckedCreateNestedManyWithoutSucursalInput = {
    create?: XOR<ClaseCreateWithoutSucursalInput, ClaseUncheckedCreateWithoutSucursalInput> | ClaseCreateWithoutSucursalInput[] | ClaseUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutSucursalInput | ClaseCreateOrConnectWithoutSucursalInput[]
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
  }

  export type GastoUncheckedCreateNestedManyWithoutSucursalInput = {
    create?: XOR<GastoCreateWithoutSucursalInput, GastoUncheckedCreateWithoutSucursalInput> | GastoCreateWithoutSucursalInput[] | GastoUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutSucursalInput | GastoCreateOrConnectWithoutSucursalInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type ClaseUpdateManyWithoutSucursalNestedInput = {
    create?: XOR<ClaseCreateWithoutSucursalInput, ClaseUncheckedCreateWithoutSucursalInput> | ClaseCreateWithoutSucursalInput[] | ClaseUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutSucursalInput | ClaseCreateOrConnectWithoutSucursalInput[]
    upsert?: ClaseUpsertWithWhereUniqueWithoutSucursalInput | ClaseUpsertWithWhereUniqueWithoutSucursalInput[]
    set?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    disconnect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    delete?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    update?: ClaseUpdateWithWhereUniqueWithoutSucursalInput | ClaseUpdateWithWhereUniqueWithoutSucursalInput[]
    updateMany?: ClaseUpdateManyWithWhereWithoutSucursalInput | ClaseUpdateManyWithWhereWithoutSucursalInput[]
    deleteMany?: ClaseScalarWhereInput | ClaseScalarWhereInput[]
  }

  export type GastoUpdateManyWithoutSucursalNestedInput = {
    create?: XOR<GastoCreateWithoutSucursalInput, GastoUncheckedCreateWithoutSucursalInput> | GastoCreateWithoutSucursalInput[] | GastoUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutSucursalInput | GastoCreateOrConnectWithoutSucursalInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutSucursalInput | GastoUpsertWithWhereUniqueWithoutSucursalInput[]
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutSucursalInput | GastoUpdateWithWhereUniqueWithoutSucursalInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutSucursalInput | GastoUpdateManyWithWhereWithoutSucursalInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type ClaseUncheckedUpdateManyWithoutSucursalNestedInput = {
    create?: XOR<ClaseCreateWithoutSucursalInput, ClaseUncheckedCreateWithoutSucursalInput> | ClaseCreateWithoutSucursalInput[] | ClaseUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutSucursalInput | ClaseCreateOrConnectWithoutSucursalInput[]
    upsert?: ClaseUpsertWithWhereUniqueWithoutSucursalInput | ClaseUpsertWithWhereUniqueWithoutSucursalInput[]
    set?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    disconnect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    delete?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    update?: ClaseUpdateWithWhereUniqueWithoutSucursalInput | ClaseUpdateWithWhereUniqueWithoutSucursalInput[]
    updateMany?: ClaseUpdateManyWithWhereWithoutSucursalInput | ClaseUpdateManyWithWhereWithoutSucursalInput[]
    deleteMany?: ClaseScalarWhereInput | ClaseScalarWhereInput[]
  }

  export type GastoUncheckedUpdateManyWithoutSucursalNestedInput = {
    create?: XOR<GastoCreateWithoutSucursalInput, GastoUncheckedCreateWithoutSucursalInput> | GastoCreateWithoutSucursalInput[] | GastoUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutSucursalInput | GastoCreateOrConnectWithoutSucursalInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutSucursalInput | GastoUpsertWithWhereUniqueWithoutSucursalInput[]
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutSucursalInput | GastoUpdateWithWhereUniqueWithoutSucursalInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutSucursalInput | GastoUpdateManyWithWhereWithoutSucursalInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type SucursalCreateNestedOneWithoutClasesInput = {
    create?: XOR<SucursalCreateWithoutClasesInput, SucursalUncheckedCreateWithoutClasesInput>
    connectOrCreate?: SucursalCreateOrConnectWithoutClasesInput
    connect?: SucursalWhereUniqueInput
  }

  export type DocenteCreateNestedOneWithoutClasesInput = {
    create?: XOR<DocenteCreateWithoutClasesInput, DocenteUncheckedCreateWithoutClasesInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutClasesInput
    connect?: DocenteWhereUniqueInput
  }

  export type AlumnoClaseCreateNestedManyWithoutClaseInput = {
    create?: XOR<AlumnoClaseCreateWithoutClaseInput, AlumnoClaseUncheckedCreateWithoutClaseInput> | AlumnoClaseCreateWithoutClaseInput[] | AlumnoClaseUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AlumnoClaseCreateOrConnectWithoutClaseInput | AlumnoClaseCreateOrConnectWithoutClaseInput[]
    connect?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
  }

  export type AlumnoClaseUncheckedCreateNestedManyWithoutClaseInput = {
    create?: XOR<AlumnoClaseCreateWithoutClaseInput, AlumnoClaseUncheckedCreateWithoutClaseInput> | AlumnoClaseCreateWithoutClaseInput[] | AlumnoClaseUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AlumnoClaseCreateOrConnectWithoutClaseInput | AlumnoClaseCreateOrConnectWithoutClaseInput[]
    connect?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
  }

  export type SucursalUpdateOneRequiredWithoutClasesNestedInput = {
    create?: XOR<SucursalCreateWithoutClasesInput, SucursalUncheckedCreateWithoutClasesInput>
    connectOrCreate?: SucursalCreateOrConnectWithoutClasesInput
    upsert?: SucursalUpsertWithoutClasesInput
    connect?: SucursalWhereUniqueInput
    update?: XOR<XOR<SucursalUpdateToOneWithWhereWithoutClasesInput, SucursalUpdateWithoutClasesInput>, SucursalUncheckedUpdateWithoutClasesInput>
  }

  export type DocenteUpdateOneWithoutClasesNestedInput = {
    create?: XOR<DocenteCreateWithoutClasesInput, DocenteUncheckedCreateWithoutClasesInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutClasesInput
    upsert?: DocenteUpsertWithoutClasesInput
    disconnect?: DocenteWhereInput | boolean
    delete?: DocenteWhereInput | boolean
    connect?: DocenteWhereUniqueInput
    update?: XOR<XOR<DocenteUpdateToOneWithWhereWithoutClasesInput, DocenteUpdateWithoutClasesInput>, DocenteUncheckedUpdateWithoutClasesInput>
  }

  export type AlumnoClaseUpdateManyWithoutClaseNestedInput = {
    create?: XOR<AlumnoClaseCreateWithoutClaseInput, AlumnoClaseUncheckedCreateWithoutClaseInput> | AlumnoClaseCreateWithoutClaseInput[] | AlumnoClaseUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AlumnoClaseCreateOrConnectWithoutClaseInput | AlumnoClaseCreateOrConnectWithoutClaseInput[]
    upsert?: AlumnoClaseUpsertWithWhereUniqueWithoutClaseInput | AlumnoClaseUpsertWithWhereUniqueWithoutClaseInput[]
    set?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    disconnect?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    delete?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    connect?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    update?: AlumnoClaseUpdateWithWhereUniqueWithoutClaseInput | AlumnoClaseUpdateWithWhereUniqueWithoutClaseInput[]
    updateMany?: AlumnoClaseUpdateManyWithWhereWithoutClaseInput | AlumnoClaseUpdateManyWithWhereWithoutClaseInput[]
    deleteMany?: AlumnoClaseScalarWhereInput | AlumnoClaseScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlumnoClaseUncheckedUpdateManyWithoutClaseNestedInput = {
    create?: XOR<AlumnoClaseCreateWithoutClaseInput, AlumnoClaseUncheckedCreateWithoutClaseInput> | AlumnoClaseCreateWithoutClaseInput[] | AlumnoClaseUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AlumnoClaseCreateOrConnectWithoutClaseInput | AlumnoClaseCreateOrConnectWithoutClaseInput[]
    upsert?: AlumnoClaseUpsertWithWhereUniqueWithoutClaseInput | AlumnoClaseUpsertWithWhereUniqueWithoutClaseInput[]
    set?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    disconnect?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    delete?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    connect?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    update?: AlumnoClaseUpdateWithWhereUniqueWithoutClaseInput | AlumnoClaseUpdateWithWhereUniqueWithoutClaseInput[]
    updateMany?: AlumnoClaseUpdateManyWithWhereWithoutClaseInput | AlumnoClaseUpdateManyWithWhereWithoutClaseInput[]
    deleteMany?: AlumnoClaseScalarWhereInput | AlumnoClaseScalarWhereInput[]
  }

  export type AlumnoClaseCreateNestedManyWithoutAlumnoInput = {
    create?: XOR<AlumnoClaseCreateWithoutAlumnoInput, AlumnoClaseUncheckedCreateWithoutAlumnoInput> | AlumnoClaseCreateWithoutAlumnoInput[] | AlumnoClaseUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AlumnoClaseCreateOrConnectWithoutAlumnoInput | AlumnoClaseCreateOrConnectWithoutAlumnoInput[]
    connect?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
  }

  export type PagosCreateNestedManyWithoutAlumnoInput = {
    create?: XOR<PagosCreateWithoutAlumnoInput, PagosUncheckedCreateWithoutAlumnoInput> | PagosCreateWithoutAlumnoInput[] | PagosUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: PagosCreateOrConnectWithoutAlumnoInput | PagosCreateOrConnectWithoutAlumnoInput[]
    connect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
  }

  export type AlumnoClaseUncheckedCreateNestedManyWithoutAlumnoInput = {
    create?: XOR<AlumnoClaseCreateWithoutAlumnoInput, AlumnoClaseUncheckedCreateWithoutAlumnoInput> | AlumnoClaseCreateWithoutAlumnoInput[] | AlumnoClaseUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AlumnoClaseCreateOrConnectWithoutAlumnoInput | AlumnoClaseCreateOrConnectWithoutAlumnoInput[]
    connect?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
  }

  export type PagosUncheckedCreateNestedManyWithoutAlumnoInput = {
    create?: XOR<PagosCreateWithoutAlumnoInput, PagosUncheckedCreateWithoutAlumnoInput> | PagosCreateWithoutAlumnoInput[] | PagosUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: PagosCreateOrConnectWithoutAlumnoInput | PagosCreateOrConnectWithoutAlumnoInput[]
    connect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AlumnoClaseUpdateManyWithoutAlumnoNestedInput = {
    create?: XOR<AlumnoClaseCreateWithoutAlumnoInput, AlumnoClaseUncheckedCreateWithoutAlumnoInput> | AlumnoClaseCreateWithoutAlumnoInput[] | AlumnoClaseUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AlumnoClaseCreateOrConnectWithoutAlumnoInput | AlumnoClaseCreateOrConnectWithoutAlumnoInput[]
    upsert?: AlumnoClaseUpsertWithWhereUniqueWithoutAlumnoInput | AlumnoClaseUpsertWithWhereUniqueWithoutAlumnoInput[]
    set?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    disconnect?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    delete?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    connect?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    update?: AlumnoClaseUpdateWithWhereUniqueWithoutAlumnoInput | AlumnoClaseUpdateWithWhereUniqueWithoutAlumnoInput[]
    updateMany?: AlumnoClaseUpdateManyWithWhereWithoutAlumnoInput | AlumnoClaseUpdateManyWithWhereWithoutAlumnoInput[]
    deleteMany?: AlumnoClaseScalarWhereInput | AlumnoClaseScalarWhereInput[]
  }

  export type PagosUpdateManyWithoutAlumnoNestedInput = {
    create?: XOR<PagosCreateWithoutAlumnoInput, PagosUncheckedCreateWithoutAlumnoInput> | PagosCreateWithoutAlumnoInput[] | PagosUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: PagosCreateOrConnectWithoutAlumnoInput | PagosCreateOrConnectWithoutAlumnoInput[]
    upsert?: PagosUpsertWithWhereUniqueWithoutAlumnoInput | PagosUpsertWithWhereUniqueWithoutAlumnoInput[]
    set?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    disconnect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    delete?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    connect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    update?: PagosUpdateWithWhereUniqueWithoutAlumnoInput | PagosUpdateWithWhereUniqueWithoutAlumnoInput[]
    updateMany?: PagosUpdateManyWithWhereWithoutAlumnoInput | PagosUpdateManyWithWhereWithoutAlumnoInput[]
    deleteMany?: PagosScalarWhereInput | PagosScalarWhereInput[]
  }

  export type AlumnoClaseUncheckedUpdateManyWithoutAlumnoNestedInput = {
    create?: XOR<AlumnoClaseCreateWithoutAlumnoInput, AlumnoClaseUncheckedCreateWithoutAlumnoInput> | AlumnoClaseCreateWithoutAlumnoInput[] | AlumnoClaseUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AlumnoClaseCreateOrConnectWithoutAlumnoInput | AlumnoClaseCreateOrConnectWithoutAlumnoInput[]
    upsert?: AlumnoClaseUpsertWithWhereUniqueWithoutAlumnoInput | AlumnoClaseUpsertWithWhereUniqueWithoutAlumnoInput[]
    set?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    disconnect?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    delete?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    connect?: AlumnoClaseWhereUniqueInput | AlumnoClaseWhereUniqueInput[]
    update?: AlumnoClaseUpdateWithWhereUniqueWithoutAlumnoInput | AlumnoClaseUpdateWithWhereUniqueWithoutAlumnoInput[]
    updateMany?: AlumnoClaseUpdateManyWithWhereWithoutAlumnoInput | AlumnoClaseUpdateManyWithWhereWithoutAlumnoInput[]
    deleteMany?: AlumnoClaseScalarWhereInput | AlumnoClaseScalarWhereInput[]
  }

  export type PagosUncheckedUpdateManyWithoutAlumnoNestedInput = {
    create?: XOR<PagosCreateWithoutAlumnoInput, PagosUncheckedCreateWithoutAlumnoInput> | PagosCreateWithoutAlumnoInput[] | PagosUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: PagosCreateOrConnectWithoutAlumnoInput | PagosCreateOrConnectWithoutAlumnoInput[]
    upsert?: PagosUpsertWithWhereUniqueWithoutAlumnoInput | PagosUpsertWithWhereUniqueWithoutAlumnoInput[]
    set?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    disconnect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    delete?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    connect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    update?: PagosUpdateWithWhereUniqueWithoutAlumnoInput | PagosUpdateWithWhereUniqueWithoutAlumnoInput[]
    updateMany?: PagosUpdateManyWithWhereWithoutAlumnoInput | PagosUpdateManyWithWhereWithoutAlumnoInput[]
    deleteMany?: PagosScalarWhereInput | PagosScalarWhereInput[]
  }

  export type AlumnoCreateNestedOneWithoutClasesInput = {
    create?: XOR<AlumnoCreateWithoutClasesInput, AlumnoUncheckedCreateWithoutClasesInput>
    connectOrCreate?: AlumnoCreateOrConnectWithoutClasesInput
    connect?: AlumnoWhereUniqueInput
  }

  export type ClaseCreateNestedOneWithoutAlumnosInput = {
    create?: XOR<ClaseCreateWithoutAlumnosInput, ClaseUncheckedCreateWithoutAlumnosInput>
    connectOrCreate?: ClaseCreateOrConnectWithoutAlumnosInput
    connect?: ClaseWhereUniqueInput
  }

  export type AlumnoUpdateOneRequiredWithoutClasesNestedInput = {
    create?: XOR<AlumnoCreateWithoutClasesInput, AlumnoUncheckedCreateWithoutClasesInput>
    connectOrCreate?: AlumnoCreateOrConnectWithoutClasesInput
    upsert?: AlumnoUpsertWithoutClasesInput
    connect?: AlumnoWhereUniqueInput
    update?: XOR<XOR<AlumnoUpdateToOneWithWhereWithoutClasesInput, AlumnoUpdateWithoutClasesInput>, AlumnoUncheckedUpdateWithoutClasesInput>
  }

  export type ClaseUpdateOneRequiredWithoutAlumnosNestedInput = {
    create?: XOR<ClaseCreateWithoutAlumnosInput, ClaseUncheckedCreateWithoutAlumnosInput>
    connectOrCreate?: ClaseCreateOrConnectWithoutAlumnosInput
    upsert?: ClaseUpsertWithoutAlumnosInput
    connect?: ClaseWhereUniqueInput
    update?: XOR<XOR<ClaseUpdateToOneWithWhereWithoutAlumnosInput, ClaseUpdateWithoutAlumnosInput>, ClaseUncheckedUpdateWithoutAlumnosInput>
  }

  export type AlumnoCreateNestedOneWithoutPagosInput = {
    create?: XOR<AlumnoCreateWithoutPagosInput, AlumnoUncheckedCreateWithoutPagosInput>
    connectOrCreate?: AlumnoCreateOrConnectWithoutPagosInput
    connect?: AlumnoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlumnoUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<AlumnoCreateWithoutPagosInput, AlumnoUncheckedCreateWithoutPagosInput>
    connectOrCreate?: AlumnoCreateOrConnectWithoutPagosInput
    upsert?: AlumnoUpsertWithoutPagosInput
    connect?: AlumnoWhereUniqueInput
    update?: XOR<XOR<AlumnoUpdateToOneWithWhereWithoutPagosInput, AlumnoUpdateWithoutPagosInput>, AlumnoUncheckedUpdateWithoutPagosInput>
  }

  export type SucursalCreateNestedOneWithoutGastosInput = {
    create?: XOR<SucursalCreateWithoutGastosInput, SucursalUncheckedCreateWithoutGastosInput>
    connectOrCreate?: SucursalCreateOrConnectWithoutGastosInput
    connect?: SucursalWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SucursalUpdateOneRequiredWithoutGastosNestedInput = {
    create?: XOR<SucursalCreateWithoutGastosInput, SucursalUncheckedCreateWithoutGastosInput>
    connectOrCreate?: SucursalCreateOrConnectWithoutGastosInput
    upsert?: SucursalUpsertWithoutGastosInput
    connect?: SucursalWhereUniqueInput
    update?: XOR<XOR<SucursalUpdateToOneWithWhereWithoutGastosInput, SucursalUpdateWithoutGastosInput>, SucursalUncheckedUpdateWithoutGastosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ClaseCreateWithoutDocenteInput = {
    nombre: string
    cupoMax: number
    dias: string
    hora: string
    sucursal: SucursalCreateNestedOneWithoutClasesInput
    alumnos?: AlumnoClaseCreateNestedManyWithoutClaseInput
  }

  export type ClaseUncheckedCreateWithoutDocenteInput = {
    id?: number
    idSucursal: number
    nombre: string
    cupoMax: number
    dias: string
    hora: string
    alumnos?: AlumnoClaseUncheckedCreateNestedManyWithoutClaseInput
  }

  export type ClaseCreateOrConnectWithoutDocenteInput = {
    where: ClaseWhereUniqueInput
    create: XOR<ClaseCreateWithoutDocenteInput, ClaseUncheckedCreateWithoutDocenteInput>
  }

  export type ClaseUpsertWithWhereUniqueWithoutDocenteInput = {
    where: ClaseWhereUniqueInput
    update: XOR<ClaseUpdateWithoutDocenteInput, ClaseUncheckedUpdateWithoutDocenteInput>
    create: XOR<ClaseCreateWithoutDocenteInput, ClaseUncheckedCreateWithoutDocenteInput>
  }

  export type ClaseUpdateWithWhereUniqueWithoutDocenteInput = {
    where: ClaseWhereUniqueInput
    data: XOR<ClaseUpdateWithoutDocenteInput, ClaseUncheckedUpdateWithoutDocenteInput>
  }

  export type ClaseUpdateManyWithWhereWithoutDocenteInput = {
    where: ClaseScalarWhereInput
    data: XOR<ClaseUpdateManyMutationInput, ClaseUncheckedUpdateManyWithoutDocenteInput>
  }

  export type ClaseScalarWhereInput = {
    AND?: ClaseScalarWhereInput | ClaseScalarWhereInput[]
    OR?: ClaseScalarWhereInput[]
    NOT?: ClaseScalarWhereInput | ClaseScalarWhereInput[]
    id?: IntFilter<"Clase"> | number
    idSucursal?: IntFilter<"Clase"> | number
    idDocente?: IntNullableFilter<"Clase"> | number | null
    nombre?: StringFilter<"Clase"> | string
    cupoMax?: IntFilter<"Clase"> | number
    dias?: StringFilter<"Clase"> | string
    hora?: StringFilter<"Clase"> | string
  }

  export type ClaseCreateWithoutSucursalInput = {
    nombre: string
    cupoMax: number
    dias: string
    hora: string
    docente?: DocenteCreateNestedOneWithoutClasesInput
    alumnos?: AlumnoClaseCreateNestedManyWithoutClaseInput
  }

  export type ClaseUncheckedCreateWithoutSucursalInput = {
    id?: number
    idDocente?: number | null
    nombre: string
    cupoMax: number
    dias: string
    hora: string
    alumnos?: AlumnoClaseUncheckedCreateNestedManyWithoutClaseInput
  }

  export type ClaseCreateOrConnectWithoutSucursalInput = {
    where: ClaseWhereUniqueInput
    create: XOR<ClaseCreateWithoutSucursalInput, ClaseUncheckedCreateWithoutSucursalInput>
  }

  export type GastoCreateWithoutSucursalInput = {
    titulo: string
    decripcion?: string | null
    monto: number
    concepto: string
    fecha: string
  }

  export type GastoUncheckedCreateWithoutSucursalInput = {
    id?: number
    titulo: string
    decripcion?: string | null
    monto: number
    concepto: string
    fecha: string
  }

  export type GastoCreateOrConnectWithoutSucursalInput = {
    where: GastoWhereUniqueInput
    create: XOR<GastoCreateWithoutSucursalInput, GastoUncheckedCreateWithoutSucursalInput>
  }

  export type ClaseUpsertWithWhereUniqueWithoutSucursalInput = {
    where: ClaseWhereUniqueInput
    update: XOR<ClaseUpdateWithoutSucursalInput, ClaseUncheckedUpdateWithoutSucursalInput>
    create: XOR<ClaseCreateWithoutSucursalInput, ClaseUncheckedCreateWithoutSucursalInput>
  }

  export type ClaseUpdateWithWhereUniqueWithoutSucursalInput = {
    where: ClaseWhereUniqueInput
    data: XOR<ClaseUpdateWithoutSucursalInput, ClaseUncheckedUpdateWithoutSucursalInput>
  }

  export type ClaseUpdateManyWithWhereWithoutSucursalInput = {
    where: ClaseScalarWhereInput
    data: XOR<ClaseUpdateManyMutationInput, ClaseUncheckedUpdateManyWithoutSucursalInput>
  }

  export type GastoUpsertWithWhereUniqueWithoutSucursalInput = {
    where: GastoWhereUniqueInput
    update: XOR<GastoUpdateWithoutSucursalInput, GastoUncheckedUpdateWithoutSucursalInput>
    create: XOR<GastoCreateWithoutSucursalInput, GastoUncheckedCreateWithoutSucursalInput>
  }

  export type GastoUpdateWithWhereUniqueWithoutSucursalInput = {
    where: GastoWhereUniqueInput
    data: XOR<GastoUpdateWithoutSucursalInput, GastoUncheckedUpdateWithoutSucursalInput>
  }

  export type GastoUpdateManyWithWhereWithoutSucursalInput = {
    where: GastoScalarWhereInput
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyWithoutSucursalInput>
  }

  export type GastoScalarWhereInput = {
    AND?: GastoScalarWhereInput | GastoScalarWhereInput[]
    OR?: GastoScalarWhereInput[]
    NOT?: GastoScalarWhereInput | GastoScalarWhereInput[]
    id?: IntFilter<"Gasto"> | number
    idSucursal?: IntFilter<"Gasto"> | number
    titulo?: StringFilter<"Gasto"> | string
    decripcion?: StringNullableFilter<"Gasto"> | string | null
    monto?: FloatFilter<"Gasto"> | number
    concepto?: StringFilter<"Gasto"> | string
    fecha?: StringFilter<"Gasto"> | string
  }

  export type SucursalCreateWithoutClasesInput = {
    nombre: string
    direccion: string
    gastos?: GastoCreateNestedManyWithoutSucursalInput
  }

  export type SucursalUncheckedCreateWithoutClasesInput = {
    id?: number
    nombre: string
    direccion: string
    gastos?: GastoUncheckedCreateNestedManyWithoutSucursalInput
  }

  export type SucursalCreateOrConnectWithoutClasesInput = {
    where: SucursalWhereUniqueInput
    create: XOR<SucursalCreateWithoutClasesInput, SucursalUncheckedCreateWithoutClasesInput>
  }

  export type DocenteCreateWithoutClasesInput = {
    nombre: string
    aPaterno: string
    aMaterno: string
    estado: string
    telefono: string
    curp: string
  }

  export type DocenteUncheckedCreateWithoutClasesInput = {
    id?: number
    nombre: string
    aPaterno: string
    aMaterno: string
    estado: string
    telefono: string
    curp: string
  }

  export type DocenteCreateOrConnectWithoutClasesInput = {
    where: DocenteWhereUniqueInput
    create: XOR<DocenteCreateWithoutClasesInput, DocenteUncheckedCreateWithoutClasesInput>
  }

  export type AlumnoClaseCreateWithoutClaseInput = {
    alumno: AlumnoCreateNestedOneWithoutClasesInput
  }

  export type AlumnoClaseUncheckedCreateWithoutClaseInput = {
    id?: number
    alumnoId: number
  }

  export type AlumnoClaseCreateOrConnectWithoutClaseInput = {
    where: AlumnoClaseWhereUniqueInput
    create: XOR<AlumnoClaseCreateWithoutClaseInput, AlumnoClaseUncheckedCreateWithoutClaseInput>
  }

  export type SucursalUpsertWithoutClasesInput = {
    update: XOR<SucursalUpdateWithoutClasesInput, SucursalUncheckedUpdateWithoutClasesInput>
    create: XOR<SucursalCreateWithoutClasesInput, SucursalUncheckedCreateWithoutClasesInput>
    where?: SucursalWhereInput
  }

  export type SucursalUpdateToOneWithWhereWithoutClasesInput = {
    where?: SucursalWhereInput
    data: XOR<SucursalUpdateWithoutClasesInput, SucursalUncheckedUpdateWithoutClasesInput>
  }

  export type SucursalUpdateWithoutClasesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    gastos?: GastoUpdateManyWithoutSucursalNestedInput
  }

  export type SucursalUncheckedUpdateWithoutClasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    gastos?: GastoUncheckedUpdateManyWithoutSucursalNestedInput
  }

  export type DocenteUpsertWithoutClasesInput = {
    update: XOR<DocenteUpdateWithoutClasesInput, DocenteUncheckedUpdateWithoutClasesInput>
    create: XOR<DocenteCreateWithoutClasesInput, DocenteUncheckedCreateWithoutClasesInput>
    where?: DocenteWhereInput
  }

  export type DocenteUpdateToOneWithWhereWithoutClasesInput = {
    where?: DocenteWhereInput
    data: XOR<DocenteUpdateWithoutClasesInput, DocenteUncheckedUpdateWithoutClasesInput>
  }

  export type DocenteUpdateWithoutClasesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
  }

  export type DocenteUncheckedUpdateWithoutClasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
  }

  export type AlumnoClaseUpsertWithWhereUniqueWithoutClaseInput = {
    where: AlumnoClaseWhereUniqueInput
    update: XOR<AlumnoClaseUpdateWithoutClaseInput, AlumnoClaseUncheckedUpdateWithoutClaseInput>
    create: XOR<AlumnoClaseCreateWithoutClaseInput, AlumnoClaseUncheckedCreateWithoutClaseInput>
  }

  export type AlumnoClaseUpdateWithWhereUniqueWithoutClaseInput = {
    where: AlumnoClaseWhereUniqueInput
    data: XOR<AlumnoClaseUpdateWithoutClaseInput, AlumnoClaseUncheckedUpdateWithoutClaseInput>
  }

  export type AlumnoClaseUpdateManyWithWhereWithoutClaseInput = {
    where: AlumnoClaseScalarWhereInput
    data: XOR<AlumnoClaseUpdateManyMutationInput, AlumnoClaseUncheckedUpdateManyWithoutClaseInput>
  }

  export type AlumnoClaseScalarWhereInput = {
    AND?: AlumnoClaseScalarWhereInput | AlumnoClaseScalarWhereInput[]
    OR?: AlumnoClaseScalarWhereInput[]
    NOT?: AlumnoClaseScalarWhereInput | AlumnoClaseScalarWhereInput[]
    id?: IntFilter<"AlumnoClase"> | number
    alumnoId?: IntFilter<"AlumnoClase"> | number
    claseId?: IntFilter<"AlumnoClase"> | number
  }

  export type AlumnoClaseCreateWithoutAlumnoInput = {
    clase: ClaseCreateNestedOneWithoutAlumnosInput
  }

  export type AlumnoClaseUncheckedCreateWithoutAlumnoInput = {
    id?: number
    claseId: number
  }

  export type AlumnoClaseCreateOrConnectWithoutAlumnoInput = {
    where: AlumnoClaseWhereUniqueInput
    create: XOR<AlumnoClaseCreateWithoutAlumnoInput, AlumnoClaseUncheckedCreateWithoutAlumnoInput>
  }

  export type PagosCreateWithoutAlumnoInput = {
    monto: number
    metodo: string
    concepto: string
    fecha: string
  }

  export type PagosUncheckedCreateWithoutAlumnoInput = {
    id?: number
    monto: number
    metodo: string
    concepto: string
    fecha: string
  }

  export type PagosCreateOrConnectWithoutAlumnoInput = {
    where: PagosWhereUniqueInput
    create: XOR<PagosCreateWithoutAlumnoInput, PagosUncheckedCreateWithoutAlumnoInput>
  }

  export type AlumnoClaseUpsertWithWhereUniqueWithoutAlumnoInput = {
    where: AlumnoClaseWhereUniqueInput
    update: XOR<AlumnoClaseUpdateWithoutAlumnoInput, AlumnoClaseUncheckedUpdateWithoutAlumnoInput>
    create: XOR<AlumnoClaseCreateWithoutAlumnoInput, AlumnoClaseUncheckedCreateWithoutAlumnoInput>
  }

  export type AlumnoClaseUpdateWithWhereUniqueWithoutAlumnoInput = {
    where: AlumnoClaseWhereUniqueInput
    data: XOR<AlumnoClaseUpdateWithoutAlumnoInput, AlumnoClaseUncheckedUpdateWithoutAlumnoInput>
  }

  export type AlumnoClaseUpdateManyWithWhereWithoutAlumnoInput = {
    where: AlumnoClaseScalarWhereInput
    data: XOR<AlumnoClaseUpdateManyMutationInput, AlumnoClaseUncheckedUpdateManyWithoutAlumnoInput>
  }

  export type PagosUpsertWithWhereUniqueWithoutAlumnoInput = {
    where: PagosWhereUniqueInput
    update: XOR<PagosUpdateWithoutAlumnoInput, PagosUncheckedUpdateWithoutAlumnoInput>
    create: XOR<PagosCreateWithoutAlumnoInput, PagosUncheckedCreateWithoutAlumnoInput>
  }

  export type PagosUpdateWithWhereUniqueWithoutAlumnoInput = {
    where: PagosWhereUniqueInput
    data: XOR<PagosUpdateWithoutAlumnoInput, PagosUncheckedUpdateWithoutAlumnoInput>
  }

  export type PagosUpdateManyWithWhereWithoutAlumnoInput = {
    where: PagosScalarWhereInput
    data: XOR<PagosUpdateManyMutationInput, PagosUncheckedUpdateManyWithoutAlumnoInput>
  }

  export type PagosScalarWhereInput = {
    AND?: PagosScalarWhereInput | PagosScalarWhereInput[]
    OR?: PagosScalarWhereInput[]
    NOT?: PagosScalarWhereInput | PagosScalarWhereInput[]
    id?: IntFilter<"Pagos"> | number
    monto?: FloatFilter<"Pagos"> | number
    metodo?: StringFilter<"Pagos"> | string
    idAlumno?: IntFilter<"Pagos"> | number
    concepto?: StringFilter<"Pagos"> | string
    fecha?: StringFilter<"Pagos"> | string
  }

  export type AlumnoCreateWithoutClasesInput = {
    nombre: string
    aPaterno: string
    aMaterno: string
    tutor: string
    contacto: string
    edad: number
    activo: boolean
    pagos?: PagosCreateNestedManyWithoutAlumnoInput
  }

  export type AlumnoUncheckedCreateWithoutClasesInput = {
    id?: number
    nombre: string
    aPaterno: string
    aMaterno: string
    tutor: string
    contacto: string
    edad: number
    activo: boolean
    pagos?: PagosUncheckedCreateNestedManyWithoutAlumnoInput
  }

  export type AlumnoCreateOrConnectWithoutClasesInput = {
    where: AlumnoWhereUniqueInput
    create: XOR<AlumnoCreateWithoutClasesInput, AlumnoUncheckedCreateWithoutClasesInput>
  }

  export type ClaseCreateWithoutAlumnosInput = {
    nombre: string
    cupoMax: number
    dias: string
    hora: string
    sucursal: SucursalCreateNestedOneWithoutClasesInput
    docente?: DocenteCreateNestedOneWithoutClasesInput
  }

  export type ClaseUncheckedCreateWithoutAlumnosInput = {
    id?: number
    idSucursal: number
    idDocente?: number | null
    nombre: string
    cupoMax: number
    dias: string
    hora: string
  }

  export type ClaseCreateOrConnectWithoutAlumnosInput = {
    where: ClaseWhereUniqueInput
    create: XOR<ClaseCreateWithoutAlumnosInput, ClaseUncheckedCreateWithoutAlumnosInput>
  }

  export type AlumnoUpsertWithoutClasesInput = {
    update: XOR<AlumnoUpdateWithoutClasesInput, AlumnoUncheckedUpdateWithoutClasesInput>
    create: XOR<AlumnoCreateWithoutClasesInput, AlumnoUncheckedCreateWithoutClasesInput>
    where?: AlumnoWhereInput
  }

  export type AlumnoUpdateToOneWithWhereWithoutClasesInput = {
    where?: AlumnoWhereInput
    data: XOR<AlumnoUpdateWithoutClasesInput, AlumnoUncheckedUpdateWithoutClasesInput>
  }

  export type AlumnoUpdateWithoutClasesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    tutor?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    pagos?: PagosUpdateManyWithoutAlumnoNestedInput
  }

  export type AlumnoUncheckedUpdateWithoutClasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    tutor?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    pagos?: PagosUncheckedUpdateManyWithoutAlumnoNestedInput
  }

  export type ClaseUpsertWithoutAlumnosInput = {
    update: XOR<ClaseUpdateWithoutAlumnosInput, ClaseUncheckedUpdateWithoutAlumnosInput>
    create: XOR<ClaseCreateWithoutAlumnosInput, ClaseUncheckedCreateWithoutAlumnosInput>
    where?: ClaseWhereInput
  }

  export type ClaseUpdateToOneWithWhereWithoutAlumnosInput = {
    where?: ClaseWhereInput
    data: XOR<ClaseUpdateWithoutAlumnosInput, ClaseUncheckedUpdateWithoutAlumnosInput>
  }

  export type ClaseUpdateWithoutAlumnosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cupoMax?: IntFieldUpdateOperationsInput | number
    dias?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
    sucursal?: SucursalUpdateOneRequiredWithoutClasesNestedInput
    docente?: DocenteUpdateOneWithoutClasesNestedInput
  }

  export type ClaseUncheckedUpdateWithoutAlumnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    idSucursal?: IntFieldUpdateOperationsInput | number
    idDocente?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    cupoMax?: IntFieldUpdateOperationsInput | number
    dias?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
  }

  export type AlumnoCreateWithoutPagosInput = {
    nombre: string
    aPaterno: string
    aMaterno: string
    tutor: string
    contacto: string
    edad: number
    activo: boolean
    clases?: AlumnoClaseCreateNestedManyWithoutAlumnoInput
  }

  export type AlumnoUncheckedCreateWithoutPagosInput = {
    id?: number
    nombre: string
    aPaterno: string
    aMaterno: string
    tutor: string
    contacto: string
    edad: number
    activo: boolean
    clases?: AlumnoClaseUncheckedCreateNestedManyWithoutAlumnoInput
  }

  export type AlumnoCreateOrConnectWithoutPagosInput = {
    where: AlumnoWhereUniqueInput
    create: XOR<AlumnoCreateWithoutPagosInput, AlumnoUncheckedCreateWithoutPagosInput>
  }

  export type AlumnoUpsertWithoutPagosInput = {
    update: XOR<AlumnoUpdateWithoutPagosInput, AlumnoUncheckedUpdateWithoutPagosInput>
    create: XOR<AlumnoCreateWithoutPagosInput, AlumnoUncheckedCreateWithoutPagosInput>
    where?: AlumnoWhereInput
  }

  export type AlumnoUpdateToOneWithWhereWithoutPagosInput = {
    where?: AlumnoWhereInput
    data: XOR<AlumnoUpdateWithoutPagosInput, AlumnoUncheckedUpdateWithoutPagosInput>
  }

  export type AlumnoUpdateWithoutPagosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    tutor?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    clases?: AlumnoClaseUpdateManyWithoutAlumnoNestedInput
  }

  export type AlumnoUncheckedUpdateWithoutPagosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    aPaterno?: StringFieldUpdateOperationsInput | string
    aMaterno?: StringFieldUpdateOperationsInput | string
    tutor?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    clases?: AlumnoClaseUncheckedUpdateManyWithoutAlumnoNestedInput
  }

  export type SucursalCreateWithoutGastosInput = {
    nombre: string
    direccion: string
    clases?: ClaseCreateNestedManyWithoutSucursalInput
  }

  export type SucursalUncheckedCreateWithoutGastosInput = {
    id?: number
    nombre: string
    direccion: string
    clases?: ClaseUncheckedCreateNestedManyWithoutSucursalInput
  }

  export type SucursalCreateOrConnectWithoutGastosInput = {
    where: SucursalWhereUniqueInput
    create: XOR<SucursalCreateWithoutGastosInput, SucursalUncheckedCreateWithoutGastosInput>
  }

  export type SucursalUpsertWithoutGastosInput = {
    update: XOR<SucursalUpdateWithoutGastosInput, SucursalUncheckedUpdateWithoutGastosInput>
    create: XOR<SucursalCreateWithoutGastosInput, SucursalUncheckedCreateWithoutGastosInput>
    where?: SucursalWhereInput
  }

  export type SucursalUpdateToOneWithWhereWithoutGastosInput = {
    where?: SucursalWhereInput
    data: XOR<SucursalUpdateWithoutGastosInput, SucursalUncheckedUpdateWithoutGastosInput>
  }

  export type SucursalUpdateWithoutGastosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    clases?: ClaseUpdateManyWithoutSucursalNestedInput
  }

  export type SucursalUncheckedUpdateWithoutGastosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    clases?: ClaseUncheckedUpdateManyWithoutSucursalNestedInput
  }

  export type ClaseUpdateWithoutDocenteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cupoMax?: IntFieldUpdateOperationsInput | number
    dias?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
    sucursal?: SucursalUpdateOneRequiredWithoutClasesNestedInput
    alumnos?: AlumnoClaseUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUncheckedUpdateWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    idSucursal?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cupoMax?: IntFieldUpdateOperationsInput | number
    dias?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
    alumnos?: AlumnoClaseUncheckedUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUncheckedUpdateManyWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    idSucursal?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cupoMax?: IntFieldUpdateOperationsInput | number
    dias?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
  }

  export type ClaseUpdateWithoutSucursalInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cupoMax?: IntFieldUpdateOperationsInput | number
    dias?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
    docente?: DocenteUpdateOneWithoutClasesNestedInput
    alumnos?: AlumnoClaseUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUncheckedUpdateWithoutSucursalInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDocente?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    cupoMax?: IntFieldUpdateOperationsInput | number
    dias?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
    alumnos?: AlumnoClaseUncheckedUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUncheckedUpdateManyWithoutSucursalInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDocente?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    cupoMax?: IntFieldUpdateOperationsInput | number
    dias?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
  }

  export type GastoUpdateWithoutSucursalInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    decripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
  }

  export type GastoUncheckedUpdateWithoutSucursalInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    decripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
  }

  export type GastoUncheckedUpdateManyWithoutSucursalInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    decripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
  }

  export type AlumnoClaseUpdateWithoutClaseInput = {
    alumno?: AlumnoUpdateOneRequiredWithoutClasesNestedInput
  }

  export type AlumnoClaseUncheckedUpdateWithoutClaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    alumnoId?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoClaseUncheckedUpdateManyWithoutClaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    alumnoId?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoClaseUpdateWithoutAlumnoInput = {
    clase?: ClaseUpdateOneRequiredWithoutAlumnosNestedInput
  }

  export type AlumnoClaseUncheckedUpdateWithoutAlumnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    claseId?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoClaseUncheckedUpdateManyWithoutAlumnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    claseId?: IntFieldUpdateOperationsInput | number
  }

  export type PagosUpdateWithoutAlumnoInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
  }

  export type PagosUncheckedUpdateWithoutAlumnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
  }

  export type PagosUncheckedUpdateManyWithoutAlumnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DocenteCountOutputTypeDefaultArgs instead
     */
    export type DocenteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DocenteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SucursalCountOutputTypeDefaultArgs instead
     */
    export type SucursalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SucursalCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClaseCountOutputTypeDefaultArgs instead
     */
    export type ClaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlumnoCountOutputTypeDefaultArgs instead
     */
    export type AlumnoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlumnoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DocenteDefaultArgs instead
     */
    export type DocenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DocenteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SucursalDefaultArgs instead
     */
    export type SucursalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SucursalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClaseDefaultArgs instead
     */
    export type ClaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlumnoDefaultArgs instead
     */
    export type AlumnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlumnoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlumnoClaseDefaultArgs instead
     */
    export type AlumnoClaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlumnoClaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PagosDefaultArgs instead
     */
    export type PagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PagosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GastoDefaultArgs instead
     */
    export type GastoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GastoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MasterKeyDefaultArgs instead
     */
    export type MasterKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MasterKeyDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}