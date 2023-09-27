import { ComponentType } from 'react';
import Navigation from './navigation';

const Panel = (Component: ComponentType) => {
  return () => (
    <div className="app-container">
      <header className="app-header">Kid Stac</header>
      <div className="app-content">
        <div className="app-content-panel">
          <Navigation />
        </div>
        <div>
          <Component />
        </div>
      </div>
    </div>
  );
};

export default Panel;
