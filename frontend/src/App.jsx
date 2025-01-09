import { useRef } from "react";
import AboutUs from "./components/AboutUs";
function App() {
  const homeRef = useRef(null)
  const aboutUsRef = useRef(null)
  // const homeRef = useRef(null)
  // const homeRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({behaviour: "smooth"})
  } 
  return (
    <>
      <div className="bg-gradient-to-br from-blue-200 via-blue-300  to-blue-200 min-h-screen flex items-center justify-center flex-col p-10">
      <nav className="">
            <ul className="flex flex-row top-0">
              <li><button onClick={homeRef}>Home</button></li>
              <li><button onClick={aboutUsRef}>About us</button></li>
            </ul>
      </nav>
        <div className="container flex items-center justify-center min-h-screen flex-col scale-75 m-0">
          
          <section ref={homeRef} className="flex items-center justify-center flex-col">
            <span className="font-extrabold text-5xl max-w-2xl text-center -top-40 font-poppin ">
              Unlock the power of Data, Drive smarter Social Engagement
            </span>
            <button className="self-center bg-blue-500 text-white min-w-32 min-h-11 rounded-full hover:scale-125 hover:border-2 border-white mt-9 mb-12 transition-all duration-300 ease-in-out">Try Now !</button>
          </section>
          <section ref={aboutUsRef}>
            <AboutUs />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
