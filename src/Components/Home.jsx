import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		async function fetchStories() {
			const datas = await fetch(
				"https://jsonplaceholder.typicode.com/posts?_limit=15"
			);
			const datasJSON = await datas.json();
			setStories(datasJSON);
		}

		fetchStories();
	}, []);

	return (
		<main>
			
			{stories.length ? (
				stories.map((story) => (
					<article key={story.id}>
						<h2>{story.title}</h2>
                        <Link to={`/story/${story.id}`}>Read more</Link>
					</article>
				))
			) : (
				<p>Chargement</p>
			)}
		</main>
	);
}

export default Home;
