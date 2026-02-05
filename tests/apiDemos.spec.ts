import { expect } from '@wdio/globals';
import HomeScreen from '../src/screens/HomeScreen';
import ViewsScreen from '../src/screens/ViewsScreen';

describe('ApiDemos app', () => {
    it('should open Views screen', async () => {
        expect(await HomeScreen.isDisplayed()).toBe(true);
        await HomeScreen.openViews();
        expect(await ViewsScreen.isDisplayed()).toBe(true);
    });
});