"use client";

import ProfessionalLoader from "@/app/_components/professiona-loader";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface Comment {
  id: number;
  chat: string;
  name: string;
  client: string;
  image: string | null;
  star: number;
  created_at: string;
}

const CommentView = () => {
  const { commentId } = useParams();
  const id = Number(commentId);

  const [subject, setSubject] = useState<Comment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/api/ucer-comment/${id}`);
        if (!res.ok) throw new Error("Failed to fetch comment");

        const json = await res.json();
        setSubject(json.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (!isNaN(id)) fetchSubject();
  }, [id, API_BASE_URL]);

  // ✅ Loading UI (Page Skeleton)
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

  // ✅ Main Content
  return (
    <div className="flex flex-col gap-5 items-center max-w-390 w-full lg:w-[90%] mx-auto bg-white px-5 py-10 mt-5">
      <h2 className="text-2xl font-bold text-center">User Comment</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="w-full mx-auto lg:p-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-[14px] lg:text-[18px] text-[#6D6E67]">
              <span className="font-bold">Name :</span> {subject?.name}
            </h1>

            <p className="text-[14px] lg:text-[16px] text-[#6D6E67]">
              <span className="font-bold">Star :</span> {subject?.star}
            </p>

            <p className="text-[14px] lg:text-[16px] text-[#6D6E67]">
              <span className="font-bold">Comment :</span> {subject?.chat}
            </p>

            {subject?.image && (
              <img
                alt="comment"
                src={`${API_BASE_URL}${subject.image}`}
                className="aspect-square w-full"
              />
            )}
          </div>
        </div>

        <img
          className="w-full rounded-sm h-full object-cover bg-[#157e8b]"
          src="/images/bglogo.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default CommentView;
