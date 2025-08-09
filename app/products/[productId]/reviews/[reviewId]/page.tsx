import React from "react";

const Review = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const resData = await params;
  const { productId, reviewId } = resData;

  return (
    <div>
      Review Product with product Id - {productId} and review Id - {reviewId}
    </div>
  );
};

export default Review;
