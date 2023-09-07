import React from "react"

function App() {

  const [triviaData, setTriviaData] = React.useState()

  React.useEffect(() => {
    async function getTriviaData() {
      const res = await fetch("https://opentdb.com/api.php?amount=5")
      const data = await res.json()
      setTriviaData(data)
    }

    getTriviaData()
  }, [])


  const viewData = JSON.stringify(triviaData)
  // const otdbPromise = fetch("https://opentdb.com/api.php?amount=5")

  // otdbPromise.then((response) => {
  //   console.log(response)
  // })

  return (
    <div>
      {viewData}
    </div>
  );
}

export default App;
