const allZones = require("../data/zones.json");

export const isArrPresent = (myArr) => {
  return myArr && Array.isArray(myArr) && myArr.length;
};

/**
 * Create an object containing only the info needed for searching
 * @param fullData - the complete data object array
 * @returns {*} - an array of objects with a subset of the data used for search
 */
export const getIndexData = (fullData = allZones) => {
  return fullData.map((zone) => ({
    number: zone.number,
    nameCommon: zone.nameCommon,
    localities: zone.localities.map((l) => ({
      uniqueId: l.uniqueId,
      name: l.name,
      altSpellings: l.altSpellings,
      speaker: l.speaker,
      altNames: l.altNames?.map((alt) => ({
        name: alt.name,
        altSpellings: alt.altSpellings,
      })),
      types: l.types?.map((t) => ({
        name: t.name,
      })),
    })),
  }));
};

// Result filtering

export const getResultDataBasedOnFuseResult = (
  fuseResult,
  allData = allZones
) => {
  const output = [];
  fuseResult.forEach((result, index) => {
    const matches = result.matches.map((match) => match.value);
    // return whole zone if the search matches zone name
    const zoneRecord = allData.find((z) => z.number === result.item.number);
    output[index] = { ...zoneRecord };
    if (matches.includes(zoneRecord.nameCommon)) {
      return (output[index].localities = zoneRecord.localities);
    }
    // otherwise return just matching search results
    const filteredLocalities = getMatchingLocalities(
      zoneRecord.localities,
      matches
    );
    return (output[index].localities = filteredLocalities);
  });
  return output;
};

export const hasMatchingAltName = (locality, matches) => {
  return (
    Array.isArray(locality.altNames) &&
    locality.altNames.reduce(
      (prev, curr) =>
        prev ||
        matches.includes(curr.name) ||
        hasMatchingAltSpelling(curr, matches),
      false
    )
  );
};
export const hasMatchingAltSpelling = (locality, matches) =>
  Array.isArray(locality.altSpellings) &&
  locality.altSpellings.reduce(
    (prev, curr) => prev || matches.includes(curr),
    false
  );
export const hasMatchingName = (locality, matches) =>
  matches.includes(locality.name);
export const hasMatchingSpeaker = (locality, matches) =>
  matches.includes(locality.speaker);
export const hasMatchingTypeName = (locality, matches) =>
  Array.isArray(locality.types) &&
  locality.types.reduce(
    (prev, curr) => prev || matches.includes(curr.name),
    false
  );

export const getMatchingLocalities = (localities, matches) => {
  return localities.filter(
    (locality) =>
      hasMatchingName(locality, matches) ||
      hasMatchingAltSpelling(locality, matches) ||
      hasMatchingAltName(locality, matches) ||
      hasMatchingSpeaker(locality, matches) ||
      hasMatchingTypeName(locality, matches)
  );
};

// Modal matching methods
const idRegex = /pn_(zo|pa)_(\d+)-(\d+)/;
export const getSeeAlsoRecordsByIds = (ids, allData = allZones) => {
  if (!isArrPresent(ids)) {
    return [];
  }
  const output = [];
  ids.forEach((id) => {
    if (!idRegex.test(id)) {
      console.log("Invalid ID: " + id);
      return;
      // throw new Error("Invalid ID: " + id);
    }
    const [, , zone, localityNum] = id.match(idRegex);
    const matchingZone = allData.find((z) => z.number === parseInt(zone));
    const matchingLocality = matchingZone?.localities.find(
      (l) => l.order === parseInt(localityNum)
    );
    if (!matchingLocality) {
      console.log("unable to find a match for ", id);
    } else {
      output.push({
        zone,
        zoneName: matchingZone.nameCommon,
        ...matchingLocality,
      });
    }
  });
  return output;
};

export const getGroupRecordsById = (id, allData = allZones) => {
  return allData.reduce(
    (prev, curr) => [...prev, ...getZoneRecordsInGroupById(id, curr)],
    []
  );
};
const getZoneRecordsInGroupById = (id, zoneData = { localities: [] }) => {
  const outputLocalities = [];
  zoneData.localities.forEach((l) => {
    const matchingGroups = l.groups?.filter((g) => g.id === id).length;
    if (matchingGroups) {
      const newRec = {
        ...l,
        zoneName: zoneData.nameCommon,
        zone: zoneData.number.toString(),
      };
      outputLocalities.push(newRec);
    }
  });
  return outputLocalities;
};

const getZoneRecordsByZoneId = (id, zoneData = allZones) => {
  return zoneData.filter((z) => z.number === parseInt(id))[0];
};

export const getZoneSuperscriptRecordsById = (id, zoneNum, thisRecord) => {
  const zone = getZoneRecordsByZoneId(zoneNum);
  const superRecords = new Set();
  zone.localities.forEach((l) => {
    if (l?.supers?.includes(id) && l.order !== thisRecord) {
      superRecords.add(l);
    }
  });
  return Array.from(superRecords);
};

export const getAllSuperRecs = (ids = [], zoneNum, thisRecord) => {
  const allRecs = ids.map((id) =>
    getZoneSuperscriptRecordsById(id, zoneNum, thisRecord)
  );
  /// will probably change. is a bit dumb at the moment, I just don't want to pollute getZoneSuperscriptRecordsById
  const allRecsFlat = new Set();
  allRecs.forEach((recs) => recs.forEach((rec) => allRecsFlat.add(rec)));
  return Array.from(allRecsFlat);
};

const displayTypeName = (type, localityName) => {
  const isName = type.name.toLowerCase() === localityName.toLowerCase();
  const isEssentiallyName =
    `${localityName} ${type.type}`.toLowerCase() === type.name.toLowerCase();

  return !isName && !isEssentiallyName;
};

export const getTypesString = (typesArr = [], localityName) =>
  typesArr
    .map(
      (rec) =>
        rec.type + (displayTypeName(rec, localityName) ? ` (${rec.name})` : "")
    )
    .join(", ");

export const getZoneNameByZoneNumber = (id, zones = allZones) => {
  const match = zones.filter((zone) => zone.number === parseInt(id));
  return match[0].nameCommon;
};
