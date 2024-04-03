export default function Login() {
    return (
            <main className='h-screen w-full'>
                    <section className="flex flex-col items-center justify-center h-5/6">
                            <div className="flex flex-col items-center justify-center h-1/2 w-1/3 bg-slate-400 rounded-2xl space-y-7">
                                    <h1>
                                        Sign In
                                    </h1>
                                    <div className="flex flex-row space-x-2">
                                            <label for="f-email">
                                                    Enter Your Email Address:
                                            </label>
                                            <input type="text" name="f-email" className="rounded-2xl text-center"/>
                                    </div>
                                    <div className="flex flex-row space-x-2">
                                            <label for="f-password">
                                                    Create a Password:
                                            </label>
                                            <input type="text" name="f-password" className="rounded-2xl text-center"/>
                                    </div>
                                    <button className="bg-white rounded-2xl p-3">
                                            Sign In
                                    </button>
                            </div>
                    </section>
            </main>
    );
}