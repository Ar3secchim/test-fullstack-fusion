import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../views/pages/home";

import routes from "./route";

function Router() {
  return (
    <Suspense>
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
