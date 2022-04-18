import Header from './components/Header.js';
import ShortPost from './components/ShortPost.js';
import Footer from './components/Footer.js';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="white-space"></div>
            <main>
                <ShortPost />
                <ShortPost />
            </main>
            <div className="white-space"></div>
            <Footer />
        </div>
    );
}

export default App;
