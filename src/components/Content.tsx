import React from 'react'
import ContentCard from './ContentCard'

type Props = {
    products: [ContentProps]
}
type ContentProps = {
    title: string,
    brand: string,
    thumbnail: string,
    price: number,
    description: string
  }

function Content({ products }: any) {
  return (
    <div className='flex flex-col mt-5'>
        {products.map((product: any, index: number) => (<ContentCard product={product} key={index}/>))}
    </div>
  )
}

export default Content