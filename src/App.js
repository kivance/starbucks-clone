import Header from "./components/Header";
import BigCard from './components/BigCard'
import Content from "./components/Content";

function App() {
  return (
    <div className="App h-screen overflow-hidden max-[768px]:overflow-visible max-[768px]:w-screen">
      <Header></Header>
      <div className="flex max-[768px]:flex-col ">
        <BigCard></BigCard>
        <div className="w-full max-h-screen mt-20 max-[768px]:  max-[768px]:overflow-visible overflow-scroll">
          <Content></Content>
        </div>
      </div>
    </div>
  );
}

export default App;
