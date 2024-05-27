import NavBar from "../NavBar/NavBar";

function Header() {
    return ( 
        <header className="flex justify-around bg-black text-white p-4">
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao MoviApp</h1>
            <NavBar/>
        </header>
     );
}
export default Header;