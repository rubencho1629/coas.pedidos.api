import { expect } from '@loopback/testlab';
import { VimaedxzRepository } from '../../../repositories';
import { testBdsiflbDataSource } from '../datasources';

describe('PanelDrugStore [unit]', () => {
  it('getDrugStore', async () => {
    const respository = new VimaedxzRepository(testBdsiflbDataSource);

    const found = await respository.find({ where: { estado: 0 } });

    expect(found).not.null;
  });
});
