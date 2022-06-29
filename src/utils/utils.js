export const isArrPresent = (myArr) => {
  return myArr && Array.isArray(myArr) && myArr.length;
};

export const getIndexData = (fullData) => {
  const a = fullData.map((zone) => ({
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
  return a;
};

export const getResultDataBasedOnFuseResult = (fuseResult, allData) => {
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
