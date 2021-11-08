import Navbar from "./components/Navbar";
import Stories from "./components/stories/Stories";
import Posts from './components/posts/Posts'
import Sidebar from "./components/sidebar/Sidebar";
import Mobile from './components/Mobile'

function App() {
  return (
    <div class="root">

      <Navbar />
      
      <div class="content">
        <div class="stories-and-posts">
          <Stories />
          <Posts />
        </div>

        <Sidebar />
      </div>
      
      <Mobile />
    </div>

  )
}

export default App;
