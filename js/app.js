/**
 * DRONGO — Institutional Wildlife & Nature Visual Storytelling
 * Core Application Engine & Curator Upload System
 * Version 1.0.11
 */

(function () {
  'use strict';

  // Storage key for catalog metadata in localStorage
  const STORAGE_KEY = 'drongo_custom_catalog_v5';

  // Base catalog containing strictly External Hub records (No heavy server media)
  const INITIAL_CATALOG = [
    {
      id: 'item-insect-golden-wasp',
      type: 'photo',
      title: 'Golden Paper Wasp',
      scientificName: 'Polistes wattii',
      category: 'photos',
      photoSubject: 'insect',
      section: 'Photos',
      tags: ['photos', 'insect', 'macro', 'wasp'],
      location: 'Field Observation Site, Bihar',
      mediaUrl: 'assets/images/golden_paper_wasp_macro.jpg',
      thumbIcon: 'assets/images/golden_paper_wasp_macro.jpg',
      description: 'Close-up macro study of the Indian yellow paper wasp (Polistes wattii) showing triangular optical ocelli, compound eyes, and thoracic structure in natural daylight.',
      instagramUrl: 'https://www.instagram.com/explore/tags/polisteswattii/',
      isUserUploaded: false
    },
    {
      id: 'item-animal-ginger-cat',
      type: 'photo',
      title: 'Domestic Cat',
      scientificName: 'Felis catus',
      category: 'photos',
      photoSubject: 'animal',
      section: 'Photos',
      tags: ['photos', 'animal', 'cat'],
      location: 'Habitat Observation Point',
      mediaUrl: 'assets/images/ginger_white_cat.jpg',
      thumbIcon: 'assets/images/ginger_white_cat.jpg',
      description: 'Candid daylight subject study of a ginger-and-white domestic cat showing alert posture, facial features, and warm amber ocular coloration.',
      instagramUrl: 'https://www.instagram.com/explore/tags/feliscatus/',
      isUserUploaded: false
    },
    {
      id: 'item-flowers-peach-hibiscus',
      type: 'photo',
      title: 'Peach Hibiscus Flower',
      scientificName: 'Hibiscus rosa-sinensis',
      category: 'photos',
      photoSubject: 'flowers',
      section: 'Photos',
      tags: ['photos', 'flowers', 'flora'],
      location: 'Garden Observation Point',
      mediaUrl: 'assets/images/peach_hibiscus_flower.jpg',
      thumbIcon: 'assets/images/peach_hibiscus_flower.jpg',
      description: 'Vibrant peach-toned hibiscus flower in full bloom with visible stamen and delicate ruffled petals, captured in soft ambient morning daylight.',
      instagramUrl: 'https://www.instagram.com/explore/tags/hibiscus/',
      isUserUploaded: false
    },
    {
      id: 'item-animal-fawn-pug',
      type: 'photo',
      title: 'Fawn Pug Dog',
      scientificName: 'Canis lupus familiaris',
      category: 'photos',
      photoSubject: 'animal',
      section: 'Photos',
      tags: ['photos', 'animal', 'dog'],
      location: 'Domestic Interior Habitat',
      mediaUrl: 'assets/images/pug_dog_portrait.jpg',
      thumbIcon: 'assets/images/pug_dog_portrait.jpg',
      description: 'Expressive close-up portrait of a fawn pug dog lying on its back, capturing facial skin wrinkles, glossy dark eyes, and velvet black muzzle.',
      instagramUrl: 'https://www.instagram.com/explore/tags/pug/',
      isUserUploaded: false
    },
    {
      id: 'item-flowers-periwinkle',
      type: 'photo',
      title: 'Madagascar Periwinkle Blossom',
      scientificName: 'Catharanthus roseus',
      category: 'photos',
      photoSubject: 'flowers',
      section: 'Photos',
      tags: ['photos', 'flowers', 'flora'],
      location: 'Flora Field Study',
      mediaUrl: 'assets/images/periwinkle_flower_art.jpg',
      thumbIcon: 'assets/images/periwinkle_flower_art.jpg',
      description: 'Fine botanical monochrome study of a five-petaled periwinkle blossom with water droplet on petal, accented with field annotation contour overlays.',
      instagramUrl: 'https://www.instagram.com/explore/tags/catharanthusroseus/',
      isUserUploaded: false
    },
    {
      id: 'item-video-drongo-flight',
      type: 'video',
      title: 'The Black Drongo in Aerial Combat',
      scientificName: 'Dicrurus macrocercus',
      category: 'video',
      photoSubject: 'birds',
      section: 'Videos & Short Films',
      tags: ['video', 'birds', 'drongo', 'short-film'],
      location: 'Open Savannah Corridors, India',
      mediaUrl: 'assets/images/black_drongo.jpg',
      thumbIcon: 'assets/images/black_drongo.jpg',
      iconSymbol: '🦅',
      description: 'High-speed behavioral study tracking aerial acrobatics, fork-tailed maneuvers, and fearless raptor mobbing tactics across open scrublands.',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      instagramUrl: 'https://www.instagram.com/reels/',
      isUserUploaded: false
    },
    {
      id: 'item-video-dolphin-breach',
      type: 'video',
      title: 'Ganges River Dolphin Echolocation Breaching',
      scientificName: 'Platanista gangetica',
      category: 'video',
      photoSubject: 'animal',
      section: 'Videos & Short Films',
      tags: ['video', 'animal', 'dolphin'],
      location: 'Vikramshila Dolphin Sanctuary, Bihar',
      mediaUrl: 'assets/images/gangetic_dolphin.jpg',
      thumbIcon: 'assets/images/gangetic_dolphin.jpg',
      iconSymbol: '🌿',
      description: 'Documentary footage capturing ultrasonic echolocating freshwater dolphins surfacing across turbulent Ganges river currents in early morning light.',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      instagramUrl: 'https://www.instagram.com/reels/',
      isUserUploaded: false
    },
    {
      id: 'item-info-tiger-thermo',
      type: 'information',
      title: 'Thermoregulation & Camouflage in Royal Bengal Tigers',
      scientificName: 'Panthera tigris tigris',
      category: 'information',
      infoCategory: 'Animal',
      section: 'Information',
      tags: ['information', 'animal'],
      author: 'Drongo Naturalist Desk',
      date: 'Field Dossier',
      infoText: 'The vertical stripe pattern of Panthera tigris functions as disruptive camouflage in tall elephant grass and dense sal canopies, breaking up the tiger’s bodily outline against dappled sunlight.\n\nEach individual possesses a unique stripe fingerprint that remains unchanged through life. During intense Terai summer heatwaves exceeding 42°C, tigers lack efficient sweat glands and rely heavily on wallowing in deep river channels and secluded pools to dissipate excess heat.',
      isUserUploaded: false
    },
    {
      id: 'item-info-bodhi-ecology',
      type: 'information',
      title: 'Ecological Adaptations of the Sacred Bodhi Tree',
      scientificName: 'Ficus religiosa',
      category: 'information',
      infoCategory: 'Plant',
      section: 'Information',
      tags: ['information', 'plant'],
      author: 'Botanical Field Division',
      date: 'Field Dossier',
      infoText: 'Ficus religiosa displays remarkable adaptations for monsoon floodplains. Its distinct heart-shaped leaves feature an extended drip tip (acuminate apex) that accelerates the runoff of rainwater, keeping the foliage dry and drastically reducing parasitic fungal growth.\n\nEcologically, it serves as a keystone species in northern Indian river basins, sustaining hundreds of frugivorous birds, bats, and pollinators that feed on its syconia figs throughout the year.',
      isUserUploaded: false
    },
    {
      id: 'item-info-wasp-vision',
      type: 'information',
      title: 'Optical Ocelli & Polarized Vision in Paper Wasps',
      scientificName: 'Polistes wattii',
      category: 'information',
      infoCategory: 'Insect',
      section: 'Information',
      tags: ['information', 'insect'],
      author: 'Micro-Entomology Lab',
      date: 'Field Dossier',
      infoText: 'The Indian yellow paper wasp navigates through a dual optical system consisting of compound eyes and three dorsal ocelli situated on the vertex of the head in a triangle.\n\nThese ocelli detect polarized skylight and ultra-violet wavelengths, allowing the wasp to orient itself and calculate compass directions even when the sun is obstructed by thick monsoon cloud covers.',
      isUserUploaded: false
    }
  ];

  // Application State
  let catalog = [];
  let currentFilter = 'all';
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
  async function init() {
    await initMediaDB();
    await loadCatalogFromStorage();
    renderGallery();
    updateFilterCounts();
    bindEventListeners();
  }

  async function loadCatalogFromStorage() {
    try {
      localStorage.removeItem('drongo_custom_catalog_v1');
      localStorage.removeItem('drongo_custom_catalog_v2');
      localStorage.removeItem('drongo_custom_catalog_v3');
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const userItems = JSON.parse(stored);
        const baseIds = new Set(INITIAL_CATALOG.map(item => item.id));
        const customUploads = Array.isArray(userItems) ? userItems.filter(item => item.isUserUploaded && !baseIds.has(item.id)) : [];
        
        // Rehydrate videos from IndexedDB if needed
        for (const item of customUploads) {
          if (item.hasBlobInDB && !item.videoUrl) {
            const blob = await retrieveMediaBlob(item.id);
            if (blob) {
              item.videoUrl = URL.createObjectURL(blob);
            }
          }
        }
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
      // Clean clone without giant video base64 to prevent QuotaExceededError
      const safeItemsToStore = catalog
        .filter(item => item.isUserUploaded)
        .map(item => {
          const clone = Object.assign({}, item);
          if (clone.videoUrl && clone.videoUrl.startsWith('blob:')) {
            clone.videoUrl = ''; // will be rehydrated from IndexedDB
          }
          return clone;
        });
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

    currentlyFilteredItems = catalog.filter(item => {
      // Sub-category filter for photos and video
      if (currentPhotoSub !== 'all') {
        const matchesSub = item.photoSubject === currentPhotoSub || item.tags?.includes(currentPhotoSub);
        if (!matchesSub) return false;
      }

      if (currentFilter === 'all') return true;
      if (currentFilter === 'photos') return item.category === 'photos' || item.type === 'photo';
      if (currentFilter === 'video') return item.category === 'video' || item.type === 'video';
      if (currentFilter === 'short-film') return item.category === 'short-film' || item.section === 'Short Film';
      if (currentFilter === 'travelling-guide') return item.category === 'travelling-guide' || item.section === 'Travelling Guide';
      if (currentFilter === 'ideas') return item.category === 'ideas' || item.section === 'Ideas';
      if (currentFilter === 'information') return item.category === 'information' || item.section === 'Information';
      return item.category === currentFilter;
    });

    // Sub-Filter Bar visibility & label
    if (photoSubFilterRow) {
      const showSubRow = (currentFilter === 'photos' || currentFilter === 'video' || currentFilter === 'all');
      photoSubFilterRow.style.display = showSubRow ? 'flex' : 'none';

      if (subjectFilterLabel) {
        if (currentFilter === 'video') subjectFilterLabel.textContent = 'Video Columns:';
        else if (currentFilter === 'photos') subjectFilterLabel.textContent = 'Photo Columns:';
        else subjectFilterLabel.textContent = 'Subject Columns:';
      }
      if (allSubLabelText) {
        if (currentFilter === 'video') allSubLabelText.textContent = 'All Videos';
        else if (currentFilter === 'photos') allSubLabelText.textContent = 'All Photos';
        else allSubLabelText.textContent = 'All Visuals';
      }
    }

    if (currentlyFilteredItems.length === 0) {
      const sectionName = (currentFilter === 'photos' || currentFilter === 'video') && currentPhotoSub !== 'all'
        ? `${currentFilter.toUpperCase()} • ${currentPhotoSub.charAt(0).toUpperCase() + currentPhotoSub.slice(1)}`
        : currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);

      mediaGridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 4px; border: 1px dashed rgba(10, 43, 71, 0.15);">
          <div style="font-size: 34px; margin-bottom: 10px;">🌿</div>
          <h3 style="font-family: var(--font-display); color: var(--primary-ocean-blue); margin-bottom: 8px;">No Media in ${escapeHtml(sectionName)} Yet</h3>
          <p style="color: var(--text-muted); font-size: 13px; margin-bottom: 20px; max-width: 480px; margin-left: auto; margin-right: auto;">
            This section is waiting for your curated uploads. Use the upload tool to publish your pictures or video footage here.
          </p>
          <button class="header-action-btn btn-gold trigger-upload-modal" data-upload-section="${escapeHtml(currentFilter)}" style="margin: 0 auto;">
            + Upload to ${escapeHtml(sectionName)}
          </button>
        </div>
      `;
      mediaGridEl.querySelector('.trigger-upload-modal')?.addEventListener('click', openUploadModal);
      return;
    }

    mediaGridEl.innerHTML = currentlyFilteredItems.map((item, index) => {
      // 1. Photos Tab Card: Left tiny thumbnail icon, Right Name + Scientific + 2-3 line desc, Bottom IG button
      if (item.category === 'photos' || item.type === 'photo') {
        const thumbSrc = item.thumbIcon || item.mediaUrl || 'assets/images/black_drongo.jpg';
        const igLink = item.instagramUrl || 'https://www.instagram.com/explore/tags/wildlifeindia/';
        return `
          <article class="hub-photo-card" data-index="${index}" data-id="${item.id}">
            <div class="hub-photo-top-row">
              <img 
                src="${escapeHtml(thumbSrc)}" 
                alt="${escapeHtml(item.title)}" 
                class="hub-thumb-icon"
                loading="lazy"
                onerror="this.onerror=null; this.src='assets/images/black_drongo.jpg';"
              />
              <div class="hub-photo-info">
                <h3 class="hub-photo-name">${escapeHtml(item.title)}</h3>
                <span class="hub-scientific-name">${escapeHtml(item.scientificName || item.title)}</span>
                <p class="hub-desc-text">${escapeHtml(item.description || item.fieldNotes || '')}</p>
              </div>
            </div>
            <div class="hub-photo-bottom-row">
              <a href="${escapeHtml(igLink)}" target="_blank" rel="noopener noreferrer" class="btn-hub-link btn-hub-ig" title="View high-res photo on Instagram">
                📸 View High-Res on Instagram ↗
              </a>
              ${item.isUserUploaded ? `
                <button type="button" class="card-delete-btn" data-delete-id="${item.id}" title="Remove this record" style="background: none; border: none; color: #ff6b6b; cursor: pointer; font-size: 11px;">
                  ✕ Delete
                </button>
              ` : ''}
            </div>
          </article>
        `;
      }

      // 2. Videos & Short Films Tab Card: Left tiny icon, Right Name + Scientific + brief info, Bottom YT & IG buttons
      if (item.category === 'video' || item.type === 'video' || item.category === 'short-film') {
        const iconSymbol = item.iconSymbol || '🌿';
        const ytLink = item.youtubeUrl || 'https://www.youtube.com/';
        const igLink = item.instagramUrl || 'https://www.instagram.com/reels/';
        return `
          <article class="hub-video-card" data-index="${index}" data-id="${item.id}">
            <div class="hub-video-top-row">
              <div class="hub-video-icon" title="${escapeHtml(item.title)}">
                <span>${iconSymbol}</span>
              </div>
              <div class="hub-video-info">
                <h3 class="hub-video-name">${escapeHtml(item.title)}</h3>
                <span class="hub-scientific-name">${escapeHtml(item.scientificName || '')}</span>
                <p class="hub-desc-text">${escapeHtml(item.description || item.fieldNotes || '')}</p>
              </div>
            </div>
            <div class="hub-video-bottom-buttons">
              <a href="${escapeHtml(ytLink)}" target="_blank" rel="noopener noreferrer" class="btn-hub-link btn-hub-yt" title="Watch full video on YouTube">
                ▶ Watch Video on YouTube ↗
              </a>
              <a href="${escapeHtml(igLink)}" target="_blank" rel="noopener noreferrer" class="btn-hub-link btn-hub-ig" title="Watch short reel on Instagram">
                🎬 Watch Short on Instagram ↗
              </a>
              ${item.isUserUploaded ? `
                <button type="button" class="card-delete-btn" data-delete-id="${item.id}" title="Remove this record" style="background: none; border: none; color: #ff6b6b; cursor: pointer; font-size: 11px; margin-left: auto;">
                  ✕ Delete
                </button>
              ` : ''}
            </div>
          </article>
        `;
      }

      // 3. Information Tab Card: Strictly text-based! No images or icons allowed.
      if (item.category === 'information' || item.type === 'information') {
        const catBadge = (item.infoCategory || 'GENERAL').toUpperCase();
        return `
          <article class="hub-info-card" data-index="${index}" data-id="${item.id}">
            <span class="hub-info-category-badge">[${escapeHtml(catBadge)}]</span>
            <h3 class="hub-info-title">${escapeHtml(item.title)}</h3>
            <div class="hub-info-body">${escapeHtml(item.infoText || item.fieldNotes || '')}</div>
            <div class="hub-info-footer">
              <span>Field Dossier • ${escapeHtml(item.author || 'Drongo Research Desk')}</span>
              <span>${escapeHtml(item.date || 'Verified Archive')}</span>
              ${item.isUserUploaded ? `
                <button type="button" class="card-delete-btn" data-delete-id="${item.id}" title="Remove this record" style="background: none; border: none; color: #ff6b6b; cursor: pointer; font-size: 11px;">
                  ✕ Delete
                </button>
              ` : ''}
            </div>
          </article>
        `;
      }

      // 4. Travelling Guide Tab Card (Leave as is for now)
      return `
        <article class="hub-photo-card" data-index="${index}" data-id="${item.id}">
          <div class="hub-photo-top-row">
            <div class="hub-thumb-icon">🧭</div>
            <div class="hub-photo-info">
              <h3 class="hub-photo-name">${escapeHtml(item.title)}</h3>
              <span class="hub-scientific-name">${escapeHtml(item.location || 'India Trails')}</span>
              <p class="hub-desc-text">${escapeHtml(item.fieldNotes || item.description || '')}</p>
            </div>
          </div>
          <div class="hub-photo-bottom-row">
            <span style="font-size: 11px; color: var(--accent-gold); font-weight: 700;">TRAVELLING GUIDE</span>
            ${item.isUserUploaded ? `
              <button type="button" class="card-delete-btn" data-delete-id="${item.id}" title="Remove this record" style="background: none; border: none; color: #ff6b6b; cursor: pointer; font-size: 11px;">
                ✕ Delete
              </button>
            ` : ''}
          </div>
        </article>
      `;
    }).join('');

    // Attach card click handlers for Lightbox
    mediaGridEl.querySelectorAll('.media-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-delete-btn')) return;
        if (e.target.closest('.card-know-more-btn')) {
          const index = parseInt(card.getAttribute('data-index'), 10);
          openLightbox(index, true); // Opens directly with To Know More expanded
          return;
        }
        const index = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(index, false);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const index = parseInt(card.getAttribute('data-index'), 10);
          openLightbox(index, false);
        }
      });
    });

    // Attach card click handlers for hub-photo-card to enlarge photo in lightbox
    mediaGridEl.querySelectorAll('.hub-photo-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-delete-btn') || e.target.closest('.btn-hub-link')) return;
        const index = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(index, false);
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
      if (filter === 'all') count = catalog.length;
      else if (filter === 'photos') count = catalog.filter(i => i.category === 'photos' || i.type === 'photo').length;
      else if (filter === 'video') count = catalog.filter(i => i.category === 'video' || i.type === 'video').length;
      else if (filter === 'short-film') count = catalog.filter(i => i.category === 'short-film' || i.section === 'Short Film').length;
      else if (filter === 'travelling-guide') count = catalog.filter(i => i.category === 'travelling-guide' || i.section === 'Travelling Guide').length;
      else if (filter === 'ideas') count = catalog.filter(i => i.category === 'ideas' || i.section === 'Ideas').length;
      else if (filter === 'information') count = catalog.filter(i => i.category === 'information' || i.section === 'Information').length;
      else count = catalog.filter(i => i.category === filter).length;

      countEl.textContent = count;
    });

    // Update Sub-Category counts dynamically for photos or video
    photoSubBtns.forEach(btn => {
      const sub = btn.getAttribute('data-photo-sub');
      const countEl = btn.querySelector('.sub-count');
      if (!countEl) return;

      let targetSet = catalog;
      if (currentFilter === 'video') {
        targetSet = catalog.filter(i => i.category === 'video' || i.type === 'video');
      } else if (currentFilter === 'photos') {
        targetSet = catalog.filter(i => i.category === 'photos' || i.type === 'photo');
      }

      let count = 0;
      if (sub === 'all') {
        count = targetSet.length;
      } else {
        count = targetSet.filter(i => i.photoSubject === sub || i.tags?.includes(sub)).length;
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
     Curator Studio: External Hub Dispatch Engine (No File Uploads)
     -------------------------------------------------------------------------- */
  function setUploadSection(sec) {
    if (sectionSelect) sectionSelect.value = sec;

    const tabPhotos = document.getElementById('hubTabBtnPhotos');
    const tabVideo = document.getElementById('hubTabBtnVideo');
    const tabInfo = document.getElementById('hubTabBtnInfo');

    const panePhotos = document.getElementById('hubPanePhotos');
    const paneVideo = document.getElementById('hubPaneVideo');
    const paneInfo = document.getElementById('hubPaneInfo');

    if (tabPhotos) tabPhotos.classList.toggle('active', sec === 'photos');
    if (tabVideo) tabVideo.classList.toggle('active', sec === 'video');
    if (tabInfo) tabInfo.classList.toggle('active', sec === 'information');

    if (panePhotos) panePhotos.style.display = (sec === 'photos') ? 'block' : 'none';
    if (paneVideo) paneVideo.style.display = (sec === 'video') ? 'block' : 'none';
    if (paneInfo) paneInfo.style.display = (sec === 'information') ? 'block' : 'none';

    if (submitBtnText) {
      if (sec === 'photos') submitBtnText.textContent = 'PUBLISH TO PHOTOS ARCHIVE';
      else if (sec === 'video') submitBtnText.textContent = 'PUBLISH TO VIDEOS & FILMS';
      else if (sec === 'information') submitBtnText.textContent = 'PUBLISH RESEARCH DOSSIER';
      else submitBtnText.textContent = 'PUBLISH TO DRONGO HUB';
    }
  }

  function openUploadModal(e) {
    uploadModal.classList.add('open');
    uploadModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const modalBodyEl = uploadModal.querySelector('.modal-body');
    if (modalBodyEl) modalBodyEl.scrollTop = 0;

    const targetSec = e?.currentTarget?.getAttribute('data-upload-section');
    if (targetSec === 'video' || currentFilter === 'video') {
      setUploadSection('video');
    } else if (targetSec === 'information' || currentFilter === 'information') {
      setUploadSection('information');
    } else {
      setUploadSection('photos');
    }
  }

  function handlePhotoFileSelection(file) {
    if (!file) return;
    if (!file.type || !file.type.startsWith('image/')) {
      showToast('⚠️ Please select a valid image file (JPG, PNG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onerror = function() {
      showToast('⚠️ Could not read image file. Please try another.');
    };
    reader.onload = function(e) {
      const img = new Image();
      img.onerror = function() {
        showToast('⚠️ Invalid image file format.');
      };
      img.onload = function() {
        // Auto-scale to max 1200px and compress to JPEG 0.85 to maintain crisp quality while keeping size ~50-80KB
        const maxDim = 1200;
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.85);

        pendingPhotoDataUrl = compressedDataUrl;
        if (photoPreviewImg) photoPreviewImg.src = compressedDataUrl;
        if (photoPreviewFilename) {
          const approxKb = Math.round((compressedDataUrl.length * 0.75) / 1024);
          photoPreviewFilename.textContent = `${file.name} (~${approxKb} KB)`;
        }
        if (photoDropzoneContent) photoDropzoneContent.style.display = 'none';
        if (photoPreviewWrap) photoPreviewWrap.style.display = 'flex';
        showToast(`✓ Photo "${file.name}" ready to publish!`);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function resetPhotoUploadPreview() {
    pendingPhotoDataUrl = null;
    if (hubPhotoFileInput) hubPhotoFileInput.value = '';
    if (photoPreviewImg) photoPreviewImg.src = '';
    if (photoDropzoneContent) photoDropzoneContent.style.display = 'flex';
    if (photoPreviewWrap) photoPreviewWrap.style.display = 'none';
  }

  function closeUploadModal() {
    uploadModal.classList.remove('open');
    uploadModal.setAttribute('aria-hidden', 'true');
    uploadForm.reset();
    resetPhotoUploadPreview();
    document.body.style.overflow = '';
  }

  function handleFormSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const sec = sectionSelect ? sectionSelect.value : 'photos';
    const uniqueId = 'custom-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);

    if (sec === 'photos') {
      const name = (document.getElementById('hubPhotoName')?.value || '').trim();
      const sciName = (document.getElementById('hubPhotoScientific')?.value || '').trim();
      const desc = (document.getElementById('hubPhotoDesc')?.value || '').trim();
      const igUrl = (document.getElementById('hubPhotoIgUrl')?.value || '').trim() || 'https://www.instagram.com/explore/tags/wildlifeindia/';
      const subject = document.getElementById('hubPhotoSubjectSelect')?.value || 'animal';
      const fallbackThumb = document.getElementById('hubPhotoIconSelect')?.value || 'assets/images/black_drongo.jpg';
      const finalPhoto = pendingPhotoDataUrl || fallbackThumb;

      if (!name || !sciName || !desc) {
        showToast('⚠️ Please fill out Subject Name, Scientific Name, and Short Description.');
        return;
      }

      if (!pendingPhotoDataUrl && !fallbackThumb) {
        showToast('⚠️ Please upload or select a photo.');
        return;
      }

      const newRecord = {
        id: uniqueId,
        type: 'photo',
        title: name,
        scientificName: sciName,
        category: 'photos',
        photoSubject: subject,
        section: 'Photos',
        tags: ['user-upload', 'photos', subject],
        location: 'Field Observation Site, India',
        mediaUrl: finalPhoto,
        thumbIcon: finalPhoto,
        description: desc,
        fieldNotes: desc,
        instagramUrl: igUrl,
        knowMoreInfo: `Subject: ${name}\nScientific Name: ${sciName}\nSubject Classification: ${subject.toUpperCase()}\nField Notes: ${desc}\nInstagram: ${igUrl}`,
        isUserUploaded: true,
        timestamp: Date.now()
      };

      catalog.unshift(newRecord);
      saveUserItemsToStorage();

      currentFilter = 'photos';
      currentPhotoSub = subject;
      filterBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-filter') === 'photos'));
      photoSubBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-photo-sub') === subject));
      renderGallery();
      updateFilterCounts();
      closeUploadModal();
      showToast(`✓ "${name}" photo posted successfully to Visuals!`);
      document.getElementById('visuals')?.scrollIntoView({ behavior: 'smooth' });

    } else if (sec === 'video') {
      const name = (document.getElementById('hubVideoName')?.value || '').trim();
      const sciName = (document.getElementById('hubVideoScientific')?.value || '').trim();
      const desc = (document.getElementById('hubVideoDesc')?.value || '').trim();
      const ytUrl = (document.getElementById('hubVideoYtUrl')?.value || '').trim();
      const igUrl = (document.getElementById('hubVideoIgUrl')?.value || '').trim();
      const icon = document.getElementById('hubVideoIconSelect')?.value || '🌿';

      if (!name || !sciName || !desc || !ytUrl) {
        showToast('⚠️ Please provide Name, Scientific Name, Brief Info, and YouTube URL.');
        return;
      }

      const newRecord = {
        id: uniqueId,
        type: 'video',
        title: name,
        scientificName: sciName,
        category: 'video',
        photoSubject: 'other',
        section: 'Videos & Short Films',
        tags: ['user-upload', 'video', 'external-hub'],
        location: 'Cinematography Field Corridor',
        mediaUrl: 'assets/images/gangetic_dolphin.jpg',
        thumbIcon: 'assets/images/gangetic_dolphin.jpg',
        iconSymbol: icon,
        description: desc,
        fieldNotes: desc,
        youtubeUrl: ytUrl,
        instagramUrl: igUrl || 'https://www.instagram.com/reels/',
        knowMoreInfo: `Film Title: ${name}\nScientific Name: ${sciName}\nCinematography Summary: ${desc}\nYouTube Stream: ${ytUrl}\nInstagram Reel: ${igUrl || 'N/A'}`,
        isUserUploaded: true,
        timestamp: Date.now()
      };

      catalog.unshift(newRecord);
      saveUserItemsToStorage();

      currentFilter = 'video';
      filterBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-filter') === 'video'));
      renderGallery();
      updateFilterCounts();
      closeUploadModal();
      showToast(`✓ "${name}" published to Videos & Short Films!`);
      document.getElementById('visuals')?.scrollIntoView({ behavior: 'smooth' });

    } else if (sec === 'information') {
      const cat = document.getElementById('hubInfoCategory')?.value || 'General';
      const title = (document.getElementById('hubInfoTitle')?.value || '').trim() || `${cat} Ecological Monograph`;
      const text = (document.getElementById('hubInfoText')?.value || '').trim();

      if (!text) {
        showToast('⚠️ Please provide the text dossier for this information dispatch.');
        return;
      }

      const newRecord = {
        id: uniqueId,
        type: 'information',
        title: title,
        category: 'information',
        infoCategory: cat,
        section: 'Information',
        tags: ['user-upload', 'information', cat.toLowerCase()],
        location: 'Drongo Research Desk',
        description: text.substring(0, 160) + (text.length > 160 ? '...' : ''),
        fieldNotes: text,
        infoText: text,
        knowMoreInfo: `Dossier: ${title}\nCategory: ${cat}\nInformation:\n${text}`,
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
      showToast(`✓ "${title}" added to Information Dossiers!`);
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

    // Drawer Photo Sub Links
    document.querySelectorAll('.drawer-sub-photo-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const sub = link.getAttribute('data-photo-sub');
        currentFilter = 'photos';
        currentPhotoSub = sub;

        filterBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-filter') === 'photos'));
        photoSubBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-photo-sub') === sub));
        document.querySelectorAll('.sub-nav-link').forEach(l => l.classList.toggle('active', l.getAttribute('data-section') === 'photos'));

        renderGallery();
        updateFilterCounts();
        closeNavDrawer();
        document.getElementById('visuals')?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Drawer Video Sub Links
    document.querySelectorAll('.drawer-sub-video-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const sub = link.getAttribute('data-video-sub');
        currentFilter = 'video';
        currentPhotoSub = sub;

        filterBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-filter') === 'video'));
        photoSubBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-photo-sub') === sub));
        document.querySelectorAll('.sub-nav-link').forEach(l => l.classList.toggle('active', l.getAttribute('data-section') === 'video'));

        renderGallery();
        updateFilterCounts();
        closeNavDrawer();
        document.getElementById('visuals')?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Upload Modal triggers & step toggles
    openUploadModalBtns.forEach(btn => btn.addEventListener('click', openUploadModal));
    closeUploadModalBtn?.addEventListener('click', closeUploadModal);
    cancelUploadBtn?.addEventListener('click', closeUploadModal);
    uploadModal?.addEventListener('click', (e) => {
      if (e.target === uploadModal) closeUploadModal();
    });

    // External Hub Modal Tabs
    document.getElementById('hubTabBtnPhotos')?.addEventListener('click', () => setUploadSection('photos'));
    document.getElementById('hubTabBtnVideo')?.addEventListener('click', () => setUploadSection('video'));
    document.getElementById('hubTabBtnInfo')?.addEventListener('click', () => setUploadSection('information'));

    sectionChoicePills.forEach(pill => {
      pill.addEventListener('click', () => {
        const sec = pill.getAttribute('data-section');
        if (sec) setUploadSection(sec);
      });
    });

    uploadForm?.addEventListener('submit', handleFormSubmit);

    // Dedicated Photo Upload Listeners (Visuals Section & Dispatch Modal)
    btnBrowsePhoto?.addEventListener('click', (e) => {
      e.stopPropagation();
      hubPhotoFileInput?.click();
    });

    photoUploadBox?.addEventListener('click', (e) => {
      if (e.target.closest('#btnRemovePhotoPreview')) return;
      hubPhotoFileInput?.click();
    });

    hubPhotoFileInput?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) handlePhotoFileSelection(file);
    });

    btnRemovePhotoPreview?.addEventListener('click', (e) => {
      e.stopPropagation();
      resetPhotoUploadPreview();
    });

    ['dragenter', 'dragover'].forEach(evtName => {
      photoUploadBox?.addEventListener(evtName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        photoUploadBox.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(evtName => {
      photoUploadBox?.addEventListener(evtName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        photoUploadBox.classList.remove('dragover');
      });
    });

    photoUploadBox?.addEventListener('drop', (e) => {
      const file = e.dataTransfer?.files?.[0];
      if (file) handlePhotoFileSelection(file);
    });

    btnVisualsUploadPhoto?.addEventListener('click', (e) => {
      e.preventDefault();
      openUploadModal(e);
      setUploadSection('photos');
    });

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
      if (sapPath && sapPath.getTotalLength) {
        try {
          pathLength = sapPath.getTotalLength();
          sapPath.style.strokeDasharray = pathLength;
          sapPath.style.strokeDashoffset = pathLength;
        } catch (e) {
          pathLength = 400;
        }
      }

      function updateBranchPosition() {
        const scrollY = window.scrollY || window.pageYOffset;
        const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const percent = Math.min(Math.max(scrollY / maxScroll, 0), 1);
        const percentDisplay = Math.round(percent * 100);

        // Update glowing sap core
        if (sapPath) {
          sapPath.style.strokeDashoffset = pathLength * (1 - percent);
        }

        // Update perched Drongo slider top position (clamped 0% to 100%)
        perchSlider.style.top = `${percent * 100}%`;
        perchSlider.setAttribute('aria-valuenow', percentDisplay);
        if (perchBadge) {
          perchBadge.textContent = `${percentDisplay}%`;
        }

        // Update milestone active status
        const viewportCenter = scrollY + window.innerHeight * 0.35;
        milestoneBtns.forEach((btn) => {
          const targetSelector = btn.getAttribute('data-target');
          if (!targetSelector) return;
          const targetEl = document.querySelector(targetSelector);
          if (targetEl) {
            const top = targetEl.offsetTop;
            const bottom = top + targetEl.offsetHeight;
            if (viewportCenter >= top && viewportCenter <= bottom) {
              btn.classList.add('active');
            } else {
              btn.classList.remove('active');
            }
          }
        });
      }

      // Smooth RAF scroll listener
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateBranchPosition();
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });

      // Window resize re-calculation
      window.addEventListener('resize', updateBranchPosition, { passive: true });

      // Click anywhere on branch stem to scroll
      track.addEventListener('click', (e) => {
        if (e.target.closest('.branch-node-btn') || e.target.closest('.branch-perch-slider')) return;
        const rect = track.getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        const ratio = Math.min(Math.max(clickY / rect.height, 0), 1);
        const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        window.scrollTo({
          top: ratio * maxScroll,
          behavior: 'smooth'
        });
      });

      // Drag perched Drongo slider
      perchSlider.addEventListener('pointerdown', (e) => {
        isDragging = true;
        perchSlider.setPointerCapture(e.pointerId);
        e.preventDefault();
      });

      perchSlider.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        const rect = track.getBoundingClientRect();
        const currentY = e.clientY - rect.top;
        const ratio = Math.min(Math.max(currentY / rect.height, 0), 1);
        const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        window.scrollTo({
          top: ratio * maxScroll,
          behavior: 'auto'
        });
      });

      function stopDrag(e) {
        if (isDragging) {
          isDragging = false;
          try {
            perchSlider.releasePointerCapture(e.pointerId);
          } catch (_) {}
        }
      }

      perchSlider.addEventListener('pointerup', stopDrag);
      perchSlider.addEventListener('pointercancel', stopDrag);

      // Keyboard navigation for accessibility
      perchSlider.addEventListener('keydown', (e) => {
        const step = window.innerHeight * 0.5;
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
      btnTop?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      btnBottom?.addEventListener('click', () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      });

      // Milestone buttons jump
      milestoneBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetSelector = btn.getAttribute('data-target');
          if (!targetSelector) return;
          const targetEl = document.querySelector(targetSelector);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      // Initial layout tick
      updateBranchPosition();
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
      const iframe = document.getElementById('editorialIntroVideoIframe');
      const soundBtn = document.getElementById('btnIntroVideoAudioToggle');
      const soundIcon = document.getElementById('soundToggleIcon');
      const soundText = document.getElementById('soundToggleText');
      if (!iframe) return;

      let player = null;
      let loopCheckInterval = null;
      let isMuted = true;

      function onPlayerReady(event) {
        try {
          event.target.mute();
          event.target.playVideo();
        } catch (e) {}

        // Continuous 15-second loop monitor
        if (loopCheckInterval) clearInterval(loopCheckInterval);
        loopCheckInterval = setInterval(() => {
          try {
            if (player && player.getCurrentTime) {
              const curTime = player.getCurrentTime();
              // When reached 14.7s or more, smoothly rewind to 0 and loop
              if (curTime >= 14.7) {
                player.seekTo(0, true);
                player.playVideo();
              }
            }
          } catch (e) {}
        }, 150);
      }

      function onPlayerStateChange(event) {
        if (!window.YT) return;
        // Loop back to start if video reaches end
        if (event.data === YT.PlayerState.ENDED) {
          try {
            event.target.seekTo(0, true);
            event.target.playVideo();
          } catch (e) {}
        } else if (event.data === YT.PlayerState.PAUSED) {
          // If paused unexpectedly, resume playing
          try {
            event.target.playVideo();
          } catch (e) {}
        }
      }

      function setupYT() {
        if (window.YT && window.YT.Player) {
          try {
            player = new YT.Player('editorialIntroVideoIframe', {
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
          } catch (e) {
            console.warn('YT player init notice:', e);
          }
        }
      }

      // Check if YouTube API is already available or queue it
      if (window.YT && window.YT.Player) {
        setupYT();
      } else {
        const prevYTReady = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
          if (typeof prevYTReady === 'function') prevYTReady();
          setupYT();
        };

        // Inject YouTube IFrame API script tag if not yet present in document
        if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
          const tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          const firstScript = document.getElementsByTagName('script')[0];
          if (firstScript && firstScript.parentNode) {
            firstScript.parentNode.insertBefore(tag, firstScript);
          } else {
            document.head.appendChild(tag);
          }
        }
      }

      // Discreet Audio Toggle Handler (Default is muted for autoplay compliance)
      if (soundBtn) {
        soundBtn.addEventListener('click', () => {
          if (!player) return;
          try {
            if (isMuted) {
              player.unMute();
              player.setVolume(75);
              isMuted = false;
              if (soundIcon) soundIcon.textContent = '🔊';
              if (soundText) soundText.textContent = 'Audio Playing';
              soundBtn.classList.add('audio-active');
            } else {
              player.mute();
              isMuted = true;
              if (soundIcon) soundIcon.textContent = '🔇';
              if (soundText) soundText.textContent = 'Audio Muted';
              soundBtn.classList.remove('audio-active');
            }
          } catch (e) {}
        });
      }

      // Ensure autoplay on first user interaction if browser has strict media restrictions
      const resumeAutoplay = () => {
        if (player && player.getPlayerState && player.getPlayerState() !== 1) {
          try {
            player.playVideo();
          } catch (e) {}
        }
        document.removeEventListener('click', resumeAutoplay);
        document.removeEventListener('scroll', resumeAutoplay);
      };
      document.addEventListener('click', resumeAutoplay, { once: true, passive: true });
      document.addEventListener('scroll', resumeAutoplay, { once: true, passive: true });
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
