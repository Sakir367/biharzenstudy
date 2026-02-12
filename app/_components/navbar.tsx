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
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-[#3db7c7]">
      <div className="max-w-390 w-[95%] mx-auto py-4 flex flex-col xl:flex-row lg:justify-between lg:items-center gap-4">

        {/* Logo */}
        <p className="text-[20px] text-nowrap md:text-[24px] font-bold text-white text-center md:text-left">
          <span className='text-[#DC2626]'>Bihar</span>Notes  Hub
        </p>
 

        {/* Select Section */}
        <div className="flex flex-col xl:flex-row gap-3 w-full lg:w-auto">
 

<Button className="bg-[#3db7c7] hover:bg-[#3db7c7] cursor-pointer border border-white">About</Button>
          <Select  onValueChange={(value) => router.push(value)}>
           <SelectTrigger className="w-full lg:w-auto cursor-pointer text-white data-placeholder:text-white">
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
            <SelectTrigger className="w-full cursor-pointer lg:w-auto text-white">
              <SelectValue placeholder="Notes & Solutions" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectItem value="Class-10">Class-10</SelectItem>
                <SelectItem value="Class-12">Class-12</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

       

<Button className="bg-[#3db7c7] hover:bg-[#3db7c7] cursor-pointer border border-white">MCQ</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
