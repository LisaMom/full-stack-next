
export type ProductType = {
    title: string;
    description: string;
    price: number;
    originalPrice: number;
    imageUrl: string;
    isPopular: boolean;
};

export const productList: ProductType[] = [
    {
        title: "Bacon Onion Pizza Focaccia",
        description: "ភីហ្សារសជាតិបេកុន និងខ្ទឹមបារាំង 1 ថ្នាំ",
        price: 3.44,
        originalPrice: 4.30,
        imageUrl: "https://i.pinimg.com/1200x/8a/64/ea/8a64eabc15c62a85d2de85e6647baf61.jpg",
        isPopular: false
    },
    {
        title: "Tuna Melt Sandwich",
        description:
            "Mix of tuna cream cheese onions. We Recommend adding: Jalapeno...",
        price: 3.92,
        originalPrice: 4.90,
        imageUrl: "https://i.pinimg.com/736x/69/c7/e6/69c7e62cd9602fed570495991ea47deb.jpg",
        isPopular: true
    },
    {
        title: "Cream Cheese Basil Tomatoes Sandwich",
        description:
            "Try Coppa as extra addon or any meat of your choice. No...",
        price: 3.68,
        originalPrice: 4.60,
        imageUrl: "https://i.pinimg.com/1200x/1c/33/de/1c33dee581fdbd4196f263c4a261daf9.jpg",
        isPopular: true
    },
    {
        title: "Smoked Chicken Mix",
        description:
            "Chicken deli mixed with grainy mustard mayo and onions....",
        price: 3.76,
        originalPrice: 4.70,
        imageUrl: "https://i.pinimg.com/736x/41/cd/05/41cd0503aeab9a80fc8dc5b8d2482981.jpg",
        isPopular: true
    }
];

export default productList;
