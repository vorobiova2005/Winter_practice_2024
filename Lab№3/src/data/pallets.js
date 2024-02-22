import palletsJSON from "./pallets.json";

const dataJSON = JSON.stringify(palletsJSON);

export const PalletsData = JSON.parse(dataJSON)
