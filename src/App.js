import { ThemeContext, themes } from "./theme-context";
import ThemeTogglerButton from "./theme-toggler-button";
import React from "react";
import { Link } from "react-router-dom";

class App extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.toggleTheme = () => {
  //       this.setState((state) => ({
  //         theme: state.theme === themes.dark ? themes.light : themes.dark,
  //       }));
  //     };

  //     // State also contains the updater function so it will
  //     // be passed down into the context provider
  //     this.state = {
  //       theme: themes.light,
  //       toggleTheme: this.toggleTheme,
  //     };
  //   }
  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  state = {
    theme: themes.light,
    toggleTheme: this.toggleTheme,
  };

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
      <Link to="/">
        <button>State Lifting</button>
      </Link>
    </div>
  );
}

export default App;
