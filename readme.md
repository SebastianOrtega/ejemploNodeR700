### Resulado del ejemlplo del alien (F800x.js):

http://192.168.47:5000/alien

```
================================================

---

||||||||||||||||||||||||||||||||||||||||||||||||
{
  location: 'Anden1',
  date: 1657755985402,
  tagcount: '2',
  tags: [
    {
      rssi: '-41.7',
      logicaldevice: 'Anden1',
      count: '14',
      epc: '8170EF0EEDC002E4F7C03616166AF532',
      fields: {}
    },
    {
      rssi: '-47.3',
      logicaldevice: 'Anden1',
      count: '14',
      epc: '329CCCC05E2C02C9D8081562301FD644',
      fields: {}
    }
  ]
}
================================================
```

### Resulado del ejemlplo del impinj (r700.js):

```
[
  {
    timestamp: '2021-02-02T18:39:33.886617Z',
    hostname: 'impinj-14-4a-8b',
    eventType: 'tagInventory',
    tagInventoryEvent: {
      epcHex: '329CCCC05E2C02C9D8081562301FD644',
      antennaPort: 1,
      antennaName: 'Antena_1',
      peakRssiCdbm: -4050
    }
  },
  {
    timestamp: '2021-02-02T18:39:34.385793625Z',
    hostname: 'impinj-14-4a-8b',
    eventType: 'tagInventory',
    tagInventoryEvent: {
      epcHex: '8170EF0EEDC002E4F7C03616166AF532',
      antennaPort: 1,
      antennaName: 'Antena_1',
      peakRssiCdbm: -4350
    }
  }
]
```
