import { prisma } from "@/lib/prisma";

export default async function Home() {
  // Fetch only 3 latest posts for home page
  const posts = await prisma.post.findMany({
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  // Define an array of gradient classes
  const gradients = [
    "from-blue-700 via-blue-800 to-blue-900",
    "from-blue-600 via-blue-700 to-blue-800",
    "from-blue-500 via-blue-600 to-blue-700",
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-center text-4xl font-bold mb-12">Welcome to my blogs</h1>

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

      <div className="text-center mt-8">
        <a href="/posts" className="text-blue-600 font-semibold hover:underline">
          See all posts
        </a>
      </div>
    </div>
  );
}
