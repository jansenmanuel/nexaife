// Components
import HeaderPage from "../../componentsExample/HeaderPage";
import Title from "antd/lib/typography/Title";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { TimePicker as TIMEPICKER_V_2_0_2 } from "../../../Component";

// Libs
import React, { useEffect, useState } from "react";
import { exampleApiCol } from "../../config";
import { timePickerDataPage } from "../../data";
import { useSelector } from "react-redux";
import { ERROR_MESSAGES } from "../../Constant/generalConstant";
import moment from "moment";

const TimePickerPage = () => {
  const { mainColor } = useSelector((state) => state.properties);
  const [value, setValue] = useState(null);

  const format = "HH:mm";

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue(moment("12:08:23", "HH:mm:ss"));
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={{ textAlign: "left", padding: 20 }}>
      <HeaderPage
        title={"Time Picker"}
        subtitle={
          "By clicking the input box, you can select a time from a popup panel."
        }
      />
      <div>
        <Title level={4} aria-level={4}>
          Size
        </Title>
        <div style={{ display: "flex", gap: 15, alignItems: "flex-end" }}>
          <div>
            <p>Small (sm)</p>
            <TIMEPICKER_V_2_0_2
              mainColor={mainColor}
              placeholder={"Select a time"}
            />
          </div>
          <div>
            <p>Medium (md)</p>
            <TIMEPICKER_V_2_0_2 size={"md"} />
          </div>
          <div>
            <p>Large (lg)</p>
            <TIMEPICKER_V_2_0_2 size={"lg"} />
          </div>
          <div>
            <p>Extra Large (xl)</p>
            <TIMEPICKER_V_2_0_2 size={"xl"} />
          </div>
          <div>
            <p>Double extra large (xxl)</p>
            <TIMEPICKER_V_2_0_2 size={"xxl"} />
          </div>
        </div>
      </div>
      <br />
      <div>
        <Title level={4} aria-level={4}>
          State
        </Title>
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <p>Controlled Component</p>
            <TIMEPICKER_V_2_0_2
              id={12}
              onChange={(e) => setValue(e)}
              value={value}
            />
            <br />
            <p> Value: {value && JSON.stringify(value, null, 2)}</p>
            <p>
              Value String:{" "}
              {value && JSON.stringify(value.format("HH:mm:ss"), null, 2)}
            </p>
          </div>
          <div>
            <p>Disabled</p>
            <TIMEPICKER_V_2_0_2
              id={12}
              onChange={(e) => setValue(e)}
              disabled={true}
            />
          </div>
          <div>
            <p>Error State</p>
            <TIMEPICKER_V_2_0_2
              id={12}
              valid={false}
              onChange={(e) => setValue(e)}
              errorMessage={ERROR_MESSAGES.LONG_ERROR_MESSAGE}
              maxWidthError={100}
            />
          </div>
          <div>
            <p>Format Hour Minutes</p>
            <TIMEPICKER_V_2_0_2
              id={12}
              onChange={(e) => setValue(e)}
              format={format}
            />
          </div>
        </div>
      </div>
      <br />
      <div>
        <Title level={4} aria-level={4}>
          Labels
        </Title>
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <p style={{ fontStyle: "italic" }}>sm</p>
            <TIMEPICKER_V_2_0_2 label={"Hello"} size={"sm"} id={12} />
          </div>
          <div>
            <p style={{ fontStyle: "italic" }}>md</p>
            <TIMEPICKER_V_2_0_2 label={"Hello"} size={"md"} id={12} />
          </div>
          <div>
            <p style={{ fontStyle: "italic" }}>lg</p>
            <TIMEPICKER_V_2_0_2 label={"Hello"} size={"lg"} id={12} />
          </div>
          <div>
            <p style={{ fontStyle: "italic" }}>xl</p>
            <TIMEPICKER_V_2_0_2 label={"Label"} size={"xl"} id={12} />
          </div>
          <div>
            <p style={{ fontStyle: "italic" }}>xxl</p>
            <TIMEPICKER_V_2_0_2 label={"Label"} size={"xxl"} id={12} />
          </div>
        </div>
        <div>
          <p style={{ fontStyle: "italic" }}>Label with subtitle</p>
          <TIMEPICKER_V_2_0_2
            label={{ title: "Label", subtitle: "Subtitle" }}
            size={"sm"}
            id={12}
          />
        </div>
      </div>
      <ApiPropsTable columns={exampleApiCol} dataSource={timePickerDataPage} />
    </div>
  );
};

export default TimePickerPage;
