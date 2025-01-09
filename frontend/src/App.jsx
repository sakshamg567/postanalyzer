import AboutUs from "./components/AboutUs";
function App() {

  return (
    <>
      <div className="bg-gradient-to-br from-blue-200 via-blue-300  to-blue-200 min-h-screen flex items-center justify-center flex-col">
        <div className="container flex items-center justify-center min-h-screen flex-col">
          <span className="font-extrabold text-5xl max-w-2xl text-center relative -top-24 font-poppin ">
            Unlock the power of Data, Drive smarter Social Engagement
          </span>
          <button className="self-center bg-blue-500 text-white min-w-32 min-h-11 rounded-full   hover:scale-125 hover:border-2 border-white absolute mt-32 transition-all duration-300 ease-in-out">Try Now !</button>
          <section>
            <AboutUs />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
