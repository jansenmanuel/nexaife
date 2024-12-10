import React, { useState } from "react";
import Alert_V_2_0_2 from "../../../Component/Atomic/Alert/Alert";
import style from "./AlertPage.module.scss";

export default function AlertPage() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showInformationAlert, setShowInformationAlert] = useState(false);
  const [showDefaultAlert, setShowDefaultAlert] = useState(false);

  return (
    <div className={style.pageContainer}>
      <h1>Alert Variants</h1>
      <p>
        This section showcases different variants of the Alert_V_2_0_2
        component, demonstrating their appearance and behavior.
      </p>
      <div className={style.container}>
        <section className={style.sectionButton}>
          <div className={style.content}>
            <h2>Success Alert</h2>
            <p>Indicates a success message with no caption.</p>
            <Alert_V_2_0_2
              showAlert={showSuccessAlert}
              state="success"
              caption="This is a success message."
              showCaption={false}
              showClose={true}
              onClose={() => setShowSuccessAlert(false)}
              id="successAlert"
            />
            <button
              className={style.button}
              onClick={() => setShowSuccessAlert(!showSuccessAlert)}
            >
              Show Success Alert
            </button>
          </div>
        </section>

        <section className={style.sectionButton}>
          <div className={style.content}>
            <h2>Warning Alert</h2>
            <p>Indicates a warning message with a caption.</p>
            <Alert_V_2_0_2
              showAlert={showWarningAlert}
              state="warning"
              caption="This is a warning message."
              showCaption={true}
              showClose={true}
              onClose={() => setShowWarningAlert(false)}
              id="warningAlert"
            />
            <button
              className={style.button}
              onClick={() => setShowWarningAlert(!showWarningAlert)}
            >
              Show Warning Alert
            </button>
          </div>
        </section>

        <section className={style.sectionButton}>
          <div className={style.content}>
            <h2>Error Alert</h2>
            <p>Indicates an error message with no caption.</p>
            <Alert_V_2_0_2
              showAlert={showErrorAlert}
              state="error"
              caption="This is an error message."
              showCaption={false}
              showClose={true}
              onClose={() => setShowErrorAlert(false)}
              id="errorAlert"
            />
            <button
              className={style.button}
              onClick={() => setShowErrorAlert(!showErrorAlert)}
            >
              Show Error Alert
            </button>
          </div>
        </section>

        <section className={style.sectionButton}>
          <div className={style.content}>
            <h2>Information Alert</h2>
            <p>Indicates an information message with a caption.</p>
            <Alert_V_2_0_2
              showAlert={showInformationAlert}
              state="information"
              caption="This is an information message."
              showCaption={true}
              showClose={true}
              onClose={() => setShowInformationAlert(false)}
              id="informationAlert"
            />
            <button
              className={style.button}
              onClick={() => setShowInformationAlert(!showInformationAlert)}
            >
              Show Information Alert
            </button>
          </div>
        </section>

        <section className={style.sectionButton}>
          <div className={style.content}>
            <h2>Default Alert</h2>
            <p>Indicates a default (information) message with no caption.</p>
            <Alert_V_2_0_2
              showAlert={showDefaultAlert}
              state="information"
              caption="This is a default message."
              showCaption={false}
              showClose={true}
              onClose={() => setShowDefaultAlert(false)}
              id="defaultAlert"
            />
            <button
              className={style.button}
              onClick={() => setShowDefaultAlert(!showDefaultAlert)}
            >
              Show Default Alert
            </button>
          </div>
        </section>
      </div>

      <section className={style.section}>
        <h2>Props Explanation for Alert_V_2_0_2</h2>
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
              <td><code>showAlert</code></td>
              <td><code>bool</code></td>
              <td><code>false</code></td>
              <td>Controls the visibility of the notification.</td>
            </tr>
            <tr>
              <td><code>state</code></td>
              <td><code>oneOf(['success', 'warning', 'information', 'error'])</code></td>
              <td><code>'information'</code></td>
              <td>Specifies the type of notification to be shown.</td>
            </tr>
            <tr>
              <td><code>caption</code></td>
              <td><code>string</code></td>
              <td><code>''</code></td>
              <td>The content displayed within the notification.</td>
            </tr>
            <tr>
              <td><code>duration</code></td>
              <td><code>number</code></td>
              <td><code>4.5</code></td>
              <td>Duration in seconds after which the notification will automatically close. Set to 0 to disable auto-close.</td>
            </tr>
            <tr>
              <td><code>onClose</code></td>
              <td><code>func</code></td>
              <td><code>null</code></td>
              <td>Callback function that is called when the notification is closed.</td>
            </tr>
            <tr>
              <td><code>placement</code></td>
              <td><code>string</code></td>
              <td><code>'topRight'</code></td>
              <td>The position of the notification on the screen.</td>
            </tr>
            <tr>
              <td><code>className</code></td>
              <td><code>string</code></td>
              <td><code>''</code></td>
              <td>Custom CSS class to style the notification.</td>
            </tr>
            <tr>
              <td><code>onClick</code></td>
              <td><code>func</code></td>
              <td><code>null</code></td>
              <td>Function to execute when the notification is clicked.</td>
            </tr>
            <tr>
              <td><code>style</code></td>
              <td><code>object</code></td>
              <td><code>{}</code></td>
              <td>Inline style to apply to the notification.</td>
            </tr>
            <tr>
              <td><code>showCaption</code></td>
              <td><code>bool</code></td>
              <td><code>true</code></td>
              <td>Controls the visibility of the caption.</td>
            </tr>
            <tr>
              <td><code>showClose</code></td>
              <td><code>bool</code></td>
              <td><code>true</code></td>
              <td>Controls the visibility of the close button.</td>
            </tr>
            <tr>
              <td><code>id</code></td>
              <td><code>string</code></td>
              <td><code>''</code></td>
              <td>Unique identifier for the notification.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
