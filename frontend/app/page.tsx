import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { getProducts } from "./products/api/product-api";
import { notFoundImage } from "@/lib/notFoundImage";

export const dynamic = "force-dinamy";

async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold text-center">Next-Nest App</h1>
        <Link href="/products/create  " className={buttonVariants()}>
          Create product
        </Link>
      </div>
      <main className="grid grid-cols-4 gap-3">
        {products.map((product) => (
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                {product.name}
                <span className="text-sm font-bold text-gray-500">
                  <p>${product.price}</p>
                </span>
              </CardTitle>
            </CardHeader>
            <img src={product.image || notFoundImage} alt="" />
            <CardContent>
              <CardDescription>
                <p>{product.description}</p>
              </CardDescription>
              <CardDescription></CardDescription>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        ))}
      </main>
    </>
  );
}

export default HomePage;
