"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((text) => {
    const params = new URLSearchParams(searchParams);
    console.log(params);
    params.set("page", "1");
    if (text) {
      params.set("query", text);
    } else {
      params.delete("query");
    }
    console.log(params);
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative mb-6 grow">
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
        <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
      </div>

      <input
        type="text"
        id="search"
        name="search"
        onChange={(event) => handleSearch(event.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 ps-10 text-sm text-gray-900 focus:border-emerald-300 focus:ring-emerald-300"
        placeholder={placeholder}
      />
    </div>
  );
}
