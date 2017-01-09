slate.configAll({
  'defaultToCurrentScreen': true,
  'checkDefaultsOnLoad': true,
  'focusCheckWidthMax': 3000,
  'orderScreensLeftToRight': true
});

var maximize = slate.operation('move', {
  'x': 'screenOriginX',
  'y': 'screenOriginY',
  'width': 'screenSizeX',
  'height': 'screenSizeY'
});

var moveUp = slate.operation('move', {
  'x': 'screenOriginX',
  'y': 'screenOriginY',
  'width': 'screenSizeX',
  'height': 'screenSizeY/2'
});

var moveDown = slate.operation('move', {
  'x': 'screenOriginX',
  'y': 'screenOriginY+screenSizeY/2',
  'width': 'screenSizeX',
  'height': 'screenSizeY/2'
});

var moveLeft = slate.operation('move', {
  'x': 'screenOriginX',
  'y': 'screenOriginY',
  'width': 'screenSizeX/2',
  'height': 'screenSizeY'
});

var moveRight = slate.operation('move', {
  'x': 'screenOriginX+screenSizeX/2',
  'y': 'screenOriginY',
  'width': 'screenSizeX/2',
  'height': 'screenSizeY'
});

var moveCornerTopLeft = slate.operation('move', {
  'x': 'screenOriginX',
  'y': 'screenOriginY',
  'width': 'screenSizeX/2',
  'height': 'screenSizeY/2'
});

var moveCornerTopRight = slate.operation('move', {
  'x': 'screenOriginX+screenSizeX/2',
  'y': 'screenOriginY',
  'width': 'screenSizeX/2',
  'height': 'screenSizeY/2'
});

var moveCornerBottomRight = slate.operation('move', {
  'x': 'screenOriginX+screenSizeX/2',
  'y': 'screenOriginY+screenSizeY/2',
  'width': 'screenSizeX/2',
  'height': 'screenSizeY/2'
});

var moveCornerBottomLeft = slate.operation('move', {
  'x': 'screenOriginX',
  'y': 'screenOriginY+screenSizeY/2',
  'width': 'screenSizeX/2',
  'height': 'screenSizeY/2'
});

var moveToMonitorTwo = slate.operation('throw', {
  screen: 2,
});

var moveToMonitorOne = slate.operation('throw', {
  screen: 1,
});

var moveToMonitorZero = slate.operation('throw', {
  screen: 0,
});

var moveToNext = slate.operation('throw', {
  screen: 'next',
});

var moveToPrevious = slate.operation('throw', {
  screen: 'previous',
});

var threeMonitorLayout = slate.layout('threeMonitorLayout', {
  '1Password 6': {
    'operations': [moveToMonitorTwo],
    'repeat': true,
    'sort-title': true,
  },
  'Finder': {
    'operations': [moveToMonitorTwo],
    'repeat': true,
    'sort-title': true,
  },
  'Notes': {
    'operations': [moveToMonitorTwo],
    'repeat': true,
    'sort-title': true,
  },
  'Google Chrome': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Sketch': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Slack': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Spotify': {
    'operations': [moveToMonitorTwo],
    'repeat': true,
    'sort-title': true,
  },
  'Sublime Text': {
    'operations': [moveToMonitorOne],
    'repeat': true,
    'sort-title': true,
  },
  'Terminal': {
    'operations': [moveToMonitorTwo],
    'repeat': true,
    'sort-title': true,
  },
});

var twoMonitorLayout = slate.layout('twoMonitorLayout', {
  '1Password 6': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Finder': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Notes': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Google Chrome': {
    'operations': [moveToMonitorOne],
    'repeat': true,
    'sort-title': true,
  },
  'Sketch': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Slack': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Spotify': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Sublime Text': {
    'operations': [moveToMonitorOne],
    'repeat': true,
    'sort-title': true,
  },
  'Terminal': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
});

var oneMonitorLayout = slate.layout('oneMonitorLayout', {
  '1Password 6': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Finder': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
 'Notes': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Google Chrome': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Sketch': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Slack': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Spotify': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Sublime Text': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
  'Terminal': {
    'operations': [moveToMonitorZero],
    'repeat': true,
    'sort-title': true,
  },
});

var maximizeLayout = slate.layout('maximizeLayout', {
  '1Password 6': {
    'operations': [maximize],
    'repeat': true,
    'sort-title': true,
  },
  'Finder': {
    'operations': [maximize],
    'repeat': true,
    'sort-title': true,
  },
  'Notes': {
    'operations': [maximize],
    'repeat': true,
    'sort-title': true,
  },
  'Google Chrome': {
    'operations': [maximize],
    'repeat': true,
    'sort-title': true,
  },
  'Sketch': {
    'operations': [maximize],
    'repeat': true,
    'sort-title': true,
  },
  'Slack': {
    'operations': [maximize],
    'repeat': true,
    'sort-title': true,
  },
  'Spotify': {
    'operations': [maximize],
    'repeat': true,
    'sort-title': true,
  },
  'Sublime Text': {
    'operations': [maximize],
    'repeat': true,
    'sort-title': true,
  },
  'Terminal': {
    'operations': [maximize],
    'repeat': true,
    'sort-title': true,
  },
});

slate.bindAll({
  'm:ctrl,alt,cmd': maximize,
  'up:ctrl,cmd,shift': moveCornerTopLeft,
  'right:ctrl,cmd,shift': moveCornerTopRight,
  'left:ctrl,cmd,shift': moveCornerBottomLeft,
  'down:ctrl,cmd,shift': moveCornerBottomRight,
  'up:ctrl,cmd,alt': moveUp,
  'right:ctrl,cmd,alt': moveRight,
  'left:ctrl,cmd,alt': moveLeft,
  'down:ctrl,cmd,alt': moveDown,
  'left:ctrl,cmd': moveToPrevious,
  'right:ctrl,cmd': moveToNext,
  '=:ctrl,alt,cmd': slate.operation('layout', { 'name': maximizeLayout }),
  '-:ctrl,alt,cmd': slate.operation('layout', { 'name': oneMonitorLayout }),
  '0:ctrl,alt,cmd': slate.operation('layout', { 'name': twoMonitorLayout }),
  '9:ctrl,alt,cmd': slate.operation('layout', { 'name': threeMonitorLayout }),
  '1:ctrl,alt,cmd': slate.operation('relaunch'),
});
