import { Page } from "@playwright/test";
import { BasePage } from "../../base/BasePage";
import { TIMEOUT } from "../../constants/ConstantTimeout";

export class TopBarNavigation extends BasePage {
    private readonly lnkLogin = this.page.getByRole('link', { name: 'Đăng Nhập' });
    private readonly lnkLogout = this.page.getByRole('link', { name: 'Đăng xuất' });
    //private readonly lnkProfile = this.page.getByRole('link', { name: 'Avatar John Johnson' });
    private readonly lnkProfile = this.page.locator("//a[@href='/account']/h3");

    constructor(page: Page) {
        super(page);
    }

    async navigateLoginPage() {
        await this.click(this.lnkLogin);
    }

    async isLogoutLinkdIsDisplayed(timeoutInSec: number = TIMEOUT.DEFAULT_TIMEOUT): Promise<boolean> {
        return await this.lnkLogout.isVisible({ timeout: timeoutInSec });
    }

    async getProfileName(): Promise<string | null> {
        return await this.getText(this.lnkProfile);
    }
}