import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store";
import SearchParams from "./SearchParams";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  //const adoptedPet = useState(null);

  return (
    <div>
      <BrowserRouter>
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <header>
              <Link to="/">Learn React!</Link>
            </header>
            <Routes>
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </QueryClientProvider>
          </Provider>
        </BrowserRouter>{" "}
    </div>
  );
};
const container = createRoot(document.getElementById("root"));
container.render(<App />);
