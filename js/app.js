/**
 * DRONGO — Institutional Wildlife & Nature Visual Storytelling
 * Core Application Engine & Curator Upload System
 */

(function () {
  'use strict';

  // Key for localStorage persistence of user uploads
  const STORAGE_KEY = 'drongo_custom_catalog_v1';

  // Base institutional catalog of photographs and cinematic dispatches
  const INITIAL_CATALOG = [
    // --- 1. PHOTOS (4 Items) ---
    {
      id: 'item-tiger-valmiki',
      type: 'photo',
      title: 'The Royal Bengal Tiger of Valmiki',
      category: 'photos',
      section: 'Photos',
      tags: ['photos', 'mammals', 'valmiki', 'tiger'],
      location: 'Valmiki Tiger Reserve, West Champaran, Bihar',
      camera: 'Sony Alpha 1 Flagship',
      lens: 'FE 600mm f/4 GM OSS',
      exposure: '1/2000s at f/4 • ISO 640',
      mediaUrl: 'assets/images/valmiki_tiger.jpg',
      fieldNotes: 'Spotted emerging from misty sal forest shadows along the Gandak floodplains at first light. Valmiki is Bihar\'s sovereign wilderness corridor, preserving primeval Terai grasslands against the snowy backdrop of the Nepalese Himalayas.',
      isUserUploaded: false
    },
    {
      id: 'item-drongo-canopy',
      type: 'photo',
      title: 'The Black Drongo: King of the Canopy',
      category: 'photos',
      section: 'Photos',
      tags: ['photos', 'birds', 'drongo', 'rajgir'],
      location: 'Rajgir Wildlife Sanctuary, Nalanda, Bihar',
      camera: 'Nikon Z9 Flagship',
      lens: 'NIKKOR Z 400mm f/2.8 TC VR S',
      exposure: '1/3200s at f/2.8 • ISO 320',
      mediaUrl: 'assets/images/black_drongo.jpg',
      fieldNotes: 'Dicrurus macrocercus in all its regal splendour. Perched upon an ancient lichen-encrusted branch, its iridescent midnight-blue plumage and deeply notched fork-tail symbolize fierce courage in Indian folklore, fearlessly mobbing raptors thrice its size.',
      isUserUploaded: false
    },
    {
      id: 'item-crane-kabar-tal',
      type: 'photo',
      title: 'Courtship of the Sarus Crane',
      category: 'photos',
      section: 'Photos',
      tags: ['photos', 'birds', 'wetlands', 'kabar-tal'],
      location: 'Kabar Tal Wetland (Ramsar Site #2436), Begusarai',
      camera: 'Canon EOS R5 C',
      lens: 'RF 100-500mm f/4.5-7.1 L IS USM',
      exposure: '1/4000s at f/5.6 • ISO 800',
      mediaUrl: 'assets/images/sarus_crane.jpg',
      fieldNotes: 'Standing nearly six feet tall, the Sarus Crane is Earth\'s tallest flying bird. Photographed during synchronized dawn calling over pink water lily pads in the sprawling oxbow lake of Kabar Tal.',
      isUserUploaded: false
    },
    {
      id: 'item-flycatcher-kaimur',
      type: 'photo',
      title: 'Asian Paradise Flycatcher Streamer Flight',
      category: 'photos',
      section: 'Photos',
      tags: ['photos', 'birds', 'expeditions', 'kaimur'],
      location: 'Kaimur Wildlife Sanctuary, Rohtas, Bihar',
      camera: 'Sony Alpha 1 Flagship',
      lens: 'FE 400mm f/2.8 GM OSS',
      exposure: '1/5000s at f/2.8 • ISO 1000',
      mediaUrl: 'assets/images/paradise_flycatcher.jpg',
      fieldNotes: 'A ribbon-tailed adult male in white morph gliding gracefully through the dense canopy of Kaimur\'s deciduous plateau forests, tracking dragonflies with astonishing aerobatic dexterity.',
      isUserUploaded: false
    },

    // --- 2. VIDEO (2 Items) ---
    {
      id: 'item-dolphin-vikramshila',
      type: 'video',
      title: 'Ganges River Dolphin (Susu) at Dawn',
      category: 'video',
      section: 'Video',
      tags: ['video', 'wetlands', 'ganges', 'dolphin'],
      location: 'Vikramshila Gangetic Dolphin Sanctuary, Bhagalpur',
      camera: 'RED V-Raptor 8K Cinema',
      lens: 'Canon Cine-Servo 50-1000mm T5.0-8.9',
      exposure: '8K UHD • 120fps Slow Motion • 180° Shutter',
      mediaUrl: 'assets/images/gangetic_dolphin.jpg',
      videoUrl: 'assets/videos/gangetic_dolphin_teaser.mp4',
      fieldNotes: 'The Platanista gangetica is an archaic freshwater dolphin, functionally blind in the nutrient-rich silt of the Ganges. Capturing this breach required 6 dawn patrols on traditional wooden catamarans.',
      isUserUploaded: false
    },
    {
      id: 'item-gharial-gandak',
      type: 'video',
      title: 'Gharial Patriarch of the Gandak River',
      category: 'video',
      section: 'Video',
      tags: ['video', 'wetlands', 'reptiles', 'gharial'],
      location: 'Gandak River Confluence, Bihar',
      camera: 'ARRI Alexa Mini LF',
      lens: 'Angénieux Optimo Ultra 12x Cine',
      exposure: '4K ProRes 4444 • 60fps • T4.2',
      mediaUrl: 'assets/images/gharial_gandak.jpg',
      videoUrl: 'assets/videos/gharial_basking_4k.mp4',
      fieldNotes: 'An eighteen-foot dominant male Gharial (Gavialis gangeticus) with his bulbous nasal ghara basking upon pristine river shingle. The Gandak river in Bihar remains one of Earth\'s most crucial sanctuaries for this critically endangered crocodylian.',
      isUserUploaded: false
    },

    // --- 3. SHORT FILM (2 Items) ---
    {
      id: 'item-sal-chronicle-film',
      type: 'video',
      title: 'Shadows of the Sal Forest: A Valmiki Chronicle',
      category: 'short-film',
      section: 'Short Film',
      tags: ['short-film', 'cinema', 'valmiki', 'tiger', 'sal-forest'],
      location: 'Valmiki Tiger Reserve, West Champaran, Bihar',
      camera: 'ARRI Alexa Mini LF Cinema Master',
      lens: 'Zeiss Supreme Prime Lenses',
      exposure: '4K CinemaScope • 24fps • Film Simulation',
      mediaUrl: 'assets/images/bengal_tiger.jpg',
      videoUrl: 'assets/videos/gharial_basking_4k.mp4',
      fieldNotes: 'A 14-minute cinematic short documentary exploring the primeval predator-prey dynamics of tiger territories along the Indo-Nepal Himalayan foothills.',
      isUserUploaded: false
    },
    {
      id: 'item-wetlands-rhythm-film',
      type: 'video',
      title: 'Rhythm of the Wetlands: Kabar Tal & Gandak River',
      category: 'short-film',
      section: 'Short Film',
      tags: ['short-film', 'cinema', 'wetlands', 'kabar-tal', 'skimmer'],
      location: 'Kabar Tal Ramsar Basin & Gandak Shingle, Bihar',
      camera: 'RED V-Raptor 8K VV Cinema',
      lens: 'Canon Cine-Servo 50-1000mm T5.0',
      exposure: '8K DCI • 120fps High-Speed • 180° Shutter',
      mediaUrl: 'assets/images/indian_skimmer.jpg',
      videoUrl: 'assets/videos/gangetic_dolphin_teaser.mp4',
      fieldNotes: 'Cinematic short film documenting migratory waterbirds arriving along the Central Asian Flyway and rare Indian skimmers cutting through dawn river mists.',
      isUserUploaded: false
    },

    // --- 4. TRAVELLING GUIDE (2 Items) ---
    {
      id: 'item-guide-valmiki',
      type: 'photo',
      title: 'Field Expedition Guide: Navigating Valmiki Tiger Reserve',
      category: 'travelling-guide',
      section: 'Travelling Guide',
      tags: ['travelling-guide', 'logistics', 'valmiki', 'safari'],
      location: 'Valmiki Tiger Reserve (Madanpur, Valmikinagar, Manguraha)',
      camera: 'Field Logistics Dossier & Nikon Z8',
      lens: 'NIKKOR Z 24-120mm f/4 S',
      exposure: 'Comprehensive Trail & Permitting Guide',
      mediaUrl: 'assets/images/racket_tailed_drongo.jpg',
      fieldNotes: 'Complete naturalist travel and expedition guide: entry permits via Forest Department portals, best safari seasons (November to April), river raft crossings over the Gandak, and essential telephoto focal lengths for dense sal canopies.',
      isUserUploaded: false
    },
    {
      id: 'item-guide-vikramshila',
      type: 'photo',
      title: 'Riverboat Naturalist Guide: Vikramshila Dolphin Safari',
      category: 'travelling-guide',
      section: 'Travelling Guide',
      tags: ['travelling-guide', 'logistics', 'dolphin', 'ganges', 'boats'],
      location: 'Vikramshila Gangetic Dolphin Sanctuary, Bhagalpur to Sultanganj',
      camera: 'River Expedition Map & Canon R5 C',
      lens: 'RF 70-200mm f/2.8 L IS USM',
      exposure: 'Boat Charter & Tidal Navigation Protocols',
      mediaUrl: 'assets/images/river_dolphin.jpg',
      fieldNotes: 'Essential guide for riverine wildlife photography: hiring authorized local wooden country boats from Barari Ghat, navigating seasonal river silt channels, respecting safe 50-meter observation distances for surfacing dolphins, and dawn light tracking.',
      isUserUploaded: false
    },

    // --- 5. IDEAS (2 Items) ---
    {
      id: 'item-idea-watercraft-rig',
      type: 'photo',
      title: 'Low-Angle Watercraft Filming Rig for Elusive River Fauna',
      category: 'ideas',
      section: 'Ideas',
      tags: ['ideas', 'filming-rig', 'river', 'innovation'],
      location: 'Gandak & Ganges River Confluences, Bihar',
      camera: 'Custom Dual-Gimbal Carbon Frame Rig',
      lens: 'Super-Wide 14-24mm & 400mm Dual Mount',
      exposure: 'Waterline Low-Perspective Cinematography',
      mediaUrl: 'assets/images/drongo_bird.jpg',
      fieldNotes: 'Innovative field filming concept: building an ultra-stable silent hydro-skiff mount that floats inches above waterlevel, enabling zero-vibration cinematic waterline perspectives of surfacing river dolphins and foraging waders without acoustic engine disturbance.',
      isUserUploaded: false
    },
    {
      id: 'item-idea-canopy-microphone',
      type: 'photo',
      title: 'Parabolic Acoustic Array for Nocturnal Canopy Dispatches',
      category: 'ideas',
      section: 'Ideas',
      tags: ['ideas', 'bioacoustics', 'audio-rig', 'canopy'],
      location: 'Kaimur Plateau Deciduous Canopy & Valmiki',
      camera: 'Ultra-Low-Noise Ambisonic Parabolic Array',
      lens: 'Optical Sight Calibration Unit',
      exposure: '32-bit Float Multi-Channel Field Audio',
      mediaUrl: 'assets/images/adjutant_stork.jpg',
      fieldNotes: 'Field sound design innovation: deploying 26-inch parabolic dish microphones synchronized with high-ISO motion sensors to capture the acoustic repertoire of owls, nightjars, and alarm calls of spotted deer announcing prowling carnivores.',
      isUserUploaded: false
    },

    // --- 6. INFORMATION (2 Items) ---
    {
      id: 'item-info-drongo-sentinel',
      type: 'photo',
      title: 'Ecological Dossier: The Black Drongo\'s Sentinel System',
      category: 'information',
      section: 'Information',
      tags: ['information', 'ecology', 'drongo', 'mimicry', 'ethology'],
      location: 'Rajgir & Valmiki Deciduous Woodlands, Bihar',
      camera: 'Bioacoustics & Telephoto Documentation',
      lens: 'FE 600mm f/4 GM OSS',
      exposure: 'Behavioral Ethology Monograph',
      mediaUrl: 'assets/images/black_drongo.jpg',
      fieldNotes: 'Detailed scientific overview of Dicrurus macrocercus: its complex vocal mimicry replicating hawk and shikra distress calls, symbiotic cooperative feeding associations with grazing herbivores, and fearless territorial defense against raptors.',
      isUserUploaded: false
    },
    {
      id: 'item-info-kabar-tal-ecosystem',
      type: 'photo',
      title: 'Hydrological & Avian Status Report: Kabar Tal Ramsar Wetland',
      category: 'information',
      section: 'Information',
      tags: ['information', 'wetlands', 'ramsar', 'conservation', 'birds'],
      location: 'Kabar Tal (Begusarai), Bihar — Ramsar Site #2436',
      camera: 'Ecological Survey & Aerial Imagery',
      lens: 'High-Resolution Environmental Telephoto',
      exposure: 'Ramsar Biosphere Conservation Survey',
      mediaUrl: 'assets/images/sarus_crane.jpg',
      fieldNotes: 'Comprehensive environmental status report on Asia\'s largest freshwater oxbow lake: seasonal water depths, macrophyte diversity, macroinvertebrate biodiversity supporting migratory waterfowl, and community conservation initiatives.',
      isUserUploaded: false
    }
  ];

  // Application State
  let catalog = [];
  let currentFilter = 'all';
  let activeLightboxIndex = 0;
  let currentlyFilteredItems = [];

  // DOM Elements
  const mediaGridEl = document.getElementById('dynamicMediaGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const uploadModal = document.getElementById('uploadModal');
  const openUploadModalBtns = document.querySelectorAll('.trigger-upload-modal');
  const closeUploadModalBtn = document.getElementById('closeUploadModalBtn');
  const cancelUploadBtn = document.getElementById('cancelUploadBtn');
  const uploadForm = document.getElementById('uploadMediaForm');
  const dropzoneInput = document.getElementById('dropzoneFileInput');
  const dropzoneArea = document.getElementById('uploadDropzoneArea');
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

  // Temporary container for newly selected file data URL
  let pendingFileDataUrl = null;

  /* --------------------------------------------------------------------------
     Initialization & Storage Sync
     -------------------------------------------------------------------------- */
  function init() {
    loadCatalogFromStorage();
    renderGallery();
    updateFilterCounts();
    bindEventListeners();
  }

  function loadCatalogFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const userItems = JSON.parse(stored);
        const customUploads = Array.isArray(userItems) ? userItems.filter(item => item.isUserUploaded) : [];
        catalog = [...INITIAL_CATALOG, ...customUploads];
      } else {
        catalog = [...INITIAL_CATALOG];
      }
    } catch (e) {
      console.warn('Could not read user catalog from localStorage', e);
      catalog = [...INITIAL_CATALOG];
    }
  }

  function saveUserItemsToStorage() {
    try {
      const userItems = catalog.filter(item => item.isUserUploaded);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userItems));
    } catch (e) {
      console.error('Failed to write to localStorage', e);
      showToast('Warning: LocalStorage limit reached for large media.');
    }
  }

  /* --------------------------------------------------------------------------
     Gallery Rendering
     -------------------------------------------------------------------------- */
  function renderGallery() {
    if (!mediaGridEl) return;

    // Apply Filter
    currentlyFilteredItems = catalog.filter(item => {
      if (currentFilter === 'all') return true;
      if (currentFilter === 'photos') return item.category === 'photos' || item.type === 'photo';
      if (currentFilter === 'video') return item.category === 'video' || (item.type === 'video' && item.category !== 'short-film');
      if (currentFilter === 'short-film') return item.category === 'short-film' || item.section === 'Short Film' || item.section === 'SHORT FILMS';
      if (currentFilter === 'travelling-guide') return item.category === 'travelling-guide' || item.section === 'Travelling Guide';
      if (currentFilter === 'ideas') return item.category === 'ideas' || item.section === 'Ideas';
      if (currentFilter === 'information') return item.category === 'information' || item.section === 'Information';
      return item.category === currentFilter;
    });

    if (currentlyFilteredItems.length === 0) {
      mediaGridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 4px;">
          <h3 style="font-family: var(--font-display); color: var(--primary-ocean-blue); margin-bottom: 8px;">No Entries Found in this Section</h3>
          <p style="color: var(--text-muted); font-size: 13px; margin-bottom: 20px;">Use the curator upload tool to add your photographs or cinematic reels to this category.</p>
          <button class="header-action-btn btn-gold trigger-upload-modal" style="margin: 0 auto;">+ Upload to This Section</button>
        </div>
      `;
      mediaGridEl.querySelector('.trigger-upload-modal')?.addEventListener('click', openUploadModal);
      return;
    }

    mediaGridEl.innerHTML = currentlyFilteredItems.map((item, index) => {
      const isVideo = item.type === 'video';

      let badgeClass = 'badge-photo';
      let categoryLabel = item.section || 'PHOTO';
      if (item.category === 'video' || (item.type === 'video' && item.category !== 'short-film')) {
        badgeClass = 'badge-video';
        categoryLabel = item.section || 'VIDEO';
      } else if (item.category === 'short-film') {
        badgeClass = 'badge-short-film';
        categoryLabel = item.section || 'SHORT FILM';
      } else if (item.category === 'travelling-guide') {
        badgeClass = 'badge-guide';
        categoryLabel = item.section || 'TRAVELLING GUIDE';
      } else if (item.category === 'ideas') {
        badgeClass = 'badge-ideas';
        categoryLabel = item.section || 'IDEAS';
      } else if (item.category === 'information') {
        badgeClass = 'badge-info';
        categoryLabel = item.section || 'INFORMATION';
      }

      return `
        <article class="media-card" data-index="${index}" data-id="${item.id}" tabindex="0" role="button" aria-label="${escapeHtml(item.title)}">
          <div class="card-media-wrapper">
            <span class="card-category-badge ${badgeClass}">${escapeHtml(categoryLabel)}</span>
            <img 
              src="${escapeHtml(item.mediaUrl)}" 
              alt="${escapeHtml(item.title)}" 
              loading="lazy"
              onerror="this.onerror=null; this.src='assets/images/black_drongo.jpg';"
            />
            ${isVideo ? `
              <div class="video-play-overlay" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            ` : ''}
          </div>

          <div class="card-data-bar">
            <div class="card-title-row">
              <h3 class="card-title">${escapeHtml(item.title)}</h3>
              ${item.isUserUploaded ? '<span class="user-tag">User Upload</span>' : ''}
            </div>

            <div class="card-location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>${escapeHtml(item.location)}</span>
            </div>

            <div class="card-specs">
              <span><strong>Gear:</strong> ${escapeHtml(item.camera)}</span>
              ${item.lens ? `<span class="spec-bullet">•</span><span>${escapeHtml(item.lens)}</span>` : ''}
              ${item.exposure ? `<span class="spec-bullet">•</span><span>${escapeHtml(item.exposure)}</span>` : ''}
            </div>

            <div class="card-actions-row">
              <span class="view-entry-btn">
                <span>View Full Record</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2.44z"/>
                </svg>
              </span>

              ${item.isUserUploaded ? `
                <button class="card-delete-btn" data-delete-id="${item.id}" title="Remove this upload">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                  </svg>
                  Remove
                </button>
              ` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card click handlers for Lightbox
    mediaGridEl.querySelectorAll('.media-card').forEach(card => {
      card.addEventListener('click', (e) => {
        // Prevent opening if clicked on delete button
        if (e.target.closest('.card-delete-btn')) return;
        const index = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(index);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const index = parseInt(card.getAttribute('data-index'), 10);
          openLightbox(index);
        }
      });
    });

    // Attach card delete handlers
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
      if (filter === 'all') count = catalog.length;
      else if (filter === 'photos') count = catalog.filter(i => i.category === 'photos' || i.type === 'photo').length;
      else if (filter === 'video') count = catalog.filter(i => i.category === 'video' || (i.type === 'video' && i.category !== 'short-film')).length;
      else if (filter === 'short-film') count = catalog.filter(i => i.category === 'short-film' || i.section === 'Short Film' || i.section === 'SHORT FILMS').length;
      else if (filter === 'travelling-guide') count = catalog.filter(i => i.category === 'travelling-guide' || i.section === 'Travelling Guide').length;
      else if (filter === 'ideas') count = catalog.filter(i => i.category === 'ideas' || i.section === 'Ideas').length;
      else if (filter === 'information') count = catalog.filter(i => i.category === 'information' || i.section === 'Information').length;
      else count = catalog.filter(i => i.category === filter).length;

      countEl.textContent = count;
    });
  }

  /* --------------------------------------------------------------------------
     Lightbox & Cinema Modal
     -------------------------------------------------------------------------- */
  function openLightbox(index) {
    if (!currentlyFilteredItems[index]) return;
    activeLightboxIndex = index;
    const item = currentlyFilteredItems[index];

    // Populate Info
    lightboxBadge.textContent = item.section || (item.type === 'video' ? 'CINEMATIC DISPATCH' : 'WILDLIFE PHOTOGRAPH');
    lightboxTitle.textContent = item.title;
    lightboxLocation.textContent = item.location;
    lightboxStory.textContent = item.fieldNotes || 'Recorded during the Drongo Eastern Floodplains Expedition.';

    lightboxSpecs.innerHTML = `
      <div class="spec-line"><strong>Capture Gear</strong> ${escapeHtml(item.camera || 'High-Resolution Wildlife Rig')}</div>
      <div class="spec-line"><strong>Optics</strong> ${escapeHtml(item.lens || 'Prime Super-Telephoto Lens')}</div>
      <div class="spec-line"><strong>EXIF / Settings</strong> ${escapeHtml(item.exposure || 'Natural Ambient Light')}</div>
      <div class="spec-line"><strong>Classification</strong> ${escapeHtml(item.section || 'Editorial Visual Catalog')}</div>
      ${item.isUserUploaded ? '<div class="spec-line"><strong>Source</strong> Verified Expedition Contributor Upload</div>' : ''}
    `;

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
          style="width: 100%; max-height: 80vh; outline: none; background: #000;"
        >
          Your browser does not support HTML5 video playback.
        </video>
      `;
    } else {
      lightboxMediaPane.innerHTML = `
        <img 
          src="${escapeHtml(item.mediaUrl)}" 
          alt="${escapeHtml(item.title)}" 
          style="max-width: 100%; max-height: 80vh; object-fit: contain;"
          onerror="this.onerror=null; this.src='assets/images/black_drongo.jpg';"
        />
      `;
    }

    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    // Stop video playback if playing
    const video = lightboxMediaPane.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    lightboxMediaPane.innerHTML = '';
    document.body.style.overflow = '';
  }

  function showNextLightbox() {
    if (currentlyFilteredItems.length <= 1) return;
    activeLightboxIndex = (activeLightboxIndex + 1) % currentlyFilteredItems.length;
    openLightbox(activeLightboxIndex);
  }

  function showPrevLightbox() {
    if (currentlyFilteredItems.length <= 1) return;
    activeLightboxIndex = (activeLightboxIndex - 1 + currentlyFilteredItems.length) % currentlyFilteredItems.length;
    openLightbox(activeLightboxIndex);
  }

  /* --------------------------------------------------------------------------
     Curator Studio: Media Upload System
     -------------------------------------------------------------------------- */
  function setMediaType(type) {
    if (type === 'video') {
      if (mediaTypeSelect) mediaTypeSelect.value = 'video';
      typeToggleVideo?.classList.add('active');
      typeTogglePhoto?.classList.remove('active');
      if (dropzoneTitleText) dropzoneTitleText.textContent = 'Click to Browse or Drag & Drop Video Here';
      if (dropzoneNoteText) dropzoneNoteText.textContent = 'Supports MP4, MOV, WEBM wildlife reels and cinematic clips.';
      if (dropzoneInput) dropzoneInput.accept = 'video/*';
      if (sectionSelect && sectionSelect.value === 'photos') {
        setUploadSection('video');
      }
    } else {
      if (mediaTypeSelect) mediaTypeSelect.value = 'photo';
      typeTogglePhoto?.classList.add('active');
      typeToggleVideo?.classList.remove('active');
      if (dropzoneTitleText) dropzoneTitleText.textContent = 'Click to Browse or Drag & Drop Photo Here';
      if (dropzoneNoteText) dropzoneNoteText.textContent = 'Supports JPG, PNG, WEBP stills from cameras or phones.';
      if (dropzoneInput) dropzoneInput.accept = 'image/*';
      if (sectionSelect && (sectionSelect.value === 'video' || sectionSelect.value === 'short-film')) {
        setUploadSection('photos');
      }
    }
  }

  function setUploadSection(sec) {
    if (!sectionSelect) return;
    sectionSelect.value = sec;
    sectionChoicePills.forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-section') === sec);
    });
    const sectionDisplayNames = {
      'photos': 'Photos',
      'video': 'Video',
      'short-film': 'Short Film',
      'travelling-guide': 'Travelling Guide',
      'ideas': 'Ideas',
      'information': 'Information'
    };
    if (submitBtnText) {
      submitBtnText.textContent = `Publish Dispatch to ${sectionDisplayNames[sec] || sec}`;
    }
  }

  function openUploadModal(e) {
    uploadModal.classList.add('open');
    uploadModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const targetType = e?.currentTarget?.getAttribute('data-upload-type');
    const targetSec = e?.currentTarget?.getAttribute('data-upload-section');

    if (targetType) {
      setMediaType(targetType);
    } else {
      setMediaType('photo');
    }

    if (targetSec) {
      setUploadSection(targetSec);
    } else if (targetType === 'video') {
      setUploadSection('video');
    } else {
      setUploadSection('photos');
    }
  }

  function closeUploadModal() {
    uploadModal.classList.remove('open');
    uploadModal.setAttribute('aria-hidden', 'true');
    uploadForm.reset();
    resetUploadPreview();
    document.body.style.overflow = '';
  }

  function resetUploadPreview() {
    pendingFileDataUrl = null;
    previewContainer.style.display = 'none';
    previewImage.style.display = 'none';
    previewImage.src = '';
    previewVideo.style.display = 'none';
    previewVideo.src = '';
    dropzoneArea.style.display = 'block';
  }

  function handleFileSelection(file) {
    if (!file) return;

    const isVideoFile = file.type.startsWith('video/');
    const isImageFile = file.type.startsWith('image/');

    if (!isVideoFile && !isImageFile) {
      showToast('Please select a valid image or video file.');
      return;
    }

    setMediaType(isVideoFile ? 'video' : 'photo');

    const reader = new FileReader();
    reader.onload = function (e) {
      pendingFileDataUrl = e.target.result;
      dropzoneArea.style.display = 'none';
      previewContainer.style.display = 'block';

      if (isVideoFile) {
        previewVideo.src = pendingFileDataUrl;
        previewVideo.style.display = 'block';
        previewImage.style.display = 'none';
      } else {
        previewImage.src = pendingFileDataUrl;
        previewImage.style.display = 'block';
        previewVideo.style.display = 'none';
      }
      showToast('Media file loaded for review.');
    };
    reader.readAsDataURL(file);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('uploadTitle').value.trim();
    const mediaType = mediaTypeSelect.value;
    const section = document.getElementById('uploadSection').value;
    const location = document.getElementById('uploadLocation').value.trim();
    const camera = document.getElementById('uploadCamera').value.trim() || 'Professional Wildlife Cinema Rig';
    const lens = document.getElementById('uploadLens').value.trim() || 'Super-Telephoto Prime';
    const exposure = document.getElementById('uploadExposure').value.trim() || 'Natural Daylight';
    const fieldNotes = document.getElementById('uploadStory').value.trim() || 'Documented during Drongo expedition field survey.';
    const externalUrl = document.getElementById('uploadUrlInput').value.trim();

    // Determine final media source
    let finalMediaUrl = pendingFileDataUrl || externalUrl;
    let finalVideoUrl = null;

    if (!finalMediaUrl) {
      showToast('Please upload a file or specify a valid media URL.');
      return;
    }

    if (mediaType === 'video') {
      finalVideoUrl = finalMediaUrl;
      // If external video and no separate poster image, fallback to representative poster
      if (!finalMediaUrl.startsWith('data:image')) {
        finalMediaUrl = 'assets/images/gangetic_dolphin.jpg';
      }
    }

    // Determine section-based tags and display name
    const tags = ['user-upload', section];
    if (mediaType === 'video') tags.push('video');
    if (mediaType === 'photo') tags.push('photos');

    const sectionDisplayNames = {
      'photos': 'Photos',
      'video': 'Video',
      'short-film': 'Short Film',
      'travelling-guide': 'Travelling Guide',
      'ideas': 'Ideas',
      'information': 'Information'
    };
    const displaySection = sectionDisplayNames[section] || section;

    const newRecord = {
      id: 'custom-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      type: mediaType,
      title: title || 'Expedition Dispatch #' + (catalog.length + 1),
      category: section,
      section: displaySection,
      tags: tags,
      location: location || 'Field Observation Site, India',
      camera: camera,
      lens: lens,
      exposure: exposure,
      mediaUrl: finalMediaUrl,
      videoUrl: finalVideoUrl,
      fieldNotes: fieldNotes,
      isUserUploaded: true,
      timestamp: Date.now()
    };

    // Add to active catalog
    catalog.unshift(newRecord);
    saveUserItemsToStorage();

    // Re-render
    renderGallery();
    updateFilterCounts();
    closeUploadModal();
    showToast(`✓ "${newRecord.title}" successfully added to ${newRecord.section}!`);

    // Smooth scroll to gallery
    document.getElementById('visuals')?.scrollIntoView({ behavior: 'smooth' });
  }

  function deleteUpload(id) {
    if (!confirm('Are you sure you want to remove this dispatch record?')) return;

    catalog = catalog.filter(item => item.id !== id);
    saveUserItemsToStorage();
    renderGallery();
    updateFilterCounts();
    showToast('Entry removed from your catalog.');
  }

  /* --------------------------------------------------------------------------
     Institutional Live Search
     -------------------------------------------------------------------------- */
  function openSearchModal() {
    searchModal.classList.add('open');
    searchModal.setAttribute('aria-hidden', 'false');
    searchInputField.value = '';
    searchInputField.focus();
    renderSearchResults('');
    document.body.style.overflow = 'hidden';
  }

  function closeSearchModal() {
    searchModal.classList.remove('open');
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderSearchResults(query) {
    const q = query.trim().toLowerCase();
    const results = catalog.filter(item => {
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.camera.toLowerCase().includes(q) ||
        (item.fieldNotes && item.fieldNotes.toLowerCase().includes(q)) ||
        (item.section && item.section.toLowerCase().includes(q)) ||
        item.tags.some(t => t.toLowerCase().includes(q))
      );
    });

    if (results.length === 0) {
      searchResultsBox.innerHTML = `
        <div style="padding: 30px 20px; text-align: center; color: var(--text-muted); font-size: 13px;">
          No matching wildlife records found for "<strong>${escapeHtml(query)}</strong>".
        </div>
      `;
      return;
    }

    searchResultsBox.innerHTML = results.map(item => `
      <div class="search-result-item" data-id="${item.id}">
        <img 
          src="${escapeHtml(item.mediaUrl)}" 
          alt="${escapeHtml(item.title)}" 
          class="search-thumb"
          onerror="this.onerror=null; this.src='assets/images/black_drongo.jpg';"
        />
        <div style="flex: 1; min-width: 0;">
          <div style="font-weight: 700; font-family: var(--font-display); font-size: 0.95rem; color: var(--primary-ocean-blue); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${escapeHtml(item.title)}
          </div>
          <div style="font-size: 11px; color: var(--accent-gold); font-family: var(--font-serif); font-style: italic;">
            ${escapeHtml(item.location)}
          </div>
          <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">
            ${escapeHtml(item.section)} • ${escapeHtml(item.camera)}
          </div>
        </div>
      </div>
    `).join('');

    searchResultsBox.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-id');
        closeSearchModal();
        // Locate in catalog and open lightbox
        const idx = currentlyFilteredItems.findIndex(i => i.id === id);
        if (idx !== -1) {
          openLightbox(idx);
        } else {
          // Switch to all to ensure it's visible
          currentFilter = 'all';
          filterBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === 'all'));
          renderGallery();
          const newIdx = currentlyFilteredItems.findIndex(i => i.id === id);
          if (newIdx !== -1) openLightbox(newIdx);
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     Navigation Drawer (Mobile & Expanded)
     -------------------------------------------------------------------------- */
  function openNavDrawer() {
    navDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeNavDrawer() {
    navDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* --------------------------------------------------------------------------
     Toast Notification Helper
     -------------------------------------------------------------------------- */
  let toastTimer = null;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3600);
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
    // Filter Buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderGallery();
      });
    });

    // Sub Navigation Links - filter smoothly
    document.querySelectorAll('.sub-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetSection = link.getAttribute('data-section');
        if (targetSection) {
          e.preventDefault();
          document.querySelectorAll('.sub-nav-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          currentFilter = targetSection;

          // Sync filter buttons
          filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === currentFilter);
          });

          renderGallery();
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

    typeTogglePhoto?.addEventListener('click', () => setMediaType('photo'));
    typeToggleVideo?.addEventListener('click', () => setMediaType('video'));

    sectionChoicePills.forEach(pill => {
      pill.addEventListener('click', () => {
        const sec = pill.getAttribute('data-section');
        if (sec) setUploadSection(sec);
      });
    });

    // Drag and Drop on dropzone
    if (dropzoneArea) {
      ['dragenter', 'dragover'].forEach(eventName => {
        dropzoneArea.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropzoneArea.classList.add('dragover');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropzoneArea.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropzoneArea.classList.remove('dragover');
        });
      });

      dropzoneArea.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files.length > 0) handleFileSelection(files[0]);
      });
    }

    dropzoneInput?.addEventListener('change', (e) => {
      if (e.target.files.length > 0) handleFileSelection(e.target.files[0]);
    });

    clearPreviewBtn?.addEventListener('click', resetUploadPreview);
    uploadForm?.addEventListener('submit', handleFormSubmit);

    // Lightbox Controls
    closeLightboxBtn?.addEventListener('click', closeLightbox);
    lightboxPrevBtn?.addEventListener('click', showPrevLightbox);
    lightboxNextBtn?.addEventListener('click', showNextLightbox);
    lightboxModal?.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
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

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (lightboxModal?.classList.contains('open')) closeLightbox();
        else if (uploadModal?.classList.contains('open')) closeUploadModal();
        else if (searchModal?.classList.contains('open')) closeSearchModal();
        else if (navDrawer?.classList.contains('open')) closeNavDrawer();
      } else if (lightboxModal?.classList.contains('open')) {
        if (e.key === 'ArrowRight') showNextLightbox();
        if (e.key === 'ArrowLeft') showPrevLightbox();
      }
    });

    // Catalog Export / Reset JSON shortcuts (For Power Users & Archivists)
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

    const resetBtn = document.getElementById('resetCatalogBtn');
    resetBtn?.addEventListener('click', () => {
      if (confirm('Reset catalog to initial Drongo field dispatches? All local uploads will be cleared.')) {
        localStorage.removeItem(STORAGE_KEY);
        catalog = [...INITIAL_CATALOG];
        renderGallery();
        updateFilterCounts();
        showToast('Catalog restored to default institutional collection.');
      }
    });
  }

  // Start Engine on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
