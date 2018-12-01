import { BravoModule } from './bravo.module';

describe('BravoModule', () => {
  let bravoModule: BravoModule;

  beforeEach(() => {
    bravoModule = new BravoModule();
  });

  it('should create an instance', () => {
    expect(bravoModule).toBeTruthy();
  });
});
