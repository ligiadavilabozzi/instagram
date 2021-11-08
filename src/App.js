import Navbar from "./components/Navbar";
import Stories from "./components/stories/Stories";
import Posts from './components/posts/Posts'

function App() {
  return (
    <div class="root">
      <Navbar />
      <div class="corpo">
        <div class="esquerda">
          <Stories />
          <Posts />

        </div>

        <Navbar />

      </div>
    </div>

  )
}

export default App;
