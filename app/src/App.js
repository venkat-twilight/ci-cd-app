import './App.css';
import React from 'react'

function App() {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
    .then(text => text.json())
    .then(res => setData(res.data ? res.data : res))
  }, [])

  return (
    <div>
      <div>
        <h3>Active User {process.env.REACT_APP_ENV}</h3>
      </div>
      <ol>
        {
          data.map((item, index) => <li key={index}>{item.first_name}</li>)
        }
      </ol>
    </div>
  );
}

export default App;
