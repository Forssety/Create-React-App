import './App.css';
import Header from './components/Header';
import Infobottom from './components/Infobottom';
import Infocenter from './components/Infocenter';
import Infoleft from './components/Infoleft';

function App() {
return (
    <main className="main">
        <Header />
        <div className="info">
        <Infoleft />
        <Infocenter />
        <Infobottom />
    </div>
    </main>
);
}

export default App;