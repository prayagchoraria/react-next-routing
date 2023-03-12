import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Product = () => {
	const router = useRouter();
	const { productId } = router.query;
	return (
		<>
			<h1>Product {productId}</h1>
			<Link href={`/products/${productId}/reviews`}>Review</Link>
		</>
	);
};

export default Product;
