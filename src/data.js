const localityTypes = {
  LOCALITY: "locality",
  TOWN: "town",
  STREAM: "stream",
  RIVER: "river",
  VALLEY: "valley",
  MOUNTAIN: "mountain",
};
const lt = localityTypes;
export const zones = [
  {
    number: 33,
    nameCommon: "Masterton/Carterton",
    speaker: "Tom Gemmell",
    selectedNames: [
      {
        name: "Tīnui",
        audioTrack: "names/tinui.mp3",
      },
    ],
    localities: [
      {
        order: 1,
        name: "Tīnui",
        alternativeSpellings: ["tinui"],
        types: [lt.LOCALITY],
      },
    ],
  },
  {
    number: 34,
    nameCommon: "Eketahuna/ Castlepoint",
    speaker: "Tom Gemmell",
    audioTrackFull: "zones/034.mp3",
    selectedNames: [
      {
        name: "Eketāhuna",
        audioTrack: "names/eketahuna.mp3",
      },
    ],
    localities: [
      {
        order: 1,
        name: "Ātea",
        alternativeSpellings: ["atea"],
        types: [lt.LOCALITY],
        audioStart: 6.73,
        audioEnd: 7.5,
      },
      {
        order: 2,
        name: "Awatoitoi",
        types: [lt.LOCALITY],
        audioStart: 8.66,
        audioEnd: 9.66,
      },
      {
        order: 3,
        name: "Eketāhuna",
        alternativeSpellings: ["Eketahuna"],
        types: [lt.TOWN],
        audioStart: 10.84,
        audioEnd: 11.9,
      },
      {
        order: 4,
        name: "Ihurāua",
        alternativeSpellings: ["Ihuraua"],
        types: [lt.LOCALITY],
        audioStart: 13.08,
        audioEnd: 13.85,
      },
      {
        order: 5,
        name: "Kākāriki",
        alternativeSpellings: ["Kakariki"],
        types: [lt.LOCALITY],
        audioStart: 15.16,
        audioEnd: 16.05,
      },
      //             Kaiparoro	locality
      //             Kōpuaranga	stream
      //             Mākākahi	stream
      //             Manawa	locality
      //             Mangamāhoe	locality
      //             Mangaōranga	locality
      //             Mangapākeha	locality
      //             Nireaha	locality
      //             Ōrui	locality
      //             Pūtara	locality
      //             Rāhui	locality
      //             Rātānui	locality
      //             Rongokōkako	locality
      //             Rūru	locality
      //             Tanawa	stream
      //             Taniwha	locality
      //             Tauweru	river   locality
      //             Tawataia	locality
      //             Te Hoe	stream   locality
      //             Te Mai	locality

      {
        order: -1,
        name: "Tīnui (Te Nui)",
        alternativeSpellings: ["tinui", "te nui"],
        types: [lt.STREAM, lt.VALLEY, lt.LOCALITY],
        audioStart: 61.65,
        audioEnd: 62.21,
      },
      //             Tīnui (Te Nui)	stream   valley   locality
      // Waikawa	locality
      // Whakataki	stream   locality
      // Whareama	river   locality
    ],
  },
  {
    number: 67,
    nameCommon: "Horohoro",
    speaker: "Hepora (Sybil) Young",
    audioTrackFull: "zones/067.mp3",
    selectedNames: [],
    localities: [],
  },
];
