import { FC, Fragment } from "react";
import Content from "./components/Content";
import Menu from "./components/Menu";

const App: FC = () => {
  return (
    <Fragment>
      <Content />
      <Menu />
    </Fragment>
  );
};

export default App;
