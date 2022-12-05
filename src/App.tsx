import { RoutesMain } from "./routes";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import Footer from "./components/Footer";

export function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <RoutesMain />
      <Footer />
    </div>
  );
}
