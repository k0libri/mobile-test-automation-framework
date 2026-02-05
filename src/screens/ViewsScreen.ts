import { $ } from '@wdio/globals';
import BaseScreen from './BaseScreen';

class ViewsScreen extends BaseScreen {
    get animationMenu() {
        return $('~Animation');
    }

    async isDisplayed() {
        await this.waitForDisplayed(this.animationMenu);
        return this.animationMenu.isDisplayed();
    }
}

export default new ViewsScreen();