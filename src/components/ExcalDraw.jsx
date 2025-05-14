// eslint-disable-next-line import/no-unresolved
import "@excalidraw/excalidraw/index.css"; // Updated import path

import { useNavigate } from "react-router";
import { Excalidraw } from "@excalidraw/excalidraw"; // Import exportToBlob if needed later
import React, { useRef, useState, useEffect, useCallback } from "react"; // Added useEffect, useRef, useCallback

import { Box, Typography, CircularProgress } from "@mui/material";


const loadImageData = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blob = await response.blob();
    const mimeType = blob.type; // Get MIME type from blob

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result;
        const img = new Image();
        img.onload = () => {
          resolve({
            dataURL,
            mimeType,
            width: img.naturalWidth,
            height: img.naturalHeight,
          });
        };
        img.onerror = (error) => {
           console.error("Image load error within promise:", error);
           reject(new Error("Failed to load image dimensions"));
        };
        img.src = dataURL; // Use Data URL to trigger load for dimensions
      };
      reader.onerror = (error) => {
         console.error("FileReader error:", error);
         reject(new Error("Failed to read image blob"));
      };
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Failed to fetch or process image:", error);
    throw error; // Re-throw error to be caught by calling function
  }
};

const prepareInitialData = async (cardId) => {
  console.log(`Preparing data for ${cardId}`);
  const BASE_IMAGE_FILE_ID = "cardBaseImage"; // Constant ID for the background image file

  // --- 1. Determine Image URL (Replace with your actual logic) ---
  // This needs to map cardId to its specific image, e.g., from an object or API
  const cardImageUrl = '/Math.jpg'; // Example: Using the same image for all cards
  console.log(`Using image URL: ${cardImageUrl}`);

  try {
    // --- 2. Load Image Data (Data URL, dimensions) ---
    const imageData = await loadImageData(cardImageUrl);
    console.log(`Image loaded: ${imageData.width}x${imageData.height}`);

    // --- 3. Load existing saved elements/appState (if any) ---
    let savedData = null;
    try {
      const savedJson = localStorage.getItem(`card-drawing-${cardId}`);
      if (savedJson) {
        savedData = JSON.parse(savedJson);
        console.log(`Loaded saved drawing data for ${cardId}`);
      } else {
         console.log(`No saved drawing data found for ${cardId}`);
      }
    } catch (error) {
      console.error(`Failed to load or parse saved drawing for ${cardId}:`, error);
      savedData = { elements: [], appState: {} }; // Fallback on error
    }

    // Ensure savedData has elements and appState arrays/objects
    savedData = {
        elements: savedData?.elements || [],
        appState: savedData?.appState || {},
    };


    // --- 4. Create the locked background image element ---
    const backgroundImageElement = {
      id: `bg_${cardId}`, // Unique ID for the element itself
      type: 'image',
      x: 0, // Position at top-left
      y: 0,
      width: imageData.width,
      height: imageData.height,
      angle: 0,
      strokeColor: 'transparent', // No border
      backgroundColor: 'transparent',
      fillStyle: 'hachure',
      strokeWidth: 1,
      strokeStyle: 'solid',
      roughness: 1,
      opacity: 100,
      groupIds: [],
      strokeSharpness: 'sharp',
      seed: Math.floor(Math.random() * 1000000), // Random seed
      version: 1,
      versionNonce: Math.floor(Math.random() * 1000000000),
      isDeleted: false,
      boundElements: null,
      updated: Date.now(),
      link: null,
      locked: true, // --- LOCK THE IMAGE ---
      fileId: BASE_IMAGE_FILE_ID, // Reference the file data
      scale: [.2, .2], // Default scale
    };

    // --- 5. Combine Background + Saved Elements ---
    // Ensure the background is always the first element (rendered at the bottom)
    // Filter out any previously saved (unlocked) version of the background potentially
    const finalElements = [
      backgroundImageElement,
      ...savedData.elements.filter(el => el.id !== backgroundImageElement.id) // Add saved elements, removing old bg if any
    ];

    // --- 6. Prepare the files object ---
    const files = {
      [BASE_IMAGE_FILE_ID]: {
        mimeType: imageData.mimeType,
        id: BASE_IMAGE_FILE_ID,
        dataURL: imageData.dataURL,
        created: Date.now(),
      },
      // Include other files from savedData if necessary
    };

     // --- 7. Set initial App State (optional: center view on card) ---
     const initialAppState = {
         ...savedData.appState, // Keep saved state if any
         // Center the view roughly on the card initially
         scrollX: -imageData.width / 2 + (window.innerWidth / 2.5), // Adjust window width factor as needed
         scrollY: -imageData.height / 2 + (window.innerHeight / 3), // Adjust window height factor as needed
         currentItemStrokeColor: savedData.appState?.currentItemStrokeColor || '#000000', // Default stroke if none saved
         viewBackgroundColor: savedData.appState?.viewBackgroundColor || '#FFFFFF', // Default background if none saved
         // Ensure necessary defaults are present
     };


    console.log("Initial data prepared successfully.");
    return {
      elements: finalElements,
      appState: initialAppState,
      files,
    };

  } catch (error) {
    console.error("Error preparing initial data:", error);
    // Return default empty state on error (or handle differently)
    return { elements: [], appState: {}, files: {} };
  }
};

const ExcalidrawWrapper = ({cardId}) => {

    // const [initialData, setInitialData] = useState(() => loadDataForCard(cardId));

 const [initialData, setInitialData] = useState(null); // Start with null
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const excalidrawApiRef = useRef(null); // Ref to access Excalidraw API
  const navigate = useNavigate(); // Hook to navigate back

  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates on unmounted component
    setIsLoading(true);
    setError(null);
    setInitialData(null); // Clear previous data immediately

    console.log(`Effect triggered for cardId: ${cardId}`);

    prepareInitialData(cardId)
      .then(data => {
        if (isMounted) {
          setInitialData(data);
          setIsLoading(false);
          console.log("Initial data state updated.");
        }
      })
      .catch(err => {
        if (isMounted) {
          setError("Failed to load card data. Please try again.");
          setIsLoading(false);
          console.error("Caught error in effect:", err);
        }
      });

    return () => {
      isMounted = false; // Cleanup function to set flag
      console.log(`Cleanup effect for cardId: ${cardId}`);
    };
  }, [cardId]); // Re-run when cardId changes

  // --- Save function (only save elements *added by the user*) ---
  const saveData = useCallback((elements, appState) => {
    // Filter out the locked background image element before saving
    const elementsToSave = elements.filter(el => el.id !== `bg_${cardId}`);
    const dataToSave = JSON.stringify({
        elements: elementsToSave,
        // Save relevant appState (like zoom, scroll, colors)
        appState: {
            viewBackgroundColor: appState.viewBackgroundColor,
            scrollX: appState.scrollX,
            scrollY: appState.scrollY,
            zoom: appState.zoom,
            currentItemStrokeColor: appState.currentItemStrokeColor,
            // Add other states you wish to preserve
        }
        // We don't need to save the `files` object if the background is reloaded each time
    });
    try {
        localStorage.setItem(`card-drawing-${cardId}`, dataToSave);
        console.log(`Saved user drawing for ${cardId}`);
    } catch (err) {
        console.error(`Failed to save data for ${cardId}:`, err);
    }
  }, [cardId]); // Recreate if cardId changes

  // --- Debounced save ---
   const debouncedSave = useRef(
    debounce((elements, state) => {
      saveData(elements, state);
    }, 800) // Adjust debounce delay as needed (e.g., 800ms)
  ).current;

  // --- onChange handler ---
  const handleChange = (elements, state) => {
    // Use the debounced save function
    debouncedSave(elements, state);
  };

  //  const handleSaveAndNavigate = () => {
  //   if (excalidrawApiRef.current) {
  //     const { elements, appState } = excalidrawApiRef.current.getSceneElementsIncludingDeleted();
  //     saveData(elements, appState); // Save the current state
  //     navigate('/drawcard'); // Navigate back to the previous page
  //   }
  // };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
        <CircularProgress />
        <Typography sx={{ mt: 2, color: 'white' }}>Loading Card Editor...</Typography>
      </Box>
    );
  }

   if (error) {
    return (
       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (!initialData) {
      // Should ideally not happen if loading/error states are handled correctly
      return <Typography color="error">Failed to initialize editor.</Typography>;
  }

  return (
      <div style={{ height: "100%", width: "100%" }}>
       {/* Use the key prop to force re-initialization on cardId change */}
      <Excalidraw
        key={cardId}
        ref={excalidrawApiRef}
        initialData={initialData} // Pass the fully prepared data
        onChange={handleChange}
        // theme="dark" // Optional: Set theme if desired
      />
      {/* <Button
        variant="contained"
        color="primary"
        onClick={handleSaveAndNavigate}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        Save & Go Back
      </Button> */}
    </div>
  );
};

// Simple debounce function (remains the same)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default ExcalidrawWrapper;