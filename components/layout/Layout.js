import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <div>
      <Navigation></Navigation>
      {props.children}
    </div>
  );
};
export default Layout;
