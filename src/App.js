import React from "react";
import { Card, Chart, CountryPicker } from "./component";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {}
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.App}>
        <Card data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
