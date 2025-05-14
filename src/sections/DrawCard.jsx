import React from "react";
import { useParams } from 'react-router-dom'; // Import useParams
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import { DashboardContent } from "src/layouts/dashboard";

import ExcalidrawWrapper from "src/components/ExcalDraw";

export default function DrawCard() {
  const navigate = useNavigate();

    const handleSaveAndNavigate = () => {
      navigate(-1); // Navigate back to the previous page
    // if (excalidrawApiRef.current) {
    //   const { elements, appState } = excalidrawApiRef.current.getSceneElementsIncludingDeleted();
    //   saveData(elements, appState); // Save the current state
    // }
  };

    const { cardId } = useParams(); // --- Get the cardId from the route parameter ---

    if (!cardId) {
     return <DashboardContent><p>Error: No card ID specified.</p></DashboardContent>;
  }

  return (
    <DashboardContent disablePadding sx={{ height: 'calc(100vh - 400px)', display: 'flex', flexDirection: 'column' }}>
       {/* Optional: Display which card is being edited */}
       {/* <Typography variant="h6" sx={{ p: 2, color: 'white' }}>Editing Card: {cardId}</Typography> */}

       {/* --- Pass cardId to the wrapper --- */}
      <ExcalidrawWrapper cardId={cardId} />

      <Button
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
            </Button>
    </DashboardContent>
  );
}