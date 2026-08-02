# Selvam Sweets & Bakery — Website

A premium, colourful, fully responsive multi-page website for **Selvam Sweets & Bakery** / **Selvam's Hot Chips**, Manali, Chennai.

## Folder structure

```
selvam-bakery/
├── index.html          Home page
├── sweets.html          Sweets menu (31 items)
├── hotchips.html        Selvam's Hot Chips / namkeen menu
├── puffs.html            Puffs, snacks & fresh bakery items
├── cakes.html            Cakes (birthday, wedding, custom, cupcakes, lava cakes)
├── drinks.html           Fresh juices, chaat, ice creams, cool drinks
├── contact.html          Address, hours, contact form, map, photo gallery
├── css/
│   └── style.css        Full design system (colours, type, components, animation)
├── js/
│   ├── script.js         Shared behaviour: header, nav, scroll reveal, confetti,
│   │                     ripple buttons, image fallback, product card renderer
│   └── products-data.js  All product data (name, price, description, image path)
└── images/
    ├── sweets/            gulab-jamun.jpg, rasagulla.jpg, kaju-katli.jpg, ...
    ├── hotchips/          mixture.jpg, kara-sev.jpg, banana-chips.jpg, ...
    ├── puffs/              veg-puff.jpg, samosa.jpg, burger.jpg, ...
    ├── cakes/              chocolate-cake.jpg, red-velvet.jpg, lava-cake.jpg, ...
    ├── drinks/             badam-milk.jpg, pani-puri.jpg, ...
    ├── gallery/            shop.jpg, owner.jpg, sweet-counter.jpg, shop-seating.jpg, ...
    └── misc/               logo.png (placeholder included), bread.jpg, cookies.jpg, ...
```

## Adding real photos

No photography was supplied with the brief, so every product image currently
shows a colourful placeholder (an emoji on a candy gradient) generated live in
the browser. To bring in real photos:

1. Drop a photo into the matching folder above, using **exactly** the filename
   referenced in `js/products-data.js` (e.g. `images/sweets/gulab-jamun.jpg`).
2. Refresh the page — the real photo will automatically replace the
   placeholder. No code changes are required.
3. Recommended size: roughly 800×650px, JPG, under 300KB, for fast loading.

The same applies to `images/misc/logo.png` — replace it with the shop's real
logo at any square size (a simple placeholder badge is included for now).

## Editing products or prices

All product content (names, descriptions, prices, image paths) lives in
`js/products-data.js`, organised into arrays: `SWEETS`, `HOT_CHIPS`, `PUFFS`,
`CAKES`, `DRINKS`, `CHAAT`, `BAKERY_ITEMS`, `ICE_CREAMS`, `COOL_DRINKS`.
Edit the array to add, remove or update any item — the page rebuilds the
product cards from this data automatically.

## Tech

Plain HTML5, CSS3 and vanilla JavaScript — no frameworks or build step.
Google Fonts (Baloo 2, Poppins, Caveat) are loaded from a CDN; everything
else is self-contained and ready to upload to any standard web host.

## Contact form

The contact form validates input in the browser and shows a confirmation
message. It is not wired to a backend/email service — connect it to your
preferred form handler (e.g. Formspree, EmailJS, or a server-side script) to
receive submissions by email.
