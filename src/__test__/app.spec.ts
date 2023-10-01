import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { test, expect, describe, beforeEach } from 'bun:test';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    test('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    test('should not to be Hello!"', () => {
      expect(appController.getHello()).not.toBe('Hello!');
    });
  });
});
