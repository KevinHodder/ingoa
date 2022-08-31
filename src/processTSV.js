const fs = require("fs");

const isItemPresent = (arr, num) => {
  return arr.filter((record) => record.number === parseInt(num)).length > 0;
};

const hasPartZone = (arr, name) => {
  return arr.filter((record) => record.nameCommon.includes(name)).length > 0;
};

/**
 * Get a Zone level record with a given (unique) zone number
 * @param arr {object[]}- an array of top level Zone records
 * @param num {int | string} - zone number (will parse strings to ints)
 * @returns {*}
 */
const getZoneRecordByZoneNumber = (arr, num) =>
  arr.filter((record) => record.number === parseInt(num))[0];

/**
 * Same as get getZoneRecordByZoneNumber, but searching by name
 * Name is less unique so only used for the "part zones" which don't have numbers in the spreadsheet
 * @param arr {object[]}- an array of top level Zone records
 * @param name {string}- zone name (need not be an identical match)
 * @returns {*}
 */
const getZoneRecordByName = (arr, name) =>
  arr.filter((record) => record.nameCommon.includes(name))[0];

const hasMacrons = (input) => {
  return /[^\u0000-\u007f]/.test(input);
};

const replaceSpecialCharacters = (word) => {
  return word
    .replaceAll("_k_", "𝙠")
    .replaceAll("_K_", "𝙆")
    .replaceAll("_h_", "ʰ")
    .replaceAll("_H_", "ᴴ")
    .replaceAll("_f_", "𝒇")
    .replaceAll("_F_", "𝑭")
    .replaceAll("_g_", "𝒈")
    .replaceAll("_G_", "𝑮")
    .replaceAll("_l_", "𝒍")
    .replaceAll("_L_", "𝑳");
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
    .replace(/\u016a/g, "U")
    .replaceAll(/_k_/gi, "k")
    .replaceAll(/_h_/gi, "h")
    .replaceAll(/_f_/gi, "f")
    .replaceAll(/_g_/gi, "g")
    .replaceAll(/_l_/gi, "l");
};

const placenamesFile = fs.readFileSync("../placenames.tsv", "utf8");
const [header, ...lines] = placenamesFile.split("\r\n"); // Windows = \r\n, Linux/Mac = \n

const zonesFile = fs.readFileSync("../zones.tsv", "utf8");
const [zoneHeader, ...zoneLines] = zonesFile.split("\r\n"); // Windows = \r\n, Linux/Mac = \n

console.log(header);

// Placename columns
const ZONENUM = 4;
const ZONENAME = 5;
const ZONEORDERNUM = 6;
const INDEXNAME1 = 7;
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
const NOTESPEECH = 35;
const NOTENAME = 37;
const NOTEPLACE = 38;
const GROUPNAME1 = 39;
const GROUPID1 = 40;
const GROUPNAME2 = 41;
const GROUPID2 = 42;
const SEETEXT1 = 46;
const SEEID1 = 51;
const SEEID2 = 56;
const SEEID3 = 61;
const SEEID4 = 66;
const KINDPREFIX1 = 67;
const KIND1 = 68;
const KINDNAME1 = 71;
const SUPER1 = 72;
const SUPER1a = 73;
const SUPER1_1 = 74;
const KINDPREFIX2 = 75;
const KIND2 = 76;
const KINDNAME2 = 79;
const SUPER2 = 80;
const KIND3 = 82;
const KINDNAME3 = 85;
const SUPER3 = 86;
const KIND4 = 88;
const KINDNAME4 = 91;
const SUPER4 = 92;
const KIND5 = 94;
const KINDNAME5 = 97;
const KIND6 = 98;
const KINDNAME6 = 101;
const KIND7 = 102;
const KINDNAME7 = 105;

//Zone Columns
const zoneNUMBER = 1;
const zoneNOTES = 60;
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
  if (hasMacrons(split[INDEXNAME1])) {
    newLocality.altSpellings = [removeMacrons(split[INDEXNAME1]).toLowerCase()];
  }
  //TODO: Need to check for missing primary pronunciation
  //Alternative pronunciations
  if (split[INDEXNAME2]) {
    if (!newLocality.altNames) {
      newLocality.altNames = [];
    }
    newLocality.altNames.push({
      name: replaceSpecialCharacters(split[INDEXNAME2]),
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
      nameCommon: replaceSpecialCharacters(split[ZONENAME]),
      speakers: new Set(),
    });
  }

  if (split[ZONEORDERNUM] > 0) {
    // exclude intro line
    //grab zone record entry
    const zone = getZoneRecordByZoneNumber(zones, parseInt(split[ZONENUM]));
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
      zoneNumber: parseInt(split[ZONENUM]),
      name: replaceSpecialCharacters(split[INDEXNAME1]),
      uniqueId: split[0],
      types: [],
      noteSpeech: split[NOTESPEECH] ? split[NOTESPEECH] : undefined,
      noteName: split[NOTENAME] ? split[NOTENAME] : undefined,
      notePlace: split[NOTEPLACE] ? split[NOTEPLACE] : undefined,
      groups: undefined,
      supers: [],
    };
    parseLocalityRecordingInfo(split, newLocality, zone);

    // Add Types
    if (split[KIND1]) {
      newLocality.types.push({
        prefix: split[KINDPREFIX1],
        type: split[KIND1],
        name: split[KINDNAME1],
      });
    }
    if (split[KIND2]) {
      newLocality.types.push({
        prefix: split[KINDPREFIX2],
        type: split[KIND2],
        name: split[KINDNAME2],
      });
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
      newLocality.types.push({ type: split[KIND6], name: split[KINDNAME6] });
    }
    if (split[KIND7]) {
      newLocality.types.push({ type: split[KIND7], name: split[KINDNAME7] });
    }
    // Add "see also" info
    if (split[SEEID1]) {
      newLocality.seeAlso = [split[SEEID1]];
    }
    if (split[SEEID2]) {
      if (!newLocality.seeAlso) {
        newLocality.seeAlso = [];
      }
      newLocality.seeAlso.push(split[SEEID2]);
    }
    if (split[SEEID3]) {
      if (!newLocality.seeAlso) {
        newLocality.seeAlso = [];
      }
      newLocality.seeAlso.push(split[SEEID3]);
    }
    if (split[SEEID4]) {
      if (!newLocality.seeAlso) {
        newLocality.seeAlso = [];
      }
      newLocality.seeAlso.push(split[SEEID4]);
    }
    // Add group info
    if (split[GROUPID1]) {
      newLocality.groups = [{ name: split[GROUPNAME1], id: split[GROUPID1] }];
    }
    if (split[GROUPID2]) {
      if (!Array.isArray(newLocality.groups)) {
        newLocality.groups = [];
      }
      newLocality.groups.push({ name: split[GROUPNAME2], id: split[GROUPID2] });
    }
    // Add super info
    if (split[SUPER1]) {
      newLocality.supers.push(split[SUPER1]);
    }
    if (split[SUPER1_1]) {
      if (!newLocality.supers) {
        newLocality.supers = [];
      }
      newLocality.supers.push(split[SUPER1_1]);
    }
    if (split[SUPER2]) {
      newLocality.supers.push(split[SUPER2]);
    }
    if (split[SUPER3]) {
      newLocality.supers.push(split[SUPER3]);
    }
    if (split[SUPER4]) {
      newLocality.supers.push(split[SUPER4]);
    }
    if (newLocality.supers === []) {
      delete newLocality.supers; // remove array if nothing in it, to avoid confusion.
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
  if (!partRegex.test(partName) || partRegex.test(split[INDEXNAME1])) {
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

  const zone = getZoneRecordByName(zones, partName);
  if (parseInt(split[ZONEORDERNUM]) === 0) {
    zone.track = `zones/part${partNum}.mp3`;
    zone.speakers.add(split[SPEAKER1]);
  }

  const newLocality = {
    order: parseInt(split[ZONEORDERNUM]),
    uniqueId: split[0],
    name: split[INDEXNAME1],
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

zoneLines.forEach((zoneLine) => {
  const zoneSplit = zoneLine.split("\t");
  const zoneMatch = zones.find(
    (z) => z.number === parseInt(zoneSplit[zoneNUMBER])
  );
  zoneMatch.notes = zoneSplit[zoneNOTES];
});

fs.writeFileSync("data/zones.json", JSON.stringify(zones));
