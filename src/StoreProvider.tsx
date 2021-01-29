import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useState,
} from "react";

import { Property } from "./models/Property";
import { fetchNormal } from "./utils/fetch";

interface Store {
    properties: Property[];
    /** use API running on localhost instead of the production API */
    localApiMode: boolean;
    setLocalApiMode: (val: boolean) => void;
}

// we cast the (wrong) default value to Store to avoid redundant Initializing the dafault value
export const StoreContext = React.createContext<Store>({} as Store);
export const useStore = () => {
    return StoreContext.Consumer;
};

const StoreProvider: FunctionComponent = (props) => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [localApiMode, setLocalApiModeState] = useState(false);

    const store: Store = {
        properties,
        localApiMode,
        setLocalApiMode: (val) => {
            setLocalApiModeState(val);
            fetchProperties(val);
        },
    };

    const fetchProperties = useCallback(
        (localApiMode) => {
            fetchNormal<Property[]>("GET", `/properties`, localApiMode).then(
                (response) => {
                    setProperties(response.data);
                }
            );
        },
        [setProperties, localApiMode]
    );

    // fetch properties if not yet loaded
    useEffect(() => {
        if (!store.properties.length) {
            fetchProperties(localApiMode);
        }
    }, [localApiMode, store.properties, fetchProperties]);

    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
