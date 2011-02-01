// ==========================================================================
// Project:   Player.Asset
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Player */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Player.Asset = SC.Record.extend(
/** @scope Player.Asset.prototype */ {

  // TODO: Add your own code here.
  //artist: "artist",
  //album: "album",
  //title: "title"
  artist: SC.Record.attr(String),
  album:  SC.Record.attr(String),
  title:  SC.Record.attr(String)

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('player');