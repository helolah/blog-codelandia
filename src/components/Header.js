function Header() {
    return (
        <header>
            <div className="header-titles">
                <h1>Codelândia</h1>
            </div>
            <div className="search-box">
                <form action="#" method="POST" id="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="search-bar" id="search-bar" placeholder="Pesquisar no blog"/>
                </form>
            </div>
        </header>
    );
}

export default Header;