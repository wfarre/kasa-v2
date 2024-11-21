import { Accommodation, AccommodationApi } from "../models/Accommodation";

export class AccommodationFactory extends Accommodation {
  constructor(data: AccommodationApi, type: string) {
    super(data);
    if (type === "APIV1") {
      return new Accommodation(data);
    }
  }
}
