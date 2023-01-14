import Header from "components/Header";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback="...">
        <Routes>
          <Route></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
