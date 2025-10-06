
import createPost from "@/actions/actions";

export default function Page(){
    return(
        <div>
            <h1 className="mt-12 text-center font-bold text-4xl">Create Post</h1>
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
    )
}