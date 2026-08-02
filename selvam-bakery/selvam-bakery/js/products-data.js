/* ==========================================================================
   SELVAM SWEETS & BAKERY — product data
   Image paths point to /images/<category>/<file>.jpg — drop real photos in
   using these exact filenames and they will appear automatically.
   ========================================================================== */

const SWEETS = [
  { name:"Gulab Jamun", img:"images/sweets/gulab-jamun.jpg", emoji:"🍡", price:"25", note:"/pc", desc:"Soft khoya dumplings soaked in warm rose-cardamom syrup.", veg:true, tag:"Bestseller" },
  { name:"Rasagulla", img:"images/sweets/rasagulla.jpg", emoji:"⚪", price:"25", note:"/pc", desc:"Spongy Bengal-style chhena balls in light sugar syrup.", veg:true },
  { name:"Jangiri", img:"images/sweets/jangiri.jpg", emoji:"🌀", price:"20", note:"/pc", desc:"Crisp urad-dal swirls dipped in saffron syrup.", veg:true },
  { name:"Laddu", img:"images/sweets/laddu.jpg", emoji:"🟠", price:"20", note:"/pc", desc:"Classic besan laddu, roasted golden and ghee-rich.", veg:true },
  { name:"Mysore Pak", img:"images/sweets/mysore-pak.jpg", emoji:"🧈", price:"20", note:"/pc", desc:"Melt-in-mouth gram flour fudge, slow-cooked in pure ghee.", veg:true, tag:"Bestseller" },
  { name:"Milk Sweet", img:"images/sweets/milk-sweet.jpg", emoji:"🥛", price:"600", note:"/kg", desc:"Traditional milk-khoya sweet with a delicate creamy bite.", veg:true },
  { name:"Special Milk Sweet", img:"images/sweets/special-milk-sweet.jpg", emoji:"🌟", price:"700", note:"/kg", desc:"Our signature enriched milk sweet with cashew and saffron.", veg:true, tag:"Signature" },
  { name:"Kaju Katli", img:"images/sweets/kaju-katli.jpg", emoji:"💎", price:"1200", note:"/kg", desc:"Silver-leafed cashew diamonds, smooth and premium.", veg:true, tag:"Premium" },
  { name:"Badusha", img:"images/sweets/badusha.jpg", emoji:"🍩", price:"400", note:"/kg", desc:"Flaky, glazed disc pastry with a syrup-soaked crunch.", veg:true },
  { name:"Rasmalai", img:"images/sweets/rasmalai.jpg", emoji:"🥮", price:"60", note:"/pc", desc:"Soft chhena discs floating in saffron-cardamom rabri.", veg:true, tag:"Bestseller" },
  { name:"Kalakand", img:"images/sweets/kalakand.jpg", emoji:"🔲", price:"640", note:"/kg", desc:"Grainy milk-cake fudge with a rich, milky finish.", veg:true },
  { name:"Milk Cake", img:"images/sweets/milk-cake.jpg", emoji:"🧁", price:"35", note:"/pc", desc:"Slow-caramelised milk solids cut into golden squares.", veg:true },
  { name:"Bengal Sweets", img:"images/sweets/bengal-sweets.jpg", emoji:"🍥", price:"600", note:"/kg", desc:"Assorted chhena-based Bengali specials, light and syrupy.", veg:true },
  { name:"Soan Papdi", img:"images/sweets/soan-papdi.jpg", emoji:"🍬", price:"440", note:"/kg", desc:"Flaky, melt-away threads of gram flour and ghee.", veg:true },
  { name:"Boondi Laddu", img:"images/sweets/boondi-laddu.jpg", emoji:"🟡", price:"400", note:"/kg", desc:"Fine gram-flour pearls bound with sugar syrup.", veg:true },
  { name:"Dry Fruit Laddu", img:"images/sweets/dry-fruit-laddu.jpg", emoji:"🌰", price:"50", note:"/pc", desc:"Loaded with cashew, almond, pista and dates.", veg:true, tag:"Premium" },
  { name:"Coconut Burfi", img:"images/sweets/coconut-burfi.jpg", emoji:"🥥", price:"30", note:"/pc", desc:"Fresh grated coconut set into a fragrant milk fudge.", veg:true },
  { name:"White Burfi", img:"images/sweets/white-burfi.jpg", emoji:"⬜", price:"30", note:"/pc", desc:"Classic mawa burfi, subtly sweet and delicately soft.", veg:true },
  { name:"Cashew Roll", img:"images/sweets/cashew-roll.jpg", emoji:"🌯", price:"70", note:"/pc", desc:"Rolled cashew fudge with a whisper of saffron.", veg:true, tag:"Premium" },
  { name:"Carrot Halwa", img:"images/sweets/carrot-halwa.jpg", emoji:"🥕", price:"50", note:"/100g", desc:"Slow-cooked gajar halwa finished with ghee-roasted nuts.", veg:true },
  { name:"Badam Halwa", img:"images/sweets/badam-halwa.jpg", emoji:"🌰", price:"80", note:"/100g", desc:"Rich almond halwa with a glossy ghee shine.", veg:true, tag:"Premium" },
  { name:"Wheat Halwa", img:"images/sweets/wheat-halwa.jpg", emoji:"🌾", price:"40", note:"/100g", desc:"Traditional Kesari-style wheat halwa, deep amber and glossy.", veg:true },
  { name:"Bombay Halwa", img:"images/sweets/bombay-halwa.jpg", emoji:"🔶", price:"40", note:"/100g", desc:"Glassy cornflour halwa, chewy with roasted cashews.", veg:true },
  { name:"Dates Sweet", img:"images/sweets/dates-sweet.jpg", emoji:"🌴", price:"45", note:"/pc", desc:"Naturally sweet date-and-nut fudge, no added sugar.", veg:true },
  { name:"Palkova", img:"images/sweets/palkova.jpg", emoji:"🥛", price:"60", note:"/100g", desc:"Slow-reduced sweet milk, thick and caramel-toned.", veg:true, tag:"Signature" },
  { name:"Malai Peda", img:"images/sweets/malai-peda.jpg", emoji:"🟤", price:"25", note:"/pc", desc:"Creamy peda with a soft malai centre.", veg:true },
  { name:"Milk Peda", img:"images/sweets/milk-peda.jpg", emoji:"🟠", price:"20", note:"/pc", desc:"Everyday favourite khoya peda, mildly sweet.", veg:true },
  { name:"Chum Chum", img:"images/sweets/chum-chum.jpg", emoji:"🥮", price:"25", note:"/pc", desc:"Oval chhena sweet dusted with coconut or khoya.", veg:true },
  { name:"Sandesh", img:"images/sweets/sandesh.jpg", emoji:"🔷", price:"30", note:"/pc", desc:"Delicate Bengali chhena sweet, lightly sweetened.", veg:true },
  { name:"Motichoor Laddu", img:"images/sweets/motichoor-laddu.jpg", emoji:"🟡", price:"420", note:"/kg", desc:"Tiny boondi pearls pressed into a fragrant laddu.", veg:true, tag:"Bestseller" },
  { name:"Mini Jamun", img:"images/sweets/mini-jamun.jpg", emoji:"🍒", price:"15", note:"/pc", desc:"Bite-sized gulab jamun, perfect for parties.", veg:true }
];

const HOT_CHIPS = [
  { name:"Mixture", img:"images/hotchips/mixture.jpg", emoji:"🥨", price:"36", note:"/100g", desc:"Our classic crunchy mixture with sev, peanuts and spices.", veg:true, tag:"Bestseller" },
  { name:"Kara Sev", img:"images/hotchips/kara-sev.jpg", emoji:"🍟", price:"34", note:"/100g", desc:"Spicy gram-flour noodles, deep fried and crunchy.", veg:true },
  { name:"Butter Murukku", img:"images/hotchips/murukku.jpg", emoji:"🌀", price:"34", note:"/100g", desc:"Buttery rice-flour spirals with a delicate crunch.", veg:true },
  { name:"Ribbon Pakoda", img:"images/hotchips/ribbon-pakoda.jpg", emoji:"🎗️", price:"34", note:"/100g", desc:"Crisp ribboned besan snack, lightly spiced.", veg:true },
  { name:"Omapodi", img:"images/hotchips/omapodi.jpg", emoji:"🍜", price:"34", note:"/100g", desc:"Thin carom-seed sev, a tea-time favourite.", veg:true },
  { name:"Boondi", img:"images/hotchips/boondi.jpg", emoji:"🟡", price:"35", note:"/100g", desc:"Crunchy salted gram-flour pearls.", veg:true },
  { name:"Masala Peanuts", img:"images/hotchips/masala-peanuts.jpg", emoji:"🥜", price:"34", note:"/100g", desc:"Spiced, crunch-coated groundnuts.", veg:true },
  { name:"Spicy Groundnuts", img:"images/hotchips/groundnut.jpg", emoji:"🥜", price:"35", note:"/100g", desc:"Roasted groundnuts tossed in fiery masala.", veg:true },
  { name:"Thattai", img:"images/hotchips/thattai.jpg", emoji:"🟤", price:"30", note:"/pc", desc:"Crisp rice-flour discs seasoned with curry leaf and chana dal.", veg:true },
  { name:"Kai Murukku", img:"images/hotchips/kai-murukku.jpg", emoji:"🌀", price:"34", note:"/100g", desc:"Hand-pressed traditional rice murukku.", veg:true },
  { name:"Aval Mixture", img:"images/hotchips/aval-mixture.jpg", emoji:"🥣", price:"34", note:"/100g", desc:"Flattened rice tossed with peanuts and spices.", veg:true },
  { name:"Corn Mixture", img:"images/hotchips/corn-mixture.jpg", emoji:"🌽", price:"35", note:"/100g", desc:"Crunchy corn flakes mixture with a tangy masala coat.", veg:true },
  { name:"Banana Chips", img:"images/hotchips/banana-chips.jpg", emoji:"🍌", price:"50", note:"/100g", desc:"Kerala-style banana chips, fried in coconut oil.", veg:true, tag:"Bestseller" },
  { name:"Potato Chips", img:"images/hotchips/potato-chips.jpg", emoji:"🥔", price:"40", note:"/100g", desc:"Thin, crispy salted potato chips.", veg:true },
  { name:"Jackfruit Chips", img:"images/hotchips/jackfruit-chips.jpg", emoji:"🟡", price:"60", note:"/100g", desc:"Sweet-savoury jackfruit chips, a seasonal special.", veg:true },
  { name:"Sweet Banana Chips", img:"images/hotchips/sweet-banana-chips.jpg", emoji:"🍌", price:"55", note:"/100g", desc:"Jaggery-glazed sweet banana chips.", veg:true },
  { name:"Pepper Chips", img:"images/hotchips/pepper-chips.jpg", emoji:"🌶️", price:"45", note:"/100g", desc:"Potato chips tossed in cracked black pepper.", veg:true },
  { name:"Garlic Mixture", img:"images/hotchips/garlic-mixture.jpg", emoji:"🧄", price:"45", note:"/100g", desc:"Bold garlicky mixture with an extra kick.", veg:true },
  { name:"Masala Chips", img:"images/hotchips/masala-chips.jpg", emoji:"🌶️", price:"45", note:"/100g", desc:"Potato chips coated in our house masala blend.", veg:true }
];

const PUFFS = [
  { name:"Veg Puff", img:"images/puffs/veg-puff.jpg", emoji:"🥟", price:"20", desc:"Flaky pastry filled with spiced mixed vegetables.", veg:true, tag:"Bestseller" },
  { name:"Egg Puff", img:"images/puffs/egg-puff.jpg", emoji:"🥚", price:"25", desc:"Golden puff pastry with a masala boiled-egg filling.", veg:false },
  { name:"Chicken Puff", img:"images/puffs/chicken-puff.jpg", emoji:"🍗", price:"30", desc:"Buttery puff loaded with spicy shredded chicken.", veg:false, tag:"Bestseller" },
  { name:"Paneer Puff", img:"images/puffs/paneer-puff.jpg", emoji:"🧀", price:"35", desc:"Soft paneer cubes in a mildly spiced puff filling.", veg:true },
  { name:"Sweet Puff", img:"images/puffs/sweet-puff.jpg", emoji:"🍮", price:"20", desc:"Flaky pastry with a sweet coconut-jaggery filling.", veg:true },
  { name:"Samosa", img:"images/puffs/samosa.jpg", emoji:"🔺", price:"10", desc:"Crisp triangle pastry with spiced potato-pea filling.", veg:true },
  { name:"Mini Samosa", img:"images/puffs/mini-samosa.jpg", emoji:"🔻", price:"3", desc:"Bite-sized samosas, perfect for parties.", veg:true },
  { name:"Veg Roll", img:"images/puffs/veg-roll.jpg", emoji:"🌯", price:"20", desc:"Crumb-coated roll stuffed with spiced vegetables.", veg:true },
  { name:"Spring Roll", img:"images/puffs/spring-roll.jpg", emoji:"🌯", price:"30", desc:"Crispy rolls with a stir-fried vegetable filling.", veg:true },
  { name:"Cutlet", img:"images/puffs/cutlet.jpg", emoji:"🥔", price:"20", desc:"Golden fried vegetable cutlet, crunchy outside, soft inside.", veg:true },
  { name:"Veg Sandwich", img:"images/puffs/veg-sandwich.jpg", emoji:"🥪", price:"35", desc:"Fresh vegetable sandwich with chutney and butter.", veg:true },
  { name:"Grilled Sandwich", img:"images/puffs/grilled-sandwich.jpg", emoji:"🥪", price:"45", desc:"Toasted and grilled to a cheesy, crisp finish.", veg:true },
  { name:"Burger", img:"images/puffs/burger.jpg", emoji:"🍔", price:"65", desc:"Soft bun, crisp patty and house-made sauces.", veg:true, tag:"Bestseller" },
  { name:"French Fries", img:"images/puffs/fries.jpg", emoji:"🍟", price:"40", desc:"Golden, salted fries served hot and crisp.", veg:true },
  { name:"Pizza Slice", img:"images/puffs/pizza-slice.jpg", emoji:"🍕", price:"120", desc:"Cheesy oven-baked pizza slice with fresh toppings.", veg:true }
];

const CAKES = [
  { name:"Chocolate Cake", img:"images/cakes/chocolate-cake.jpg", emoji:"🍫", price:"600", note:"/kg", desc:"Rich, moist chocolate sponge with velvety ganache.", tag:"Bestseller" },
  { name:"Black Forest", img:"images/cakes/black-forest.jpg", emoji:"🍒", price:"600", note:"/kg", desc:"Classic layers of chocolate sponge, cream and cherries.", tag:"Bestseller" },
  { name:"White Forest", img:"images/cakes/white-forest.jpg", emoji:"🤍", price:"600", note:"/kg", desc:"Vanilla sponge with whipped cream and cherry filling." },
  { name:"Red Velvet", img:"images/cakes/red-velvet.jpg", emoji:"❤️", price:"800", note:"/kg", desc:"Velvety cocoa sponge with cream-cheese frosting.", tag:"Premium" },
  { name:"Butterscotch", img:"images/cakes/butterscotch.jpg", emoji:"🧈", price:"800", note:"/kg", desc:"Caramelised butterscotch crunch through soft sponge." },
  { name:"Vanilla", img:"images/cakes/vanilla.jpg", emoji:"🍦", price:"600", note:"/kg", desc:"Light, fluffy classic vanilla sponge cake." },
  { name:"Pineapple", img:"images/cakes/pineapple.jpg", emoji:"🍍", price:"800", note:"/kg", desc:"Fresh pineapple chunks folded into whipped cream sponge." },
  { name:"Strawberry", img:"images/cakes/strawberry.jpg", emoji:"🍓", price:"800", note:"/kg", desc:"Fresh strawberry cream cake, light and fruity." },
  { name:"Rasmalai Cake", img:"images/cakes/rasmalai-cake.jpg", emoji:"🥮", price:"800", note:"/kg", desc:"Fusion cake infused with saffron rasmalai flavours.", tag:"Signature" },
  { name:"Butterscotch Crunch", img:"images/cakes/butterscotch-crunch.jpg", emoji:"🍮", price:"800", note:"/kg", desc:"Extra crunchy praline layered through butterscotch cream." },
  { name:"Fruit Cake", img:"images/cakes/fruit-cake.jpg", emoji:"🍇", price:"1000", note:"/kg", desc:"Loaded with seasonal fresh fruits and light cream." },
  { name:"KitKat Cake", img:"images/cakes/kitkat-cake.jpg", emoji:"🍫", price:"1000", note:"/kg", desc:"Chocolate cake wrapped in a wall of KitKat fingers.", tag:"Bestseller" },
  { name:"Ferrero Rocher Cake", img:"images/cakes/ferrero-cake.jpg", emoji:"🌰", price:"650", note:"/kg", desc:"Hazelnut chocolate cake topped with Ferrero Rocher.", tag:"Premium" },
  { name:"Oreo Cake", img:"images/cakes/oreo-cake.jpg", emoji:"🍪", price:"1000", note:"/kg", desc:"Cookies-and-cream sponge loaded with crushed Oreo." },
  { name:"Rainbow Cake", img:"images/cakes/rainbow-cake.jpg", emoji:"🌈", price:"800", note:"/kg", desc:"Vibrant multi-coloured layered sponge, a party favourite.", tag:"Kids' Favourite" },
  { name:"Photo Cake", img:"images/cakes/photo-cake.jpg", emoji:"📷", price:"1000", note:"/kg", desc:"Edible-print photo cake, personalised for your celebration.", tag:"Popular" },
  { name:"Customized Birthday Cake", img:"images/cakes/birthday-cake.jpg", emoji:"🎂", price:"1000", note:"/kg", desc:"Fully customised themes, colours and toppers for birthdays.", tag:"Made to Order" },
  { name:"Wedding Cake", img:"images/cakes/wedding-cake.jpg", emoji:"💍", price:"1000", note:"/kg", desc:"Elegant tiered cakes designed for your big day.", tag:"Made to Order" },
  { name:"Anniversary Cake", img:"images/cakes/anniversary-cake.jpg", emoji:"💐", price:"1000", note:"/kg", desc:"Beautifully finished cakes for anniversary celebrations." },
  { name:"Cup Cake", img:"images/cakes/cupcake.jpg", emoji:"🧁", price:"15", note:"/pc", desc:"Soft, individually frosted classic cupcake." },
  { name:"Chocolate Cup Cake", img:"images/cakes/chocolate-cupcake.jpg", emoji:"🧁", price:"18", note:"/pc", desc:"Rich cocoa cupcake with chocolate swirl frosting." },
  { name:"Vanilla Cup Cake", img:"images/cakes/vanilla-cupcake.jpg", emoji:"🧁", price:"18", note:"/pc", desc:"Light vanilla cupcake with buttercream swirl." },
  { name:"Red Velvet Cup Cake", img:"images/cakes/red-velvet-cupcake.jpg", emoji:"🧁", price:"30", note:"/pc", desc:"Mini red velvet cupcake with cream-cheese topping." },
  { name:"Lava Cake", img:"images/cakes/lava-cake.jpg", emoji:"🌋", price:"50", note:"/pc", desc:"Warm cake with a molten centre, served fresh.", tag:"Bestseller" },
  { name:"Chocolate Lava Cake", img:"images/cakes/chocolate-lava-cake.jpg", emoji:"🍫", price:"50", note:"/pc", desc:"Decadent double-chocolate lava cake, oven-fresh." }
];

const DRINKS = [
  { name:"Fresh Badam Milk", img:"images/drinks/badam-milk.jpg", emoji:"🥛", price:"40", desc:"Chilled almond milk infused with saffron and cardamom.", tag:"Bestseller" },
  { name:"Rose Milk", img:"images/drinks/rose-milk.jpg", emoji:"🌹", price:"40", desc:"Classic Chennai rose-flavoured chilled milk." },
  { name:"Madurai Jigarthanda", img:"images/drinks/jigarthanda.jpg", emoji:"🍨", price:"65", desc:"Layered milk, nannari syrup, ice cream and sabja seeds.", tag:"Signature" },
  { name:"Fresh Lime Juice", img:"images/drinks/lime-juice.jpg", emoji:"🍋", price:"20", desc:"Refreshing lime juice, sweet or salted." },
  { name:"Mosambi Juice", img:"images/drinks/mosambi-juice.jpg", emoji:"🍈", price:"60", desc:"Fresh-pressed sweet lime juice." },
  { name:"Orange Juice", img:"images/drinks/orange-juice.jpg", emoji:"🍊", price:"60", desc:"Fresh-squeezed orange juice, no added sugar." },
  { name:"Watermelon Juice", img:"images/drinks/watermelon-juice.jpg", emoji:"🍉", price:"40", desc:"Cool, hydrating fresh watermelon juice." },
  { name:"Pomegranate Juice", img:"images/drinks/pomegranate-juice.jpg", emoji:"🍇", price:"60", desc:"Antioxidant-rich fresh pomegranate juice." },
  { name:"Mango Juice", img:"images/drinks/mango-juice.jpg", emoji:"🥭", price:"40", desc:"Seasonal fresh mango juice, thick and sweet." },
  { name:"Apple Juice", img:"images/drinks/apple-juice.jpg", emoji:"🍎", price:"60", desc:"Freshly pressed apple juice." },
  { name:"Pineapple Juice", img:"images/drinks/pineapple-juice.jpg", emoji:"🍍", price:"50", desc:"Tangy-sweet fresh pineapple juice." },
  { name:"Grape Juice", img:"images/drinks/grape-juice.jpg", emoji:"🍇", price:"50", desc:"Fresh-pressed grape juice." },
  { name:"Sugarcane Juice", img:"images/drinks/sugarcane-juice.jpg", emoji:"🎋", price:"25", desc:"Cold-pressed sugarcane juice with ginger and lime." },
  { name:"Milkshake", img:"images/drinks/milkshake.jpg", emoji:"🥤", price:"55", desc:"Thick, creamy classic milkshake." },
  { name:"Chocolate Milkshake", img:"images/drinks/chocolate-milkshake.jpg", emoji:"🍫", price:"60", desc:"Rich chocolate milkshake topped with cream.", tag:"Bestseller" },
  { name:"Strawberry Milkshake", img:"images/drinks/strawberry-milkshake.jpg", emoji:"🍓", price:"60", desc:"Fresh strawberry blended into creamy milk." },
  { name:"Vanilla Milkshake", img:"images/drinks/vanilla-milkshake.jpg", emoji:"🍦", price:"55", desc:"Classic vanilla milkshake, smooth and chilled." }
];

const CHAAT = [
  { name:"Pani Puri", img:"images/drinks/pani-puri.jpg", emoji:"🟤", price:"30", desc:"Crisp puris with spicy-tangy mint water and filling.", tag:"Bestseller" },
  { name:"Masala Puri", img:"images/drinks/masala-puri.jpg", emoji:"🥣", price:"35", desc:"Crushed puris topped with spiced ragda and chutneys." },
  { name:"Dahi Puri", img:"images/drinks/dahi-puri.jpg", emoji:"🥛", price:"40", desc:"Crisp puris layered with yogurt, chutneys and sev." },
  { name:"Sev Puri", img:"images/drinks/sev-puri.jpg", emoji:"🟡", price:"35", desc:"Crunchy puris topped with potato, chutneys and sev." },
  { name:"Bhel Puri", img:"images/drinks/bhel-puri.jpg", emoji:"🥗", price:"35", desc:"Puffed rice tossed with chutneys, onion and sev." },
  { name:"Pav Bhaji", img:"images/drinks/pav-bhaji.jpg", emoji:"🍞", price:"60", desc:"Buttery spiced mashed-vegetable curry with soft pav.", tag:"Bestseller" },
  { name:"Samosa Chaat", img:"images/drinks/samosa-chaat.jpg", emoji:"🔺", price:"45", desc:"Crushed samosa topped with chole, chutneys and yogurt." },
  { name:"Aloo Tikki", img:"images/drinks/aloo-tikki.jpg", emoji:"🥔", price:"35", desc:"Crisp potato patties topped with chutneys and sev." },
  { name:"Ragda Chaat", img:"images/drinks/ragda-chaat.jpg", emoji:"🫘", price:"40", desc:"Spiced white-pea curry topped with sev and chutneys." }
];

const BAKERY_ITEMS = [
  { name:"Jam Bun", img:"images/misc/jam-bun.jpg", emoji:"🍞", price:"20", desc:"Soft bun filled with fruit jam, baked fresh daily." },
  { name:"Butter Jam Bun", img:"images/misc/butter-jam-bun.jpg", emoji:"🧈", price:"25", desc:"Buttery soft bun with a generous jam filling." },
  { name:"Palgova Bun", img:"images/misc/palgova-bun.jpg", emoji:"🥐", price:"30", desc:"Bun filled with rich palkova, a Chennai favourite.", tag:"Signature" },
  { name:"Cream Bun", img:"images/misc/cream-bun.jpg", emoji:"🥯", price:"25", desc:"Fluffy bun swirled with sweet vanilla cream." },
  { name:"Milk Bun", img:"images/misc/milk-bun.jpg", emoji:"🍞", price:"20", desc:"Soft milk bread bun, mildly sweet." },
  { name:"Veg Bun", img:"images/misc/veg-bun.jpg", emoji:"🥬", price:"25", desc:"Savoury bun stuffed with spiced vegetables." },
  { name:"Wheat Bread", img:"images/misc/wheat-bread.jpg", emoji:"🍞", price:"55", desc:"Wholesome whole-wheat loaf, baked fresh." },
  { name:"Maida Bread", img:"images/misc/maida-bread.jpg", emoji:"🍞", price:"50", desc:"Classic soft white bread loaf." },
  { name:"Milk Bread", img:"images/misc/milk-bread.jpg", emoji:"🍞", price:"45", desc:"Extra-soft milk bread, rich and fluffy." },
  { name:"Brown Bread", img:"images/misc/brown-bread.jpg", emoji:"🍞", price:"45", desc:"Healthy multigrain brown bread loaf." },
  { name:"Fruit Bread", img:"images/misc/fruit-bread.jpg", emoji:"🍇", price:"55", desc:"Soft loaf studded with candied fruit and nuts." },
  { name:"Garlic Bread", img:"images/misc/garlic-bread.jpg", emoji:"🧄", price:"50", desc:"Toasted bread loaded with garlic butter." },
  { name:"Cookies", img:"images/misc/cookies.jpg", emoji:"🍪", price:"36", note:"/100g", desc:"Freshly baked assorted cookies." },
  { name:"Butter Cookies", img:"images/misc/butter-cookies.jpg", emoji:"🧈", price:"36", note:"/100g", desc:"Crumbly, rich butter cookies." },
  { name:"Cashew Cookies", img:"images/misc/cashew-cookies.jpg", emoji:"🌰", price:"36", note:"/100g", desc:"Buttery cookies loaded with roasted cashew bits." },
  { name:"Milk Biscuits", img:"images/misc/milk-biscuits.jpg", emoji:"🍪", price:"20", note:"/100g", desc:"Classic mildly-sweet milk biscuits." },
  { name:"Rusk", img:"images/misc/rusk.jpg", emoji:"🥖", price:"25", note:"/100g", desc:"Twice-baked crisp rusk, perfect with chai." },
  { name:"Toast", img:"images/misc/toast.jpg", emoji:"🍞", price:"20", note:"/100g", desc:"Crunchy sweet toast biscuits." },
  { name:"Chocolate Biscuits", img:"images/misc/chocolate-biscuits.jpg", emoji:"🍫", price:"36", note:"/100g", desc:"Cocoa-rich crunchy biscuits." },
  { name:"Cream Biscuits", img:"images/misc/cream-biscuits.jpg", emoji:"🍪", price:"25", note:"/100g", desc:"Classic cream-filled sandwich biscuits." }
];

const ICE_CREAMS = [
  { name:"Vanilla", img:"images/misc/ice-vanilla.jpg", emoji:"🍦", price:"30", note:"/cup", desc:"Classic creamy vanilla ice cream." },
  { name:"Chocolate", img:"images/misc/ice-chocolate.jpg", emoji:"🍫", price:"35", note:"/cup", desc:"Rich chocolate ice cream." },
  { name:"Strawberry", img:"images/misc/ice-strawberry.jpg", emoji:"🍓", price:"35", note:"/cup", desc:"Fresh strawberry swirl ice cream." },
  { name:"Butterscotch", img:"images/misc/ice-butterscotch.jpg", emoji:"🧈", price:"40", note:"/cup", desc:"Crunchy caramel praline ice cream." },
  { name:"Kulfi", img:"images/misc/kulfi.jpg", emoji:"🍡", price:"40", note:"/pc", desc:"Dense, traditional malai kulfi on a stick.", tag:"Bestseller" },
  { name:"Cone", img:"images/misc/ice-cone.jpg", emoji:"🍦", price:"30", note:"/pc", desc:"Crisp wafer cone with your choice of flavour." },
  { name:"Cup Ice Cream", img:"images/misc/ice-cup.jpg", emoji:"🍨", price:"35", note:"/cup", desc:"Ready-to-go single-serve ice cream cup." },
  { name:"Family Pack", img:"images/misc/ice-family-pack.jpg", emoji:"🧊", price:"200", note:"/500ml", desc:"Take-home family pack, choose your favourite flavour." }
];

const COOL_DRINKS = [
  { name:"Pepsi", img:"images/misc/pepsi.jpg", emoji:"🥤", price:"40", desc:"Chilled 750ml bottle." },
  { name:"Coca-Cola", img:"images/misc/coca-cola.jpg", emoji:"🥤", price:"40", desc:"Chilled 750ml bottle." },
  { name:"Sprite", img:"images/misc/sprite.jpg", emoji:"🥤", price:"40", desc:"Chilled 750ml bottle." },
  { name:"Fanta", img:"images/misc/fanta.jpg", emoji:"🍊", price:"40", desc:"Chilled 750ml bottle." },
  { name:"7UP", img:"images/misc/7up.jpg", emoji:"🥤", price:"40", desc:"Chilled 750ml bottle." },
  { name:"Mountain Dew", img:"images/misc/mountain-dew.jpg", emoji:"🥤", price:"40", desc:"Chilled 750ml bottle." },
  { name:"Maaza", img:"images/misc/maaza.jpg", emoji:"🥭", price:"35", desc:"Chilled mango drink, 600ml." },
  { name:"Slice", img:"images/misc/slice.jpg", emoji:"🥭", price:"35", desc:"Chilled mango drink, 600ml." },
  { name:"Appy Fizz", img:"images/misc/appy-fizz.jpg", emoji:"🍏", price:"35", desc:"Chilled sparkling apple drink." },
  { name:"Soda", img:"images/misc/soda.jpg", emoji:"🫧", price:"20", desc:"Chilled plain or masala soda." }
];

/* ---------- Bulk order occasions ---------- */
const OCCASIONS = [
  { icon:"🏢", name:"Corporate Events" },
  { icon:"⛪", name:"Church Events" },
  { icon:"🎂", name:"Birthday Functions" },
  { icon:"💍", name:"Wedding Functions" },
  { icon:"💑", name:"Engagement" },
  { icon:"🏠", name:"House Warming" },
  { icon:"🏫", name:"School Functions" },
  { icon:"🛕", name:"Temple Festivals" },
  { icon:"👨‍👩‍👧‍👦", name:"Family Events" },
  { icon:"📦", name:"Large Quantity Orders" }
];

/* ---------- Counter marquee mix (home page) ---------- */
const MARQUEE_ITEMS = [
  { icon:"🍡", name:"Gulab Jamun" }, { icon:"🧈", name:"Mysore Pak" }, { icon:"💎", name:"Kaju Katli" },
  { icon:"🌶️", name:"Kara Sev" }, { icon:"🍌", name:"Banana Chips" }, { icon:"🥟", name:"Veg Puff" },
  { icon:"🍫", name:"Chocolate Cake" }, { icon:"🥛", name:"Badam Milk" }, { icon:"🥮", name:"Rasmalai" },
  { icon:"🎂", name:"Custom Cakes" }, { icon:"🌀", name:"Murukku" }, { icon:"🍪", name:"Cookies" }
];
