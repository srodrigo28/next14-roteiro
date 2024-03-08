"use client"

import Link from "next/link"

export default function Login(){
    return(
        <main className="flex pb-60 items-center justify-center h-screen bg-gray-700">
            <form className="p-8 flex flex-col items-center container space-y-6 max-w-md rounded-xl bg-gray-300 shadow-xl">
                <div className="flex items-center gap-2 max-w-md">
                    <span className="text-emerald-500 text-3xl font-bold">Logo</span>
                    <h1 className="uppercase text-slate-600 font-bold text-xl">App Finanças</h1>
                </div>

                <input type="text" placeholder="email@exemplo.com"
                    className="w-full p-3 font-bold text-md rounded-md"
                />
                <input type="password" placeholder="********************"
                    className="w-full text-center p-3 font-bold text-md rounded-md"
                />

                <div className="flex max-w-md gap-12">
                    <button className="w-32 bg-emerald-600 font-bold p-3 rounded-md text-white">
                        <Link href="/"> Entrar </Link>
                    </button>

                    <button className="w-32 bg-cyan-600 font-bold p-3 rounded-md text-white">
                        <Link href="/"> Entrar </Link>
                    </button>
                </div>
                
            </form>
        </main>
    )
}