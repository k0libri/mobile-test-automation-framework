import type { ChainablePromiseElement } from 'webdriverio';
import { browser } from '@wdio/globals';

export default class BaseScreen {
    async waitForDisplayed(
        element: ChainablePromiseElement,
        timeout = 10000
    ) {
        await element.waitForDisplayed({ timeout });
    }

    async swipeUp(duration = 800) {
        const { height, width } = await browser.getWindowSize();

        const startX = Math.floor(width / 2);
        const startY = Math.floor(height * 0.8);
        const endY = Math.floor(height * 0.2);

        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration },
                { type: 'pointerMove', duration, x: startX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await browser.releaseActions();
    }

    async scrollToElement(
        element: ChainablePromiseElement,
        maxScrolls = 5
    ) {
        for (let i = 0; i < maxScrolls; i++) {
            if (await element.isDisplayed()) {
                return true;
            }
            await this.swipeUp();
        }
        return false;
    }
}