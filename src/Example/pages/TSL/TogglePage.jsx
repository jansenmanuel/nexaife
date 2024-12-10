import React from 'react'
import { Toggle as TOGGLE_V_2_0_2 } from '../../../Component'
import style from './TogglePage.module.scss'
import { useSelector } from 'react-redux'

const TogglePage = () => {
  const [click, setClick] = React.useState(true);

  const { mainColor } = useSelector((state) => state.properties)

  return (
    <div className={style.pageContainer}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
          alignItems: 'center'
        }}
      >
        <div>
          <button
            onClick={() => setClick(!click)}
          >
            click here
          </button>
          <h1>small</h1>
          <div style={{ display: 'flex', gap: '50px' }}>
            <TOGGLE_V_2_0_2 id={"tglsm1"} label={"toggle"} size='sm' checkColor={mainColor} />
            <TOGGLE_V_2_0_2 id={"tglsm2"} label={"toggle"} size='sm' disabled />
            <TOGGLE_V_2_0_2 id={"tglsm3"} label={"toggle"} size='sm' checked={click} />
          </div>
        </div>
        <div>
          <h1>medium</h1>
          <div style={{ display: 'flex', gap: '50px' }}>
            <TOGGLE_V_2_0_2 id={"tglmd1"} label={"toggle"} size='md' checkColor={mainColor} />
            <TOGGLE_V_2_0_2 id={"tglmd2"} label={"toggle"} size='md' disabled />
          </div>
        </div>
        <div>
          <h1>large</h1>
          <div style={{ display: 'flex', gap: '50px' }}>
            <TOGGLE_V_2_0_2 id={"tgllg1"} label={"toggle"} size='lg' checkColor={mainColor} />
            <TOGGLE_V_2_0_2 id={"tgllg2"} label={"toggle"} size='lg' disabled />
          </div>
        </div>
        <div>
          <h1>extra large</h1>
          <div style={{ display: 'flex', gap: '50px' }}>
            <TOGGLE_V_2_0_2 id={"tglxl1"} label={"toggle"} size='xl' checkColor={mainColor} />
            <TOGGLE_V_2_0_2 id={"tglxl2"} label={"toggle"} size='xl' disabled />
          </div>
        </div>
        <div>
          <h1>extra extra large</h1>
          <div style={{ display: 'flex', gap: '50px' }}>
            <TOGGLE_V_2_0_2 id={"tglxxl1"} label={"toggle"} size='xxl' checkColor={mainColor} />
            <TOGGLE_V_2_0_2 id={"tgslxxl2"} label={"toggle"} size='xxl' disabled />
          </div>
        </div>
        <div>
          <h1>default</h1>
          <div style={{ display: 'flex', gap: '50px' }}>
            <TOGGLE_V_2_0_2 id={"tgldflt1"}/>
            <TOGGLE_V_2_0_2 disabled id={"tgldflt2"} />
          </div>
        </div>
      </div>

      <section className={style.section}>
        <h2>Props Explanation for TOGGLE_V_2_0_2</h2>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>id</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>null</code>
              </td>
              <td>Unique identifier for the toggle component.</td>
            </tr>
            <tr>
              <td>
                <code>onChange</code>
              </td>
              <td>
                <code>function</code>
              </td>
              <td>
                <code>-</code>
              </td>
              <td>Callback function that is called when the toggle state changes.</td>
            </tr>
            <tr>
              <td>
                <code>label</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>-</code>
              </td>
              <td>The label of the toggle.</td>
            </tr>
            <tr>
              <td>
                <code>size</code>
              </td>
              <td>
                <code>oneOf(['sm', 'md', 'lg'])</code>
              </td>
              <td>
                <code>md</code>
              </td>
              <td>The size of the toggle.</td>
            </tr>
            <tr>
              <td>
                <code>disabled</code>
              </td>
              <td>
                <code>bool</code>
              </td>
              <td>
                <code>false</code>
              </td>
              <td>Whether the toggle is disabled.</td>
            </tr>
            <tr>
              <td>
                <code>labelColor</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>black</code>
              </td>
              <td>The color of the label.</td>
            </tr>
            <tr>
              <td>
                <code>checkColor</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>blue (#13A1DC)</code>
              </td>
              <td>The color of the checkmark.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default TogglePage
