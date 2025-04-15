import { useState } from "react";
import { CORE_CONCEPTS } from "../Data.js";
import CoreConcept from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "../Data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(); // only call hooks inside of component functions and on the top level.

  function handleClick(selectedButton) {
    // clickButton -> "Components", 'jsx', 'props', 'state';
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* /* // in react its called props, because of concept of configuration */}
            {/* either can write like this */}
            <CoreConcept
              title={CORE_CONCEPTS[0]?.title}
              description={CORE_CONCEPTS[0]?.description}
              image={CORE_CONCEPTS[0]?.image}
            />
            {/* OR */}
            {/* Can write like this */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          {/* Dynamic Content */}
            {!selectedTopic ?  <p>Please select a topic.</p> : null}
          {selectedTopic &&
          <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic]?.title}</h3>
          <p>{EXAMPLES[selectedTopic]?.description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic]?.code}</code>
          </pre>
        </div>
          
          }
          {/* {selectedTopic} */}
        </section>
      </main>
    </div>
  );
}

export default App;
