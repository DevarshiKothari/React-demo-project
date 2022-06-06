import { useState } from "react";
// import AboutUs from "./Components/AboutUs";
import NavBar from "./Components/NavBar";
import TextBar from "./Components/TextBar";


function App() {

  const [theme, setTheme] = useState('white')

  // const [style, setStyle] = useState({
  //   color: 'white',
  //   backgroundColor: 'dark'
  // })
  // const changeTheme=()=>{
  //   // setTheme('white')
  //   if(style.backgroundColor==='dark'){
  //     setStyle({
  //       color: 'dark',
  //       backgroundColor: 'white'
  //     });
  //     document.body.style.backgroundColor='black';
  //   }
  //   else
  //     {
  //     setStyle({
  //       color: 'white',
  //       backgroundColor: 'dark',});
  //     document.body.style.backgroundColor='white';
  //     }

      const changeTheme=()=>{
        if(theme==='white'){
          document.body.style.backgroundColor='black';
          setTheme('black')
        }
        else{ 
          document.body.style.backgroundColor='white';
          setTheme('white')
        }
      }
      // style={style}
  return (
    <>
    <NavBar title='Pehela App'  changeTheme={changeTheme}/>
    <div className="container" >
      <h1>Enter text here</h1>
      <TextBar changeTheme={changeTheme}/>
    </div>
    {/* <AboutUs/> */}
    </>
  );
}

export default App;