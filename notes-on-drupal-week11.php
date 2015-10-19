drupal/sites/all/themes - where our themes are saved

sites DIR to keep and rest can be updated by copying over...

drupal.org/node/225125

type of layout using

core = 7.x

base theme = zen
within the zen DIR/templates/
page.tpl.php
appearance>settings>zen>show wire framing
main div id="page"

within page is header

hyperlink and if stmnt for logo exists if not nothing displayed

zen.info file

machine readable name = human readable name ie;
regions[header]         = Header

relationship b/w the 2 files

page.tpl.php
<?php print render($page['header']); ?>

zen>zen-internals>screenshot.png

use zen regions and modify html

or create own regions and page.tpl.php

