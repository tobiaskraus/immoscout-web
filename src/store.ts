import { useEffect, useState } from "react";
import { Property } from "./models/Property";
import { fetchNormal } from "./utils/fetch";

interface Store {
    properties: Property[];
}

const store: Store = {
    properties: [],
};

/**
 * own pattern of a store as a Hook, which exposes global data via states to component
 * */
export const useStore = () => {
    const [properties, setProperties] = useState<Property[]>(store.properties);

    // load properties if not yet loaded
    useEffect(() => {
        if (!store.properties.length) {
            fetchNormal<Property[]>("GET", `/properties`).then((response) => {
                store.properties = response.data;
                setProperties(response.data);
            });
        }
    }, [store.properties]);

    return { properties };
};
