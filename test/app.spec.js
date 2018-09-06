import React from 'react';
import renderer from 'react-test-renderer';
import PrayerList from '../src/app';

describe('PrayerList', () => {
    it('should render component', () => {
        const tree = renderer.create(<PrayerList />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
