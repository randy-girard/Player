// ==========================================================================
// Project:   Player.assetsController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Player */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Player.assetsController = SC.ArrayController.create(
/** @scope Player.assetsController.prototype */ {

  // TODO: Add your own code here.
  //sortStateDidChange: function() {
  //  var column = this.get('sortedColumn');
  //  if( column == null || column.get('sortState') == null ) { return; }

  //  sort = column.get('sortState') == SC.SORT_ASCENDING ? 'ASC' : 'DESC';
  //  var query = SC.Query.local(Player.Asset, { orderBy: column.get('key')+' '+sort });
  //  this.set('content', Player.store.find(query));
  //}.observes('*sortedColumn.sortState'),

}) ;
