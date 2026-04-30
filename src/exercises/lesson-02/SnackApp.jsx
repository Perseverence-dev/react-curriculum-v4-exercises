import SnackHeader from './SnackHeader.jsx';
import SnackFooter from './SnackFooter.jsx';
import SnackList from './SnackList.jsx';

export default SnackApp;

function SnackApp() {
  return (
    <div>
      <SnackHeader />
      <SnackList />
      <SnackFooter />
    </div>
  );
}
