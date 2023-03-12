import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Reviews = () => {
	const router = useRouter();
	const { productId } = router.query;
	return (
		<>
			<h1>Product {productId} Review Page</h1>
			<ul>
				<li>
					<Link href={`/products/${productId}/reviews/1`}>Review 1</Link>
				</li>
				<li>
					<Link href={`/products/${productId}/reviews/2`}>Review 2</Link>
				</li>
				<li>
					<Link href={`/products/${productId}/reviews/3`}>Review 3</Link>
				</li>
			</ul>
		</>
	);
};

export default Reviews;
