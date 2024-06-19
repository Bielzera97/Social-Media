"use client"
import Input from "@/components/Input";
import {useEffect, useState } from "react";
import "./globals.css";
import axios from "axios";


export default function Home() {  


  const [posts, setPosts] = useState<any[]>([])
  const [titulo, setTitulo] = useState("")
  const [post, setPost] = useState("")


  useEffect(() => {
    axios.get("https://6644cd06b8925626f890007e.mockapi.io/api/v1/posts").then((res : any) => setPosts(res.data))
  },[] )

 
  
  

  const publicarPost = (e: any) => {
    e.preventDefault()
    axios.post("https://6644cd06b8925626f890007e.mockapi.io/api/v1/posts", {
      titulo : titulo,
      post : post
    });
    console.log("Valor aplicado com sucesso")
  }
 

  return (
    <main>
      <Input label="Título" value={titulo} onChange={(string : any) => setTitulo(string.target.value)}/>
      <Input label="Post" value={post} onChange={(string: any) => setPost(string.target.value)}/>
      <button onClick={publicarPost}>Publicar</button>
      <section>
        {posts.map((post) => {
          return(
            <p className="" key={post.id}>{post.titulo} e {post.post}</p>
          )
        })}
      </section>
    </main>
  );
}
