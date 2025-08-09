import React from "react";

const ProductDetails: React.FC<{
  params: Promise<{ productId: string; reviewId: string }>;
}> = async ({ params }) => {


  const resData = await params;
  // throw new Error();
  const { productId, reviewId } = resData;
  console.log("review", reviewId);
  // if(!reviewId){
  // return (notFound());
  // }
  // else {
  return (
    <div>
      Review Product with product Id - {productId} and review Id - {reviewId}
    </div>
  );
  // }
};

export default ProductDetails;
