const date1 = new Date();
const date2 = new Date();
const date3 = new Date();
const date4 = new Date();

date2.setDate(date1.getDate() - 1);
date3.setDate(date1.getDate() - 2);
date4.setDate(date1.getDate() - 6);

const prayerNeeds = [
    {
        'First CATEGORY': [
            {
                item: 'ITEM 1a',
                date: date1.toLocaleDateString()
            },
            {
                item: 'ITEM 1b',
                date: date2.toLocaleDateString()
            },
            {
                item: 'ITEM 1c',
                date: date3.toLocaleDateString()
            }
        ]
    },
    {
        'Second CATEGORY': [
            {
                item: 'ITEM 2a',
                date: date2.toLocaleDateString()
            }
        ]
    },
    {
        'Last CATEGORY': [
            {
                item: 'ITEM 3',
                date: date4.toLocaleDateString()
            }
        ]
    }
];

const fakeProps = {
    prayerNeeds
};

export default fakeProps;
