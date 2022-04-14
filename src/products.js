const products = [
    {
        id: 1,
        name: "Car",
        price: "129 000,99",
        url: "pictures/corolla.png"
    },
    {
        id: 2,
        name: "Bike",
        price: "59 000,99",
        url: "pictures/harley.webp"
    }
];

export function getProducts() {
    return products;
}