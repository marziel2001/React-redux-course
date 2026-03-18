import Link from "./components/Link";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Route from "./components/Route";

function App() {
    return (<div>
        <Link to="/acordion">Goto acordion</Link>
        <Link to="/dropdown">Goto dropdown</Link>

        <Route path="/acordion">
            <AccordionPage />
        </Route>
        <Route path="/dropdown">
            <DropdownPage />
        </Route>
    </div>)
}

export default App;