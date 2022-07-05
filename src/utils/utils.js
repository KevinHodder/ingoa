const zones = require("../data/zones.json");

export const isArrPresent = (myArr) => {
  return myArr && Array.isArray(myArr) && myArr.length;
};

/**
 * Create an object containing only the info needed for searching
 * @param fullData - the complete data object array
 * @returns {*} - an array of objects with a subset of the data used for search
 */
export const getIndexData = (fullData = zones) => {
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

export const getResultDataBasedOnFuseResult = (fuseResult, allData = zones) => {
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
export const getSeeAlsoRecordsByIds = (ids, allData = zones) => {
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
