# tracker

JSON data based responsive tracker (mobile, desktop) with JS, HTML, CSS. Have an overview of several topics (categories) and further information via interaction (tooltip)
| display of a single category | description |
|:----------------------------:|:-----------|
| ![alt text](https://github.com/anneKoethke/tracker/blob/master/res/img/showcase_pngs/tracker_5_aufbau.png "topic == category") | underscore is used to fuse the data (template with JSON) to the category (via class). Subcategories (h3) can be added to every single item if needed. There are four states (not yet started, started, fulfilled, terminated) represented by easy readable SVGs for preattentive perception. Each item has a tooltip with furhter information (see bellow). |

&nbsp;

## The desktop version (tooltip active)

Up to three columns with the categories, changes based on width of the page or container to two or one column. Highlighting the title (+ pointer cursor) to empahsis the possibility to click ont a title for further info. The tooltip repeats the title and state (img -> text) and adds further info (two paragraphs and an optional link with link text). 
![alt text](https://github.com/anneKoethke/tracker/blob/master/res/img/showcase_pngs/tracker_2_desktop_tooltip.png "Desktop version with Tooltip")

&nbsp;

## The mobile version 

| (no interaction) | with tooltip | description |
|:----------------:|:------------:|:------------| 
| ![alt text](https://github.com/anneKoethke/tracker/blob/master/res/img/showcase_pngs/tracker_3_mobile.png "Mobile version") | ![alt text](https://github.com/anneKoethke/tracker/blob/master/res/img/showcase_pngs/tracker_4_mobile_tooltip.png "Mobile version with Tooltip") | Display always in one column. Mobile tooltips start at the bottom of the title they belong to. Towards the bottom of the html (last category), the tooltip display turns upwards (so nothing is cut off). |
