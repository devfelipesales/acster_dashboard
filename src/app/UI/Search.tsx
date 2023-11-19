"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search({ placeholder }: { placeholder: string }) {
  return (
    // <div className="relative flex flex-1 flex-shrink-0">
    //   <label htmlFor="search" className="sr-only">
    //     Search
    //   </label>
    //   <input
    //     className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-green-500"
    //     type="text"
    //     placeholder={placeholder}
    //     // onChange={(event) => handleSearch(event.target.value)}
    //     id="search"
    //     // defaultValue={searchParams.get("query")?.toString()}
    //   />
    //   <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    // </div>

    <div className="relative mb-6">
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
        <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
      </div>
      <input
        // onChange={(event) => handleSearch(event.target.value)}
        // defaultValue={searchParams.get("query")?.toString()}
        type="text"
        id="search"
        name="search"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900  focus:outline-2 focus:outline-teal-200"
        placeholder={placeholder}
      />
    </div>
  );
}
