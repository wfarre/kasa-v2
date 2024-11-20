import { Accommodation, AccommodationApi } from "../models/Accommodation";

export class AccommodationFactory {
  constructor(data: AccommodationApi, type: string) {
    if (type === "APIV1") {
      return new Accommodation(data);
    }
  }
}
