import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
	return (
		<>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/profile">Profile</Link>
				<Link href="/blog">Blog</Link>
				<Link href="/products">Products</Link>
				<Link href="/docs">Docs</Link>
			</nav>
			<Component {...pageProps} />
		</>
	);
}
