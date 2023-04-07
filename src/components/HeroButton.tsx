import Button from "@/components/ui/Button";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	outlined?: boolean;
}

export default function HeroButton({ children, outlined }: ButtonProps) {
	return (
		<Button
			className={`rounded-full p-5 mx-2 md:w-52 text-white hover:bg-cyan-500 ${
				outlined ? "border border-white" : "bg-[#7E80D7]"
			}`}
		>
			{children}
		</Button>
	);
}
