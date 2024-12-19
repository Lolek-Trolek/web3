import { CountersProvider } from "./contexts/counterContext";
import App from "./components/App/App";

const AppLoader = () => {
    return (
        <CountersProvider>
            <App />
        </CountersProvider>
    );
};

export default AppLoader;
