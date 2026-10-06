/**
 * DRONGO — Institutional Wildlife & Nature Visual Storytelling
 * Core Application Engine & Curator Upload System
 * Version 1.0.11
 */

(function () {
  'use strict';

  // Storage key for catalog metadata in localStorage
  const STORAGE_KEY = 'drongo_custom_catalog_v7';

  // Base catalog containing Travelling Guides, High-Quality Photos, and Creator Updates
  const INITIAL_CATALOG = [
    {
      id: 'guide-dehradun-dharadhon',
      type: 'travelling-guide',
      category: 'travelling-guide',
      section: 'Travelling Guide',
      title: 'Dharadhon (Dehradun) — Foothills of the Garhwal Himalayas & Doon Valley',
      place: 'Dharadhon (Dehradun), Uttarakhand',
      travelGuide: 'How to move there: Reach via direct Vande Bharat or Shatabdi Express from New Delhi to Dehradun Junction (4.5 hours), or fly into Jolly Grant Airport (DED). For local movement, rented self-drive scooters and local Vikrams (shared autos) are best for navigating Rajpur Road and Sahastradhara routes. To reach Mussoorie hills or Chakrata, hire local mountain cabs from Dehradun taxi union.',
      travelerNote: 'If you are planning to Dharadhon next, start early mornings towards Robber’s Cave (Guchhupani) to avoid weekend crowds. Don’t miss trying hot Bun-Tikka at Dwarka Store on Rajpur Road and authentic Garhwali Thali. Keep a light windcheater jacket as valley winds drop temperatures fast in the evening.',
      author: 'Vaibhav (Himalayan Explorer)',
      date: 'Verified Community Guide',
      isUserUploaded: false
    },
    {
      id: 'guide-kaziranga-assam',
      type: 'travelling-guide',
      category: 'travelling-guide',
      section: 'Travelling Guide',
      title: 'Kaziranga National Park — Floodplains of the Mighty Brahmaputra',
      place: 'Kaziranga, Assam',
      travelGuide: 'How to move there: Nearest airports are Jorhat (97 km) and Guwahati (217 km). Take ASTC AC buses or private cabs along NH 715 directly to Kohora (central range). Jeep safaris can be booked at the central tourist complex counter for morning (7:30 AM) and afternoon (1:30 PM) slots.',
      travelerNote: 'Bagori (Western Range) has the highest rhino density at water bodies, whereas Agoratoli (Eastern Range) is unbeatable for birdwatchers looking for pelicans and fish eagles. Carry binocular harness and neutral earth-toned clothing.',
      author: 'Rohan Barua (Wildlife Guide)',
      date: 'Verified Community Guide',
      isUserUploaded: false
    },
    {
      id: 'guide-munnar-shola',
      type: 'travelling-guide',
      category: 'travelling-guide',
      section: 'Travelling Guide',
      title: 'Munnar & Eravikulam Shola Corridors — High Range Western Ghats',
      place: 'Munnar, Kerala',
      travelGuide: 'How to move there: Drive up from Cochin International Airport (COK) via Kochi-Dhanushkodi road (110 km, scenic 3.5 hr climb). Local jeep rentals are required for off-road tea estate tracks and trekking basecamps at Rajamalai.',
      travelerNote: 'Book morning safari passes for Eravikulam National Park online to see Nilgiri Tahrs grazing near misty hairpin curves. Pack thermal layers as cloud forest humidity creates deep chill before 9 AM.',
      author: 'Dr. Ananya Nair (Botanist)',
      date: 'Verified Community Guide',
      isUserUploaded: false
    },
    {
      id: 'photo-black-drongo-canopy',
      type: 'photo',
      category: 'photos',
      section: 'Wildlife Photos',
      photoSubject: 'birds',
      title: 'Black Drongo (Dicrurus macrocercus) — Sovereign of the Canopy',
      location: 'Valmiki Tiger Reserve & Terai Grasslands',
      mediaUrl: 'assets/images/black_drongo.jpg',
      specs: 'Nikon Z9 • 400mm f/2.8 TC • 1/3200s, f/2.8, ISO 400',
      fieldNotes: 'Perched motionless on an ancient Sal branch before executing an acrobatic aerial interception with surgical precision.',
      knowMoreInfo: 'Species: Black Drongo (Dicrurus macrocercus)\nFamily: Dicruridae\nHabitat: Forest edges, open agricultural savannah, and riverine canopies\nField Notes: Renowned for its fearless demeanor, attacking crows, raptors, and falcons that venture near its nesting canopy.',
      author: 'Aadi [Creator]',
      date: 'High-Res Field Archive',
      isUserUploaded: false
    },
    {
      id: 'photo-kaziranga-rhino-dawn',
      type: 'photo',
      category: 'photos',
      section: 'Wildlife Photos',
      photoSubject: 'mammals',
      title: 'Greater One-Horned Rhinoceros — Dawn in Kaziranga Elephant Grass',
      location: 'Bagori Range, Kaziranga National Park, Assam',
      mediaUrl: 'assets/images/kaziranga_rhino.jpg',
      specs: 'Canon EOS R5 • RF 100-500mm f/4.5-7.1L • 1/1600s, f/7.1, ISO 640',
      fieldNotes: 'A majestic bull rhino emerging through morning river mist from the Brahmaputra channels into golden sunlight.',
      knowMoreInfo: 'Species: Rhinoceros unicornis (Greater One-Horned Rhinoceros)\nStatus: Vulnerable (IUCN Red List)\nConservation Sanctuary: Kaziranga hosts over 70% of the world wild population.',
      author: 'Aadi [Creator]',
      date: 'High-Res Field Archive',
      isUserUploaded: false
    },
    {
      id: 'photo-bengal-tiger-stream',
      type: 'photo',
      category: 'photos',
      section: 'Wildlife Photos',
      photoSubject: 'mammals',
      title: 'Royal Bengal Tiger — Silent Patrol along Forest Stream',
      location: 'Ranthambore National Park, Rajasthan',
      mediaUrl: 'assets/images/bengal_tiger.jpg',
      specs: 'Sony A1 • FE 600mm f/4 GM OSS • 1/2000s, f/4, ISO 800',
      fieldNotes: 'Stepping deliberately through sun-dappled dry deciduous forest, locking eyes across the rocky ravine.',
      knowMoreInfo: 'Species: Panthera tigris tigris\nApex Predator: Sovereign ruler of the Indian subcontinent forests, vital umbrella species preserving forest watersheds.',
      author: 'Aadi [Creator]',
      date: 'High-Res Field Archive',
      isUserUploaded: false
    },
    {
      id: 'photo-paradise-flycatcher',
      type: 'photo',
      category: 'photos',
      section: 'Wildlife Photos',
      photoSubject: 'birds',
      title: 'Asian Paradise Flycatcher — White Ribbon Streamer in Flight',
      location: 'Western Ghats Rainforest Corridor, Kerala',
      mediaUrl: 'assets/images/paradise_flycatcher.jpg',
      specs: 'Nikon Z8 • 500mm f/4E FL ED • 1/4000s, f/4, ISO 1000',
      fieldNotes: 'Elongated twin tail streamers undulating like liquid silver through the dense dark understory.',
      knowMoreInfo: 'Species: Terpsiphone paradisi\nDimorphism: Adult males feature mesmerizing 30 cm elongated tail streamers with rufous or white morph plumages.',
      author: 'Aadi [Creator]',
      date: 'High-Res Field Archive',
      isUserUploaded: false
    },
    {
      id: 'photo-jewel-bug-macro',
      type: 'photo',
      category: 'photos',
      section: 'Wildlife Photos',
      photoSubject: 'insects',
      title: 'Iridescent Metallic Jewel Bug — Microcosm of the Rainforest',
      location: 'Namdapha National Park, Arunachal Pradesh',
      mediaUrl: 'assets/images/jewel_beetle_macro.jpg',
      specs: 'Olympus OM-1 • 90mm f/3.5 Macro IS PRO • Focus Stacked (15 shots)',
      fieldNotes: 'High-magnification handheld focus bracketing revealing natural optical diffraction and metallic chitin.',
      knowMoreInfo: 'Family: Scutelleridae (Shield-backed bugs)\nColoration: Structural optical interference generates brilliant emerald, sapphire, and gold reflections.',
      author: 'Aadi [Creator]',
      date: 'High-Res Field Archive',
      isUserUploaded: false
    },
    {
      id: 'photo-ancient-rainforest-tree',
      type: 'photo',
      category: 'photos',
      section: 'Wildlife Photos',
      photoSubject: 'landscapes',
      title: 'Ancient Rainforest Canopy & Sacred Banyan Living Corridors',
      location: 'Mawlynnong Living Root Corridors, Meghalaya',
      mediaUrl: 'assets/images/realistic_ancient_tree.jpg',
      specs: 'Fujifilm GFX 100 II • GF 20-35mm f/4 R WR • 1/125s, f/11, ISO 100',
      fieldNotes: 'Centuries of aerial root weaving creating an ecological cathedral spanning over the forest floor.',
      knowMoreInfo: 'Botanical: Ficus elastica / Ficus benghalensis\nLiving Bridges: Indigenous Khasi architecture training aerial ficus roots across turbulent monsoon river beds.',
      author: 'Aadi [Creator]',
      date: 'High-Res Field Archive',
      isUserUploaded: false
    },
    {
      id: 'item-info-future-update-1',
      type: 'information',
      category: 'information',
      section: 'Information',
      title: 'Creator Update: Drongo Visuals 2.0 Community Transition',
      infoCategory: 'Platform Roadmap',
      author: 'Creator / Drongo Core Team',
      date: 'Official Creator Notice',
      infoText: 'Welcome to Drongo Visuals 2.0! Based on user direction, the Visuals section now features three streamlined pillars: Travelling Guides (documenting routes & traveler notes), High-Quality Photos (sharing 4K wildlife & nature visuals), and Creator Updates (official updates on future platform releases).',
      isUserUploaded: false
    },
    {
      id: 'item-info-future-update-2',
      type: 'information',
      category: 'information',
      section: 'Information',
      title: 'Creator Update: Upcoming 2026 Interactive Tiger Corridor & GPS Trails',
      infoCategory: 'Future Feature Preview',
      author: 'Creator / Drongo Core Team',
      date: 'Roadmap Announcement',
      infoText: 'We are currently developing real-time interactive wildlife corridor tracking for Central India and Western Ghats sanctuaries. Future updates will incorporate live seasonal weather radars, offline GPS route downloads, and government permit booking shortcuts.',
      isUserUploaded: false
    },
    {
      id: 'item-info-future-update-3',
      type: 'information',
      category: 'information',
      section: 'Information',
      title: 'Creator Update: Verified Contributor Badges & Offline Field Dossiers',
      infoCategory: 'Upcoming Release',
      author: 'Creator / Drongo Core Team',
      date: 'Future Update Notice',
      infoText: 'Our next release will bring verified contributor badges for active community travel writers, printable offline destination dossiers, and an automated recommendation engine for state-wise wildlife spotting seasons.',
      isUserUploaded: false
    }
  ];

  // Application State
  let catalog = [];
  let currentFilter = 'travelling-guide';
  let currentPhotoSub = 'all';
  let activeLightboxIndex = 0;
  let currentlyFilteredItems = [];

  // DOM Elements
  const mediaGridEl = document.getElementById('dynamicMediaGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const photoSubFilterRow = document.getElementById('photoSubFilterRow');
  const photoSubBtns = document.querySelectorAll('.photo-sub-btn');
  const subjectFilterLabel = document.getElementById('subjectFilterLabel');
  const allSubLabelText = document.getElementById('allSubLabelText');
  const photoSubjectPicker = document.getElementById('photoSubjectPicker');
  const subjectPills = document.querySelectorAll('.subject-pill');
  const uploadPhotoSubjectInput = document.getElementById('uploadPhotoSubject');
  const uploadModal = document.getElementById('uploadModal');
  const openUploadModalBtns = document.querySelectorAll('.trigger-upload-modal');
  const closeUploadModalBtn = document.getElementById('closeUploadModalBtn');
  const cancelUploadBtn = document.getElementById('cancelUploadBtn');
  const uploadForm = document.getElementById('uploadMediaForm');
  const dropzoneInput = document.getElementById('dropzoneFileInput');
  const dropzoneArea = document.getElementById('uploadDropzoneArea');
  const btnBrowseDevice = document.getElementById('btnBrowseDevice');
  const dropzoneFileStatus = document.getElementById('dropzoneFileStatus');
  const previewContainer = document.getElementById('uploadPreviewContainer');
  const previewImage = document.getElementById('uploadPreviewImage');
  const previewVideo = document.getElementById('uploadPreviewVideo');
  const clearPreviewBtn = document.getElementById('clearPreviewBtn');
  const mediaTypeSelect = document.getElementById('uploadMediaType');
  const typeTogglePhoto = document.getElementById('typeTogglePhoto');
  const typeToggleVideo = document.getElementById('typeToggleVideo');
  const sectionChoicePills = document.querySelectorAll('.section-choice-pill');
  const sectionSelect = document.getElementById('uploadSection');
  const dropzoneTitleText = document.getElementById('dropzoneTitleText');
  const dropzoneNoteText = document.getElementById('dropzoneNoteText');
  const submitBtnText = document.getElementById('submitBtnText');

  // Photo Upload Engine Elements
  let pendingPhotoDataUrl = null;
  const photoUploadBox = document.getElementById('photoUploadBox');
  const hubPhotoFileInput = document.getElementById('hubPhotoFileInput');
  const photoDropzoneContent = document.getElementById('photoDropzoneContent');
  const btnBrowsePhoto = document.getElementById('btnBrowsePhoto');
  const photoPreviewWrap = document.getElementById('photoPreviewWrap');
  const photoPreviewImg = document.getElementById('photoPreviewImg');
  const photoPreviewFilename = document.getElementById('photoPreviewFilename');
  const btnRemovePhotoPreview = document.getElementById('btnRemovePhotoPreview');
  const btnVisualsUploadPhoto = document.getElementById('btnVisualsUploadPhoto');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightboxModal');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const lightboxMediaPane = document.getElementById('lightboxMediaPane');
  const lightboxBadge = document.getElementById('lightboxBadge');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxLocation = document.getElementById('lightboxLocation');
  const lightboxStory = document.getElementById('lightboxStory');
  const lightboxSpecs = document.getElementById('lightboxSpecs');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxKnowMoreBtn = document.getElementById('lightboxKnowMoreBtn');
  const lightboxKnowMorePanel = document.getElementById('lightboxKnowMorePanel');
  const lightboxKnowMoreContent = document.getElementById('lightboxKnowMoreContent');
  const btnEditSpeciesNotes = document.getElementById('btnEditSpeciesNotes');
  const lightboxActionContainer = document.getElementById('lightboxActionContainer');

  // Search Elements
  const searchTriggerBtns = document.querySelectorAll('.trigger-search-modal');
  const searchModal = document.getElementById('searchModal');
  const searchInputField = document.getElementById('searchInputField');
  const searchResultsBox = document.getElementById('searchResultsBox');
  const closeSearchModalBtn = document.getElementById('closeSearchModalBtn');

  // Nav Drawer Elements
  const navDrawer = document.getElementById('navDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const menuTriggerBtn = document.getElementById('menuTriggerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  // Toast Container
  const toastEl = document.getElementById('drongoToast');

  // Temporary container for newly selected media file & preview
  let pendingFileDataUrl = null;
  let pendingVideoBlob = null;
  let pendingVideoPoster = null;

  /* --------------------------------------------------------------------------
     Initialization & Storage Sync
     -------------------------------------------------------------------------- */
  function init() {
    try {
      loadCatalogFromStorage();
    } catch (e) {
      console.warn('Catalog load error', e);
    }
    try {
      renderGallery();
      updateFilterCounts();
    } catch (e) {
      console.error('Gallery render error', e);
    }
    try {
      bindEventListeners();
    } catch (e) {
      console.error('Event listeners binding error', e);
    }
    try {
      initTreeBranchScroll();
    } catch (e) {
      console.error('Tree branch init error', e);
    }
    try {
      initMagicalMottoGlow();
    } catch (e) {
      console.error('Motto glow init error', e);
    }
    try {
      initEditorialBackgroundVideo();
    } catch (e) {
      console.error('Video background init error', e);
    }
  }

  function loadCatalogFromStorage() {
    try {
      localStorage.removeItem('drongo_custom_catalog_v1');
      localStorage.removeItem('drongo_custom_catalog_v2');
      localStorage.removeItem('drongo_custom_catalog_v3');
      localStorage.removeItem('drongo_custom_catalog_v4');
      localStorage.removeItem('drongo_custom_catalog_v5');
      localStorage.removeItem('drongo_custom_catalog_v6');
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const userItems = JSON.parse(stored);
        const baseIds = new Set(INITIAL_CATALOG.map(item => item.id));
        const customUploads = Array.isArray(userItems) ? userItems.filter(item => item.isUserUploaded && !baseIds.has(item.id)) : [];
        catalog = [...INITIAL_CATALOG, ...customUploads];
      } else {
        catalog = [...INITIAL_CATALOG];
      }
    } catch (e) {
      console.warn('Could not read user catalog from storage', e);
      catalog = [...INITIAL_CATALOG];
    }
  }

  function saveUserItemsToStorage() {
    try {
      const safeItemsToStore = catalog.filter(item => item.isUserUploaded);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(safeItemsToStore));
    } catch (e) {
      console.warn('Failed to write metadata to localStorage', e);
    }
  }

  /* --------------------------------------------------------------------------
     Gallery Rendering with "To Know More" Direct Access
     -------------------------------------------------------------------------- */
  function renderGallery() {
    if (!mediaGridEl) return;

    // Filter for active tab: travelling-guide, photos, or information
    currentlyFilteredItems = catalog.filter(item => {
      if (currentFilter === 'photos') {
        return item.category === 'photos' || item.type === 'photo' || item.section === 'Wildlife Photos';
      }
      if (currentFilter === 'information') {
        return item.category === 'information' || item.type === 'information' || item.section === 'Information';
      }
      // Default to travelling-guide
      return item.category === 'travelling-guide' || item.type === 'travelling-guide' || item.section === 'Travelling Guide';
    });

    // Ensure sub-filter bar is hidden
    if (photoSubFilterRow) {
      photoSubFilterRow.style.display = 'none';
    }

    if (currentlyFilteredItems.length === 0) {
      const isInfo = currentFilter === 'information';
      const isPhotos = currentFilter === 'photos';
      mediaGridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 4px; border: 1px dashed rgba(10, 43, 71, 0.15);">
          <div style="font-size: 34px; margin-bottom: 10px;">${isInfo ? '📢' : (isPhotos ? '📸' : '🗺️')}</div>
          <h3 style="font-family: var(--font-display); color: var(--primary-ocean-blue); margin-bottom: 8px;">
            ${isInfo ? 'No Creator Updates Yet' : (isPhotos ? 'No High-Quality Photos Yet' : 'No Travelling Guides Yet')}
          </h3>
          <p style="color: var(--text-muted); font-size: 13px; margin-bottom: 20px; max-width: 480px; margin-left: auto; margin-right: auto;">
            ${isInfo 
              ? 'Official roadmap milestones and future platform updates from the creator will appear here.' 
              : (isPhotos
                  ? 'Be the first explorer to upload and showcase high-resolution wildlife and nature photography!'
                  : 'Be the first explorer to write a destination guide, route directions, and personal travel notes!')}
          </p>
          <button class="header-action-btn btn-gold trigger-upload-modal" data-upload-section="${escapeHtml(currentFilter)}" style="margin: 0 auto;">
            ${isInfo ? '+ Post Creator Update' : (isPhotos ? '+ Upload High-Quality Photo' : '+ Write Travel Note / Guide')}
          </button>
        </div>
      `;
      mediaGridEl.querySelector('.trigger-upload-modal')?.addEventListener('click', openUploadModal);
      return;
    }

    mediaGridEl.innerHTML = currentlyFilteredItems.map((item, index) => {
      // 1. Travelling Guide Card: Place, How to move there, Traveler Note, Author
      if (item.category === 'travelling-guide' || item.type === 'travelling-guide' || item.section === 'Travelling Guide') {
        return `
          <article class="travel-guide-card" data-index="${index}" data-id="${item.id}">
            <div class="guide-card-top">
              <span class="guide-place-badge">📍 DESTINATION GUIDE</span>
              <span class="guide-author-pill">✍️ By ${escapeHtml(item.author || 'Traveler')}</span>
            </div>
            <h3 class="guide-card-place-title">${escapeHtml(item.place || item.title)}</h3>
            
            <div class="guide-block-section">
              <h4 class="guide-section-heading">🧭 How to Move There &amp; Logistics</h4>
              <div class="guide-block-content">${escapeHtml(item.travelGuide || item.fieldNotes || '')}</div>
            </div>
            
            <div class="guide-note-section">
              <div class="guide-note-label">📝 Traveler Note &amp; Tips</div>
              <div class="guide-note-content">${escapeHtml(item.travelerNote || item.description || '')}</div>
            </div>
            
            <div class="guide-card-footer">
              <span class="guide-footer-date">📅 ${escapeHtml(item.date || 'Community Travel Record')}</span>
              ${item.isUserUploaded ? `
                <button type="button" class="card-delete-btn" data-delete-id="${item.id}" title="Remove this travel guide" style="background: none; border: none; color: #ff6b6b; cursor: pointer; font-size: 11px;">
                  ✕ Delete
                </button>
              ` : ''}
            </div>
          </article>
        `;
      }

      // 2. High-Quality Photo Card: Visuals Showcase with Lightbox Inspection
      if (item.category === 'photos' || item.type === 'photo' || item.section === 'Wildlife Photos') {
        return `
          <article class="media-card" data-index="${index}" data-id="${item.id}">
            <div class="card-media-wrapper trigger-card-lightbox" data-index="${index}" style="cursor: pointer;" title="Click to inspect 4K photo">
              <img src="${escapeHtml(item.mediaUrl)}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.src='assets/images/black_drongo.jpg';" />
              <span class="card-category-badge">📸 4K PHOTO</span>
            </div>
            <div class="card-data-bar">
              <div class="card-title-row">
                <h3 class="card-title">${escapeHtml(item.title)}</h3>
              </div>
              <div class="card-location">📍 ${escapeHtml(item.location || 'India')}</div>
              <p class="card-story-snippet" style="font-size: 12px; color: #475569; margin: 4px 0 6px; line-height: 1.45;">${escapeHtml(item.fieldNotes || '')}</p>
              <div class="card-specs">
                <span>📷 ${escapeHtml(item.specs || 'High-Resolution Visual')}</span>
                <span style="margin-left: auto;">✍️ ${escapeHtml(item.author || 'Wildlife Photographer')}</span>
              </div>
              <div class="card-actions-row" style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(10,43,71,0.06);">
                <button type="button" class="btn-card-to-know-more trigger-card-lightbox" data-index="${index}" style="background: none; border: none; color: var(--accent-gold); font-weight: 700; font-size: 11px; cursor: pointer; display: flex; align-items: center; gap: 4px;">
                  🔍 INSPECT 4K PHOTO &rarr;
                </button>
                ${item.isUserUploaded ? `
                  <button type="button" class="card-delete-btn" data-delete-id="${item.id}" title="Remove photo" style="background: none; border: none; color: #ff6b6b; cursor: pointer; font-size: 11px;">
                    ✕ Delete
                  </button>
                ` : ''}
              </div>
            </div>
          </article>
        `;
      }

      // 3. Information Card: Strictly Creator Updates for Future Updates & Roadmap
      const catBadge = (item.infoCategory || 'FUTURE UPDATE').toUpperCase();
      return `
        <article class="hub-info-card" data-index="${index}" data-id="${item.id}">
          <span class="hub-info-category-badge">[${escapeHtml(catBadge)}]</span>
          <h3 class="hub-info-title">${escapeHtml(item.title)}</h3>
          <div class="hub-info-body">${escapeHtml(item.infoText || item.fieldNotes || '')}</div>
          <div class="hub-info-footer">
            <span>📢 Creator Update • ${escapeHtml(item.author || 'Creator / Drongo Core Team')}</span>
            <span>${escapeHtml(item.date || 'Official Notice')}</span>
            ${item.isUserUploaded ? `
              <button type="button" class="card-delete-btn" data-delete-id="${item.id}" title="Remove this record" style="background: none; border: none; color: #ff6b6b; cursor: pointer; font-size: 11px;">
                ✕ Delete
              </button>
            ` : ''}
          </div>
        </article>
      `;
    }).join('');

    // Lightbox triggers on photo cards
    mediaGridEl.querySelectorAll('.trigger-card-lightbox').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(el.getAttribute('data-index'), 10);
        if (!isNaN(idx)) openLightbox(idx, false);
      });
    });

    // Delete handler
    mediaGridEl.querySelectorAll('.card-delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const deleteId = btn.getAttribute('data-delete-id');
        deleteUpload(deleteId);
      });
    });
  }

  function updateFilterCounts() {
    filterBtns.forEach(btn => {
      const filter = btn.getAttribute('data-filter');
      const countEl = btn.querySelector('.filter-count');
      if (!countEl) return;

      let count = 0;
      if (filter === 'travelling-guide') {
        count = catalog.filter(i => i.category === 'travelling-guide' || i.type === 'travelling-guide' || i.section === 'Travelling Guide').length;
      } else if (filter === 'photos') {
        count = catalog.filter(i => i.category === 'photos' || i.type === 'photo' || i.section === 'Wildlife Photos').length;
      } else if (filter === 'information') {
        count = catalog.filter(i => i.category === 'information' || i.type === 'information' || i.section === 'Information').length;
      } else {
        count = catalog.filter(i => i.category === filter).length;
      }

      countEl.textContent = count;
    });
  }

  /* --------------------------------------------------------------------------
     Lightbox & "To Know More" Species Information Viewer
     -------------------------------------------------------------------------- */
  function openLightbox(index, openKnowMore = false) {
    if (!currentlyFilteredItems[index]) return;
    activeLightboxIndex = index;
    const item = currentlyFilteredItems[index];

    // Reset custom action container
    if (lightboxActionContainer) {
      lightboxActionContainer.innerHTML = '';
      lightboxActionContainer.style.display = 'none';
    }
    if (lightboxPrevBtn && lightboxNextBtn) {
      lightboxPrevBtn.style.display = '';
      lightboxNextBtn.style.display = '';
    }

    // Populate Info
    lightboxBadge.textContent = item.section || (item.type === 'video' ? 'VIDEO DISPATCH' : 'WILDLIFE PHOTOGRAPH');
    lightboxTitle.textContent = item.title;
    lightboxLocation.textContent = item.location;
    lightboxStory.textContent = item.fieldNotes || 'Recorded during field observation.';

    // Populate "To Know More" panel
    if (lightboxKnowMoreContent) {
      lightboxKnowMoreContent.textContent = item.knowMoreInfo || 
        `Subject: ${item.title}\nClassification: ${item.section} • ${item.photoSubject ? item.photoSubject.toUpperCase() : 'GENERAL'}\nLocation: ${item.location}\nCurator Notes: Awaiting detailed field notes from author. Click "Edit Notes" above to add your observations.`;
    }

    if (lightboxKnowMorePanel && lightboxKnowMoreBtn) {
      if (openKnowMore) {
        lightboxKnowMorePanel.style.display = 'block';
        lightboxKnowMoreBtn.classList.add('active');
        lightboxKnowMoreBtn.setAttribute('aria-expanded', 'true');
      } else {
        lightboxKnowMorePanel.style.display = 'none';
        lightboxKnowMoreBtn.classList.remove('active');
        lightboxKnowMoreBtn.setAttribute('aria-expanded', 'false');
      }
    }

    // Specs
    lightboxSpecs.innerHTML = `
      <div class="spec-line"><strong>Subject Title</strong> ${escapeHtml(item.title)}</div>
      <div class="spec-line"><strong>Capture Gear</strong> ${escapeHtml(item.camera || 'High-Resolution Wildlife Rig')}</div>
      <div class="spec-line"><strong>Optics</strong> ${escapeHtml(item.lens || 'Prime Telephoto Lens')}</div>
      <div class="spec-line"><strong>EXIF / Settings</strong> ${escapeHtml(item.exposure || 'Natural Ambient Light')}</div>
      <div class="spec-line"><strong>Classification</strong> ${escapeHtml(item.section)} • ${escapeHtml((item.photoSubject || 'General').toUpperCase())}</div>
      ${item.isUserUploaded ? '<div class="spec-line"><strong>Source</strong> Verified Contributor Upload</div>' : ''}
    `;

    // If user uploaded, add delete option inside lightbox
    if (lightboxActionContainer && item.isUserUploaded) {
      lightboxActionContainer.innerHTML = `
        <button type="button" class="btn-lightbox-delete" id="btnLightboxGalleryDelete" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 11px 16px; background: rgba(201, 59, 43, 0.16); border: 1px solid #c93b2b; color: #ff6b6b; border-radius: 4px; font-family: var(--font-sans); font-weight: 700; font-size: 12px; letter-spacing: 0.5px; cursor: pointer; transition: all 0.25s ease;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
          Delete This Contributor Upload
        </button>
      `;
      lightboxActionContainer.style.display = 'block';
      document.getElementById('btnLightboxGalleryDelete')?.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
        deleteUpload(item.id);
      });
    }

    // Render Media (Video or Photo)
    if (item.type === 'video') {
      const vidSource = item.videoUrl || item.mediaUrl;
      lightboxMediaPane.innerHTML = `
        <video 
          src="${escapeHtml(vidSource)}" 
          poster="${escapeHtml(item.mediaUrl)}" 
          controls 
          autoplay 
          playsinline 
          style="width: 100%; max-height: 80vh; outline: none; background: #000; border-radius: 4px;"
        >
          Your browser does not support HTML5 video playback.
        </video>
      `;
    } else {
      lightboxMediaPane.innerHTML = `
        <img 
          src="${escapeHtml(item.mediaUrl)}" 
          alt="${escapeHtml(item.title)}" 
          style="max-width: 100%; max-height: 80vh; object-fit: contain; border-radius: 4px;"
          onerror="this.onerror=null; this.src='assets/images/black_drongo.jpg';"
        />
      `;
    }

    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // Universal Lightbox for Maproom and Custom Media (Expands any photo or video)
  function openCustomLightbox(item, options = {}) {
    if (!item) return;

    // Reset standard gallery index
    activeLightboxIndex = -1;

    // Populate Info
    lightboxBadge.textContent = item.badge || (item.type === 'video' ? '4K VIDEO DISPATCH' : 'WILDLIFE PHOTOGRAPH');
    lightboxTitle.textContent = item.title || 'Field Dispatch';
    lightboxLocation.textContent = item.location || 'India Wildlife Corridors';
    lightboxStory.textContent = item.description || item.fieldNotes || item.story || 'Recorded during field exploration.';

    // Populate "To Know More" panel
    if (lightboxKnowMoreContent) {
      if (item.knowMoreInfo) {
        lightboxKnowMoreContent.textContent = item.knowMoreInfo;
      } else {
        lightboxKnowMoreContent.textContent = `Subject: ${item.title}\nLocation: ${item.location || 'Regional Biosphere'}\nContributor: ${item.author || 'Aadi [Creator]'}\nStatus: Verified Field Record in Drongo Maproom.`;
      }
    }

    if (lightboxKnowMorePanel && lightboxKnowMoreBtn) {
      lightboxKnowMorePanel.style.display = options.openKnowMore ? 'block' : 'none';
      lightboxKnowMoreBtn.classList.toggle('active', !!options.openKnowMore);
      lightboxKnowMoreBtn.setAttribute('aria-expanded', options.openKnowMore ? 'true' : 'false');
    }

    // Specs
    let specsHtml = `
      <div class="spec-line"><strong>Subject Title</strong> ${escapeHtml(item.title || 'Untitled')}</div>
      <div class="spec-line"><strong>Contributor</strong> ${escapeHtml(item.author || 'Aadi [Creator]')}</div>
      <div class="spec-line"><strong>Location</strong> ${escapeHtml(item.location || 'Regional Wildlife Corridor')}</div>
      <div class="spec-line"><strong>Classification</strong> ${escapeHtml((item.type === 'video' ? 'Video Footage' : 'Still Photo')).toUpperCase()}</div>
      <div class="spec-line"><strong>Dispatch Date</strong> ${escapeHtml(item.date || 'Field Record')}</div>
      <div class="spec-line"><strong>Archive Source</strong> Maproom Community Dispatch</div>
    `;
    lightboxSpecs.innerHTML = specsHtml;

    // Custom Action Container (e.g. Delete button for user uploads)
    if (lightboxActionContainer) {
      if (options.onDelete) {
        lightboxActionContainer.innerHTML = `
          <button type="button" class="btn-lightbox-delete" id="btnLightboxCustomDelete" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 11px 16px; background: rgba(201, 59, 43, 0.16); border: 1px solid #c93b2b; color: #ff6b6b; border-radius: 4px; font-family: var(--font-sans); font-weight: 700; font-size: 12px; letter-spacing: 0.5px; cursor: pointer; transition: all 0.25s ease;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            Delete This Photo / Video
          </button>
        `;
        lightboxActionContainer.style.display = 'block';

        const delBtn = document.getElementById('btnLightboxCustomDelete');
        delBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          options.onDelete();
        });
      } else {
        lightboxActionContainer.innerHTML = '';
        lightboxActionContainer.style.display = 'none';
      }
    }

    // Navigation buttons visibility
    if (lightboxPrevBtn && lightboxNextBtn) {
      lightboxPrevBtn.style.display = 'none';
      lightboxNextBtn.style.display = 'none';
    }

    // Render Media (Video or Photo)
    if (item.type === 'video') {
      const vidSource = item.videoUrl || item.url || item.mediaUrl;
      lightboxMediaPane.innerHTML = `
        <video 
          src="${escapeHtml(vidSource)}" 
          controls 
          autoplay 
          playsinline 
          style="width: 100%; max-height: 80vh; outline: none; background: #000; border-radius: 4px;"
        >
          Your browser does not support HTML5 video playback.
        </video>
      `;
    } else {
      const imgSrc = item.url || item.mediaUrl || 'assets/images/nalanda_ruins.jpg';
      lightboxMediaPane.innerHTML = `
        <img 
          src="${escapeHtml(imgSrc)}" 
          alt="${escapeHtml(item.title || 'Enlarged View')}" 
          style="max-width: 100%; max-height: 80vh; object-fit: contain; border-radius: 4px;"
          onerror="this.onerror=null; this.src='assets/images/valmiki_tiger.jpg';"
        />
      `;
    }

    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // Expose on global window for Maproom module
  window.openDrongoLightbox = openCustomLightbox;
  window.closeDrongoLightbox = closeLightbox;

  function closeLightbox() {
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    const video = lightboxMediaPane.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    lightboxMediaPane.innerHTML = '';
    if (lightboxActionContainer) {
      lightboxActionContainer.innerHTML = '';
      lightboxActionContainer.style.display = 'none';
    }
    if (lightboxPrevBtn && lightboxNextBtn) {
      lightboxPrevBtn.style.display = '';
      lightboxNextBtn.style.display = '';
    }
    document.body.style.overflow = '';
  }

  function showNextLightbox() {
    if (currentlyFilteredItems.length <= 1) return;
    activeLightboxIndex = (activeLightboxIndex + 1) % currentlyFilteredItems.length;
    openLightbox(activeLightboxIndex, false);
  }

  function showPrevLightbox() {
    if (currentlyFilteredItems.length <= 1) return;
    activeLightboxIndex = (activeLightboxIndex - 1 + currentlyFilteredItems.length) % currentlyFilteredItems.length;
    openLightbox(activeLightboxIndex, false);
  }

  /* --------------------------------------------------------------------------
     Curator Studio: Video & Photo Upload Engine
     -------------------------------------------------------------------------- */
  /* --------------------------------------------------------------------------
     Curator Studio: Travelling Guide, Photos & Creator Updates Engine
     -------------------------------------------------------------------------- */
  function setUploadSection(sec) {
    if (sectionSelect) sectionSelect.value = sec;

    const tabGuide = document.getElementById('hubTabBtnGuide');
    const tabPhotos = document.getElementById('hubTabBtnPhotos');
    const tabInfo = document.getElementById('hubTabBtnInfo');

    const paneGuide = document.getElementById('hubPaneGuide');
    const panePhotos = document.getElementById('hubPanePhotos');
    const paneInfo = document.getElementById('hubPaneInfo');

    if (tabGuide) tabGuide.classList.toggle('active', sec === 'travelling-guide');
    if (tabPhotos) tabPhotos.classList.toggle('active', sec === 'photos');
    if (tabInfo) tabInfo.classList.toggle('active', sec === 'information');

    if (paneGuide) paneGuide.style.display = (sec === 'travelling-guide') ? 'block' : 'none';
    if (panePhotos) panePhotos.style.display = (sec === 'photos') ? 'block' : 'none';
    if (paneInfo) paneInfo.style.display = (sec === 'information') ? 'block' : 'none';

    if (submitBtnText) {
      if (sec === 'photos') {
        submitBtnText.textContent = 'PUBLISH HIGH-QUALITY PHOTO';
      } else if (sec === 'information') {
        submitBtnText.textContent = 'PUBLISH CREATOR UPDATE';
      } else {
        submitBtnText.textContent = 'PUBLISH TRAVEL GUIDE & NOTE';
      }
    }
  }

  function openUploadModal(e) {
    uploadModal.classList.add('open');
    uploadModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const modalBodyEl = uploadModal.querySelector('.modal-body');
    if (modalBodyEl) modalBodyEl.scrollTop = 0;

    const targetSec = e?.currentTarget?.getAttribute('data-upload-section');
    if (targetSec === 'photos' || (!targetSec && currentFilter === 'photos')) {
      setUploadSection('photos');
    } else if (targetSec === 'information' || (!targetSec && currentFilter === 'information')) {
      setUploadSection('information');
    } else {
      setUploadSection('travelling-guide');
    }
  }

  function closeUploadModal() {
    uploadModal.classList.remove('open');
    uploadModal.setAttribute('aria-hidden', 'true');
    uploadForm.reset();
    pendingPhotoDataUrl = null;
    const previewWrap = document.getElementById('photoPreviewWrap');
    const promptWrap = document.getElementById('photoDropzonePrompt');
    if (previewWrap) previewWrap.style.display = 'none';
    if (promptWrap) promptWrap.style.display = 'block';
    const previewImg = document.getElementById('photoPreviewImg');
    if (previewImg) previewImg.src = '';
    const fileInput = document.getElementById('hubPhotoFileInput');
    if (fileInput) fileInput.value = '';
    document.body.style.overflow = '';
  }

  function handleFormSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const sec = sectionSelect ? sectionSelect.value : 'travelling-guide';
    const uniqueId = 'custom-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    if (sec === 'travelling-guide') {
      const place = (document.getElementById('hubGuidePlace')?.value || '').trim();
      const route = (document.getElementById('hubGuideRoute')?.value || '').trim();
      const note = (document.getElementById('hubGuideNote')?.value || '').trim();
      const author = (document.getElementById('hubGuideAuthor')?.value || '').trim() || 'Explorer';

      if (!place) {
        showToast('⚠️ Please enter the Destination / Place Title (e.g. Dharadhon).');
        return;
      }

      if (!route && !note) {
        showToast('⚠️ Please provide how to move there or a traveler note.');
        return;
      }

      const newRecord = {
        id: uniqueId,
        type: 'travelling-guide',
        category: 'travelling-guide',
        section: 'Travelling Guide',
        title: `${place} — Destination & Movement Guide`,
        place: place,
        travelGuide: route || 'Take local transit and regional highway corridors to reach this destination.',
        travelerNote: note || 'Explore with an open mind and respect local customs.',
        author: author,
        date: `${currentDate} • Verified Travel Note`,
        isUserUploaded: true,
        timestamp: Date.now()
      };

      catalog.unshift(newRecord);
      saveUserItemsToStorage();

      currentFilter = 'travelling-guide';
      filterBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-filter') === 'travelling-guide'));
      renderGallery();
      updateFilterCounts();
      closeUploadModal();
      showToast(`✓ Travel guide & note for "${place}" published successfully!`);
      document.getElementById('visuals')?.scrollIntoView({ behavior: 'smooth' });

    } else if (sec === 'photos') {
      const photoUrlInput = (document.getElementById('hubPhotoUrlInput')?.value || '').trim();
      const photoUrl = pendingPhotoDataUrl || photoUrlInput;
      const title = (document.getElementById('hubPhotoTitle')?.value || '').trim();
      const subject = document.getElementById('hubPhotoSubject')?.value || 'birds';
      const location = (document.getElementById('hubPhotoLocation')?.value || '').trim();
      const specs = (document.getElementById('hubPhotoSpecs')?.value || '').trim() || 'High-Resolution Wildlife Rig';
      const story = (document.getElementById('hubPhotoStory')?.value || '').trim();
      const author = (document.getElementById('hubPhotoAuthor')?.value || '').trim() || 'Aadi [Creator]';

      if (!photoUrl) {
        showToast('⚠️ Please upload a high-resolution photo file or enter an image URL.');
        return;
      }
      if (!title) {
        showToast('⚠️ Please enter the photo title or species name.');
        return;
      }
      if (!location) {
        showToast('⚠️ Please enter the location or sanctuary name.');
        return;
      }
      if (!story) {
        showToast('⚠️ Please provide field observation details.');
        return;
      }

      const newRecord = {
        id: uniqueId,
        type: 'photo',
        category: 'photos',
        section: 'Wildlife Photos',
        photoSubject: subject,
        title: title,
        mediaUrl: photoUrl,
        location: location,
        specs: specs,
        camera: specs,
        fieldNotes: story,
        knowMoreInfo: `Subject: ${title}\nCategory: High-Resolution Wildlife Photograph\nLocation: ${location}\nGear & Settings: ${specs}\nPhotographer: ${author}\n\nObservation Narrative:\n${story}`,
        author: author,
        date: `${currentDate} • Verified High-Res Visual`,
        isUserUploaded: true,
        timestamp: Date.now()
      };

      catalog.unshift(newRecord);
      saveUserItemsToStorage();

      currentFilter = 'photos';
      filterBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-filter') === 'photos'));
      renderGallery();
      updateFilterCounts();
      closeUploadModal();
      showToast(`✓ High-quality photo "${title}" published to Visuals!`);
      document.getElementById('visuals')?.scrollIntoView({ behavior: 'smooth' });

    } else if (sec === 'information') {
      const cat = document.getElementById('hubInfoCategory')?.value || 'Platform Update';
      const title = (document.getElementById('hubInfoTitle')?.value || '').trim();
      const text = (document.getElementById('hubInfoText')?.value || '').trim();
      const author = (document.getElementById('hubInfoAuthor')?.value || '').trim() || 'Creator / Drongo Core Team';

      if (!title || !text) {
        showToast('⚠️ Please provide the update headline and announcement details.');
        return;
      }

      const newRecord = {
        id: uniqueId,
        type: 'information',
        title: title,
        category: 'information',
        infoCategory: cat,
        section: 'Information',
        tags: ['user-upload', 'creator-update', cat.toLowerCase()],
        author: author,
        infoText: text,
        date: `${currentDate} • Official Creator Notice`,
        isUserUploaded: true,
        timestamp: Date.now()
      };

      catalog.unshift(newRecord);
      saveUserItemsToStorage();

      currentFilter = 'information';
      filterBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-filter') === 'information'));
      renderGallery();
      updateFilterCounts();
      closeUploadModal();
      showToast(`✓ Creator update "${title}" published successfully!`);
      document.getElementById('visuals')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function deleteUpload(id) {
    if (confirm('Delete this upload from your local catalog?')) {
      catalog = catalog.filter(item => item.id !== id);
      saveUserItemsToStorage();
      renderGallery();
      updateFilterCounts();
      showToast('Record removed.');
    }
  }

  /* --------------------------------------------------------------------------
     Search Modal
     -------------------------------------------------------------------------- */
  function openSearchModal() {
    searchModal.classList.add('open');
    searchModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    searchInputField.value = '';
    renderSearchResults('');
    setTimeout(() => searchInputField.focus(), 150);
  }

  function closeSearchModal() {
    searchModal.classList.remove('open');
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderSearchResults(query) {
    const q = query.toLowerCase().trim();
    const results = q === '' 
      ? catalog.slice(0, 8)
      : catalog.filter(item => 
          item.title.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.fieldNotes.toLowerCase().includes(q) ||
          (item.knowMoreInfo && item.knowMoreInfo.toLowerCase().includes(q)) ||
          item.tags.some(tag => tag.toLowerCase().includes(q))
        );

    if (results.length === 0) {
      searchResultsBox.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <p>No matching wildlife dispatches found for "${escapeHtml(query)}".</p>
        </div>
      `;
      return;
    }

    searchResultsBox.innerHTML = results.map(item => `
      <div class="search-result-item" data-id="${item.id}" tabindex="0">
        <img src="${escapeHtml(item.mediaUrl)}" alt="${escapeHtml(item.title)}" class="search-thumb" onerror="this.src='assets/images/black_drongo.jpg';"/>
        <div class="search-details">
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.location)} • ${escapeHtml(item.section)} ${item.photoSubject ? '• ' + escapeHtml(item.photoSubject.toUpperCase()) : ''}</p>
        </div>
      </div>
    `).join('');

    searchResultsBox.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-id');
        const index = currentlyFilteredItems.findIndex(i => i.id === id);
        closeSearchModal();
        if (index !== -1) {
          openLightbox(index, false);
        } else {
          // Reset filters and open
          currentFilter = 'all';
          currentPhotoSub = 'all';
          filterBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === 'all'));
          photoSubBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-photo-sub') === 'all'));
          renderGallery();
          const newIndex = currentlyFilteredItems.findIndex(i => i.id === id);
          if (newIndex !== -1) openLightbox(newIndex, false);
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     Navigation Drawer
     -------------------------------------------------------------------------- */
  function openNavDrawer() {
    navDrawer.classList.add('open');
    navDrawer.setAttribute('aria-hidden', 'false');
    drawerBackdrop.classList.add('open');
    menuTriggerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNavDrawer() {
    navDrawer.classList.remove('open');
    navDrawer.setAttribute('aria-hidden', 'true');
    drawerBackdrop.classList.remove('open');
    menuTriggerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3800);
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
     Event Listeners Binding
     -------------------------------------------------------------------------- */
  function bindEventListeners() {
    // Primary Filter Nav Tabs
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter') || 'all';
        currentPhotoSub = 'all';

        // Reset sub buttons to 'all'
        photoSubBtns.forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-photo-sub') === 'all');
        });

        // Sync Sub-Nav Bar links
        document.querySelectorAll('.sub-nav-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-section') === currentFilter);
        });

        renderGallery();
        updateFilterCounts();
      });
    });

    // Photo & Video Sub-Subject Filter Buttons
    photoSubBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        photoSubBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentPhotoSub = btn.getAttribute('data-photo-sub') || 'all';
        renderGallery();
      });
    });

    // Subject Pills in Upload Modal
    subjectPills.forEach(pill => {
      pill.addEventListener('click', () => {
        subjectPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const chosen = pill.getAttribute('data-subject');
        if (uploadPhotoSubjectInput) uploadPhotoSubjectInput.value = chosen;
      });
    });

    // Header Sub-Nav Links
    document.querySelectorAll('.sub-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetSection = link.getAttribute('data-section');
        if (targetSection) {
          e.preventDefault();
          document.querySelectorAll('.sub-nav-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          if (targetSection === 'maproom') {
            closeNavDrawer();
            document.getElementById('maproom')?.scrollIntoView({ behavior: 'smooth' });
            return;
          }

          if (targetSection === 'drongo') {
            closeNavDrawer();
            document.getElementById('drongo')?.scrollIntoView({ behavior: 'smooth' });
            return;
          }

          if (targetSection === 'creator' || targetSection === 'about-creator' || targetSection === 'expeditions') {
            closeNavDrawer();
            document.getElementById('expeditions')?.scrollIntoView({ behavior: 'smooth' });
            return;
          }

          currentFilter = targetSection;
          currentPhotoSub = 'all';

          filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === currentFilter);
          });
          photoSubBtns.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-photo-sub') === 'all');
          });

          renderGallery();
          updateFilterCounts();
          closeNavDrawer();
          document.getElementById('visuals')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Upload Modal triggers & step toggles
    openUploadModalBtns.forEach(btn => btn.addEventListener('click', openUploadModal));
    closeUploadModalBtn?.addEventListener('click', closeUploadModal);
    cancelUploadBtn?.addEventListener('click', closeUploadModal);
    uploadModal?.addEventListener('click', (e) => {
      if (e.target === uploadModal) closeUploadModal();
    });

    // Travelling Guide, Photos & Creator Information Modal Tabs
    document.getElementById('hubTabBtnGuide')?.addEventListener('click', () => setUploadSection('travelling-guide'));
    document.getElementById('hubTabBtnPhotos')?.addEventListener('click', () => setUploadSection('photos'));
    document.getElementById('hubTabBtnInfo')?.addEventListener('click', () => setUploadSection('information'));

    // Visuals Section Header Action Buttons
    document.getElementById('btnVisualsUploadPhoto')?.addEventListener('click', (e) => {
      e.preventDefault();
      setUploadSection('photos');
      openUploadModal(e);
    });

    document.getElementById('btnVisualsAddGuide')?.addEventListener('click', (e) => {
      e.preventDefault();
      setUploadSection('travelling-guide');
      openUploadModal(e);
    });

    document.getElementById('btnVisualsAddInfo')?.addEventListener('click', (e) => {
      e.preventDefault();
      setUploadSection('information');
      openUploadModal(e);
    });

    // High-Resolution Photo File Upload Dropzone Wiring
    const dropzoneBox = document.getElementById('photoDropzoneBox');
    const photoFileInput = document.getElementById('hubPhotoFileInput');
    const promptWrap = document.getElementById('photoDropzonePrompt');
    const previewWrap = document.getElementById('photoPreviewWrap');
    const previewImg = document.getElementById('photoPreviewImg');
    const previewFilename = document.getElementById('photoPreviewFilename');
    const removePreviewBtn = document.getElementById('btnRemovePhotoPreview');

    if (dropzoneBox && photoFileInput) {
      dropzoneBox.addEventListener('click', (e) => {
        if (e.target.id === 'btnRemovePhotoPreview' || e.target.closest('#btnRemovePhotoPreview')) return;
        photoFileInput.click();
      });

      dropzoneBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzoneBox.style.borderColor = 'var(--accent-gold)';
        dropzoneBox.style.backgroundColor = 'rgba(197, 160, 89, 0.08)';
      });

      ['dragleave', 'dragend'].forEach(evt => {
        dropzoneBox.addEventListener(evt, () => {
          dropzoneBox.style.borderColor = 'rgba(197, 160, 89, 0.5)';
          dropzoneBox.style.backgroundColor = 'rgba(10, 43, 71, 0.02)';
        });
      });

      dropzoneBox.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzoneBox.style.borderColor = 'rgba(197, 160, 89, 0.5)';
        dropzoneBox.style.backgroundColor = 'rgba(10, 43, 71, 0.02)';
        const file = e.dataTransfer?.files?.[0];
        if (file && file.type.startsWith('image/')) {
          handleSelectedPhotoFile(file);
        } else {
          showToast('⚠️ Please drop a valid high-resolution image file (JPG, PNG, WEBP).');
        }
      });

      photoFileInput.addEventListener('change', () => {
        const file = photoFileInput.files?.[0];
        if (file) handleSelectedPhotoFile(file);
      });
    }

    function handleSelectedPhotoFile(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        pendingPhotoDataUrl = e.target.result;
        if (previewImg) previewImg.src = pendingPhotoDataUrl;
        if (previewFilename) previewFilename.textContent = `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
        if (promptWrap) promptWrap.style.display = 'none';
        if (previewWrap) previewWrap.style.display = 'flex';
        showToast('✓ Photo loaded and ready to publish!');
      };
      reader.readAsDataURL(file);
    }

    removePreviewBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      pendingPhotoDataUrl = null;
      if (photoFileInput) photoFileInput.value = '';
      if (previewImg) previewImg.src = '';
      if (previewWrap) previewWrap.style.display = 'none';
      if (promptWrap) promptWrap.style.display = 'block';
    });

    uploadForm?.addEventListener('submit', handleFormSubmit);

    // Global Delegated click listener for any button with .trigger-upload-modal
    document.addEventListener('click', (e) => {
      const modalBtn = e.target.closest('.trigger-upload-modal');
      if (modalBtn) {
        e.preventDefault();
        openUploadModal(e);
      }
    });

    // Lightbox Controls
    closeLightboxBtn?.addEventListener('click', closeLightbox);
    lightboxPrevBtn?.addEventListener('click', showPrevLightbox);
    lightboxNextBtn?.addEventListener('click', showNextLightbox);
    lightboxModal?.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });

    // "To Know More" Toggle in Lightbox
    lightboxKnowMoreBtn?.addEventListener('click', () => {
      const isOpen = lightboxKnowMorePanel.style.display !== 'none';
      if (isOpen) {
        lightboxKnowMorePanel.style.display = 'none';
        lightboxKnowMoreBtn.classList.remove('active');
        lightboxKnowMoreBtn.setAttribute('aria-expanded', 'false');
      } else {
        lightboxKnowMorePanel.style.display = 'block';
        lightboxKnowMoreBtn.classList.add('active');
        lightboxKnowMoreBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // Curator Inline Notes Editor in Lightbox
    btnEditSpeciesNotes?.addEventListener('click', () => {
      const activeItem = currentlyFilteredItems[activeLightboxIndex];
      if (!activeItem) return;
      const currentNotes = activeItem.knowMoreInfo || activeItem.fieldNotes || '';
      const updatedNotes = prompt(`Enter verified field notes / information for "${activeItem.title}":`, currentNotes);
      if (updatedNotes !== null && updatedNotes.trim() !== '') {
        activeItem.knowMoreInfo = updatedNotes.trim();
        if (lightboxKnowMoreContent) {
          lightboxKnowMoreContent.textContent = activeItem.knowMoreInfo;
        }
        saveUserItemsToStorage();
        showToast('✓ Species information updated successfully.');
      }
    });

    // Search Modal Controls
    searchTriggerBtns.forEach(btn => btn.addEventListener('click', openSearchModal));
    closeSearchModalBtn?.addEventListener('click', closeSearchModal);
    searchModal?.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
    searchInputField?.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });

    // Nav Drawer Controls
    menuTriggerBtn?.addEventListener('click', openNavDrawer);
    closeDrawerBtn?.addEventListener('click', closeNavDrawer);
    drawerBackdrop?.addEventListener('click', closeNavDrawer);

    // Drongo Crest / Logo Detail Lightbox Controls
    const logoDetailModal = document.getElementById('logoDetailModal');
    const closeLogoDetailBtn = document.getElementById('closeLogoDetailBtn');
    const logoDetailBackdrop = document.getElementById('logoDetailBackdrop');
    const logoDetailCloseHint = document.getElementById('logoDetailCloseHint');

    function openLogoDetailModal() {
      logoDetailModal?.classList.add('open');
      logoDetailModal?.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLogoDetailModal() {
      logoDetailModal?.classList.remove('open');
      logoDetailModal?.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.trigger-logo-modal, #drongoMainLogo').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openLogoDetailModal();
      });
    });

    closeLogoDetailBtn?.addEventListener('click', closeLogoDetailModal);
    logoDetailBackdrop?.addEventListener('click', closeLogoDetailModal);
    logoDetailCloseHint?.addEventListener('click', closeLogoDetailModal);
    logoDetailModal?.addEventListener('click', (e) => {
      if (e.target === logoDetailModal) closeLogoDetailModal();
    });

    // Cute Anime Bird Mascot Click Interaction
    document.getElementById('animeBirdStickerWrap')?.addEventListener('click', (e) => {
      e.stopPropagation();
      showToast('🐦 Chirp! Welcome to Drongo Wildlife Edition!');
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (logoDetailModal?.classList.contains('open')) closeLogoDetailModal();
        else if (lightboxModal?.classList.contains('open')) closeLightbox();
        else if (uploadModal?.classList.contains('open')) closeUploadModal();
        else if (searchModal?.classList.contains('open')) closeSearchModal();
        else if (navDrawer?.classList.contains('open')) closeNavDrawer();
      } else if (lightboxModal?.classList.contains('open')) {
        if (e.key === 'ArrowRight') showNextLightbox();
        if (e.key === 'ArrowLeft') showPrevLightbox();
      }
    });

    // Export Catalog JSON
    const exportBtn = document.getElementById('exportCatalogBtn');
    exportBtn?.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(catalog, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "drongo_wildlife_catalog.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Catalog exported as JSON archive.');
    });

    // Reset Catalog
    const resetBtn = document.getElementById('resetCatalogBtn');
    resetBtn?.addEventListener('click', () => {
      if (confirm('Reset catalog to institutional baseline? All custom local uploads will be cleared.')) {
        localStorage.removeItem(STORAGE_KEY);
        catalog = [...INITIAL_CATALOG];
        renderGallery();
        updateFilterCounts();
        showToast('Catalog restored to baseline.');
      }
    });

    // -------------------------------------------------------------------------
    // 14. Organic Tree Branch Scroll Companion & Navigator
    // -------------------------------------------------------------------------
    function initTreeBranchScroll() {
      const widget = document.getElementById('treeBranchScrollWidget');
      const track = document.getElementById('branchStemTrack');
      const sapPath = document.getElementById('branchSapProgressPath');
      const perchSlider = document.getElementById('branchPerchSlider');
      const perchBadge = document.getElementById('perchScrollBadge');
      const btnTop = document.getElementById('branchScrollToTopBtn');
      const btnBottom = document.getElementById('branchScrollToBottomBtn');
      const milestoneBtns = document.querySelectorAll('.branch-node-btn');

      if (!widget || !track || !perchSlider) return;

      let isDragging = false;
      let pathLength = 400;

      if (sapPath && typeof sapPath.getTotalLength === 'function') {
        try {
          pathLength = sapPath.getTotalLength();
          sapPath.style.strokeDasharray = `${pathLength}px`;
          sapPath.style.strokeDashoffset = `${pathLength}px`;
        } catch (_) {
          pathLength = 400;
        }
      }

      function getScrollPercent() {
        const docElem = document.documentElement;
        const scrollY = window.pageYOffset || docElem.scrollTop || document.body.scrollTop || 0;
        const maxScroll = Math.max((docElem.scrollHeight || document.body.scrollHeight) - window.innerHeight, 1);
        return Math.min(Math.max(scrollY / maxScroll, 0), 1);
      }

      function scrollToPercent(percent, smooth = false) {
        const docElem = document.documentElement;
        const maxScroll = Math.max((docElem.scrollHeight || document.body.scrollHeight) - window.innerHeight, 1);
        const targetY = percent * maxScroll;
        window.scrollTo({
          top: targetY,
          behavior: smooth ? 'smooth' : 'auto'
        });
      }

      function updateBranchUI(percent) {
        const clamped = Math.min(Math.max(percent, 0), 1);
        const percentDisplay = Math.round(clamped * 100);

        if (sapPath) {
          sapPath.style.strokeDashoffset = `${pathLength * (1 - clamped)}px`;
        }

        perchSlider.style.top = `${clamped * 100}%`;
        perchSlider.setAttribute('aria-valuenow', percentDisplay);
        if (perchBadge) {
          perchBadge.textContent = `${percentDisplay}%`;
        }

        // Update active milestone
        const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const viewMarker = scrollY + window.innerHeight * 0.35;
        milestoneBtns.forEach((btn) => {
          const targetSelector = btn.getAttribute('data-target');
          if (!targetSelector) return;
          const targetEl = document.querySelector(targetSelector);
          if (targetEl) {
            const top = targetEl.offsetTop;
            const bottom = top + targetEl.offsetHeight;
            if (viewMarker >= top && viewMarker <= bottom) {
              btn.classList.add('active');
            } else {
              btn.classList.remove('active');
            }
          }
        });
      }

      // Smooth scroll synchronization
      let ticking = false;
      function onScroll() {
        if (isDragging) return;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateBranchUI(getScrollPercent());
            ticking = false;
          });
          ticking = true;
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', () => updateBranchUI(getScrollPercent()), { passive: true });

      // Handle pointer events for dragging anywhere along the track or bird
      function handlePointerPosition(clientY, smooth = false) {
        const rect = track.getBoundingClientRect();
        const clampedY = Math.min(Math.max(clientY - rect.top, 0), rect.height);
        const ratio = clampedY / (rect.height || 1);
        updateBranchUI(ratio);
        scrollToPercent(ratio, smooth);
      }

      function onTrackPointerDown(e) {
        if (e.target.closest('.branch-node-btn')) return;
        isDragging = true;
        perchSlider.classList.add('is-dragging');
        handlePointerPosition(e.clientY, false);
        window.addEventListener('pointermove', onWindowPointerMove, { passive: false });
        window.addEventListener('pointerup', onWindowPointerUp);
        window.addEventListener('pointercancel', onWindowPointerUp);
        e.preventDefault();
      }

      function onWindowPointerMove(e) {
        if (!isDragging) return;
        handlePointerPosition(e.clientY, false);
        e.preventDefault();
      }

      function onWindowPointerUp() {
        if (isDragging) {
          isDragging = false;
          perchSlider.classList.remove('is-dragging');
          window.removeEventListener('pointermove', onWindowPointerMove);
          window.removeEventListener('pointerup', onWindowPointerUp);
          window.removeEventListener('pointercancel', onWindowPointerUp);
          updateBranchUI(getScrollPercent());
        }
      }

      track.addEventListener('pointerdown', onTrackPointerDown);

      // Keyboard navigation for accessibility
      perchSlider.addEventListener('keydown', (e) => {
        const step = window.innerHeight * 0.4;
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          e.preventDefault();
          window.scrollBy({ top: step, behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          e.preventDefault();
          window.scrollBy({ top: -step, behavior: 'smooth' });
        } else if (e.key === 'Home') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (e.key === 'End') {
          e.preventDefault();
          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        }
      });

      // Quick Scroll Buttons
      btnTop?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      btnBottom?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        window.scrollTo({ top: maxScroll, behavior: 'smooth' });
      });

      // Milestone buttons jump with robust scrollIntoView
      milestoneBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const targetSelector = btn.getAttribute('data-target');
          if (!targetSelector) return;
          const targetEl = document.querySelector(targetSelector);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            milestoneBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
          }
        });
      });

      // Initial tick
      updateBranchUI(getScrollPercent());
    }

    // -------------------------------------------------------------------------
    // Magical Latin Motto Glow & Translation Interactive Reveal
    // -------------------------------------------------------------------------
    function initMagicalMottoGlow() {
      const mottos = document.querySelectorAll('.brand-motto');
      mottos.forEach((motto) => {
        // Toggle on tap or click
        motto.addEventListener('click', () => {
          motto.classList.toggle('active-glow');
        });

        // Accessible keyboard toggle (Enter / Space)
        motto.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            motto.classList.toggle('active-glow');
          }
        });
      });

      // Dismiss active-glow when clicking elsewhere on the page
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.brand-motto')) {
          document.querySelectorAll('.brand-motto.active-glow').forEach((el) => {
            el.classList.remove('active-glow');
          });
        }
      });
    }

    // -------------------------------------------------------------------------
    // 16. Editorial Introduction 15-Second Ambient Looping Background Video
    // -------------------------------------------------------------------------
    function initEditorialBackgroundVideo() {
      const video = document.getElementById('editorialIntroVideo');
      if (!video) return;

      // Strictly mute and configure inline looping attributes
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.removeAttribute('controls');

      // Seamless playback guarantee across all browsers & mobile devices
      const attemptPlay = () => {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // If autoplay was temporarily held back by browser policy, resume on first user interaction
            const resumeOnGesture = () => {
              video.muted = true;
              video.play().catch(() => {});
              window.removeEventListener('click', resumeOnGesture);
              window.removeEventListener('scroll', resumeOnGesture);
              window.removeEventListener('touchstart', resumeOnGesture);
            };
            window.addEventListener('click', resumeOnGesture, { once: true, passive: true });
            window.addEventListener('scroll', resumeOnGesture, { once: true, passive: true });
            window.addEventListener('touchstart', resumeOnGesture, { once: true, passive: true });
          });
        }
      };

      attemptPlay();

      // Ensure smooth, infinite loop with zero pause/seek artifacts
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      });

      // Visibility API: pause silently when tab hidden to save battery, resume immediately on focus
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
          video.play().catch(() => {});
        }
      });
    }

    // Launch tree branch companion, magical motto glow & ambient intro video
    initTreeBranchScroll();
    initMagicalMottoGlow();
    initEditorialBackgroundVideo();
  }

  // Start Engine on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
