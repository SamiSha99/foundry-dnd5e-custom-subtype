const MODULE_ID = "foundry-dnd5e-custom-subtype";

Hooks.once("init", () => {
    Object.assign(CONFIG.DND5E.featureTypes.class.subtypes, {
        cheapTrick: "Cheap Trick (Corlanth)",
        marshalTechnique: "Martial Technique (Corlanth)",
    });
});

Hooks.on("ready", () => {
    console.log(`${MODULE_ID} | ready`);
});
