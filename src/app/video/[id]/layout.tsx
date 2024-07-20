import "@/app/globals.css";
import { VideoLayout } from "@/components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<VideoLayout>{children}</VideoLayout>
		</main>
	);
}
