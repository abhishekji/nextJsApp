import { getProducts } from "../../prisma-db";

export default async function ProductDB() {
  type ProductData = {
    id: number;
    title: string;
    price: number;
    description: string | null;
  };
  const productsList: ProductData[] = await getProducts();

  return (
    <>
      <div> Product Details </div>
      {Array.isArray(productsList) &&
        productsList.map((elem) => {
          return (
            <div key={elem.id}>
              <div className={`text-[red]`}> {elem.title} </div>
              <div> {elem.description} </div>
            </div>
          );
        })}
    </>
  );
}
