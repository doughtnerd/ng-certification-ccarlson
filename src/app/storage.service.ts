
export class StorageService {

  constructor(
    private storageMethod: Storage,
    private serializer: (data: any) => string,
    private deserializer: (data: string) => any
  ) {}

  public clear(): void {
    this.storageMethod.clear();
  }

  public removeItem(key: string): void {
    this.storageMethod.removeItem(key);
  }

  public setItem<T>(key: string, value: T): void {
    const item = this.serializer(value);
    this.storageMethod.setItem(key, item);
  }

  public getItem<T>(key: string): T {
    const item = this.storageMethod.getItem(key);
    return this.deserializer(item);
  }
}
