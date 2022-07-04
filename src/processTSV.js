const fs = require("fs");

const isItemPresent = (arr, num) => {
  return arr.filter((record) => record.number === parseInt(num)).length > 0;
};

const hasPartZone = (arr, name) => {
  return arr.filter((record) => record.nameCommon.includes(name)).length > 0;
};

const getRecord = (arr, num) =>
  arr.filter((record) => record.number === parseInt(num))[0];

const getPartRecord = (arr, name) =>
  arr.filter((record) => record.nameCommon.includes(name))[0];

const hasMacrons = (input) => {
  return /[^\u0000-\u007f]/.test(input);
};

const removeMacrons = (input) => {
  return input
    .replace(/\u0101/g, "a")
    .replace(/\u0100/g, "A")
    .replace(/\u0113/g, "e")
    .replace(/\u0112/g, "E")
    .replace(/\u012b/g, "i")
    .replace(/\u012a/g, "I")
    .replace(/\u014d/g, "o")
    .replace(/\u014c/g, "O")
    .replace(/\u016b/g, "u")
    .replace(/\u016a/g, "U");
};

const csvFile = fs.readFileSync("../placenames.tsv", "utf8");
const [header, ...lines] = csvFile.split("\r\n"); // Windows = \r\n, Linux/Mac = \n
console.log(header);

const ZONENUM = 4;
const ZONENAME = 5;
const ZONEORDERNUM = 6;
const LOCALITYNAME = 7;
const ISFEATURED = 8;
const SPOKENNAME1 = 9;
const SPEAKER1 = 11;
const START1 = 13;
const END1 = 14;
const INDEXNAME2 = 15;
const SPOKENNAME2 = 16;
const SPEAKER2 = 18;
const START2 = 20;
const END2 = 21;
const INDEXNAME3 = 22;
const SPOKENNAME3 = 23;
const SPEAKER3 = 25;
const START3 = 27;
const END3 = 28;
const SEETEXT1 = 46;
const SEEID1 = 51;
const SEETEXT2 = 46;
const SEEID2 = 56;
const SEETEXT3 = 46;
const SEEID3 = 61;
const KIND1 = 68;
const KINDNAME1 = 71;
const KIND2 = 76;
const KINDNAME2 = 79;
const KIND3 = 82;
const KINDNAME3 = 85;
const KIND4 = 88;
const KINDNAME4 = 91;
const KIND5 = 94;
const KINDNAME5 = 97;
const KIND6 = 98;
const KINDNAME6 = 101;
const KIND7 = 102;
const KINDNAME7 = 105;

// const splitHeader = header.split(",");
// splitHeader.map((item, index) => console.log(`${index}: ${item}`));

const zones = [];

function parseLocalityRecordingInfo(split, newLocality, zone) {
  if (split[START1]) {
    newLocality.audioStart = parseFloat(split[START1]) || 0;
    newLocality.audioEnd = parseFloat(split[END1]) || 0;
    newLocality.speaker = split[SPEAKER1];
    zone.speakers.add(split[SPEAKER1]);
  }
  if (hasMacrons(split[LOCALITYNAME])) {
    newLocality.altSpellings = [
      removeMacrons(split[LOCALITYNAME]).toLowerCase(),
    ];
  }
  //TODO: Need to check for missing primary pronunciation
  //Alternative pronunciations
  if (split[INDEXNAME2]) {
    if (!newLocality.altNames) {
      newLocality.altNames = [];
    }
    newLocality.altNames.push({
      name: split[INDEXNAME2],
      altSpellings: [removeMacrons(split[INDEXNAME2]).toLowerCase()],
      audioStart: (split[START2] && parseFloat(split[START2])) || 0,
      audioEnd: (split[END2] && parseFloat(split[END2])) || 0,
      speaker: split[SPEAKER2],
    });
    // Add speaker to speaker list if not already present
    if (split[SPEAKER2]) {
      zone.speakers.add(split[SPEAKER2]);
    }
  }
  if (split[INDEXNAME3]) {
    if (!newLocality.altNames) {
      newLocality.altNames = [];
    }
    newLocality.altNames.push({
      name: split[INDEXNAME3],
      altSpellings: [removeMacrons(split[INDEXNAME3]).toLowerCase()],
      audioStart: (split[START3] && parseFloat(split[START3])) || 0,
      audioEnd: (split[END3] && parseFloat(split[END3])) || 0,
      speaker: split[SPEAKER3],
    });
    if (split[SPEAKER3]) {
      zone.speakers.add(split[SPEAKER3]);
    }
  }
}

const processNormalZones = (split) => {
  if (!split[ZONENUM]) {
    return;
  }
  //Create new zone if required
  if (!isItemPresent(zones, split[ZONENUM])) {
    zones.push({
      number: parseInt(split[ZONENUM]),
      nameCommon: split[ZONENAME],
      speakers: new Set(),
    });
  }

  if (split[ZONEORDERNUM] > 0) {
    // exclude intro line
    //grab zone record entry
    const zone = getRecord(zones, parseInt(split[ZONENUM]));
    // add locality array if required
    if (!zone.localities) {
      zone.localities = [];
    }
    // add speaker name from first entry
    if (parseInt(split[ZONEORDERNUM]) === 1) {
      zone.track = `zones/${split[ZONENUM].toString().padStart(3, "0")}.mp3`;
      zone.speakers.add(split[SPEAKER1]);
    }
    const newLocality = {
      order: parseInt(split[ZONEORDERNUM]),
      name: split[LOCALITYNAME],
      uniqueId: split[0],
      types: [],
    };
    parseLocalityRecordingInfo(split, newLocality, zone);

    // Add Types
    if (split[KIND1]) {
      newLocality.types.push({ type: split[KIND1], name: split[KINDNAME1] });
    }
    if (split[KIND2]) {
      newLocality.types.push({ type: split[KIND2], name: split[KINDNAME2] });
    }
    if (split[KIND3]) {
      newLocality.types.push({ type: split[KIND3], name: split[KINDNAME3] });
    }
    if (split[KIND4]) {
      newLocality.types.push({ type: split[KIND4], name: split[KINDNAME4] });
    }
    if (split[KIND5]) {
      newLocality.types.push({ type: split[KIND5], name: split[KINDNAME5] });
    }
    if (split[KIND6]) {
      newLocality.types.push({ type: split[KIND6], name: split[KINDNAME1] });
    }
    if (split[KIND7]) {
      newLocality.types.push({ type: split[KIND7], name: split[KINDNAME7] });
    }
    // Add "see also" info
    if (split[SEEID1]) {
      newLocality.seeAlso = [];
      newLocality.seeAlso.push({ text: split[SEETEXT1], id: split[SEEID1] });
    }
    if (split[SEEID2]) {
      if (!newLocality.seeAlso) {
        newLocality.seeAlso = [];
      }
      newLocality.seeAlso.push({ text: split[SEETEXT2], id: split[SEEID2] });
    }
    if (split[SEEID3]) {
      if (!newLocality.seeAlso) {
        newLocality.seeAlso = [];
      }
      newLocality.seeAlso.push({ text: split[SEETEXT3], id: split[SEEID3] });
    }
    // Add new locality to zone;
    zone.localities.push(newLocality);
  }
};

const processPartZones = (split) => {
  const partNums = [undefined, 0, 59.5, 139.5]; // place in zone order with leading undefined for 1 indexed parts
  const partRegex = /Part \d/;
  const partName = split[ZONENAME];
  // remove entry for Hugh saying "Part X"
  if (!partRegex.test(partName) || partRegex.test(split[LOCALITYNAME])) {
    return;
  }
  const partNum = partName.slice(5, 6);

  if (!hasPartZone(zones, partName)) {
    zones.push({
      number: parseFloat(partNums[partNum]), //does ordering
      nameCommon: `Introduction to ${split[ZONENAME]}`,
      speakers: new Set(),
      localities: [],
    });
  }

  const zone = getPartRecord(zones, partName);
  if (parseInt(split[ZONEORDERNUM]) === 0) {
    zone.track = `zones/part${partNum}.mp3`;
    zone.speakers.add(split[SPEAKER1]);
  }

  const newLocality = {
    order: parseInt(split[ZONEORDERNUM]),
    uniqueId: split[0],
    name: split[LOCALITYNAME],
  };
  parseLocalityRecordingInfo(split, newLocality, zone);
  zone.localities.push(newLocality);
};

lines.forEach((line) => {
  // split the csv record
  const split = line.split("\t");
  processNormalZones(split);
  processPartZones(split);
});
zones.forEach((z) => (z.speakers = [...z.speakers]));

fs.writeFileSync("data/zones.json", JSON.stringify(zones));
