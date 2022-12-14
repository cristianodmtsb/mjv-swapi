import { RoutesMain } from "./routes";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import Footer from "./components/Footer";
import { AuthProvider } from "./providers/AuthContext";

export function App() {
  return (
    <div>
      <GlobalStyle />
      <AuthProvider>
        <Header />
        <RoutesMain />
        <Footer />
      </AuthProvider>      
    </div>
  );
}
