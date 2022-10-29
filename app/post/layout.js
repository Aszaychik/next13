import Link from 'next/link'

async function getPost(){
  let products = await fetch('https://dummyjson.com/products?limit=10')
  return products.json()
}

export default async function Layout({children}) {
  const {products} = await getPost()
  // console.log(products)
  return (
    <main>
      {products.map((product) =>(
      <>
      <div key={product.id} className='flex flex-col gap-3 mt-3 p-5'>
          <Link className="font-bold" href={`/post/${product.id}`}>No.{product.id} - {product.title}</Link>
          {/* <Image
          src={product.images[0]}
          /> */}
          <h4>{product.description}</h4>
      </div>
      </>
      ))}
      <div>{children}</div>
    </main>
  )
}