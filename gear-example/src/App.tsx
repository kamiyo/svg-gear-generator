import { Gear, GearWithAxle } from 'svg-gear-generator';
import './App.css'

function App() {
  return (
    <div className="App">
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 4 4">
          <GearWithAxle
            axleRadius={0.6}
            numberOfSpokes={9}
            radii={[1.0, 0.8]}
            toothThicknessPercent={0.5}
            fill="none"
            stroke="black"
            strokeWidth={0.05}
            strokeLinejoin="round"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 4 4">
          <Gear
            numberOfSpokes={13}
            radii={[1.0, 0.85]}
            toothThicknessPercent={0.5}
            fill="none"
            stroke="black"
            strokeWidth={0.05}
            strokeLinejoin="round"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 4 4">
          <Gear
            numberOfSpokes={13}
            radii={[1.0, 0.7]}
            toothThicknessPercent={1.0}
            fill="none"
            stroke="black"
            strokeWidth={0.05}
            strokeLinejoin="round"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 4 4">
          <Gear
            numberOfSpokes={5}
            radii={[1.0, 0.4]}
            toothThicknessPercent={0.0}
            fill="none"
            stroke="black"
            strokeWidth={0.05}
            strokeLinejoin="miter"
          />
        </svg>
      </div>
    </div>
  )
}

export default App
