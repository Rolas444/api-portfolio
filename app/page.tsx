'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  const toRegister = ()=>{
    route.push('/auth/register');
  }

  return (
    <main>
      <div className="w-full mt-5">
        <h1 className="text-xl text-white text-center">Welcome to my portfolio Application</h1>

      </div>
      <div className="w-full flex justify-center items-center mt-5">
        <button className="p-2 rounded-md bg-blue-800 text-white" onClick={toRegister}>
          Registrarse
        </button>
      </div>
    </main>
  );
}
