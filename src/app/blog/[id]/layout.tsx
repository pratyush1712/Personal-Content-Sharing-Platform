import "@/app/globals.css";
import { BlogLayout } from "@/components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<BlogLayout>{children}</BlogLayout>
		</main>
	);
}
