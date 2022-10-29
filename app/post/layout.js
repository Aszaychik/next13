import Link from 'next/link'
import Image from 'next/image'
import { Children } from 'react'
async function getPost(){
  let products = await fetch('https://dummyjson.com/products?limit=10')
  return products.json()
}

export default async function Layout({children}) {
  const {products} = await getPost()
  console.log(products)
  return (
    <div>
      {products.map((product) =>(
      <>
      <main key={product.id} className='flex flex-col gap-3 mt-3 p-5'>
          <Link className="font-bold" href={`/post/${product.id}`}>No.{product.id} - {product.title}</Link>
          {/* <Image
          src={product.images[0]}
          /> */}
          <h4>{product.description}</h4>
      </main>
      </>
      ))}
      <div >{children}</div>
    </div>
  )
}