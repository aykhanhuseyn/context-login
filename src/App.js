import { Home, Login } from './components';
import { AuthContextProvider } from './context/Auth';

function App() {
	return (
		<AuthContextProvider>
			<Home />
			<Login />
		</AuthContextProvider>
	);
}

export default App;
