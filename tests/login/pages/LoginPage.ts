import { Page, Locator } from '@playwright/test';

export class LoginPage {
    protected page: Page;
    protected txtEmail: Locator;
    protected txtPass: Locator;
    protected btnAcessar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtEmail = page.locator('[name="email"]');
        this.txtPass = page.locator('[name="password"]');
        this.btnAcessar = page.locator('//div[contains(text(),"Entrar")]//ancestor::button');
    }
}