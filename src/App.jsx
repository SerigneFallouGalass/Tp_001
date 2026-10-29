import { InfoPerso } from "./InfoPerso";
import { Competences } from "./Competences";
import { Experiences } from "./Experiences";

function App() {
  return (
    <div className="cv">
      <h1>Mon CV</h1>
      <InfoPerso />
      <Competences />
      <Experiences />
    </div>
  );
}
export default App;