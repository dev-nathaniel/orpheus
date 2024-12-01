import './App.scss';
import NavBar from './components/navBar/NavBar'
import Header from './components/header/Header'
import RecentSec from './components/recentSec/RecentSec'
import ContributionSec from './components/contributionSec/ContributionSec'
import Footer from './components/footer/Footer'
import {useSelector} from 'react-redux'

function App() {

  const theme = useSelector((state) => state.theme.theme === null ? null : state.theme.theme);
  const body = document.body

  body.classList.add(theme);

  return (
    <div className="App">
      <NavBar />
      <Header />
      <RecentSec />
      <ContributionSec />
      <Footer />
    </div>
  );
}

export default App;
