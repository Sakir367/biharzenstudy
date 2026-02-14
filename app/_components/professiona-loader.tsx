"use client";

export default function ProfessionalLoader() {
  return (
     <div className=" rounded-2xl  p-8 w-full">
        
        {/* Spinner */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-[#157e8b] rounded-full animate-spin"></div>
        </div>

        {/* Title Skeleton */}
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4 animate-pulse"></div>


        {/* Loading Text */}
        <p className="text-center text-sm text-gray-500 ">
          Loading, please wait...
        </p>

      </div>
  );
}
