import React from 'react'

import Link from 'next/link';

const ProductsList = () => {
  return (
    <>
    <div>ProductsList</div>
    <div>
        <Link href={'/products/1'}>Product 1</Link>
        <Link href={'/products/2'}>Product 2</Link>
        <Link href={'/products/3'}>Product 3</Link>

    </div>
    </>
  )
}

export default ProductsList