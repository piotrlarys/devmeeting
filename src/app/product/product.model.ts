import { Tag } from './tag.model';
export class Product {
    name: string;
    price: number;
    promoted: boolean;
    tags: Tag[];
}
