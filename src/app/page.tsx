"use client"
import Post from "@/components/Post";
import {useEffect, useState } from "react";
import "./globals.css";
import axios from "axios";
import Title from "@/components/Titulo";


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
    <main className="mx-16">
      <form onSubmit={publicarPost} className="flex flex-col justify-start items-start ">
        <Title label="Título" value={titulo} onChange={(string : any) => setTitulo(string.target.value)}/>
        <Post label="Post" value={post} onChange={(string: any) => setPost(string.target.value)}/>
        <button  className="relative inline-flex items-center justify-center p-3 mt-8 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">Publicar</button>
      </form>
      <section>
        {loading ? posts.map((post : any) => {
          return(
            <section key={post.id}>
              <h1 className="font-bold text-lg">{post.titulo}</h1>
              <p>{post.post}</p>
            </section>
          );
        })  :  <p className="flex justify-center">Loading</p>}
      </section>
    </main>
  );
}
