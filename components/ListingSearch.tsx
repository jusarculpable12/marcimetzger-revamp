"use client";

import { FormEvent, useState } from "react";

const zillowProfile = "https://www.zillow.com/profile/marcimetzger";

export default function ListingSearch() {
  const [location, setLocation] = useState("Pahrump, NV");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = encodeURIComponent(`${location} homes for sale Marci Metzger Zillow`);
    window.open(`https://www.google.com/search?q=${query}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="listings" className="listing-section" aria-labelledby="listing-title">
      <div className="listing-intro" data-reveal>
        <h2 id="listing-title">Find your dream home</h2>
        <p>Search Pahrump and Las Vegas, then see Marci’s current listings and agent profile on Zillow.</p>
        <a className="text-link" href={zillowProfile} target="_blank" rel="noreferrer">View Marci’s current listings</a>
      </div>
      <form className="listing-sheet" onSubmit={submit} data-reveal>
        <h3>Search listings</h3>
        <div className="search-fields">
          <label>Location<input value={location} onChange={(event) => setLocation(event.target.value)} name="location" /></label>
          <label>Property type<select name="type" defaultValue=""><option value="">Any type</option><option>House</option><option>Condo</option><option>Land</option><option>Commercial</option></select></label>
          <label>Sort by<select name="sort" defaultValue="recommended"><option value="recommended">Recommended</option><option value="newest">Newest</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label>
          <label>Bedrooms<select name="beds" defaultValue=""><option value="">Any</option><option>1+</option><option>2+</option><option>3+</option><option>4+</option></select></label>
          <label>Baths<select name="baths" defaultValue=""><option value="">Any</option><option>1+</option><option>2+</option><option>3+</option></select></label>
          <label>Minimum price<input name="minPrice" inputMode="numeric" placeholder="$0" /></label>
          <label>Maximum price<input name="maxPrice" inputMode="numeric" placeholder="No maximum" /></label>
        </div>
        <button className="primary-button" type="submit">Search homes</button>
      </form>
    </section>
  );
}
