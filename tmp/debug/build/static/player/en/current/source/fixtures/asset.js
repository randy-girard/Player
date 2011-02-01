// ==========================================================================
// Project:   Player.Asset Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Player */

sc_require('models/asset');

Player.Asset.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  { guid: 1,
    title: "Title",
    artist: "Artist",
    album: "Album" },

  { guid: 2,
    title: "Title 2",
    artist: "Artist 2",
    album: "Album 2" }
  // { guid: 1,
  //   firstName: "Michael",
  //   lastName: "Scott" },
  //
  // { guid: 2,
  //   firstName: "Dwight",
  //   lastName: "Schrute" },
  //
  // { guid: 3,
  //   firstName: "Jim",
  //   lastName: "Halpert" },
  //
  // { guid: 4,
  //   firstName: "Pam",
  //   lastName: "Beesly" },
  //
  // { guid: 5,
  //   firstName: "Ryan",
  //   lastName: "Howard" }

];
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('player');