"use cleint";
import React from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";


export default function userProfile({params}:any) {
    console.log(params);
    // const router = useRouter();
    return (
        <>
        <div className="text-center mt-5">
        <h1>Profile Details {params.id} </h1>
        <div className="container mt-5">
        <div className="text-center mt-5 bg-white  p-5 w-1/4 mx-auto">
        
        <button className="bg-blue-500 text-white p-2 w-full my-2">Logout</button>
        </div>
        </div>
        </div>
        </>
    )
}