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
    },
    'gujarat': {
      id: 'gujarat',
      code: 'IN-GJ',
      name: 'Gujarat',
      tagline: 'The Kathiawar Peninsula, Asiatic Lion Bastion & Great Rann',
      emblemTitle: 'Official State Seal of Gujarat',
      emblemDescription: 'Four Asiatic Lions of Sarnath with oceanic crest and industrial wheel.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of Gujarat">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <circle cx="50" cy="42" r="16" fill="none" stroke="#C5A059" stroke-width="2.5"/>
        <path d="M42 42 C42 35 58 35 58 42 M50 26 L50 36 M38 52 C44 48 56 48 62 52" stroke="#C5A059" stroke-width="2.2" fill="none"/>
        <rect x="25" y="68" width="50" height="4" rx="2" fill="#C5A059"/>
        <text x="50" y="85" font-size="7" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">GUJARAT</text>
      </svg>`,
      biome: 'Arid Thorn Scrubs, Saline Rann Mudflats & Gir Teak Woodlands',
      touristSpots: [
        {
          id: 'spot-gj-gir',
          name: 'Gir National Park & Wildlife Sanctuary',
          subName: 'The World’s Sole Remaining Natural Bastion of Asiatic Lions',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          description: 'Spanning over 1,412 sq km of dry deciduous scrub and teak woodlands in Saurashtra, Sasan Gir is the historic final haven of Panthera leo persica, preserved from near-extinction by dedicated institutional stewardship.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The early morning 6:00 AM safari through Routes 2 and 6 yields superior lighting conditions along the Hiran River. Pack a 200-400mm zoom lens for golden hour pride portraits.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-gj-velavadar',
          name: 'Blackbuck National Park, Velavadar',
          subName: 'Grassland Savannas, Harriers & The World’s Largest Blackbuck Herds',
          imageUrl: 'assets/images/kabar_lotus_flower.jpg',
          description: 'A pristine golden grassland ecosystem along the Gulf of Khambhat coast hosting thousands of spiraled-horn blackbucks, Indian wolves, striped hyenas, and wintering Montagu’s harriers.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Visit in late afternoon to photograph territorial blackbuck lekking displays against low golden sunlight.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-gj-marine',
          name: 'Marine National Park, Gulf of Kutch',
          subName: 'Intertidal Coral Reefs, Mangroves & Sea Turtles',
          imageUrl: 'assets/images/gangetic_dolphin.jpg',
          description: 'India’s first marine national park encompassing 42 islands along Jamnagar coast, featuring vibrant hard and soft coral reefs visible during low tide.',
          tipsAndTricks: [
            {
              author: 'Expedition Naturalist Team',
              isCreator: false,
              date: 'Contributor Note',
              tip: 'Pirotan Island reef walking requires local forest department tide permits; wear sturdy reef shoes.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-gj-1',
          name: 'Asiatic Lion',
          scientific: 'Panthera leo persica',
          type: 'State Pride • Endangered Mammal',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          notes: 'Distingushed from African lions by a longitudinal belly fold and sparser mane.',
          sightings: []
        },
        {
          id: 'spec-gj-2',
          name: 'Indian Wild Ass (Khur)',
          scientific: 'Equus hemionus khur',
          type: 'Endemic Ungulate • Mammal',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Remarkable saline desert ungulate capable of sustained running speeds up to 50 km/h.',
          sightings: []
        },
        {
          id: 'spec-gj-3',
          name: 'Greater Flamingo',
          scientific: 'Phoenicopterus roseus',
          type: 'State Bird • Avian',
          imageUrl: 'assets/images/sarus_crane.jpg',
          notes: 'Nests by the hundreds of thousands in the famous Flamingo City of the Great Rann.',
          sightings: []
        },
        {
          id: 'spec-gj-4',
          name: 'Blackbuck',
          scientific: 'Antilope cervicapra',
          type: 'Savanna Antelope • Mammal',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Fastest native antelope on the Indian subcontinent, sporting long corkscrew horns.',
          sightings: []
        }
      ]
    },
    'karnataka': {
      id: 'karnataka',
      code: 'IN-KA',
      name: 'Karnataka',
      tagline: 'The Nilgiri Biosphere, Western Ghats Evergreen & Kabini Corridor',
      emblemTitle: 'Official State Emblem of Karnataka',
      emblemDescription: 'The Gandaberunda mythical two-headed eagle framed by red and gold lions.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of Karnataka">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <path d="M50 32 C42 22 36 34 38 48 C42 62 50 72 50 72 C50 72 58 62 62 48 C64 34 58 22 50 32 Z" fill="#C5A059"/>
        <circle cx="44" cy="28" r="3" fill="#F3D99E"/>
        <circle cx="56" cy="28" r="3" fill="#F3D99E"/>
        <text x="50" y="88" font-size="6.5" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">KARNATAKA</text>
      </svg>`,
      biome: 'Tropical Moist Deciduous, Montane Shola & Western Ghats Canopy',
      touristSpots: [
        {
          id: 'spot-ka-kabini',
          name: 'Nagarhole National Park & Kabini Basin',
          subName: 'World Epicenter of Black Panthers, Big Cats & Elephant Corridors',
          imageUrl: 'assets/images/black_drongo.jpg',
          description: 'Spanning across Kodagu and Mysuru districts, Nagarhole encompasses over 643 sq km of lush teak and rosewood forest. The Kabini River backwaters provide prime vantage points for viewing melanistic leopards, tigers, and vast wild elephant congregations.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The boat safari on the Kabini backwaters provides unparalleled low-angle water reflections of elephants swimming and marsh mugger crocodiles basking.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-ka-bandipur',
          name: 'Bandipur National Park & Tiger Reserve',
          subName: 'Prime Corridor Linking Nilgiri Biosphere & Mudumalai Canopies',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          description: 'One of the earliest reserves established under Project Tiger in 1974, Bandipur hosts healthy populations of tigers, leopards, dholes, and gaurs against the dramatic backdrop of the Nilgiri hills.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Book safaris on the Gopalaswamy Betta range for panoramic misty mountain ridges and sighting herds of Asian elephants in open bamboo glades.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-ka-1',
          name: 'Asian Elephant',
          scientific: 'Elephas maximus',
          type: 'State Animal • Megaherbivore',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Karnataka is home to the largest population of wild Asian elephants in all of Asia.',
          sightings: []
        },
        {
          id: 'spec-ka-2',
          name: 'Indian Roller',
          scientific: 'Coracias benghalensis',
          type: 'State Bird • Avian',
          imageUrl: 'assets/images/paradise_flycatcher.jpg',
          notes: 'Vibrant turquoise and royal blue wing plumage revealed during tumbling nuptial displays.',
          sightings: []
        },
        {
          id: 'spec-ka-3',
          name: 'Black Panther (Melanistic Leopard)',
          scientific: 'Panthera pardus',
          type: 'Apex Forest Felid',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Famous resident of the dense Kabini canopy, with ghost rosettes visible under direct sunlight.',
          sightings: []
        },
        {
          id: 'spec-ka-4',
          name: 'Sandalwood Tree',
          scientific: 'Santalum album',
          type: 'State Tree • Flora',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          notes: 'Renowned aromatic heartwood native to the Southern Deccan deciduous forests.',
          sightings: []
        }
      ]
    },
    'maharashtra': {
      id: 'maharashtra',
      code: 'IN-MH',
      name: 'Maharashtra',
      tagline: 'The Sahyadri Ridges, Vidarbha Sal Heartlands & Tadoba Haven',
      emblemTitle: 'Official State Emblem of Maharashtra',
      emblemDescription: 'The Samai traditional brass lamp with ancient Sanskrit inscription.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of Maharashtra">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <path d="M50 25 L50 68 M35 48 C42 42 58 42 65 48 M30 68 L70 68" stroke="#C5A059" stroke-width="3" stroke-linecap="round"/>
        <circle cx="50" cy="22" r="4" fill="#F3D99E"/>
        <text x="50" y="85" font-size="5.5" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">MAHARASHTRA</text>
      </svg>`,
      biome: 'Dry Deciduous Teak Forests, Basaltic Plateaus & Konkan Mangroves',
      touristSpots: [
        {
          id: 'spot-mh-tadoba',
          name: 'Tadoba-Andhari Tiger Reserve',
          subName: 'The Jewel of Vidarbha Tiger Conservation & Bamboo Thickets',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          description: 'Maharashtra’s oldest and largest national park situated in Chandrapur. Dominated by dense bamboo brakes and teak, Tadoba is acclaimed worldwide for exceptional daylight tiger sighting frequencies.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The Moharli and Kolara core gates offer peak big cat activity around Telia and Tadoba lake beds in summer months (March-May).'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-mh-sanjay',
          name: 'Sanjay Gandhi National Park',
          subName: 'Urban Wilderness & Prehistoric Basaltic Kanheri Caves',
          imageUrl: 'assets/images/nalanda_ruins.jpg',
          description: 'A miraculous 104 sq km protected rainforest enveloped by Mumbai, harboring free-roaming leopards, spotted deer, and over 2,000-year-old rock-cut Buddhist monastery caves.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Trek the Shilonda trail early on weekday mornings with certified naturalists for birdwatching and macro insect biodiversity.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-mh-1',
          name: 'Malabar Giant Squirrel (Shekru)',
          scientific: 'Ratufa indica',
          type: 'State Animal • Arboreal Mammal',
          imageUrl: 'assets/images/racket_tailed_drongo.jpg',
          notes: 'Striking multi-colored tree squirrel with a luxurious two-foot bushy tail.',
          sightings: []
        },
        {
          id: 'spec-mh-2',
          name: 'Yellow-footed Green Pigeon (Hariyal)',
          scientific: 'Treron phoenicopterus',
          type: 'State Bird • Avian',
          imageUrl: 'assets/images/paradise_flycatcher.jpg',
          notes: 'Arboreal frugivorous pigeon that rarely touches the ground, favoring banyan figs.',
          sightings: []
        },
        {
          id: 'spec-mh-3',
          name: 'Royal Bengal Tiger',
          scientific: 'Panthera tigris tigris',
          type: 'Apex Predator • Big Cat',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          notes: 'Thriving population centered around the Vidarbha landscape corridor.',
          sightings: []
        },
        {
          id: 'spec-mh-4',
          name: 'Jarul (Pride of India)',
          scientific: 'Lagerstroemia speciosa',
          type: 'State Flower • Flora',
          imageUrl: 'assets/images/peach_hibiscus_flower.jpg',
          notes: 'Produces vibrant purple-pink floral panicles across the Western Ghat slopes.',
          sightings: []
        }
      ]
    },
    'odisha': {
      id: 'odisha',
      code: 'IN-OD',
      name: 'Odisha',
      tagline: 'The Similipal Biosphere, Chilika Lagoon & Olive Ridley Coasts',
      emblemTitle: 'Official State Emblem of Odisha',
      emblemDescription: 'The warrior horse statue from Konark Sun Temple with Ashok Chakra.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of Odisha">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <path d="M38 65 C40 50 48 40 56 36 C64 34 68 40 68 46 C64 52 58 56 50 58 L50 68" stroke="#C5A059" stroke-width="2.8" fill="none" stroke-linecap="round"/>
        <circle cx="50" cy="24" r="3.5" fill="#C5A059"/>
        <text x="50" y="85" font-size="7" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">ODISHA</text>
      </svg>`,
      biome: 'Moist Peninsular Sal, Coastal Brackish Wetlands & Mangrove Estuaries',
      touristSpots: [
        {
          id: 'spot-od-similipal',
          name: 'Similipal National Park & Biosphere Reserve',
          subName: 'Ancient Sal Canopies, Waterfalls & The World’s Melanistic Tigers',
          imageUrl: 'assets/images/sundarbans_tiger.jpg',
          description: 'A sprawling 2,750 sq km biosphere reserve in Mayurbhanj featuring towering waterfalls (Barehipani and Joranda) and the globally unique wild melanistic (black) tiger genetic morph.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The Chahala zone in the central plateau provides excellent viewing towers for wild elephant herds visiting the salt lick at sunset.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-od-chilika',
          name: 'Chilika Lake Ramsar Wetland & Mangalajodi',
          subName: 'Asia’s Largest Brackish Water Lagoon & Irrawaddy Dolphin Sanctuary',
          imageUrl: 'assets/images/gangetic_dolphin.jpg',
          description: 'Spanning over 1,100 sq km, Chilika is a migratory paradise hosting over a million birds each winter along with an endangered resident population of rare Irrawaddy dolphins near Satapada.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Hire wooden paddle boats at Mangalajodi at sunrise to photograph waterfowl at eye level without engine disturbance.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-od-1',
          name: 'Olive Ridley Sea Turtle',
          scientific: 'Lepidochelys olivacea',
          type: 'Marine Reptile • Mass Nester',
          imageUrl: 'assets/images/gangetic_dolphin.jpg',
          notes: 'Arrives in millions for synchronized mass nesting (arribada) at Rushikulya and Gahirmatha beaches.',
          sightings: []
        },
        {
          id: 'spec-od-2',
          name: 'Sambar Deer',
          scientific: 'Rusa unicolor',
          type: 'State Animal • Large Deer',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Largest deer in India, vital prey species for the tigers and leopards of Similipal.',
          sightings: []
        },
        {
          id: 'spec-od-3',
          name: 'Irrawaddy Dolphin',
          scientific: 'Orcaella brevirostris',
          type: 'Vulnerable Cetacean • Aquatic',
          imageUrl: 'assets/images/river_dolphin.jpg',
          notes: 'Distinct blunt rounded melon forehead, known for cooperative fishing with local fishermen.',
          sightings: []
        },
        {
          id: 'spec-od-4',
          name: 'Ashoka Tree',
          scientific: 'Saraca asoca',
          type: 'State Flower / Tree • Flora',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          notes: 'Sacred rainforest tree blooming with fragrant orange-yellow floral clusters.',
          sightings: []
        }
      ]
    },
    'ladakh': {
      id: 'ladakh',
      code: 'IN-LA',
      name: 'Ladakh',
      tagline: 'The Trans-Himalayan Cold Desert & High-Altitude Ramsar Wetlands',
      emblemTitle: 'Official Emblem of the UT of Ladakh',
      emblemDescription: 'The Ashoka Lion Capital flanked by the dual peaks of Karakoram and Zanskar.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of Ladakh">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <path d="M26 62 L42 36 L54 52 L66 32 L82 62 Z" fill="#C5A059"/>
        <path d="M42 36 L48 45 L54 52" stroke="#0A2B47" stroke-width="1.5"/>
        <circle cx="50" cy="22" r="4" fill="#F3D99E"/>
        <text x="50" y="85" font-size="7" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">LADAKH</text>
      </svg>`,
      biome: 'Alpine Tundra, Glacial Moraines & High-Altitude Saline Basins',
      touristSpots: [
        {
          id: 'spot-la-hemis',
          name: 'Hemis National Park',
          subName: 'The Undisputed Global Capital of the Elusive Snow Leopard',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          description: 'Spanning over 4,400 sq km in the eastern Ladakh region, Hemis is South Asia’s largest national park. Famous worldwide for hosting the highest density of snow leopards (Panthera uncia) in any protected area.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Winter expeditions between January and March offer the peak snow leopard tracking window in the Rumbak and Husing valleys. Sub-zero thermal clothing and a 500mm-800mm telephoto prime are mandatory.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-la-tsomoriri',
          name: 'Tso Moriri & Changthang Ramsar Wetland',
          subName: 'High-Altitude Turquoise Glacial Lake & Tibetan Crane Haven',
          imageUrl: 'assets/images/kabar_lotus_flower.jpg',
          description: 'Perched at an elevation of 4,522 meters, Tso Moriri is the largest high-altitude lake in the Trans-Himalayan biogeographic zone, acting as a crucial breeding ground for black-necked cranes and bar-headed geese.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Acclimatize in Leh for at least 48 hours before ascending to the Changthang plateau to avoid acute mountain sickness.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-la-1',
          name: 'Snow Leopard (Shan)',
          scientific: 'Panthera uncia',
          type: 'State Animal • Ghost of the Mountains',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Master of camouflage adapted to craggy precipices with dense fur and an extra-long tail.',
          sightings: []
        },
        {
          id: 'spec-la-2',
          name: 'Black-necked Crane',
          scientific: 'Grus nigricollis',
          type: 'State Bird • Sacred Alpine Avian',
          imageUrl: 'assets/images/sarus_crane.jpg',
          notes: 'Revered high-altitude crane that breeds in the marshy fringes of Ladakh’s alpine lakes.',
          sightings: []
        },
        {
          id: 'spec-la-3',
          name: 'Kiang (Tibetan Wild Ass)',
          scientific: 'Equus kiang',
          type: 'Trans-Himalayan Ungulate',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'The largest of all wild asses, roaming the high plains of Changthang in majestic herds.',
          sightings: []
        },
        {
          id: 'spec-la-4',
          name: 'Himalayan Marmot',
          scientific: 'Marmota himalayana',
          type: 'Montane Rodent • High Altitude',
          imageUrl: 'assets/images/jewel_beetle_macro.jpg',
          notes: 'Stout burrowing rodent that hibernates for over six months beneath deep mountain snow.',
          sightings: []
        }
      ]
    },
    'tamil_nadu': {
      id: 'tamil_nadu',
      code: 'IN-TN',
      name: 'Tamil Nadu',
      tagline: 'The Nilgiri Tahr Sholas, Anamalai Corridors & Coromandel Coast',
      emblemTitle: 'Official State Emblem of Tamil Nadu',
      emblemDescription: 'The Srivilliputhur Andal Temple Gopuram framed by the Indian national crest.',
      emblemSvg: `<svg viewBox="0 0 100 100" class="state-emblem-svg" aria-label="Official Emblem of Tamil Nadu">
        <circle cx="50" cy="50" r="46" fill="#0A2B47" stroke="#C5A059" stroke-width="2.5"/>
        <path d="M38 70 L42 36 L58 36 L62 70 Z M46 36 L48 24 L52 24 L54 36" stroke="#C5A059" stroke-width="2.5" fill="none"/>
        <line x1="36" y1="46" x2="64" y2="46" stroke="#C5A059" stroke-width="1.8"/>
        <line x1="37" y1="58" x2="63" y2="58" stroke="#C5A059" stroke-width="1.8"/>
        <text x="50" y="85" font-size="6" font-family="'Cinzel', serif" font-weight="bold" fill="#F3D99E" text-anchor="middle" letter-spacing="1">TAMIL NADU</text>
      </svg>`,
      biome: 'Montane Shola-Grassland, Southern Dry Evergreen & Gulf Coral Reefs',
      touristSpots: [
        {
          id: 'spot-tn-mudumalai',
          name: 'Mudumalai Tiger Reserve & Theppakadu',
          subName: 'Nilgiri Biosphere Core & Asia’s Oldest Elephant Camp',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          description: 'Nestled on the northern slope of the Nilgiris, Mudumalai shares borders with Kerala and Karnataka. The reserve harbors high densities of tigers, leopards, dholes, and Asian elephants.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The early morning safari along the Moyar river valley offers exceptional opportunities to document Indian wild dogs hunting in packs.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-tn-anamalai',
          name: 'Anamalai Tiger Reserve & Top Slip',
          subName: 'Western Ghats Wet Evergreen Canopy & Great Hornbill Corridor',
          imageUrl: 'assets/images/paradise_flycatcher.jpg',
          description: 'Spanning across Pollachi and Valparai, Anamalai preserves ancient tropical rainforests, tree-lined tea estates, and montane grasslands harboring the endangered Nilgiri Tahr.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Walk the Top Slip teak arboretum trails with tribal guides to spot rare endemic flying lizards and Ceylon frogmouths.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-tn-1',
          name: 'Nilgiri Tahr',
          scientific: 'Nilgiritragus hylocrius',
          type: 'State Animal • Endemic Mountain Ungulate',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Endangered wild mountain goat found exclusively in the high-altitude shola grasslands of the Western Ghats.',
          sightings: []
        },
        {
          id: 'spec-tn-2',
          name: 'Emerald Dove',
          scientific: 'Chalcophaps indica',
          type: 'State Bird • Avian',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Shy ground-dwelling forest dove boasting iridescent metallic green wing covert plumage.',
          sightings: []
        },
        {
          id: 'spec-tn-3',
          name: 'Gloriosa Lily (Kanthal)',
          scientific: 'Gloriosa superba',
          type: 'State Flower • Flora',
          imageUrl: 'assets/images/peach_hibiscus_flower.jpg',
          notes: 'Exotic climbing lily with fiery crimson-and-gold reflexed petals.',
          sightings: []
        },
        {
          id: 'spec-tn-4',
          name: 'Lion-tailed Macaque',
          scientific: 'Macaca silenus',
          type: 'Rainforest Primate',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Arboreal primate with a silver-white mane and tufted tail, restricted to the rainforest canopy of the Western Ghats.',
          sightings: []
        }
      ]
    }
,
    'uttar_pradesh': {
      id: 'uttar_pradesh',
      code: 'IN-UP',
      name: 'Uttar Pradesh',
      zone: 'north',
      tagline: 'Dudhwa Terai Canopies, Chambal Ravines & Ancient Sacred Ghats',
      emblemTitle: 'Official Seal of Uttar Pradesh',
      emblemDescription: 'Matsya (Twin Celestial Fishes) symbolizing sovereignty, with the Bow and Arrow of Lord Rama and confluence of Ganga-Yamuna rivers.',
      emblemUrl: 'assets/images/emblems/uttar_pradesh_emblem.png',
      biome: 'Sub-Himalayan Terai Sal Corridors & Gangetic Alluvial Riverine Plains',
      touristSpots: [
        {
          id: 'spot-up-dudhwa',
          name: 'Dudhwa National Park & Tiger Reserve',
          subName: 'Northern Terai Alluvial Grasslands & Sal Forest Canopy',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          description: 'Lying along the Indo-Nepal border in Lakhimpur Kheri, Dudhwa forms one of the last remaining strongholds of the Terai ecosystem. It is renowned for viable populations of Tigers, Indian Rhinoceros, and Swamp Deer.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Book open-top gypsy safaris in the Bankey Tal and Salukapur ranges for high concentrations of Swamp Deer and Rhinos. Morning fog burns off by 8:30 AM.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-up-chambal',
          name: 'National Chambal Sanctuary',
          subName: 'Protected Riverine Haven for Critically Endangered Gharials & Skimmers',
          imageUrl: 'assets/images/gharial_gandak.jpg',
          description: 'Stretching along the pristine Chambal River, this sanctuary is India\'s premier reserve for the critically endangered Fish-eating Gharial, Marsh Mugger, Gangetic Dolphin, and rare Indian Skimmer.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Motorized eco-boats near Bateshwar or Pinahat provide steady viewing of nesting Indian Skimmers on sandbanks. Use a 500mm telephoto lens for skimmer skim-feeding flights.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-up-pilibhit',
          name: 'Pilibhit Tiger Reserve & Chuka Beach',
          subName: 'Upper Gangetic Plain Sal Canopies & Sharda River Floodplains',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          description: 'Awarded the international TX2 award for doubling its tiger population ahead of target, Pilibhit spans over 800 sq km of lush sal canopies, water reservoirs, and tall grassland floodplains.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Stay at the Chuka eco-huts overlooking the Sharda Sagar reservoir. Sunset reflections across the water create magical backdrops for waterfowl photography.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-up-1',
          name: 'Swamp Deer (Barasingha)',
          scientific: 'Rucervus duvaucelii',
          type: 'Herbivore Mammal',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Official state animal of Uttar Pradesh, noted for its magnificent twelve-tined antlers and adaptation to wet marshlands.',
          sightings: []
        },
        {
          id: 'spec-up-2',
          name: 'Sarus Crane',
          scientific: 'Antigone antigone',
          type: 'Riparian Avian',
          imageUrl: 'assets/images/sarus_crane.jpg',
          notes: 'The world\'s tallest flying bird, reverently protected in Uttar Pradesh farming villages as an emblem of lifelong devotion.',
          sightings: []
        },
        {
          id: 'spec-up-3',
          name: 'Gharial',
          scientific: 'Gavialis gangeticus',
          type: 'Riverine Crocodilian',
          imageUrl: 'assets/images/gharial_gandak.jpg',
          notes: 'Distinctive long, narrow snout with a bulbous pot (ghara) at the tip in mature males, specialized for catching fish.',
          sightings: []
        }
      ]
    },
    'himachal': {
      id: 'himachal',
      code: 'IN-HP',
      name: 'Himachal Pradesh',
      zone: 'north',
      tagline: 'The Western Himalayan Crest & High-Altitude Glacial Biomes',
      emblemTitle: 'Official Emblem of Himachal Pradesh',
      emblemDescription: 'Three snow-clad mountain peaks flanked by the sacred Ashoka lion capital over waves of three Himalayan rivers.',
      emblemUrl: 'assets/images/emblems/himachal_emblem.svg',
      biome: 'Sub-Alpine Coniferous, Moist Temperate Deodar & High Trans-Himalayan Tundra',
      touristSpots: [
        {
          id: 'spot-hp-ghnp',
          name: 'Great Himalayan National Park',
          subName: 'UNESCO World Heritage High-Altitude Biodiversity Hotspot',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'A pristine, roadless mountain wilderness in Kullu district preserving untouched alpine meadows, glacial valleys, and ancient forests of oak and deodar cedar.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Multi-day trekking permits must be obtained from Sai Ropa headquarters. Carry warm fleece layers and weather-sealed camera equipment for sudden snow flurries.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-hp-pin',
          name: 'Pin Valley National Park',
          subName: 'High Trans-Himalayan Cold Desert & Snow Leopard Sanctuary',
          imageUrl: 'assets/images/paradise_flycatcher.jpg',
          description: 'Located in the cold desert district of Spiti, Pin Valley is home to endangered Snow Leopards, Siberian Ibex, Tibetan Gazelles, and rare alpine medicinal herbs.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Winter expeditions in February-March offer the greatest probability of Snow Leopard tracking along cliff ridges. Carry heavy-duty carbon fiber tripods.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-hp-1',
          name: 'Western Tragopan (Jujurana)',
          scientific: 'Tragopan melanocephalus',
          type: 'Alpine Pheasant',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Known locally as the King of Birds, adorned with crimson neck feathers and white pearl-like spotting across midnight black plumage.',
          sightings: []
        },
        {
          id: 'spec-hp-2',
          name: 'Snow Leopard',
          scientific: 'Panthera uncia',
          type: 'Apex Alpine Feline',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'The Ghost of the Mountains, perfectly camouflaged against rocky scree slopes with a long bushy tail for balance and warmth.',
          sightings: []
        }
      ]
    },
    'punjab': {
      id: 'punjab',
      code: 'IN-PB',
      name: 'Punjab',
      zone: 'north',
      tagline: 'The Five Rivers Basin & Harike Ramsar Wetland Flyway',
      emblemTitle: 'Official Emblem of Punjab',
      emblemDescription: 'Ashoka Lion capital surrounded by wheat stalks and crossed swords, symbolizing agriculture and bravery.',
      emblemUrl: 'assets/images/emblems/punjab_emblem.svg',
      biome: 'Indo-Gangetic Alluvial Floodplains & Ramsar Wetland Marshes',
      touristSpots: [
        {
          id: 'spot-pb-harike',
          name: 'Harike Pattan Wetland & Bird Sanctuary',
          subName: 'Largest Freshwater Ramsar Wetland in Northern India',
          imageUrl: 'assets/images/kabar_lotus_flower.jpg',
          description: 'Formed at the confluence of the Beas and Sutlej rivers, Harike attracts hundreds of thousands of migratory waterfowl each winter along the Central Asian Flyway.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Hire a birding guide at the Harike barrage watchtower. Sunrise mist over the Beas confluence creates ethereal silhouettes of diving ducks and skimmers.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-pb-abohar',
          name: 'Abohar Wildlife Sanctuary',
          subName: 'Community-Protected Blackbuck & Nilgai Sanctuary',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          description: 'An extraordinary sanctuary spanning 13 Bishnoi villages where thousands of wild Blackbuck roam freely through open agricultural fields protected by local residents.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Always seek permission from village elders when walking farmland perimeter paths. The golden light at 4:30 PM highlights bounding Blackbuck silhouettes.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-pb-1',
          name: 'Indus River Dolphin',
          scientific: 'Platanista minor',
          type: 'Freshwater Cetacean',
          imageUrl: 'assets/images/gangetic_dolphin.jpg',
          notes: 'One of the rarest mammals on earth, surviving in a tiny protected stretch of the Beas River in Punjab.',
          sightings: []
        },
        {
          id: 'spec-pb-2',
          name: 'Blackbuck',
          scientific: 'Antilope cervicapra',
          type: 'Fast Grassland Antelope',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Official state animal of Punjab, famous for spiralling corkscrew horns and incredible leaping speed.',
          sightings: []
        }
      ]
    },
    'haryana': {
      id: 'haryana',
      code: 'IN-HR',
      name: 'Haryana',
      zone: 'north',
      tagline: 'Sultanpur Ramsar Waterbird Basins & Shivalik Ridge Foothills',
      emblemTitle: 'Official Emblem of Haryana',
      emblemDescription: 'Ashoka lion capital rising above a blooming lotus over an emerging sun, framed by stalks of wheat.',
      emblemUrl: 'assets/images/emblems/haryana_emblem.svg',
      biome: 'Semi-Arid Scrub, Shivalik Sal Foothills & Ramsar Freshwater Lakes',
      touristSpots: [
        {
          id: 'spot-hr-sultanpur',
          name: 'Sultanpur National Park',
          subName: 'Premier Migratory Waterbird Ramsar Haven in Gurugram',
          imageUrl: 'assets/images/kabar_lotus_flower.jpg',
          description: 'A renowned bird sanctuary comprising open aquatic marshes, mounds, and acacia woodlands hosting over 250 species of resident and migratory birds.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The four high vantage watchtowers offer 360-degree views of resting pelicans, bar-headed geese, and painted storks. Bring binoculars or 400mm+ telephoto.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-hr-kalesar',
          name: 'Kalesar National Park',
          subName: 'Shivalik Foothills Dense Sal Forest & Leopard Sanctuary',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          description: 'Spanning over 13,000 acres in Yamunanagar along the Yamuna river, Kalesar features dense sal, khair, and shisham forests harboring leopards, barking deer, and wild boars.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Drive along the Hathnikund Barrage road in early morning for elephant corridors and red junglefowl crossings.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-hr-1',
          name: 'Black Francolin',
          scientific: 'Francolinus francolinus',
          type: 'Grassland Game Bird',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Official state bird of Haryana, noted for its ringing metallic song echoing across grasslands at dawn.',
          sightings: []
        }
      ]
    },
    'delhi': {
      id: 'delhi',
      code: 'IN-DL',
      name: 'Delhi (NCR)',
      zone: 'north',
      tagline: 'The Northern Aravalli Biodiversity Ridge & Yamuna Riparian Corridors',
      emblemTitle: 'National Emblem of India (Delhi NCR)',
      emblemDescription: 'Lion Capital of Ashoka symbolizing courage, power, and sovereign truth (Satyameva Jayate).',
      emblemUrl: 'assets/images/emblems/delhi_emblem.svg',
      biome: 'Tropical Thorn Scrub, Aravalli Quartzite Ridge & Riverine Floodplains',
      touristSpots: [
        {
          id: 'spot-dl-asola',
          name: 'Asola Bhatti Wildlife Sanctuary',
          subName: 'Southern Aravalli Ridge Corridor & Reclaimed Lake Basin',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'Located on the southern rim of Delhi, Asola Bhatti serves as a crucial wildlife corridor connecting the Aravalli hills with Sariska, hosting leopards, striped hyenas, and golden jackals.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Visit the Neeli Jheel trail early morning on bicycle or foot. The azure waters against rocky sandstone cliffs attract painted sandgrouse.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-dl-yamuna',
          name: 'Yamuna Biodiversity Park',
          subName: 'Restored Riverine Wetland Ecosystem of the National Capital',
          imageUrl: 'assets/images/kabar_lotus_flower.jpg',
          description: 'An ecologically restored river floodplain sanctuary featuring native wetlands, tall phragmites reeds, and hundreds of wintering diving ducks.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Guided nature trails led by university botanists showcase native heritage trees like Ronj, Dhak, and Khair.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-dl-1',
          name: 'Nilgai (Blue Bull)',
          scientific: 'Boselaphus tragocamelus',
          type: 'Large Forest Antelope',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Official state animal of Delhi, thriving along the thorny thickets of the southern ridge.',
          sightings: []
        }
      ]
    },
    'jammu_kashmir': {
      id: 'jammu_kashmir',
      code: 'IN-JK',
      name: 'Jammu & Kashmir',
      zone: 'north',
      tagline: 'The Valley of Pir Panjal, Dachigam Oak Corridors & Dal Lake',
      emblemTitle: 'Official Emblem of Jammu & Kashmir',
      emblemDescription: 'Ashoka lion capital atop lotus petals flanked by two grain sheaves over the Pir Panjal mountain range.',
      emblemUrl: 'assets/images/emblems/jammu_kashmir_emblem.svg',
      biome: 'Temperate Coniferous, Broadleaved Deciduous Valleys & Sub-Alpine Meadows',
      touristSpots: [
        {
          id: 'spot-jk-dachigam',
          name: 'Dachigam National Park',
          subName: 'Last Stronghold of the Critically Endangered Kashmir Stag (Hangul)',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'Located just 22 km from Srinagar, Dachigam ranges from 5,500 ft to 14,000 ft, featuring pristine oak and conifer canopies along the Dagwan River.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'October is the Hangul rutting season; their resonant bugling echoes across Lower Dachigam. Enter early at 7:00 AM.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-jk-dal',
          name: 'Hokersar Ramsar Wetland & Dal Lake',
          subName: 'Central Asian Flyway Avian Haven in Kashmir Valley',
          imageUrl: 'assets/images/kabar_lotus_flower.jpg',
          description: 'Known as the Queen of Wetlands, Hokersar hosts up to half a million migratory ducks, greylag geese, and mallards every winter.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Explore via traditional shikara before sunrise for mist-shrouded reflections of snow-covered Pir Panjal peaks.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-jk-1',
          name: 'Kashmir Stag (Hangul)',
          scientific: 'Cervus hanglu hanglu',
          type: 'Critically Endangered Deer',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'The state animal of Jammu & Kashmir, distinguished by its magnificent spreading antlers with 11 to 16 points.',
          sightings: []
        }
      ]
    },
    'andhra_pradesh': {
      id: 'andhra_pradesh',
      code: 'IN-AP',
      name: 'Andhra Pradesh',
      zone: 'south',
      tagline: 'Eastern Ghats Nallamala Tiger Corridors & Coringa Mangroves',
      emblemTitle: 'Official Emblem of Andhra Pradesh',
      emblemDescription: 'Purna Ghatam (Vase of Plenty) adorned with traditional Amaravati Buddhist floral motifs and Ashoka Lions.',
      emblemUrl: 'assets/images/emblems/andhra_pradesh_emblem.svg',
      biome: 'Tropical Dry Deciduous Eastern Ghats, Coastal Mangroves & Deltaic Estuaries',
      touristSpots: [
        {
          id: 'spot-ap-srisailam',
          name: 'Nagarjunsagar-Srisailam Tiger Reserve',
          subName: 'India\'s Largest Tiger Reserve along the Krishna River Gorge',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          description: 'Spanning five districts across the rugged Nallamala Hills, this massive 3,728 sq km reserve cradles deep canyons, bamboo brakes, and dense tiger territories.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The ghat road between Dornala and Srisailam passes through prime tiger country. Stop at Phalangadhara for deep valley overlooks.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-ap-coringa',
          name: 'Coringa Wildlife Sanctuary',
          subName: 'Godavari Estuary Mangrove Swamps & Fishing Cat Sanctuary',
          imageUrl: 'assets/images/sundarbans_tiger.jpg',
          description: 'The second largest mangrove forest on India\'s east coast, renowned for its extensive wooden boardwalks over tidal creeks and high density of Fishing Cats.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Low tide boat safaris reveal hundreds of mudskippers and fiddler crabs on exposed mudbanks.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-ap-1',
          name: 'Blackbuck',
          scientific: 'Antilope cervicapra',
          type: 'Grassland Antelope',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Official state animal of Andhra Pradesh, celebrated in ancient Telugu literature for grace and agility.',
          sightings: []
        }
      ]
    },
    'telangana': {
      id: 'telangana',
      code: 'IN-TG',
      name: 'Telangana',
      zone: 'south',
      tagline: 'Deccan Plateau Granitic Ridges & Amrabad Deep Tiger Canyons',
      emblemTitle: 'Official Emblem of Telangana',
      emblemDescription: 'Kakatiya Kala Thoranam arch enclosing Charminar with the Ashoka Lion Capital at the crown.',
      emblemUrl: 'assets/images/emblems/telangana_emblem.svg',
      biome: 'Southern Tropical Dry Deciduous & Granitic Hillock Scrublands',
      touristSpots: [
        {
          id: 'spot-tg-amrabad',
          name: 'Amrabad Tiger Reserve',
          subName: 'Nallamala Plateau Tiger Stronghold & Krishna River Valley',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          description: 'A hilly, rugged tiger sanctuary spanning 2,611 sq km, home to the indigenous Chenchu tribe, leopards, sloth bears, and packs of dholes.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The Farhabad viewpoint offers sweeping vistas of endless teak and bamboo hills rolling towards the horizon.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-tg-kawal',
          name: 'Kawal Tiger Reserve',
          subName: 'Godavari Basin Teak Canopies & Wildlife Corridors',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'Located in the northern district of Mancherial, Kawal protects lush teak and bamboo forests vital for connecting Central Indian wildlife corridors.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Best explored between November and February when waterholes attract herds of spotted deer, sambar, and nilgai.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-tg-1',
          name: 'Spotted Deer (Chital)',
          scientific: 'Axis axis',
          type: 'Herbivore Mammal',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Official state animal of Telangana, roaming in large herds through deciduous teak woodlands.',
          sightings: []
        },
        {
          id: 'spec-tg-2',
          name: 'Indian Roller (Pala Pitta)',
          scientific: 'Coracias benghalensis',
          type: 'Acrobatic Avian',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Sacred state bird with brilliant sapphire and turquoise wing flashes visible during display flights.',
          sightings: []
        }
      ]
    },
    'goa': {
      id: 'goa',
      code: 'IN-GA',
      name: 'Goa',
      zone: 'south',
      tagline: 'Western Ghats Sahyadri Biodiversity Crest & Estuarine Mangroves',
      emblemTitle: 'Official Emblem of Goa',
      emblemDescription: 'Vriksha Deepa (traditional brass lamp of light) crowned with the Ashoka Lion Capital, ringed with coconut fronds.',
      emblemUrl: 'assets/images/emblems/goa_emblem.svg',
      biome: 'Tropical Wet Evergreen, Semi-Evergreen & Coastal Estuarine Mangroves',
      touristSpots: [
        {
          id: 'spot-ga-mollem',
          name: 'Bhagwan Mahaveer Sanctuary & Mollem National Park',
          subName: 'Pristine Western Ghats Rainforest & Dudhsagar Waterfall Canyon',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'Nestled on Goa\'s eastern border along the Sahyadri range, Mollem features dense canopy rainforests, dramatic gorges, and the roaring four-tiered Dudhsagar Waterfalls.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The monsoon and post-monsoon months (October-December) bring the lush emerald canopies to life. Look for endemic pit vipers and flying lizards.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-ga-salimali',
          name: 'Dr. Salim Ali Bird Sanctuary',
          subName: 'Chorão Island Tidal Estuarine Mangrove Biosphere',
          imageUrl: 'assets/images/sundarbans_tiger.jpg',
          description: 'Accessible only by ferry across the Mandovi River, this sanctuary protects dense mangrove ecosystems home to mudskippers, otters, and wintering migratory waterbirds.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Hire a silent rowboat at high tide to enter narrow mangrove channels where kingfishers and night herons hunt.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-ga-1',
          name: 'Gaur (Indian Bison)',
          scientific: 'Bos gaurus',
          type: 'Massive Herbivore',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Official state animal of Goa, the largest wild bovine in the world, with characteristic muscular crest and white stockings.',
          sightings: []
        }
      ]
    },
    'chhattisgarh': {
      id: 'chhattisgarh',
      code: 'IN-CG',
      name: 'Chhattisgarh',
      zone: 'west',
      tagline: 'Bastar Sal Canopies, Kanger Subterranean Caves & Wild Buffalo',
      emblemTitle: 'Official Emblem of Chhattisgarh',
      emblemDescription: 'Circular emblem surrounded by 36 fort bastions symbolizing the 36 royal forts, with ears of paddy and Ashoka Lions.',
      emblemUrl: 'assets/images/emblems/chhattisgarh_emblem.svg',
      biome: 'Central Indian Moist Deciduous Sal Forests, Plateaus & Riverine Basins',
      touristSpots: [
        {
          id: 'spot-cg-kanger',
          name: 'Kanger Ghati National Park',
          subName: 'Bastar Subterranean Limestone Karst Caves & Tirathgarh Falls',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'A geological marvel in Bastar district featuring deep ravines, cascading waterfalls, and subterranean limestone caves like Kotumsar with blind cave-fish.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Hire local forest department spelunking guides with torches for Kotumsar and Dandak cave explorations.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-cg-indravati',
          name: 'Indravati Tiger Reserve',
          subName: 'Southern Wild Buffalo Sanctuary along Indravati River',
          imageUrl: 'assets/images/bengal_tiger.jpg',
          description: 'Spanning over 2,799 sq km along the Indravati River, this remote wilderness is one of the last remaining refuges of the endangered wild water buffalo in Central India.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Visit during winter months for river bank tiger sightings and rare hill myna acoustic calls.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-cg-1',
          name: 'Wild Water Buffalo',
          scientific: 'Bubalus arnee',
          type: 'Endangered Bovine',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Official state animal of Chhattisgarh, distinguished by magnificent spreading horns up to 2 meters wide.',
          sightings: []
        },
        {
          id: 'spec-cg-2',
          name: 'Bastar Hill Myna',
          scientific: 'Gracula religiosa peninsularis',
          type: 'Mimicry Avian',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Official state bird of Chhattisgarh, famous for astonishing vocal mimicry of human speech.',
          sightings: []
        }
      ]
    },
    'jharkhand': {
      id: 'jharkhand',
      code: 'IN-JH',
      name: 'Jharkhand',
      zone: 'east',
      tagline: 'Chota Nagpur Plateau Elephants, Betla Sal Forests & Waterfalls',
      emblemTitle: 'Official Seal of Jharkhand',
      emblemDescription: 'Concentric circles featuring dancing cultural figures, white elephants, bright red Palash flowers, and the Ashoka capital.',
      emblemUrl: 'assets/images/emblems/jharkhand_emblem.png',
      biome: 'Chota Nagpur Plateau Dry & Moist Deciduous Sal Forests',
      touristSpots: [
        {
          id: 'spot-jh-betla',
          name: 'Betla National Park & Palamu Tiger Corridor',
          subName: 'Historic Site of the World\'s First Tiger Census in 1932',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          description: 'Located in Latehar district, Betla features ancient 16th-century Chero dynasty brick forts rising dramatically out of dense sal, bamboo, and mahua forests.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Climb the watchtower near the Purana Qila fort for panoramic sightings of wild elephant herds crossing the Koel riverbed.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-jh-dalma',
          name: 'Dalma Wildlife Sanctuary',
          subName: 'Subarnarekha River Asian Elephant Migration Corridor',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          description: 'Rising atop the Dalma mountain range overlooking Jamshedpur, this sanctuary provides vital refuge for migratory herds of Asian Elephants.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Drive up the winding 11 km hill road in late afternoon; elephant watering holes near the Pindrabera rest house offer close observation.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-jh-1',
          name: 'Asian Elephant',
          scientific: 'Elephas maximus',
          type: 'Keystone Megafauna',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Official state animal of Jharkhand, roaming ancestral migratory corridors through the Sal forests of Chota Nagpur.',
          sightings: []
        }
      ]
    },
    'sikkim': {
      id: 'sikkim',
      code: 'IN-SK',
      name: 'Sikkim',
      zone: 'east',
      tagline: 'Khangchendzonga UNESCO Biosphere & Himalayan Red Panda Peaks',
      emblemTitle: 'Official Emblem of Sikkim',
      emblemDescription: 'Khanda-khorlo (Lotus and Buddhist Dharma Wheel) flanked by Tibetan auspicious clouds and lotus blossom.',
      emblemUrl: 'assets/images/emblems/sikkim_emblem.svg',
      biome: 'Sub-Alpine Coniferous, Rhododendron Shrub & High Himalayan Glacial Pastures',
      touristSpots: [
        {
          id: 'spot-sk-kcnp',
          name: 'Khangchendzonga National Park',
          subName: 'UNESCO Mixed World Heritage High Himalayan Biosphere',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'Dominating western Sikkim beneath the towering 8,586m Mt. Khangchendzonga, this park is an unmatched alpine wilderness of glaciers, sacred lakes, and red panda forests.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The Goecha La trek provides breathtaking close-up views of the eastern face of Kangchenjunga. April-May brings blooming red and pink rhododendrons.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-sk-singba',
          name: 'Singba Rhododendron Sanctuary',
          subName: 'Yumthang Valley World of Floral Rainbows',
          imageUrl: 'assets/images/peach_hibiscus_flower.jpg',
          description: 'Located in North Sikkim\'s Yumthang Valley along the Lachung River, Singba preserves over forty distinct rhododendron species blooming in a riot of alpine color.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Macro lenses are indispensable for photographing delicate Himalayan orchids and dew-kissed rhododendron petals.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-sk-1',
          name: 'Red Panda',
          scientific: 'Ailurus fulgens',
          type: 'Arboreal Mammal',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Official state animal of Sikkim, with cinnamon-red fur and ringed tail, feeding on tender bamboo shoots in misty oak-rhododendron canopies.',
          sightings: []
        },
        {
          id: 'spec-sk-2',
          name: 'Blood Pheasant',
          scientific: 'Ithaginis cruentus',
          type: 'High-Altitude Avian',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Official state bird of Sikkim, with crimson splashes across breast plumage, roaming alpine conifer forests up to 4,500m.',
          sightings: []
        }
      ]
    },
    'arunachal': {
      id: 'arunachal',
      code: 'IN-AR',
      name: 'Arunachal Pradesh',
      zone: 'east',
      tagline: 'Land of the Dawn-Lit Mountains, Namdapha Felines & Hornbills',
      emblemTitle: 'Official Emblem of Arunachal Pradesh',
      emblemDescription: 'Mithun head flanked by two Great Hornbills, rising above snow-peaked crests of the Eastern Himalayas.',
      emblemUrl: 'assets/images/emblems/arunachal_emblem.svg',
      biome: 'Tropical Wet Rainforest, Subtropical Montane & Alpine Tundra',
      touristSpots: [
        {
          id: 'spot-ar-namdapha',
          name: 'Namdapha National Park & Tiger Reserve',
          subName: 'Biodiversity Hotspot Harboring 4 Big Cat Species in Changlang',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'India\'s easternmost wilderness jewel, Namdapha spans 1,985 sq km of primary tropical rainforest to alpine peaks. It is the only park on Earth home to Tigers, Leopards, Snow Leopards, and Clouded Leopards.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Camp at Deban on the Noa-Dihing River. Early morning jungle treks yield sightings of the endangered Hoolock Gibbon and White-bellied Heron.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-ar-pakke',
          name: 'Pakke Tiger Reserve & Hornbill Nesting Corridor',
          subName: 'Community-Protected Sanctuary for Four Hornbill Species',
          imageUrl: 'assets/images/paradise_flycatcher.jpg',
          description: 'Nestled in East Kameng district along the Kameng River, Pakke has won international acclaim for Nyishi tribal community hornbill nest adoption programs.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Visit during the annual Pakke Paga Hornbill Festival in January. Evening roost flights of hundreds of Wreathed Hornbills are breathtaking.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-ar-1',
          name: 'Great Hornbill',
          scientific: 'Buceros bicornis',
          type: 'Canopy Avian',
          imageUrl: 'assets/images/racket_tailed_drongo.jpg',
          notes: 'Official state bird of Arunachal Pradesh, distinguished by massive yellow-black casque and booming wingbeats sounding like incoming trains.',
          sightings: []
        },
        {
          id: 'spec-ar-2',
          name: 'Mithun (Gayal)',
          scientific: 'Bos frontalis',
          type: 'Indigenous Bovine',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Sacred semi-domesticated bovine of indigenous hill tribes, symbolizing status, prosperity, and ecological harmony.',
          sightings: []
        }
      ]
    },
    'meghalaya': {
      id: 'meghalaya',
      code: 'IN-ML',
      name: 'Meghalaya',
      zone: 'east',
      tagline: 'The Abode of Clouds, Living Root Bridges & Nokrek Biosphere',
      emblemTitle: 'Official Seal of Meghalaya',
      emblemDescription: 'Ashoka lion capital atop traditional Khasi and Garo shields over rolling cloudy mountains.',
      emblemUrl: 'assets/images/emblems/meghalaya_emblem.png',
      biome: 'Montane Subtropical Cloud Rainforests & Limestone Karst Canyons',
      touristSpots: [
        {
          id: 'spot-ml-nokrek',
          name: 'Nokrek Biosphere Reserve',
          subName: 'UNESCO Biosphere in the Garo Hills & Wild Citrus Gene Sanctuary',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'Centred on Nokrek Peak, this untouched cloud forest is the ancestral home of the Indian Wild Orange (Citrus indica) and a vital refuge for Red Pandas and Asian Elephants.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Trek through Daribokgre village to Nokrek summit. The dense evergreen canopy is frequently cloaked in magical swirling mist.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-ml-cherrapunji',
          name: 'Cherrapunji & Nongriat Living Root Bridges',
          subName: 'Bio-Engineered Botanical Architecture of the Khasi People',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'Centuries-old suspension bridges woven from the living aerial roots of Ficus elastica trees across roaring mountain torrents in the world\'s wettest region.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Trek down the 3,500 stone steps to the Double Decker Root Bridge in Nongriat. Swim in the crystal-clear emerald pools below.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-ml-1',
          name: 'Clouded Leopard',
          scientific: 'Neofelis nebulosa',
          type: 'Arboreal Apex Feline',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          notes: 'Official state animal of Meghalaya, capable of climbing down trees headfirst thanks to flexible ankle joints.',
          sightings: []
        }
      ]
    },
    'nagaland': {
      id: 'nagaland',
      code: 'IN-NL',
      name: 'Nagaland',
      zone: 'east',
      tagline: 'The Patkai Mountain Ridge, Dzukou Valley & Tragopan Shrines',
      emblemTitle: 'Official Seal of Nagaland',
      emblemDescription: 'Mithun bull centered within a circle with crossed Naga spears and the motto Unity.',
      emblemUrl: 'assets/images/emblems/nagaland_emblem.png',
      biome: 'Subtropical Evergreen Pine Ridges & Montane Wet Temperate Forests',
      touristSpots: [
        {
          id: 'spot-nl-dzukou',
          name: 'Dzukou Valley & Lily Sanctuary',
          subName: 'Pristine High-Altitude Rolling Green Valley of Whispering Brooks',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'Sitting at 2,452m on the border of Nagaland and Manipur, Dzukou is renowned for its undulating carpet of green bamboo ridges and endemic Dzukou Lilies.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The Viswema trekking route offers steady ascents. June-July is peak blooming season for white and pink lilies.'
            }
          ],
          userUploads: []
        },
        {
          id: 'spot-nl-intanki',
          name: 'Intanki National Park',
          subName: 'Peren Valley Hoolock Gibbon & Hornbill Rainforest',
          imageUrl: 'assets/images/black_drongo.jpg',
          description: 'Spanning 202 sq km in Peren district, Intanki features dense semi-evergreen forests, home to wild Mithuns, tiger corridors, and dancing hornbills.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Listen for the haunting duet calls of Hoolock Gibbons echoing across the canopy between 6:00 AM and 8:00 AM.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-nl-1',
          name: 'Blyth\'s Tragopan',
          scientific: 'Tragopan blythii',
          type: 'Endangered Montane Pheasant',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Official state bird of Nagaland, exhibiting radiant crimson and gold plumage, protected passionately by local village conservation reserves.',
          sightings: []
        }
      ]
    },
    'manipur': {
      id: 'manipur',
      code: 'IN-MN',
      name: 'Manipur',
      zone: 'east',
      tagline: 'Loktak Floating Phumdis & The World\'s Only Floating National Park',
      emblemTitle: 'Official Emblem of Manipur',
      emblemDescription: 'Kangla Sha (mythical dragon-lion guardian of the Meitei kings of Kangla Palace).',
      emblemUrl: 'assets/images/emblems/manipur_emblem.svg',
      biome: 'Freshwater Wetland Marsh with Floating Phumdis & Subtropical Hills',
      touristSpots: [
        {
          id: 'spot-mn-keibul',
          name: 'Keibul Lamjao National Park',
          subName: 'The World\'s Only Floating National Park in Loktak Lake',
          imageUrl: 'assets/images/kabar_lotus_flower.jpg',
          description: 'An extraordinary 40 sq km sanctuary formed by floating mats of organic soil and vegetation called phumdis, preserving the critically endangered Sangai dancing deer.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Climb the Sendra hill watchtower at sunrise. The gentle morning mist rising off Loktak Lake creates surreal photography.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-mn-1',
          name: 'Sangai (Dancing Deer)',
          scientific: 'Rucervus eldii eldii',
          type: 'Endangered Wetland Deer',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Official state animal of Manipur, gracefully balancing on floating phumdis with distinctive forward-curving brow antlers.',
          sightings: []
        }
      ]
    },
    'mizoram': {
      id: 'mizoram',
      code: 'IN-MZ',
      name: 'Mizoram',
      zone: 'east',
      tagline: 'Blue Mountain Phawngpui Canopies & Dampa Tiger Corridors',
      emblemTitle: 'Official Seal of Mizoram',
      emblemDescription: 'Ashoka lion capital rising over green mountain peaks framed by bamboo stalks and traditional Mizo patterns.',
      emblemUrl: 'assets/images/emblems/mizoram_emblem.svg',
      biome: 'Montane Subtropical Wet Forests & Bamboo Clustered Ridges',
      touristSpots: [
        {
          id: 'spot-mz-phawngpui',
          name: 'Phawngpui Blue Mountain National Park',
          subName: 'The Highest Peak in Mizoram & Mountain Rhododendron Forest',
          imageUrl: 'assets/images/realistic_ancient_tree.jpg',
          description: 'Perched at 2,157m near the Myanmar border, Phawngpui features steep cliff faces, bamboo brakes, and clouds of orchids overlooking the Chhimtuipui River.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'The cliff cliffs of Thlazuang Kham drop vertically thousands of feet into the valley below. Carry ultra-wide landscape optics.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-mz-1',
          name: 'Serow',
          scientific: 'Capricornis sumatraensis',
          type: 'Montane Goat-Antelope',
          imageUrl: 'assets/images/kaziranga_rhino.jpg',
          notes: 'Official state animal of Mizoram, adept at navigating nearly vertical cliff faces in dense mountain bamboo.',
          sightings: []
        }
      ]
    },
    'tripura': {
      id: 'tripura',
      code: 'IN-TR',
      name: 'Tripura',
      zone: 'east',
      tagline: 'Sepahijala Phayre\'s Leaf Monkey Shrines & Gomati Wetlands',
      emblemTitle: 'Official Emblem of Tripura',
      emblemDescription: 'Ashoka lion capital atop the motto Satyameva Jayate surrounded by bamboo and paddy stalks with the Manikya dynasty sun emblem.',
      emblemUrl: 'assets/images/emblems/tripura_emblem.svg',
      biome: 'Moist Deciduous Dipterocarp Rainforest & Riparian Basins',
      touristSpots: [
        {
          id: 'spot-tr-clouded',
          name: 'Clouded Leopard National Park (Rajbari)',
          subName: 'Protected Feline Sanctuary in the Gomati River Basin',
          imageUrl: 'assets/images/valmiki_tiger.jpg',
          description: 'Spanning over 5 sq km of dense sal and moist deciduous forest, Rajbari is famous for preserving Clouded Leopards and herds of wild Indian Bison.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Combine your visit with the nearby Sepahijala Primate Center for close observation of Phayre\'s Leaf Monkeys.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-tr-1',
          name: 'Phayre\'s Leaf Monkey',
          scientific: 'Trachypithecus phayrei',
          type: 'Rare Arboreal Primate',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: 'Official state animal of Tripura, distinguished by dramatic white circles around dark eyes resembling spectacles.',
          sightings: []
        }
      ]
    },
    'andaman_nicobar': {
      id: 'andaman_nicobar',
      code: 'IN-AN',
      name: 'Andaman & Nicobar Islands',
      zone: 'east',
      tagline: 'Bay of Bengal Pristine Archipelago Coral Atolls & Dugong Realm',
      emblemTitle: 'National Emblem of India (Andaman & Nicobar)',
      emblemDescription: 'Ashoka lion capital symbolizing the maritime sovereignty of India across the Andaman Sea.',
      emblemUrl: 'assets/images/emblems/andaman_nicobar_emblem.svg',
      biome: 'Tropical Pristine Island Rainforests, Coral Reefs & Mangrove Swamps',
      touristSpots: [
        {
          id: 'spot-an-marine',
          name: 'Mahatma Gandhi Marine National Park',
          subName: 'Wandoor Coral Reefs & Turtle Nesting Marine Biosphere',
          imageUrl: 'assets/images/gangetic_dolphin.jpg',
          description: 'Encompassing 15 pristine islands in the Labyrinth archipelago, this marine park protects vibrant coral gardens, sea turtles, and over 270 bird species.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Take the glass-bottom boat and snorkeling expeditions at Jolly Buoy or Red Skin Island. Water clarity exceeds 20 meters.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-an-1',
          name: 'Dugong (Sea Cow)',
          scientific: 'Dugong dugon',
          type: 'Herbivorous Marine Mammal',
          imageUrl: 'assets/images/gangetic_dolphin.jpg',
          notes: 'Official state animal of Andaman & Nicobar, gently grazing on submerged seagrass meadows in shallow coastal bays.',
          sightings: []
        }
      ]
    },
    'lakshadweep': {
      id: 'lakshadweep',
      code: 'IN-LD',
      name: 'Lakshadweep',
      zone: 'south',
      tagline: 'Arabian Sea Coral Atolls, Lagoons & Pelagic Bird Colonies',
      emblemTitle: 'National Emblem of India (Lakshadweep)',
      emblemDescription: 'Ashoka lion capital framed by twin butterflyfish and coconut palms over ocean waves.',
      emblemUrl: 'assets/images/emblems/lakshadweep_emblem.svg',
      biome: 'Coral Atolls, Pelagic Marine Reefs & Coconut Littoral Forests',
      touristSpots: [
        {
          id: 'spot-ld-pitti',
          name: 'Pitti Bird Sanctuary',
          subName: 'Isolated Pelagic Tern Breeding Coral Atoll in the Arabian Sea',
          imageUrl: 'assets/images/kabar_lotus_flower.jpg',
          description: 'An uninhabited sand bank atoll serving as one of the most critical breeding grounds in the Indian Ocean for Sooty Terns and Greater Crested Terns.',
          tipsAndTricks: [
            {
              author: 'Aadi [Creator]',
              isCreator: true,
              date: 'Verified Creator Guide',
              tip: 'Boat journeys from Kavaratti or Agatti require special permits. Binoculars are essential as landings are restricted to protect ground nests.'
            }
          ],
          userUploads: []
        }
      ],
      floraFauna: [
        {
          id: 'spec-ld-1',
          name: 'Butterflyfish',
          scientific: 'Chaetodontidae',
          type: 'Coral Reef Teleost',
          imageUrl: 'assets/images/jewel_beetle_macro.jpg',
          notes: 'Official state animal of Lakshadweep, displaying brilliant geometric yellow, white, and black markings across coral reefs.',
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
  let mapStateDropdown;

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

  let chipsContainer;
  let zoneFilterBtns;
  let stateSearchInput;
  let btnClearStateSearch;
  let chipsCounterBadge;

  /* --------------------------------------------------------------------------
     Initialization
     -------------------------------------------------------------------------- */
  function initMaproom() {
    loadMaproomData();
    cacheDOMElements();
    setupModals();
    setupStateChips();
    bindMaproomEvents();
    renderStateDossier(activeStateKey);
  }

  function loadMaproomData() {
    try {
      const stored = localStorage.getItem(MAPROOM_STORAGE_KEY);
      if (stored) {
        maproomDispatches = JSON.parse(stored);
        // Ensure all stored uploads and sightings have an id for reliable deletion
        Object.keys(maproomDispatches).forEach(key => {
          if (Array.isArray(maproomDispatches[key].uploads)) {
            maproomDispatches[key].uploads.forEach((up, idx) => {
              if (!up.id) up.id = 'up-' + key + '-' + idx + '-' + Date.now();
            });
          }
          if (Array.isArray(maproomDispatches[key].sightings)) {
            maproomDispatches[key].sightings.forEach((s, idx) => {
              if (!s.id) s.id = 'sighting-' + key + '-' + idx + '-' + Date.now();
            });
          }
          if (Array.isArray(maproomDispatches[key].customDestinations) && STATES_DATA[key]) {
            if (!STATES_DATA[key].touristSpots) STATES_DATA[key].touristSpots = [];
            const existingIds = new Set(STATES_DATA[key].touristSpots.map(s => s.id));
            maproomDispatches[key].customDestinations.forEach(spot => {
              if (!spot.id) spot.id = 'custom-spot-' + key + '-' + Date.now();
              // Correct any obsolete hardcoded Nalanda fallback icon
              if (spot.imageUrl === 'assets/images/nalanda_ruins.jpg' && !spot.name.toLowerCase().includes('nalanda')) {
                spot.imageUrl = generateAILandmarkIcon(spot.name);
              }
              if (!existingIds.has(spot.id)) {
                STATES_DATA[key].touristSpots.unshift(spot);
              }
            });
          }
        });
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
    mapStateDropdown = document.getElementById('mapStateDropdown');
    chipsContainer = document.getElementById('maproomChipsContainer');
    zoneFilterBtns = document.querySelectorAll('.zone-filter-btn');
    stateSearchInput = document.getElementById('maproomStateSearchInput');
    btnClearStateSearch = document.getElementById('btnClearStateSearch');
    chipsCounterBadge = document.getElementById('chipsCounterBadge');
  }

  function setupStateChips() {
    if (!chipsContainer) return;

    // Render chips dynamically for all 33 states
    const stateKeys = Object.keys(STATES_DATA);
    chipsContainer.innerHTML = stateKeys.map(key => {
      const state = STATES_DATA[key];
      const isActive = key === activeStateKey;
      return `
        <button type="button" 
                class="state-chip-btn ${isActive ? 'active' : ''}" 
                data-state="${key}" 
                data-zone="${state.zone || 'north'}"
                title="Explore ${escapeHtml(state.name)} Wildlife Corridors"
        >${escapeHtml(state.name)}</button>
      `;
    }).join('');

    stateSelectChips = chipsContainer.querySelectorAll('.state-chip-btn');

    // Click on chip
    stateSelectChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const stateKey = chip.getAttribute('data-state');
        if (stateKey && STATES_DATA[stateKey]) {
          renderStateDossier(stateKey);
        }
      });
    });

    // Zone filters
    zoneFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        zoneFilterBtns.forEach(b => b.classList.toggle('active', b === btn));
        filterChipsByZoneAndSearch();
      });
    });

    // Live search input
    stateSearchInput?.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      if (btnClearStateSearch) {
        btnClearStateSearch.style.display = q ? 'inline-block' : 'none';
      }
      filterChipsByZoneAndSearch();
    });

    // Clear search button
    btnClearStateSearch?.addEventListener('click', () => {
      if (stateSearchInput) stateSearchInput.value = '';
      btnClearStateSearch.style.display = 'none';
      filterChipsByZoneAndSearch();
      stateSearchInput?.focus();
    });
  }

  function filterChipsByZoneAndSearch() {
    const activeZoneBtn = document.querySelector('.zone-filter-btn.active');
    const selectedZone = activeZoneBtn ? activeZoneBtn.getAttribute('data-zone') : 'all';
    const query = stateSearchInput ? stateSearchInput.value.toLowerCase().trim() : '';

    let visibleCount = 0;
    if (stateSelectChips) {
      stateSelectChips.forEach(chip => {
        const chipZone = chip.getAttribute('data-zone') || 'north';
        const chipText = chip.textContent.toLowerCase();
        const matchesZone = (selectedZone === 'all' || chipZone === selectedZone);
        const matchesQuery = !query || chipText.includes(query);

        if (matchesZone && matchesQuery) {
          chip.classList.remove('hidden');
          visibleCount++;
        } else {
          chip.classList.add('hidden');
        }
      });
    }

    if (chipsCounterBadge) {
      chipsCounterBadge.textContent = `${visibleCount} SHOWN`;
    }
  }

  function renderStateDossier(stateKey) {
    activeStateKey = stateKey;
    const data = STATES_DATA[stateKey] || STATES_DATA['bihar'];

    // Update Header
    if (stateTitleEl) stateTitleEl.textContent = data.name.toUpperCase();
    if (stateTaglineEl) stateTaglineEl.textContent = data.tagline;
    if (stateEmblemEl) {
      const emblemSrc = data.emblemUrl || `assets/images/emblems/${stateKey}_emblem.png`;
      stateEmblemEl.title = `${data.emblemTitle || `Official State Emblem of ${data.name}`} • Source: Wikipedia`;
      stateEmblemEl.innerHTML = `
        <img src="${emblemSrc}" 
             alt="${escapeHtml(data.emblemTitle || `Official State Emblem of ${data.name}`)}" 
             class="state-emblem-img" 
             title="${escapeHtml(data.emblemTitle || `Official State Emblem of ${data.name}`)} (Source: Wikipedia)"
             onerror="this.onerror=null; this.src='assets/images/drongo_crest_logo.png';"
        />
      `;
    }

    // Synchronize Dropdown
    if (mapStateDropdown && mapStateDropdown.value !== stateKey) {
      mapStateDropdown.value = stateKey;
    }

    // Highlight active state on SVG map
    document.querySelectorAll('.map-state-path').forEach(path => {
      const isSelected = path.getAttribute('data-state') === stateKey;
      path.classList.toggle('active', isSelected);
    });

    // Highlight active chip and ensure visibility
    document.querySelectorAll('.state-chip-btn').forEach(chip => {
      const isSelected = chip.getAttribute('data-state') === stateKey;
      chip.classList.toggle('active', isSelected);
      if (isSelected) {
        if (chip.classList.contains('hidden')) {
          chip.classList.remove('hidden');
        }
        chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    });

    // Render active tab content
    if (activeTabType === 'touristSpots') {
      renderTouristSpots(data);
    } else {
      renderFloraFauna(data);
    }
  }

  let activeDetailSpot = null;
  let activeDetailStateData = null;

  function renderTouristSpots(data) {
    if (!contentDisplayPane) return;

    // Category A: Travel Destinations (Max 10 locations per state for now)
    const spots = (data.touristSpots || []).slice(0, 10);

    contentDisplayPane.innerHTML = `
      <div class="maproom-category-header">
        <div class="category-meta">
          <span class="category-pill-tag">CATEGORY A</span>
          <h3 class="category-title">Travel Destinations in ${escapeHtml(data.name)}</h3>
          <p class="category-desc">Verified archaeological enclaves, national parks, and wild river corridors (Max 10 locations). Visuals and footage hosted on Instagram &amp; YouTube.</p>
        </div>
        <button type="button" class="btn-maproom-add-action" id="btnAddTravelDest">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <span>+ Add Travel Destination</span>
        </button>
      </div>

      <div class="maproom-dest-grid">
        ${spots.map((spot, index) => {
          let photoLink = spot.photoUrl || spot.igUrl || '';
          let videoLink = spot.videoUrl || spot.ytUrl || '';
          // Only for pre-seeded catalog destinations where neither is stored explicitly, supply exploratory defaults
          if (!spot.isUserAdded) {
            if (!photoLink) photoLink = `https://www.instagram.com/explore/tags/${encodeURIComponent(spot.name.replace(/\s+/g, ''))}/`;
            if (!videoLink) videoLink = `https://www.youtube.com/results?search_query=${encodeURIComponent(spot.name + ' documentary')}`;
          }

          // Avoid displaying Nalanda ruins fallback if the spot is not actually Nalanda
          const spotImage = (spot.imageUrl && (spot.imageUrl !== 'assets/images/nalanda_ruins.jpg' || spot.name.toLowerCase().includes('nalanda')))
            ? spot.imageUrl
            : generateAILandmarkIcon(spot.name);

          let guidelinesHtml = '';
          if (spot.guidelines) {
            guidelinesHtml = escapeHtml(spot.guidelines).replace(/\n/g, '<br/>');
          } else if (spot.tipsAndTricks && spot.tipsAndTricks.length > 0) {
            const firstTip = spot.tipsAndTricks[0];
            guidelinesHtml = `<div class="dest-guideline-item"><strong>Precautions &amp; Timings:</strong> ${escapeHtml(firstTip.tip)}</div><div class="dest-guideline-item" style="margin-top:4px;"><strong>Available Facilities:</strong> Forest rest houses, certified eco-guides, vehicle safaris, and authorized checkpoints.</div>`;
          } else {
            guidelinesHtml = `<div class="dest-guideline-item"><strong>Precautions:</strong> Maintain silent field discipline and carry approved permits.</div><div class="dest-guideline-item" style="margin-top:4px;"><strong>Timings:</strong> 06:00 AM – 05:30 PM.</div><div class="dest-guideline-item" style="margin-top:4px;"><strong>Available Facilities:</strong> Registered eco-guides, observation towers, visitor interpretation center.</div>`;
          }

          return `
            <article class="maproom-dest-card" id="${spot.id}">
              <div class="dest-card-top-row">
                <div class="dest-card-thumb-wrap">
                  <img src="${spotImage}" alt="${escapeHtml(spot.name)}" class="dest-card-thumb" loading="lazy" onerror="this.onerror=null; this.src=generateAILandmarkIcon('${escapeHtml(spot.name)}');" />
                </div>
                <div class="dest-card-main">
                  <div class="dest-header-row">
                    <h4 class="dest-card-title">${escapeHtml(spot.name)}</h4>
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span class="dest-index-badge">#${index + 1}</span>
                      ${spot.isUserAdded ? `
                        <button type="button" class="dest-card-delete-btn" data-spot-id="${spot.id}" title="Delete destination record">
                          ✕ Delete
                        </button>
                      ` : ''}
                    </div>
                  </div>
                  <p class="dest-card-intro">${escapeHtml(spot.description || spot.introText || '')}</p>
                  <div class="dest-link-buttons-row">
                    ${photoLink ? `
                      <a href="${photoLink}" target="_blank" rel="noopener noreferrer" class="btn-hub-link btn-hub-ig" title="View field photography on Instagram">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span>View Photos</span>
                      </a>
                    ` : ''}
                    ${videoLink ? `
                      <a href="${videoLink}" target="_blank" rel="noopener noreferrer" class="btn-hub-link btn-hub-yt" title="Watch 4K video footage on YouTube">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        <span>Watch Video</span>
                      </a>
                    ` : ''}
                  </div>
                </div>
              </div>
              <div class="dest-tips-structured-block">
                <div class="dest-tips-title">
                  <span>✦ Tourist Guidelines (Precautions, Timings, Available Facilities)</span>
                </div>
                <div class="dest-guidelines-body">
                  ${guidelinesHtml}
                </div>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    `;

    // Attach delete listeners
    contentDisplayPane.querySelectorAll('.dest-card-delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const spotId = btn.getAttribute('data-spot-id');
        deleteCustomSpot(spotId);
      });
    });

    document.getElementById('btnAddTravelDest')?.addEventListener('click', () => {
      openSpotMediaModal(data.id, data.name, data.name);
    });
  }

  function deleteCustomSpot(spotId) {
    const stateData = STATES_DATA[activeStateKey];
    if (!stateData) return;
    if (confirm('Delete this travel destination?')) {
      if (stateData.touristSpots) {
        stateData.touristSpots = stateData.touristSpots.filter(s => s.id !== spotId);
      }
      if (maproomDispatches[activeStateKey] && maproomDispatches[activeStateKey].customDestinations) {
        maproomDispatches[activeStateKey].customDestinations = maproomDispatches[activeStateKey].customDestinations.filter(s => s.id !== spotId);
      }
      saveMaproomData();
      renderTouristSpots(stateData);
      showMapToast('✓ Destination deleted successfully.');
    }
  }

  function openDestinationDetailModal(spot, data) {
    activeDetailSpot = spot;
    activeDetailStateData = data;

    const modal = document.getElementById('destinationDetailModal');
    if (!modal) return;

    renderDestinationModalContent(spot, data);

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function renderDestinationModalContent(spot, data) {
    const modal = document.getElementById('destinationDetailModal');
    if (!modal || !spot || !data) return;

    const customSpotUploads = (maproomDispatches[spot.id]?.uploads) || [];
    const customTips = (maproomDispatches[spot.id]?.tips) || [];
    const allTips = [...spot.tipsAndTricks, ...customTips];

    // Badge, Title, Subtitle
    const badgeEl = document.getElementById('destModalBadge');
    if (badgeEl) badgeEl.textContent = `${data.name.toUpperCase()} • WILDLIFE & HERITAGE DESTINATION`;

    const titleEl = document.getElementById('destModalTitle');
    if (titleEl) titleEl.textContent = spot.name;

    const subEl = document.getElementById('destModalSubtitle');
    if (subEl) subEl.textContent = spot.subName || '';

    // Hero image & State Badge
    const heroImg = document.getElementById('destModalHeroImg');
    if (heroImg) {
      heroImg.src = spot.imageUrl;
      heroImg.alt = spot.name;
    }

    const stateBadge = document.getElementById('destModalStateBadge');
    if (stateBadge) stateBadge.textContent = data.name;

    // Zoom button
    const zoomBtn = document.getElementById('destModalZoomBtn');
    if (zoomBtn) {
      zoomBtn.onclick = () => {
        if (window.openDrongoLightbox) {
          window.openDrongoLightbox({
            type: 'photo',
            title: spot.name,
            mediaUrl: spot.imageUrl,
            badge: `HERITAGE DESTINATION • ${data.name.toUpperCase()}`,
            location: `${spot.name} • ${data.name}`,
            author: 'Drongo Wildlife Cartography',
            description: spot.description,
            date: 'Institutional Record'
          });
        }
      };
    }

    // Hero Image click also zooms
    if (heroImg) {
      heroImg.style.cursor = 'pointer';
      heroImg.onclick = zoomBtn ? zoomBtn.onclick : null;
    }

    // Description text
    const descEl = document.getElementById('destModalDesc');
    if (descEl) descEl.textContent = spot.description;

    // Action buttons inside modal
    const uploadBtn = document.getElementById('destModalUploadBtn');
    if (uploadBtn) {
      uploadBtn.onclick = () => {
        openSpotMediaModal(spot.id, spot.name, data.name);
      };
    }

    const tipBtn = document.getElementById('destModalTipBtn');
    if (tipBtn) {
      tipBtn.onclick = () => {
        openSpotTipModal(spot.id, spot.name);
      };
    }

    // Tips count and list
    const tipsCountEl = document.getElementById('destModalTipsCount');
    if (tipsCountEl) tipsCountEl.textContent = `${allTips.length} ${allTips.length === 1 ? 'Tip' : 'Tips'}`;

    const tipsListEl = document.getElementById('destModalTipsList');
    if (tipsListEl) {
      tipsListEl.innerHTML = allTips.map((t, tIdx) => {
        const isCreator = t.isCreator || t.author.toLowerCase().includes('aadi') || t.author.toLowerCase().includes('creator');
        const isCustomTip = tIdx >= spot.tipsAndTricks.length;
        return `
          <div class="tip-card ${isCreator ? 'creator-tip' : 'contributor-tip'}">
            <div class="tip-header">
              <span class="${isCreator ? 'creator-badge' : 'visitor-badge'}">
                ${isCreator ? '👑 Aadi [Creator]' : `🌿 ${escapeHtml(t.author)}`}
              </span>
              <span class="tip-date">${t.date || 'Field Guide'}</span>
              ${isCustomTip ? `
                <button type="button" class="btn-delete-tip modal-tip-delete-btn" data-spot-id="${spot.id}" data-tip-index="${tIdx - spot.tipsAndTricks.length}" title="Delete this tip" style="background: none; border: none; color: #ff6b6b; cursor: pointer; font-size: 11px; margin-left: auto;">
                  ✕ Delete
                </button>
              ` : ''}
            </div>
            <p class="tip-text">${escapeHtml(t.tip)}</p>
          </div>
        `;
      }).join('');

      // Wire delete tip buttons inside modal
      tipsListEl.querySelectorAll('.modal-tip-delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const spotId = btn.getAttribute('data-spot-id');
          const tipIdx = parseInt(btn.getAttribute('data-tip-index'), 10);
          deleteSpotTip(spotId, tipIdx);
        });
      });
    }

    // Uploads section
    const uploadsCountEl = document.getElementById('destModalUploadsCount');
    if (uploadsCountEl) uploadsCountEl.textContent = `${customSpotUploads.length} ${customSpotUploads.length === 1 ? 'Dispatch' : 'Dispatches'}`;

    const uploadsGridEl = document.getElementById('destModalUploadsGrid');
    if (uploadsGridEl) {
      if (customSpotUploads.length === 0) {
        uploadsGridEl.innerHTML = `
          <div class="dest-empty-uploads-prompt" style="padding: 10px; background: rgba(10, 43, 71, 0.03); border-radius: 6px; text-align: center;">
            <p style="margin: 0 0 8px; font-size: 12px; color: var(--text-muted);">No traveler dispatches uploaded yet for ${escapeHtml(spot.name)}. Be the first to share your field photos or wildlife clips!</p>
            <button type="button" class="btn-dest-inline-upload" style="background: #0A2B47; border: 1px solid rgba(212, 175, 55, 0.6); padding: 6px 14px; font-size: 11px; font-weight: 700; border-radius: 4px; color: #FFFFFF; cursor: pointer;">
              + Upload First Photo / Video
            </button>
          </div>
        `;
        uploadsGridEl.querySelector('.btn-dest-inline-upload')?.addEventListener('click', () => {
          openSpotMediaModal(spot.id, spot.name, data.name);
        });
      } else {
        uploadsGridEl.innerHTML = customSpotUploads.map((up, uIdx) => {
          const uploadId = up.id || `up-${spot.id}-${uIdx}`;
          return `
            <div class="mini-upload-thumb modal-upload-thumb" data-spot-id="${spot.id}" data-upload-id="${uploadId}" title="Tap to enlarge: ${escapeHtml(up.title)}">
              <div class="thumb-media-wrapper">
                ${up.type === 'video' ? `
                  <video src="${up.url}" preload="metadata" muted></video>
                  <span class="video-play-overlay">▶ 4K VIDEO</span>
                ` : `
                  <img src="${up.url}" alt="${escapeHtml(up.title)}" loading="lazy" onerror="this.src='assets/images/nalanda_ruins.jpg';"/>
                  <span class="photo-expand-overlay">🔍 ENLARGE</span>
                `}
                <button type="button" class="btn-delete-spot-media modal-media-delete-btn" data-spot-id="${spot.id}" data-upload-id="${uploadId}" data-spot-name="${escapeHtml(spot.name)}" title="Delete this ${up.type}">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                  Delete
                </button>
              </div>
              <div class="mini-upload-caption">
                <strong>${escapeHtml(up.title)}</strong>
                <div class="mini-upload-meta">
                  <small>By ${escapeHtml(up.author)}</small>
                  <span class="tap-to-open-hint">Open ↗</span>
                </div>
              </div>
            </div>
          `;
        }).join('');

        // Wire media clicks & delete inside modal
        uploadsGridEl.querySelectorAll('.modal-upload-thumb').forEach(thumb => {
          thumb.addEventListener('click', (e) => {
            if (e.target.closest('.modal-media-delete-btn')) return;
            const spotId = thumb.getAttribute('data-spot-id');
            const uploadId = thumb.getAttribute('data-upload-id');
            const uploads = maproomDispatches[spotId]?.uploads || [];
            const item = uploads.find(u => u.id === uploadId);
            if (!item) return;

            if (window.openDrongoLightbox) {
              window.openDrongoLightbox({
                type: item.type || 'photo',
                title: item.title,
                mediaUrl: item.url,
                videoUrl: item.type === 'video' ? item.url : null,
                badge: `${item.type === 'video' ? '4K VIDEO' : 'PHOTO'} DISPATCH • ${data.name.toUpperCase()}`,
                location: `${spot.name} • ${data.name}`,
                author: item.author,
                date: item.date,
                description: `Field media dispatch contributed to ${spot.name} archive in ${data.name}. Recorded by ${item.author}.`,
                onDelete: () => {
                  deleteSpotMedia(spotId, uploadId, spot.name);
                }
              });
            }
          });
        });

        uploadsGridEl.querySelectorAll('.modal-media-delete-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const spotId = btn.getAttribute('data-spot-id');
            const uploadId = btn.getAttribute('data-upload-id');
            const spotName = btn.getAttribute('data-spot-name') || 'this spot';
            deleteSpotMedia(spotId, uploadId, spotName);
          });
        });
      }
    }
  }

  function renderFloraFauna(data) {
    if (!contentDisplayPane) return;

    // Category B: Flora and Fauna
    const speciesList = data.floraFauna || [];

    contentDisplayPane.innerHTML = `
      <div class="maproom-category-header">
        <div class="category-meta">
          <span class="category-pill-tag">CATEGORY B</span>
          <h3 class="category-title">Flora and Fauna of ${escapeHtml(data.name)}</h3>
          <p class="category-desc">Indigenous species, state emblems, and migratory wildlife. Media hosted externally on Instagram &amp; YouTube with instant access links.</p>
        </div>
        <button type="button" class="btn-maproom-add-action" id="btnAddFaunaRecord">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <span>+ Add Flora &amp; Fauna Record</span>
        </button>
      </div>

      <div class="maproom-fauna-grid">
        ${speciesList.map((spec, index) => {
          let photoLink = spec.photoUrl || spec.igUrl || '';
          let videoLink = spec.videoUrl || spec.ytUrl || '';
          let shortLink = spec.shortUrl || spec.igShortUrl || '';
          if (!spec.isUserAdded) {
            if (!photoLink) photoLink = `https://www.instagram.com/explore/tags/${encodeURIComponent(spec.name.replace(/\s+/g, ''))}/`;
            if (!videoLink) videoLink = `https://www.youtube.com/results?search_query=${encodeURIComponent(spec.name + ' wildlife footage')}`;
            if (!shortLink) shortLink = 'https://www.instagram.com/reels/';
          }

          const tipsText = spec.spottingTips || spec.tips || 'Best observed at early morning and twilight near river channels and canopy corridors. Maintain ethical telephoto distance of 25+ meters.';

          return `
            <article class="maproom-fauna-card" id="${spec.id}">
              <div class="fauna-card-top-row">
                <div class="fauna-card-icon-wrap">
                  <img src="${spec.imageUrl || 'assets/images/black_drongo.jpg'}" alt="${escapeHtml(spec.name)}" class="fauna-card-icon" loading="lazy" onerror="this.src='assets/images/black_drongo.jpg';" />
                </div>
                <div class="fauna-card-main">
                  <div class="fauna-header-row">
                    <h4 class="fauna-card-name">${escapeHtml(spec.name)}</h4>
                    <span class="fauna-rank-badge">#${index + 1}</span>
                  </div>
                  <div class="fauna-card-scientific"><em>${escapeHtml(spec.scientific || '')}</em></div>
                  ${(spec.notes || spec.description) ? `<p class="fauna-card-desc">${escapeHtml(spec.notes || spec.description)}</p>` : ''}
                  <div class="fauna-link-buttons-row">
                    ${photoLink ? `
                      <a href="${photoLink}" target="_blank" rel="noopener noreferrer" class="btn-hub-link btn-hub-ig" title="View photography on Instagram">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span>Photos</span>
                      </a>
                    ` : ''}
                    ${videoLink ? `
                      <a href="${videoLink}" target="_blank" rel="noopener noreferrer" class="btn-hub-link btn-hub-yt" title="Watch video on YouTube">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        <span>Videos</span>
                      </a>
                    ` : ''}
                    ${shortLink ? `
                      <a href="${shortLink}" target="_blank" rel="noopener noreferrer" class="btn-hub-link btn-hub-short" title="Watch short film on Instagram">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        <span>Short Films</span>
                      </a>
                    ` : ''}
                  </div>
                </div>
              </div>
              <div class="fauna-tips-block">
                <div class="fauna-tips-title">
                  <span>💡 Spotting Tips &amp; Behavioral Notes</span>
                </div>
                <div class="fauna-tips-text">
                  ${escapeHtml(tipsText).replace(/\n/g, '<br/>')}
                </div>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    `;

    document.getElementById('btnAddFaunaRecord')?.addEventListener('click', () => {
      openSpeciesSightingModal(data.id, data.name);
    });
  }

  /* --------------------------------------------------------------------------
     AI Landmark Icon Generator & Wikipedia Image Auto-Fetcher Engine
     -------------------------------------------------------------------------- */
  function generateAILandmarkIcon(name) {
    const size = 160;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return 'assets/images/black_drongo.jpg';

    // Hash name to determine palette
    const clean = (name || 'Landmark').trim();
    let hash = 0;
    for (let i = 0; i < clean.length; i++) {
      hash = (hash << 5) - hash + clean.charCodeAt(i);
      hash |= 0;
    }
    const palettes = [
      { bg1: '#0A2B47', bg2: '#164871', gold: '#F3D99E', accent: '#C89A3D' }, // Imperial Navy
      { bg1: '#0B3323', bg2: '#185B40', gold: '#E2F3D9', accent: '#48BB78' }, // Wildlife Emerald
      { bg1: '#3A1508', bg2: '#682A13', gold: '#FDE68A', accent: '#ED8936' }, // Terai Terracotta
      { bg1: '#240D3A', bg2: '#4A1D75', gold: '#E9D8FD', accent: '#9F7AEA' }, // Royal Monograph
      { bg1: '#1F2937', bg2: '#374151', gold: '#FEF3C7', accent: '#ECC94B' }  // Dark Mineral
    ];
    const pal = palettes[Math.abs(hash) % palettes.length];

    // Radial gradient background
    const bgGrad = ctx.createRadialGradient(size / 2, size / 2, 10, size / 2, size / 2, size * 0.75);
    bgGrad.addColorStop(0, pal.bg2);
    bgGrad.addColorStop(1, pal.bg1);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, size, size);

    // Decorative inner gold border
    ctx.strokeStyle = pal.gold;
    ctx.lineWidth = 2.5;
    ctx.strokeRect(8, 8, size - 16, size - 16);

    // Corner flourishes
    ctx.fillStyle = pal.accent;
    const cornerSize = 7;
    ctx.fillRect(8, 8, cornerSize, cornerSize);
    ctx.fillRect(size - 8 - cornerSize, 8, cornerSize, cornerSize);
    ctx.fillRect(8, size - 8 - cornerSize, cornerSize, cornerSize);
    ctx.fillRect(size - 8 - cornerSize, size - 8 - cornerSize, cornerSize, cornerSize);

    // Architectural / Landmark Symbol Silhouette
    ctx.save();
    ctx.fillStyle = 'rgba(243, 217, 158, 0.18)';
    ctx.beginPath();
    ctx.moveTo(35, 120);
    ctx.lineTo(35, 65);
    ctx.arc(80, 65, 45, Math.PI, 0, false);
    ctx.lineTo(125, 120);
    ctx.lineTo(110, 120);
    ctx.lineTo(110, 75);
    ctx.arc(80, 75, 30, 0, Math.PI, true);
    ctx.lineTo(50, 120);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Landmark Initials (e.g. VM for Victoria Memorial, TQ for test q)
    const words = clean.split(/\s+/).filter(Boolean);
    let initials = '';
    if (words.length >= 2) {
      initials = (words[0][0] + words[1][0]).toUpperCase();
    } else if (clean.length >= 2) {
      initials = clean.substring(0, 2).toUpperCase();
    } else {
      initials = clean.toUpperCase();
    }

    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 2;

    ctx.fillStyle = pal.gold;
    ctx.font = 'bold 36px "Cinzel", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(initials, size / 2, size / 2 - 2);

    // Subtitle label "LANDMARK"
    ctx.font = '700 9px "Cinzel", sans-serif';
    ctx.fillStyle = pal.accent;
    ctx.fillText('LANDMARK', size / 2, size - 26);
    ctx.restore();

    return canvas.toDataURL('image/jpeg', 0.88);
  }

  function cropToAppIcon(imgUrl) {
    return new Promise((resolve) => {
      if (!imgUrl || imgUrl.startsWith('data:')) {
        resolve(imgUrl);
        return;
      }
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const size = 160;
          const canvas = document.createElement('canvas');
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve(imgUrl);
            return;
          }
          const srcW = img.naturalWidth || img.width;
          const srcH = img.naturalHeight || img.height;
          const scale = Math.max(size / srcW, size / srcH);
          const drawW = srcW * scale;
          const drawH = srcH * scale;
          const dx = (size - drawW) / 2;
          const dy = (size - drawH) / 2;

          ctx.drawImage(img, dx, dy, drawW, drawH);
          resolve(canvas.toDataURL('image/jpeg', 0.85));
        } catch (e) {
          // If crossOrigin canvas export is blocked, return original image url
          resolve(imgUrl);
        }
      };
      img.onerror = () => resolve(imgUrl);
      img.src = imgUrl;
    });
  }

  let autoFetchAbortController = null;

  async function fetchWikipediaOrAIImage(name) {
    const cleanName = (name || '').trim();
    const previewImg = document.getElementById('destAppIconPreview');
    const loader = document.getElementById('destAppIconLoader');
    const statusText = document.getElementById('destThumbStatusText');
    const badge = document.getElementById('destThumbBadge');
    const hiddenInput = document.getElementById('destInputGeneratedImage');
    const introTextarea = document.getElementById('destInputIntro');
    const photoInput = document.getElementById('destInputPhotoUrl');
    const videoInput = document.getElementById('destInputVideoUrl');
    const tipsTextarea = document.getElementById('destInputTips');

    if (!cleanName) {
      const placeholder = generateAILandmarkIcon('Tourist Destination');
      if (previewImg) previewImg.src = placeholder;
      if (hiddenInput) hiddenInput.value = placeholder;
      if (statusText) statusText.textContent = 'Enter destination name above to auto-fetch picture or generate AI icon.';
      if (badge) badge.textContent = 'AUTO-SYNC';
      return placeholder;
    }

    // Default Instagram & YouTube links + guidelines
    const cleanTag = cleanName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'touristspot';
    if (photoInput && (!photoInput.value || photoInput.value.includes('/tags/'))) {
      photoInput.value = `https://www.instagram.com/explore/tags/${cleanTag}/`;
    }
    if (videoInput && (!videoInput.value || videoInput.value.includes('search_query='))) {
      videoInput.value = `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanName + ' tour travel')}`;
    }
    if (tipsTextarea && !tipsTextarea.value.trim()) {
      tipsTextarea.value = `Precautions: Wear comfortable walking shoes and follow heritage rules.\nTimings: 09:00 AM – 06:00 PM.\nAvailable Facilities: Drinking water, restrooms, certified local guides.`;
    }

    if (loader) loader.style.display = 'flex';
    if (badge) badge.textContent = 'SEARCHING';

    try {
      if (autoFetchAbortController) autoFetchAbortController.abort();
      autoFetchAbortController = new AbortController();

      // 1. Try Wikipedia REST Summary
      const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanName)}`;
      const res = await fetch(summaryUrl, { signal: autoFetchAbortController.signal });

      if (res.ok) {
        const data = await res.json();
        const rawImgUrl = data.thumbnail?.source || data.originalimage?.source;

        if (data.extract && introTextarea && !introTextarea.value.trim()) {
          introTextarea.value = data.extract.substring(0, 240) + (data.extract.length > 240 ? '...' : '');
        }

        if (rawImgUrl) {
          const cropped = await cropToAppIcon(rawImgUrl);
          if (previewImg) previewImg.src = cropped;
          if (hiddenInput) hiddenInput.value = cropped;
          if (statusText) statusText.textContent = `✓ Found on Wikipedia: ${data.title}`;
          if (badge) badge.textContent = 'WIKIPEDIA';
          if (loader) loader.style.display = 'none';
          return cropped;
        }
      }

      // 2. Fallback: Wikipedia Search API for partial queries (e.g. "Victoria Memorial Kolkata")
      const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(cleanName + ' landmark India')}&gsrlimit=1&prop=pageimages|extracts&piprop=thumbnail&pithumbsize=400&exintro=1&explaintext=1&exchars=240&format=json&origin=*`;
      const searchRes = await fetch(searchUrl, { signal: autoFetchAbortController.signal });

      if (searchRes.ok) {
        const searchData = await searchRes.json();
        const pages = searchData.query?.pages;
        if (pages) {
          const firstPage = Object.values(pages)[0];
          const rawImgUrl = firstPage?.thumbnail?.source;

          if (firstPage?.extract && introTextarea && !introTextarea.value.trim()) {
            introTextarea.value = firstPage.extract.substring(0, 240) + (firstPage.extract.length > 240 ? '...' : '');
          }

          if (rawImgUrl) {
            const cropped = await cropToAppIcon(rawImgUrl);
            if (previewImg) previewImg.src = cropped;
            if (hiddenInput) hiddenInput.value = cropped;
            if (statusText) statusText.textContent = `✓ Found on Wikipedia: ${firstPage.title}`;
            if (badge) badge.textContent = 'WIKIPEDIA';
            if (loader) loader.style.display = 'none';
            return cropped;
          }
        }
      }
    } catch (e) {
      if (e.name !== 'AbortError') {
        console.warn('Wikipedia fetch warning, generating AI icon', e);
      }
    }

    // 3. Fallback: Generate AI Landmark Icon
    const aiIcon = generateAILandmarkIcon(cleanName);
    if (previewImg) previewImg.src = aiIcon;
    if (hiddenInput) hiddenInput.value = aiIcon;
    if (statusText) statusText.textContent = '✨ AI Generated Landmark App-Icon Badge';
    if (badge) badge.textContent = 'AI ICON';
    if (loader) loader.style.display = 'none';
    return aiIcon;
  }

  /* --------------------------------------------------------------------------
     User Contributions: Travel Destination Modal (External Hub)
     -------------------------------------------------------------------------- */
  let destInputDebounceTimer = null;

  function openSpotMediaModal(spotId, spotName, stateName) {
    const targetState = STATES_DATA[activeStateKey] || STATES_DATA['bihar'];
    const modal = document.getElementById('maproomSpotMediaModal');
    if (!modal) return;

    const titleTarget = document.getElementById('spotMediaModalTarget');
    if (titleTarget) titleTarget.textContent = targetState.name;

    const nameInput = document.getElementById('destInputName');
    if (nameInput) nameInput.value = '';

    const introInput = document.getElementById('destInputIntro');
    if (introInput) introInput.value = '';

    const photoInput = document.getElementById('destInputPhotoUrl');
    if (photoInput) photoInput.value = '';

    const videoInput = document.getElementById('destInputVideoUrl');
    if (videoInput) videoInput.value = '';

    const tipsInput = document.getElementById('destInputTips');
    if (tipsInput) tipsInput.value = '';

    // Reset AI App-Icon Preview
    const initialPlaceholder = generateAILandmarkIcon('Tourist Spot');
    const previewImg = document.getElementById('destAppIconPreview');
    const hiddenInput = document.getElementById('destInputGeneratedImage');
    const statusText = document.getElementById('destThumbStatusText');
    const badge = document.getElementById('destThumbBadge');
    if (previewImg) previewImg.src = initialPlaceholder;
    if (hiddenInput) hiddenInput.value = initialPlaceholder;
    if (statusText) statusText.textContent = 'Enter destination name above to auto-fetch picture or generate AI icon.';
    if (badge) badge.textContent = 'AUTO-SYNC';

    // Setup live debounce listener on nameInput
    if (nameInput && !nameInput.dataset.boundAutoFetch) {
      nameInput.dataset.boundAutoFetch = 'true';
      nameInput.addEventListener('input', () => {
        clearTimeout(destInputDebounceTimer);
        destInputDebounceTimer = setTimeout(() => {
          fetchWikipediaOrAIImage(nameInput.value);
        }, 450);
      });
      nameInput.addEventListener('blur', () => {
        if (nameInput.value.trim()) {
          fetchWikipediaOrAIImage(nameInput.value);
        }
      });
    }

    // Refresh button
    const refreshBtn = document.getElementById('btnRefreshDestImage');
    if (refreshBtn && !refreshBtn.dataset.boundClick) {
      refreshBtn.dataset.boundClick = 'true';
      refreshBtn.addEventListener('click', (e) => {
        e.preventDefault();
        fetchWikipediaOrAIImage(nameInput ? nameInput.value : '');
      });
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  /* --------------------------------------------------------------------------
     User Contributions: Flora & Fauna Entry Modal (External Hub)
     -------------------------------------------------------------------------- */
  function openSpeciesSightingModal(specId, specName) {
    const targetState = STATES_DATA[activeStateKey] || STATES_DATA['bihar'];
    const modal = document.getElementById('maproomSightingModal');
    if (!modal) return;

    const target = document.getElementById('sightingModalTarget');
    if (target) target.textContent = targetState.name;

    const commonInput = document.getElementById('faunaInputCommonName');
    if (commonInput) commonInput.value = '';

    const sciInput = document.getElementById('faunaInputScientificName');
    if (sciInput) sciInput.value = '';

    const descInput = document.getElementById('faunaInputDesc');
    if (descInput) descInput.value = '';

    const photoInput = document.getElementById('faunaInputPhotoUrl');
    if (photoInput) photoInput.value = '';

    const videoInput = document.getElementById('faunaInputVideoUrl');
    if (videoInput) videoInput.value = '';

    const shortInput = document.getElementById('faunaInputShortUrl');
    if (shortInput) shortInput.value = '';

    const tipsInput = document.getElementById('faunaInputTips');
    if (tipsInput) tipsInput.value = '';

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function setupModals() {
    spotMediaModal = document.getElementById('maproomSpotMediaModal');
    spotTipModal = document.getElementById('maproomSpotTipModal');
    sightingModal = document.getElementById('maproomSightingModal');

    // Category A: Travel Destination Form Submit (External Hub - No direct file uploads)
    const spotMediaForm = document.getElementById('spotMediaForm');
    spotMediaForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('destInputName')?.value.trim();
      let intro = document.getElementById('destInputIntro')?.value.trim();
      let photoUrl = document.getElementById('destInputPhotoUrl')?.value.trim();
      let videoUrl = document.getElementById('destInputVideoUrl')?.value.trim();
      let tips = document.getElementById('destInputTips')?.value.trim();
      const author = document.getElementById('destInputAuthor')?.value.trim() || 'Aadi [Creator]';
      let generatedImage = document.getElementById('destInputGeneratedImage')?.value.trim();

      if (!name) {
        showMapToast('⚠️ Please enter the destination name.');
        return;
      }

      // Flexible media requirement: either Instagram photo link OR YouTube video link (or both)
      if (!photoUrl && !videoUrl) {
        showMapToast('⚠️ Please provide at least one media link: either an Instagram photo link or a YouTube video link.');
        return;
      }

      const stateData = STATES_DATA[activeStateKey];
      if (stateData) {
        if (!stateData.touristSpots) stateData.touristSpots = [];

        // Ensure we have an AI or Wikipedia image, never hardcoded Nalanda
        if (!generatedImage || generatedImage === 'assets/images/nalanda_ruins.jpg') {
          generatedImage = generateAILandmarkIcon(name);
        }

        if (!intro) {
          intro = `${name} is an important cultural, historical, and wildlife landmark in ${stateData.name}.`;
        }
        if (!tips) {
          tips = `Precautions: Wear comfortable shoes and preserve heritage integrity.\nTimings: 09:00 AM – 06:00 PM.\nAvailable Facilities: Drinking water, restrooms, authorized guides.`;
        }

        const newSpot = {
          id: 'custom-spot-' + Date.now(),
          name: name,
          imageUrl: generatedImage,
          description: intro,
          photoUrl: photoUrl || '',
          videoUrl: videoUrl || '',
          guidelines: tips,
          tipsAndTricks: [{
            author: author,
            isCreator: author.toLowerCase().includes('aadi') || author.toLowerCase().includes('creator'),
            date: 'Verified Creator Guide',
            tip: tips
          }],
          isUserAdded: true
        };

        // Add to state spots and limit view
        stateData.touristSpots.unshift(newSpot);

        if (!maproomDispatches[activeStateKey]) maproomDispatches[activeStateKey] = {};
        if (!maproomDispatches[activeStateKey].customDestinations) maproomDispatches[activeStateKey].customDestinations = [];
        maproomDispatches[activeStateKey].customDestinations.unshift(newSpot);

        saveMaproomData();
        renderTouristSpots(stateData);
        closeModal(spotMediaModal);
        showMapToast(`✓ "${name}" added to ${stateData.name} Destinations!`);
      }
    });

    // Spot Tip Form Submit
    const spotTipForm = document.getElementById('spotTipForm');
    spotTipForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('spotTipAuthor').value.trim() || 'Aadi [Creator]';
      const tipText = document.getElementById('spotTipText').value.trim();
      if (!tipText) {
        showMapToast('Please enter your tourist guidelines notes.');
        return;
      }
      const isCreator = author.toLowerCase().includes('aadi') || author.toLowerCase().includes('creator');
      saveSpotTip(pendingSpotId, author, isCreator, tipText);
      closeModal(spotTipModal);
    });

    // Category B: Flora & Fauna Form Submit (External Hub - Flexible Media Links)
    const sightingForm = document.getElementById('sightingForm');
    sightingForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const commonName = document.getElementById('faunaInputCommonName')?.value.trim();
      const sciName = document.getElementById('faunaInputScientificName')?.value.trim();
      const desc = document.getElementById('faunaInputDesc')?.value.trim() || '';
      const photoUrl = document.getElementById('faunaInputPhotoUrl')?.value.trim();
      const videoUrl = document.getElementById('faunaInputVideoUrl')?.value.trim();
      const shortUrl = document.getElementById('faunaInputShortUrl')?.value.trim();
      let tips = document.getElementById('faunaInputTips')?.value.trim();
      const author = document.getElementById('faunaInputAuthor')?.value.trim() || 'Aadi [Creator]';

      if (!commonName || !sciName) {
        showMapToast('⚠️ Please enter common and scientific names.');
        return;
      }

      if (!photoUrl && !videoUrl && !shortUrl) {
        showMapToast('⚠️ Please provide at least one media link (Instagram photo, YouTube video, or Short film).');
        return;
      }

      if (!tips) {
        tips = 'Best observed at early morning and twilight near river channels and canopy corridors. Maintain ethical telephoto distance of 25+ meters.';
      }

      const stateData = STATES_DATA[activeStateKey];
      if (stateData) {
        if (!stateData.floraFauna) stateData.floraFauna = [];
        const newFauna = {
          id: 'custom-fauna-' + Date.now(),
          name: commonName,
          scientific: sciName,
          type: 'Indigenous Species',
          imageUrl: 'assets/images/black_drongo.jpg',
          notes: desc,
          description: desc,
          photoUrl: photoUrl || '',
          videoUrl: videoUrl || '',
          shortUrl: shortUrl || '',
          spottingTips: tips,
          author: author,
          isUserAdded: true
        };

        stateData.floraFauna.unshift(newFauna);

        if (!maproomDispatches[activeStateKey]) maproomDispatches[activeStateKey] = {};
        if (!maproomDispatches[activeStateKey].customFauna) maproomDispatches[activeStateKey].customFauna = [];
        maproomDispatches[activeStateKey].customFauna.unshift(newFauna);

        saveMaproomData();
        renderFloraFauna(stateData);
        closeModal(sightingModal);
        showMapToast(`✓ "${commonName}" added to ${stateData.name} Flora & Fauna!`);
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

    // Close buttons on Destination Detail Modal
    const destModal = document.getElementById('destinationDetailModal');
    document.querySelectorAll('.dest-modal-close-btn, .dest-modal-close-action').forEach(btn => {
      btn.addEventListener('click', () => {
        closeModal(destModal);
      });
    });

    [spotMediaModal, spotTipModal, sightingModal, destModal].forEach(m => {
      m?.addEventListener('click', (e) => {
        if (e.target === m) closeModal(m);
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (spotMediaModal?.classList.contains('open')) {
          closeModal(spotMediaModal);
        } else if (spotTipModal?.classList.contains('open')) {
          closeModal(spotTipModal);
        } else if (sightingModal?.classList.contains('open')) {
          closeModal(sightingModal);
        } else if (destModal?.classList.contains('open')) {
          closeModal(destModal);
        }
      }
    });
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (modal.id === 'destinationDetailModal') {
      activeDetailSpot = null;
      activeDetailStateData = null;
    }
    const anyModalOpen = document.querySelector('.modal-backdrop.open');
    if (!anyModalOpen) {
      document.body.style.overflow = '';
    }
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

    // Dropdown Selection Change
    mapStateDropdown?.addEventListener('change', (e) => {
      const stateKey = e.target.value;
      if (stateKey && STATES_DATA[stateKey]) {
        renderStateDossier(stateKey);
      }
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
