import './App.css';
import Header from './components/Header/Header';
import Infocenter from './components/Infocenter/Infocenter';
import Infoleft from './components/Infoleft/Infoleft';

function App() {
return (
    <main className="main">
        <Header />
        <div className="info">
        <Infoleft />
        <Infocenter />
    </div>
    </main>
);
}

export default App;