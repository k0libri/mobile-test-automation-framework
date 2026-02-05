import { $ } from '@wdio/globals';
import BaseScreen from './BaseScreen';

class HomeScreen extends BaseScreen {
    get accessibilityMenu() {
        return $('~Accessibility');
    }

    get viewsMenu() {
        return $('~Views');
    }

    async isDisplayed() {
        await this.waitForDisplayed(this.accessibilityMenu);
        return this.accessibilityMenu.isDisplayed();
    }

async openViews() {
    if (await this.viewsMenu.isDisplayed()) {
        await this.viewsMenu.click();
        return;
    }

    const found = await this.scrollToElement(this.viewsMenu);
    if (!found) {
        throw new Error('Views menu not found after scrolling');
    }

    await this.viewsMenu.click();
}
}

export default new HomeScreen();