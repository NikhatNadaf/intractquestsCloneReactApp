
import './App.css';
import Navbar from './components/Navbar';
import Head1 from './components/Head1';
import Bottom1 from './components/Bottom1';
import Bottom2 from './components/Bottom2';
import Footer from './components/Footer';
import SplashPage from './components/SplashPage';
import React,{useState,useEffect} from 'react';


function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showNavbarFooter, setShowNavbarFooter] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  useEffect(() => {
    if (!showSplash) {
      setTimeout(() => {
        setShowNavbarFooter(true);
      }, 500); // Delay for the navbar and footer to appear
      setTimeout(() => {
        setShowMainContent(true);
      }, 1500); // Further delay for the main content to appear
    }
  }, [showSplash]);

  return (
    <div className="App bg-black">
      {showSplash ? (
        <SplashPage onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          {showNavbarFooter && <Navbar />}
          {showMainContent && <><Head1/><Bottom1/><Bottom2/></>}
          {showNavbarFooter && <Footer />}
        </>
      )}
    </div>
  );
}

export default App;
