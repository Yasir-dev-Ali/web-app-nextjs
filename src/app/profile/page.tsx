"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Profile() {
    const router = useRouter();
    return (
        <>
        <div className="text-center mt-5">
        <h1>Profile</h1>
        <div className="container mt-5">
        <div className="text-center mt-5 bg-white  p-5 w-1/4 mx-auto">
        <h1>Profile</h1>
        <button className="bg-blue-500 text-white p-2 w-full my-2" onClick={()=>router.push("/login")}>Logout</button>
        </div>

        </div>
        
        </div>
        </>
    );
}
