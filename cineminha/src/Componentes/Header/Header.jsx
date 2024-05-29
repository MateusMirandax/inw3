import NavBar from "../NavBar/NavBar";

function Header() {
    return ( 
        <header className="flex justify-around bg-white text-black p-4 border border-purple-600 rounded-lg mt-5">
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao MoviApp</h1>
            <NavBar/>
        </header>
     );
}
export default Header;