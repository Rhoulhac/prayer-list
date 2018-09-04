import React from 'react';

export default function Row(props) {
    const {
        item,
        date
    } = props;

    return (
        <tr className="prayer-list-row">
            <td>
                {item}: {date}
            </td>
        </tr>
    );
}
