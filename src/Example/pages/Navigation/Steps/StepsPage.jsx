import React, { useState } from 'react'
import { Button as ButtonV223, Steps as STEPS_V_2_0_2 } from '../../../../Component'
import style from './StepsPage.module.scss'
import { useSelector } from 'react-redux'
const StepsPage = () => {
  const { mainColor } = useSelector((state) => state.properties)
  const [current, setCurrent] = useState(0)
  const stepItems = [
    {
      id: "1",
      title: 'Step 1',
    },
    {
      id: "2",
      title: 'Step 2',
    },
    {
      id: "3",
      title: 'Step 3',
    },
    {
      id: "4",
      title: 'Step 4',
    },
    {
      id: "5",
      title: 'Step 5',
    },
  ]

  const twoStepsItems = [
    {
      id: "1",
      title: 'Step 1',
    },
    {
      id: "2",
      title: 'Step 2',
    },
  ]

  const threeStepsItems = [
    {
      id: "1",
      title: 'Step 1',
    },
    {
      id: "2",
      title: 'Step 2',
    },
    { 
      id: "3",  
      title: 'Step 3',
    },
  ]

  const fourStepsItems = [
    {
      id: "1",
      title: 'Step 1',
    },
    {
      id: "2",
      title: 'Campaign Criteria',
    },
    {
      id: "3",
      title: 'Potensial Result',
    },
    {
      id: "4",
      title: 'Step 4',
    },
  ]

  return (
    <div className={style.pageContainer}>
      <h2>Custom Color</h2>
      <STEPS_V_2_0_2 id={"stepsCustom"} items={stepItems} current={current} mainColor={mainColor}/>
      <h2>Default Color</h2>
      <STEPS_V_2_0_2 id={"stepsDefault"} items={stepItems} current={current} />
      <STEPS_V_2_0_2 id={"stepsTwoSteps"} items={twoStepsItems} current={current} />
      <STEPS_V_2_0_2 id={"stepsThreeSteps"} items={threeStepsItems} current={current} />
      <STEPS_V_2_0_2 id={"stepsFourSteps"} items={fourStepsItems} current={current} />
      <div className={style.container}>
        <ButtonV223
          buttonType={"primary"}
          secondaryColor={"white"}
          label="back"
          onClick={() => setCurrent(prev => prev - 1)}
          disabled={current === 0}
        />
        <ButtonV223
          buttonType={"primary"}
          secondaryColor={"white"}
          label="next"
          onClick={() => setCurrent(prev => prev + 1)}
          disabled={current === stepItems.length}
        />
      </div>

      <section className={style.section}>
        <h2>Props Explanation for STEPS_V_2_0_2</h2>
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
                <code>
                  string
                </code>
              </td>
              <td>
                <code>-</code>
              </td>
              <td>Unique identifier for the steps component.</td>
            </tr>
            <tr>
              <td>
                <code>items</code>
              </td>
              <td>
                <code>array</code>
              </td>
              <td>
                <code>[]</code>
              </td>
              <td>The items to be displayed. The items prop is an array of objects where each object represents an item with three properties: id, title, and description. </td>
            </tr>
            <tr>
              <td>
                <code>current</code>
              </td>
              <td>
                <code>
                  number
                </code>
              </td>
              <td>
                <code>0</code>
              </td>
              <td>The index of the current step.</td>
            </tr>
            <tr>
              <td>
                <code>mainColor</code>
              </td>
              <td>
                <code>
                  string
                </code>
              </td>
              <td>
                <code>BLUE (#13A1DC)</code>
              </td>
              <td>The main color of the process/active steps.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default StepsPage
