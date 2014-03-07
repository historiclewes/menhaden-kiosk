(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['collection.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row artifact\">\n  <div id=\"artifact-image\" class=\"large-4  columns artifact-image\">\n    <img src=\"";
  if (stack1 = helpers.image_src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n  </div>\n  <div class=\"large-8 columns\">\n    <h2>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n    <div class=\"large-12 artifact-info\">\n      ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"artifact-divider\"></div>\n\n    <div class=\"row\">\n      <div class=\"large-4 columns description block-radius\">\n        <div class=\"large-12\">\n          <h6 class=\"meddon text-center\">Description</h6>\n          <h5>Early Date:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.early_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.early_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n        <div class=\"large-12\">\n          <h5>Late Date:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.late_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.late_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n        <div class=\"large-12\">\n          <h5>Condition:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.condition) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.condition; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n      </div>\n      <div class=\"large-5 columns  categorical-info block-radius\">\n        <div class=\"large-12\">\n          <h6 class=\"meddon text-center\">Categorical Information</h6>\n          <h5>Collection:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.collection) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.collection; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n        <div class=\"large-12\">\n          <h5>Object ID:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.object_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.object_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n        <div class=\"large-12\">\n          <h5>Object Name:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.object_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.object_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n        <div class=\"large-12\">\n          <h5>Sterms:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.sterms) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sterms; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
  return buffer;
  });
templates['collections.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <a href=\"#\" onclick=\"Kiosk.getNode('collection', '";
  if (stack1 = helpers.nid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'); return false;\">\n            <div class=\"large-12 columns artifact-teaser\">\n              <div class=\"large-3 columns\">\n                <img src=\"";
  if (stack1 = helpers.image_src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n              </div>\n              <div class=\"large-9 columns\">\n                <h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\n\n                ";
  if (stack1 = helpers.teaser) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.teaser; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                <p class=\"right collections meddon pointer-left\">Learn More</p>\n              </div>\n            </div>\n          </a>\n        ";
  return buffer;
  }

  buffer += "<div class=\"row\" id=\"collection\">\n  <script type=\"text/javascript\">Kiosk.getSlideshow('slideshow', 'collections_slideshow');</script>\n  <div class=\"large-5 columns slideshow\">\n    <div class=\"large-12 collection-slideshow\">\n      <div id=\"slideshow\" style=\"width: 419px;\"></div>\n    </div>\n    <div class=\"large-12 block-radius collections-cta\">\n      <h5 class=\"meddon\">Learn About Artifacts</h5>\n      <p>Scroll through our many artifacts on the right. Click on any you wish to view more information on!</p>\n    </div>\n  </div>\n\n  <div class=\"large-6 columns\" id=\"collection-teaser\">\n    <div class=\"collection-teaser-top\"></div>\n    <div class=\"content large-12 columns\">\n      ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div class=\"collection-teaser-bottom\"></div>\n  </div>\n</div>";
  return buffer;
  });
templates['conditions.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2 class=\"block-title text-center\">Current Conditions</h2>\n\n<div class=\"large-12 columns\" id=\"current-conditions\">\n  <div class=\"large-4 columns\" id=\"temperature\">\n    <h4 class=\"text-center\">Temperature</h4>\n    <img src=\"http://placehold.it/125x125\"/>\n\n    <div class=\"row\">\n      <div class=\"large-12 columns\">\n        <h4 class=\"left\">Air:</h4>\n        <span class=\"red-span\">";
  if (stack1 = helpers.air_temperature) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.air_temperature; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n      </div>\n      <div class=\"large-12 columns\">\n        <h4 class=\"left\">Water:</h4>\n        <span class=\"red-span\">";
  if (stack1 = helpers.water_temperature) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.water_temperature; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"large-4 columns \" id=\"pressure\">\n    <h4 class=\"text-center\">Air Pressure</h4>\n    <img src=\"http://placehold.it/125x125\"/>\n\n    <div class=\"row\">\n      <div class=\"large-12 columns\">\n        <span class=\"red-span text-center\">";
  if (stack1 = helpers.air_pressure) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.air_pressure; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n      </div>\n      <div class=\"large-12 columns\">\n        <h4 class=\"text-center\">";
  if (stack1 = helpers.air_pressure_change) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.air_pressure_change; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n      </div>\n    </div>\n  </div>\n  <div class=\"large-4 columns\" id=\"windspeed\">\n    <h4 class=\"text-center\">Wind Speed</h4>\n    <img src=\"http://placehold.it/125x125\"/>\n\n    <div class=\"row\">\n      <div class=\"large-12 columns\">\n        <span class=\"red-span\">";
  if (stack1 = helpers.wind_speed) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.wind_speed; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        <h4 class=\"left\">";
  if (stack1 = helpers.wind_direction) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.wind_direction; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n      </div>\n      <div class=\"large-12 columns\">\n        <h4 class=\"left\">Gusts:</h4>\n        <span class=\"red-span\">";
  if (stack1 = helpers.wind_gusts) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.wind_gusts; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n      </div>\n    </div>\n  </div>\n</div>";
  return buffer;
  });
templates['footer.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"large-10 columns\">\n    <nav id=\"footer-navigation\">\n      <ul class=\"inline-list\">\n        <li class=\"home inactive\"><a id=\"home\" href=\"#\" onclick=\"Kiosk.getPage('home'); return false;\">Home</a></li>\n        <li class=\"the-bay inactive\"><a id=\"the-bay\" href=\"#\" onclick=\"Kiosk.getNews('menhaden', 20); return false;\">News</a></li>\n        <li class=\"history inactive\"><a href=\"#\" onclick=\"Kiosk.getNode('node', 323); return false;\">History</a></li>\n        <li class=\"collection inactive\"><a href=\"#\" onclick=\"Kiosk.getCollections(); return false;\">Collection</a></li>\n        <li class=\"videos inactive\"><a href=\"#\" onclick=\"Kiosk.getVideos(); return false;\">Videos</a></li>\n        <li class=\"cannonball-house inactive\"><a href=\"#\" onclick=\"Kiosk.getNode('node', 368); return false;\">Cannonball House</a></li>\n      </ul>\n    </nav>\n  </div>\n  <div class=\"large-2 columns text-center\" id=\"newsletter\">\n\n    <a href=\"#\" data-reveal-id=\"newsletter-signup\">\n    <img src=\"images/newsletter-signup-bg.png\" />\n\n    </a>\n  </div>\n</div>";
  });
templates['header.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"large-12 columns\">\n    <div class=\"large-6 large-offset-3 columns\" id=\"page-title\"><h2>Lewes Menhaden Fishing</h2></div>\n\n    <div id=\"search\" class=\"large-3 columns\">\n      <div class=\"search-wrapper\">\n        <input type=\"text\" id=\"kiosk-search\" class=\"large-1 columns\" placeholder=\"Search\">\n        <button type=\"submit\" value=\"\" class=\"telescope-button\" onclick=\"Kiosk.getSearchResults(); return false;\"></button>\n      </div>\n    </div>\n  </div>\n</div>";
  });
templates['home.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"row\" id=\"homepage\">\n  <div class=\"large-7 columns slideshow\">\n   <script type=\"text/javascript\">Kiosk.getSlideshow('slideshow', 'homepage_slideshow');</script>\n   <a href=\"#\" class=\"collections rokkitt\" onclick=\"Kiosk.getCollections(); return false;\">View the Collection</a>\n    <div class=\"slideshow-frame\"><div id=\"slideshow\" style=\"width: 575px;\"></div></div>\n  </div>\n\n  <div class=\"large-5 columns\">\n    <div class=\"large-6 columns\" id=\"videos-cta\">\n      <div class=\"large-6 right\"><h2 class=\"red-header\"><a href=\"#\" onclick=\"Kiosk.getVideos(); return false;\">Videos</a></h2>\n        <p>This gentleman was surely not equipped to watch videos but you certainly are.</p>\n      </div>\n     <a class=\"meddon\" href=\"#\" onclick=\"Kiosk.getVideos(); return false;\">Watch</a></div>\n    <div class=\"large-6 columns\" id=\"history-cta\">\n      <h2 class=\"red-header\"><a href=\"#\" onclick=\"Kiosk.getNode('node', 323); return false;\">History</a></h2>\n\n      <p>Explore the ebb and flow of a fishing industry once central to our local economy.</p>\n      <a class=\"meddon\" href=\"#\" onclick=\"Kiosk.getNode('node', 323); return false;\">Learn</a>\n    </div>\n    <div class=\"large-12 columns\" id=\"whale-divider\">\n    </div>\n    <div class=\"large-9 columns block-radius\" id=\"homepage-cta\">\n      <script type=\"text/javascript\">Kiosk.getHomeNews('menhaden');</script>\n      <h2 class=\"text-center red-header\"><a href=\"#\" onclick=\"Kiosk.getNews('menhaden', 20); return false;\">News</a></h2>\n      <div class=\"homepage-news\"></div>\n    </div>\n  </div>\n</div>";
  });
templates['homepage_news.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h4><a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.permalink)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a></h4>\n<p>";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.permalink)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\" class=\"right collections meddon pointer-left\">Read</a>";
  return buffer;
  });
templates['navigation.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"inactive\"><a href=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n    ";
  return buffer;
  }

  buffer += "<section class=\"top-bar-section\">\n  <ul class=\"left\">\n    ";
  stack1 = helpers.each.call(depth0, depth0.navigation, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</section>";
  return buffer;
  });
templates['newsletter.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"small-10 columns\">\n  <input type=\"email\" id=\"newsletter-email-address\" placeholder=\"Enter e-mail address here\">\n</div>\n<div class=\"small-2 columns\">\n  <a href=\"#\" class=\"button radius\" onclick=\"Kiosk.newsletterSignup(); return false;\">Signup!</a>\n</div>";
  });
templates['node.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n  <div id=\"artifact-image\" class=\"large-4  columns artifact-image\">\n    <img src=\"";
  if (stack1 = helpers.image_src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n  </div>\n  <div class=\"large-7 columns\">\n    <h2>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n    ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>";
  return buffer;
  });
templates['rss.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <h3><a href=\"";
  if (stack1 = helpers.permalink) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.permalink; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></h3>\n      <time>";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</time>\n\n      <p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n      <p><a href=\"";
  if (stack1 = helpers.permalink) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.permalink; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">Read More &raquo;</a></p>\n    ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>";
  return buffer;
  });
templates['search.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <p>Your search for \"";
  if (stack1 = helpers.keywords) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.keywords; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" yielded no results. Please try another search term.</p>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a href=\"#\" onclick=\"Kiosk.getNode('collection', '";
  if (stack1 = helpers.nid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'); return false;\">\n          <div class=\"large-5 columns news-teaser\">\n            <h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\n\n            ";
  if (stack1 = helpers.teaser) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.teaser; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n\n            <p href=\"#\" class=\"right collections meddon pointer-left\">Learn More</p>\n          </div>\n        </a>\n      ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  <div class=\"large-9 large-offset-1\">\n    <h2>Search Results for \"";
  if (stack1 = helpers.keywords) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.keywords; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"</h2>\n\n    ";
  stack1 = helpers['if'].call(depth0, depth0.empty, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = helpers['if'].call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
templates['slideshow.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li><img src=\"";
  if (stack1 = helpers.src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" /></li>\n    ";
  return buffer;
  }

  buffer += "<ul data-orbit>\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>";
  return buffer;
  });
templates['videos.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <ul class=\"large-block-grid-3\">\n        ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <li>\n            <a href=\"#\" data-reveal-id=\"video-";
  if (stack1 = helpers.vimeo_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.vimeo_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n              <h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\n              <img class=\"block-radius\" src=\"";
  if (stack1 = helpers.thumbnail_medium) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.thumbnail_medium; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n            </a>\n          </li>\n\n        <div id=\"video-";
  if (stack1 = helpers.vimeo_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.vimeo_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"reveal-modal large-8\">\n          <div class=\"flex-video\" style=\"-webkit-transform-origin: 0px 0px; opacity: 0; -webkit-transform: scale(1, 1); -webkit-transition: opacity 0.1s linear; transition: opacity 0.1s linear; display: none;\">\n            <iframe src=\"http://player.vimeo.com/video/";
  if (stack1 = helpers.vimeo_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.vimeo_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff\" width=\"100%\" height=\"400\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n            <a class=\"close-reveal-modal\">x</a>\n          </div>\n        </div>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "\n\n  ";
  }

  buffer += "<div class=\"row\" id=\"videos\">\n  <div class=\"large-8 large-offset-2\">\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </div>\n</div>\n\n";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });
})();