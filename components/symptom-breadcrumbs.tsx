import Link from "next/link";

interface BreadcrumbsProps {
  currentPage: string;
}

export default function SymptomBreadcrumbs({ currentPage }: BreadcrumbsProps) {
  return (
    <div className="bg-secondary/30 px-6 py-3">
      <div className="max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition">
            Hem
          </Link>
          <span>/</span>
          <Link href="/symptomer" className="hover:text-foreground transition">
            Symptomer
          </Link>
          <span>/</span>
          <span className="text-foreground">{currentPage}</span>
        </nav>
      </div>
    </div>
  );
}
