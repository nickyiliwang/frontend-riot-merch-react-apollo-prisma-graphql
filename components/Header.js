import Nav from "./Nav";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  console.log("onRouteChangeStart");
  NProgress.start();
};
Router.OnRouteChangeComplete = () => {
  console.log("OnRouteChangeComplete");
};
Router.OnRouteChangeError = () => {
  console.log("OnRouteChangeError");
};

const Header = () => (
  <div>
    <div className="bar">
      <a href="">Riot Merch</a>
    </div>
    <Nav />
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
