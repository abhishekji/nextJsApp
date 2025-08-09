
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="flex justify-between p-4">
      <Link href="/users">Users </Link>
      <ProductCard></ProductCard>
    </div>
  );
}
