function App() {

  return ( <div>
  <Tweets twits = {[
    {username: "jsong", name: "justin", message: "hi its me", date: "09/25/2023"},
    {username: "askdad", name: "steve", message: "good afternoon", date: "09/24/2023" },
    {username: "tuckerdiane", name: "tucker", message: "I like gibberish", date: "09/23/2023"}
  ]} />
  </div>)

}

ReactDOM.render(<App/>, document.getElementById("root"));