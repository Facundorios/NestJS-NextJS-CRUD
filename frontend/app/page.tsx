import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function HomePage() {
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold text-center">Next-Nest App</h1>
      <Link href="/products/create  " className={buttonVariants()}>
        Create product
      </Link>
    </div>
  );
}

export default HomePage;
