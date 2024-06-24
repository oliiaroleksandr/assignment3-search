import { AutoComplete, SearchHistory } from "./components";

const App = () => {
  return (
    <div className="container">
      <h1 className="heading-1">Comments Search</h1>
      <AutoComplete />
      <SearchHistory />
    </div>
  );
};

export default App;
