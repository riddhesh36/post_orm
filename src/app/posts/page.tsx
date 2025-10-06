import createPost from "@/actions/actions";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Page() {
  // Server component: can call Prisma directly
  const gradients = [
    "from-blue-700 via-blue-800 to-blue-900",
    "from-blue-600 via-blue-700 to-blue-800",
    "from-blue-500 via-blue-600 to-blue-700",
  ];
  const posts = await prisma.post.findMany(); 

  return (
    <div className="bg-white h-full w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <a
            href={`/posts/${post.id}`}
            key={post.id}
            className={`bg-gradient-to-r ${gradients[index % gradients.length]} 
                       rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300`}
          >
            <h2 className="text-white text-xl font-regular mb-2">{post.title}</h2>
            {/* <p className="text-white/90 line-clamp-3">{post.content}</p> */}
            <p className="text-white/70 mt-3 text-sm">
      {new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </p>
          </a>
        ))}
      </div>


    </div>
  );
}
