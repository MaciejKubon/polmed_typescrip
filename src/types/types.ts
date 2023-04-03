export interface dataDoctor {
    id: string;
    type: string;
    name: string;
    img: string;
    rating: number;
    number_of_ratings: number;
  }
export interface price{
  "-"?: string;
  "wizyta kontrolna"?: number;
  konsultacja?: number;
  choroba?: number;
  "wypisanie recepty"?: number;
  szczepienie?: number;
}

export interface doctorData{
  type: string;
  name: String;
  img: string;
  rating: number;
  number_of_ratings: number;
  addres: String;
  phone_number: string;
  type_of_visit: String[];
  price_of_visit: price;
  doctor_description: String;
}


  // export interface dataDoctor {
  //   id: string;
  //   type: string;
  //   name: string;
  //   img: string;
  //   rating: number;
  //   number_of_ratings: number;
  //   addres: string;
  //   phone_number: string;
  //   type_of_visit: string[];
  //   price_of_visit: {
  //     "wizyta kontrolna"?: number;
  //     konsultacja?: number;
  //     choroba?: number;
  //     "wypisanie recepty"?: number;
  //     szczepienie?: number;
  //   };
  //   doctor_description: String;
  // }