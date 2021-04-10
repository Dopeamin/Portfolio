import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Med Amine Hamdouni</h1>
        <p>Full Stack Developer</p>
      </header>
      <div className="App-section">
        <div className="container">
          <div className="title">
            <h3>Explore, Create, Innovate</h3>
            <h1>Full Stack<br></br>Web Developer</h1>
            <p>My name is Mohamed Amine Hamdouni, Hard working Software Engineering Student with problem leadership, organizational and communcation skills 
              seeking to apply my skills. I'm curious by nature as im always intrigued about new technologies and how to solve problems differently and effectively
            </p>
            <div className="button">
              <h3>Contact me</h3>
            </div>
          </div>
          
          <img src="assets/section1.svg"></img>
        </div>
        
      </div>
      <footer className="App-footer">
          <div className="container">
            <div className="cont">
              <h1>Contact</h1>
              <p>+216 99 865 808</p>
              <p>hamdouni.medamin@gmail.com</p>
              <p>Residence Malek A3-3 Centre Urbain Nord BP, Tunis</p>
            </div>
            <div className="social">
              <img src="assets/linkedin.svg" width="60px"></img>
            </div>
            <div className="social">
            <img src="assets/facebook.svg" width="60px"></img>
            </div>
            <div className="social">
            <img src="assets/instagram.svg" width="60px"></img>
            </div>
          </div> 
          <div className="foot">
            <div className="container">
              <p>Made By Med Amine Hamdouni</p>
            </div>
            
          </div>  
      </footer>
    </div>
  );
}

export default App;
