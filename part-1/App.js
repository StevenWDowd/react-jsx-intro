function App() {
  return ( <div>
  <FirstComponent/>
  <NamedComponent name="John Doe"/>
  </div>)

}

ReactDOM.render(<App/>, document.getElementById("root"));
//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<App />);

