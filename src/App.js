import Navbar from "./components/Navbar";
import Stories from "./components/stories/Stories";
function App() {
  return (
    <div class="root">
      <Navbar />
      <div class="corpo">
        <div class = "esquerda">
         <Stories /> 
        </div>

      </div>
    </div>

  )
}

export default App;
