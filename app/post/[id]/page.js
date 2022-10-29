import Image from 'next/image'
async function getDetailPost(id){
  let detailPost = await fetch(`https://dummyjson.com/products/${id}`)
  return detailPost.json()
}

export default async function Page({params}) {
  const detailProduct = await getDetailPost(params.id)
  console.log(detailProduct)
  return (
    <main className="min-h-screen capitalize mt-3 flex flex-col gap-5 p-5" key={detailProduct.id}>
      <h1 className="font-bold text-4xl text-center mt-5 mb-5">{detailProduct.title}</h1>
      <Image className='mx-auto'
      src={detailProduct.images[0]}
      alt={detailProduct.title}
      width='400'
      height='400'
      />
      <p>brand: {detailProduct.brand}</p>
      <p>category: {detailProduct.category}</p>
      <p>rating: {detailProduct.rating}</p>
      <p>stock: {detailProduct.stock}</p>
      <p>price: {detailProduct.price}</p>
      <p>description: {detailProduct.description}</p>
    </main>
  );
}