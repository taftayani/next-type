interface HeadProps {
	title: any;
}
export default function Head(props: HeadProps) {
	return (
		<>
			<title>{props.title}</title>
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</>
	);
}
