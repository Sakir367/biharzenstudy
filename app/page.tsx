"use client"
import Image from "next/image";
import Navbar from "./_components/navbar";
import HomePage from "./(pages)/home/page";
import { useEffect, useState } from "react";

export default function Home() {


  return (
  <div className="flex gap-5 flex-col bg-[#EEEEEE] pt-5">
  
    <HomePage/>
  </div>
  );
}
