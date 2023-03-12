import { useRouter } from "next/router";
import React from "react";

const Docs = () => {
	const router = useRouter();
	const { params = [] } = router.query;
	const types = ["feature", "concept", "example"];
	return (
		<h1>
			{" "}
			This doc is for{" "}
			{params.map((param, index) => `${types[index]} ${param}`).join(" ")}
		</h1>
	);
};

export default Docs;
