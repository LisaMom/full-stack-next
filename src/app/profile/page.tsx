

import UserProfileComponent from '@/components/profile/UserProfileComponent';
import ProductType, { productList } from '@/lib/product';

export default function 
() {
  return (
    <section className="m-8 gap-4 flex sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 ">
        {productList.map(({title,description,imageUrl}) => (
            
          <div key={title} className="border p-4 rounded-lg shadow-md bg-white flex flex-col gap-4 hover:shadow-lg transition duration-300">

            <img src={imageUrl} className="w-44 h-44 rounded-xl" />
            <h1>{title}</h1>
            {/* Your product layout code */}
            <p>{description}</p>

          </div>
        ))}
    </section>
  )
}
