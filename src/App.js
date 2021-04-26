
import './App.css';
import React, { Component } from 'react';
import { pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
const styles = {
  bounce: {
    animation: 'x 1s infinite',
    animationName: Radium.keyframes(pulse, 'bounce')
  }
}
class App extends Component{
    
  state = {x: 0, y: 0}
  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }
  isInViewport(offset = 0) {
    if (!this.yourElement) return false;
    const top = this.yourElement.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }
  render (){
    const {x, y} = this.state
    return(
      
    <div className="App" onMouseMove={this.handleMouseMove}>
      <div className="cercle" style={{top:y-50,left:x-50}}></div>
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
            <StyleRoot>
            <div className="button" style={styles.bounce}>
              <h3>Contact me</h3>
            </div>
            
            <a href="https://media-exp1.licdn.com/dms/document/C4D2DAQGzRD5vZSjKng/profile-treasury-document-pdf-analyzed/0/1618061994277?e=1618344000&v=beta&t=Ho1f-UgXFxD573r2_E80siL6MTJ0v-LP9fPUSdbQSvM" style={{display:'inline-block',marginLeft:'15px',textDecoration:'none'}}><h3 style={{fontSize:'18px'}}>Download my Resume</h3></a>
            </StyleRoot>
          </div>
          
          <img src="assets/section1.svg"></img>
        </div>
        
      </div>
      <div className="App-section" style={{backgroundColor:'white'}}>
        <div className="container" style={{paddingBottom:'80px',paddingTop:'80px',textAlign:'center',maxWidth:"500px",flexWrap:"wrap"}}>
          <div className="title" style={{marginRight:'50px',margin:'auto'}}>
            <h1 style={{display:'inline-block',margin:'auto',marginBottom:'20px'}}>4,5</h1><h2 style={{display:'inline',color:"darkgrey",fontWeight:"300"}}>/5</h2><br></br>
            <img src="assets/star.svg" style={{width:"20px",marginRight:'5px',marginBottom:'5px'}}></img>
            <img src="assets/star.svg" style={{width:"20px",marginRight:'5px',marginBottom:'5px'}}></img>
            <img src="assets/star.svg" style={{width:"20px",marginRight:'5px',marginBottom:'5px'}}></img>
            <img src="assets/star.svg" style={{width:"20px",marginRight:'5px',marginBottom:'5px'}}></img>
            <img src="assets/star.svg" style={{width:"20px",marginRight:'5px',marginBottom:'5px'}}></img><br></br>
            <p>On my <a style={{color:"#e45776",textDecoration:"none"}} href="https://www.linkedin.com/in/aminehmd/">linkedin</a></p>
          </div>
          <div className="ratings">
            <div className="element">
              <p>Quality</p>
              <img src="assets/star.svg" style={{width:"20px",marginBottom:'20px',marginRight:'5px'}}></img>
              <img src="assets/star.svg" style={{width:"20px",marginBottom:'20px',marginRight:'5px'}}></img>
              <img src="assets/star.svg" style={{width:"20px",marginBottom:'20px',marginRight:'5px'}}></img>
              <img src="assets/star.svg" style={{width:"20px",marginBottom:'20px',marginRight:'5px'}}></img>
            </div>
            <div className="element">
              <p>Details</p>
              <img src="assets/star.svg" style={{width:"20px",marginBottom:'20px',marginRight:'5px'}}></img>
              <img src="assets/star.svg" style={{width:"20px",marginBottom:'20px',marginRight:'5px'}}></img>
              <img src="assets/star.svg" style={{width:"20px",marginBottom:'20px',marginRight:'5px'}}></img>
              <img src="assets/star.svg" style={{width:"20px",marginBottom:'20px',marginRight:'5px'}}></img>
            </div>
            <div className="element" style={{borderBottom:"none"}}>
              <p>Communication</p>
              <img src="assets/star.svg" style={{width:"20px",marginBottom:'20px',marginRight:'5px'}}></img>
              <img src="assets/star.svg" style={{width:"20px",marginBottom:'20px',marginRight:'5px'}}></img>
              <img src="assets/star.svg" style={{width:"20px",marginBottom:'20px',marginRight:'5px'}}></img>
              <img src="assets/star.svg" style={{width:"20px",marginBottom:'20px',marginRight:'5px'}}></img>
            </div>
          </div>
        </div>
        
      </div>
      <div className="back" style={{backgroundImage:'url("assets/back.jpg")'}}>
      <div className="App-section" style={{backgroundColor:'#60a970c9'}}>
        
        <div className="container">
          <div className="title">
            <h3 style={{color:'#426943'}}>Stadium Renting Website</h3>
            <h1 style={{color:'white'}}>Takwira</h1>
            <p style={{color:'white'}}>Fully interactive community website where stadium owners can put their stadiums for renting with fully fanctional time management system
            ,calendars and feedback fonctionalities.
            </p>
          </div>
          
          <img src="assets/phone.png" style={{width:'auto',height:'500px'}}></img>
        </div>
      </div>  
      </div>
      <div className="App-section" style={{backgroundColor:'white'}}>
        <div className="container" style={{flexWrap:'wrap'}}>
        <img src="assets/section2.svg"></img>
          <div className="title" style={{width:"350px"}}>
          
            <h3>Minimalism, Simplicity</h3>
            <h1 style={{fontFamily:"Open sans"}}>Interface<br></br>Design</h1>
            <p>Im a specialist in launching services and products. As a matter of fact, i create fuild and minimalistic interfaces that are adapted to your users.
            </p>
            <StyleRoot>
            <div className="button" style={styles.bounce}>
              <h3>Contact me</h3>
            </div>
            </StyleRoot>
          </div>
          
          
        </div>
        
      </div>
      <div className="App-section">
        <div className="container" style={{maxWidth:"1000px"}}>
          <div className="title">
            <h3>Immversive, Interactive</h3>
            <h1 style={{fontFamily:'Open Sans'}}>Interactive<br></br>Animation</h1>
            <p>
              Animation is the key to the user's emotions as it improves his experience while bringing life the website. Thats why micro-interactions (scrolling, clicking) are the fondamentals of a great interactive interface.
            </p>
          </div>
          
          <img src="assets/animation_2.gif" style={{width:'250px'}} id="gif"></img>
        </div>
        
      </div>
      <div className="App-section" style={{backgroundColor:"white"}}>
        <div className="container" style={{flexWrap:'wrap'}}>
          <img src="assets/story.svg"></img>
          <div className="title">
            <h1>Storytelling</h1>
            <p>
              Certain Products and services need explanations.<br></br>
              As a result, nothing helps the user understand your offers other than animations.
            </p>
          </div>
          
          
        </div>
      </div>
      <div className="App-section" style={{backgroundColor:'#58E497'}}>
        
        <div className="container">
          <div className="title" style={{textAlign:'center'}}>
            <h1 style={{color:'white'}}>My Methodology</h1>
            <div className="cardContainer">
              <div className="card">
                <h2>01</h2>
                <h3>Explore</h3>
                <p>I put myself in the place of your users so i can understand their needs</p>
              </div>
              <div className="card">
                <h2>02</h2>
                <h3>Concepts</h3>
                <p>We define the user experience needed and start to create its course</p>
              </div>
              <div className="card">
                <h2>03</h2>
                <h3>Imagine</h3>
                <p>We generate and discuss different ideas for solving our problems</p>
              </div>
              <div className="card">
                <h2>04</h2>
                <h3>Design</h3>
                <p>We generate an interactive prototype</p>
              </div>
              <div className="card">
                <h2>05</h2>
                <h3>Testing</h3>
                <p>We are going to analyse the prototype with real users and optimize it</p>
              </div>
              <div className="card">
                <h2>06</h2>
                <h3>Deploy</h3>
                <p>Once the prototype is valid, we're going to develop and launch it</p>
              </div>
            </div>
            
          </div>
        </div>
      
      </div>
      <div className="App-section" style={{backgroundColor:'#58D4E4'}}>
        
        <div className="container" style={{flexWrap:'wrap'}}>
        <img src="assets/meeting.svg"></img>
          <div className="title" style={{textAlign:'center'}}>
            <h1 style={{color:'white',textAlign:"left"}}>Sprint Design</h1>
            <h2 style={{color:'white',textAlign:"left"}}>IN 5 DAYS, we give birth to your project</h2>
            <p style={{color:'white',textAlign:"left"}}>A creative solution for startups and big societies.<br></br>You start with all the keys and tools needed for a fast and effective implementation</p>
            <StyleRoot>
            <div className="button2" style={styles.bounce}>
              <h3>More Information</h3>
            </div>
            </StyleRoot>
            
          </div>
      </div>
      </div>
      <div className="App-section">
        <div className="container">
          <div className="title" style={{width:'90%'}}>
          <div id="myCarousel" class="carousel slide" style={{width:'100%',maxWidth:'1000px',margin:'auto'}} data-ride="carousel">
  <ol className="carousel-indicators" style={{bottom:'0px'}}>
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner" style={{width:'80%',margin:'auto'}} role="listbox">
    <div className="item active">
        <h2>Mohamed Ali Sahnoun</h2>
        <h3>Web Developer</h3>
        <p>Quite impressed by his devotion and communication skills</p>
    </div>

    <div className="item">
        <h2>Sirajeddine Aissa</h2>
        <h3>Web Developer</h3>
        <p>Quite impressed by his devotion and communication skills</p>
    </div>

    <div className="item">
        <h2>Mohamed Aziz Khayati</h2>
        <h3>Weeb</h3>
        <p>Quite impressed by his devotion and communication skills</p>
    </div>

    <div class="item">
      <h2>Mehdy Bhiri</h2>
          <h3>Buisiness Men</h3>
          <p>Quite impressed by his devotion and communication skills</p>
      </div>
  </div>
  <a class="left carousel-control" style={{backgroundImage:"none",right:"-20px"}} href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" style={{backgroundImage:"none"}}  href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
          </div>
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
            <div className="soc">
              <a href="https://www.linkedin.com/in/aminehmd/"><div className="social">
                <img src="assets/linkedin.svg" width="60px"></img>
              </div></a>
              <a href="https://www.facebook.com/medamine.hamdouni11/"><div className="social">
              <img src="assets/facebook.svg" width="60px"></img>
              </div></a>
              <a href="https://www.instagram.com/aminehamdouni/"><div className="social">
              <img src="assets/instagram.svg" width="60px"></img>
              </div></a>
            </div>
            
          </div> 
          <div className="foot">
            <div className="container">
              <p style={{margin:'auto',padding:'10px'}}>Made with love By Med Amine Hamdouni</p>
            </div>
            
          </div>  
      </footer>
    </div>
    )};
}

export default App;
