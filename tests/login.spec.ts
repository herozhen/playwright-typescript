//import { test, expect } from "@playwright/test";
// import { CommonPage } from "../pages/CommonPage";
// import { LoginPage } from "../pages/LoginPage";
// import { CommonDialog } from "../pages/dialogs/CommonDialog";
import { test, expect } from '../fixtures/custom-fixtures';

test('Verify valid login successfully', async ({ homePage, loginPage, commonDialog }) => {
    let username = "5cfa633b-ccfb-4735-882a-38ff7c308b07";
    let password = "Test123456@";
    // const commonPage = new CommonPage(page);
    // const loginPage = new LoginPage(page);
    // const commonDialogPage = new CommonDialog(page);


    // Step 1: go to https://demo1.cybersoft.edu.vn/
    await homePage.goTo("https://demo1.cybersoft.edu.vn/");
    //await page.goto("https://demo1.cybersoft.edu.vn/");

    // Step 2: click "Dang nhap" on the top right
    await homePage.getTopBarNavigation().navigateLoginPage();
    // let lnkLogin = page.getByRole('link', { name: 'Đăng Nhập' });
    // await lnkLogin.click();

    //Step 3: Enter account name
    // let txtAccount = page.getByRole('textbox', { name: 'Tài Khoản' });
    // await txtAccount.fill('5cfa633b-ccfb-4735-882a-38ff7c308b07');

    // // Step 4: Enter password
    // let txtPassword = page.getByRole('textbox', { name: 'Mật Khẩu' });
    // await txtPassword.fill('Test123456@');

    // //Step 5 : Click remember user
    // let ckbRemember = page.getByRole('checkbox', { name: 'Nhớ tài khoản' });
    // await ckbRemember.check();

    // // Step 6: Click "Dang nhap' button
    // let btnLogin = page.getByRole('button', { name: 'Đăng nhập' });
    // await btnLogin.click();


    // Gộp step 3 - 4 -5 -6
    await loginPage.login(username, password);

    //Step 7: Verify user login successfully
    //VP1: Check message "Dang nhap thanh cong" display
    // let lblMsgLoginSuccessfully = page.getByRole('heading', { name: 'Đăng nhập thành công' });
    // await expect(lblMsgLoginSuccessfully).toBeVisible();

    let loginMsg = await commonDialog.getTextMessage();
    expect(loginMsg).toEqual("Đăng nhập thành công");

    //VP2: Check "Dang xuat" link display
    // let lnkLogout = page.getByRole('link', { name: 'Đăng xuất' });
    // await expect(lnkLogout).toBeVisible();
    let isDisplayed = await loginPage.getTopBarNavigation().isLogoutLinkdIsDisplayed();
    expect(loginMsg).toBeTruthy();

    //VP3: Check "Profile" link display
    // let lnkProfile = page.getByRole('link', { name: 'Avatar John Johnson' })
    // await expect(lnkProfile).toBeVisible();
    let profileName = await loginPage.getTopBarNavigation().getProfileName();
    expect(profileName).toEqual("John Johnson");

    //await browser.close();
});
