
"use client";

import { useState } from "react";
import CardComponents from "@/components/products/CardComponents";
import ProductList, { ProductType } from "@/lib/product";

type CartItem = ProductType & {
  quantity: number;
};

export default function AlphabetDisplayComponent() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add a product or increase its quantity
  const addToCart = (selectedProduct: ProductType) => {
    setCart((previousCart) => {
      const existingProduct = previousCart.some(
        (item) => item.title === selectedProduct.title
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.title === selectedProduct.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...selectedProduct, quantity: 1 }];
    });
  };

  // Decrease product quantity
  const decreaseQuantity = (title: string) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.title === title
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove a product completely
  const removeFromCart = (title: string) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.title !== title)
    );
  };

  // Calculate total quantity and total price
  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="space-y-6 p-5">
      {/* Product List */}
      <section>
        <h1 className="mb-4 text-2xl font-bold">Our Products</h1>

        <div className="space-y-4">
          {ProductList.map(
            ({
              title,
              description,
              price,
              originalPrice,
              imageUrl,
              isPopular,
            }) => (
              <CardComponents
                key={title}
                title={title}
                description={description}
                price={price}
                originalPrice={originalPrice}
                imageUrl={imageUrl}
                isPopular={isPopular}
                isInCart={cart.some((item) => item.title === title)}
                onToggleCart={() =>
                  addToCart({
                    title,
                    description,
                    price,
                    originalPrice,
                    imageUrl,
                    isPopular,
                  })
                }
              />
            )
          )}
        </div>
      </section>

      {/* Shopping Cart */}
      <section className="rounded-xl border border-gray-200 p-5">
        <h2 className="mb-4 text-xl font-bold">
          My Cart ({totalQuantity})
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty. Add a product!
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map(
                ({ title, price, imageUrl, quantity }) => (
                  <div
                    key={title}
                    className="flex items-center justify-between gap-3 border-b pb-3"
                  >
                    {/* Product Information */}
                    <div className="min-w-0">
                      <h3 className="font-medium">{title}</h3>

                      <p className="text-pink-600">
                        ${price.toFixed(2)} × {quantity} = $
                        {(price * quantity).toFixed(2)}
                      </p>

                      <img
                        src={imageUrl}
                        alt={title}
                        width={128}
                        height={128}
                        className="mt-2 h-32 w-32 rounded-xl object-cover"
                      />
                    </div>

                    {/* Quantity and Remove Buttons */}
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(title)}
                        aria-label={`Decrease ${title} quantity`}
                        className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
                      >
                        −
                      </button>

                      <span className="font-semibold">
                        {quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          addToCart({
                            title,
                            description: "",
                            price,
                            originalPrice: price,
                            imageUrl,
                            isPopular: false,
                          })
                        }
                        aria-label={`Increase ${title} quantity`}
                        className="rounded bg-pink-100 px-3 py-1 text-pink-600 hover:bg-pink-200"
                      >
                        +
                      </button>

                      <button
                        type="button"
                        onClick={() => removeFromCart(title)}
                        className="rounded-lg bg-red-100 px-3 py-2 text-red-600 hover:bg-red-200"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Total Price */}
            <div className="mt-5 flex justify-between border-t pt-4 text-lg font-bold">
              <span>Total Price:</span>
              <span className="text-pink-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
