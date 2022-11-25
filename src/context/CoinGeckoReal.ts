import { CoinGeckoSingleMarketData } from "types/coingecko.res";
import aave from "assets/coin_logos/aave.png";
import algo from "assets/coin_logos/algo.png";
import atom from "assets/coin_logos/atom.png";
import ankr from "assets/coin_logos/ankr.png";
import bch from "assets/coin_logos/bch.png";
import btc from "assets/coin_logos/btc.png";
import celo from "assets/coin_logos/celo.png";
import doge from "assets/coin_logos/doge.png";
import enj from "assets/coin_logos/enj.png";
import eos from "assets/coin_logos/eos.png";
import eth from "assets/coin_logos/eth.png";
import etc from "assets/coin_logos/etc.png";
import knc from "assets/coin_logos/knc.png";
import link from "assets/coin_logos/link.png";
import matic from "assets/coin_logos/matic.png";
import nu from "assets/coin_logos/nu.png";
import sol from "assets/coin_logos/sol.png";
import stx from "assets/coin_logos/stx.png";
import xrp from "assets/coin_logos/xrp.png";
import xtz from "assets/coin_logos/xtz.png";

export const CoinGeckoSimplifiedJson: Array<
  CoinGeckoSingleMarketData & {
    foreColor: string;
    backColor: string;
    logoImg: string;
  }
> = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 28907337,
    market_cap: 555611423803528,
    market_cap_rank: 1,
    fully_diluted_valuation: 607793189740870,
    total_volume: 77303330081213,
    high_24h: 29201575,
    low_24h: 28568019,
    price_change_24h: 23292,
    price_change_percentage_24h: 0.08064,
    market_cap_change_24h: 1697607494582,
    market_cap_change_percentage_24h: 0.30648,
    circulating_supply: 19197056.0,
    total_supply: 21000000.0,
    max_supply: 21000000.0,
    ath: 81339064,
    ath_change_percentage: -64.41743,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 75594,
    atl_change_percentage: 38186.9144,
    atl_date: "2013-07-05T00:00:00.000Z",
    roi: null,
    foreColor: "#FFFEFD",
    backColor: "#F69318",
    last_updated: "2022-11-03T10:51:35.321Z",
    logoImg: btc,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    current_price: 2200810,
    market_cap: 266240141279948,
    market_cap_rank: 2,
    fully_diluted_valuation: 266240141279948,
    total_volume: 41074554834124,
    high_24h: 2271633,
    low_24h: 2146552,
    price_change_24h: 9611.14,
    price_change_percentage_24h: 0.43862,
    market_cap_change_24h: 2530495722919,
    market_cap_change_percentage_24h: 0.95958,
    circulating_supply: 120523074.005199,
    total_supply: 120523074.005199,
    max_supply: null,
    ath: 5790811,
    ath_change_percentage: -61.85269,
    ath_date: "2021-11-08T23:48:45.609Z",
    atl: 489.4,
    atl_change_percentage: 451272.90513,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 100.78986189094995,
      currency: "btc",
      percentage: 10078.986189094996,
    },
    foreColor: "#343535",
    backColor: "#131212",
    last_updated: "2022-11-03T10:51:37.758Z",
    logoImg: eth,
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image:
      "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
    current_price: 189.69,
    market_cap: 26102763723625,
    market_cap_rank: 8,
    fully_diluted_valuation: null,
    total_volume: 6302368304394,
    high_24h: 193.57,
    low_24h: 177.23,
    price_change_24h: 3.62,
    price_change_percentage_24h: 1.94794,
    market_cap_change_24h: 571264921042,
    market_cap_change_percentage_24h: 2.23749,
    circulating_supply: 136746136383.705,
    total_supply: null,
    max_supply: null,
    ath: 814.22,
    ath_change_percentage: -76.55624,
    ath_date: "2021-05-08T05:08:23.458Z",
    atl: 0.09391,
    atl_change_percentage: 203162.78113,
    atl_date: "2015-05-06T00:00:00.000Z",
    roi: null,
    foreColor: "#ba9f33",
    backColor: "#BB9E33",
    last_updated: "2022-11-03T10:52:32.000Z",
    logoImg: doge,
  },
  {
    id: "bitcoin-cash",
    symbol: "bch",
    name: "Bitcoin Cash",
    image:
      "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492",
    current_price: 167472,
    market_cap: 3242799422552,
    market_cap_rank: 34,
    fully_diluted_valuation: 3543366563296,
    total_volume: 2862869138531,
    high_24h: 169619,
    low_24h: 159828,
    price_change_24h: 3854.49,
    price_change_percentage_24h: 2.35579,
    market_cap_change_24h: 108766640853,
    market_cap_change_percentage_24h: 3.4705,
    circulating_supply: 19218668.6466509,
    total_supply: 21000000.0,
    max_supply: 21000000.0,
    ath: 4092358,
    ath_change_percentage: -95.87691,
    ath_date: "2017-12-20T00:00:00.000Z",
    atl: 87108,
    atl_change_percentage: 93.70455,
    atl_date: "2018-12-16T00:00:00.000Z",
    roi: null,
    foreColor: "#8dc351",
    backColor: "#8CC350",
    last_updated: "2022-11-03T10:52:26.500Z",
    logoImg: bch,
  },
  {
    id: "ankr",
    symbol: "ankr",
    name: "Ankr",
    image:
      "https://assets.coingecko.com/coins/images/4324/large/U85xTl2.png?1608111978",
    current_price: 42.25,
    market_cap: 347044416051,
    market_cap_rank: 154,
    fully_diluted_valuation: 425148467462,
    total_volume: 78824766137,
    high_24h: 44.39,
    low_24h: 40.01,
    price_change_24h: 1.79,
    price_change_percentage_24h: 4.42874,
    market_cap_change_24h: 16722373390,
    market_cap_change_percentage_24h: 5.06245,
    circulating_supply: 8162899377.791667,
    total_supply: 10000000000.0,
    max_supply: 10000000000.0,
    ath: 252.43,
    ath_change_percentage: -83.15772,
    ath_date: "2021-11-27T03:14:20.459Z",
    atl: 0.865593,
    atl_change_percentage: 4811.64221,
    atl_date: "2020-03-13T02:24:03.563Z",
    roi: {
      times: 3.484769200792736,
      currency: "usd",
      percentage: 348.4769200792736,
    },
    foreColor: "4e90ee",
    backColor: "",
    last_updated: "2022-11-03T11:27:09.515Z",
    logoImg: ankr,
  },
  {
    id: "aave",
    symbol: "aave",
    name: "Aave",
    image:
      "https://assets.coingecko.com/coins/images/12645/large/AAVE.png?1601374110",
    current_price: 121162,
    market_cap: 1731658567487,
    market_cap_rank: 48,
    fully_diluted_valuation: 1957199258024,
    total_volume: 229563693383,
    high_24h: 122961,
    low_24h: 113682,
    price_change_24h: 4581.4,
    price_change_percentage_24h: 3.92981,
    market_cap_change_24h: 80491969372,
    market_cap_change_percentage_24h: 4.87485,
    circulating_supply: 14156216.83188545,
    total_supply: 16000000.0,
    max_supply: 16000000.0,
    ath: 745787,
    ath_change_percentage: -83.67413,
    ath_date: "2021-05-18T21:19:59.514Z",
    atl: 29304,
    atl_change_percentage: 315.49704,
    atl_date: "2020-11-05T09:20:11.928Z",
    roi: null,
    foreColor: "#b6509e",
    backColor: "#A95CA5",
    last_updated: "2022-11-03T10:51:54.663Z",
    logoImg: aave,
  },
  {
    id: "chainlink",
    symbol: "link",
    name: "Chainlink",
    image:
      "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700",
    current_price: 11236.04,
    market_cap: 5551845852969,
    market_cap_rank: 24,
    fully_diluted_valuation: 11293421842705,
    total_volume: 1155831961714,
    high_24h: 11293.42,
    low_24h: 10501.07,
    price_change_24h: 276.54,
    price_change_percentage_24h: 2.52327,
    market_cap_change_24h: 156991133615,
    market_cap_change_percentage_24h: 2.91002,
    circulating_supply: 491599971.2305644,
    total_supply: 1000000000.0,
    max_supply: 1000000000.0,
    ath: 58650,
    ath_change_percentage: -80.76855,
    ath_date: "2021-05-10T00:13:57.214Z",
    atl: 160.31,
    atl_change_percentage: 6935.96891,
    atl_date: "2017-11-29T00:00:00.000Z",
    roi: null,
    foreColor: "#FFFEFE",
    backColor: "#355ED5",
    last_updated: "2022-11-03T10:51:10.736Z",
    logoImg: link,
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
    current_price: 653.7,
    market_cap: 32701009089459,
    market_cap_rank: 6,
    fully_diluted_valuation: 65290492669146,
    total_volume: 2191135626708,
    high_24h: 654.63,
    low_24h: 638.7,
    price_change_24h: 12.82,
    price_change_percentage_24h: 1.99988,
    market_cap_change_24h: 544588542182,
    market_cap_change_percentage_24h: 1.69356,
    circulating_supply: 50085407159.0,
    total_supply: 99989240406.0,
    max_supply: 100000000000.0,
    ath: 3607.01,
    ath_change_percentage: -81.89901,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 2.75,
    atl_change_percentage: 23604.94996,
    atl_date: "2014-05-22T00:00:00.000Z",
    roi: null,
    foreColor: "#23292f",
    backColor: "#22292F",
    last_updated: "2022-11-03T10:52:36.109Z",
    logoImg: xrp,
  },
  {
    id: "celo",
    symbol: "celo",
    name: "Celo",
    image:
      "https://assets.coingecko.com/coins/images/11090/large/icon-celo-CELO-color-500.png?1592293590",
    current_price: 1028.77,
    market_cap: 488001123336,
    market_cap_rank: 122,
    fully_diluted_valuation: 1030894975319,
    total_volume: 31174190970,
    high_24h: 1047.29,
    low_24h: 986.24,
    price_change_24h: 32.05,
    price_change_percentage_24h: 3.21586,
    market_cap_change_24h: 15170178263,
    market_cap_change_percentage_24h: 3.20837,
    circulating_supply: 473376178.0,
    total_supply: 1000000000.0,
    max_supply: 1000000000.0,
    ath: 11429.16,
    ath_change_percentage: -90.99187,
    ath_date: "2021-08-30T14:25:09.929Z",
    atl: 957.81,
    atl_change_percentage: 7.49006,
    atl_date: "2022-10-21T12:25:24.581Z",
    roi: null,
    foreColor: "#fbcc5c",
    backColor: "",
    last_updated: "2022-11-03T11:27:08.112Z",
    logoImg: celo,
  },
  {
    id: "algorand",
    symbol: "algo",
    name: "Algorand",
    image:
      "https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725",
    current_price: 533.21,
    market_cap: 3774761318088,
    market_cap_rank: 30,
    fully_diluted_valuation: 5335584435555,
    total_volume: 350908225002,
    high_24h: 536.8,
    low_24h: 489.57,
    price_change_24h: 42.8,
    price_change_percentage_24h: 8.72665,
    market_cap_change_24h: 319321203879,
    market_cap_change_percentage_24h: 9.24112,
    circulating_supply: 7074691373.88799,
    total_supply: 7303207625.58244,
    max_supply: 10000000000.0,
    ath: 4127.02,
    ath_change_percentage: -87.05961,
    ath_date: "2019-06-20T14:51:19.480Z",
    atl: 128.97,
    atl_change_percentage: 314.08168,
    atl_date: "2020-03-13T02:20:48.438Z",
    roi: {
      times: -0.8443365160790768,
      currency: "usd",
      percentage: -84.43365160790768,
    },
    foreColor: "#000000",
    backColor: "#262627",
    last_updated: "2022-11-03T10:51:26.972Z",
    logoImg: algo,
  },
  {
    id: "tezos",
    symbol: "xtz",
    name: "Tezos",
    image:
      "https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png?1547034862",
    current_price: 1989.79,
    market_cap: 1807177788887,
    market_cap_rank: 46,
    fully_diluted_valuation: null,
    total_volume: 78769556534,
    high_24h: 2025.37,
    low_24h: 1940.58,
    price_change_24h: 14.59,
    price_change_percentage_24h: 0.73866,
    market_cap_change_24h: 20276075019,
    market_cap_change_percentage_24h: 1.13471,
    circulating_supply: 906868776.920781,
    total_supply: null,
    max_supply: null,
    ath: 10770.46,
    ath_change_percentage: -81.49785,
    ath_date: "2021-10-04T00:41:18.025Z",
    atl: 392.74,
    atl_change_percentage: 407.39658,
    atl_date: "2018-12-07T00:00:00.000Z",
    roi: {
      times: 1.966259356761666,
      currency: "usd",
      percentage: 196.6259356761666,
    },
    foreColor: "#2c7df7",
    backColor: "#0163FE",
    last_updated: "2022-11-03T10:51:48.567Z",
    logoImg: xtz,
  },
  {
    id: "cosmos",
    symbol: "atom",
    name: "Cosmos Hub",
    image:
      "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960",
    current_price: 19494.05,
    market_cap: 5718163020325,
    market_cap_rank: 23,
    fully_diluted_valuation: null,
    total_volume: 651645993587,
    high_24h: 19683.57,
    low_24h: 18570.7,
    price_change_24h: 206.05,
    price_change_percentage_24h: 1.06828,
    market_cap_change_24h: 80579810019,
    market_cap_change_percentage_24h: 1.42933,
    circulating_supply: 292586163.827428,
    total_supply: null,
    max_supply: null,
    ath: 53376,
    ath_change_percentage: -63.38521,
    ath_date: "2022-01-07T10:44:20.650Z",
    atl: 1419.24,
    atl_change_percentage: 1277.03978,
    atl_date: "2020-03-13T02:27:44.591Z",
    roi: {
      times: 135.5848472225549,
      currency: "usd",
      percentage: 13558.48472225549,
    },
    foreColor: "#2e3148",
    backColor: "#2F3348",
    last_updated: "2022-11-03T10:51:53.546Z",
    logoImg: atom,
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
    current_price: 45248,
    market_cap: 16353746185559,
    market_cap_rank: 10,
    fully_diluted_valuation: null,
    total_volume: 2690370731857,
    high_24h: 46162,
    low_24h: 43051,
    price_change_24h: 837.02,
    price_change_percentage_24h: 1.88472,
    market_cap_change_24h: 416472494853,
    market_cap_change_percentage_24h: 2.6132,
    circulating_supply: 359465894.875009,
    total_supply: 532735245.599145,
    max_supply: null,
    ath: 307142,
    ath_change_percentage: -85.20467,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 613.02,
    atl_change_percentage: 7312.96544,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    foreColor: "#dc1fff",
    backColor: "#010001",
    last_updated: "2022-11-03T10:51:56.909Z",
    logoImg: sol,
  },
  {
    id: "nucypher",
    symbol: "nu",
    name: "NuCypher",
    image:
      "https://assets.coingecko.com/coins/images/3318/large/photo1198982838879365035.jpg?1547037916",
    current_price: 206.74,
    market_cap: 259675346395,
    market_cap_rank: 183,
    fully_diluted_valuation: 803155424161,
    total_volume: 3769645080,
    high_24h: 207.65,
    low_24h: 201.37,
    price_change_24h: 4.44,
    price_change_percentage_24h: 2.19354,
    market_cap_change_24h: 6293959363,
    market_cap_change_percentage_24h: 2.48399,
    circulating_supply: 1256220134.9896116,
    total_supply: 3885390081.74825,
    max_supply: 3885390081.74825,
    ath: 3084.65,
    ath_change_percentage: -93.30132,
    ath_date: "2021-10-15T08:50:14.799Z",
    atl: 68.69,
    atl_change_percentage: 200.8254,
    atl_date: "2020-11-27T03:03:31.701Z",
    roi: null,
    foreColor: "#1e65f3",
    backColor: "",
    last_updated: "2022-11-03T11:26:52.990Z",
    logoImg: nu,
  },
  {
    id: "kyber-network-crystal",
    symbol: "knc",
    name: "Kyber Network Crystal",
    image:
      "https://assets.coingecko.com/coins/images/14899/large/RwdVsGcw_400x400.jpg?1618923851",
    current_price: 1251.88,
    market_cap: 206826790089,
    market_cap_rank: 206,
    fully_diluted_valuation: 283441280695,
    total_volume: 36711409546,
    high_24h: 1274.15,
    low_24h: 1212.31,
    price_change_24h: 15.59,
    price_change_percentage_24h: 1.26066,
    market_cap_change_24h: 2983129995,
    market_cap_change_percentage_24h: 1.46344,
    circulating_supply: 164911950.8824934,
    total_supply: 223383856.860042,
    max_supply: 226000000.0,
    ath: 7226.42,
    ath_change_percentage: -82.65876,
    ath_date: "2022-04-29T00:29:36.976Z",
    atl: 1171.14,
    atl_change_percentage: 7.00252,
    atl_date: "2022-10-21T12:27:03.223Z",
    roi: null,
    foreColor: "#31cb9e",
    backColor: "",
    last_updated: "2022-11-03T11:27:43.083Z",
    logoImg: knc,
  },
  {
    id: "ethereum-classic",
    symbol: "etc",
    name: "Ethereum Classic",
    image:
      "https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1547034169",
    current_price: 34357,
    market_cap: 4749472637369,
    market_cap_rank: 26,
    fully_diluted_valuation: 7266789906326,
    total_volume: 940117745829,
    high_24h: 34993,
    low_24h: 32184,
    price_change_24h: 801.3,
    price_change_percentage_24h: 2.38798,
    market_cap_change_24h: 129098335552,
    market_cap_change_percentage_24h: 2.79411,
    circulating_supply: 137710584.39746,
    total_supply: 210700000.0,
    max_supply: 210700000.0,
    ath: 187286,
    ath_change_percentage: -81.585,
    ath_date: "2021-05-06T18:34:22.133Z",
    atl: 699.83,
    atl_change_percentage: 4828.16425,
    atl_date: "2016-07-25T00:00:00.000Z",
    roi: {
      times: 52.49395068406876,
      currency: "usd",
      percentage: 5249.395068406876,
    },
    foreColor: "#17de8d",
    backColor: "#338333",
    last_updated: "2022-11-03T10:51:56.063Z",
    logoImg: etc,
  },
];
