
"use client";

import { ProductType } from "@/lib/product";

type CardComponentsProps = ProductType & {
  isInCart: boolean;
  onToggleCart: () => void;
};

export default function CardComponents(props : CardComponentsProps) {
  return (
    <article className="flex w-full items-start justify-between gap-4 rounded-[18px] border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md">
      {/* Product information */}
      <div className="min-w-0 flex-1">
        <h3 className="mb-2 text-xl font-bold text-gray-800">
          {props.title}
        </h3>

        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-xl font-medium text-pink-600">
            ចាប់ពី ${props.price}
          </span>

          <span className="text-base text-gray-500 line-through">
            ${props.originalPrice}
          </span>
        </div>

        <p className="line-clamp-2 text-base leading-7 text-gray-500">
          {props.description}
        </p>

        {props.isPopular && (
          <div className="mt-2 flex items-center gap-1 text-sm text-gray-700">
            <span>ពេញនិយម</span>
          </div>
        )}
      </div>

      {/* Product image */}
      <div className="relative h-[160px] w-[160px] shrink-0">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="h-full w-full rounded-xl object-cover"
        />

        {/* Add / Remove button */}
        <button
          type="button"
          aria-label={
            props.isInCart
              ? `Remove ${props.title} from cart`
              : `Add ${props.title} to cart`
          }
          onClick={props.onToggleCart}
          className={`absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full text-3xl shadow-md transition hover:scale-105 ${
            props.isInCart
              ? "bg-pink-600 text-white hover:bg-pink-700"
              : "bg-white text-gray-800 hover:bg-pink-50"
          }`}
        >
          {props.isInCart ? "-" : "+"}
        </button>
      </div>
    </article>
  );
}
