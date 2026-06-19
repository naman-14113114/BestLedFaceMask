import fs from 'fs';

const targetFile = 'apps/site/src/legacy-pages/NewAdvertorial.tsx';
let content = fs.readFileSync(targetFile, 'utf8');

// Kala Red Light
content = content.replace(
  /"Kala Red Light Face Mask earns the third spot in the Canada ranking because it brings a credible, skin-focused LED setup at a mid-premium price\./,
  '"Kala Red Light Face Mask earns the third spot in the Canada ranking because it brings a credible, skin-focused LED setup at a <b>mid-premium price</b>.'
).replace(
  /The device combines red, near-infrared, and blue light in a lightweight silicone mask/,
  'The device combines <b>red, near-infrared, and blue light</b> in a lightweight silicone mask'
).replace(
  /"Its official specifications list 198 LED lights, 630nm red light, 830nm near-infrared light, 465nm blue light, 10-20 minute treatment sessions, USB-C charging, a 348g weight, and a 2-year warranty\./,
  '"Its official specifications list <b>198 LED lights</b>, 630nm red light, 830nm near-infrared light, 465nm blue light, <b>10-20 minute treatment sessions</b>, USB-C charging, a 348g weight, and a <b>2-year warranty</b>.'
).replace(
  /At \$382\.49, Kala is still a face-only mask/,
  'At <b>$382.49</b>, Kala is still a <b>face-only mask</b>'
);

// TheraFace
content = content.replace(
  /built around 648 LEDs plus VibraWave massage therapy for facial tension\./,
  'built around <b>648 LEDs</b> plus <b>VibraWave massage therapy</b> for facial tension.'
).replace(
  /"The mask includes Red, Blue, and Yellow light therapies, cordless use, and short 9-minute sessions\./,
  '"The mask includes <b>Red, Blue, and Yellow light therapies</b>, cordless use, and short <b>9-minute sessions</b>.'
).replace(
  /want a high-end, hard-shell device, it has obvious appeal\./,
  'want a <b>high-end, hard-shell device</b>, it has obvious appeal.'
).replace(
  /"The tradeoff is value\. At \$799\.99, it is dramatically more expensive/,
  '"The tradeoff is value. At <b>$799.99</b>, it is dramatically more expensive'
).replace(
  /uses a rigid, heavier headset that can feel less comfortable/,
  'uses a <b>rigid, heavier headset</b> that can feel less comfortable'
);

// Equinox
content = content.replace(
  /The face-only version lists 336 LEDs,/,
  'The face-only version lists <b>336 LEDs</b>,'
).replace(
  /"Its Glow Core-style setup uses six treatment modes built around/,
  '"Its Glow Core-style setup uses <b>six treatment modes</b> built around'
).replace(
  /highlights Health Canada approval, CE, FCC, ROHS, and a 2-year warranty\./,
  'highlights <b>Health Canada approval</b>, CE, FCC, ROHS, and a <b>2-year warranty</b>.'
).replace(
  /because the \$385 face-only model still leaves out neck coverage,/,
  'because the <b>$385</b> face-only model still <b>leaves out neck coverage</b>,'
).replace(
  /but the overall value is weaker for Canadian buyers/,
  'but the <b>overall value is weaker</b> for Canadian buyers'
);

fs.writeFileSync(targetFile, content);
console.log("Successfully bolded NewAdvertorial.tsx Canada products.");
