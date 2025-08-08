"use client"

import usePlacesAutocomplete from "use-places-autocomplete";
import Script from "next/script";
  
  export default function PlacesAutocomplete() {

    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      callbackName: "initAutocomplete",
      requestOptions: {
        /* Define search scope here */
        country: ['ca']
      },
      debounce: 300,
    });

    const handleInput = (e) => {
      // Update the keyword of the input element
      setValue(e.target.value);
    };
  
    const handleSelect =
      ({ description }) =>
      () => {
        // When the user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        clearSuggestions();
      };
  
    const renderSuggestions = () =>
      data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;
  
        return (
          <li key={place_id} onClick={handleSelect(suggestion)}>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
  
    return (
      <div>
        <Script async
            src={process.env.NEXT_PUBLIC_GOOGLE}>
        </Script>
        <input
          value={value}
          onChange={handleInput}
          // disabled={!ready}
          id="test-location"
          placeholder="Where are you going?"
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>
    );
  };