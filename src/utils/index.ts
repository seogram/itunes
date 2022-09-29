import { Countries, Code } from "../types";
import { LOCATIONS } from "../config";
export {default as api} from './api';


export const locationMapper = (
  locationLabel: Countries | null
): Code | undefined => {
  const codes: Record<Countries, Code> = {
    "United States": "us",
    Germany: "de",
    Spain: "es",
  };
  if (locationLabel) {
    return codes[locationLabel];
  }
};

export const getLocationOptions = (): Countries[] => {
  return LOCATIONS.map((location) => location.label);
};
