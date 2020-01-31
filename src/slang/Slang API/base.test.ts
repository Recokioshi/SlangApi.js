import { base } from './base';
import { LongListProxy } from '../Proxy/LongListProxy';
import { ComplexTslotListProxy } from '../Proxy/Timeslot/ComplexTslotListProxy';
import { ComplexShipmentListProxy } from '../Proxy/Shipment/ComplexShipmentListProxy ';
import { ComplexManifestListProxy } from '../Proxy/Manifest/ComplexManifestListProxy';
import { exceptions } from '../../common/exceptions';
import { ComplexShipmentProxy } from '../Proxy/Shipment/ComplexShipmentProxy';
import { ComplexTslotProxy } from '../Proxy/Timeslot/ComplexTslotProxy';
import { ComplexManifestProxy } from '../Proxy/Manifest/ComplexManifestProxy';

describe('getShipment', () => {
  test('Run getShipment with proper value', async () => {
    const shipment = await base.getShipment(12637760);
    expect(shipment.getDetails().getReference3()).toBe('074-18530610-1-1');
  });

  test('Run getShipment with wrong value', async () => {
    const shipment = await base.getShipment(1111);
    expect(shipment).toBeNull();
  });
});

describe('getTimeslot', () => {
  test('Run getTimeslot with proper value', async () => {
    const tslot = await base.getTimeslot(2562958);
    expect(tslot.getDetails().getReference1()).toBe('IM 000102944');
  });

  test('Run getTimeslot with wrong value', async () => {
    const tslot = await base.getTimeslot(11111);
    expect(tslot).toBeNull();
  });
});

describe('getManifest', () => {
  test('Run getManifest with proper value', async () => {
    const mf = await base.getManifest(3583626);
    expect(mf.getDetails().getCustReference1()).toBe('Ahmed');
  });

  test('Run getManifest with wrong value', async () => {
    const mf = await base.getManifest(11111);
    expect(mf).toBeNull();
  });
});

describe('getShipments', () => {
  test('Run getShipments with proper values', async () => {
    const ids = new LongListProxy();
    ids.add(12638407);
    ids.add(12638408);
    const shipments = await base.getShipments(ids);
    const references = [];
    for (let i = 0; i < shipments.size(); i++) {
      references.push(
        shipments
          .get(i)
          .getDetails()
          .getReference1()
      );
    }
    expect(references).toEqual(['VY-151515-1-3', 'VY-151515-1-4']);
  });

  test('Run getShipments with wrong values', async () => {
    const ids = new LongListProxy();
    ids.add(1111);
    ids.add(11111);
    const shipments = await base.getShipments(ids);
    expect(shipments).toBeNull();
  });
});

describe('getTimeslots', () => {
  test('Run getTimeslots with proper values', async () => {
    const ids = new LongListProxy();
    ids.add(2563024);
    ids.add(2563092);
    const tslots = await base.getTimeslots(ids);
    const references = [];
    for (let i = 0; i < tslots.size(); i++) {
      references.push(
        tslots
          .get(i)
          .getDetails()
          .getReference1()
      );
    }
    expect(references).toEqual(['IM 000103239', 'IM 000103612']);
  });

  test('Run getTimeslots with wrong values', async () => {
    const ids = new LongListProxy();
    ids.add(1111);
    ids.add(11111);
    const tslots = await base.getTimeslots(ids);
    expect(tslots).toBeNull();
  });
});

describe('getManifests', () => {
  test('Run getManifests with proper values', async () => {
    const ids = new LongListProxy();
    ids.add(3583654);
    ids.add(3583653);
    const manifests = await base.getManifests(ids);
    const references = [];
    for (let i = 0; i < manifests.size(); i++) {
      references.push(
        manifests
          .get(i)
          .getDetails()
          .getCustReference1()
      );
    }
    expect(references).toEqual([null, 'Husain']);
  });

  test('Run getManifests with wrong values', async () => {
    const ids = new LongListProxy();
    ids.add(1111);
    ids.add(1111);
    const manifests = await base.getManifests(ids);
    expect(manifests).toBeNull();
  });
});

describe('createListProxy', () => {
  test('ComplexShipmentProxy', () => {
    expect(base.createListProxy('pl.axit.slang.proxy.ComplexShipmentProxy')).toBeInstanceOf(
      ComplexShipmentListProxy
    );
  });

  test('ComplexTslotProxy', () => {
    expect(base.createListProxy('pl.axit.slang.proxy.ComplexTslotProxy')).toBeInstanceOf(
      ComplexTslotListProxy
    );
  });

  test('ComplexManifestProxy', () => {
    expect(base.createListProxy('pl.axit.slang.proxy.ComplexManifestProxy')).toBeInstanceOf(
      ComplexManifestListProxy
    );
  });

  test('ComplexManifestProxyWrongPrefix', () => {
    expect(() => {
      base.createListProxy('pl.axit.slang.proxy2.ComplexManifestProxyWrongPrefix');
    }).toThrowError(
      Error(exceptions.classNameNotExists('pl.axit.slang.proxy2.ComplexManifestProxyWrongPrefix'))
    );
  });

  test('ComplexNotImplementedProxy', () => {
    expect(() => {
      base.createListProxy('pl.axit.slang.proxy.ComplexNotImplementedProxy');
    }).toThrowError(Error(exceptions.createListProxyNoTypeImplemented));
  });
});

describe('creating new proxy objects', () => {
  test('getNewShipment', () => {
    expect(base.getNewShipment()).toBeInstanceOf(ComplexShipmentProxy);
  });

  test('getNewTimeslot', () => {
    expect(base.getNewTimeslot()).toBeInstanceOf(ComplexTslotProxy);
  });

  test('getNewManifest', () => {
    expect(base.getNewManifest()).toBeInstanceOf(ComplexManifestProxy);
  });
});

describe('getting environment contants', () => {
  test('getSolutionId', () => {
    expect(base.getSolutionId()).toBe(33471);
  });

  test('getComapnyId', () => {
    expect(base.getCompanyId()).toBe(2077981);
  });

  test('getGroupId', () => {
    expect(base.getGroupId()).toBe(2077961);
  });

  test('getLoggedInUser', () => {
    expect(base.getLoggedInUser().getEmail()).toBe('user@axit.pl');
  });
});
