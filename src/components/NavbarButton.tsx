import Button from "@/components/ui/Button";
import { ButtonHTMLAttributes } from "react";

export default function NavbarButton({
	children,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<Button className="p-2 mx-2 md:w-24 text-white hover:bg-slate-500 hover:opacity-50">
			{children}
		</Button>
	);
}
