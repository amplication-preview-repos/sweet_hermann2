import { Greenhouse as TGreenhouse } from "../api/greenhouse/Greenhouse";

export const GREENHOUSE_TITLE_FIELD = "name";

export const GreenhouseTitle = (record: TGreenhouse): string => {
  return record.name?.toString() || String(record.id);
};
