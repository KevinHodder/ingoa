const fs = require("fs");

const isItemPresent = (arr, num) => {
  return arr.filter((record) => record.number === parseInt(num)).length > 0;
};

const getRecord = (arr, num) =>
  arr.filter((record) => record.number === parseInt(num))[0];

const hasMacrons = (input) => {
  return /[^\u0000-\u007f]/.test(input);
};

const removeMacrons = (input) => {
  return input
    .replace(/\u0101/, "a")
    .replace(/\u0100/, "A")
    .replace(/\u0113/, "e")
    .replace(/\u0112/, "E")
    .replace(/\u012b/, "i")
    .replace(/\u012a/, "I")
    .replace(/\u014d/, "o")
    .replace(/\u014c/, "O")
    .replace(/\u016b/, "u")
    .replace(/\u016a/, "U");
};

const csvFile = fs.readFileSync("../placenames.tsv", "utf8");
const [header, ...lines] = csvFile.split("\r\n"); // Windows = \r\n, Linux/Mac = \n
// console.log(header);

const ZONENUM = 4;
const ZONENAME = 5;
const ZONEORDERNUM = 6;
const LOCALITYNAME = 7;
const ISFEATURED = 8;
const SPOKENNAME1 = 9;
const SPEAKER1 = 11;
const START1 = 13;
const END1 = 14;
const SPOKENNAME2 = 16;
const SPEAKER2 = 18;
const START2 = 20;
const END2 = 21;
const SPOKENNAME3 = 23;
const SPEAKER3 = 25;
const START3 = 27;
const END3 = 28;
const KIND1 = 68;
const KIND2 = 76;
const KIND3 = 82;
const KIND4 = 88;
const KIND5 = 94;
const KIND6 = 98;
const KIND7 = 102;

// const splitHeader = header.split(",");
// splitHeader.map((item, index) => console.log(`${index}: ${item}`));

const zones = [];

lines.forEach((line) => {
  // split the csv record
  const split = line.split("\t");
  if (!split[ZONENUM]) {
    return;
  }
  //Create new zone if required
  if (!isItemPresent(zones, split[ZONENUM])) {
    zones.push({
      number: parseInt(split[ZONENUM]),
      nameCommon: split[ZONENAME],

      speakers: [],
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
      zone.audioTrackFull = `zones/${split[ZONENUM].toString().padStart(
        3,
        "0"
      )}.mp3`;
      zone.speakers.push(split[SPEAKER1]);
    }
    const newLocality = {
      order: parseInt(split[ZONEORDERNUM]),
      name: split[LOCALITYNAME],
      types: [],
    };
    if (split[START1]) {
      newLocality.audioStart = parseFloat(split[START1]);
      newLocality.audioEnd = parseFloat(split[END1]);
      newLocality.speaker = split[SPEAKER1];
      if (!zone.speakers.includes(split[SPEAKER1])) {
        zone.speakers.push(split[SPEAKER1]);
      }
    }
    if (hasMacrons(split[LOCALITYNAME])) {
      newLocality.altSpellings = [
        removeMacrons(split[LOCALITYNAME]).toLowerCase(),
      ];
    }
    //TODO: Need to check for missing primary pronunciation
    //Alternative pronunciations
    if (split[START2]) {
      if (!newLocality.altNames) {
        newLocality.altNames = [];
      }
      newLocality.altNames.push({
        name: split[SPOKENNAME2],
        altSpellings: [removeMacrons(split[SPOKENNAME2]).toLowerCase()],
        audioStart: parseFloat(split[START2]),
        audioEnd: parseFloat(split[END2]),
        speaker: split[SPEAKER2],
      });
      // Add speaker to speaker list if not already present
      if (!zone.speakers.includes(split[SPEAKER2]) && split[SPEAKER2]) {
        zone.speakers.push(split[SPEAKER2]);
      }
    }
    if (split[START3]) {
      if (!newLocality.altNames) {
        newLocality.altNames = [];
      }
      newLocality.altNames.push({
        name: split[SPOKENNAME3],
        altSpellings: [removeMacrons(split[SPOKENNAME3]).toLowerCase()],
        audioStart: parseFloat(split[START3]),
        audioEnd: parseFloat(split[END3]),
        speaker: split[SPEAKER3],
      });
      if (!zone.speakers.includes(split[SPEAKER3]) && split[SPEAKER3]) {
        zone.speakers.push(split[SPEAKER3]);
      }
    }

    // Add Types
    if (split[KIND1]) {
      newLocality.types.push(split[KIND1]);
    }
    if (split[KIND2]) {
      newLocality.types.push(split[KIND2]);
    }
    if (split[KIND3]) {
      newLocality.types.push(split[KIND3]);
    }
    if (split[KIND4]) {
      newLocality.types.push(split[KIND4]);
    }
    if (split[KIND5]) {
      newLocality.types.push(split[KIND5]);
    }
    if (split[KIND6]) {
      newLocality.types.push(split[KIND6]);
    }
    if (split[KIND7]) {
      newLocality.types.push(split[KIND7]);
    }

    // Add new locality to zone;
    zone.localities.push(newLocality);
  }
});

fs.writeFileSync("data.json", JSON.stringify(zones));
