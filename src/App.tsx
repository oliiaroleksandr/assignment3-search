import { AutoComplete, SearchHistory } from "./components";

const App = () => {
  return (
    <div className="container">
      <h1 className="heading-1">Search Emails</h1>
      <AutoComplete />
      <SearchHistory />
    </div>
  );
};

export default App;
