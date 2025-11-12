"use client";
import { useRouter } from "next/navigation";
const Blog = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-y-2">
        <h1 className="uppercase font-mono">Coming Soon...</h1>
        <button
          onClick={() => router.back()}
          className="px-3 py-1 text-xs font-medium border border-current/20 rounded hover:bg-current/10 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Blog;
