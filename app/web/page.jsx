'use client'
// import { signOut } from "next-auth/react"

const HomePage = () => {
    return (<>
        <section className="h-[calc(100vh-7rem)] flex justify-center">
            <h1 className="text-white text-5xl">Dashboard</h1>

        </section>
        <div className="w-full justify-center">
            {/* <button onClick={signOut} className="bg-white text-black px-4 py-2 rounded-md mt-4">
                Logout
            </button> */}
        </div>
    </>)
}

export default HomePage