import React from "react";

function CollapsibleCollectionTypeComponent() {
    const [isOpen, setIsOpen] = React.useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        // find the collection types list by the id ':rk:' and toggle its display
        const collectionTypesList = document.getElementById(":rk:");
        if (collectionTypesList) {
            // find the li elements inside the collectionTypesList
            const liElements = collectionTypesList.getElementsByTagName("li");
            for (let i = 0; i < liElements.length; i++) {
                const li = liElements[i];
                if (isOpen) {
                    li.style.display = "none";
                } else {
                    li.style.display = "block";
                }
            }
        }
    }

    return (
        <div style={{marginBottom: 8}}>
            <button
                onClick={handleToggle}
                style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    padding: "10px 10px",
                    borderRadius: 4,
                    cursor: "pointer",
                }}
            >
                {isOpen ? "Collapse" : "Expand"} Collection Type
            </button>
        </div>
    );
}

export default CollapsibleCollectionTypeComponent;