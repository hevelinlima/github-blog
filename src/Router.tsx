import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Post } from "./pages/PostPage/index";
import { DefaultLayout } from "./DefaultLayout";

export function Router(){
  return(
    <Routes>
      <Route path={'/'} element={<DefaultLayout />}>
        <Route path={'/'} element={<Home />} />
        <Route path={'/post'} element={<Post />} />
      </Route>
    </Routes>
  )
}