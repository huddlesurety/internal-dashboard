interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="flex h-14 items-center px-6">
        <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
      </div>
    </header>
  );
}
