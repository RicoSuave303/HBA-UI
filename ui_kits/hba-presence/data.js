(() => {
const U = id => `https://images.unsplash.com/photo-${id}?w=900&q=70&auto=format&fit=crop`;
const P = ['1568605114967-8130f3a36994','1570129477492-45c003edd2be','1564013799919-ab600027ffc6','1512917774080-9991f1c4c750','1600596542815-ffad4c1539a9','1600585154340-be6161a56a0c','1580587771525-78b9dba3b914','1613490493576-7fde63acd811','1600607687939-ce8a6c25118c','1600566753190-17f0baa2a6c3','1583608205776-bfd35f0d9f83','1605276374104-dee2a0ed3cd6'].map(U);
const INT = ['1600210492486-724fe5c67fb0','1600566752355-35792bedcfea','1556911220-bff31c812dba','1484154218962-a197022b5858'].map(U);
const HERO = U('1600585154340-be6161a56a0c').replace('w=900','w=1600');

const hba = {
  name: 'HBA of Metro Denver', short: 'Metro Denver HBA',
  territory: 'Adams, Arapahoe, Boulder, Broomfield, Denver, Douglas, Elbert & Jefferson counties',
  counties: 8, members: 642, builders: 118, associates: 524, since: 1946,
  value: 'The builders, developers and trade partners who build the Front Range, in one place buyers can actually find.',
  site: 'hbadenver.com'
};

const builders = [
  { id:'frontrange', name:'Front Range Homes', type:'Production builder', city:'Aurora', neighborhoods:4, homes:37, from:'$489k', img:P[0], lat:39.705, lng:-104.735, member:true, years:22, elite:true },
  { id:'aspen', name:'Aspen Ridge Homebuilders', type:'Semi-custom', city:'Castle Rock', neighborhoods:2, homes:14, from:'$629k', img:P[1], lat:39.372, lng:-104.856, member:true, years:15 },
  { id:'timberline', name:'Timberline Builders Co.', type:'Custom builder', city:'Golden', neighborhoods:1, homes:6, from:'$1.2M', img:P[7], lat:39.755, lng:-105.221, member:true, years:31, elite:true },
  { id:'platte', name:'Platte River Homes', type:'Production builder', city:'Brighton', neighborhoods:3, homes:28, from:'$452k', img:P[2], lat:39.985, lng:-104.820, member:true, years:9 },
  { id:'highline', name:'Highline Homes', type:'Townhomes & paired', city:'Thornton', neighborhoods:2, homes:19, from:'$415k', img:P[5], lat:39.905, lng:-104.955, member:true, years:12 },
  { id:'summit', name:'Summit Crest Homes', type:'Semi-custom', city:'Parker', neighborhoods:2, homes:11, from:'$715k', img:P[4], lat:39.518, lng:-104.762, member:true, years:18 },
  { id:'evergreen', name:'Evergreen Craft Builders', type:'Custom builder', city:'Arvada', neighborhoods:1, homes:4, from:'$985k', img:P[3], lat:39.832, lng:-105.150, member:true, years:26 },
  { id:'meadowlark', name:'Meadowlark Homes', type:'Production builder', city:'Erie', neighborhoods:2, homes:22, from:'$559k', img:P[6], lat:40.050, lng:-105.050, member:true, years:7 }
];
const nonMembers = [
  { name:'Cobalt Peak Builders', city:'Commerce City', lat:39.845, lng:-104.860 },
  { name:'Larkspur Custom Homes', city:'Larkspur', lat:39.228, lng:-104.887 },
  { name:'Bear Creek Homeworks', city:'Lakewood', lat:39.690, lng:-105.110 },
  { name:'Northfield Residential', city:'Broomfield', lat:39.935, lng:-105.070 },
  { name:'Sandstone Homes', city:'Littleton', lat:39.600, lng:-105.020 },
  { name:'Two Rivers Building Co.', city:'Westminster', lat:39.870, lng:-105.060 },
  { name:'Prairie Sky Homes', city:'Bennett', lat:39.759, lng:-104.427 },
  { name:'Elbert Timber Frame', city:'Elizabeth', lat:39.360, lng:-104.600 }
];
const extraMembers = [
  { name:'Cherry Creek Custom', city:'Centennial', lat:39.580, lng:-104.880 },
  { name:'Red Rocks Renovation & Build', city:'Morrison', lat:39.653, lng:-105.191 },
  { name:'Horizon Peak Homes', city:'Highlands Ranch', lat:39.540, lng:-104.970 },
  { name:'Longs View Builders', city:'Longmont', lat:40.167, lng:-105.101 },
  { name:'Cottonwood Homes', city:'Englewood', lat:39.648, lng:-104.988 },
  { name:'Ironwood Builders', city:'Castle Pines', lat:39.472, lng:-104.896 }
];

const associates = [
  { name:'Peak Windows & Doors', cat:'Windows & doors' },
  { name:'Mile High Lighting', cat:'Lighting' },
  { name:'Rocky Mountain Flooring', cat:'Flooring' },
  { name:'Alpine Title Co.', cat:'Title & escrow' },
  { name:'Colorado Home Lending', cat:'Mortgage' },
  { name:'Foothills Cabinetry', cat:'Cabinets' },
  { name:'Front Range Solar', cat:'Energy' },
  { name:'Cascade Plumbing Supply', cat:'Plumbing' }
];

const neighborhoods = {
  frontrange: [
    { name:'Cedar Ridge', city:'Aurora', from:'$489k', plans:6, img:P[0] },
    { name:'Harvest Trails', city:'Aurora', from:'$512k', plans:5, img:P[9] },
    { name:'Sky Ranch West', city:'Watkins', from:'$469k', plans:4, img:P[10] },
    { name:'Prairie Point', city:'Aurora', from:'$535k', plans:5, img:P[11] }
  ]
};
const homes = [
  { id:'h1', no:12, name:'The Willow', builder:'frontrange', hood:'Cedar Ridge', city:'Aurora', price:'$524,900', beds:4, baths:2.5, sqft:2480, img:P[0], lat:39.712, lng:-104.742, status:'Parade model' },
  { id:'h2', no:18, name:'The Summit', builder:'aspen', hood:'Crystal Valley', city:'Castle Rock', price:'$689,000', beds:4, baths:3.5, sqft:3120, img:P[1], lat:39.365, lng:-104.842, status:'Parade model' },
  { id:'h3', no:7, name:'Clear Creek Residence', builder:'timberline', hood:'Mesa Top', city:'Golden', price:'$1,395,000', beds:5, baths:4.5, sqft:4610, img:P[7], lat:39.740, lng:-105.205, status:'Parade model' },
  { id:'h4', no:22, name:'The Juniper', builder:'platte', hood:'River Bend', city:'Brighton', price:'$468,500', beds:3, baths:2.5, sqft:2090, img:P[2], lat:39.990, lng:-104.805, status:'Move-in ready' },
  { id:'h5', no:4, name:'The Aurora II', builder:'summit', hood:'Stonegate', city:'Parker', price:'$749,900', beds:5, baths:3.5, sqft:3480, img:P[4], lat:39.525, lng:-104.775, status:'Parade model' },
  { id:'h6', no:15, name:'The Larimer', builder:'highline', hood:'North Park', city:'Thornton', price:'$429,000', beds:3, baths:2.5, sqft:1780, img:P[5], lat:39.912, lng:-104.940, status:'Parade model' }
];
const products = [
  { id:'p1', name:'Quartz waterfall island', by:'Foothills Cabinetry' },
  { id:'p2', name:'Tankless water heater', by:'Cascade Plumbing Supply' },
  { id:'p3', name:'Wide-plank white oak floors', by:'Rocky Mountain Flooring' },
  { id:'p4', name:'Black-frame picture windows', by:'Peak Windows & Doors' },
  { id:'p5', name:'Dedicated movie room', by:'Mile High Lighting' },
  { id:'p6', name:'Rooftop solar + battery', by:'Front Range Solar' }
];
const parade = {
  name:'Parade of Homes', dates:'Aug 6–23', hours:'Thu–Sun · 12–5 PM', price:'$12', homes:42, builders:28, days:18,
  giveaway:'Daily giveaway: a $500 lighting package from Mile High Lighting',
  contact:'parade@hbadenver.com'
};
const events = [
  { date:'OCT 16', title:'Builder & REALTOR mixer', where:'Denver Design District', tag:'Networking' },
  { date:'NOV 04', title:'Housing affordability forum', where:'History Colorado Center', tag:'Advocacy' },
  { date:'DEC 09', title:'Annual installation gala', where:'The Brown Palace', tag:'Members' }
];
const news = [
  { date:'Sep 22', title:'Metro permits up 6% year over year' },
  { date:'Sep 10', title:'Parade of Homes results: 42 homes, 18 days' },
  { date:'Aug 28', title:'New energy code: what builders need to know' }
];
const advocacy = [
  { stat:'$20', label:'returned for every $1 of dues, through code and fee work (HBA claim format)' },
  { stat:'14', label:'local ordinances reviewed with builder input this year' },
  { stat:'3', label:'impact-fee increases delayed or reduced' }
];
const sponsorTiers = [
  { tier:'Presenting', names:['Colorado Home Lending'] },
  { tier:'Gold', names:['Peak Windows & Doors','Mile High Lighting','Front Range Solar'] },
  { tier:'Silver', names:['Rocky Mountain Flooring','Alpine Title Co.','Foothills Cabinetry','Cascade Plumbing Supply'] }
];
const eo = { visits:'18.4k', leads:'1,236', registrations:'6,812', nonMembers:nonMembers.length };

window.HBA_DATA = { hba, builders, nonMembers, extraMembers, associates, neighborhoods, homes, products, parade, events, news, advocacy, sponsorTiers, eo, HERO, INT, P };
})();
