#include <iostream>
#include <string>
#include <vector>
using namespace std;

class IProduct {
    public:
        virtual int getPrice() = 0;
        virtual string getName() = 0;
    private:
};

class Product: public IProduct {
    public:
        Product(string name, int price): name(name), price(price) {};
        virtual ~Product() {}

        virtual int getPrice() {
            return price;
        }
        virtual string getName() {
            return name;
        }
    private:
        string name;
        int price;
};

class Box: public Product {
    public:
        Box(string name, int price = 0): Product(name, price) {};
        virtual ~Box() {};
        //Im copying every product to vector. It is more readable code for teaching purposes.
        virtual void addProduct(Product product) {
            this->products.push_back(product);
        }
        virtual int getPrice() {
            int total = 0;
            for (auto it = this->products.begin(); it != this->products.end(); it++) {
                total += (*it).getPrice();
            }
            return total;
        }
        virtual string getName() {
            return this->name;
        }
    private:
        string name;
        int price;
        vector<Product> products;
};

int main(void) {
    Box techBox("techBox");
    techBox.addProduct(Product("iphone", 600));
    techBox.addProduct(Product("laptop", 800));
    techBox.addProduct(Product("headphone", 25));

    int total = techBox.getPrice();
    cout << "total = " << total << endl;
    return 0;
}
