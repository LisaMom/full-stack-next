

import ProductType from '@/lib/product'
import React from 'react'

export default function UserProfileComponent(props:ProductType) {

    // declare variables for user profile information
    // const userProfileImage = "https://i.pinimg.com/736x/8d/14/d4/8d14d42a4ff62c56ee3044c53e3472f4.jpg";
    // const userName = "Mom Lisa";
    // const userEmail = "Momlisa12@example.com";
    // const userBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <section className="border p-6 rounded-lg shadow-md bg-white flex flex-col w-80 hover:shadow-lg transition duration-300">
        <img src={props.imageUrl} alt="User Profile" className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-lg" />
            <h1 className="text-2xl font-bold text-gray-800">{props.title}</h1>
            <p className="text-gray-600">{props.description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Edit Profile</button>
    </section>
  )
}
