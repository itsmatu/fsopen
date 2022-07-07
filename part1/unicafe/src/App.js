import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const arr = [good, neutral, bad]
  const funcs = [setGood, setNeutral, setBad]

  return (
    <>
      <h2>
        Give feedback
      </h2>
      <Button name="Good" f={funcs[0]} a={arr[0]}></Button>
      <Button name="Neutral" f={funcs[1]} a={arr[1]}></Button>
      <Button name="Bad" f={funcs[2]} a={arr[2]}></Button>
      <h2>
        Statistics
      </h2>
      <FeedbackGiven value={arr} />
    </>
  )
}

const Button = props => <button onClick={() => props.f(props.a + 1)}>{props.name}</button>

const Stats = (props) => {
  return (
    <tr>
      <td>
        {props.name}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
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
    <table>
    <tbody>
    <Stats name='good' value={props.value[0]} />
    <Stats name='neutral' value={props.value[1]} />
    <Stats name='bad' value={props.value[2]} />
    <Stats name='All' value={props.value[0] + props.value[1] + props.value[2]} />
    <tr>
    <td><Avg value={props.value} /></td>
    </tr>
    <tr>
    <td><Positive value={props.value} /></td>
    </tr>
    </tbody>
    </table>
  )
}

export default App