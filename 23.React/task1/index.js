const rootElement = document.getElementById('root');

const view = React.createElement(
    'ul',
    null,
    React.createElement('li', null, '1 cup Pine Nuts'),
    React.createElement('li', null, '1 burger'),
    React.createElement('li', null, '2 milks'),
    React.createElement('li', null, '3 beers'),
    React.createElement('li', null, '1 eurocrem'),
    React.createElement('li', null, '2 pancakes'),
);

ReactDOM.render(
    view,
    rootElement
);
