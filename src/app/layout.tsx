import "./reset.scss";
import "./global.scss";

import { Nunito } from "next/font/google";

export const metadata = {
	title: "Максимум",
	description: "Тестовый проект для Максимум",
};

const nunito = Nunito({
	weight: "400",
	style: "normal",
	subsets: ["cyrillic"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru" className={nunito.className}>
			<body>{children}</body>
		</html>
	);
}
