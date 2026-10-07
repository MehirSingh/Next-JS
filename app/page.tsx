import Image from "next/image" ;
import Card from "@/components/Card" ;
import { someAction } from "@/app/actions/actions" ;

export default function Home() {
    return (
      <>
      <h1>
        Hello World!
      </h1>
      <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-30" 
      onClick={someAction}>Click me</button>
      </>
      
    )
}

