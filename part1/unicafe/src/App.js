import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const arr = [good, neutral, bad]

  return (
    <div>
      <h2>
        Give feedback
      </h2>
      <button onClick={() => setGood(good + 1)}>
        Good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h2>
        Statistics
      </h2>
      <FeedbackGiven value={arr} />
    </div>
  )
}

const Stats = (props) => {
  return (
    <>
      <p>
        {props.name} {props.value}
      </p>
    </>
  )
}

const Avg = (props) => {
  const amount = props.value[0] + props.value[1] + props.value[2]
  const score = (1 * props.value[0]) + ((-1) * props.value[2])
  const average = score / amount
  return (
    <>
      <p>
        Average: {average}
      </p>
    </>
  )
}

const Positive = (props) => {

  const amount = props.value[0] / (props.value[0] + props.value[1] + props.value[2]) * 100
  
  return (
    <>
      <p>
        Positive: {amount} %
      </p>
    </>
  )
}

const FeedbackGiven = (props) => {
  
  if (props.value[0] + props.value[1] + props.value[2] === 0) {
    return (
      <p>
        No feedback given.
      </p>
    )
  }
  return (
    <>
    <Stats name='good' value={props.value[0]} />
    <Stats name='neutral' value={props.value[1]} />
    <Stats name='bad' value={props.value[2]} />
    <Stats name='All' value={props.value[0] + props.value[1] + props.value[2]} />
    <Avg value={props.value} />
    <Positive value={props.value} />
    </>
  )
}

export default App