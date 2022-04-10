import Circle1 from "../../icons/Circle1.svg";
import Circle2 from "../../icons/Circle2.svg";
import Vector1 from "../../icons/Vector1.svg";
import "./index.scss";

function Layout({ children }) {
  return (
    <div className="App">
      <header></header>
      <main className="main">
        <Circle1 className="circle1" />
        <Circle2 className="circle2" />
        <Vector1 className="vector1" />
        {children}
      </main>
      <footer></footer>
    </div>
  );
}
export default Layout;
