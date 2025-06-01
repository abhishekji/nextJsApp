import React from 'react'

const NestedPages = async ({params}: {params: Promise<{slug: string[]}>}) => {

    const slugElems = await params;
    console.log(slugElems);
  return (
    <div>NestedPages</div>
  )
}

export default NestedPages