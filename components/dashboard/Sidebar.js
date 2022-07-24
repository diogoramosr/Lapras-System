import Overlay from './provider/overlay';
import TopNavigation from './topnavigation';
import DashboardProvider from './provider/context';
import SideNavigation from './sidenavigation';

const style = {
  container: `bg-white h-screen overflow-hidden relative`,
  mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4`,
  main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4`,
};

export default function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className="flex items-start">
          <Overlay />
          <SideNavigation mobilePosition="right" />
          <div className={style.mainContainer}>
            <TopNavigation />
            
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
