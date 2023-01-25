import Link from 'next/link';
import Head from '../head';
export default function Detail() {
	return (
		<>
			<Head title="Detail Page" />
			<Link href={'/'}>Go back</Link>
			<h1>This is detail</h1>
		</>
	);
}
