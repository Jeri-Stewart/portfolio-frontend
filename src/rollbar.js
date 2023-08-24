import React from "react";
import { Provider, ErrorBoundary } from "@rollbar/react"; // Provider imports 'rollbar'

const rollbarConfig = {
  accessToken: "b88ef2cdcf014d65a502e698ca04ec49",
  environment: "testenv",
};

function TestError() {
  const a = null;
  return a.hello();
}

// Provider instantiates Rollbar client instance handling any uncaught errors or unhandled promises in the browser
// ErrorBoundary catches all React errors in the tree below and logs them to Rollbar
export default function App() {
  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <TestError />
      </ErrorBoundary>
    </Provider>
  );
}
