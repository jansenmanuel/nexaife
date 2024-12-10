import React from 'react'
import {Breadcrumb as BREADCRUMB_V_2_1_1 } from '../../../Component';
import style from './BreadCrumbPage.module.scss'
import _ from 'lodash';
import { useEffect } from 'react';

export default function BreadCrumbPage() {
    const [items, setItems] = React.useState([
        { label: 'Home', to: '/', key: 'home', id:1 },
        { label: 'Dashboard', to: '/dashboard', key: 'dashboard', id:2 },
        { label: 'Distributor Info', to: '/distributor', key: 'distributor', id:3 },
    ]);


    // const onClick = () => {
    //   _.pullAt(items, [0]);
    //   setItems((prevsValue) => {
    //     return [...prevsValue];
    //   });
    // };

    const onClick = (item) => {
        const newItems = item
        console.log(newItems)
      };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Breadcrumb</h1>
            <div style={{ marginTop: '20px' }}>
                <BREADCRUMB_V_2_1_1 onClick={onClick} items={items} id="breadcrumb" />
            </div>
        <section className={style.section}>
            <h2>Props Explanation for Alert_V_2_0_2a</h2>
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
                <td><code>items</code></td>
                <td>
                <code>arrayOf(shape({'{'}
                    label: string
                    to: string
                    key: oneOfType([PropTypes.string, PropTypes.number])))</code>
                </td>
                <td><code>[]</code></td>
                <td>
                An array of objects defining each breadcrumb item. Each item requires a <code>label</code> (the text to display),
                <code>to</code> (the navigation path), and <code>key</code> (a unique identifier).
                </td>
            </tr>
            <tr>
                <td><code>id</code></td>
                <td><code>string</code></td>
                <td><code>null</code></td>
                <td>
                A unique identifier for the component.
                </td>
            </tr>
            </tbody>
            </table>
        </section>
        </div>
    );
}
