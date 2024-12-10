import React from "react";
import AVATAR_GROUP_V_2_0_2 from "../../../Component/Molecules/AvatarGroup/AvatarGroup";
import { useSelector } from "react-redux";
import style from "./AvatarPage.module.scss";
const AvatarGroupPage = () => {
  const mainColor = useSelector((state) => state.properties.mainColor);
  return (
    <div style={{padding: 20}}>
        <h1>Avatar Group</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 20,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AVATAR_GROUP_V_2_0_2 size="sm" state="group" />
          <AVATAR_GROUP_V_2_0_2 size="md" state="group" />
          <AVATAR_GROUP_V_2_0_2 size="lg" state="group" />
          <AVATAR_GROUP_V_2_0_2 size="xl" state="group" />
          <AVATAR_GROUP_V_2_0_2 size="xxl" state="group" />
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AVATAR_GROUP_V_2_0_2 size="sm" state="group" type="rounded" />
          <AVATAR_GROUP_V_2_0_2 size="md" state="group" type="rounded" />
          <AVATAR_GROUP_V_2_0_2 size="lg" state="group" type="rounded" />
          <AVATAR_GROUP_V_2_0_2 size="xl" state="group" type="rounded" />
          <AVATAR_GROUP_V_2_0_2 size="xxl" state="group" type="rounded" />
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AVATAR_GROUP_V_2_0_2
            size="sm"
            state="multiple"
            txtAvatar={'LU'}
            mainColor={mainColor}
          />
          <AVATAR_GROUP_V_2_0_2
            size="md"
            state="multiple"
            txtAvatar={'LU'}
            mainColor={mainColor}
          />
          <AVATAR_GROUP_V_2_0_2
            size="lg"
            state="multiple"
            txtAvatar={'LU'}
            mainColor={mainColor}
          />
          <AVATAR_GROUP_V_2_0_2
            size="xl"
            state="multiple"
            txtAvatar={'LU'}
            mainColor={mainColor}
          />
          <AVATAR_GROUP_V_2_0_2
            size="xxl"
            state="multiple"
            txtAvatar={'LU'}
            mainColor={mainColor}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AVATAR_GROUP_V_2_0_2
            size="sm"
            state="multiple"
            type="rounded"
            txtAvatar={'LU'}
            mainColor={mainColor}
          />
          <AVATAR_GROUP_V_2_0_2
            size="md"
            state="multiple"
            type="rounded"
            txtAvatar={'LU'}
            mainColor={mainColor}
          />
          <AVATAR_GROUP_V_2_0_2
            size="lg"
            state="multiple"
            type="rounded"
            txtAvatar={'LU'}
            mainColor={mainColor}
          />
          <AVATAR_GROUP_V_2_0_2
            size="xl"
            state="multiple"
            type="rounded"
            txtAvatar={'LU'}
            mainColor={mainColor}
          />
          <AVATAR_GROUP_V_2_0_2
            size="xxl"
            state="multiple"
            type="rounded"
            txtAvatar={'LU'}
            mainColor={mainColor}
          />
        </div>
      </div>
      <section className={style.section}>
        <h2>Props Explanation for AVATAR_V_2_0_1</h2>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Props</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>type</code>
              </td>
              <td>
                <code>oneOf(['circle', 'square'])</code>
              </td>
              <td>
                <code>'circle'</code>
              </td>
              <td>The shape of avatar</td>
            </tr>
            <tr>
              <td>
                <code>size</code>
              </td>
              <td>
                <code>
                  oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])
                </code>
              </td>
              <td>
                <code>'md'</code>
              </td>
              <td>The size of the avatar</td>
            </tr>
            <tr>
              <td><code>state</code></td>
              <td><code>oneOf(['group', 'multiple'])</code></td>
              <td><code>'group'</code></td>
              <td>Defines the avatar group state which changes the layout - stacked or grouped</td>
            </tr>
            <tr>
              <td>
                <code>mainColor</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>''</code>
              </td>
              <td>The main color used for the avatar's badge or when in 'initial' state.</td>
            </tr>
            <tr>
              <td>
                <code>count</code>
              </td>
              <td>
                <code>number</code>
              </td>
              <td>
                <code>0</code>
              </td>
              <td>The number to display on the badge, applicable when state is 'notification' or 'initial'.</td>
            </tr>
            <tr>
              <td>
                <code>imgUrl</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>''</code>
              </td>
              <td>
              The URL of the image to display in the avatar.
              </td>
            </tr>
            <tr>
              <td>
                <code>alt</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>''</code>
              </td>
              <td>This attribute defines the alternative text describing the image</td>
            </tr>
            <tr>
              <td>
                <code>style</code>
              </td>
              <td>
                <code>object</code>
              </td>
              <td>
                <code>{}</code>
              </td>
              <td>Custom CSS class inline to apply to the avatar for additional styling.</td>
            </tr>
            <tr>
              <td>
                <code>className</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>''</code>
              </td>
              <td>Custom CSS class to apply to the avatar for additional styling.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AvatarGroupPage;
