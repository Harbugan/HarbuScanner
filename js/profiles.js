const aliases=['GHOST_BYTE','NEON_WRAITH','PIXEL_BANDIT','NULL_RUNNER','CRYPT0_KID','SHADOW_PING','GLITCHFOX','ZERO_SIGNAL','NIGHT_PACKET','BYTE_PHANTOM'];
const classes=['TECH RUNNER','DATA GHOST','CYBER NINJA','SIGNAL HUNTER','SYSTEM WIZARD','NETWORK ROGUE'];
const secrets=['Suspected of hacking the school Wi-Fi. Carries three unidentified snacks.','Last search: How to become invisible before homework.','Wanted for stealing the last cookie.','Secretly afraid of rubber ducks.','Has an encrypted collection of terrible jokes.','Known to disappear whenever dishes need washing.','Rumoured to control the neighbourhood pigeons.','Has achieved legendary status in pillow-fort engineering.'];
const pick=a=>a[Math.floor(Math.random()*a.length)];
export function createProfile(){return {alias:pick(aliases),age:8+Math.floor(Math.random()*12),className:pick(classes),threat:pick(['LOW','MODERATE','HIGH','LEGENDARY']),skill:35+Math.floor(Math.random()*65),secret:pick(secrets)}}
