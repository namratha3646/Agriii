/* =========================================================
   AGRIPATH JAVASCRIPT
========================================================= */


/* ================= AGRICULTURE DATA ================= */

const agricultureStages = [

    {
        number: "01",
        title: "🌱 Soil Preparation",
        image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=85",

        description:
            "Build healthy, fertile soil with the right structure, nutrients, moisture and organic matter.",

        activities: [
            "Soil Testing",
            "Composting",
            "pH Management",
            "Decompaction"
        ]
    },


    {
        number: "02",
        title: "🌾 Seed Selection",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=85",

        description:
            "Choose healthy crop varieties suited to the local climate, soil and growing conditions.",

        activities: [
            "Crop Selection",
            "Seed Quality",
            "Seed Treatment",
            "Germination"
        ]
    },


    {
        number: "03",
        title: "🌿 Sowing & Planting",
        image: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1000&q=85",

        description:
            "Place seeds or seedlings at the correct depth, spacing and time for successful establishment.",

        activities: [
            "Sowing",
            "Plant Spacing",
            "Planting Depth",
            "Timing"
        ]
    },


    {
        number: "04",
        title: "💧 Water & Irrigation",
        image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=85",

        description:
            "Provide crops with the right amount of water while avoiding drought stress and waterlogging.",

        activities: [
            "Irrigation",
            "Moisture Monitoring",
            "Water Conservation",
            "Drainage"
        ]
    },


    {
        number: "05",
        title: "🛡️ Crop Growth & Protection",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=85",

        description:
            "Monitor crop development and protect plants from pests, diseases, weeds and nutrient deficiencies.",

        activities: [
            "Pest Monitoring",
            "Disease Detection",
            "Weed Management",
            "Crop Health"
        ]
    },


    {
        number: "06",
        title: "☀️ Maturity & Pre-Harvest",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",

        description:
            "Determine when the crop has reached the right maturity and prepare for harvesting.",

        activities: [
            "Maturity",
            "Yield Estimation",
            "Weather",
            "Equipment"
        ]
    },


    {
    number: "07",
    title: "🧺 Harvest & Post-Harvest",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=85",

    description:
        "Harvest at the correct stage and preserve crop quality through sorting, drying and storage.",

    activities: [
        "Harvest",
        "Sorting",
        "Drying",
        "Storage"
    ]
}

];


/* ================= CREATE STAGE CARDS ================= */

const stagesContainer =
    document.getElementById("stagesContainer");


function renderStages() {

    stagesContainer.innerHTML = "";


    agricultureStages.forEach((stage, index) => {

        const card =
            document.createElement("article");

        card.className =
            "stage-card";


        card.innerHTML = `

            <div class="stage-image">

                <div class="stage-number">
                    ${stage.number}
                </div>

                <img
                    src="${stage.image}"
                    alt="${stage.title}"
                    loading="lazy"
                >

            </div>


            <div class="stage-content">

                <h3>
                    ${stage.title}
                </h3>

                <p>
                    ${stage.description}
                </p>

                <div class="activities">

                    ${stage.activities
                        .map(activity => `
                            <span class="activity">
                                ${activity}
                            </span>
                        `)
                        .join("")
                    }

                </div>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                openStage(index);

            }
        );


        stagesContainer.appendChild(card);

    });

}


/* ================= STAGE CLICK ================= */

function openStage(index) {

    const stage =
        agricultureStages[index];


    console.log(
        "Selected agricultural stage:",
        stage
    );


    /*
        FUTURE KNOWLEDGE BASE CONNECTION

        Example:

        fetch("/api/knowledge/" + stage.number)

        OR

        knowledgeBase.search(stage.title)

        OR

        load data from JSON:

        agricultureData[stage.number]

    */


    alert(
        `${stage.number} — ${stage.title}\n\n` +
        `${stage.description}`
    );
}


/* ================= SCROLL FUNCTIONS ================= */

function scrollToJourney() {

    document
        .getElementById("journey")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function scrollToKnowledge() {

    document
        .getElementById("knowledge")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* ================= PROGRESS INDICATORS ================= */

const progressPoints =
    document.querySelectorAll(".progress-point");


progressPoints.forEach(
    (point, index) => {

        point.addEventListener(
            "click",
            () => {

                const cards =
                    document.querySelectorAll(".stage-card");

                if (cards[index]) {

                    cards[index].scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }
        );

    }
);


/* ================= INITIALIZE ================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderStages();

        console.log(
            "🌱 AgriPath initialized"
        );

    }
);