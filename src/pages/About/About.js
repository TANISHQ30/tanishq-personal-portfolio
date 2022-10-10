import '../../App.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function About() {
  const currentPage = 'About';
  return (
    <div className="App">
      <body className="flex flex-col min-h-screen pattern-dots pattern-stone-900 pattern-bg-black pattern-opacity-100 pattern-size-6">
        <Navbar parentToChild={currentPage} />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/About/About.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Footer />
      </body>
    </div>
  );
}

export default About;
