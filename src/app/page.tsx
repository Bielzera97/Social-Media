"use client"
import Post from "@/components/Post";
import {useEffect, useState } from "react";
import "./globals.css";
import axios from "axios";
import Title from "@/components/Titulo";
import { AiOutlineLoading } from "react-icons/ai";


export default function Home() {  


  const [posts, setPosts] = useState<any[]>([])
  const [titulo, setTitulo] = useState("")
  const [post, setPost] = useState("")
  const [loading , setLoading] = useState(false)


  const publicarPost = (e : any) => {
    e.preventDefault()
    axios.post("https://6644cd06b8925626f890007e.mockapi.io/api/v1/posts", {
      titulo : titulo,
      post : post
    });
    console.log("Valor aplicado com sucesso")
    
  }
  

  useEffect(() => {
    axios.get("https://6644cd06b8925626f890007e.mockapi.io/api/v1/posts").then((res : any) => setPosts(res.data)).then(() => setLoading(true))
  },[] )

 


  return (
    <>
      <h1 className=" font-bold text-xl flex justify-center text-center pt-10">Nossa Social-Média</h1>
      <main className="flex justify-around items-center">
        <div className=" flex justify-around items-center mt-36 gap-7">
          <form onSubmit={publicarPost} className="flex flex-col justify-start items-start ">
            <Title label="Título" value={titulo} onChange={(string : any) => setTitulo(string.target.value)}/>
            <Post label="Post" value={post} onChange={(string: any) => setPost(string.target.value)}/>
            <button className="relative inline-flex items-center justify-center p-3 mt-6 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">Publicar</button>
          </form>
        </div>
        <section className=" box-border">
            {loading ? posts.map((post : any) => {
              return(
                <section key={post.id}>
                  <h1 className="font-bold text-lg">{post.titulo}</h1>
                  <p>{post.post}</p>
                </section>
              );
            })  :  <AiOutlineLoading className="animate-spin text-5xl" />}
          </section>
      </main>
    </>
  );
}
