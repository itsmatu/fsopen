import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(7).fill(0))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {points[selected]} votes.
      <button onClick={() => setPoints(AddPoints({ points, selected }))}>Vote</button>
      <button onClick={() => setSelected(Selected({ selected }))}>Next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <MostVotes points={points} anecdotes={anecdotes}></MostVotes>
    </div>
  )
}

const Selected = ({ selected }) => {
  let randVal = Math.floor(Math.random() * 7)
  while (randVal === selected) {
    randVal = Math.floor(Math.random() * 7)
  }
  return randVal
}

const AddPoints = ({ points, selected }) => {
  let newPoints = [...points]
  newPoints[selected] += 1
  return newPoints
}

const MostVotes = ({ points, anecdotes }) => {
  let most = 0
  let indx = 0
  for (let i = 0; i < points.length; i++) {
    if (points[i] > most) {
      indx = i
      most = points[i]
    }
  }
  return (
    <>
      <p>
        {anecdotes[indx]}
      </p>
      <p>
        has {most} votes.
      </p>
    </>


  )
}

export default App