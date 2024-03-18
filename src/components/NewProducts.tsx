import React from 'react'
import ProductCard from './ProductCard';

const productsData =[
    {
        img: "/product1.jpg",
        title: "Product 1",
        desc: "Product 1 description",
        rating: 4,
        price: "100.00",
    },
    {
        img: "/product1.jpg",
        title: "Product 1",
        desc: "Product 1 description",
        rating: 4,
        price: "100.00",
    },
    {
        img: "/product1.jpg",
        title: "Product 1",
        desc: "Product 1 description",
        rating: 4,
        price: "100.00",
    },
    {
        img: "/product1.jpg",
        title: "Product 1",
        desc: "Product 1 description",
        rating: 4,
        price: "100.00",
    },
    {
        img: "/product1.jpg",
        title: "Product 1",
        desc: "Product 1 description",
        rating: 4,
        price: "100.00",
    },
    {
        img: "/product1.jpg",
        title: "Product 1",
        desc: "Product 1 description",
        rating: 4,
        price: "100.00",
    },
]

const NewProducts = () => {
  return (
    <div>
        <div className="container pt-16">
            <h2 className='font-medium text-2xl pb-4'>New Product</h2>

            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:gird-col-3 xl:grid-cols-4 xl:gap-x-20 xl:gap-y-10">
                {productsData.map((item, index) =>(
                    <ProductCard 
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewProducts