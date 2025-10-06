import createPost from "@/actions/actions";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Page() {
  // Server component: can call Prisma directly
  
  const posts = await prisma.post.findMany(); 

  return (
    <div className="bg-white h-full w-full">
      <div>
        <ul>
          {posts.map((post: { id: string; title: string }) => (
            <li className="mb-4" key={post.id}>
              <a className="text-blue-500" href={`/posts/${post.id}`}>
                {post.title}
              </a>
            </li>
          ))}
        </ul>
        <form action={createPost} className="max-w-[400px] mx-auto mt-24">
            <input
            type="text"
            placeholder="Enter Title"
            className="border p-2 mb-2 w-full rounded-md"
            name="title"
            />
            <textarea
            placeholder="Enter Content"
            className="border p-2 mb-2 w-full rounded-md"
            name="content"
            />
            <button
            type="submit"
            className="bg-blue-700 text-white px-3 py-1 rounded-md"
            >
                Create Post
            </button>
        </form>
      </div>

    </div>
  );
}
