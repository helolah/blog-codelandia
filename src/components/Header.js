import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header>
            <div className="header-titles">
                <h1>Codelândia</h1>
            </div>
            <div className="search-box">
                <form action="#" method="POST" id="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                    <input type="text" name="search-bar" id="search-bar" placeholder="Pesquisar no blog"/>
                </form>
                <div className="white-space"></div>
            </div>
        </header>
    );
}

export default Header;