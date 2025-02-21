"use client";
import Link from "next/link";
import  React from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const [user , setUser] = React.useState({
        name:"",
        email:"",
        password:""
    });
    const router = useRouter();
    const handleSignup = async ()=>{
        const res = await fetch("/api/signup",{method:"POST",body:JSON.stringify(user)});
        const data = await res.json();
        console.log(data);
        if(data.success){
            router.push("/login");
        }
    }
    
    return (
        <>
        <div className="container mt-5">
        <div className="text-center mt-5 bg-white  p-5 w-1/4 mx-auto">
        <h1>SIGN UP</h1>
        <input type="text" placeholder="Name" className="w-full p-2 my-2 border-2" onChange={(e)=>setUser({...user,name:e.target.value})}/>
        <input type="email" placeholder="Email" className="w-full p-2 my-2 border-2" onChange={(e)=>setUser({...user,email:e.target.value})}/>
        <input type="password" placeholder="Password" className="w-full p-2 my-2 border-2" onChange={(e)=>setUser({...user,password:e.target.value})}/>
        <button className="bg-blue-500 text-white p-2 w-full my-2" onClick={()=>console.log(user)}>Signup</button>
        <Link className="text-center mt-5" href="/login">You have already Account ? Login </Link>
       

        
        </div>
        
        </div>
        </>
    );
}