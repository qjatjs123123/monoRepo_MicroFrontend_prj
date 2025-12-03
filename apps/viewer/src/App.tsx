import { Layout } from "@monorepo/ui";
import { ViewerTitle } from "./widgets/title/ui/ViewerTitle";
import "./global.css"
import { ViewerForm } from "./widgets/form";

function App() {
  return (
    <Layout>
      <ViewerTitle />
      <ViewerForm />
    </Layout>
  );
}

export default App;
