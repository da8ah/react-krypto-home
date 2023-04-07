import Button from "@/components/ui/Button";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	outlined?: boolean;
}

export default function HeroButton({ children, outlined }: ButtonProps) {
	return (
		<Button
			className={`rounded-3xl md:rounded-full mx-2 py-2 px-5 md:p-5 md:w-52 text-white hover:bg-cyan-500 ${
				outlined ? "border border-white" : "bg-[#7E80D7]"
			}`}
		>
			{children}
		</Button>
	);
}
