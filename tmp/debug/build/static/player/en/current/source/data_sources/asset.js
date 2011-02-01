// ==========================================================================
// Project:   Player.AssetDataSource
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Player */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/

sc_require('models/asset');

Player.AssetDataSource = SC.DataSource.extend(
/** @scope Player.AssetDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  // 

  _didFetchAssets: function(response, params) {
    var query = params.query;
    var store = params.store;
    console.log('hi');
    if( SC.$ok(response) ) {
      store.loadRecords(Player.Asset, response.get('body').content);
      store.dataSourceDidFetchQuery(query);
    }
    else {
      store.dataSourceDidErrorQuery(query, response);
    }
  },

  fetch: function(store, query) {
    if(query == Player.ASSETS_QUERY) {
      SC.Request.getUrl('/assets.json')
        .set('isJSON', YES)
        .notify(this, '_didFetchAssets', { query: query, store: store })
        .send();
      return YES;
    }

    return NO;
  }
/*
  _getFromUri: function(uri, options) {
    var notifyMethod;
    if (options.isQuery) {
      notifyMethod = this._didGetQuery;
    } else {
      notifyMethod = this._didRetrieveRecords;
    }
      
    SC.Request.getUrl(uri)
      .header({'Accept': 'application/json'}).json()
      .notify(this, notifyMethod, options)
      .send();
    return YES;
  },
  
  fetch: function(store, query) {
      options = {
        store:    store,
        query:    query,
        isQuery:  YES
      };
      console.log("Fetch");
      //if (query === Player.ASSETS_QUERY) {
        console.log("people query");
        options['type'] = Player.Asset;
        return this._getFromUri('/assets', options);
      //}
    //return NO;
  },
  
  _didGetQuery: function(response, params) {
      var store     = params.store,
          query     = params.query, 
          type      = params.type,
          deffered  = params.deffered;

      if (SC.ok(response)) {
        // notify store that we handled the fetch
        if (query.get('isLocal')) {
            console.log("fetch local");
            var storeKeys = store.loadRecords(type, response.get('body'));
            store.dataSourceDidFetchQuery(query);
        } else if (deffered) {
          console.log("fetch remote deffered");
          var storeKeys = response.get('body').map(function(id) {
            return Md.Person.storeKeyFor(id);
          }, this);
          store.loadQueryResults(query, storeKeys);
        } else {
          console.log("fetch remote");
          var storeKeys = store.loadRecords(type, response.get('body'));
          store.loadQueryResults(query, storeKeys);
        }
      // handle error case
      } else store.dataSourceDidErrorQuery(query, response);
  },
  _didRetrieveRecords: function(response, params) {  
    var store = params.store,
        type = params.type,
        data;
    if (SC.ok(response)) {
      data = response.get('body');
      console.log(data, type);
      store.loadRecords(type, data.isEnumerable ? data : [data]);
    } else store.dataSourceDidError(storeKey, response.get('body'));
  }
/*
  fetch: function(store, query) {

    // TODO: Add handlers to fetch data for specific queries.  
    // call store.dataSourceDidFetchQuery(query) when done.
    SC.Request.getUrl('/assets').header({'Accept': 'application/json'}).json()
      .notify(this, 'didFetchTasks', store, query)
      .send();
    return YES;

    //return NO ; // return YES if you handled the query
  },

  didFetchTasks: function(response, store, query)
    if (SC.ok(response)) {
       var storeKeys = store.loadRecords(Todos.Task, response.get('body').content);
   
    store.loadQueryResults(query, storeKeys);
    } else store.dataSourceDidErrorQuery(query, response);
  },
*/
  
}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('player');