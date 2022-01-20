import Day from "./componet/Day";
import DayList from "./componet/DayList";
import Header from "./componet/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./componet/EmptyPage";
import CreateWord from "./componet/CreateWord";
import CreateDay from "./componet/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day">
            <CreateDay />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
