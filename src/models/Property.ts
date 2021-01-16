export interface Property {
    _id: string;
    title: string;
    scout_id: string;
    street: string;
    city_region: string;
    price_net: string;
    price_total: string;
    price_additional: string;
    price_heating: string;
    price_deposit: string;
    vacant_from: string;
    sqm: string;
    sqm_nutzflaeche: string;
    sqm_wohnflaeche: string;
    /** urls */
    images: string[];
    construction_year: string;
    object_condition: string;
    heating_type: string;
    energy_consumption_value: string;
    has_balcony_terrace: string;
    description_object: string;
    description_furnishing: string;
    description_location: string;
    description_other: string;

    // Premium Info
    premium_info: string;
    quickcheck_intro: string;
    quickcheck_this_object: string;
    quickcheck_min: string;
    quickcheck_average_min: string;
    quickcheck_average_max: string;
    quickcheck_max: string;
}
