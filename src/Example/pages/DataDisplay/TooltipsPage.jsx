import React from "react";
import TOOLTIPS_V_1_0_1 from "../../../Component/Atomic/Tooltips/Tooltips";
import {useSelector} from "react-redux";
import style from "./TooltipsPage.module.scss";

const TooltipsPage = () => {
  const mainColor = useSelector((state) => state.properties.mainColor);
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "50px" }}>
      <div style={{display: "flex", gap: "20px", justifyContent: "center",  }}>
        <h1 style={{ marginRight: "90px" }}>Table Tooltips</h1>
        <TOOLTIPS_V_1_0_1 type="table" title="Tooltips" mainColor={mainColor}>
          <button>Hover me! Top</button>
        </TOOLTIPS_V_1_0_1>
        <TOOLTIPS_V_1_0_1 type="table" title="Tooltips" state="bottom" trigger="click" mainColor={mainColor}>
          <button>Hover me! Bottom</button>
        </TOOLTIPS_V_1_0_1>
        <TOOLTIPS_V_1_0_1 type="table" title="Tooltips" state="right" mainColor={mainColor}>
          <button>Hover me! Right</button>
        </TOOLTIPS_V_1_0_1>
        <TOOLTIPS_V_1_0_1 type="table" title="Tooltips" state="left" trigger="click" mainColor={mainColor}>
          <button>Hover me! Left</button>
        </TOOLTIPS_V_1_0_1>
      </div>
      <div style={{display: "flex", gap: "20px", justifyContent: "center",  }}>
        <h1 style={{ marginRight: "90px" }}>Chart Tooltips</h1>
        <TOOLTIPS_V_1_0_1 type="chart"
          title="Tooltips Chart"
          caption="1,400.00"
          state="top" mainColor={mainColor} trigger={'click'}>
          <button>Hover me! Top</button>
        </TOOLTIPS_V_1_0_1>
        <TOOLTIPS_V_1_0_1 type="chart"
          title="Tooltips Chart"
          caption="1,400.00"
          state="bottom" mainColor={mainColor}>
          <button>Hover me! Bottom</button>
        </TOOLTIPS_V_1_0_1>
        <TOOLTIPS_V_1_0_1 type="chart"
          title="Tooltips Chart"
          caption="1,400.00"
          state="right" mainColor={mainColor}>
          <button>Hover me! Right</button>
        </TOOLTIPS_V_1_0_1>
        <TOOLTIPS_V_1_0_1 type="chart"
          title="Tooltips Chart"
          caption="1,400.00"
          state="left"
          mainColor={mainColor}
          >
          <button>Hover me! left</button>
        </TOOLTIPS_V_1_0_1>
      </div>
      <div style={{display: "flex", gap: "20px", justifyContent: "center",  }}>
        <h1 style={{ marginRight: "90px" }}>Default Tooltips</h1>
        <TOOLTIPS_V_1_0_1 type="default"
          title="Tooltip Chart"
          content="1,400.00"
          caption="Caption for tooltips website"
          hyperLink={"https://www.google.com"}
          state="top">
          <button>Hover me! Top</button>
        </TOOLTIPS_V_1_0_1>
        <TOOLTIPS_V_1_0_1
        type="default"
        title="Tooltip Chart"
        content="1,400.00"
        caption="Caption for tooltips website"
        hyperLink={"https://www.google.com"}
          state="bottom">
          <button>Hover me! Bottom</button>
        </TOOLTIPS_V_1_0_1>
        <TOOLTIPS_V_1_0_1 type="default"
          title="Tooltip Chart"
          content="1,400.00"
          caption="Caption for tooltips website"
          hyperLink={"https://www.google.com"}
          state="right">
          <button>Hover me! Right</button>
        </TOOLTIPS_V_1_0_1>
        <TOOLTIPS_V_1_0_1 type="default"
          title="Tooltip Chart"
          content="1,400.00"
          caption="Caption for tooltips website"
          hyperLink={"https://www.google.com"}
          state="left">
          <button>Hover me! left</button>
        </TOOLTIPS_V_1_0_1>
      </div>
      <section className={style.section}>
      <h2>Props Explanation for TOOLTIPS_V_1_0_1</h2>
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
            <td><code>type</code></td>
            <td><code>oneOf(['table', 'chart', 'default'])</code></td>
            <td><code>'default'</code></td>
            <td>Determines the style of the tooltip based on the provided type.</td>
          </tr>
          <tr>
            <td><code>title</code></td>
            <td><code>oneOfType([PropTypes.string, PropTypes.node])</code></td>
            <td><code>null</code></td>
            <td>Title content of the tooltip, can be a string or a React node.</td>
          </tr>
          <tr>
            <td><code>content</code></td>
            <td><code>oneOfType([PropTypes.string, PropTypes.node])</code></td>
            <td><code>null</code></td>
            <td>Main content of the tooltip, which can vary depending on the type.</td>
          </tr>
          <tr>
            <td><code>children</code></td>
            <td><code>node</code></td>
            <td><code>null</code></td>
            <td>Children elements to be rendered within the tooltip component.</td>
          </tr>
          <tr>
            <td><code>caption</code></td>
            <td><code>string</code></td>
            <td><code>null</code></td>
            <td>Additional descriptive text that appears below the title.</td>
          </tr>
          <tr>
            <td><code>tag</code></td>
            <td><code>bool</code></td>
            <td><code>true</code></td>
            <td>Flag to display a 'New' badge on the tooltip.</td>
          </tr>
          <tr>
            <td><code>trigger</code></td>
            <td><code>oneOfType([hover, click])</code></td>
            <td><code>'hover'</code></td>
            <td>Defines the event that triggers the tooltip visibility.</td>
          </tr>
          <tr>
            <td><code>state</code></td>
            <td><code>oneOf(['top', 'right', 'bottom', 'left', 'topRight', 'topLeft', 'bottomRight', 'bottomLeft', 'rightTop', 'rightBottom', 'leftTop', 'leftBottom'])</code></td>
            <td><code>'top'</code></td>
            <td>The placement of the tooltip relative to the target.</td>
          </tr>
          <tr>
            <td><code>button</code></td>
            <td><code>bool</code></td>
            <td><code>true</code></td>
            <td>Whether a button is displayed in the tooltip for extra actions.</td>
          </tr>
          <tr>
            <td><code>hyperLink</code></td>
            <td><code>string</code></td>
            <td><code>null</code></td>
            <td>URL for the button link when a button is present.</td>
          </tr>
          <tr>
            <td><code>style</code></td>
            <td><code>object</code></td>
            <td><code>null</code></td>
            <td>Inline styles to apply to the tooltip component.</td>
          </tr>
          <tr>
            <td><code>className</code></td>
            <td><code>string</code></td>
            <td><code>null</code></td>
            <td>CSS class to apply for additional styling.</td>
          </tr>
        </tbody>
      </table>
    </section>
    </div>
  );
};

export default TooltipsPage;
