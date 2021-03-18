//This patterns allows you to compose a tree of objects and work with these structures as if they were individual objects. 


//Common interface for all products
interface IProduct {
    getName(): string;
    getPrice(): number;
}

//Individual objects
class Product implements IProduct {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}

//This class groups a list of individual objects. Delegate the work to individual objects.
class Box extends Product {
    private productList: Product[];
    constructor(name: string) {
        super(name, 0);
        this.productList = [];
    }
    add(product: Product) {
        this.productList.push(product);
    }
    getName(): string {
        return this.name;
    }
    getPrice(): number {
        let total: number = 0;
        this.productList.forEach((product: Product) => {
            total += product.getPrice();
        });
        return total;
    }
}

const techBox: Box = new Box("techBox");
techBox.add(new Product("iphone", 600));
techBox.add(new Product("laptop", 800));
techBox.add(new Product("headphones", 25));

const clothingBox: Box = new Box("clothingBox");
clothingBox.add(new Product("tshirt", 25));
clothingBox.add(new Product("pants", 35));
clothingBox.add(new Product("jacket", 45));

const finalProduct: Box =  new Box("finalProduct");
finalProduct.add(techBox);
finalProduct.add(clothingBox);
finalProduct.add(new Product("candies", 5));
const total = finalProduct.getPrice();
console.log('total=' + total.toString());