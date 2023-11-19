import { Link } from "react-router-dom";

interface LinkButtonProps {
  title: string;
  href: string;
}

export const LinkButton = ({ title, href }: LinkButtonProps) => {
  return (
    <Link
      to={href}
      className="border border-secondary bg-primary/70 hover:bg-secondary/50 hover:shadow-black/60 transition-colors italic shadow-md shadow-black/40 text-lg p-2 rounded-md"
    >
      {title}
    </Link>
  );
};
