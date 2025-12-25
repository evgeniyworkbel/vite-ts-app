import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    document.addEventListener("adobe_dc_view_sdk.ready", function () {
      // eslint-disable-next-line
      // @ts-ignore
      const adobeDCView = new AdobeDC.View({
        clientId: "957fbb8a20a8459d8145bacc05d9b131",
      });
      console.log({ adobeDCView });
      adobeDCView.previewFile(
        {
          content: {
            location: {
              url: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:ed77da84-7fc7-4417-9d27-2dfef9c4d48e",
            },
          },
          metaData: { fileName: "Bodea Brochure.pdf" },
        },
        { embedMode: "LIGHT_BOX" }
      );
    });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handleClick}>
        open pdf preview
        <script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
      </button>
    </>
  );
}

export default App;
