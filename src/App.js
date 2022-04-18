import Header from './components/Header.js';
import ShortPost from './components/ShortPost.js';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="white-space"></div>
            <main>
                <ShortPost />
            </main>
        </div>
    );
}

export default App;
