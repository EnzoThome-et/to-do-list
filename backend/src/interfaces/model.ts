export interface Model <T> {
    create(object: T): Promise<T>,
    read(): Promise<T[]>,
    update(string: string, object: T): Promise<T | null>,
    delete(string: string): Promise<T | null>,
  }