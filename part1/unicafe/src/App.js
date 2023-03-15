import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <table>
      <tbody>
        <tr>
          <th>Give feedback</th>
        </tr>
        <tr>
          <td>
            <Button text="Good" action={setGood} value={good}></Button>
            <Button text="Neutral" action={setNeutral} value={neutral}></Button>
            <Button text="Bad" action={setBad} value={bad}></Button>
          </td>
        </tr>
        <tr>
          <th>Statistics</th>
        </tr>
        <FeedbackGiven good={good} neutral={neutral} bad={bad}></FeedbackGiven>
      </tbody>
    </table>
  )

}

const Button = (props) => <button onClick={() => props.action(props.value + 1)}>{props.text}</button>

const FeedbackGiven = ({ good, bad, neutral }) => {
  if (good + neutral + bad === 0) {
    return (
      <tr>
        <td>
          No feedback given yet
        </td>
      </tr>
    )
  }
  return (
    <>
      <SatisticLine text="Good" value={good}></SatisticLine>
      <SatisticLine text="Neutral" value={neutral}></SatisticLine>
      <SatisticLine text="Bad" value={bad}></SatisticLine>
      <SatisticLine text="All" value={good + neutral + bad}></SatisticLine>
      <SatisticLine text="Average" value={(good - bad) / (good + neutral + bad)}></SatisticLine>
      <SatisticLine text="Positive" value={good / (good + neutral + bad) * 100}></SatisticLine>
    </>
  )
}

const SatisticLine = (props) => <tr><td>{props.text} {props.value}</td></tr>

export default App