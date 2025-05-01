import { Route, Routes } from 'react-router'
import Homepage from "./components/Homepage/Homepage"
import Navbar from "./components/Navbar/Navbar"


function App() {

  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login"></Route>
        <Route path="/signup"></Route>
        <Route path="/about"></Route>
        <Route path="/contact"></Route>
        <Route path="/profile/user_id:"></Route>
        <Route path="/profile/settings/user_id:"></Route>
        <Route path="/posts"></Route>
        <Route path="/posts/user_id:"></Route>
        <Route path="/posts/user_id/post_id:"></Route>
        <Route path="/packs"></Route>
        <Route path="/packs/pack_id:"></Route>
        <Route path="/trips"></Route>
        <Route path="/trips/trip_id:"></Route>
        <Route path="/friends"></Route>
        <Route path="/friends/friend_id:"></Route>
        <Route path="/hikes"></Route>
        <Route path="/hikes/hike_id:"></Route>
      </Routes>
    </>
  )
}

export default App

/**
 * non logged in routes
/signup
/login
/about

logged in routes

/about
/contact
/profile/user_id:
/profile/settings/user_id:
/posts
/posts/user_id:
/posts/user_id/post_id:
/packs
/packs/pack_id:
/trips
/trips/trip_id:
/friends
/friends/friend_id:
/hikes
/hikes/hike_id:







 */