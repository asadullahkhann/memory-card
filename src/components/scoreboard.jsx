export default function Scoreboard({currScore, bestScore, wins}) {
  return (
    <div className="scoreboard">
      <p>SCORE<span className="score">{currScore}</span></p>
      <p>BEST<span className="gold score">{bestScore}</span></p>
      <p>WINS<span className="gold score">{wins}</span></p>
    </div>
  )
}