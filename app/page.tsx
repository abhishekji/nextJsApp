import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
<div>
  Hello World
  <Link href="/users">Users </Link>
  <ProductCard></ProductCard>
</div>
  );
}
