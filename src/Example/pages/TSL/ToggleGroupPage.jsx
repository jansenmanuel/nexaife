import React from 'react'
import { ToggleGroup as TOGGLEGROUP_V_2_0_2 } from '../../../Component'
import style from './TogglePage.module.scss'
import { useSelector } from 'react-redux'

const ToggleGroupPage = () => {
  const { mainColor } = useSelector((state) => state.properties)
  return (
    <div
      className={style.pageContainer}
      style={{
        textAlign: 'start',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
      }}
    >
      <section>
        <h1>small</h1>
        <div style={{ display: 'flex', gap: '50px' }}>
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup1"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            informationBottom={"information"}
            size={"sm"}
            checkColor={mainColor}
          />
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup2"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            errorInformation={"error information"}
            size={"sm"}
            checkColor={mainColor}
          />
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup3"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            informationTop={"text information"}
            size={"sm"}
            checkColor={mainColor}
          />
        </div>
      </section>
      <section>
        <h1>medium</h1>
        <div style={{ display: 'flex', gap: '50px' }}>
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup4"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            informationBottom={"information"}
            size={"md"}
            checkColor={mainColor}
          />
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup5"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            errorInformation={"error information"}
            size={"md"}
            checkColor={mainColor}
          />
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup6"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            informationTop={"text information"}
            size={"md"}
            checkColor={mainColor}
          />
        </div>
      </section>
      <section>
        <h1>large</h1>
        <div style={{ display: 'flex', gap: '50px' }}>
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup7"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            informationBottom={"information"}
            size={"lg"}
            checkColor={mainColor}
          />
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup8"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            errorInformation={"error information"}
            size={"lg"}
            checkColor={mainColor}
          />
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup9"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            informationTop={"text information"}
            size={"lg"}
            checkColor={mainColor}
          />
        </div>
      </section>
      <section>
        <h1>extra large</h1>
        <div style={{ display: 'flex', gap: '50px' }}>
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup10"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            informationBottom={"information"}
            size={"xl"}
            checkColor={mainColor}
          />
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup11"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            errorInformation={"error information"}
            size={"xl"}
            checkColor={mainColor}
          />
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup12"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            informationTop={"text information"}
            size={"xl"}
            checkColor={mainColor}
          />
        </div>
      </section>
      <section>
        <h1>extra extra large</h1>
        <div style={{ display: 'flex', gap: '50px' }}>
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup13"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            informationBottom={"information"}
            size={"xxl"}
            checkColor={mainColor}
          />
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup14"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            errorInformation={"error information"}
            size={"xxl"}
            checkColor={mainColor}
          />
          <TOGGLEGROUP_V_2_0_2
            id={"tglgroup15"}
            toggleLabel={"toggle group lable"}
            label={"label"}
            informationTop={"text information"}
            size={"xxl"}
            checkColor={mainColor}
          />
        </div>
      </section>
      <section>
        <h1>default</h1>
        <TOGGLEGROUP_V_2_0_2 id={"tglgroup16"}/>
      </section>

      <section className={style.section}>
        <h2>Props Explanation for TOGGLEGROUP_V_2_0_2</h2>
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
                <code>-</code>
              </td>
              <td>Unique identifier for the toggle group component.</td>
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
              <td>Set the size of toggle group</td>
            </tr>
            <tr>
              <td>
                <code>label</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>label</code>
              </td>
              <td>Set the label of toggle group</td>
            </tr>
            <tr>
              <td>
                <code>toggleLabel</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>toggle label</code>
              </td>
              <td>Set the label of toggle</td>
            </tr>
            <tr>
              <td>
                <code>informationTop</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>information top</code>
              </td>
              <td>Set the information top label</td>
            </tr>
            <tr>
              <td>
                <code>informationBottom</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>information bottom</code>
              </td>
              <td>Set the information bottom label</td>
            </tr>
            <tr>
              <td>
                <code>errorInfromation</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>error information</code>
              </td>
              <td>Set the error information label</td>
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
              <td>Set the color of checkmark</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default ToggleGroupPage
