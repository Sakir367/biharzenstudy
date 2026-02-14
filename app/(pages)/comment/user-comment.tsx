"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import axios from "axios";
import { useRouter } from "next/navigation"; // Next.js 13+ App Router

// ------------------- ZOD Schema -------------------
const commentSchema = z.object({
  name: z.string().min(2, "Name is required"),
client: z.string().optional(),
    customClient: z.string().optional(),
  chat: z.string().min(5, "Comment must be at least 5 characters"),
  star: z.enum(["1","2","3","4","5"], "Select a rating"),
  image: z
    .any()
    .refine((file) => !file || file.length === 0 || file[0] instanceof File, "Invalid file")
    .optional(),
});

type CommentFormValues = z.infer<typeof commentSchema>;

// ------------------- API Call -------------------
const submitUserComment = async (formData: FormData) => {
  const res = await axios.post(
    "http://localhost:5000/api/ucer-comment", // backend endpoint
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return res.data;
};

// ------------------- Component -------------------
const UserComment = () => {
    const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
     reset,
    formState: { errors },
  } = useForm<CommentFormValues>({
    resolver: zodResolver(commentSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: CommentFormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
   if (data.client || data.customClient)
  formData.append("client", data.customClient || data.client!);
      formData.append("chat", data.chat);
      formData.append("star", data.star);

      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }
reset();
 router.push("/");
      const response = await submitUserComment(formData);
      alert("Comment submitted successfully!");
      console.log("API Response:", response);
    } catch (err: any) {
      alert("Failed to submit comment: " + err.message);
    }
  };

  const selectedClient = watch("client");
  const customClient = watch("customClient");
  const selectedStar = watch("star");

  return (
<div className="flex flex-col gap-5 items-center  max-w-390 w-full lg:w-[90%] mx-auto bg-white px-5 py-10 mt-5">
   <h2 className="text-2xl font-bold text-center">User Comment</h2>
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
     <div className="w-full mx-auto lg:p-5  flex flex-col gap-5">
     

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Name *</p>
          <Input type="text" placeholder="Enter Your Name" {...register("name")} />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* User Type */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">User Type *</p>
          <Select onValueChange={(val) => setValue("client", val as "Student" | "Professional" | "Other")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={customClient || selectedClient || "Select User Type"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Or type your role..."
            className="mt-2"
            {...register("customClient")}
          />
          {(errors.client || errors.customClient) && (
            <p className="text-red-500 text-xs">
              {errors.client?.message || errors.customClient?.message}
            </p>
          )}
        </div>

        {/* Comment */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Comment *</p>
          <Textarea placeholder="Enter Your Comment" {...register("chat")} />
          {errors.chat && <p className="text-red-500 text-xs">{errors.chat.message}</p>}
        </div>

        {/* Star */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Star *</p>
          <Select onValueChange={(val) => setValue("star", val as "1"|"2"|"3"|"4"|"5")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={selectedStar || "Rate Experience *"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">1 Very Low</SelectItem>
                <SelectItem value="2">2 Low</SelectItem>
                <SelectItem value="3">3 Medium</SelectItem>
                <SelectItem value="4">4 High</SelectItem>
                <SelectItem value="5">5 Very High</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.star && <p className="text-red-500 text-xs">{errors.star.message}</p>}
        </div>

        {/* Profile Image */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Profile Image (Optional)</p>
          <Input type="file" {...register("image")} />
          {/* {errors.image && <p className="text-red-500 text-xs">{errors.image.message}</p>} */}
        </div>

        <button
          type="submit"
          className="bg-[#004249] cursor-pointer text-white py-2 px-4 rounded mt-3"
        >
          Submit
        </button>
      </form>
    </div>

     <img
            className="w-full rounded-sm h-full object-cover bg-[#004249]"
            src="images/bglogo.png"
            alt="logo"
          />

 </div>
</div>
  );
};

export default UserComment;
