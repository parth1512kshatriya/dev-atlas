import { useEffect } from "react";

import AppRoutes from "./routes/AppRoutes";

import {
  initGA,
} from "./lib/analytics";

function App() {

  useEffect(() => {

    initGA();

  }, []);

  return <AppRoutes />;
}

export default App;