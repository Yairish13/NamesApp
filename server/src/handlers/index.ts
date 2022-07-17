import axios from "axios";

type GenderRes = {
  name: string;
  gender: string;
};
type CountryRes = {
  name: string;
  country: [{ country_id: string }];
};

export const getNameInfo = async (name: string): Promise<void | object> => {
  const nameGender = axios.get<GenderRes>(
    `https://api.genderize.io?name=${name}`
  );
  const nameCountry = axios.get<CountryRes>(
    `https://api.nationalize.io?name=${name}`
  );
  const allPromise = Promise.all([nameGender, nameCountry]);
  try {
    let [genderRes, countryRes] = await allPromise;
    const actualGender = genderRes.data.gender;
    const actualCountry = countryRes.data.country[0].country_id;
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return {
      name,
      gender: actualGender,
      country: regionNames.of(actualCountry),
    };
  } catch (error) {
    console.log(error);
  }
};
