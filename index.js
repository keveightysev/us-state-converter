const list = [
  {
    name: 'Alabama',
    usps: 'AL',
    demonym: 'Alabamian',
    iso: 'US-AL',
    altAbbr: ['Ala'],
    uscg: 'AL',
  },
  {
    name: 'Alaska',
    usps: 'AK',
    demonym: 'Alaskan',
    iso: 'US-AK',
    altAbbr: ['Alas'],
    uscg: 'AK',
  },
  {
    name: 'Arizona',
    usps: 'AZ',
    demonym: 'Arizonan',
    iso: 'US-AZ',
    altAbbr: ['Ariz'],
    uscg: 'AZ',
  },
  {
    name: 'Arkansas',
    usps: 'AR',
    demonym: 'Arkansan',
    iso: 'US-AR',
    altAbbr: ['Ark'],
    uscg: 'AR',
  },
  {
    name: 'California',
    usps: 'CA',
    demonym: 'Californian',
    iso: 'US-CA',
    altAbbr: ['Cal', 'Calif'],
    uscg: 'CF',
  },
  {
    name: 'Colorado',
    usps: 'CO',
    demonym: 'Coloradan',
    iso: 'US-CO',
    altAbbr: ['Colo', 'Col'],
    uscg: 'CL',
  },
  {
    name: 'Connecticut',
    usps: 'CT',
    demonym: 'Connecticuter',
    iso: 'US-CT',
    altAbbr: ['Conn'],
    uscg: 'CT',
  },
  {
    name: 'Delaware',
    usps: 'DE',
    demonym: 'Delawarean',
    iso: 'US-DE',
    altAbbr: ['Del'],
    uscg: 'DL',
  },
  {
    name: 'District of Columbia',
    usps: 'DC',
    demonym: 'Washingtonian',
    iso: 'US-DC',
    altAbbr: ['Wash DC'],
    uscg: 'DC',
  },
  {
    name: 'Florida',
    usps: 'FL',
    demonym: 'Floridian',
    iso: 'US-FL',
    altAbbr: ['Fla', 'Flor'],
    uscg: 'FL',
  },
  {
    name: 'Georgia',
    usps: 'GA',
    demonym: 'Georgian',
    iso: 'US-GA',
    altAbbr: ['Geo'],
    uscg: 'GA',
  },
  {
    name: 'Hawaii',
    usps: 'HI',
    demonym: 'Hawaii resident',
    iso: 'US-HI',
    altAbbr: ['Geo'],
    uscg: 'HA',
  },
  {
    name: 'Idaho',
    usps: 'ID',
    demonym: 'Idahoan',
    iso: 'US-ID',
    altAbbr: ['Ida'],
    uscg: 'ID',
  },
  {
    name: 'Illinois',
    usps: 'IL',
    demonym: 'Illinoisan',
    iso: 'US-IL',
    altAbbr: ['Ill', 'Ills', "Ill's"],
    uscg: 'IL',
  },
  {
    name: 'Indiana',
    usps: 'IN',
    demonym: 'Hoosier',
    iso: 'US-IN',
    altAbbr: ['Ind'],
    uscg: 'IN',
  },
  {
    name: 'Iowa',
    usps: 'IA',
    demonym: 'Iowan',
    iso: 'US-IA',
    altAbbr: ['Ioa'],
    uscg: 'IA',
  },
  {
    name: 'Kansas',
    usps: 'KS',
    demonym: 'Kansan',
    iso: 'US-KS',
    altAbbr: ['Kans', 'Kan'],
    uscg: 'KA',
  },
  {
    name: 'Kentucky',
    usps: 'KY',
    demonym: 'Kentuckian',
    iso: 'US-KY',
    altAbbr: ['Ken', 'Kent'],
    uscg: 'KY',
  },
  {
    name: 'Louisiana',
    usps: 'LA',
    demonym: 'Louisianian',
    iso: 'US-LA',
    altAbbr: [],
    uscg: 'LA',
  },
  {
    name: 'Maine',
    usps: 'ME',
    demonym: 'Mainer',
    iso: 'US-ME',
    altAbbr: [],
    uscg: 'ME',
  },
  {
    name: 'Maryland',
    usps: 'MD',
    demonym: 'Marylander',
    iso: 'US-MD',
    altAbbr: [],
    uscg: 'MD',
  },
  {
    name: 'Massachusetts',
    usps: 'MA',
    demonym: 'Massachusettsan',
    iso: 'US-MA',
    altAbbr: ['Mass'],
    uscg: 'MS',
  },
  {
    name: 'Michigan',
    usps: 'MI',
    demonym: 'Michiganian',
    iso: 'US-MI',
    altAbbr: ['Mich'],
    uscg: 'MC',
  },
  {
    name: 'Minnesota',
    usps: 'MN',
    demonym: 'Minnesotan',
    iso: 'US-MN',
    altAbbr: ['Minn'],
    uscg: 'MN',
  },
  {
    name: 'Mississippi',
    usps: 'MS',
    demonym: 'Mississippian',
    iso: 'US-MS',
    altAbbr: ['Miss'],
    uscg: 'MI',
  },
  {
    name: 'Missouri',
    usps: 'MO',
    demonym: 'Missourian',
    iso: 'US-MO',
    altAbbr: [],
    uscg: 'MO',
  },
  {
    name: 'Montana',
    usps: 'MT',
    demonym: 'Montanan',
    iso: 'US-MT',
    altAbbr: ['Mont'],
    uscg: 'MT',
  },
  {
    name: 'Nebraska',
    usps: 'NE',
    demonym: 'Nebraskan',
    iso: 'US-NE',
    altAbbr: ['Nebr', 'Neb'],
    uscg: 'NB',
  },
  {
    name: 'Nevada',
    usps: 'NV',
    demonym: 'Nevadan',
    iso: 'US-NV',
    altAbbr: ['Nev'],
    uscg: 'NV',
  },
  {
    name: 'New Hampshire',
    usps: 'NH',
    demonym: 'New Hampshirite',
    iso: 'US-NH',
    altAbbr: [],
    uscg: 'NH',
  },
  {
    name: 'New Jersey',
    usps: 'NJ',
    demonym: 'New Jerseyan',
    iso: 'US-NJ',
    altAbbr: ['N Jersey'],
    uscg: 'NJ',
  },
  {
    name: 'New Mexico',
    usps: 'NM',
    demonym: 'New Mexican',
    iso: 'US-NM',
    altAbbr: ['N Mex', 'New M'],
    uscg: 'NM',
  },
  {
    name: 'New York',
    usps: 'NY',
    demonym: 'New Yorker',
    iso: 'US-NY',
    altAbbr: ['N York'],
    uscg: 'NY',
  },
  {
    name: 'North Carolina',
    usps: 'NC',
    demonym: 'North Carolinian',
    iso: 'US-NC',
    altAbbr: ['N Car'],
    uscg: 'NC',
  },
  {
    name: 'North Dakota',
    usps: 'ND',
    demonym: 'North Dakotan',
    iso: 'US-ND',
    altAbbr: ['N Dak', 'NoDak'],
    uscg: 'ND',
  },
  {
    name: 'Ohio',
    usps: 'OH',
    demonym: 'Ohioan',
    iso: 'US-OH',
    altAbbr: ['O'],
    uscg: 'OH',
  },
  {
    name: 'Oklahoma',
    usps: 'OK',
    demonym: 'Oklahoman',
    iso: 'US-OK',
    altAbbr: ['Okla'],
    uscg: 'OK',
  },
  {
    name: 'Oregon',
    usps: 'OR',
    demonym: 'Oregonian',
    iso: 'US-OR',
    altAbbr: ['Ore'],
    uscg: 'OR',
  },
  {
    name: 'Pennsylvania',
    usps: 'PA',
    demonym: 'Pennsylvanian',
    iso: 'US-PA',
    altAbbr: ['Penn', 'Penna'],
    uscg: 'PA',
  },
  {
    name: 'Rhode Island',
    usps: 'RI',
    demonym: 'Rhode Islander',
    iso: 'US-RI',
    altAbbr: ['RI & PP', 'R Isl'],
    uscg: 'RI',
  },
  {
    name: 'South Carolina',
    usps: 'SC',
    demonym: 'South Carolinian',
    iso: 'US-SC',
    altAbbr: ['S Car'],
    uscg: 'SC',
  },
  {
    name: 'South Dakota',
    usps: 'SD',
    demonym: 'South Dakotan',
    iso: 'US-SD',
    altAbbr: ['S Dak', 'SoDak'],
    uscg: 'SD',
  },
  {
    name: 'Tennessee',
    usps: 'TN',
    demonym: 'Tennessean',
    iso: 'US-TN',
    altAbbr: ['Tenn'],
    uscg: 'TN',
  },
  {
    name: 'Texas',
    usps: 'TX',
    demonym: 'Texan',
    iso: 'US-TX',
    altAbbr: ['Tex'],
    uscg: 'TX',
  },
  {
    name: 'Utah',
    usps: 'UT',
    demonym: 'Utahn',
    iso: 'US-UT',
    altAbbr: [],
    uscg: 'UT',
  },
  {
    name: 'Vermont',
    usps: 'VT',
    demonym: 'Vermonter',
    iso: 'US-VT',
    altAbbr: [],
    uscg: 'VT',
  },
  {
    name: 'Virginia',
    usps: 'VA',
    demonym: 'Virginian',
    iso: 'US-VA',
    altAbbr: ['Virg'],
    uscg: 'VA',
  },
  {
    name: 'Washington',
    usps: 'WA',
    demonym: 'Washingtonian',
    iso: 'US-WA',
    altAbbr: ['Wash', 'Wn'],
    uscg: 'WN',
  },
  {
    name: 'West Virginia',
    usps: 'WV',
    demonym: 'West Virginian',
    iso: 'US-WV',
    altAbbr: ['W Va', 'W Virg'],
    uscg: 'WV',
  },
  {
    name: 'Wisconsin',
    usps: 'WI',
    demonym: 'Wisconsinite',
    iso: 'US-WI',
    altAbbr: ['Wis', 'Wisc'],
    uscg: 'WS',
  },
  {
    name: 'Wyoming',
    usps: 'WY',
    demonym: 'Wyomingite',
    iso: 'US-WY',
    altAbbr: ['Wyo'],
    uscg: 'WY',
  },
  {
    name: 'American Samoa',
    usps: 'AS',
    demonym: 'American Samoan',
    iso: 'US-AS',
    altAbbr: [],
    uscg: 'AS',
  },
  {
    name: 'Guam',
    usps: 'GU',
    demonym: 'Guamanian',
    iso: 'US-GU',
    altAbbr: [],
    uscg: 'GU',
  },
  {
    name: 'Northern Mariana Islands',
    usps: 'MP',
    demonym: 'Mariana Islander',
    iso: 'US-MP',
    altAbbr: ['CNMI'],
    uscg: 'CM',
  },
  {
    name: 'Puerto Rico',
    usps: 'PR',
    demonym: 'Puerto Rican',
    iso: 'US-PR',
    altAbbr: [],
    uscg: 'PR',
  },
  {
    name: 'US Virgin Islands',
    usps: 'VI',
    demonym: 'Virgin Islander',
    iso: 'US-VI',
    altAbbr: ['USVI'],
    uscg: 'VI',
  },
  {
    name: 'US Minor Outlying Islands',
    usps: 'UM',
    demonym: '',
    iso: 'US-UM',
    altAbbr: [],
    uscg: 'UM',
  },
]

module.exports = (() => {
  const main = state => {
    if (!state) return list
    state = state.split('.').join('')
    const found = list.find(
      item =>
        item.name.toUpperCase() === state.toUpperCase() ||
        item.usps.toUpperCase() === state.toUpperCase() ||
        item.altAbbr.find(st => st.toUpperCase() === state.toUpperCase()),
    )
    if (found) return found

    return 'No state found!'
  }

  main.abbr = state => {
    if (!state) return 'Please pass a full state name as your argument'
    const found = list.find(
      item => item.name.toUpperCase() === state.toUpperCase(),
    )
    if (found) return found.usps
    return 'No abbreviation found with that state name'
  }

  main.fullName = abbr => {
    if (!abbr) return 'Please pass an abbreviation as your argument'
    const found = list.find(
      item =>
        item.usps.toUpperCase() === abbr.toUpperCase() ||
        item.altAbbr.find(st => st.toUpperCase() === abbr.toUpperCase()),
    )
    if (found) return found.name
    return 'No state found with that abbreviation'
  }

  main.only50 = () => {
    const notStates = ['DC', 'AS', 'GU', 'MP', 'PR', 'VI', 'UM']
    return list.filter(item => !notStates.includes(item.usps))
  }

  main.demonym = state => {
    if (!state)
      return 'Please pass a state name or abbreviation as your argument'
    const found = list.find(
      item =>
        item.name.toUpperCase() === state.toUpperCase() ||
        item.usps.toUpperCase() === state.toUpperCase() ||
        item.altAbbr.find(st => st.toUpperCase() === state.toUpperCase()),
    )
    if (found) return found.demonym
    return 'No demonym found for that state'
  }

  return main
})()
