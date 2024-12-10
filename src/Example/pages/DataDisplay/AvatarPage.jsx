import React from "react";
import Avatar from "../../../Component/Atomic/Avatar/Avatar";
import { useSelector } from "react-redux";
import style from "./AvatarPage.module.scss";

const AvatarPage = () => {
  const mainColor = useSelector((state) => state.properties.mainColor);
  return (
    <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 40 }}>
      <h1>Avatar</h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <Avatar size="sm" />
          <Avatar size="md" />
          <Avatar size="lg" />
          <Avatar size="xl" />
          <Avatar size="xxl" />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <Avatar size="sm" imgUrl={"https://images.unsplash.com/photo-1631913290783-490324506193?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          <Avatar size="md" imgUrl={"https://images.unsplash.com/photo-1631913290783-490324506193?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
          <Avatar size="lg" imgUrl={"https://images.unsplash.com/photo-1631913290783-490324506193?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
          <Avatar size="xl" imgUrl={"https://images.unsplash.com/photo-1631913290783-490324506193?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
          <Avatar size="xxl" imgUrl={"https://images.unsplash.com/photo-1631913290783-490324506193?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <Avatar size="sm" type="rounded" />
          <Avatar size="md" type="rounded" />
          <Avatar size="lg" type="rounded" />
          <Avatar size="xl" type="rounded" />
          <Avatar size="xxl" type="rounded" />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <Avatar size="sm" state='initial' mainColor={mainColor} txtAvatar={'LU'}/>
          <Avatar size="md" state='initial' mainColor={mainColor} txtAvatar={'LU'}/>
          <Avatar size="lg" state='initial' mainColor={mainColor} txtAvatar={'LU'}/>
          <Avatar size="xl" state='initial' mainColor={mainColor} txtAvatar={'LU'}/>
          <Avatar size="xxl" state='initial' mainColor={mainColor} txtAvatar={'LU'}/>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <Avatar size="sm" type="rounded" state='initial' mainColor={mainColor} txtAvatar={'LU'}/>
          <Avatar size="md" type="rounded" state='initial' mainColor={mainColor} txtAvatar={'LU'}/>
          <Avatar size="lg" type="rounded" state='initial' mainColor={mainColor} txtAvatar={'LU'}/>
          <Avatar size="xl" type="rounded" state='initial' mainColor={mainColor} txtAvatar={'LU'}/>
          <Avatar size="xxl" type="rounded" state='initial' mainColor={mainColor} txtAvatar={'LU'}/>
        </div>
      
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <Avatar size="sm" state="badge" mainColor={mainColor}/>
          <Avatar size="md" state="badge" mainColor={mainColor}/>
          <Avatar size="lg" state="badge" mainColor={mainColor}/>
          <Avatar size="xl" state="badge" mainColor={mainColor}/>
          <Avatar size="xxl" state="badge" mainColor={mainColor}/>
        </div>
        
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <Avatar size="sm" type="rounded" state="badge" mainColor={mainColor} />
          <Avatar size="md" type="rounded" state="badge" mainColor={mainColor}/>
          <Avatar size="lg" type="rounded" state="badge" mainColor={mainColor}/>
          <Avatar size="xl" type="rounded" state="badge" mainColor={mainColor}/>
          <Avatar size="xxl"  type="rounded" state="badge" mainColor={mainColor}/>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <Avatar size="sm" state="notification" mainColor={mainColor} count={10}/>
          <Avatar size="md" state="notification" mainColor={mainColor} count={10}/>
          <Avatar size="lg" state="notification" mainColor={mainColor} count={10}/>
          <Avatar size="xl" state="notification" mainColor={mainColor} count={10}/>
          <Avatar size="xxl" state="notification" mainColor={mainColor} count={10}/>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <Avatar size="sm" type="rounded" state="notification" mainColor={mainColor} count={10}/>
          <Avatar size="md" type="rounded" state="notification" mainColor={mainColor} count={10}/>
          <Avatar size="lg" type="rounded" state="notification" mainColor={mainColor} count={10}/>
          <Avatar size="xl" type="rounded" state="notification" mainColor={mainColor} count={10}/>
          <Avatar size="xxl" type="rounded" state="notification" mainColor={mainColor} count={10}/>
        </div>
      <section className={style.section}>
        <h2>Props Explanation for Avatar</h2>
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
                <code>state</code>
              </td>
              <td>
                <code>
                  oneOf(['initial','default', 'notification', 'badge'])
                </code>
              </td>
              <td>
                <code>'default'</code>
              </td>
              <td>The state of the avatar, affects badge display, can be 'initial', 'notification', or 'badge'.</td>
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
                <code>txtAvatar</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>''</code>
              </td>
              <td>The text to display in the avatar</td>
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

export default AvatarPage;
