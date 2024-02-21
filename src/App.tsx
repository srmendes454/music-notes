import { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useMain } from "./store/MainProvider";
import { Layout } from "./components/Layout/Layout";
import { ExternalLayout } from "./components/ExternalLayout/ExternalLayout";
import { Loading } from "./components/Loading/Loading";
import { LoginAndRegister, ResetPassword } from "./pages/Auth/auth";
import { Home } from "./pages/Home/Home";

function App() {
  const { isGlobalLoading } = useMain();

  return (
    <>
      <ToastContainer className="foo" style={{ width: "auto" }} />
      <BrowserRouter>
        <Routes>
          {createRouteExternalLayout("*", <LoginAndRegister />)}
          {createRouteExternalLayout("/login", <LoginAndRegister />)}
          {createRouteExternalLayout("/reset-password", <ResetPassword />)}
          
          {createRouteInternalLayout("/home", <Home />)}
          {createRouteInternalLayout("/group", <Home />)}
          {createRouteInternalLayout("/organist-rotation", <Home />)}
          {createRouteInternalLayout("/exam", <Home />)}
        </Routes>
      </BrowserRouter>
      {isGlobalLoading && <Loading />}
    </>
  );

  function createRouteInternalLayout(path: string, element: ReactNode) {
    return (
      <Route key={path} path={path} element={<Layout>{element}</Layout>} />
    );
  }

  function createRouteExternalLayout(path: string, element: ReactNode) {
    return (
      <Route key={path} path={path} element={<ExternalLayout>{element}</ExternalLayout>} />
    );
  }
}

export default App;
