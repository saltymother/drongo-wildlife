/**
 * DRONGO — Institutional Wildlife & Nature Visual Storytelling
 * Core Application Engine & Curator Upload System
 * Version 1.0.11
 */

(function () {
  'use strict';

  // Storage key for catalog metadata in localStorage
  const STORAGE_KEY = 'drongo_custom_catalog_v4';

  // IndexedDB Configuration for reliable Large Media (Video & Raw Stills)
  const IDB_NAME = 'DrongoMediaStore';
  const IDB_VERSION = 1;
  const IDB_STORE = 'media_blobs';
  let dbInstance = null;

  function initMediaDB() {
    return new Promise((resolve) => {
      if (!window.indexedDB) {
        resolve(null);
        return;
      }
      const request = indexedDB.open(IDB_NAME, IDB_VERSION);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE, { keyPath: 'id' });
        }
      };
      request.onsuccess = (e) => {
        dbInstance = e.target.result;
        resolve(dbInstance);
      };
      request.onerror = () => {
        console.warn('IndexedDB unavailable, continuing with memory cache');
        resolve(null);
      };
    });
  }

  async function persistMediaBlob(id, fileOrBlob) {
    if (!dbInstance) await initMediaDB();
    if (!dbInstance) return false;
    return new Promise((resolve) => {
      try {
        const tx = dbInstance.transaction(IDB_STORE, 'readwrite');
        const store = tx.objectStore(IDB_STORE);
        store.put({ id: id, blob: fileOrBlob, timestamp: Date.now() });
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (err) {
        resolve(false);
      }
    });
  }

  async function retrieveMediaBlob(id) {
    if (!dbInstance) await initMediaDB();
    if (!dbInstance) return null;
    return new Promise((resolve) => {
      try {
        const tx = dbInstance.transaction(IDB_STORE, 'readonly');
        const store = tx.objectStore(IDB_STORE);
        const req = store.get(id);
        req.onsuccess = () => resolve(req.result ? req.result.blob : null);
        req.onerror = () => resolve(null);
      } catch (err) {
        resolve(null);
      }
    });
  }

  // Base catalog containing strictly user-provided media
  const INITIAL_CATALOG = [
    {
      id: 'item-insect-golden-wasp',
      type: 'photo',
      title: 'Golden Paper Wasp (Polistes wattii)',
      category: 'photos',
      photoSubject: 'insect',
      section: 'Photos',
      tags: ['photos', 'insect', 'macro', 'wasp', 'hymenoptera'],
      location: 'Field Observation Site, Bihar',
      camera: 'Macro Wildlife Photography',
      lens: 'Macro Prime Lens',
      exposure: 'Natural Ambient Daylight',
      mediaUrl: 'assets/images/golden_paper_wasp_macro.jpg',
      fieldNotes: 'Close-up macro study of the Indian yellow paper wasp (Polistes wattii) showing triangular optical ocelli, compound eyes, and thoracic structure.',
      knowMoreInfo: 'Scientific Name: Polistes wattii (Indian yellow paper wasp)\nClassification: Hymenoptera • Vespidae\nObserved Traits: Distinct golden-yellow coloration, intricate antenna segments, triangular light-polarizing ocelli between compound eyes.\nEcological Role: Natural predator of caterpillars and garden pests, vital for ecosystem balance.\nCurator Notes: Awaiting detailed field notes from curator. Click "Edit Notes" above to add your observations.',
      isUserUploaded: true
    },
    {
      id: 'item-animal-ginger-cat',
      type: 'photo',
      title: 'Domestic Cat (Felis catus)',
      category: 'photos',
      photoSubject: 'animal',
      section: 'Photos',
      tags: ['photos', 'animal', 'feline', 'cat', 'felis-catus', 'fauna'],
      location: 'Habitat Observation Point',
      camera: 'Wildlife & Animal Portraiture',
      lens: 'Wide Aperture Standard Lens',
      exposure: 'Natural Ambient Daylight',
      mediaUrl: 'assets/images/ginger_white_cat.jpg',
      fieldNotes: 'Candid daylight subject study of a ginger-and-white domestic cat (Felis catus) showing alert posture, facial features, and amber ocular coloration.',
      knowMoreInfo: 'Subject: Domestic Cat (Felis catus)\nColoration: Ginger marmalade and white bicolor coat.\nBehavior: Keen alert posture, forward-facing ears, observant gaze.\nHabitat: Human settlement and rural borders.\nCurator Notes: Awaiting detailed field notes from curator. Click "Edit Notes" above to add your observations.',
      isUserUploaded: true
    },
    {
      id: 'item-flowers-peach-hibiscus',
      type: 'photo',
      title: 'Peach Hibiscus Flower',
      category: 'photos',
      photoSubject: 'flowers',
      section: 'Photos',
      tags: ['photos', 'flowers', 'flora', 'hibiscus', 'botanical'],
      location: 'Garden Observation Point',
      camera: 'Botanical Macro Photography',
      lens: 'Wide Aperture Prime Lens',
      exposure: 'Soft Ambient Morning Light',
      mediaUrl: 'assets/images/peach_hibiscus_flower.jpg',
      fieldNotes: 'Vibrant peach-toned hibiscus flower in full bloom with visible stamen and delicate ruffled petals, captured in natural daylight.',
      knowMoreInfo: 'Botanical Subject: Peach Hibiscus (Hibiscus rosa-sinensis cultivar)\nFamily: Malvaceae\nCharacteristics: Delicate apricot-peach ruffled petals with an elongated central staminal column tipped with golden pollen grains.\nGrowth Habit: Tropical evergreen flowering shrub.\nCurator Notes: Awaiting detailed botanical notes from curator. Click "Edit Notes" above to add your observations.',
      isUserUploaded: true
    },
    {
      id: 'item-animal-fawn-pug',
      type: 'photo',
      title: 'Fawn Pug Dog',
      category: 'photos',
      photoSubject: 'animal',
      section: 'Photos',
      tags: ['photos', 'animal', 'canine', 'dog', 'pug', 'fauna'],
      location: 'Domestic Interior Habitat',
      camera: 'Animal Close-Up Photography',
      lens: 'Standard Portrait Lens',
      exposure: 'Ambient Room Light',
      mediaUrl: 'assets/images/pug_dog_portrait.jpg',
      fieldNotes: 'Expressive close-up portrait of a fawn pug dog lying on its back, capturing facial wrinkles, glossy eyes, and characteristic muzzle.',
      knowMoreInfo: 'Subject: Fawn Pug (Canis lupus familiaris)\nBreed Type: Toy canine breed of ancient lineage.\nDistinctive Features: Brachycephalic facial structure with deep forehead skin wrinkles, curled tail, large expressive dark eyes, and black velvet muzzle mask.\nCurator Notes: Awaiting detailed notes from curator. Click "Edit Notes" above to add your observations.',
      isUserUploaded: true
    },
    {
      id: 'item-flowers-periwinkle',
      type: 'photo',
      title: 'Periwinkle Blossom (Catharanthus roseus)',
      category: 'photos',
      photoSubject: 'flowers',
      section: 'Photos',
      tags: ['photos', 'flowers', 'flora', 'periwinkle', 'botanical'],
      location: 'Flora Field Study',
      camera: 'Monochrome Botanical Study',
      lens: 'Close-Up Prime Lens',
      exposure: 'Diffused Daylight',
      mediaUrl: 'assets/images/periwinkle_flower_art.jpg',
      fieldNotes: 'Fine monochrome study of a five-petaled periwinkle blossom with water droplet on petal, accented with field annotation contour overlays.',
      knowMoreInfo: 'Botanical Subject: Madagascar Periwinkle / Sadabahar (Catharanthus roseus)\nFamily: Apocynaceae\nMorphology: Symmetrical salverform corolla with five spreading lobes, central eye with glistening dewdrop.\nMedicinal Significance: Renowned source of vinca alkaloids (vincristine and vinblastine).\nCurator Notes: Awaiting detailed botanical notes from curator. Click "Edit Notes" above to add your observations.',
      isUserUploaded: true
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
      const isVideo = item.type === 'video';

      let badgeClass = 'badge-photo';
      let categoryLabel = item.section || 'PHOTO';

      if (item.category === 'photos' || item.type === 'photo') {
        const sub = (item.photoSubject || 'birds').toLowerCase();
        badgeClass = `badge-photo badge-subject-${sub}`;
        categoryLabel = `PHOTO • ${sub.toUpperCase()}`;
      } else if (item.category === 'video' || item.type === 'video') {
        const sub = (item.photoSubject || 'general').toLowerCase();
        badgeClass = 'badge-video';
        categoryLabel = `VIDEO • ${sub.toUpperCase()}`;
      } else if (item.category === 'short-film') {
        badgeClass = 'badge-short-film';
        categoryLabel = 'SHORT FILM';
      } else if (item.category === 'travelling-guide') {
        badgeClass = 'badge-guide';
        categoryLabel = 'TRAVELLING GUIDE';
      } else if (item.category === 'ideas') {
        badgeClass = 'badge-ideas';
        categoryLabel = 'IDEAS';
      } else if (item.category === 'information') {
        badgeClass = 'badge-info';
        categoryLabel = 'INFORMATION';
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
            </div>

            <div class="card-actions-row">
              <button class="card-know-more-btn" data-know-more-index="${index}" title="Learn more about ${escapeHtml(item.title)}">
                📖 To Know More &rarr;
              </button>

              ${item.isUserUploaded ? `
                <button class="card-delete-btn" data-delete-id="${item.id}" title="Remove this record">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
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

  function closeLightbox() {
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
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
  function setMediaType(type) {
    if (type === 'video') {
      if (mediaTypeSelect) mediaTypeSelect.value = 'video';
      typeToggleVideo?.classList.add('active');
      typeTogglePhoto?.classList.remove('active');
      if (dropzoneTitleText) dropzoneTitleText.textContent = 'Click to Browse or Drag & Drop Video Footage Here';
      if (dropzoneNoteText) dropzoneNoteText.textContent = 'Supports MP4, MOV, WEBM wildlife reels and clips.';
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
      if (sectionSelect && sectionSelect.value === 'video') {
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

    // Show subject picker for both Photos AND Video
    if (photoSubjectPicker) {
      photoSubjectPicker.style.display = (sec === 'photos' || sec === 'video') ? 'block' : 'none';
      const pickerLabel = document.getElementById('uploadSubjectPickerLabel');
      if (pickerLabel) {
        pickerLabel.textContent = sec === 'video' ? 'Video Subject Column:' : 'Photo Subject Column:';
      }
    }

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

    if (targetSec && targetSec !== 'all') {
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
    pendingVideoBlob = null;
    pendingVideoPoster = null;
    previewContainer.style.display = 'none';
    previewImage.style.display = 'none';
    previewImage.src = '';
    previewVideo.style.display = 'none';
    previewVideo.src = '';
    dropzoneArea.style.display = 'block';
    if (dropzoneFileStatus) {
      dropzoneFileStatus.textContent = '';
      dropzoneFileStatus.style.display = 'none';
    }
  }

  function generateVideoThumbnail(videoUrl) {
    return new Promise((resolve) => {
      const tempVideo = document.createElement('video');
      tempVideo.src = videoUrl;
      tempVideo.muted = true;
      tempVideo.playsInline = true;
      tempVideo.crossOrigin = 'anonymous';

      tempVideo.addEventListener('loadeddata', () => {
        tempVideo.currentTime = Math.min(0.5, (tempVideo.duration || 1) / 2);
      });

      tempVideo.addEventListener('seeked', () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = tempVideo.videoWidth || 640;
          canvas.height = tempVideo.videoHeight || 360;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
          resolve(dataUrl);
        } catch (e) {
          resolve('assets/images/gangetic_dolphin.jpg');
        }
      });

      tempVideo.addEventListener('error', () => {
        resolve('assets/images/gangetic_dolphin.jpg');
      });

      setTimeout(() => resolve('assets/images/gangetic_dolphin.jpg'), 3500);
    });
  }

  function handleFileSelection(file) {
    if (!file) return;

    const isVideoFile = file.type.startsWith('video/');
    const isImageFile = file.type.startsWith('image/');

    if (!isVideoFile && !isImageFile) {
      showToast('⚠️ Please select a valid photo or video file.');
      return;
    }

    const fileSizeMb = (file.size / (1024 * 1024)).toFixed(2);
    const cleanFileName = file.name.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ');
    const autoTitleCandidate = cleanFileName.charAt(0).toUpperCase() + cleanFileName.slice(1);

    const titleInput = document.getElementById('uploadTitle');
    if (titleInput && (!titleInput.value || titleInput.value.trim() === '')) {
      titleInput.value = autoTitleCandidate;
    }
    const locInput = document.getElementById('uploadLocation');
    if (locInput && (!locInput.value || locInput.value.trim() === '')) {
      locInput.value = 'Field Observation Site, India';
    }

    if (isVideoFile) {
      setMediaType('video');
      pendingVideoBlob = file;
      const objectUrl = URL.createObjectURL(file);
      pendingFileDataUrl = objectUrl;

      if (dropzoneFileStatus) {
        dropzoneFileStatus.textContent = `✓ Loaded Video: ${file.name} (${fileSizeMb} MB) — Ready to Publish`;
        dropzoneFileStatus.style.display = 'block';
      }

      dropzoneArea.style.display = 'none';
      previewContainer.style.display = 'block';
      previewVideo.src = objectUrl;
      previewVideo.style.display = 'block';
      previewImage.style.display = 'none';

      // Extract video frame thumbnail for gallery card
      generateVideoThumbnail(objectUrl).then(poster => {
        pendingVideoPoster = poster;
      });

      showToast(`✓ Video footage loaded (${fileSizeMb} MB).`);
    } else {
      setMediaType('photo');
      pendingVideoBlob = null;
      pendingVideoPoster = null;

      if (dropzoneFileStatus) {
        dropzoneFileStatus.textContent = `✓ Loaded Photo: ${file.name} (${fileSizeMb} MB) — Ready to Publish`;
        dropzoneFileStatus.style.display = 'block';
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        // High-performance client-side scaling to ensure rapid load & no QuotaExceededError
        const img = new Image();
        img.onload = function () {
          const maxDim = 1600;
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
          pendingFileDataUrl = canvas.toDataURL('image/jpeg', 0.88);

          dropzoneArea.style.display = 'none';
          previewContainer.style.display = 'block';
          previewImage.src = pendingFileDataUrl;
          previewImage.style.display = 'block';
          previewVideo.style.display = 'none';
          showToast(`✓ Image loaded and optimized (${fileSizeMb} MB).`);
        };
        img.onerror = function () {
          pendingFileDataUrl = e.target.result;
          dropzoneArea.style.display = 'none';
          previewContainer.style.display = 'block';
          previewImage.src = pendingFileDataUrl;
          previewImage.style.display = 'block';
          previewVideo.style.display = 'none';
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleFormSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();

    const titleEl = document.getElementById('uploadTitle');
    const title = titleEl ? titleEl.value.trim() : '';
    const mediaType = mediaTypeSelect ? mediaTypeSelect.value : 'photo';
    const section = (document.getElementById('uploadSection') && document.getElementById('uploadSection').value) || 'photos';
    const locationEl = document.getElementById('uploadLocation');
    const location = locationEl ? locationEl.value.trim() : '';
    const camera = (document.getElementById('uploadCamera') && document.getElementById('uploadCamera').value.trim()) || 'Wildlife Camera Rig';
    const lens = (document.getElementById('uploadLens') && document.getElementById('uploadLens').value.trim()) || 'Telephoto Lens';
    const exposure = (document.getElementById('uploadExposure') && document.getElementById('uploadExposure').value.trim()) || 'Natural Ambient Light';
    const fieldNotes = (document.getElementById('uploadStory') && document.getElementById('uploadStory').value.trim()) || 'Documented during field observation.';
    const knowMoreInput = document.getElementById('uploadKnowMore');
    const knowMoreInfo = knowMoreInput ? knowMoreInput.value.trim() : '';
    const externalUrl = (document.getElementById('uploadUrlInput') && document.getElementById('uploadUrlInput').value.trim()) || '';

    let finalMediaUrl = pendingFileDataUrl || externalUrl;
    let finalVideoUrl = null;

    if (!finalMediaUrl && !pendingVideoBlob) {
      showToast('⚠️ Please select a photo or video from your device or paste a URL.');
      if (dropzoneArea) {
        dropzoneArea.style.borderColor = '#C5A059';
        dropzoneArea.style.boxShadow = '0 0 12px rgba(197, 160, 89, 0.4)';
        setTimeout(() => {
          dropzoneArea.style.borderColor = '';
          dropzoneArea.style.boxShadow = '';
        }, 2200);
      }
      return;
    }

    const uniqueId = 'custom-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);

    if (mediaType === 'video') {
      finalVideoUrl = pendingFileDataUrl;
      finalMediaUrl = pendingVideoPoster || 'assets/images/gangetic_dolphin.jpg';
      if (pendingVideoBlob) {
        await persistMediaBlob(uniqueId, pendingVideoBlob);
      }
    }

    const chosenSubject = (section === 'photos' || section === 'video') && uploadPhotoSubjectInput ? uploadPhotoSubjectInput.value : 'animal';

    const tags = ['user-upload', section];
    if (mediaType === 'video') tags.push('video');
    if (mediaType === 'photo') tags.push('photos');
    if (chosenSubject) tags.push(chosenSubject);

    const sectionDisplayNames = {
      'photos': 'Photos',
      'video': 'Video',
      'short-film': 'Short Film',
      'travelling-guide': 'Travelling Guide',
      'ideas': 'Ideas',
      'information': 'Information'
    };
    const displaySection = sectionDisplayNames[section] || section;

    const displayTitle = title || `Wild Observation (${chosenSubject.charAt(0).toUpperCase() + chosenSubject.slice(1)})`;
    const displayLocation = location || 'Field Observation Site, India';

    const newRecord = {
      id: uniqueId,
      type: mediaType,
      title: displayTitle,
      category: section,
      photoSubject: chosenSubject,
      section: displaySection,
      tags: tags,
      location: displayLocation,
      camera: camera,
      lens: lens,
      exposure: exposure,
      mediaUrl: finalMediaUrl,
      videoUrl: finalVideoUrl,
      fieldNotes: fieldNotes,
      knowMoreInfo: knowMoreInfo || `Subject: ${displayTitle}\nCategory: ${displaySection} • ${(chosenSubject || 'General').toUpperCase()}\nLocation: ${displayLocation}\nCurator Field Notes: ${fieldNotes}`,
      isUserUploaded: true,
      hasBlobInDB: !!pendingVideoBlob,
      timestamp: Date.now()
    };

    // Add record to catalog
    catalog.unshift(newRecord);
    saveUserItemsToStorage();

    // Automatically switch active filters so user immediately sees their upload in the grid
    currentFilter = section;
    if (chosenSubject && (section === 'photos' || section === 'video')) {
      currentPhotoSub = chosenSubject;
    } else {
      currentPhotoSub = 'all';
    }

    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === currentFilter);
    });
    photoSubBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-photo-sub') === currentPhotoSub);
    });

    renderGallery();
    updateFilterCounts();
    closeUploadModal();
    showToast(`✓ "${newRecord.title}" successfully added to ${newRecord.section}!`);

    // Smooth scroll to gallery
    document.getElementById('visuals')?.scrollIntoView({ behavior: 'smooth' });
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

    typeTogglePhoto?.addEventListener('click', () => setMediaType('photo'));
    typeToggleVideo?.addEventListener('click', () => setMediaType('video'));

    sectionChoicePills.forEach(pill => {
      pill.addEventListener('click', () => {
        const sec = pill.getAttribute('data-section');
        if (sec) setUploadSection(sec);
      });
    });

    // Drag and Drop
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

    // Explicit Device File Selection Trigger
    btnBrowseDevice?.addEventListener('click', (e) => {
      e.stopPropagation();
      dropzoneInput?.click();
    });

    dropzoneArea?.addEventListener('click', (e) => {
      if (e.target !== dropzoneInput && e.target !== btnBrowseDevice && !btnBrowseDevice?.contains(e.target)) {
        dropzoneInput?.click();
      }
    });

    dropzoneInput?.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) handleFileSelection(e.target.files[0]);
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
  }

  // Start Engine on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
