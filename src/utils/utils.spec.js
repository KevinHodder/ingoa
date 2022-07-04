import { getIndexData, getSeeAlsoRecordsByIds } from "./utils";

const testData = [
  {
    number: 1,
    nameCommon: "Wellington",
    speakers: ["Kara Puketapu"],
    localities: [
      {
        order: 8,
        name: "Hape",
        types: [{ type: "stream", name: "Hape Stream" }],
        audioStart: 23.54,
        audioEnd: 24.65,
        speaker: "Kara Puketapu",
      },
      {
        order: 7,
        name: "Hātaitai",
        types: [{ type: "suburb", name: "Hātaitai" }],
        audioStart: 20.47,
        audioEnd: 21.85,
        speaker: "Kara Puketapu",
        altSpellings: ["hataitai"],
      },
      {
        order: 10,
        name: "Kārōri",
        types: [
          { type: "suburb", name: "Kārōri" },
          { type: "stream", name: "Kārōri Stream" },
        ],
        audioStart: 28.34,
        audioEnd: 29.36,
        speaker: "Kara Puketapu",
        altSpellings: ["karori"],
        altNames: [
          {
            name: "Kaharore",
            altSpellings: ["kaharore"],
            audioStart: 0,
            audioEnd: 0,
            speaker: "",
          },
        ],
      },
    ],
    track: "zones/001.mp3",
  },
];

const expectedOutput = [
  {
    number: 1,
    localities: [
      {
        name: "Hape",
        speaker: "Kara Puketapu",
        types: [
          {
            name: "Hape Stream",
          },
        ],
      },
      {
        altSpellings: ["hataitai"],
        name: "Hātaitai",
        speaker: "Kara Puketapu",
        types: [
          {
            name: "Hātaitai",
          },
        ],
      },
      {
        altNames: [
          {
            altSpellings: ["kaharore"],
            name: "Kaharore",
          },
        ],
        altSpellings: ["karori"],
        name: "Kārōri",
        speaker: "Kara Puketapu",
        types: [
          {
            name: "Kārōri",
          },
          {
            name: "Kārōri Stream",
          },
        ],
      },
    ],
    nameCommon: "Wellington",
  },
];

describe("getIndexData", () => {
  describe("with full data object", () => {
    it("should return the subset of data required for searching", () => {
      expect(getIndexData(testData)).toEqual(expectedOutput);
    });
  });
  describe("with multiple records", () => {
    it("should return one record each", () => {
      const input = [...testData, ...testData];
      const output = [...expectedOutput, ...expectedOutput];
      expect(getIndexData(input)).toEqual(output);
    });
  });
  describe("with empty data input", () => {
    it("should return an empty array", () => {
      expect(getIndexData([])).toEqual([]);
    });
  });
});

describe("getSeeAlsoRecordsByIds", () => {
  describe("with no ids", () => {
    it("should return an empty array", () => {
      expect(getSeeAlsoRecordsByIds()).toEqual([]);
    });
  });

  describe("with one ID", () => {
    const data = [
      {
        number: 1,
        nameCommon: "test",
        localities: [
          { order: 1, name: "unexpected" },
          { order: 3, name: "expected" },
        ],
      },
    ];
    describe("and a match in the data", () => {
      it("should return the matching record", () => {
        const inputID = "pn_zo_1-3";
        expect(getSeeAlsoRecordsByIds([inputID], data)).toEqual([
          { order: 3, name: "expected" },
        ]);
      });
    });
    describe("and no match in the data (locality number)", () => {
      it("should return an empty array", () => {
        const inputID = "pn_zo_1-500";
        expect(getSeeAlsoRecordsByIds(inputID, data)).toEqual([]);
      });
    });
    describe("and no match in the data (zone number)", () => {
      it("should return an empty array", () => {
        const inputID = "pn_zo_100-3";
        expect(getSeeAlsoRecordsByIds(inputID, data)).toEqual([]);
      });
    });
  });
  describe("with more than one ID", () => {
    const data = [
      {
        number: 1,
        nameCommon: "test",
        localities: [
          { order: 1, name: "unexpected" },
          { order: 3, name: "expected" },
          { order: 4, name: "expected2" },
        ],
      },
    ];
    describe("and matches for all in the data", () => {
      it("should return the matching records", () => {
        const inputIDs = ["pn_zo_1-3", "pn_zo_1-4"];
        expect(getSeeAlsoRecordsByIds(inputIDs, data)).toEqual([
          { order: 3, name: "expected" },
          { order: 4, name: "expected2" },
        ]);
      });
    });
    describe("and matches for all bar one of the IDs in the data", () => {
      it("should return the matching record and log out to console", () => {
        jest.spyOn(console, "log");
        const inputIDs = ["pn_zo_1-3", "pn_zo_1-66"];
        expect(getSeeAlsoRecordsByIds(inputIDs, data)).toEqual([
          { order: 3, name: "expected" },
        ]);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(
          "unable to find a match for ",
          "pn_zo_1-66"
        );
      });
    });
  });
});
