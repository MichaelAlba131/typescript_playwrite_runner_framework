import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export class LoginInteraction extends LoginPage {
    constructor(page: Page) {
        super(page);
    }

    async openUrl(): Promise<this> {
        await this.page.goto('https://login.dafiti.com.br/');
        return this;
    }

    async fillUser(user: string): Promise<this> {
        await this.txtEmail.waitFor({ state: 'visible', timeout: 10000 });
        await this.txtEmail.fill(user);
        return this;
    }

    async fillPassword(password: string): Promise<this> {
        await this.txtPass.fill(password);
        return this;
    }

    async clickAcessar(): Promise<this> {
        await this.btnAcessar.click();
        return this;
    }
}