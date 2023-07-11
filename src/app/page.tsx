const getCars = async () => {
	try {
		const link = "http://localhost:3000/api/cars";

		const res = await fetch(`${link}`, {
			method: "GET",
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error(`Failed to fetch cars info: ${res.statusText}`);
		}

		return res.json();
	} catch (error) {
		console.error(error);
	}
};

export default async function Home() {
	const cars = await getCars();

	console.log(cars);

	return <main>1</main>;
}
