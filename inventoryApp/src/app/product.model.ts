/**
 * Created by liangchen on 20/9/17.
 */
export class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number) {

  }
}
