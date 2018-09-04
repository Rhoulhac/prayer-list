import React from 'react';
import Header from './header';
import Row from './row';

export default function Table() {
    const date1 = new Date();
    const date2 = new Date();
    const date3 = new Date();

    date2.setDate(date1.getDate() - 1);
    date3.setDate(date1.getDate() - 2);

    return (
        <div>
            <table className="prayer-list-table">
                <tbody>
                    <Header category="CATEGORY" />
                    <Row
                        item="ITEM a"
                        date={date1.toLocaleDateString()}
                    />
                    <Row
                        item="ITEM b"
                        date={date2.toLocaleDateString()}
                    />
                    <Row
                        item="ITEM c"
                        date={date3.toLocaleDateString()}
                    />
                </tbody>
            </table>
        </div>
    );
}

