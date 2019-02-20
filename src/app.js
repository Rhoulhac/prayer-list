import React from 'react';
import Table from './prayer-list-category-item';
import props from './fake-data';

export default function PrayerList() {
    return (
        <div>
            <Table {...props} />
        </div>
    );
}
