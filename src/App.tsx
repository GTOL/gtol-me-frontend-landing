import './App.css'
import NavItem from './NavItem'

function App() {
    return (
        <>
            <header className="w-full fixed top-10 left-0">
                <nav className="h-32 flex justify-center items-center space-x-4">
                    <NavItem label="About" hoverBgClass="hover:bg-[#f1a7c4]" />
                    <NavItem label="Blog" hoverBgClass="hover:bg-[#ffb6b0]" />
                    <NavItem label="Tools" hoverBgClass="hover:bg-[#f9e090]" />
                </nav>
            </header>
            <h1 className="select-none cursor-default text-6xl font-bold text-center">gtol.me</h1>
        </>
    )
}

export default App
