"use client"; // ✅ Required for Next.js Client Component

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { SearchIcon } from "lucide-react";
import ProfessionalLoader from "@/app/_components/professiona-loader";

const Class12Notes = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
const [currentPage, setCurrentPage] = useState<any>(1);
const itemsPerPage = 12;


  // ✅ Backend API
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  // 🔹 Fetch API Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_BASE_URL}/api/notes/class12`);
        if (!res.ok) throw new Error("Network response was not ok");

        const json = await res.json();
        setData(json.data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_BASE_URL]);

  // 🔹 Filtered Data
 const filteredData = data.filter((item) => {
  // Convert everything to lowercase for case-insensitive search
  const searchLower = search.toLowerCase();

  const matchesSearch =
    item.class_name.toLowerCase().includes(searchLower) ||
    item.subject_name.toLowerCase().includes(searchLower) ||
    String(new Date(item.year).getFullYear()).includes(searchLower);

  const matchesFilter = statusFilter === "all" || item.subject_name === statusFilter;

  return matchesSearch && matchesFilter;
});

const totalPages = Math.ceil(filteredData.length / itemsPerPage);

const getPageNumbers = () => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pages.push("...");
    }
  }

  return pages;
};  


const startIndex = (currentPage - 1) * itemsPerPage;
const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);
 if (loading) {
    return (
  <ProfessionalLoader/>
    );
  }

  // ✅ Error UI
  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        {error}
      </div>
    );
  }

  return (
    <div className="w-[90%] flex flex-col gap-5 mx-auto">
      {/* Search + Filter */}
      <div className="flex border border-[#004249] overflow-x-auto rounded-sm p-5 items-center gap-5">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="md:w-full w-44 pl-10 pr-4 py-2 border border-[#004249] text-black rounded-md text-sm"
          />
        </div>

        <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value)}>
          <SelectTrigger className="w-40 border border-[#004249]">
            <SelectValue placeholder="All Subject" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Subject</SelectItem>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Hindi">Hindi</SelectItem>
              <SelectItem value="Mathematics">Mathematics</SelectItem>
              <SelectItem value="Science">Science</SelectItem>
              <SelectItem value="Social Science">Social Science</SelectItem>
              <SelectItem value="Physics">Physics</SelectItem>
              <SelectItem value="Chemistry">Chemistry</SelectItem>
              <SelectItem value="Biology">Biology</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Cards */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
  {currentData.length > 0 ? (
    currentData.map((item) => (
      <div
        key={item.id}
        className="border shadow-xl flex flex-col gap-0.5 p-5 rounded-sm bg-[#F5F0FE] border-[#7C3BED3D]"
      >
        <div className="flex justify-between">
          <p className="text-[14px] md:text-[18px] font-bold text-[#212227]">Class</p>
          <p className="text-[14px] md:text-[18px] font-bold text-[#212227]">{item.class_name}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[12px] md:text-[14px] text-[#212227] font-medium">Subject</p>
          <p className="text-[12px] md:text-[14px] text-[#212227] font-medium">{item.subject_name}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[12px] md:text-[14px] text-[#212227] font-medium">Year</p>
          <p className="text-[12px] md:text-[14px] text-[#212227] font-medium">{new Date(item.year).getFullYear()}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between w-full gap-2 mt-2">
          <p className="text-[12px] md:text-[14px] text-[#212227] font-medium">
            {new Date(item.created_at)
              .toLocaleDateString("en-CA", {
                day: "2-digit",
                year: "numeric",
                month: "2-digit",
              })
              .replace(/-/g, ". ")}
          </p>

          {/* View PDF in new tab */}
          <button
            className="bg-[#004249] cursor-pointer text-white text-[14px] font-normal px-3 py-1 rounded hover:bg-[#63a6d6]/80"
            onClick={() => window.open(`${API_BASE_URL}${item.file_url}`, "_blank")}
          >
            View PDF
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center col-span-full text-red-500 font-bold text-lg">
      No Data Now
    </p>
  )}
</div>




<Pagination>
  <PaginationContent>
    {/* Previous */}
    <PaginationItem>
      <PaginationPrevious
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
        className="hover:bg-[#004249] hover:text-white"
      />
    </PaginationItem>

  
{getPageNumbers().map((page, index) => (
  <PaginationItem key={index}>
    {page === "..." ? (
      <PaginationEllipsis />
    ) : (
      <PaginationLink
        href="#"
        isActive={currentPage === page}
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage(page);
        }}
        className={`${currentPage === page ? "bg-[#004249] text-white" : ""}`}
      >
        {page}
      </PaginationLink>
    )}
  </PaginationItem>
))}


    {/* Next */}
    <PaginationItem>
      <PaginationNext
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        }}
          className=" hover:bg-[#004249] hover:text-white"
      />
    </PaginationItem>
  </PaginationContent>
</Pagination>

    </div>
  );
};

export default Class12Notes;
