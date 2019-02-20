import React from 'react';
import Header from './header';
import Row from './row';

function getHeaderComponent(category, prayerList) {
    category.map(headerEntry => prayerList.push(
        <Header
            category={headerEntry}
            key={headerEntry}
        />
    ));
}

function getRowComponents(items, prayerList) {
    items.map(rowEntry => prayerList.push(rowEntry.map(item => (
        <Row
            item={item.item}
            date={item.date}
            key={`${item.item} - ${item.date}`}
        />
    ))));
}

function getPrayerNeedsElements(need) {
    const prayerList = [];
    const category = Object.keys(need);
    const items = Object.values(need);

    getHeaderComponent(category, prayerList);
    getRowComponents(items, prayerList);

    return prayerList;
}

export default function Table({ prayerNeeds }) {
    return (
        <table className="prayer-list-table">
            <tbody>
                {prayerNeeds.map(getPrayerNeedsElements)}
            </tbody>
        </table>
    );
}
