import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/* ---------------- LOGIN ---------------- */
export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  username: string;
  id: number;
}

export const loginApi = async (data: LoginPayload): Promise<LoginResponse> => {
  const res = await axios.post<LoginResponse>(
    "http://localhost:5000/api/auth/login",
    data
  );
  return res.data;
};

/* ---------------- QUESTION PAPERS ---------------- */
export interface QuestionPaper {
  id: number;
  class_name: string;
  subject_name: string;
  year: string; // ISO string from backend
  file_url: string;
  created_at: string;
  file_path: string;
}
export const getQuestionPapers = async (): Promise<QuestionPaper[]> => {
  const token = localStorage.getItem("token"); // <- declare it here
  if (!token) throw new Error("No token found");

  const res = await axios.get("http://localhost:5000/api/questionpapers");

  return res.data.data; // assuming your backend sends { data: [...] }
};

export const useQuestionPapers = () => {
  return useQuery<QuestionPaper[], Error>({
    queryKey: ["questionpapers"],
    queryFn: getQuestionPapers,
  });
};