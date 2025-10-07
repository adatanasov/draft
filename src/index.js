import { createRoot } from 'react-dom/client';
import DraftApp from './1vs1/src/DraftApp';
import './1vs1/src/assets/index.css';
  
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<DraftApp />);