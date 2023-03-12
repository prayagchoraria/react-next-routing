import Link from "next/link";
import React from "react";

const Products = () => {
	return (
		<>
			<h1>Products Page</h1>
			<ul>
				<li>
					<Link href="/products/1">Product 1</Link>
				</li>
				<li>
					<Link href="/products/2">Product 2</Link>
				</li>
				<li>
					<Link href="/products/3">Product 3</Link>
				</li>
				<li>
					<Link href="/products/4">Product 4</Link>
				</li>
			</ul>
		</>
	);
};

export default Products;
