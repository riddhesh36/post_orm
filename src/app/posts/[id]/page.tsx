
import { notFound, redirect } from "next/navigation";

export default async function Page({ 
    params,
 }:{
    params : Promise<{id: string}>;
 }){
    const id = (await params).id;
    const post = await prisma.post.findUnique({
        where: {    
            id: String(id),
        },
    });
    if(!post){
        return notFound();
    }
    return(
        <div className="text-center pt-12">
            <h1 className="text-bold text-5xl capitalize text-purple-600">{post.title}</h1>
            <p className="whitespace-pre-wrap mt-4">{post.content}</p>
        </div>
    )
}