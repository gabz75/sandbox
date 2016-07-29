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
  'y': 'screenSizeY/2',
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
  'x': 'screenSizeX/2',
  'y': 'screenOriginY',
  'width': 'screenSizeX/2',
  'height': 'screenSizeY'
});

var throwUp = slate.operation('throw', {
  screen: 0,
});

var throwDown = slate.operation('throw', {
  screen: 1,
});

var twoMonitorLayout = slate.layout('twoMonitorLayout', {
  '1Password 6': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
  'Finder': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
  'Google Chrome': {
    'operations': [throwUp],
    'repeat': true,
    'sort-title': true,
  },
  'Sketch': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
  'Slack': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
  'Spotify': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
  'Sublime Text': {
    'operations': [throwUp],
    'repeat': true,
    'sort-title': true,
  },
  'Terminal': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
});

var oneMonitorLayout = slate.layout('oneMonitorLayout', {
  '1Password 6': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
  'Finder': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
  'Google Chrome': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
  'Sketch': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
  'Slack': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
  'Spotify': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
  'Sublime Text': {
    'operations': [throwDown],
    'repeat': true,
    'sort-title': true,
  },
  'Terminal': {
    'operations': [throwDown],
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
  'up:ctrl,alt,cmd': moveUp,
  'down:ctrl,alt,cmd': moveDown,
  'left:ctrl,alt,cmd': moveLeft,
  'right:ctrl,alt,cmd': moveRight,
  'up:ctrl,cmd': throwUp,
  'down:ctrl,cmd': throwDown,
  'right:ctrl,cmd': throwUp,
  'left:ctrl,cmd': throwDown,
  '=:ctrl,alt,cmd': slate.operation('layout', { 'name': twoMonitorLayout }),
  '-:ctrl,alt,cmd': slate.operation('layout', { 'name': oneMonitorLayout }),
  '0:ctrl,alt,cmd': slate.operation('layout', { 'name': maximizeLayout }),
  '1:ctrl,alt,cmd': slate.operation('relaunch'),
});
