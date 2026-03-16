import Button from "../components/Button";
import { GoBell, GoDatabase, GoCloudDownload } from "react-icons/go";

function ButtonPage() {
    function handleClick() {
        console.log("Clicked");
    }

    return <div className="App">
        <h1>App</h1>
        <div>
            <Button onClick={handleClick} className={'mb-4'} rounded><GoBell />No prop</Button>
        </div>
       <div>
            <Button primary rounded outline><GoCloudDownload />Click there too</Button>
        </div>
        <div>
            <Button secondary outline><GoDatabase />Hide ads</Button>
        </div>
        <div>
            <Button success>Buy coffee</Button>
        </div>
        <div>
            <Button warning>Try me</Button>
        </div>
        <div>
            <Button danger>Sign up</Button>
        </div>
        <p>
            There is other text than buttons
        </p>
    </div>
}

export default ButtonPage;