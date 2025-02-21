"use client";
import  React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const [user , setUser] = React.useState({
        email:"",
        password:""
    });
    const onLogin = async ()=>{
        const res = await fetch("/api/login",{method:"POST",body:JSON.stringify(user)});
        const data = await res.json();
        console.log(data);
    }
    return (
        <div className="text-center mt-5">
        <h1>Login</h1>
        <div className="container mt-5">
        <div className="text-center mt-5 bg-white  p-5 w-1/4 mx-auto">
        <input type="email" placeholder="Email" className="w-full p-2 my-2 border-2" onChange={(e)=>setUser({...user,email:e.target.value})}/>
        <input type="password" placeholder="Password" className="w-full p-2 my-2 border-2" onChange={(e)=>setUser({...user,password:e.target.value})}/>
        <button className="bg-blue-500 text-white p-2 w-full my-2" onClick={onLogin}>Login</button>
        <Link href="/signup">Don't have an account ? Signup</Link>

        </div>

        </div>
        
        </div>
    );
}