"use client";

import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-[#3db7c7]">
      <div className="max-w-390 w-[95%] mx-auto py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        {/* Logo */}
        <p className="text-[20px] md:text-[24px] font-bold text-white text-center md:text-left">
          BiharZen Study
        </p>
 

        {/* Select Section */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
           <div className="overflow-hidden w-full">
  <p
    className="marquee-text text-[18px] md:text-[28px] text-center font-bold text-white"
    style={{
      textShadow: "2px 2px 2px #3db7c7",
    }}
  >
    Previous Year Question Papers
  </p>
</div>

          <Select  onValueChange={(value) => router.push(value)}>
           <SelectTrigger className="w-full  text-white data-placeholder:text-white">
  <SelectValue placeholder="Question Papers" />
</SelectTrigger>

            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectItem value="/class10">Class-10</SelectItem>
                <SelectItem value="Class-12">Class-12</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-40 text-white">
              <SelectValue placeholder="Notes & Solutions" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectItem value="Class-10">Class-10</SelectItem>
                <SelectItem value="Class-12">Class-12</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-40 text-white">
              <SelectValue placeholder="MCQ" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectItem value="Class-10">Class-10</SelectItem>
                <SelectItem value="Class-12">Class-12</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
