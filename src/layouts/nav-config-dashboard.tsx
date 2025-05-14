import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} />;

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
};

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-home'),
  },
  {
    title: 'My Projects',
    path: '/project',
    icon: icon('ic-image'),
  },
  {
    title: 'Ai Rules Generator',
    path: '/rulesgenerator',
    icon: icon('ic-starts'),
    // info: (
    //   <Label color="error" variant="inverted">
    //     +3
    //   </Label>
    // ),
  },
  {
    title: 'Create Your Card Design',
    path: '/createcard',
    icon: icon('ic-design'),
  },
  {
    title: 'Order History',
    path: '/orderhistory',
    icon: icon('ic-history'),
  },
  {
    title: 'Modify Cards',
    path: '/modifycards',
    icon: icon('ic-cards'),
  },
  // {
  //   title: 'Profile',
  //   path: '/profile',
  //   icon: icon('ic-cards'),
  // },
  {
    title: 'Settings',
    path: '/settings',
    icon: icon('ic-setting'),
  },
  {
    title: 'Logout',
    path: '/sign-up',
    icon: icon('ic-logout'),
  },
];
