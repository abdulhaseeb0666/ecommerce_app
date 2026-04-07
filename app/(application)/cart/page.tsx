import { Suspense } from "react";
import CartClient from "./CartClint";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading cart...</p>}>
      <CartClient />
    </Suspense>
  );
}