import { Farm as TFarm } from "../api/farm/Farm";

export const FARM_TITLE_FIELD = "name";

export const FarmTitle = (record: TFarm): string => {
  return record.name?.toString() || String(record.id);
};
