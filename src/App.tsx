import './App.css'

function App() {
    return (
        <>
            <header className="w-full fixed top-10 left-0">
                <nav className="h-32 flex justify-center items-center space-x-8">
                    <div className="size-32 flex justify-center items-center">
                        <div className="size-16 content-center rounded-full transition-all cursor-pointer hover:size-32 hover:bg-[#f1a7c4] hover:inset-shadow-sm/30">
                            About
                        </div>
                    </div>
                    <div className="size-32 flex justify-center items-center">
                        <div className="size-16 content-center rounded-full transition-all cursor-pointer hover:size-32 hover:bg-[#ffb6b0] hover:inset-shadow-sm/30">
                            Blog
                        </div>
                    </div>
                    <div className="size-32 flex justify-center items-center">
                        <div className="size-16 content-center rounded-full transition-all cursor-pointer hover:size-32 hover:bg-[#f9e090] hover:inset-shadow-sm/30">
                            Tools
                        </div>
                    </div>
                </nav>
            </header>
            <h1 className="select-none cursor-default text-6xl font-bold text-center">gtol.me</h1>
        </>
    )
}

export default App
