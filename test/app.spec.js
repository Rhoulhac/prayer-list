import React from 'react';
import renderer from 'react-test-renderer';
import fakeProps from '../src/fake-data';
import PrayerList from '../src/app';

describe('PrayerList', () => {
    it('should render component', () => {
        const tree = renderer.create(<PrayerList {...fakeProps} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
