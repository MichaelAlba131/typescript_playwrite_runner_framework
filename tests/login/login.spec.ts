import { test, expect } from '@playwright/test';
import { LoginInteraction } from './interactions/LoginInteractions';

test('login com usuário e senha válidos 1', async ({ page }) => {
  const login = new LoginInteraction(page);
  await login.openUrl();
  await login.fillUser('usuario1');
  await login.fillPassword('senha1');
  await login.clickAcessar();
});

test('login com usuário e senha válidos 2', async ({ page }) => {
  const login = new LoginInteraction(page);
  await login.openUrl();
  await login.fillUser('usuario2');
  await login.fillPassword('senha2');
  await login.clickAcessar();
});

test('login com usuário e senha válidos 3', async ({ page }) => {
  const login = new LoginInteraction(page);
  await login.openUrl();
  await login.fillUser('usuario3');
  await login.fillPassword('senha3');
  await login.clickAcessar();
});

test('login com usuário e senha válidos 4', async ({ page }) => {
  const login = new LoginInteraction(page);
  await login.openUrl();
  await login.fillUser('usuario4');
  await login.fillPassword('senha4');
  await login.clickAcessar();
});