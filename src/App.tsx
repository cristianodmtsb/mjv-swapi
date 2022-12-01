import { RoutesMain } from './routes';
import { Header } from './components/Header';
import GlobalStyle from './styles/GlobalStyle';

export function App() {

  return (
    <div>
      <GlobalStyle />
      <Header />
      <RoutesMain />
    </div>
  )
}