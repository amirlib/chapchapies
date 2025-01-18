import { AllIcons } from '../assets';

export const getIconUrlFromName = (name: AllIcons) => (name ? `assets/icons/${name}.svg` : null);
