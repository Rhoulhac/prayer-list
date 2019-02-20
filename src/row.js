import React from 'react';

export default function Row(props) {
    const {
        date,
        item
    } = props;

    return (
        <tr className="prayer-list-row">
            <td>
                {item}: {date}
            </td>
        </tr>
    );
}
