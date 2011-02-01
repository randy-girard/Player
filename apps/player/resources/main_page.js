// ==========================================================================
// Project:   Player - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Player */

// This page describes the main user interface for your application.  
Player.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'middleView topView bottomView'.w(),
    
    topView: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 36 },
      anchorLocation: SC.ANCHOR_TOP
    }),
    
    middleView: SC.SplitView.design({
      layout: { left: 0, top: 36, right: 0, bottom: 32 },
      layoutDirection: SC.LAYOUT_HORIZONTAL,
      autoresizeBehavior: SC.RESIZE_TOP_LEFT,
      defaultThickness: 0.8,
      backgroundColor: 'white',
      topLeftView: SC.ScrollView.design({
        hasHorizontalScroller: NO,
        layout: { top: 36, bottom: 32, left: 0, right: 0 },
        backgroundColor: 'white',
        //Here is the original list view, which is bound to the tasksController
        contentView: SC.ListView.design({
        })
      }),
      bottomRightView: SC.TableView.design({
        layout: { left: 0, right: 0, top: 36, bottom: 0 },
        backgroundColor: "white", 
        columns: [ 
          SC.TableColumn.create({ 
            key:   'title', 
            label: 'Title', 
            width: 50
          }), 
          SC.TableColumn.create({ 
            key:   'artist', 
            label: 'Artist', 
            width: 50 
          }), 
          SC.TableColumn.create({ 
            key:   'album', 
            label: 'Album', 
            width: 90 
          }) 
        ],

        contentBinding:   'Player.assetsController.arrangedObjects', 
        selectionBinding: 'Player.assetsController.selection',
        sortedColumnBinding: 'Player.assetsController.sortedColumn',
        selectOnMouseDown: YES,
        exampleView: SC.TableRowView,
        recordType: Player.Asset
      })
    }),
    
    bottomView: SC.ToolbarView.design({
      layout: { bottom: 0, left: 0, right: 0, height: 32 },
      anchorLocation: SC.ANCHOR_BOTTOM
    })
  })
});
