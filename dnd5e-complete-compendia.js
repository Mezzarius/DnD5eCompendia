// Class for general global variables.
const MODULE_ID = 'dnd5e-complete-compendia';
const LOG_PREFIX = 'DnD5e Complete Compendia';

function registerSettings() {
    console.info(`${LOG_PREFIX} | Building module settings`);

    showRollsAsChatMessages();
}

function showRollsAsChatMessages() {
    game.settings.register(MODULE_ID, "testSetting", {
        name: game.i18n.localize('HCT.Setting.TestSetting.Name'),
        hint: game.i18n.localize('HCT.Setting.TestSetting.Hint'),
        scope: 'world',
        config: true,
        type: Boolean,
        default: true,
    });
}

// Initialize module
Hooks.once('init', async () => {
    registerSettings();
});