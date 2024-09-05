import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Story() {
	const param = useParams();

	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${param.id}`
			);
			const dataJSON = await response.json();
			setData(dataJSON)
		}
		fetchData();
	}, []);

	return (
		<main>
			<p>How do you feel today, locals.username</p>

			<Link to={"/"}>Back to home</Link>

			{!data ? (
				<p>Loading ... !</p>
			) : (
				<article>
					<h2>{data.title}</h2>
					<img src="/img/data.img" />
					<p>{data.body}</p>

					<p>
						<em>
							By {data.userId} on unknown date !
						</em>
					</p>
				</article>
			)}
		</main>
	);
}

export default Story;
