import Header from './components/header/header';
import Home from './components/home/home';
import Services from './components/services/services';
import About from './components/about/about';
import Statistics from './components/statistics/statistics';
import Team from './components/team/team';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
        <Header />
        <Home />
        <Services />
        <About />
        <Statistics />
        <Team />
        <Footer />
    </div>
  );
}

export default App;