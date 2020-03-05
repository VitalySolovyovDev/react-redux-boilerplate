# react-redux-boilerplate
Use to quickly start developing.

Contains configurations:
  - webpack
  - babel
  - ESLint

Includes router, styled-components, redux-thunk

Run npm i command to install packages.

Structure:

    - containers - _decorators with some logic, that are sending components to render_
        - Root - _root container, Router and Provider point_
    - reducer - _all redux reducers_
    - middlewares - _middlewares_
    - constants - _all constants_