import "./homepage.styles.scss";

const App = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          {/* <img /> */}
          <div className="content">
            <h2 className="title">Hats</h2>
            <p className="subtitle">Shop Now</p>
          </div>
        </div>
        <div className="menu-item">
          {/* <img /> */}
          <div className="content">
            <h2 className="title">Jackets</h2>
            <p className="subtitle">Shop Now</p>
          </div>
        </div>
        <div className="menu-item">
          {/* <img /> */}
          <div className="content">
            <h2 className="title">Sneakers</h2>
            <p className="subtitle">Shop Now</p>
          </div>
        </div>
        <div className="menu-item">
          {/* <img /> */}
          <div className="content">
            <h2 className="title">Womens</h2>
            <p className="subtitle">Shop Now</p>
          </div>
        </div>
        <div className="menu-item">
          {/* <img /> */}
          <div className="content">
            <h2 className="title">Mens</h2>
            <p className="subtitle">Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
