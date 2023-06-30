import React from 'react';
import { createRoot } from 'react-dom/client'

import Application from './components/App'
const app = <Application />
createRoot(document.getElementById('root')).render(app)
