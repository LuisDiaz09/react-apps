import { CardFollowX } from './CardFollowX'
import  './App.css'
import './index.css'

function App() {

  return (
    <section className='App'>
      <CardFollowX isFollowing={false} userName="midudev">
        Miguel Ángel
      </CardFollowX>

      <CardFollowX isFollowing userName="MYMALK4PON3">
        Alkapone
      </CardFollowX>
    </section>
  )

}

export default App
