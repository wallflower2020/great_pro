import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import routes from 'virtual:generated-pages-react';
import { BrowserRouter, useRoutes } from "react-router-dom";
// import App from './App.tsx'
import './index.css'
import { init } from './util/ue'
import Home from './pages/home';

const App = () => {
  init();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <Home />
  </BrowserRouter>
)