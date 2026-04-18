import Footer from "./Component/Footer";
import Header from "./Component/Header";
import NextPop from "./Component/NextPop";
import PopArtist from "./Component/PopArtist";
import Premium from "./Component/Premium";
import Radio from "./Component/Radio";
import YourLibrary from "./Component/YourLibrary";
function App() {
  return (
    <>
      <Header />
      <div className=" flex">
        <YourLibrary/>
        <div className="bg-[#121212] rounded-xl m-1 flex flex-col">
          <PopArtist />
          <NextPop />
          <Radio/>
          <Footer/>
        </div>
      </div>
      <Premium/>
    </>
  );
}

export default App;
