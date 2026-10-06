/**
 * DRONGO — Institutional Wildlife & Nature Visual Storytelling
 * MAPROOM Module — Geospatial Wildlife Cartography & State Field Archives
 * Version 1.1.0
 */

(function () {
  'use strict';

  const MAPROOM_STORAGE_KEY = 'drongo_maproom_dispatches_v1';

  // Comprehensive Database of Indian States & Wildlife/Heritage Archives
  const STATES_DATA = {
    'bihar': {
      id: 'bihar',
      code: 'IN-BR',
      name: 'Bihar',
      tagline: 'The Prehistoric Gangetic Basin & Terai Foothills',
      emblemTitle: 'Official State Seal of Bihar',
      emblemDescription: 'The sacred Bodhi Tree flanked by two Swastikas and prayer beads, representing ancient wisdom and spiritual heritage.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of Bihar">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <path d="M50 78 L50 42 M50 42 C42 34 30 38 32 52 M50 42 C58 34 70 38 68 52 M50 36 C44 26 36 26 40 18 M50 36 C56 26 64 26 60 18" stroke="#C5A059" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="50" cy="18" r="4.5" fill="#C5A059"/>
        <circle cx="34" cy="24" r="3" fill="#C5A059"/>
        <circle cx="66" cy="24" r="3" fill="#C5A059"/>
        <circle cx="26" cy="38" r="3.5" fill="#C5A059"/>
        <circle cx="74" cy="38" r="3.5" fill="#C5A059"/>
        <rect x="25" y="78" width="50" height="5" rx="2.5" fill="#C5A059"/>
        <text x="50" y="92" font-size="6.5" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">BIHAR</text>
      </svg>`,
      biome: 'Gangetic Alluvial Floodplains & Himalayan Foothill Sal Corridors',
      touristSpots: [
        {
          id: 'spot-br-nalanda',
          name: 'Nalanda Mahavihara Archaeological Enclave',
          subName: 'Ancient World Heritage Monastic University & Stupa Complex',
          imageUrl: 'assets/images/nalanda_ruins.jpg',
          description: 'A UNESCO World Heritage archaeological excavation dating back to the 5th century CE. Nalanda was the ancient world\'s premier residential university, hosting over 10,000 scholars across mathematics, astronomy, linguistics, and philosophy.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Arrive at the site between 8:00 AM and 10:00 AM for soft morning side-lighting across the red brick Temple No. 3. Carry a polarizing filter to accentuate the contrast between the ancient terracotta bricks and manicured emerald lawns.'
            },
            {
              author: 'Expedition Naturalist Team',
              isCreator: false,
              date: 'Contributor Note',
              tip: 'Hire official archaeological guides at the entrance to explore the underground monastic meditation cells and the acoustic properties of the lecture courtyards.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-br-valmiki',
          name: 'Valmiki National Park & Tiger Reserve',
          subName: 'Northern Terai Foothill Sal Canopies & Royal Bengal Tiger Corridor',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          description: 'Nestled along the Indo-Nepal border in West Champaran, Valmiki is Bihar\'s crown jewel of big cat conservation. Spanning over 898 sq km of dense sal forests, floodplains, and cane brakes, it connects directly with Nepal\'s Chitwan National Park.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The Madanpur and Manguraha ranges offer the highest tiger and leopard pugmark encounter rates. November to March is ideal. A 400mm-600mm telephoto lens is essential for high-canopy hornbill and flying squirrel documentation.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-br-vikramshila',
          name: 'Vikramshila Gangetic Dolphin Sanctuary',
          subName: 'Protected Freshwater Cetacean Sanctuary along the Holy Ganges',
          imageUrl: 'assets/images/gangetic_dolphin.jpg',
          description: 'Stretching 60 km along the Ganges River from Sultanganj to Kahalgaon in Bhagalpur, this sanctuary was established to preserve the endangered Gangetic Dolphin (Platanista gangetica), the national aquatic animal of India.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Book non-motorized traditional wooden country boats at sunrise near Kahalgaon granite island rocks. Dolphins breach every 60-90 seconds for air; pre-focus at water breaklines with shutter speeds of 1/2000s or faster.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-br-kabar',
          name: 'Kabar Tal (Kanwar Lake) Ramsar Wetland',
          subName: 'Asia\'s Premier Oxbow Lake & Central Asian Flyway Haven',
          imageUrl: 'assets/images/kabar_lotus_flower.jpg',
          description: 'Designated as a Ramsar Wetland of International Importance, Kabar Tal is an ancient oxbow basin formed by the meanderings of the Gandak River. It hosts over 59 migratory bird species travelling along the Central Asian Flyway.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Best visited between December and February when thousands of ferruginous ducks, bar-headed geese, and northern pintails arrive. Carry a spotting scope or telephoto prime.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-br-rajgir',
          name: 'Rajgir Hills & Vulture Peak Wildlife Sanctuary',
          subName: 'Prehistoric Magadha Hills, Hot Springs & Cyclopean Ramparts',
          imageUrl: 'assets/images/gharial_gandak.jpg',
          description: 'A serene valley surrounded by five rugged hills, Rajgir was the historic first capital of the Magadha Empire. The sanctuary protects hill slope deciduous forests, thermal sulfur springs, and rare birds of prey.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Trek the Gridhrakuta (Vulture Peak) stone trail at sunrise for panoramic valley vistas and raptor thermal soaring observations.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-br-1',
          name: 'Gangetic River Dolphin',
          scientific: 'Platanista gangetica',
          type: 'State Aquatic Animal • Mammal',
          imageUrl: 'assets/images/gangetic_dolphin.jpg',
          notes: 'Blind freshwater cetacean that navigates the silty Ganges through ultrasonic echolocation. Critical indicator of freshwater river health.',
          sightings: []
        },
        {
          id: 'spec-br-2',
          name: 'House Sparrow',
          scientific: 'Passer domesticus',
          type: 'State Bird • Avian',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Beloved urban and agricultural companion bird, declared the official state bird to inspire community nest-box conservation.',
          sightings: []
        },
        {
          id: 'spec-br-3',
          name: 'Gaur / Indian Bison',
          scientific: 'Bos gaurus',
          type: 'State Animal • Mammal',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'The world\'s largest extant bovine species, inhabiting the dense foothill grasslands and moist deciduous valleys of Valmiki Tiger Reserve.',
          sightings: []
        },
        {
          id: 'spec-br-4',
          name: 'Kachnar Flower',
          scientific: 'Bauhinia variegata',
          type: 'State Flower • Botanical',
          imageUrl: 'assets/images/peach_hibiscus_flower.jpg',
          notes: 'Splendid magenta-and-white orchid-like floral blooms of the mountain ebony tree, blooming abundantly across Bihar in late winter and spring.',
          sightings: []
        },
        {
          id: 'spec-br-5',
          name: 'Sacred Peepal / Bodhi Tree',
          scientific: 'Ficus religiosa',
          type: 'State Tree • Botanical',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          notes: 'Sacred fig tree with characteristic cordate leaves and tapering drip-tips. Renowned globally as the tree under which Gautama Buddha attained enlightenment.',
          sightings: []
        },
        {
          id: 'spec-br-6',
          name: 'Greater Adjutant Stork',
          scientific: 'Leptoptilos dubius',
          type: 'Endangered Stork • Avian',
          imageUrl: 'assets/images/adjutant_stork.jpg',
          notes: 'One of the rarest storks in the world. Bihar\'s Bhagalpur and Kosi floodplains support the world\'s second largest breeding colony.',
          sightings: []
        },
        {
          id: 'spec-br-7',
          name: 'Gharial (Fish-Eating Crocodile)',
          scientific: 'Gavialis gangeticus',
          type: 'Critically Endangered • Reptile',
          imageUrl: 'assets/images/gharial_gandak.jpg',
          notes: 'Ancient long-snouted crocodilian specializing in riverine fish predation. The Gandak River supports a thriving natural breeding population.',
          sightings: []
        },
        {
          id: 'spec-br-8',
          name: 'Sarus Crane',
          scientific: 'Antigone antigone',
          type: 'Wetland Crane • Avian',
          imageUrl: 'assets/images/sarus_crane.jpg',
          notes: 'The tallest flying bird in the world, renowned for lifelong monogamous mating pairs and graceful courtship dances across agricultural marshlands.',
          sightings: []
        },
        {
          id: 'spec-br-9',
          name: 'Indian Skimmer',
          scientific: 'Rynchops albicollis',
          type: 'Vulnerable Skimmer • Avian',
          imageUrl: 'assets/images/indian_skimmer.jpg',
          notes: 'Specialized riverine bird with an elongated lower mandible used to skim water surfaces for small fish. Breeds on undisturbed seasonal sandbars.',
          sightings: []
        },
        {
          id: 'spec-br-10',
          name: 'Black Drongo (King Crow)',
          scientific: 'Dicrurus macrocercus',
          type: 'Apex Aerial Insectivore • Avian',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Fearless glossy black passerine with a deeply forked tail, famous for aggressive territorial mobbing of large raptors and Drongo brand emblem.',
          sightings: []
        }
      ]
    },

    'assam': {
      id: 'assam',
      code: 'IN-AS',
      name: 'Assam',
      tagline: 'The Brahmaputra Valley & Primeval Rhino Sanctuaries',
      emblemTitle: 'Official State Seal of Assam',
      emblemDescription: 'The sacred one-horned rhinoceros surrounded by lush tea leaves and the eternal flow of the Brahmaputra.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of Assam">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <path d="M28 62 C34 50 48 48 58 52 C68 50 78 54 82 66 L78 74 L24 74 Z" fill="#C5A059"/>
        <circle cx="78" cy="52" r="3.5" fill="#C5A059"/>
        <path d="M72 48 L78 40 L84 48 Z" fill="#C5A059"/>
        <text x="50" y="90" font-size="7" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">ASSAM</text>
      </svg>`,
      biome: 'Brahmaputra Alluvial Grasslands, Wet Evergreen & Semi-Evergreen Rainforests',
      touristSpots: [
        {
          id: 'spot-as-kaziranga',
          name: 'Kaziranga National Park',
          subName: 'World Heritage Sanctuary of the Great Indian One-Horned Rhinoceros',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          description: 'A UNESCO World Heritage site hosting two-thirds of the world\'s great one-horned rhinoceros population, alongside tigers, elephants, wild water buffalo, and swamp deer.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The Central (Kohora) and Western (Bagori) ranges provide exceptional close-range rhino and buffalo sightings. An early morning elephant safari at 5:30 AM offers misty low-angle photography.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-as-manas',
          name: 'Manas National Park & Biosphere',
          subName: 'Pristine Himalayan Foothills & Golden Langur Sanctuary',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          description: 'Spanning across the Manas River along Bhutan\'s border, this biosphere reserve is home to rare species such as the pygmy hog, hispid hare, and golden langur.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Take a boat safari down the crystal-clear Manas River for high-altitude riverine birding including the endangered white-bellied heron.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-as-majuli',
          name: 'Majuli River Island & Satras',
          subName: 'World\'s Largest Inhabited River Island & Neo-Vaishnavite Culture',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'Cradled in the Brahmaputra River, Majuli is the cultural heartland of Assam, famous for 15th-century Satra monasteries, handloom weaving, and seasonal migratory flyways.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Visit during November during the Raas Mahotsav. Rent a bicycle to navigate village bamboo bridges and spot river lapwings and spot-billed pelicans.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-as-1',
          name: 'Great Indian One-Horned Rhinoceros',
          scientific: 'Rhinoceros unicornis',
          type: 'State Animal • Mammal',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Armor-plated pachyderm with a single keratin horn, thriving in alluvial elephant grass wetlands.',
          sightings: []
        },
        {
          id: 'spec-as-2',
          name: 'White-Winged Wood Duck',
          scientific: 'Asarcornis scutulata',
          type: 'State Bird • Avian',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Elusive rainforest duck inhabiting dense tropical forest hollows and secluded pools.',
          sightings: []
        },
        {
          id: 'spec-as-3',
          name: 'Foxtail Orchid (Kopou Phool)',
          scientific: 'Rhynchostylis retusa',
          type: 'State Flower • Botanical',
          imageUrl: 'assets/images/peach_hibiscus_flower.jpg',
          notes: 'Iconic pink-and-white cylindrical orchid clusters, deeply tied to Assamese Bihu festival celebrations.',
          sightings: []
        },
        {
          id: 'spec-as-4',
          name: 'Hollong Tree',
          scientific: 'Dipterocarpus retusus',
          type: 'State Tree • Botanical',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          notes: 'Towering rainforest canopy tree reaching up to 45 meters, forming the backbone of Upper Assam rainforests.',
          sightings: []
        },
        {
          id: 'spec-as-5',
          name: 'Golden Langur',
          scientific: 'Trachypithecus geei',
          type: 'Endangered Primate • Mammal',
          imageUrl: 'assets/images/pug_dog_portrait.jpg',
          notes: 'Striking golden-coated arboreal primate restricted to narrow forest belts between the Manas and Sankosh rivers.',
          sightings: []
        },
        {
          id: 'spec-as-6',
          name: 'Pygmy Hog',
          scientific: 'Porcula salvania',
          type: 'Critically Endangered • Mammal',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'The world\'s smallest wild suid, measuring barely 25 cm tall, surviving exclusively in dense tall alluvial grasslands.',
          sightings: []
        },
        {
          id: 'spec-as-7',
          name: 'Western Hoolock Gibbon',
          scientific: 'Hoolock hoolock',
          type: 'Only Indian Ape • Mammal',
          imageUrl: 'assets/images/expedition_lead.jpg',
          notes: 'India\'s sole tailless ape species, renowned for haunting morning vocal duets across the Gibbon Wildlife Sanctuary canopy.',
          sightings: []
        },
        {
          id: 'spec-as-8',
          name: 'Wild Water Buffalo',
          scientific: 'Bubalus arnee',
          type: 'Megaherbivore • Mammal',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Massive bovines possessing the largest horn-spread of any living mammal, roaming Kaziranga marshlands.',
          sightings: []
        },
        {
          id: 'spec-as-9',
          name: 'Black-Breasted Parrotbill',
          scientific: 'Paradoxornis flavirostris',
          type: 'Specialized Grassland • Avian',
          imageUrl: 'assets/images/sarus_crane.jpg',
          notes: 'Specialist bamboo and elephant-grass bird with a distinctive parrot-like golden beak, endemic to the Brahmaputra floodplain.',
          sightings: []
        },
        {
          id: 'spec-as-10',
          name: 'River Tern',
          scientific: 'Sterna aurantia',
          type: 'Riverine Colonial • Avian',
          imageUrl: 'assets/images/indian_skimmer.jpg',
          notes: 'Graceful black-capped river tern nesting in sandy river islands along the mighty Brahmaputra.',
          sightings: []
        }
      ]
    },

    'west_bengal': {
      id: 'west_bengal',
      code: 'IN-WB',
      name: 'West Bengal',
      tagline: 'The Sundarbans Mangrove Delta & Eastern Himalayas',
      emblemTitle: 'Official State Emblem of West Bengal',
      emblemDescription: 'The Biswa Bangla globe crest encircled by the sacred national emblem.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of West Bengal">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <circle cx="50" cy="46" r="24" fill="none" stroke="#C5A059" stroke-width="2.5"/>
        <path d="M36 46 Q50 30 64 46 Q50 62 36 46 Z" fill="#C5A059" opacity="0.8"/>
        <text x="50" y="88" font-size="6" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">WEST BENGAL</text>
      </svg>`,
      biome: 'Sundarbans Tidal Mangrove Delta, Dooars Floodplains & Himalayan Cloud Forests',
      touristSpots: [
        {
          id: 'spot-wb-sundarbans',
          name: 'Sundarbans Mangrove Biosphere Reserve',
          subName: 'World\'s Largest Halophytic Mangrove Forest & Tidal Tiger Realm',
          imageUrl: 'assets/images/sundarbans_tiger.jpg',
          description: 'A UNESCO World Heritage mangrove labyrinth spanning the mouth of the Ganges and Brahmaputra, home to swimming Royal Bengal Tigers, saltwater crocodiles, and mudskippers.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Safaris are exclusively boat-based. Embark from Godkhali. Watch the tidal mudbanks closely during low tide when tigers come to cross channels and swim between islands.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-wb-singalila',
          name: 'Singalila National Park (Darjeeling)',
          subName: 'High-Altitude Himalayan Ridge & Red Panda Habitat',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'Perched along the Singalila Ridge with commanding panoramic views of Mount Everest and Kangchenjunga, this misty rhododendron park is India\'s prime red panda conservation area.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'April and May offer exploding scarlet rhododendron blooms. October to December offers crystal clear Himalayan mountain views. Engage local Sherpa trackers for red panda sightings.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-wb-1',
          name: 'Royal Bengal Tiger',
          scientific: 'Panthera tigris tigris',
          type: 'Mangrove Apex Predator • Mammal',
          imageUrl: 'assets/images/sundarbans_tiger.jpg',
          notes: 'Specialized mangrove tiger that drinks saline water and swims across broad tidal channels.',
          sightings: []
        },
        {
          id: 'spec-wb-2',
          name: 'Fishing Cat',
          scientific: 'Prionailurus viverrinus',
          type: 'State Animal • Mammal',
          imageUrl: 'assets/images/ginger_white_cat.jpg',
          notes: 'Nocturnal wetland feline with webbed paws specialized for swimming and fishing in marshes.',
          sightings: []
        },
        {
          id: 'spec-wb-3',
          name: 'White-Throated Kingfisher',
          scientific: 'Halcyon smyrnensis',
          type: 'State Bird • Avian',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Brilliant turquoise and chocolate-brown kingfisher prominent across riverbanks and wetlands.',
          sightings: []
        },
        {
          id: 'spec-wb-4',
          name: 'Night-Flowering Jasmine (Shephali)',
          scientific: 'Nyctanthes arbor-tristis',
          type: 'State Flower • Botanical',
          imageUrl: 'assets/images/periwinkle_flower_art.jpg',
          notes: 'Intensely fragrant white blossom with an orange-red central tube, opening at dusk.',
          sightings: []
        },
        {
          id: 'spec-wb-5',
          name: 'Chatim Tree (Devil\'s Tree)',
          scientific: 'Alstonia scholaris',
          type: 'State Tree • Botanical',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          notes: 'Revered evergreen tree with whorled leaves; traditionally used in Santiniketan convocation ceremonies.',
          sightings: []
        },
        {
          id: 'spec-wb-6',
          name: 'Red Panda',
          scientific: 'Ailurus fulgens',
          type: 'Endangered Montane • Mammal',
          imageUrl: 'assets/images/pug_dog_portrait.jpg',
          notes: 'Arboreal bamboo feeder inhabiting the temperate misty cloud forests of Singalila and Neora Valley.',
          sightings: []
        },
        {
          id: 'spec-wb-7',
          name: 'Bengal Florican',
          scientific: 'Houbaropsis bengalensis',
          type: 'Critically Endangered • Avian',
          imageUrl: 'assets/images/sarus_crane.jpg',
          notes: 'Rare bustard renowned for spectacular acrobatic aerial jumping displays during mating season.',
          sightings: []
        },
        {
          id: 'spec-wb-8',
          name: 'Himalayan Salamander',
          scientific: 'Tylototriton verrucosus',
          type: 'Rare Tailed Amphibian',
          imageUrl: 'assets/images/gharial_gandak.jpg',
          notes: 'Primitive knobby newt surviving in isolated high-altitude wetlands around Darjeeling and Jorepokhri.',
          sightings: []
        },
        {
          id: 'spec-wb-9',
          name: 'Rufous-Necked Hornbill',
          scientific: 'Aceros nipalensis',
          type: 'Subtropical Canopy • Avian',
          imageUrl: 'assets/images/paradise_flycatcher.jpg',
          notes: 'Large vulnerable frugivore found in the pristine broadleaf montane canopies of Mahananda.',
          sightings: []
        },
        {
          id: 'spec-wb-10',
          name: 'Saltwater Crocodile',
          scientific: 'Crocodylus porosus',
          type: 'Estuarine Apex Reptile',
          imageUrl: 'assets/images/gharial_gandak.jpg',
          notes: 'The largest living reptile on Earth, patrolling tidal estuaries and mudbanks in Sundarbans.',
          sightings: []
        }
      ]
    },

    'madhya_pradesh': {
      id: 'madhya_pradesh',
      code: 'IN-MP',
      name: 'Madhya Pradesh',
      tagline: 'Heart of India & The Great Central Sal Tiger Corridors',
      emblemTitle: 'Official State Seal of Madhya Pradesh',
      emblemDescription: 'The Lion Capital surrounded by 24 Stupa petals with ears of wheat and paddy.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of Madhya Pradesh">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <circle cx="50" cy="48" r="28" fill="none" stroke="#C5A059" stroke-width="2" stroke-dasharray="4,3"/>
        <path d="M42 66 L50 36 L58 66 Z" fill="#C5A059"/>
        <text x="50" y="88" font-size="6" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">MADHYA PRADESH</text>
      </svg>`,
      biome: 'Central Indian Teak-Sal Deciduous Plateaus & Vindhya-Satpura Corridors',
      touristSpots: [
        {
          id: 'spot-mp-kanha',
          name: 'Kanha Tiger Reserve',
          subName: 'The Land of the Jungle Book & Central Meadows',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          description: 'Sprawling sal and bamboo forests interspersed with open rolling meadows, world-famous for saving the hardground barasingha (swamp deer) from extinction.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The Kanha and Mukki safari zones offer unmatched morning light over the meadows. Keep an eye out for dhole packs hunting along the meadow edges.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-mp-bandhavgarh',
          name: 'Bandhavgarh National Park',
          subName: 'Ancient Fortress Hills & Highest Tiger Density',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          description: 'Surrounding an ancient 2,000-year-old hill fortress, Bandhavgarh holds one of the highest densities of Royal Bengal Tigers in the world.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Tala zone offers iconic tiger sightings amidst ancient stone statues of reclining Vishnu (Shesh Shaiya). Book afternoon safaris for prime waterhole activity.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-mp-1',
          name: 'Barasingha (Swamp Deer)',
          scientific: 'Rucervus duvaucelii branderi',
          type: 'State Animal • Mammal',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Twelve-tined deer endemic to the sal meadows of Kanha, rescued from near extinction through dedicated breeding enclaves.',
          sightings: []
        },
        {
          id: 'spec-mp-2',
          name: 'Asian Paradise Flycatcher',
          scientific: 'Terpsiphone paradisi',
          type: 'State Bird • Avian',
          imageUrl: 'assets/images/paradise_flycatcher.jpg',
          notes: 'Graceful avian known as "Dudhraj", males boast snow-white plumage and dramatic streaming ribbon tail feathers.',
          sightings: []
        },
        {
          id: 'spec-mp-3',
          name: 'Palash / Flame of the Forest',
          scientific: 'Butea monosperma',
          type: 'State Flower • Botanical',
          imageUrl: 'assets/images/peach_hibiscus_flower.jpg',
          notes: 'Fiery vermilion-orange blossoms that set Central Indian hills ablaze each spring.',
          sightings: []
        },
        {
          id: 'spec-mp-4',
          name: 'Banyan Tree',
          scientific: 'Ficus benghalensis',
          type: 'State Tree • Botanical',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          notes: 'Vast national tree producing extensive aerial prop roots, supporting immense canopy biodiversity.',
          sightings: []
        },
        {
          id: 'spec-mp-5',
          name: 'Royal Bengal Tiger',
          scientific: 'Panthera tigris tigris',
          type: 'Apex Carnivore • Mammal',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          notes: 'Madhya Pradesh is the recognized "Tiger State of India", hosting over 780 wild tigers across six prime reserves.',
          sightings: []
        },
        {
          id: 'spec-mp-6',
          name: 'Indian Leopard',
          scientific: 'Panthera pardus fusca',
          type: 'Solitary Felid • Mammal',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Master of camouflage and stealth, thriving on teak rocky ridges and sal ravines.',
          sightings: []
        },
        {
          id: 'spec-mp-7',
          name: 'Indian Wolf',
          scientific: 'Canis lupus pallipes',
          type: 'Grassland Canid • Mammal',
          imageUrl: 'assets/images/pug_dog_portrait.jpg',
          notes: 'Slender desert and scrub wolf pack predator traversing open scrublands of Nauradehi.',
          sightings: []
        },
        {
          id: 'spec-mp-8',
          name: 'Sloth Bear',
          scientific: 'Melursus ursinus',
          type: 'Myrmecophage Ursid • Mammal',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Shaggy black bear specialized in excavating subterranean termite colonies and feasting on mahua blossoms.',
          sightings: []
        },
        {
          id: 'spec-mp-9',
          name: 'Forest Owlet',
          scientific: 'Athene blewitti',
          type: 'Critically Endangered • Avian',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Rediscovered rare diurnal owlet hunting lizards and insects in dry teak deciduous forests.',
          sightings: []
        },
        {
          id: 'spec-mp-10',
          name: 'Malabar Pied Hornbill',
          scientific: 'Anthracoceros coronatus',
          type: 'Riverine Frugivore • Avian',
          imageUrl: 'assets/images/indian_skimmer.jpg',
          notes: 'Conspicuous black and white hornbill nesting in old tree hollows along central Indian river corridors.',
          sightings: []
        }
      ]
    },

    'kerala': {
      id: 'kerala',
      code: 'IN-KL',
      name: 'Kerala',
      tagline: 'The Western Ghats Biodiversity Hotspot & Backwaters',
      emblemTitle: 'Official State Emblem of Kerala',
      emblemDescription: 'Two majestic Asian elephants guarding the sacred Conch Shell and the Ashoka Lion Capital.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of Kerala">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <path d="M30 68 C24 50 36 36 44 48 M70 68 C76 50 64 36 56 48" stroke="#C5A059" stroke-width="3" fill="none"/>
        <circle cx="50" cy="46" r="6" fill="#C5A059"/>
        <text x="50" y="88" font-size="7" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">KERALA</text>
      </svg>`,
      biome: 'Tropical Wet Evergreen Rainforests, Shola-Grassland High-Ranges & Lagoons',
      touristSpots: [
        {
          id: 'spot-kl-periyar',
          name: 'Periyar Tiger Reserve',
          subName: 'Cardamom Hills & Lake Sanctuary',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          description: 'Spanning high across the Western Ghats around a scenic reservoir, Periyar is famed for wild elephant herds swimming in the lake.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The bamboo rafting and walking jungle patrols offer the most intimate encounters with lion-tailed macaques and malabar giant squirrels.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-kl-silent-valley',
          name: 'Silent Valley National Park',
          subName: 'Last Undisturbed Tropical Rainforest of the Western Ghats',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'A pristine wilderness in the Kundali Hills with zero cicada chirping, saving India\'s most viable wild population of the endangered Lion-Tailed Macaque.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Trek with indigenous forest department tribal guides towards the Kunthi River suspension bridge. Carry leech socks during monsoon.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-kl-1',
          name: 'Indian Elephant',
          scientific: 'Elephas maximus indicus',
          type: 'State Animal • Mammal',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Revered symbol of Kerala\'s rainforest ecosystem and cultural pageantry.',
          sightings: []
        },
        {
          id: 'spec-kl-2',
          name: 'Great Indian Hornbill',
          scientific: 'Buceros bicornis',
          type: 'State Bird • Avian',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Gigantic canopy frugivore boasting a golden-yellow concave casque atop its massive beak.',
          sightings: []
        },
        {
          id: 'spec-kl-3',
          name: 'Kanikonna (Golden Shower Tree)',
          scientific: 'Cassia fistula',
          type: 'State Flower • Botanical',
          imageUrl: 'assets/images/peach_hibiscus_flower.jpg',
          notes: 'Cascading pendulous yellow floral racemes that bloom triumphantly for the Vishu festival.',
          sightings: []
        },
        {
          id: 'spec-kl-4',
          name: 'Coconut Palm',
          scientific: 'Cocos nucifera',
          type: 'State Tree • Botanical',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          notes: 'The iconic palm tree from which Kerala ("Land of Coconuts") derives its ancient etymology.',
          sightings: []
        },
        {
          id: 'spec-kl-5',
          name: 'Pearl Spot (Karimeen)',
          scientific: 'Etroplus suratensis',
          type: 'State Fish • Aquatic',
          imageUrl: 'assets/images/gangetic_dolphin.jpg',
          notes: 'Diamond-shaped brackish water cichlid inhabiting the lush palm-fringed backwater canals.',
          sightings: []
        },
        {
          id: 'spec-kl-6',
          name: 'Lion-Tailed Macaque',
          scientific: 'Macaca silenus',
          type: 'Endangered Rainforest Primate',
          imageUrl: 'assets/images/pug_dog_portrait.jpg',
          notes: 'Arboreal black macaque with a silver-white mane and lion-like tufted tail, restricted to rainforest canopies.',
          sightings: []
        },
        {
          id: 'spec-kl-7',
          name: 'Nilgiri Tahr',
          scientific: 'Nilgiritragus hylocrius',
          type: 'Endemic Mountain Ungulate',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Stocky wild goat inhabiting high-elevation shola-grassland precipices in Eravikulam National Park.',
          sightings: []
        },
        {
          id: 'spec-kl-8',
          name: 'Malabar Giant Squirrel',
          scientific: 'Ratufa indica',
          type: 'High-Canopy Rodent',
          imageUrl: 'assets/images/ginger_white_cat.jpg',
          notes: 'Dramatic multi-colored giant squirrel with maroon and deep buff fur leaping across rainforest tree branches.',
          sightings: []
        },
        {
          id: 'spec-kl-9',
          name: 'Malabar Gliding Frog',
          scientific: 'Rhacophorus malabaricus',
          type: 'Rhacophorid Treefrog',
          imageUrl: 'assets/images/jewel_beetle_macro.jpg',
          notes: 'Emerald-green tree frog with crimson webbed feet that glides between forest canopies during breeding season.',
          sightings: []
        },
        {
          id: 'spec-kl-10',
          name: 'Nilgiri Wood Pigeon',
          scientific: 'Columba elphinstonii',
          type: 'Montane Specialist • Avian',
          imageUrl: 'assets/images/paradise_flycatcher.jpg',
          notes: 'Large pigeon with distinctive black-and-white checkered neck pattern, feeding on forest fruits.',
          sightings: []
        }
      ]
    },

    'rajasthan': {
      id: 'rajasthan',
      code: 'IN-RJ',
      name: 'Rajasthan',
      tagline: 'The Thar Desert Biosphere & Aravalli Ridges',
      emblemTitle: 'Official State Emblem of Rajasthan',
      emblemDescription: 'The Ashoka Lion Capital framed by royal chhatris and desert flora.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of Rajasthan">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <path d="M38 64 L50 32 L62 64 Z" fill="#C5A059"/>
        <circle cx="50" cy="26" r="4" fill="#C5A059"/>
        <text x="50" y="88" font-size="6.5" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">RAJASTHAN</text>
      </svg>`,
      biome: 'Thar Arid Scrub, Salt Playas & Aravalli Dry Deciduous Ridges',
      touristSpots: [
        {
          id: 'spot-rj-ranthambore',
          name: 'Ranthambore National Park',
          subName: 'Historic Fortress & Ancient Banyan Tiger Realm',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          description: 'A dramatically rugged sanctuary where royal bengal tigers hunt amidst 10th-century ruined stone fortresses, palaces, and lotus-filled lakes.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Zones 1 through 5 around Rajbagh, Malik Talao, and Padam Talao offer legendary compositions of tigers framed against ancient crumbling chhatris.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-rj-keoladeo',
          name: 'Keoladeo Ghana National Park (Bharatpur)',
          subName: 'World Heritage Bird Sanctuary & Wetland Oasis',
          imageUrl: 'assets/images/sarus_crane.jpg',
          description: 'A world-renowned artificial wetland sanctuary hosting over 370 bird species, including massive colonies of painted storks, spoonbills, and migratory waterfowl.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Hire a cycle rickshaw whose driver is a certified bird guide. Early sunrise by Sapan Mori gives golden backlit shots of heronries.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-rj-1',
          name: 'Chinkara (Indian Gazelle)',
          scientific: 'Gazella bennettii',
          type: 'State Animal (Wild) • Mammal',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Nimble desert gazelle capable of surviving with minimal water intake across arid sand dunes.',
          sightings: []
        },
        {
          id: 'spec-rj-2',
          name: 'Dromedary Camel',
          scientific: 'Camelus dromedarius',
          type: 'State Animal (Domestic) • Mammal',
          imageUrl: 'assets/images/pug_dog_portrait.jpg',
          notes: 'The beloved "Ship of the Desert", culturally vital to Rajasthani nomadic pastoralism.',
          sightings: []
        },
        {
          id: 'spec-rj-3',
          name: 'Great Indian Bustard (Godawan)',
          scientific: 'Ardeotis nigriceps',
          type: 'State Bird • Critically Endangered',
          imageUrl: 'assets/images/sarus_crane.jpg',
          notes: 'One of the heaviest flying birds on Earth, with fewer than 150 individuals remaining in the Thar Desert.',
          sightings: []
        },
        {
          id: 'spec-rj-4',
          name: 'Rohida Flower',
          scientific: 'Tecomella undulata',
          type: 'State Flower • Botanical',
          imageUrl: 'assets/images/peach_hibiscus_flower.jpg',
          notes: 'Desert teak producing brilliant vermilion-orange bell flowers across the arid dunes.',
          sightings: []
        },
        {
          id: 'spec-rj-5',
          name: 'Khejri Tree',
          scientific: 'Prosopis cineraria',
          type: 'State Tree • Botanical',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          notes: 'Hardy desert lifeline tree protected fiercely by the legendary Bishnoi eco-conservation community.',
          sightings: []
        },
        {
          id: 'spec-rj-6',
          name: 'Indian Leopard',
          scientific: 'Panthera pardus fusca',
          type: 'Apex Granite Ridge Felid',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          notes: 'Living in harmony alongside pastoral Rabari herdsmen amidst the dramatic granite boulder caves of Jawai.',
          sightings: []
        },
        {
          id: 'spec-rj-7',
          name: 'White-Footed Desert Fox',
          scientific: 'Vulpes vulpes pusilla',
          type: 'Arid Dune Canid',
          imageUrl: 'assets/images/ginger_white_cat.jpg',
          notes: 'Pale rufous coat and bushy white-tipped tail, hunting jerboas and desert lizards among dunes.',
          sightings: []
        },
        {
          id: 'spec-rj-8',
          name: 'Demoiselle Crane (Koonj)',
          scientific: 'Grus virgo',
          type: 'Migratory Steppe Avian',
          imageUrl: 'assets/images/sarus_crane.jpg',
          notes: 'Thousands flock to the village of Kheechan every winter, fed religiously by local Jain residents.',
          sightings: []
        },
        {
          id: 'spec-rj-9',
          name: 'Asiatic Wildcat',
          scientific: 'Felis lybica ornata',
          type: 'Spotted Desert Felid',
          imageUrl: 'assets/images/ginger_white_cat.jpg',
          notes: 'Small grey-coated wildcat decorated with black spots, stalking rodents across thorny scrub.',
          sightings: []
        },
        {
          id: 'spec-rj-10',
          name: 'Indian Spiny-Tailed Lizard',
          scientific: 'Saara hardwickii',
          type: 'Herbivorous Desert Reptile',
          imageUrl: 'assets/images/gharial_gandak.jpg',
          notes: 'Docile burrow-dwelling lizard with a spiny defensive tail, crucial food source for raptors.',
          sightings: []
        }
      ]
    },

    'uttarakhand': {
      id: 'uttarakhand',
      code: 'IN-UK',
      name: 'Uttarakhand',
      tagline: 'The Garhwal & Kumaon Himalayan Cloud Valleys',
      emblemTitle: 'Official State Emblem of Uttarakhand',
      emblemDescription: 'The mountain peaks of the Himalayas with the four sacred streams of Ganga.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of Uttarakhand">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <path d="M26 66 L38 42 L50 56 L62 36 L74 66 Z" fill="#C5A059"/>
        <line x1="26" y1="72" x2="74" y2="72" stroke="#C5A059" stroke-width="2"/>
        <text x="50" y="88" font-size="6" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">UTTARAKHAND</text>
      </svg>`,
      biome: 'Alpine Meadows (Bugyals), Subalpine Conifer Ridges & Terai Foothills',
      touristSpots: [
        {
          id: 'spot-uk-corbett',
          name: 'Jim Corbett National Park',
          subName: 'India\'s Oldest National Park & Ramganga River Basin',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          description: 'Established in 1936 as Hailey National Park, Corbett is renowned for its picturesque foothills, Ramganga river pools, wild elephant herds, and Royal Bengal Tigers.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Book Dhikala forest lodge stay inside the core zone. The Sambhar road and Ramganga river banks at dusk provide unmatched lighting for tiger reflections.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-uk-valley-flowers',
          name: 'Valley of Flowers National Park',
          subName: 'UNESCO High-Altitude Floral Bugyal & Bhyundar Valley',
          imageUrl: 'assets/images/kabar_lotus_flower.jpg',
          description: 'A vibrant high-altitude Himalayan valley carpeted with hundreds of endemic alpine wildflower species, surrounded by glistening snow-clad peaks.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Mid-July to mid-August is peak blooming window. Trek early from Ghangaria to catch mist lifting off the Brahma Kamal and blue poppy blooms.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-uk-1',
          name: 'Alpine Musk Deer',
          scientific: 'Moschus chrysogaster',
          type: 'State Animal • Mammal',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Solitary high-altitude ungulate with distinctive elongated canine tusks and musk pods.',
          sightings: []
        },
        {
          id: 'spec-uk-2',
          name: 'Himalayan Monal',
          scientific: 'Lophophorus impejanus',
          type: 'State Bird • Avian',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Magnificent pheasant boasting rainbow metallic iridescent plumage and a peacock-like crest.',
          sightings: []
        },
        {
          id: 'spec-uk-3',
          name: 'Brahma Kamal',
          scientific: 'Saussurea obvallata',
          type: 'State Flower • Botanical',
          imageUrl: 'assets/images/peach_hibiscus_flower.jpg',
          notes: 'Sacred Himalayan thistle blooming at altitudes of 3,700–4,600 m amidst steep screes.',
          sightings: []
        },
        {
          id: 'spec-uk-4',
          name: 'Burans (Rhododendron)',
          scientific: 'Rhododendron arboreum',
          type: 'State Tree • Botanical',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          notes: 'Splendid scarlet-red floral clusters covering Himalayan slopes in early spring.',
          sightings: []
        },
        {
          id: 'spec-uk-5',
          name: 'Golden Mahseer',
          scientific: 'Tor putitora',
          type: 'State Fish • Freshwater',
          imageUrl: 'assets/images/gangetic_dolphin.jpg',
          notes: 'Mighty sporting freshwater fish inhabiting fast-flowing, oxygen-rich Himalayan rivers.',
          sightings: []
        },
        {
          id: 'spec-uk-6',
          name: 'Snow Leopard',
          scientific: 'Panthera uncia',
          type: 'High-Altitude Apex Felid',
          imageUrl: 'assets/images/pug_dog_portrait.jpg',
          notes: 'Ghost of the mountains roaming steep rugged cliffs above the treeline.',
          sightings: []
        },
        {
          id: 'spec-uk-7',
          name: 'Himalayan Tahr',
          scientific: 'Hemitragus jemlahicus',
          type: 'Cliffside Mountain Ungulate',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Sure-footed mountain ungulate with a thick reddish-brown coat and sweeping curved horns.',
          sightings: []
        },
        {
          id: 'spec-uk-8',
          name: 'Lammergeier (Bearded Vulture)',
          scientific: 'Gypaetus barbatus',
          type: 'High-Mountain Scavenger • Avian',
          imageUrl: 'assets/images/adjutant_stork.jpg',
          notes: 'Massive raptor with a 2.8m wingspan specialized in dropping large bones from high cliffs to shatter them.',
          sightings: []
        },
        {
          id: 'spec-uk-9',
          name: 'Cheer Pheasant',
          scientific: 'Catreus wallichii',
          type: 'Vulnerable Montane • Avian',
          imageUrl: 'assets/images/sarus_crane.jpg',
          notes: 'Long-tailed mountain pheasant endemic to steep grass-covered slopes of the western Himalayas.',
          sightings: []
        },
        {
          id: 'spec-uk-10',
          name: 'Blue Sheep (Bharal)',
          scientific: 'Pseudois nayaur',
          type: 'Alpine Meadow Ungulate',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Slate-grey alpine ungulate providing the primary natural prey for wild snow leopards.',
          sightings: []
        }
      ]
    }
  };

  /* --------------------------------------------------------------------------
     State Management
     -------------------------------------------------------------------------- */
  let activeStateKey = 'bihar';
  let activeTabType = 'touristSpots'; // 'touristSpots' or 'floraFauna'
  let maproomDispatches = {};

  // DOM Elements
  let maproomContainer;
  let stateTitleEl;
  let stateTaglineEl;
  let stateBiomeEl;
  let stateEmblemEl;
  let tabTouristBtn;
  let tabFaunaBtn;
  let contentDisplayPane;
  let mapStatePaths;
  let stateSelectChips;

  // Modals for Maproom Contributions
  let spotMediaModal;
  let spotTipModal;
  let sightingModal;

  // Active modal context
  let pendingSpotId = null;
  let pendingSpotName = null;
  let pendingStateName = null;
  let pendingSpeciesId = null;
  let pendingSpeciesName = null;

  /* --------------------------------------------------------------------------
     Initialization
     -------------------------------------------------------------------------- */
  function initMaproom() {
    loadMaproomData();
    cacheDOMElements();
    setupModals();
    bindMaproomEvents();
    renderStateDossier(activeStateKey);
  }

  function loadMaproomData() {
    try {
      const stored = localStorage.getItem(MAPROOM_STORAGE_KEY);
      if (stored) {
        maproomDispatches = JSON.parse(stored);
      } else {
        maproomDispatches = {};
      }
    } catch (e) {
      console.warn('Could not read Maproom data', e);
      maproomDispatches = {};
    }
  }

  function saveMaproomData() {
    try {
      localStorage.setItem(MAPROOM_STORAGE_KEY, JSON.stringify(maproomDispatches));
    } catch (e) {
      console.warn('Could not save Maproom data', e);
    }
  }

  function cacheDOMElements() {
    maproomContainer = document.getElementById('maproom');
    stateTitleEl = document.getElementById('maproomStateTitle');
    stateTaglineEl = document.getElementById('maproomStateTagline');
    stateBiomeEl = document.getElementById('maproomStateBiome');
    stateEmblemEl = document.getElementById('maproomStateEmblem');
    tabTouristBtn = document.getElementById('maproomTabTourist');
    tabFaunaBtn = document.getElementById('maproomTabFauna');
    contentDisplayPane = document.getElementById('maproomContentDisplay');
    mapStatePaths = document.querySelectorAll('.map-state-path');
    stateSelectChips = document.querySelectorAll('.state-chip-btn');
  }

  function renderStateDossier(stateKey) {
    activeStateKey = stateKey;
    const data = STATES_DATA[stateKey] || STATES_DATA['bihar'];

    // Update Header
    if (stateTitleEl) stateTitleEl.textContent = data.name.toUpperCase();
    if (stateTaglineEl) stateTaglineEl.textContent = data.tagline;
    if (stateBiomeEl) stateBiomeEl.textContent = `Biome: ${data.biome}`;
    if (stateEmblemEl) stateEmblemEl.innerHTML = data.emblemSvg;

    // Highlight active state on SVG map
    document.querySelectorAll('.map-state-path').forEach(path => {
      const isSelected = path.getAttribute('data-state') === stateKey;
      path.classList.toggle('active', isSelected);
    });

    // Highlight active chip
    document.querySelectorAll('.state-chip-btn').forEach(chip => {
      const isSelected = chip.getAttribute('data-state') === stateKey;
      chip.classList.toggle('active', isSelected);
    });

    // Render active tab content
    if (activeTabType === 'touristSpots') {
      renderTouristSpots(data);
    } else {
      renderFloraFauna(data);
    }
  }

  function renderTouristSpots(data) {
    if (!contentDisplayPane) return;

    const spots = data.touristSpots || [];

    contentDisplayPane.innerHTML = `
      <div class="maproom-spots-grid">
        ${spots.map(spot => {
          // Merge custom user uploads for this spot from storage
          const customSpotUploads = (maproomDispatches[spot.id]?.uploads) || [];
          const customTips = (maproomDispatches[spot.id]?.tips) || [];
          const allTips = [...spot.tipsAndTricks, ...customTips];

          return `
            <article class="tourist-spot-card" id="${spot.id}">
              <div class="spot-image-wrapper">
                <img src="${spot.imageUrl}" alt="${spot.name}" loading="lazy" onerror="this.src='assets/images/valmiki_tiger.jpg';"/>
                <span class="spot-badge">HERITAGE &amp; WILDLIFE DESTINATION</span>
              </div>

              <div class="spot-body">
                <h3 class="spot-name">${spot.name}</h3>
                <div class="spot-italic-sub"><em>${spot.subName}</em></div>
                <p class="spot-info">${spot.description}</p>

                <!-- Actions: Upload Media & Add Tips -->
                <div class="spot-action-buttons">
                  <button type="button" class="btn-spot-action btn-upload-spot-media" data-spot-id="${spot.id}" data-spot-name="${escapeHtml(spot.name)}" data-state-name="${data.name}">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    <span>+ Add Photos, Videos &amp; Short Film</span>
                  </button>

                  <button type="button" class="btn-spot-action btn-add-spot-tip" data-spot-id="${spot.id}" data-spot-name="${escapeHtml(spot.name)}">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                    <span>+ Share Tips &amp; Tricks</span>
                  </button>
                </div>

                <!-- Tips & Tricks Feed (Highlighting Aadi [Creator]) -->
                <div class="spot-tips-feed">
                  <div class="tips-feed-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    <span>Tips, Tricks &amp; Experience Feed:</span>
                  </div>

                  ${allTips.map(t => {
                    const isCreator = t.isCreator || t.author.toLowerCase().includes('aadi') || t.author.toLowerCase().includes('creator');
                    return `
                      <div class="tip-card ${isCreator ? 'creator-tip' : 'contributor-tip'}">
                        <div class="tip-header">
                          <span class="${isCreator ? 'creator-badge' : 'visitor-badge'}">
                            ${isCreator ? '👑 Aadi [Creator]' : `🌿 ${escapeHtml(t.author)}`}
                          </span>
                          <span class="tip-date">${t.date || 'Field Guide'}</span>
                        </div>
                        <p class="tip-text">${escapeHtml(t.tip)}</p>
                      </div>
                    `;
                  }).join('')}
                </div>

                <!-- Spot Community Uploads Gallery -->
                ${customSpotUploads.length > 0 ? `
                  <div class="spot-custom-uploads">
                    <div class="uploads-feed-title">
                      <span>Recent Dispatches &amp; Media (${customSpotUploads.length}):</span>
                    </div>
                    <div class="mini-uploads-grid">
                      ${customSpotUploads.map(up => `
                        <div class="mini-upload-thumb" title="${escapeHtml(up.title)} by ${escapeHtml(up.author)}">
                          ${up.type === 'video' ? `
                            <video src="${up.url}" controls poster="${up.poster || 'assets/images/gangetic_dolphin.jpg'}"></video>
                          ` : `
                            <img src="${up.url}" alt="${escapeHtml(up.title)}" onerror="this.src='assets/images/nalanda_ruins.jpg';"/>
                          `}
                          <div class="mini-upload-caption">
                            <strong>${escapeHtml(up.title)}</strong>
                            <small>By ${escapeHtml(up.author)}</small>
                          </div>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}

              </div>
            </article>
          `;
        }).join('')}
      </div>
    `;

    // Attach click events to spot action buttons
    contentDisplayPane.querySelectorAll('.btn-upload-spot-media').forEach(btn => {
      btn.addEventListener('click', () => {
        const spotId = btn.getAttribute('data-spot-id');
        const spotName = btn.getAttribute('data-spot-name');
        const stateName = btn.getAttribute('data-state-name');
        openSpotMediaModal(spotId, spotName, stateName);
      });
    });

    contentDisplayPane.querySelectorAll('.btn-add-spot-tip').forEach(btn => {
      btn.addEventListener('click', () => {
        const spotId = btn.getAttribute('data-spot-id');
        const spotName = btn.getAttribute('data-spot-name');
        openSpotTipModal(spotId, spotName);
      });
    });
  }

  function renderFloraFauna(data) {
    if (!contentDisplayPane) return;

    const speciesList = data.floraFauna || [];

    contentDisplayPane.innerHTML = `
      <div class="maproom-fauna-intro">
        <h3 style="font-family: var(--font-display); color: var(--primary-ocean-blue); margin-bottom: 6px;">
          🌿 Indigenous Flora &amp; Fauna of ${data.name} (Top 10 Authentic Species)
        </h3>
        <p style="font-size: 13px; color: var(--text-muted); max-width: 700px; margin: 0 0 16px;">
          Curated botanical specimens, state emblems, endemic mammals, and avian residents verified against Wikipedia &amp; Wildlife Institute of India records. Spot an animal or flower? Record your field sighting and post photos, videos, or reels below!
        </p>
      </div>

      <div class="maproom-fauna-grid">
        ${speciesList.map((spec, index) => {
          const customSightings = (maproomDispatches[spec.id]?.sightings) || [];

          return `
            <article class="fauna-card" id="${spec.id}">
              <div class="fauna-image-wrapper">
                <img src="${spec.imageUrl}" alt="${spec.name}" loading="lazy" onerror="this.src='assets/images/valmiki_tiger.jpg';"/>
                <span class="fauna-rank">#${index + 1}</span>
                <span class="fauna-type-badge">${spec.type}</span>
              </div>

              <div class="fauna-body">
                <h4 class="fauna-name">${spec.name}</h4>
                <div class="fauna-scientific"><em>${spec.scientific}</em></div>
                <p class="fauna-notes">${spec.notes}</p>

                <!-- Post Sighting Button -->
                <button type="button" class="btn-record-sighting" data-species-id="${spec.id}" data-species-name="${escapeHtml(spec.name)}">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                  <span>+ Log Sighting / Post Photo, Video &amp; Reel</span>
                </button>

                <!-- Sightings Feed -->
                ${customSightings.length > 0 ? `
                  <div class="fauna-sightings-feed">
                    <span class="sightings-header">Field Encounters (${customSightings.length}):</span>
                    ${customSightings.map(s => {
                      const isCreator = s.author.toLowerCase().includes('aadi') || s.author.toLowerCase().includes('creator');
                      return `
                        <div class="sighting-item">
                          <div class="sighting-author">
                            <span class="${isCreator ? 'creator-badge' : 'visitor-badge'}">
                              ${isCreator ? '👑 Aadi [Creator]' : `📸 ${escapeHtml(s.author)}`}
                            </span>
                            <small>• ${s.date}</small>
                          </div>
                          <p class="sighting-exp">${escapeHtml(s.experience)}</p>
                          ${s.mediaUrl ? `
                            <div class="sighting-media-preview">
                              ${s.mediaType === 'video' ? `<video src="${s.mediaUrl}" controls></video>` : `<img src="${s.mediaUrl}" alt="Sighting photo" onerror="this.src='assets/images/valmiki_tiger.jpg';"/>`}
                            </div>
                          ` : ''}
                        </div>
                      `;
                    }).join('')}
                  </div>
                ` : ''}

              </div>
            </article>
          `;
        }).join('')}
      </div>
    `;

    // Attach click events to sighting buttons
    contentDisplayPane.querySelectorAll('.btn-record-sighting').forEach(btn => {
      btn.addEventListener('click', () => {
        const specId = btn.getAttribute('data-species-id');
        const specName = btn.getAttribute('data-species-name');
        openSpeciesSightingModal(specId, specName);
      });
    });
  }

  /* --------------------------------------------------------------------------
     User Contributions: Spot Media Upload Modal
     -------------------------------------------------------------------------- */
  function openSpotMediaModal(spotId, spotName, stateName) {
    pendingSpotId = spotId;
    pendingSpotName = spotName;
    pendingStateName = stateName;

    const modal = document.getElementById('maproomSpotMediaModal');
    if (!modal) {
      // Fallback prompt if modal element missing
      const title = prompt(`Enter title for your photo/video at ${spotName} (${stateName}):`, `Field Exploration at ${spotName}`);
      if (!title) return;
      const author = prompt('Your Name / Attribution:', 'Aadi [Creator]');
      if (!author) return;
      const fileUrl = prompt('Enter image or video URL:', 'assets/images/nalanda_ruins.jpg');
      if (!fileUrl) return;

      saveSpotMedia(spotId, title, author, fileUrl, fileUrl.endsWith('.mp4') ? 'video' : 'photo');
      return;
    }

    const titleTarget = document.getElementById('spotMediaModalTarget');
    if (titleTarget) titleTarget.textContent = `${spotName} (${stateName})`;

    const authorInput = document.getElementById('spotMediaAuthor');
    if (authorInput) authorInput.value = 'Aadi [Creator]';

    const titleInput = document.getElementById('spotMediaTitle');
    if (titleInput) titleInput.value = `Expedition Dispatch at ${spotName}`;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function saveSpotMedia(spotId, title, author, mediaUrl, mediaType) {
    if (!maproomDispatches[spotId]) maproomDispatches[spotId] = { uploads: [], tips: [] };
    maproomDispatches[spotId].uploads.unshift({
      title: title.trim(),
      author: author.trim(),
      url: mediaUrl.trim(),
      type: mediaType || 'photo',
      date: new Date().toLocaleDateString()
    });

    saveMaproomData();
    renderStateDossier(activeStateKey);
    showMapToast(`✓ Media added to ${pendingSpotName || 'tourist spot'}!`);
  }

  /* --------------------------------------------------------------------------
     User Contributions: Spot Tips & Tricks Modal
     -------------------------------------------------------------------------- */
  function openSpotTipModal(spotId, spotName) {
    pendingSpotId = spotId;
    pendingSpotName = spotName;

    const modal = document.getElementById('maproomSpotTipModal');
    if (!modal) {
      // Fallback prompt
      const author = prompt(`Your Name / Attribution:`, 'Aadi [Creator]');
      if (!author) return;
      const tip = prompt(`Share your tips, tricks & photography advice for ${spotName}:`);
      if (!tip || tip.trim() === '') return;

      const isCreator = author.toLowerCase().includes('aadi') || author.toLowerCase().includes('creator');
      saveSpotTip(spotId, author, isCreator, tip);
      return;
    }

    const target = document.getElementById('spotTipModalTarget');
    if (target) target.textContent = spotName;

    const authorInput = document.getElementById('spotTipAuthor');
    if (authorInput) authorInput.value = 'Aadi [Creator]';

    const textInput = document.getElementById('spotTipText');
    if (textInput) textInput.value = '';

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function saveSpotTip(spotId, author, isCreator, tip) {
    if (!maproomDispatches[spotId]) maproomDispatches[spotId] = { uploads: [], tips: [] };
    maproomDispatches[spotId].tips.unshift({
      author: author.trim(),
      isCreator: !!isCreator,
      date: new Date().toLocaleDateString(),
      tip: tip.trim()
    });

    saveMaproomData();
    renderStateDossier(activeStateKey);
    showMapToast(`✓ Tips & tricks shared for ${pendingSpotName || 'tourist spot'}!`);
  }

  /* --------------------------------------------------------------------------
     User Contributions: Species Sighting Modal
     -------------------------------------------------------------------------- */
  function openSpeciesSightingModal(specId, specName) {
    pendingSpeciesId = specId;
    pendingSpeciesName = specName;

    const modal = document.getElementById('maproomSightingModal');
    if (!modal) {
      // Fallback prompt
      const author = prompt(`Observer / Photographer Name:`, 'Aadi [Creator]');
      if (!author) return;
      const exp = prompt(`Describe your sighting experience of ${specName} (behavior, time of day, location notes):`);
      if (!exp || exp.trim() === '') return;
      const mediaUrl = prompt('Enter media URL for this sighting (photo/video link, optional):', '');

      saveSpeciesSighting(specId, author, exp, mediaUrl, mediaUrl && mediaUrl.endsWith('.mp4') ? 'video' : 'photo');
      return;
    }

    const target = document.getElementById('sightingModalTarget');
    if (target) target.textContent = specName;

    const authorInput = document.getElementById('sightingAuthor');
    if (authorInput) authorInput.value = 'Aadi [Creator]';

    const textInput = document.getElementById('sightingExperience');
    if (textInput) textInput.value = '';

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function saveSpeciesSighting(specId, author, exp, mediaUrl, mediaType) {
    if (!maproomDispatches[specId]) maproomDispatches[specId] = { sightings: [] };
    maproomDispatches[specId].sightings.unshift({
      author: author.trim(),
      date: new Date().toLocaleDateString(),
      experience: exp.trim(),
      mediaUrl: mediaUrl ? mediaUrl.trim() : null,
      mediaType: mediaType || 'photo'
    });

    saveMaproomData();
    renderStateDossier(activeStateKey);
    showMapToast(`✓ Sighting logged for ${pendingSpeciesName || 'fauna species'}!`);
  }

  function setupModals() {
    spotMediaModal = document.getElementById('maproomSpotMediaModal');
    spotTipModal = document.getElementById('maproomSpotTipModal');
    sightingModal = document.getElementById('maproomSightingModal');

    // Spot Media Form Submit
    const spotMediaForm = document.getElementById('spotMediaForm');
    spotMediaForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('spotMediaTitle').value.trim() || `Field Photo at ${pendingSpotName}`;
      const author = document.getElementById('spotMediaAuthor').value.trim() || 'Aadi [Creator]';
      const fileInput = document.getElementById('spotMediaFileInput');
      const urlInput = document.getElementById('spotMediaUrlInput').value.trim();
      const typeSelect = document.getElementById('spotMediaTypeSelect').value;

      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const isVideo = file.type.startsWith('video/');
        const reader = new FileReader();
        reader.onload = function (evt) {
          saveSpotMedia(pendingSpotId, title, author, evt.target.result, isVideo ? 'video' : 'photo');
          closeModal(spotMediaModal);
        };
        reader.readAsDataURL(file);
      } else {
        const finalUrl = urlInput || 'assets/images/nalanda_ruins.jpg';
        saveSpotMedia(pendingSpotId, title, author, finalUrl, typeSelect);
        closeModal(spotMediaModal);
      }
    });

    // Spot Tip Form Submit
    const spotTipForm = document.getElementById('spotTipForm');
    spotTipForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('spotTipAuthor').value.trim() || 'Aadi [Creator]';
      const tipText = document.getElementById('spotTipText').value.trim();
      if (!tipText) {
        showMapToast('Please enter your tips and tricks notes.');
        return;
      }
      const isCreator = author.toLowerCase().includes('aadi') || author.toLowerCase().includes('creator');
      saveSpotTip(pendingSpotId, author, isCreator, tipText);
      closeModal(spotTipModal);
    });

    // Sighting Form Submit
    const sightingForm = document.getElementById('sightingForm');
    sightingForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('sightingAuthor').value.trim() || 'Aadi [Creator]';
      const exp = document.getElementById('sightingExperience').value.trim();
      if (!exp) {
        showMapToast('Please describe your sighting experience.');
        return;
      }
      const fileInput = document.getElementById('sightingFileInput');
      const urlInput = document.getElementById('sightingUrlInput').value.trim();

      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const isVideo = file.type.startsWith('video/');
        const reader = new FileReader();
        reader.onload = function (evt) {
          saveSpeciesSighting(pendingSpeciesId, author, exp, evt.target.result, isVideo ? 'video' : 'photo');
          closeModal(sightingModal);
        };
        reader.readAsDataURL(file);
      } else {
        const finalUrl = urlInput || null;
        saveSpeciesSighting(pendingSpeciesId, author, exp, finalUrl, finalUrl && finalUrl.endsWith('.mp4') ? 'video' : 'photo');
        closeModal(sightingModal);
      }
    });

    // Close buttons on all maproom modals
    document.querySelectorAll('.maproom-modal-close-btn, .maproom-modal-cancel-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        closeModal(spotMediaModal);
        closeModal(spotTipModal);
        closeModal(sightingModal);
      });
    });

    [spotMediaModal, spotTipModal, sightingModal].forEach(m => {
      m?.addEventListener('click', (e) => {
        if (e.target === m) closeModal(m);
      });
    });
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showMapToast(msg) {
    const toast = document.getElementById('drongoToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3800);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* --------------------------------------------------------------------------
     Event Listeners
     -------------------------------------------------------------------------- */
  function bindMaproomEvents() {
    // Map State Paths click
    document.querySelectorAll('.map-state-path').forEach(path => {
      path.addEventListener('click', () => {
        const stateKey = path.getAttribute('data-state');
        if (stateKey && STATES_DATA[stateKey]) {
          renderStateDossier(stateKey);
          document.getElementById('maproomStateArchive')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // State Selector Chips click
    document.querySelectorAll('.state-chip-btn').forEach(chip => {
      chip.addEventListener('click', () => {
        const stateKey = chip.getAttribute('data-state');
        if (stateKey && STATES_DATA[stateKey]) {
          renderStateDossier(stateKey);
        }
      });
    });

    // Tab buttons (Tourist Spots vs Flora & Fauna)
    tabTouristBtn?.addEventListener('click', () => {
      activeTabType = 'touristSpots';
      tabTouristBtn.classList.add('active');
      tabFaunaBtn?.classList.remove('active');
      renderStateDossier(activeStateKey);
    });

    tabFaunaBtn?.addEventListener('click', () => {
      activeTabType = 'floraFauna';
      tabFaunaBtn.classList.add('active');
      tabTouristBtn?.classList.remove('active');
      renderStateDossier(activeStateKey);
    });
  }

  // Start on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMaproom);
  } else {
    initMaproom();
  }
})();
