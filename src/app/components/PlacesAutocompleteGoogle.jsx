"use client"

import usePlacesAutocomplete from "use-places-autocomplete";
import Script from "next/script";
  
  export default function PlacesAutocompleteGoogle() {
  
    return (
      <div>
        <Script async
            src={process.env.NEXT_PUBLIC_GOOGLE}>
        </Script>
        <input
          // onChange={handleInput}
          id="test-location"
          placeholder="Where are you going?"
        />
      </div>
    );
  };