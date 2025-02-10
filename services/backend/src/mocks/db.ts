export class Db {
  private _url: string
  private _connection: unknown
  constructor(url: string) {
    this._url = url
    this._connection = undefined
  }

  connect(): Promise<void> {
    this._connection = {}
    return Promise.resolve()
  }

  disconnect(): Promise<void> {
    this._connection = undefined
    return Promise.resolve()
  }

  select(table: string, select: string): Promise<Record<string, unknown>[]> {
    if (!this._connection) {
      throw new Error('db not connected')
    }
    return Promise.resolve([])
  }

  insert(table: string, insert: string): Promise<Record<string, unknown>[]> {
    if (!this._connection) {
      throw new Error('db not connected')
    }
    return Promise.resolve([])
  }

  del(table: string, del: string): Promise<Record<string, unknown>[]> {
    if (!this._connection) {
      throw new Error('db not connected')
    }
    return Promise.resolve([])
  }

  findById(table: string, id: string): Promise<Record<string, unknown>> {
    return this.select(table, ` WHERE id = ${id}`).then((result: Record<string, unknown>[]) => {
      return (result || [])[0]
    })
  }
}
