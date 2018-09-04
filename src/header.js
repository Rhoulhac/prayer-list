import React from 'react';

export default function Header(props) {
    const { category } = props;

    return (
        <tr className="prayer-list-header">
            <th>
                {category}
            </th>
        </tr>
    );
}
