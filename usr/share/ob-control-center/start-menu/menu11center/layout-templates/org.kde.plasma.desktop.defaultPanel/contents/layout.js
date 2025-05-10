var panel = new Panel
var panelScreen = panel.screen
var freeEdges = {"bottom": true, "top": true, "left": true, "right": true}

for (i = 0; i < panelIds.length; ++i) {
    var tmpPanel = panelById(panelIds[i])
    if (tmpPanel.screen == panelScreen) {
        // Ignore the new panel
        if (tmpPanel.id != panel.id) {
            freeEdges[tmpPanel.location] = false;
        }
    }
}

if (freeEdges["bottom"] == true) {
    panel.location = "bottom";
} else if (freeEdges["top"] == true) {
    panel.location = "top";
} else if (freeEdges["left"] == true) {
    panel.location = "left";
} else if (freeEdges["right"] == true) {
    panel.location = "right";
} else {
    // There is no free edge, so leave the default value
    panel.location = "top";
}
// For an Icons-Only Task Manager on the bottom, *3 is too much, *2 is too little
// Round down to next highest even number since the Panel size widget only displays
// even numbers
panel.height = 2 * Math.floor(gridUnit * 2.6 / 2)
panel.hiding = "none"

// Restrict horizontal panel to a maximum size of a 21:9 monitor
const maximumAspectRatio = 21/9;
if (panel.formFactor === "horizontal") {
    const geo = screenGeometry(panelScreen);
    const maximumWidth = Math.ceil(geo.height * maximumAspectRatio);

    if (geo.width > maximumWidth) {
        panel.alignment = "center";
        panel.minimumLength = maximumWidth;
        panel.maximumLength = maximumWidth;
    }
}

//CC
panel_runcc = panel.addWidget("com.himdek.kde.plasma.runcommand")
panel_runcc.currentConfigGroup = ["General"]
panel_runcc.writeConfig("icon", "ob-cc")
panel_runcc.writeConfig("command", "/usr/bin/ob-control-center")

//Show
panel_changedesktop = panel.addWidget("com.openbosniana.kde.plasma.tasks")

panel.addWidget("org.kde.plasma.panelspacer")
var menu11 = panel.addWidget("menu11")
menu11.currentConfigGroup = ["General"]
menu11.writeConfig("icon", "/usr/share/plasma/Logo.svg")
menu11.writeConfig("reduceIconSizeFooter", "false")
menu11.writeConfig("recentGridModel", "1")
menu11.writeConfig("global", "Alt+F1")
//panel.addWidget("org.kde.plasma.showActivityManager")
let taskBar = panel.addWidget("org.kde.plasma.icontasks")
taskBar.currentConfigGroup = ["General"]
taskBar.writeConfig("launchers",["preferred://filemanager","applications:org.kde.kwrite.desktop","applications:org.kde.konsole.desktop","applications:org.kde.discover.desktop","applications:freetube.desktop","preferred://browser"])

panel.addWidget("org.kde.plasma.panelspacer")

/* Next up is determining whether to add the Input Method Panel
 * widget to the panel or not. This is done based on whether
 * the system locale's language id is a member of the following
 * white list of languages which are known to pull in one of
 * our supported IME backends when chosen during installation
 * of common distributions. */
panel.addWidget("org.kde.plasma.marginsseparator")

var langIds = ["as",    // Assamese
               "bn",    // Bengali
               "bo",    // Tibetan
               "brx",   // Bodo
               "doi",   // Dogri
               "gu",    // Gujarati
               "hi",    // Hindi
               "ja",    // Japanese
               "kn",    // Kannada
               "ko",    // Korean
               "kok",   // Konkani
               "ks",    // Kashmiri
               "lep",   // Lepcha
               "mai",   // Maithili
               "ml",    // Malayalam
               "mni",   // Manipuri
               "mr",    // Marathi
               "ne",    // Nepali
               "or",    // Odia
               "pa",    // Punjabi
               "sa",    // Sanskrit
               "sat",   // Santali
               "sd",    // Sindhi
               "si",    // Sinhala
               "ta",    // Tamil
               "te",    // Telugu
               "th",    // Thai
               "ur",    // Urdu
               "vi",    // Vietnamese
               "zh_CN", // Simplified Chinese
               "zh_TW"] // Traditional Chinese

if (langIds.indexOf(languageId) != -1) {
    panel.addWidget("org.kde.plasma.kimpanel");
}

panel.addWidget("org.kde.plasma.systemtray")
panel_clock = panel.addWidget("org.kde.plasma.digitalclock")
panel_clock.currentConfigGroup = ["Appearance"]
panel_clock.writeConfig("fontSize", "22")
panel_clock.writeConfig("autoFontAndSize", "false")
panel_clock.writeConfig("fontFamily", "Sans Serif")
panel.addWidget("org.kde.plasma.marginsseparator")
//MinimizeAll
panel_minimize = panel.addWidget("org.kde.plasma.showdesktop")
//panel.addWidget("org.kde.plasma.trash")

plasma.loadSerializedLayout(layout);

