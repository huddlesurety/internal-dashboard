import { PageHeader } from "@/src/components/common/page-header";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-full">
      <PageHeader title="Organizations" />
      <div className="p-6">
        <p className="text-slate-500">This is Organizations</p>
      </div>
    </div>
  );
}
