
type ProductType = {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
};

export const productList: ProductType[] = [
    {
        title: "Product 1",
        description: "This is the description for Product 1.",
        price: 19.99,
        imageUrl: "https://i.pinimg.com/736x/e6/63/5b/e6635be89fd569e0f9259eb705b24932.jpg"
    },
    {
        title: "Product 2",
        description: "This is the description for Product 2.",
        price: 29.99,
        imageUrl: "https://i.pinimg.com/736x/d6/ea/a7/d6eaa78d9717da9cde9f8d6a88fc6fce.jpg"
    },
    {
        title: "Product 3",
        description: "This is the description for Product 3.",
        price: 39.99,
        imageUrl: "https://i.pinimg.com/736x/7e/ff/aa/7effaa9072ccde62da98e21d9afbeab1.jpg"
    },
];

export default ProductType;

