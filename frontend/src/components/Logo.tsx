import { ArchiveBoxIcon } from "@heroicons/react/24/solid";

export default function Logo() {
  return (
    <h2 className="mb-6 flex items-center justify-center gap-2 text-2xl font-bold text-blue-500">
      <ArchiveBoxIcon className="w-10 h-10 text-blue-500" />
      Sistema de Estoque
    </h2>
  );
}
