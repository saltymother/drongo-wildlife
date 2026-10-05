/**
 * DRONGO — Institutional Wildlife & Nature Visual Storytelling
 * Core Application Engine & Curator Upload System
 */

(function () {
  'use strict';

  // Key for localStorage persistence of user uploads
  const STORAGE_KEY = 'drongo_custom_catalog_v2';

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
      // Clear out legacy mock cache if present
      localStorage.removeItem('drongo_custom_catalog_v1');
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const userItems = JSON.parse(stored);
        const customUploads = Array.isArray(userItems) ? userItems.filter(item => item.isUserUploaded && item.id !== 'item-insect-golden-wasp') : [];
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

    // Apply Filter with Photo Sub-category support
    currentlyFilteredItems = catalog.filter(item => {
      if (currentFilter === 'photos') {
        const isPhoto = item.category === 'photos' || item.type === 'photo';
        if (!isPhoto) return false;
        if (currentPhotoSub !== 'all') {
          return item.photoSubject === currentPhotoSub || item.tags?.includes(currentPhotoSub);
        }
        return true;
      }

      if (currentFilter === 'all') return true;
      if (currentFilter === 'video') return item.category === 'video' || (item.type === 'video' && item.category !== 'short-film');
      if (currentFilter === 'short-film') return item.category === 'short-film' || item.section === 'Short Film' || item.section === 'SHORT FILMS';
      if (currentFilter === 'travelling-guide') return item.category === 'travelling-guide' || item.section === 'Travelling Guide';
      if (currentFilter === 'ideas') return item.category === 'ideas' || item.section === 'Ideas';
      if (currentFilter === 'information') return item.category === 'information' || item.section === 'Information';
      return item.category === currentFilter;
    });

    // Update Photo Sub-Filter Bar display visibility
    if (photoSubFilterRow) {
      photoSubFilterRow.style.display = (currentFilter === 'photos' || currentFilter === 'all') ? 'flex' : 'none';
    }

    if (currentlyFilteredItems.length === 0) {
      const sectionName = currentFilter === 'photos' && currentPhotoSub !== 'all' 
        ? `Photos • ${currentPhotoSub.charAt(0).toUpperCase() + currentPhotoSub.slice(1)}` 
        : currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);

      mediaGridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 4px; border: 1px dashed rgba(10, 43, 71, 0.15);">
          <div style="font-size: 34px; margin-bottom: 10px;">📷</div>
          <h3 style="font-family: var(--font-display); color: var(--primary-ocean-blue); margin-bottom: 8px;">No Pictures in ${escapeHtml(sectionName)} Yet</h3>
          <p style="color: var(--text-muted); font-size: 13px; margin-bottom: 20px; max-width: 460px; margin-left: auto; margin-right: auto;">
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
      } else if (item.category === 'video' || (item.type === 'video' && item.category !== 'short-film')) {
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

    // Update Photo Sub-Category counts
    photoSubBtns.forEach(btn => {
      const sub = btn.getAttribute('data-photo-sub');
      const countEl = btn.querySelector('.sub-count');
      if (!countEl) return;

      const photos = catalog.filter(i => i.category === 'photos' || i.type === 'photo');
      let count = 0;
      if (sub === 'all') {
        count = photos.length;
      } else {
        count = photos.filter(i => i.photoSubject === sub || i.tags?.includes(sub)).length;
      }
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

    // Toggle photo subject picker visibility
    if (photoSubjectPicker) {
      photoSubjectPicker.style.display = (sec === 'photos') ? 'block' : 'none';
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

    const chosenSubject = (section === 'photos' && uploadPhotoSubjectInput) ? uploadPhotoSubjectInput.value : null;
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

    const newRecord = {
      id: 'custom-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      type: mediaType,
      title: title || 'Expedition Dispatch #' + (catalog.length + 1),
      category: section,
      photoSubject: chosenSubject,
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
        if (currentFilter !== 'photos') {
          currentPhotoSub = 'all';
          photoSubBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-photo-sub') === 'all'));
        }
        renderGallery();
      });
    });

    // Photo Sub-Filter Buttons (Insect, Flowers, Animal, Birds, Other)
    photoSubBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        photoSubBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        currentPhotoSub = btn.getAttribute('data-photo-sub');

        // Automatically activate main Photos tab
        currentFilter = 'photos';
        filterBtns.forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-filter') === 'photos');
        });

        renderGallery();
      });
    });

    // Subject Pills in Upload Modal
    subjectPills.forEach(pill => {
      pill.addEventListener('click', () => {
        subjectPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        if (uploadPhotoSubjectInput) {
          uploadPhotoSubjectInput.value = pill.getAttribute('data-subject');
        }
      });
    });

    // Mobile Drawer Photo Sub-links
    document.querySelectorAll('.drawer-sub-photo-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSub = link.getAttribute('data-photo-sub');
        if (targetSub) {
          currentFilter = 'photos';
          currentPhotoSub = targetSub;

          filterBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === 'photos'));
          photoSubBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-photo-sub') === targetSub));

          renderGallery();
          closeNavDrawer();
          document.getElementById('visuals')?.scrollIntoView({ behavior: 'smooth' });
        }
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
