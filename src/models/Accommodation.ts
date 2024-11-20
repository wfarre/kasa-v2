export interface AccommodationApi {
  title: string;
  cover: string;
  id: string;
}

export class Accommodation {
  private _title: string;
  private _cover: string;
  private _id: string;

  constructor(data: AccommodationApi) {
    this._cover = data.cover;
    this._title = data.title;
    this._id = data.id;
  }

  get cover() {
    return this._cover;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }
}
