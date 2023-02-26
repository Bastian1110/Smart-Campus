import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Redirect from "./pages/Redirect"
import Nosotros from "./pages/Nosotros"
import NoPage from "./pages/NoPage"
import Resultados from './pages/Resultados';
import Proyectos from './pages/Proyectos';
import Herramientas from './pages/Herramientas';
import Ods from './pages/Ods';
import Creditos from './pages/Creditos';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='redirect' element={<Redirect />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path='proyectos' element={<Proyectos/>} />
            <Route path="resultados" element={<Resultados />} />
            <Route path='herramientas' element={<Herramientas />} />
            <Route path='creditos' element={<Creditos />} />
            <Route path='ods' element={<Ods />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;