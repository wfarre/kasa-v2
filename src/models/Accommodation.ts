export interface AccommodationApi {
  title: string;
  cover: string;
  id: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

export class Accommodation {
  private _title: string;
  private _cover: string;
  private _id: string;
  private _pictures: string[];
  private _description: string;
  private _host: {
    name: string;
    picture: string;
  };
  private _rating: string;
  private _location: string;
  private _equipments: string[];
  private _tags: string[];

  constructor(data: AccommodationApi) {
    this._cover = data.cover;
    this._title = data.title;
    this._id = data.id;
    this._pictures = data.pictures;
    this._description = data.description;
    this._host = data.host;
    this._rating = data.rating;
    this._location = data.location;
    this._equipments = data.equipments;
    this._tags = data.tags;
  }

  get title() {
    return this._title;
  }

  get cover() {
    return this._cover;
  }

  get id() {
    return this._id;
  }

  get pictures() {
    return this._pictures;
  }

  get description() {
    return this._description;
  }
  get host() {
    return this._host;
  }
  get rating() {
    return parseInt(this._rating);
  }
  get location() {
    return this._location;
  }
  get equipments() {
    return this._equipments;
  }
  get tags() {
    return this._tags;
  }

  get ratingStars() {
    const stars: string[] = ["empty", "empty", "empty", "empty", "empty"];

    for (let i = 0; i < parseInt(this._rating); i++) {
      stars[i] = "filled";
    }
    console.log(stars);

    return stars;
  }
}
