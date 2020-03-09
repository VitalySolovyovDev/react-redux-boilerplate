# react-redux-boilerplate
Use to quickly start developing.

Contains configurations:
  - webpack
  - babel
  - ESLint

Includes redux, router, styled-components, redux-thunk

Run npm i command to install packages.

Structure:

    - components  - _components without redux connection_
    - containers  - _decorators with some logic, that are sending components to render_
        - root    - _root container, Router point_
    - routes      - _routing structure_
    - store       - _redux store_
    - reducer     - _all redux reducers_
    - middlewares - _middlewares_
    - constants   - _all constants_