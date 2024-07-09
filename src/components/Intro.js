export default function Intro1({ title="New Intro Title", description="New Intro Description" }) {
	return (
		<>
			<div className="blog-post-intro">
				<h2>{title}</h2>
				<div>
					<p>{description}</p>
					<p className="link">Read more...</p>
				</div>
			</div>
		</>
	);
}