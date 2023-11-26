"use client";

import { Pagination } from "flowbite-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PaginationComponent({
  totalPages,
}: {
  totalPages: number;
}) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const onPageChange = (page: number) => {
    params.set("page", page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        previousLabel=""
        nextLabel=""
        showIcons
        theme={{
          pages: {
            selector: {
              active: "bg-emerald-200 text-emerald-600",
            },
          },
        }}
      />
    </div>
  );
}
